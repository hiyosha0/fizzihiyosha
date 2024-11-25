// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | BigTextSlice
  | AlernatingTextSlice
  | CarausalSlice
  | SkyDiveSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Item in *AlernatingText → Default → Primary → Text Group*
 */
export interface AlernatingTextSliceDefaultPrimaryTextGroupItem {
  /**
   * Heading field in *AlernatingText → Default → Primary → Text Group*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: alernating_text.default.primary.text_group[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *AlernatingText → Default → Primary → Text Group*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alernating_text.default.primary.text_group[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *AlernatingText → Default → Primary*
 */
export interface AlernatingTextSliceDefaultPrimary {
  /**
   * Text Group field in *AlernatingText → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: alernating_text.default.primary.text_group[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  text_group: prismic.GroupField<
    Simplify<AlernatingTextSliceDefaultPrimaryTextGroupItem>
  >;
}

/**
 * Default variation for AlernatingText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlernatingTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlernatingTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AlernatingText*
 */
type AlernatingTextSliceVariation = AlernatingTextSliceDefault;

/**
 * AlernatingText Shared Slice
 *
 * - **API ID**: `alernating_text`
 * - **Description**: AlernatingText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlernatingTextSlice = prismic.SharedSlice<
  "alernating_text",
  AlernatingTextSliceVariation
>;

/**
 * Default variation for BigText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *BigText*
 */
type BigTextSliceVariation = BigTextSliceDefault;

/**
 * BigText Shared Slice
 *
 * - **API ID**: `big_text`
 * - **Description**: BigText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigTextSlice = prismic.SharedSlice<
  "big_text",
  BigTextSliceVariation
>;

/**
 * Primary content in *Carausal → Default → Primary*
 */
export interface CarausalSliceDefaultPrimary {
  /**
   * Heading field in *Carausal → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: carausal.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Price Copy field in *Carausal → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carausal.default.primary.price_copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  price_copy: prismic.RichTextField;
}

/**
 * Default variation for Carausal Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarausalSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarausalSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Carausal*
 */
type CarausalSliceVariation = CarausalSliceDefault;

/**
 * Carausal Shared Slice
 *
 * - **API ID**: `carausal`
 * - **Description**: Carausal
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarausalSlice = prismic.SharedSlice<
  "carausal",
  CarausalSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Subheading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.RichTextField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Cans image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cans_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cans_image: prismic.ImageField<never>;

  /**
   * Second heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.second_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  second_heading: prismic.TitleField;

  /**
   * Second Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.second_body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  second_body: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *SkyDive → Default → Primary*
 */
export interface SkyDiveSliceDefaultPrimary {
  /**
   * Sentence field in *SkyDive → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sky_dive.default.primary.sentence
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sentence: prismic.KeyTextField;

  /**
   * Flavor field in *SkyDive → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: lemonLime
   * - **API ID Path**: sky_dive.default.primary.flavor
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  flavor: prismic.SelectField<
    "lemonLime" | "grape" | "cherry" | "strawberry" | "watermelon",
    "filled"
  >;
}

/**
 * Default variation for SkyDive Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkyDiveSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkyDiveSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SkyDive*
 */
type SkyDiveSliceVariation = SkyDiveSliceDefault;

/**
 * SkyDive Shared Slice
 *
 * - **API ID**: `sky_dive`
 * - **Description**: SkyDive
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkyDiveSlice = prismic.SharedSlice<
  "sky_dive",
  SkyDiveSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AlernatingTextSlice,
      AlernatingTextSliceDefaultPrimaryTextGroupItem,
      AlernatingTextSliceDefaultPrimary,
      AlernatingTextSliceVariation,
      AlernatingTextSliceDefault,
      BigTextSlice,
      BigTextSliceVariation,
      BigTextSliceDefault,
      CarausalSlice,
      CarausalSliceDefaultPrimary,
      CarausalSliceVariation,
      CarausalSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      SkyDiveSlice,
      SkyDiveSliceDefaultPrimary,
      SkyDiveSliceVariation,
      SkyDiveSliceDefault,
    };
  }
}