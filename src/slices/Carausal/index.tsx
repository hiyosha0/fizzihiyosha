"use client";
import { ArrowIcon } from "@/components/ArrowIcon";
import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { WavyCircles } from "@/components/WavyCircle";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Center, Environment, View } from "@react-three/drei";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SPINS_ON_CHANGE = 8;
const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

/**
 * Props for `Carausal`.
 */
export type CarausalProps = SliceComponentProps<Content.CarausalSlice>;

/**
 * Component for "Carausal" Slices.
 */
const Carausal = ({ slice }: CarausalProps): JSX.Element => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);

  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;
    const tl = gsap.timeline();
    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    )
      .to(
        ".background, .wavy-circle-outer, .wavy-circles-inner",
        {
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);

    setCurrentFlavorIndex(nextIndex);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carausal relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmon] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />
      <h2 className="relative text-center text-5xl font-bold">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/**Left */}
        <ArrowBtn
          direction="left"
          label="Previous Flavor"
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
        />
        {/**Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.7]}>
            <FloatingCan
              ref={sodaCanRef}
              flavor={FLAVORS[currentFlavorIndex].flavor}
              floatIntensity={0.3}
              rotationIntensity={1}
            />
          </Center>
          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 0, 1]} />
        </View>
        {/**Right */}
        <ArrowBtn
          direction="right"
          label="Next Flavor"
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <PrismicRichText field={slice.primary.price_copy} />
        </div>
      </div>
    </section>
  );
};

export default Carausal;

type ArrowButtonProps = {
  direction?: "left" | "right";
  label: string;
  onClick?: () => void;
};

function ArrowBtn({ label, direction = "right", onClick }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="opacity-8 z-20 size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction == "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
