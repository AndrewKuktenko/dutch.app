import type * as VueCompositionApi from '@vue/composition-api'
import * as VueApolloComposable from '@vue/apollo-composable'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string, output: string }
  String: { input: string, output: string }
  Boolean: { input: boolean, output: boolean }
  Int: { input: number, output: number }
  Float: { input: number, output: number }
  Color: { input: any, output: any }
  DateTime: { input: any, output: any }
  Decimal: { input: any, output: any }
  HTML: { input: any, output: any }
  ISO8601DateTime: { input: any, output: any }
  JSON: { input: any, output: any }
  URL: { input: any, output: any }
  UnsignedInt64: { input: any, output: any }
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export interface ApiVersion {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']['output']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']['output']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']['output']
}

/**
 * The input fields for submitting Apple Pay payment method information for checkout.
 *
 */
export interface ApplePayWalletContentInput {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput
  /** The data for the Apple Pay wallet. */
  data: Scalars['String']['input']
  /** The header data for the Apple Pay wallet. */
  header: ApplePayWalletHeaderInput
  /** The last digits of the card used to create the payment. */
  lastDigits?: InputMaybe<Scalars['String']['input']>
  /** The signature for the Apple Pay wallet. */
  signature: Scalars['String']['input']
  /** The version for the Apple Pay wallet. */
  version: Scalars['String']['input']
}

/**
 * The input fields for submitting wallet payment method information for checkout.
 *
 */
export interface ApplePayWalletHeaderInput {
  /** The application data for the Apple Pay wallet. */
  applicationData?: InputMaybe<Scalars['String']['input']>
  /** The ephemeral public key for the Apple Pay wallet. */
  ephemeralPublicKey: Scalars['String']['input']
  /** The public key hash for the Apple Pay wallet. */
  publicKeyHash: Scalars['String']['input']
  /** The transaction ID for the Apple Pay wallet. */
  transactionId: Scalars['String']['input']
}

/** Details about the gift card used on the checkout. */
export type AppliedGiftCard = Node & {
  __typename?: 'AppliedGiftCard'
  /** The amount that was taken from the gift card by applying it. */
  amountUsed: MoneyV2
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsed` instead.
   */
  amountUsedV2: MoneyV2
  /** The amount left on the gift card. */
  balance: MoneyV2
  /**
   * The amount left on the gift card.
   * @deprecated Use `balance` instead.
   */
  balanceV2: MoneyV2
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']['output']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2
}

/** An article in an online store blog. */
export type Article = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Article'
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead.
   */
  author: ArticleAuthor
  /** The article's author. */
  authorV2?: Maybe<ArticleAuthor>
  /** The blog that the article belongs to. */
  blog: Blog
  /** List of comments posted on the article. */
  comments: CommentConnection
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String']['output']
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML']['output']
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']['output']>
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']['output']>
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The image associated with the article. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime']['output']
  /** The article’s SEO information. */
  seo?: Maybe<Seo>
  /**
   * A categorization that a article can be tagged with.
   *
   */
  tags: Array<Scalars['String']['output']>
  /** The article’s name. */
  title: Scalars['String']['output']
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
}

/** An article in an online store blog. */
export interface ArticleCommentsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** An article in an online store blog. */
export interface ArticleContentArgs {
  truncateAt?: InputMaybe<Scalars['Int']['input']>
}

/** An article in an online store blog. */
export interface ArticleExcerptArgs {
  truncateAt?: InputMaybe<Scalars['Int']['input']>
}

/** An article in an online store blog. */
export interface ArticleMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** An article in an online store blog. */
export interface ArticleMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** The author of an article. */
export interface ArticleAuthor {
  __typename?: 'ArticleAuthor'
  /** The author's bio. */
  bio?: Maybe<Scalars['String']['output']>
  /** The author’s email. */
  email: Scalars['String']['output']
  /** The author's first name. */
  firstName: Scalars['String']['output']
  /** The author's last name. */
  lastName: Scalars['String']['output']
  /** The author's full name. */
  name: Scalars['String']['output']
}

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export interface ArticleConnection {
  __typename?: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<Article>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export interface ArticleEdge {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of ArticleEdge. */
  node: Article
}

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeys {
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** Represents a generic custom attribute, such as whether an order is a customer's first. */
export interface Attribute {
  __typename?: 'Attribute'
  /**
   * The key or name of the attribute. For example, `"customersFirstOrder"`.
   *
   */
  key: Scalars['String']['output']
  /**
   * The value of the attribute. For example, `"true"`.
   *
   */
  value?: Maybe<Scalars['String']['output']>
}

/** The input fields for an attribute. */
export interface AttributeInput {
  /** Key or name of the attribute. */
  key: Scalars['String']['input']
  /** Value of the attribute. */
  value: Scalars['String']['input']
}

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export type AutomaticDiscountApplication = DiscountApplication & {
  __typename?: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']['output']
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents a cart line common fields. */
export interface BaseCartLine {
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>
}

/** Represents a cart line common fields. */
export interface BaseCartLineAttributeArgs {
  key: Scalars['String']['input']
}

/**
 * An auto-generated type for paginating through multiple BaseCartLines.
 *
 */
export interface BaseCartLineConnection {
  __typename?: 'BaseCartLineConnection'
  /** A list of edges. */
  edges: Array<BaseCartLineEdge>
  /** A list of the nodes contained in BaseCartLineEdge. */
  nodes: Array<BaseCartLine>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one BaseCartLine and a cursor during pagination.
 *
 */
export interface BaseCartLineEdge {
  __typename?: 'BaseCartLineEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of BaseCartLineEdge. */
  node: BaseCartLine
}

/** An online store blog. */
export type Blog = HasMetafields & Node & OnlineStorePublishable & {
  __typename?: 'Blog'
  /** Find an article by its handle. */
  articleByHandle?: Maybe<Article>
  /** List of the blog's articles. */
  articles: ArticleConnection
  /** The authors who have contributed to the blog. */
  authors: Array<ArticleAuthor>
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   *
   */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /** The blog's SEO information. */
  seo?: Maybe<Seo>
  /** The blogs’s title. */
  title: Scalars['String']['output']
}

/** An online store blog. */
export interface BlogArticleByHandleArgs {
  handle: Scalars['String']['input']
}

/** An online store blog. */
export interface BlogArticlesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ArticleSortKeys>
}

/** An online store blog. */
export interface BlogMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** An online store blog. */
export interface BlogMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export interface BlogConnection {
  __typename?: 'BlogConnection'
  /** A list of edges. */
  edges: Array<BlogEdge>
  /** A list of the nodes contained in BlogEdge. */
  nodes: Array<Blog>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export interface BlogEdge {
  __typename?: 'BlogEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of BlogEdge. */
  node: Blog
}

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 *
 */
export interface Brand {
  __typename?: 'Brand'
  /** The colors of the store's brand. */
  colors: BrandColors
  /** The store's cover image. */
  coverImage?: Maybe<MediaImage>
  /** The store's default logo. */
  logo?: Maybe<MediaImage>
  /** The store's short description. */
  shortDescription?: Maybe<Scalars['String']['output']>
  /** The store's slogan. */
  slogan?: Maybe<Scalars['String']['output']>
  /** The store's preferred logo for square UI elements. */
  squareLogo?: Maybe<MediaImage>
}

/**
 * A group of related colors for the shop's brand.
 *
 */
export interface BrandColorGroup {
  __typename?: 'BrandColorGroup'
  /** The background color. */
  background?: Maybe<Scalars['Color']['output']>
  /** The foreground color. */
  foreground?: Maybe<Scalars['Color']['output']>
}

/**
 * The colors of the shop's brand.
 *
 */
export interface BrandColors {
  __typename?: 'BrandColors'
  /** The shop's primary brand colors. */
  primary: Array<BrandColorGroup>
  /** The shop's secondary brand colors. */
  secondary: Array<BrandColorGroup>
}

/**
 * The input fields for obtaining the buyer's identity.
 *
 */
export interface BuyerInput {
  /** The identifier of the company location. */
  companyLocationId?: InputMaybe<Scalars['ID']['input']>
  /** The storefront customer access token retrieved from the [Customer Accounts API](https://shopify.dev/docs/api/customer/reference/mutations/storefrontCustomerAccessTokenCreate). */
  customerAccessToken: Scalars['String']['input']
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrand {
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** Discover. */
  Discover = 'DISCOVER',
  /** JCB. */
  Jcb = 'JCB',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Visa. */
  Visa = 'VISA',
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type Cart = HasMetafields & Node & {
  __typename?: 'Cart'
  /** The gift cards that have been applied to the cart. */
  appliedGiftCards: Array<AppliedGiftCard>
  /** An attribute associated with the cart. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** Information about the buyer that's interacting with the cart. */
  buyerIdentity: CartBuyerIdentity
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']['output']
  /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
  cost: CartCost
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']['output']
  /**
   * The delivery groups available for the cart, based on the buyer identity default
   * delivery address preference or the default address of the logged-in customer.
   *
   */
  deliveryGroups: CartDeliveryGroupConnection
  /** The discounts that have been applied to the entire cart. */
  discountAllocations: Array<CartDiscountAllocation>
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes: Array<CartDiscountCode>
  /**
   * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartEstimatedCost
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: BaseCartLineConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** A note that's associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']['output']>
  /** The total number of items in the cart. */
  totalQuantity: Scalars['Int']['output']
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']['output']
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface CartAttributeArgs {
  key: Scalars['String']['input']
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface CartDeliveryGroupsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  withCarrierRates?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface CartLinesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface CartMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface CartMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** Return type for `cartAttributesUpdate` mutation. */
export interface CartAttributesUpdatePayload {
  __typename?: 'CartAttributesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type CartAutomaticDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation'
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the allocated discount. */
  title: Scalars['String']['output']
}

/** Return type for `cartBillingAddressUpdate` mutation. */
export interface CartBillingAddressUpdatePayload {
  __typename?: 'CartBillingAddressUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Represents information about the buyer that is interacting with the cart. */
export interface CartBuyerIdentity {
  __typename?: 'CartBuyerIdentity'
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCode>
  /** The customer account associated with the cart. */
  customer?: Maybe<Customer>
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   */
  deliveryAddressPreferences: Array<DeliveryAddress>
  /** The email address of the buyer that's interacting with the cart. */
  email?: Maybe<Scalars['String']['output']>
  /** The phone number of the buyer that's interacting with the cart. */
  phone?: Maybe<Scalars['String']['output']>
  /**
   * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
   * Preferences are not synced back to the cart if they are overwritten.
   *
   */
  preferences?: Maybe<CartPreferences>
  /** The purchasing company associated with the cart. */
  purchasingCompany?: Maybe<PurchasingCompany>
}

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 *
 */
export interface CartBuyerIdentityInput {
  /** The company location of the buyer that is interacting with the cart. */
  companyLocationId?: InputMaybe<Scalars['ID']['input']>
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<CountryCode>
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']['input']>
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   * The input must not contain more than `250` values.
   */
  deliveryAddressPreferences?: InputMaybe<Array<DeliveryAddressInput>>
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']['input']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']['input']>
  /**
   * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
   * Preferences are not synced back to the cart if they are overwritten.
   *
   */
  preferences?: InputMaybe<CartPreferencesInput>
}

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export interface CartBuyerIdentityUpdatePayload {
  __typename?: 'CartBuyerIdentityUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/**
 * Represents how credit card details are provided for a direct payment.
 *
 */
export enum CartCardSource {
  /**
   * The credit card was provided by a third party and vaulted on their system.
   * Using this value requires a separate permission from Shopify.
   *
   */
  SavedCreditCard = 'SAVED_CREDIT_CARD',
}

/** The discount that has been applied to the cart line using a discount code. */
export type CartCodeDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation'
  /** The code used to apply the discount. */
  code: Scalars['String']['output']
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
}

/** The completion action to checkout a cart. */
export type CartCompletionAction = CompletePaymentChallenge

/** The required completion action to checkout a cart. */
export interface CartCompletionActionRequired {
  __typename?: 'CartCompletionActionRequired'
  /** The action required to complete the cart completion attempt. */
  action?: Maybe<CartCompletionAction>
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output']
}

/** The result of a cart completion attempt. */
export type CartCompletionAttemptResult = CartCompletionActionRequired | CartCompletionFailed | CartCompletionProcessing | CartCompletionSuccess

/** A failed completion to checkout a cart. */
export interface CartCompletionFailed {
  __typename?: 'CartCompletionFailed'
  /** The errors that caused the checkout to fail. */
  errors: Array<CompletionError>
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output']
}

/** A cart checkout completion that's still processing. */
export interface CartCompletionProcessing {
  __typename?: 'CartCompletionProcessing'
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output']
  /** The number of milliseconds to wait before polling again. */
  pollDelay: Scalars['Int']['output']
}

/** A successful completion to checkout a cart and a created order. */
export interface CartCompletionSuccess {
  __typename?: 'CartCompletionSuccess'
  /** The date and time when the job completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output']
  /** The ID of the order that's created in Shopify. */
  orderId: Scalars['ID']['output']
  /** The URL of the order confirmation in Shopify. */
  orderUrl: Scalars['URL']['output']
}

/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
export interface CartCost {
  __typename?: 'CartCost'
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
  checkoutChargeAmount: MoneyV2
  /** The amount, before taxes and cart-level discounts, for the customer to pay. */
  subtotalAmount: MoneyV2
  /** Whether the subtotal amount is estimated. */
  subtotalAmountEstimated: Scalars['Boolean']['output']
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars['Boolean']['output']
  /** The duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>
  /** Whether the total duty amount is estimated. */
  totalDutyAmountEstimated: Scalars['Boolean']['output']
  /** The tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>
  /** Whether the total tax amount is estimated. */
  totalTaxAmountEstimated: Scalars['Boolean']['output']
}

/** Return type for `cartCreate` mutation. */
export interface CartCreatePayload {
  __typename?: 'CartCreatePayload'
  /** The new cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type CartCustomDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCustomDiscountAllocation'
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the allocated discount. */
  title: Scalars['String']['output']
}

/** Preferred location used to find the closest pick up point based on coordinates. */
export interface CartDeliveryCoordinatesPreference {
  __typename?: 'CartDeliveryCoordinatesPreference'
  /**
   * The two-letter code for the country of the preferred location.
   *
   * For example, US.
   *
   */
  countryCode: CountryCode
  /** The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  latitude: Scalars['Float']['output']
  /** The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  longitude: Scalars['Float']['output']
}

/** Preferred location used to find the closest pick up point based on coordinates. */
export interface CartDeliveryCoordinatesPreferenceInput {
  /**
   * The two-letter code for the country of the preferred location.
   *
   * For example, US.
   *
   */
  countryCode: CountryCode
  /** The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  latitude: Scalars['Float']['input']
  /** The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  longitude: Scalars['Float']['input']
}

/** Information about the options available for one or more line items to be delivered to a specific address. */
export interface CartDeliveryGroup {
  __typename?: 'CartDeliveryGroup'
  /** A list of cart lines for the delivery group. */
  cartLines: BaseCartLineConnection
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddress
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOption>
  /** The type of merchandise in the delivery group. */
  groupType: CartDeliveryGroupType
  /** The ID for the delivery group. */
  id: Scalars['ID']['output']
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe<CartDeliveryOption>
}

/** Information about the options available for one or more line items to be delivered to a specific address. */
export interface CartDeliveryGroupCartLinesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 *
 */
export interface CartDeliveryGroupConnection {
  __typename?: 'CartDeliveryGroupConnection'
  /** A list of edges. */
  edges: Array<CartDeliveryGroupEdge>
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<CartDeliveryGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 *
 */
export interface CartDeliveryGroupEdge {
  __typename?: 'CartDeliveryGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroup
}

/**
 * Defines what type of merchandise is in the delivery group.
 *
 */
export enum CartDeliveryGroupType {
  /**
   * The delivery group only contains merchandise that is either a one time purchase or a first delivery of
   * subscription merchandise.
   *
   */
  OneTimePurchase = 'ONE_TIME_PURCHASE',
  /** The delivery group only contains subscription merchandise. */
  Subscription = 'SUBSCRIPTION',
}

/** Information about a delivery option. */
export interface CartDeliveryOption {
  __typename?: 'CartDeliveryOption'
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']['output']>
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodType
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']['output']>
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2
  /** The unique identifier of the delivery option. */
  handle: Scalars['String']['output']
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']['output']>
}

/**
 * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
 * Preferences are not synced back to the cart if they are overwritten.
 *
 */
export interface CartDeliveryPreference {
  __typename?: 'CartDeliveryPreference'
  /** Preferred location used to find the closest pick up point based on coordinates. */
  coordinates?: Maybe<CartDeliveryCoordinatesPreference>
  /** The preferred delivery methods such as shipping, local pickup or through pickup points. */
  deliveryMethod: Array<PreferenceDeliveryMethodType>
  /**
   * The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.
   * It accepts both location ID for local pickup and external IDs for pickup points.
   *
   */
  pickupHandle: Array<Scalars['String']['output']>
}

/** Delivery preferences can be used to prefill the delivery section at checkout. */
export interface CartDeliveryPreferenceInput {
  /** The coordinates of a delivery location in order of preference. */
  coordinates?: InputMaybe<CartDeliveryCoordinatesPreferenceInput>
  /**
   * The preferred delivery methods such as shipping, local pickup or through pickup points.
   *
   * The input must not contain more than `250` values.
   */
  deliveryMethod?: InputMaybe<Array<PreferenceDeliveryMethodType>>
  /**
   * The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.
   * It accepts both location ID for local pickup and external IDs for pickup points.
   *
   * The input must not contain more than `250` values.
   */
  pickupHandle?: InputMaybe<Array<Scalars['String']['input']>>
}

/**
 * The input fields for submitting direct payment method information for checkout.
 *
 */
export interface CartDirectPaymentMethodInput {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput
  /** The source of the credit card payment. */
  cardSource?: InputMaybe<CartCardSource>
  /** The session ID for the direct payment method used to create the payment. */
  sessionId: Scalars['String']['input']
}

/** The discounts that have been applied to the cart line. */
export interface CartDiscountAllocation {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
}

/** The discount codes applied to the cart. */
export interface CartDiscountCode {
  __typename?: 'CartDiscountCode'
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']['output']
  /** The code for the discount. */
  code: Scalars['String']['output']
}

/** Return type for `cartDiscountCodesUpdate` mutation. */
export interface CartDiscountCodesUpdatePayload {
  __typename?: 'CartDiscountCodesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Possible error codes that can be returned by `CartUserError`. */
export enum CartErrorCode {
  /** The specified address field contains emojis. */
  AddressFieldContainsEmojis = 'ADDRESS_FIELD_CONTAINS_EMOJIS',
  /** The specified address field contains HTML tags. */
  AddressFieldContainsHtmlTags = 'ADDRESS_FIELD_CONTAINS_HTML_TAGS',
  /** The specified address field contains a URL. */
  AddressFieldContainsUrl = 'ADDRESS_FIELD_CONTAINS_URL',
  /** The specified address field does not match the expected pattern. */
  AddressFieldDoesNotMatchExpectedPattern = 'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN',
  /** The specified address field is required. */
  AddressFieldIsRequired = 'ADDRESS_FIELD_IS_REQUIRED',
  /** The specified address field is too long. */
  AddressFieldIsTooLong = 'ADDRESS_FIELD_IS_TOO_LONG',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Company location not found or not allowed. */
  InvalidCompanyLocation = 'INVALID_COMPANY_LOCATION',
  /** Delivery group was not found in cart. */
  InvalidDeliveryGroup = 'INVALID_DELIVERY_GROUP',
  /** Delivery option was not valid. */
  InvalidDeliveryOption = 'INVALID_DELIVERY_OPTION',
  /** The quantity must be a multiple of the specified increment. */
  InvalidIncrement = 'INVALID_INCREMENT',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  /** The metafields were not valid. */
  InvalidMetafields = 'INVALID_METAFIELDS',
  /** The payment wasn't valid. */
  InvalidPayment = 'INVALID_PAYMENT',
  /** Cannot update payment on an empty cart */
  InvalidPaymentEmptyCart = 'INVALID_PAYMENT_EMPTY_CART',
  /** The given zip code is invalid for the provided country. */
  InvalidZipCodeForCountry = 'INVALID_ZIP_CODE_FOR_COUNTRY',
  /** The given zip code is invalid for the provided province. */
  InvalidZipCodeForProvince = 'INVALID_ZIP_CODE_FOR_PROVINCE',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The quantity must be below the specified maximum for the item. */
  MaximumExceeded = 'MAXIMUM_EXCEEDED',
  /** The quantity must be above the specified minimum for the item. */
  MinimumNotMet = 'MINIMUM_NOT_MET',
  /** The customer access token is required when setting a company location. */
  MissingCustomerAccessToken = 'MISSING_CUSTOMER_ACCESS_TOKEN',
  /** Missing discount code. */
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNote = 'MISSING_NOTE',
  /** The note length must be below the specified maximum. */
  NoteTooLong = 'NOTE_TOO_LONG',
  /** The payment method is not supported. */
  PaymentMethodNotSupported = 'PAYMENT_METHOD_NOT_SUPPORTED',
  /** The given province cannot be found. */
  ProvinceNotFound = 'PROVINCE_NOT_FOUND',
  /** A general error occurred during address validation. */
  UnspecifiedAddressError = 'UNSPECIFIED_ADDRESS_ERROR',
  /** Validation failed. */
  ValidationCustom = 'VALIDATION_CUSTOM',
  /** The given zip code is unsupported. */
  ZipCodeNotSupported = 'ZIP_CODE_NOT_SUPPORTED',
}

/** The estimated costs that the buyer will pay at checkout. The estimated cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
export interface CartEstimatedCost {
  __typename?: 'CartEstimatedCost'
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
  checkoutChargeAmount: MoneyV2
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: MoneyV2
  /** The estimated total amount for the customer to pay. */
  totalAmount: MoneyV2
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>
}

/**
 * The input fields for submitting a billing address without a selected payment method.
 *
 */
export interface CartFreePaymentMethodInput {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput
}

/** Return type for `cartGiftCardCodesUpdate` mutation. */
export interface CartGiftCardCodesUpdatePayload {
  __typename?: 'CartGiftCardCodesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The input fields to create a cart. */
export interface CartInput {
  /**
   * An array of key-value pairs that contains additional information about the cart.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>
  /**
   * The customer associated with the cart. Used to determine [international pricing]
   * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   *
   */
  buyerIdentity?: InputMaybe<CartBuyerIdentityInput>
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   * The input must not contain more than `250` values.
   */
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>
  /**
   * The case-insensitive gift card codes.
   *
   * The input must not contain more than `250` values.
   */
  giftCardCodes?: InputMaybe<Array<Scalars['String']['input']>>
  /**
   * A list of merchandise lines to add to the cart.
   *
   * The input must not contain more than `250` values.
   */
  lines?: InputMaybe<Array<CartLineInput>>
  /**
   * The metafields to associate with this cart.
   *
   * The input must not contain more than `250` values.
   */
  metafields?: InputMaybe<Array<CartInputMetafieldInput>>
  /**
   * A note that's associated with the cart. For example, the note can be a personalized message to the buyer.
   *
   */
  note?: InputMaybe<Scalars['String']['input']>
}

/** The input fields for a cart metafield value to set. */
export interface CartInputMetafieldInput {
  /** The key name of the metafield. */
  key: Scalars['String']['input']
  /**
   * The type of data that the cart metafield stores.
   * The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).
   *
   */
  type: Scalars['String']['input']
  /**
   * The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.
   *
   */
  value: Scalars['String']['input']
}

/** Represents information about the merchandise in the cart. */
export type CartLine = BaseCartLine & Node & {
  __typename?: 'CartLine'
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>
}

/** Represents information about the merchandise in the cart. */
export interface CartLineAttributeArgs {
  key: Scalars['String']['input']
}

/** The cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineCost {
  __typename?: 'CartLineCost'
  /** The amount of the merchandise line. */
  amountPerQuantity: MoneyV2
  /** The compare at amount of the merchandise line. */
  compareAtAmountPerQuantity?: Maybe<MoneyV2>
  /** The cost of the merchandise line before line-level discounts. */
  subtotalAmount: MoneyV2
  /** The total cost of the merchandise line. */
  totalAmount: MoneyV2
}

/**
 * The estimated cost of the merchandise line that the buyer will pay at checkout.
 *
 */
export interface CartLineEstimatedCost {
  __typename?: 'CartLineEstimatedCost'
  /** The amount of the merchandise line. */
  amount: MoneyV2
  /** The compare at amount of the merchandise line. */
  compareAtAmount?: Maybe<MoneyV2>
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: MoneyV2
  /** The estimated total cost of the merchandise line. */
  totalAmount: MoneyV2
}

/** The input fields to create a merchandise line on a cart. */
export interface CartLineInput {
  /**
   * An array of key-value pairs that contains additional information about the merchandise line.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>
  /** The ID of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']['input']
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']['input']>
}

/** The input fields to update a line item on a cart. */
export interface CartLineUpdateInput {
  /**
   * An array of key-value pairs that contains additional information about the merchandise line.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>
  /** The ID of the merchandise line. */
  id: Scalars['ID']['input']
  /** The ID of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']['input']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']['input']>
}

/** Return type for `cartLinesAdd` mutation. */
export interface CartLinesAddPayload {
  __typename?: 'CartLinesAddPayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartLinesRemove` mutation. */
export interface CartLinesRemovePayload {
  __typename?: 'CartLinesRemovePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartLinesUpdate` mutation. */
export interface CartLinesUpdatePayload {
  __typename?: 'CartLinesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The input fields to delete a cart metafield. */
export interface CartMetafieldDeleteInput {
  /**
   * The key name of the cart metafield. Can either be a composite key (`namespace.key`) or a simple key
   *  that relies on the default app-reserved namespace.
   *
   */
  key: Scalars['String']['input']
  /** The ID of the cart resource. */
  ownerId: Scalars['ID']['input']
}

/** Return type for `cartMetafieldDelete` mutation. */
export interface CartMetafieldDeletePayload {
  __typename?: 'CartMetafieldDeletePayload'
  /** The ID of the deleted cart metafield. */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<MetafieldDeleteUserError>
}

/** The input fields for a cart metafield value to set. */
export interface CartMetafieldsSetInput {
  /** The key name of the cart metafield. */
  key: Scalars['String']['input']
  /** The ID of the cart resource. */
  ownerId: Scalars['ID']['input']
  /**
   * The type of data that the cart metafield stores.
   * The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).
   *
   */
  type: Scalars['String']['input']
  /**
   * The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.
   *
   */
  value: Scalars['String']['input']
}

/** Return type for `cartMetafieldsSet` mutation. */
export interface CartMetafieldsSetPayload {
  __typename?: 'CartMetafieldsSetPayload'
  /** The list of cart metafields that were set. */
  metafields?: Maybe<Array<Metafield>>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<MetafieldsSetUserError>
}

/** Return type for `cartNoteUpdate` mutation. */
export interface CartNoteUpdatePayload {
  __typename?: 'CartNoteUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/**
 * The input fields for updating the payment method that will be used to checkout.
 *
 */
export interface CartPaymentInput {
  /** The amount that the customer will be charged at checkout. */
  amount: MoneyInput
  /**
   * The input fields to use when checking out a cart with a direct payment method (like a credit card).
   *
   */
  directPaymentMethod?: InputMaybe<CartDirectPaymentMethodInput>
  /**
   * The input fields to use to checkout a cart without providing a payment method.
   * Use this payment method input if the total cost of the cart is 0.
   *
   */
  freePaymentMethod?: InputMaybe<CartFreePaymentMethodInput>
  /**
   * An ID of the order placed on the originating platform.
   * Note that this value doesn't correspond to the Shopify Order ID.
   *
   */
  sourceIdentifier?: InputMaybe<Scalars['String']['input']>
  /**
   * The input fields to use when checking out a cart with a wallet payment method (like Shop Pay or Apple Pay).
   *
   */
  walletPaymentMethod?: InputMaybe<CartWalletPaymentMethodInput>
}

/** Return type for `cartPaymentUpdate` mutation. */
export interface CartPaymentUpdatePayload {
  __typename?: 'CartPaymentUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/**
 * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
 * Preferences are not synced back to the cart if they are overwritten.
 *
 */
export interface CartPreferences {
  __typename?: 'CartPreferences'
  /** Delivery preferences can be used to prefill the delivery section in at checkout. */
  delivery?: Maybe<CartDeliveryPreference>
  /**
   * Wallet preferences are used to populate relevant payment fields in the checkout flow.
   * Accepted value: `["shop_pay"]`.
   *
   */
  wallet?: Maybe<Array<Scalars['String']['output']>>
}

/** The input fields represent preferences for the buyer that is interacting with the cart. */
export interface CartPreferencesInput {
  /** Delivery preferences can be used to prefill the delivery section in at checkout. */
  delivery?: InputMaybe<CartDeliveryPreferenceInput>
  /**
   * Wallet preferences are used to populate relevant payment fields in the checkout flow.
   * Accepted value: `["shop_pay"]`.
   *
   * The input must not contain more than `250` values.
   */
  wallet?: InputMaybe<Array<Scalars['String']['input']>>
}

/**
 * The input fields for updating the selected delivery options for a delivery group.
 *
 */
export interface CartSelectedDeliveryOptionInput {
  /** The ID of the cart delivery group. */
  deliveryGroupId: Scalars['ID']['input']
  /** The handle of the selected delivery option. */
  deliveryOptionHandle: Scalars['String']['input']
}

/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
export interface CartSelectedDeliveryOptionsUpdatePayload {
  __typename?: 'CartSelectedDeliveryOptionsUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for `cartSubmitForCompletion` mutation. */
export interface CartSubmitForCompletionPayload {
  __typename?: 'CartSubmitForCompletionPayload'
  /** The result of cart submission for completion. */
  result?: Maybe<CartSubmitForCompletionResult>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** The result of cart submit completion. */
export type CartSubmitForCompletionResult = SubmitAlreadyAccepted | SubmitFailed | SubmitSuccess | SubmitThrottled

/** Represents an error that happens during execution of a cart mutation. */
export type CartUserError = DisplayableError & {
  __typename?: 'CartUserError'
  /** The error code. */
  code?: Maybe<CartErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/**
 * The input fields for submitting wallet payment method information for checkout.
 *
 */
export interface CartWalletPaymentMethodInput {
  /** The payment method information for the Apple Pay wallet. */
  applePayWalletContent?: InputMaybe<ApplePayWalletContentInput>
  /** The payment method information for the Shop Pay wallet. */
  shopPayWalletContent?: InputMaybe<ShopPayWalletContentInput>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
export type Collection = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Collection'
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String']['output']
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']['output']
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Image associated with the collection. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /** List of products in the collection. */
  products: ProductConnection
  /** The collection's SEO information. */
  seo: Seo
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String']['output']
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime']['output']
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
export interface CollectionDescriptionArgs {
  truncateAt?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
export interface CollectionMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
export interface CollectionMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
export interface CollectionProductsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<Array<ProductFilter>>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ProductCollectionSortKeys>
}

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export interface CollectionConnection {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<CollectionEdge>
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<Collection>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The total count of Collections. */
  totalCount: Scalars['UnsignedInt64']['output']
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export interface CollectionEdge {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of CollectionEdge. */
  node: Collection
}

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A comment on an article. */
export type Comment = Node & {
  __typename?: 'Comment'
  /** The comment’s author. */
  author: CommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']['output']
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
}

/** A comment on an article. */
export interface CommentContentArgs {
  truncateAt?: InputMaybe<Scalars['Int']['input']>
}

/** The author of a comment. */
export interface CommentAuthor {
  __typename?: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']['output']
  /** The author’s name. */
  name: Scalars['String']['output']
}

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export interface CommentConnection {
  __typename?: 'CommentConnection'
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<Comment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export interface CommentEdge {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of CommentEdge. */
  node: Comment
}

/** Represents information about a company which is also a customer of the shop. */
export type Company = HasMetafields & Node & {
  __typename?: 'Company'
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify. */
  createdAt: Scalars['DateTime']['output']
  /** A unique externally-supplied ID for the company. */
  externalId?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The name of the company. */
  name: Scalars['String']['output']
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified. */
  updatedAt: Scalars['DateTime']['output']
}

/** Represents information about a company which is also a customer of the shop. */
export interface CompanyMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Represents information about a company which is also a customer of the shop. */
export interface CompanyMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** A company's main point of contact. */
export type CompanyContact = Node & {
  __typename?: 'CompanyContact'
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created in Shopify. */
  createdAt: Scalars['DateTime']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The company contact's locale (language). */
  locale?: Maybe<Scalars['String']['output']>
  /** The company contact's job title. */
  title?: Maybe<Scalars['String']['output']>
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last modified. */
  updatedAt: Scalars['DateTime']['output']
}

/** A company's location. */
export type CompanyLocation = HasMetafields & Node & {
  __typename?: 'CompanyLocation'
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify. */
  createdAt: Scalars['DateTime']['output']
  /** A unique externally-supplied ID for the company. */
  externalId?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The preferred locale of the company location. */
  locale?: Maybe<Scalars['String']['output']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The name of the company location. */
  name: Scalars['String']['output']
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified. */
  updatedAt: Scalars['DateTime']['output']
}

/** A company's location. */
export interface CompanyLocationMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** A company's location. */
export interface CompanyLocationMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** The action for the 3DS payment redirect. */
export interface CompletePaymentChallenge {
  __typename?: 'CompletePaymentChallenge'
  /** The URL for the 3DS payment redirect. */
  redirectUrl?: Maybe<Scalars['URL']['output']>
}

/** An error that occurred during a cart completion attempt. */
export interface CompletionError {
  __typename?: 'CompletionError'
  /** The error code. */
  code: CompletionErrorCode
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>
}

/** The code of the error that occurred during a cart completion attempt. */
export enum CompletionErrorCode {
  Error = 'ERROR',
  InventoryReservationError = 'INVENTORY_RESERVATION_ERROR',
  PaymentAmountTooSmall = 'PAYMENT_AMOUNT_TOO_SMALL',
  PaymentCallIssuer = 'PAYMENT_CALL_ISSUER',
  PaymentCardDeclined = 'PAYMENT_CARD_DECLINED',
  PaymentError = 'PAYMENT_ERROR',
  PaymentGatewayNotEnabledError = 'PAYMENT_GATEWAY_NOT_ENABLED_ERROR',
  PaymentInsufficientFunds = 'PAYMENT_INSUFFICIENT_FUNDS',
  PaymentInvalidBillingAddress = 'PAYMENT_INVALID_BILLING_ADDRESS',
  PaymentInvalidCreditCard = 'PAYMENT_INVALID_CREDIT_CARD',
  PaymentInvalidCurrency = 'PAYMENT_INVALID_CURRENCY',
  PaymentInvalidPaymentMethod = 'PAYMENT_INVALID_PAYMENT_METHOD',
  PaymentTransientError = 'PAYMENT_TRANSIENT_ERROR',
}

/** Represents information about the grouped merchandise in the cart. */
export type ComponentizableCartLine = BaseCartLine & Node & {
  __typename?: 'ComponentizableCartLine'
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The components of the line item. */
  lineComponents: Array<CartLine>
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>
}

/** Represents information about the grouped merchandise in the cart. */
export interface ComponentizableCartLineAttributeArgs {
  key: Scalars['String']['input']
}

/** A country. */
export interface Country {
  __typename?: 'Country'
  /** The languages available for the country. */
  availableLanguages: Array<Language>
  /** The currency of the country. */
  currency: Currency
  /** The ISO code of the country. */
  isoCode: CountryCode
  /** The market that includes this country. */
  market?: Maybe<Market>
  /** The name of the country. */
  name: Scalars['String']['output']
  /** The unit system used in the country. */
  unitSystem: UnitSystem
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
export enum CountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Türkiye. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ',
}

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
  /** Keep the top of the image. */
  Top = 'TOP',
}

/** A currency. */
export interface Currency {
  __typename?: 'Currency'
  /** The ISO code of the currency. */
  isoCode: CurrencyCode
  /** The name of the currency. */
  name: Scalars['String']['output']
  /** The symbol of the currency. */
  symbol: Scalars['String']['output']
}

/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = 'STD',
  /** Sao Tome And Principe Dobra (STN). */
  Stn = 'STN',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Venezuelan Bolivares (VED). */
  Ved = 'VED',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = 'VEF',
  /** Venezuelan Bolivares Soberanos (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type Customer = HasMetafields & {
  __typename?: 'Customer'
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']['output']
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']['output']
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']['output']
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']['output']>
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']['output']>
  /** A unique ID for the customer. */
  id: Scalars['ID']['output']
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']['output']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64']['output']
  /** The orders associated with the customer. */
  orders: OrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']['output']>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']['output']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']['output']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerAddressesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerOrdersArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<OrderSortKeys>
}

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export interface CustomerAccessToken {
  __typename?: 'CustomerAccessToken'
  /** The customer’s access token. */
  accessToken: Scalars['String']['output']
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']['output']
}

/** The input fields required to create a customer access token. */
export interface CustomerAccessTokenCreateInput {
  /** The email associated to the customer. */
  email: Scalars['String']['input']
  /** The login password to be used by the customer. */
  password: Scalars['String']['input']
}

/** Return type for `customerAccessTokenCreate` mutation. */
export interface CustomerAccessTokenCreatePayload {
  __typename?: 'CustomerAccessTokenCreatePayload'
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export interface CustomerAccessTokenCreateWithMultipassPayload {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload'
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export interface CustomerAccessTokenDeletePayload {
  __typename?: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']['output']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']['output']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export interface CustomerAccessTokenRenewPayload {
  __typename?: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerActivateByUrl` mutation. */
export interface CustomerActivateByUrlPayload {
  __typename?: 'CustomerActivateByUrlPayload'
  /** The customer that was activated. */
  customer?: Maybe<Customer>
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** The input fields to activate a customer. */
export interface CustomerActivateInput {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']['input']
  /** New password that will be set during activation. */
  password: Scalars['String']['input']
}

/** Return type for `customerActivate` mutation. */
export interface CustomerActivatePayload {
  __typename?: 'CustomerActivatePayload'
  /** The customer object. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressCreate` mutation. */
export interface CustomerAddressCreatePayload {
  __typename?: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressDelete` mutation. */
export interface CustomerAddressDeletePayload {
  __typename?: 'CustomerAddressDeletePayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']['output']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export interface CustomerAddressUpdatePayload {
  __typename?: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** The input fields to create a new customer. */
export interface CustomerCreateInput {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']['input']>
  /** The customer’s email. */
  email: Scalars['String']['input']
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** The login password used by the customer. */
  password: Scalars['String']['input']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>
}

/** Return type for `customerCreate` mutation. */
export interface CustomerCreatePayload {
  __typename?: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface CustomerDefaultAddressUpdatePayload {
  __typename?: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum CustomerErrorCode {
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
}

/** Return type for `customerRecover` mutation. */
export interface CustomerRecoverPayload {
  __typename?: 'CustomerRecoverPayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Return type for `customerResetByUrl` mutation. */
export interface CustomerResetByUrlPayload {
  __typename?: 'CustomerResetByUrlPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** The input fields to reset a customer's password. */
export interface CustomerResetInput {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']['input']
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']['input']
}

/** Return type for `customerReset` mutation. */
export interface CustomerResetPayload {
  __typename?: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** The input fields to update the Customer information. */
export interface CustomerUpdateInput {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']['input']>
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']['input']>
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']['input']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>
}

/** Return type for `customerUpdate` mutation. */
export interface CustomerUpdatePayload {
  __typename?: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export type CustomerUserError = DisplayableError & {
  __typename?: 'CustomerUserError'
  /** The error code. */
  code?: Maybe<CustomerErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/** A delivery address of the buyer that is interacting with the cart. */
export type DeliveryAddress = MailingAddress

/**
 * The input fields for delivery address preferences.
 *
 */
export interface DeliveryAddressInput {
  /**
   * The ID of a customer address that is associated with the buyer that is interacting with the cart.
   *
   */
  customerAddressId?: InputMaybe<Scalars['ID']['input']>
  /** A delivery address preference of a buyer that is interacting with the cart. */
  deliveryAddress?: InputMaybe<MailingAddressInput>
  /** Defines what kind of address validation is requested. */
  deliveryAddressValidationStrategy?: InputMaybe<DeliveryAddressValidationStrategy>
  /**
   * Whether the given delivery address is considered to be a one-time use address. One-time use addresses do not
   * get persisted to the buyer's personal addresses when checking out.
   *
   */
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * Defines the types of available validation strategies for delivery addresses.
 *
 */
export enum DeliveryAddressValidationStrategy {
  /** Only the country code is validated. */
  CountryCodeOnly = 'COUNTRY_CODE_ONLY',
  /**
   * Strict validation is performed, i.e. all fields in the address are validated
   * according to Shopify's checkout rules. If the address fails validation, the cart will not be updated.
   *
   */
  Strict = 'STRICT',
}

/** List of different delivery method types. */
export enum DeliveryMethodType {
  /** Local Delivery. */
  Local = 'LOCAL',
  /** None. */
  None = 'NONE',
  /** Shipping to a Pickup Point. */
  PickupPoint = 'PICKUP_POINT',
  /** Local Pickup. */
  PickUp = 'PICK_UP',
  /** Retail. */
  Retail = 'RETAIL',
  /** Shipping. */
  Shipping = 'SHIPPING',
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export interface DiscountAllocation {
  __typename?: 'DiscountAllocation'
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export interface DiscountApplication {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = 'ONE',
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export interface DiscountApplicationConnection {
  __typename?: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<DiscountApplication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export interface DiscountApplicationEdge {
  __typename?: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export type DiscountCodeApplication = DiscountApplication & {
  __typename?: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']['output']
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']['output']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents an error in the input of a mutation. */
export interface DisplayableError {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/** Represents a web address. */
export interface Domain {
  __typename?: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']['output']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']['output']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']['output']
}

/** Represents a video hosted outside of Shopify. */
export type ExternalVideo = Media & Node & {
  __typename?: 'ExternalVideo'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>
  /** The embed URL of the video for the respective host. */
  embedUrl: Scalars['URL']['output']
  /**
   * The URL.
   * @deprecated Use `originUrl` instead.
   */
  embeddedUrl: Scalars['URL']['output']
  /** The host of the external video. */
  host: MediaHost
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The origin URL of the video on the respective host. */
  originUrl: Scalars['URL']['output']
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/** A filter that is supported on the parent field. */
export interface Filter {
  __typename?: 'Filter'
  /** A unique identifier. */
  id: Scalars['String']['output']
  /** A human-friendly string for this filter. */
  label: Scalars['String']['output']
  /**
   * Describes how to present the filter values.
   * Returns a value only for filters of type `LIST`. Returns null for other types.
   *
   */
  presentation?: Maybe<FilterPresentation>
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterType
  /** The list of values for this filter. */
  values: Array<FilterValue>
}

/**
 * Defines how to present the filter values, specifies the presentation of the filter.
 *
 */
export enum FilterPresentation {
  /** Image presentation, filter values display an image. */
  Image = 'IMAGE',
  /** Swatch presentation, filter values display color or image patterns. */
  Swatch = 'SWATCH',
  /** Text presentation, no additional visual display for filter values. */
  Text = 'TEXT',
}

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
export enum FilterType {
  /** A boolean value. */
  Boolean = 'BOOLEAN',
  /** A list of selectable values. */
  List = 'LIST',
  /** A range of prices. */
  PriceRange = 'PRICE_RANGE',
}

/** A selectable value within a filter. */
export interface FilterValue {
  __typename?: 'FilterValue'
  /** The number of results that match this filter value. */
  count: Scalars['Int']['output']
  /** A unique identifier. */
  id: Scalars['String']['output']
  /** The visual representation when the filter's presentation is `IMAGE`. */
  image?: Maybe<MediaImage>
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For
   * example, if you have a list of selected `FilterValue` objects, you can combine
   * their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON']['output']
  /** A human-friendly string for this filter value. */
  label: Scalars['String']['output']
  /** The visual representation when the filter's presentation is `SWATCH`. */
  swatch?: Maybe<Swatch>
}

/** Represents a single fulfillment in an order. */
export interface Fulfillment {
  __typename?: 'Fulfillment'
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']['output']>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export interface FulfillmentFulfillmentLineItemsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** Represents a single fulfillment in an order. */
export interface FulfillmentTrackingInfoArgs {
  first?: InputMaybe<Scalars['Int']['input']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface FulfillmentLineItem {
  __typename?: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: OrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']['output']
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export interface FulfillmentLineItemConnection {
  __typename?: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<FulfillmentLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export interface FulfillmentLineItemEdge {
  __typename?: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem
}

/** Tracking information associated with the fulfillment. */
export interface FulfillmentTrackingInfo {
  __typename?: 'FulfillmentTrackingInfo'
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']['output']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']['output']>
}

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export type GenericFile = Node & {
  __typename?: 'GenericFile'
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']['output']>
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']['output']>
  /** The preview image for the file. */
  previewImage?: Maybe<Image>
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']['output']>
}

/** The input fields used to specify a geographical location. */
export interface GeoCoordinateInput {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']['input']
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']['input']
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafields {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafieldsMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafieldsMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** The input fields to identify a metafield on an owner resource by namespace and key. */
export interface HasMetafieldsIdentifier {
  /** The identifier for the metafield. */
  key: Scalars['String']['input']
  /** The container the metafield belongs to. If omitted, the app-reserved namespace will be used. */
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Represents an image resource. */
export interface Image {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']['output']>
  /** The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  height?: Maybe<Scalars['Int']['output']>
  /** A unique ID for the image. */
  id?: Maybe<Scalars['ID']['output']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL']['output']
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL']['output']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']['output']
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars['URL']['output']
  /** The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents an image resource. */
export interface ImageTransformedSrcArgs {
  crop?: InputMaybe<CropRegion>
  maxHeight?: InputMaybe<Scalars['Int']['input']>
  maxWidth?: InputMaybe<Scalars['Int']['input']>
  preferredContentType?: InputMaybe<ImageContentType>
  scale?: InputMaybe<Scalars['Int']['input']>
}

/** Represents an image resource. */
export interface ImageUrlArgs {
  transform?: InputMaybe<ImageTransformInput>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export interface ImageConnection {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<ImageEdge>
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<Image>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** List of supported image content types. */
export enum ImageContentType {
  /** A JPG image. */
  Jpg = 'JPG',
  /** A PNG image. */
  Png = 'PNG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export interface ImageEdge {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of ImageEdge. */
  node: Image
}

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered best effort. Any transformation that
 * the original image type doesn't support will be ignored.
 *
 */
export interface ImageTransformInput {
  /**
   * The region of the image to remain after cropping.
   * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields,
   * where the `maxWidth` and `maxHeight` aren't equal.
   * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
   * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{
   * maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
   * in an image with a width of 5 and height of 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<CropRegion>
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']['input']>
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']['input']>
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<ImageContentType>
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']['input']>
}

/** Provide details about the contexts influenced by the @inContext directive on a field. */
export interface InContextAnnotation {
  __typename?: 'InContextAnnotation'
  description: Scalars['String']['output']
  type: InContextAnnotationType
}

/** This gives information about the type of context that impacts a field. For example, for a query with @inContext(language: "EN"), the type would point to the name: LanguageCode and kind: ENUM. */
export interface InContextAnnotationType {
  __typename?: 'InContextAnnotationType'
  kind: Scalars['String']['output']
  name: Scalars['String']['output']
}

/** A language. */
export interface Language {
  __typename?: 'Language'
  /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
  endonymName: Scalars['String']['output']
  /** The ISO code. */
  isoCode: LanguageCode
  /** The name of the language in the current language. */
  name: Scalars['String']['output']
}

/** Language codes supported by Shopify. */
export enum LanguageCode {
  /** Afrikaans. */
  Af = 'AF',
  /** Akan. */
  Ak = 'AK',
  /** Amharic. */
  Am = 'AM',
  /** Arabic. */
  Ar = 'AR',
  /** Assamese. */
  As = 'AS',
  /** Azerbaijani. */
  Az = 'AZ',
  /** Belarusian. */
  Be = 'BE',
  /** Bulgarian. */
  Bg = 'BG',
  /** Bambara. */
  Bm = 'BM',
  /** Bangla. */
  Bn = 'BN',
  /** Tibetan. */
  Bo = 'BO',
  /** Breton. */
  Br = 'BR',
  /** Bosnian. */
  Bs = 'BS',
  /** Catalan. */
  Ca = 'CA',
  /** Chechen. */
  Ce = 'CE',
  /** Central Kurdish. */
  Ckb = 'CKB',
  /** Czech. */
  Cs = 'CS',
  /** Church Slavic. */
  Cu = 'CU',
  /** Welsh. */
  Cy = 'CY',
  /** Danish. */
  Da = 'DA',
  /** German. */
  De = 'DE',
  /** Dzongkha. */
  Dz = 'DZ',
  /** Ewe. */
  Ee = 'EE',
  /** Greek. */
  El = 'EL',
  /** English. */
  En = 'EN',
  /** Esperanto. */
  Eo = 'EO',
  /** Spanish. */
  Es = 'ES',
  /** Estonian. */
  Et = 'ET',
  /** Basque. */
  Eu = 'EU',
  /** Persian. */
  Fa = 'FA',
  /** Fulah. */
  Ff = 'FF',
  /** Finnish. */
  Fi = 'FI',
  /** Filipino. */
  Fil = 'FIL',
  /** Faroese. */
  Fo = 'FO',
  /** French. */
  Fr = 'FR',
  /** Western Frisian. */
  Fy = 'FY',
  /** Irish. */
  Ga = 'GA',
  /** Scottish Gaelic. */
  Gd = 'GD',
  /** Galician. */
  Gl = 'GL',
  /** Gujarati. */
  Gu = 'GU',
  /** Manx. */
  Gv = 'GV',
  /** Hausa. */
  Ha = 'HA',
  /** Hebrew. */
  He = 'HE',
  /** Hindi. */
  Hi = 'HI',
  /** Croatian. */
  Hr = 'HR',
  /** Hungarian. */
  Hu = 'HU',
  /** Armenian. */
  Hy = 'HY',
  /** Interlingua. */
  Ia = 'IA',
  /** Indonesian. */
  Id = 'ID',
  /** Igbo. */
  Ig = 'IG',
  /** Sichuan Yi. */
  Ii = 'II',
  /** Icelandic. */
  Is = 'IS',
  /** Italian. */
  It = 'IT',
  /** Japanese. */
  Ja = 'JA',
  /** Javanese. */
  Jv = 'JV',
  /** Georgian. */
  Ka = 'KA',
  /** Kikuyu. */
  Ki = 'KI',
  /** Kazakh. */
  Kk = 'KK',
  /** Kalaallisut. */
  Kl = 'KL',
  /** Khmer. */
  Km = 'KM',
  /** Kannada. */
  Kn = 'KN',
  /** Korean. */
  Ko = 'KO',
  /** Kashmiri. */
  Ks = 'KS',
  /** Kurdish. */
  Ku = 'KU',
  /** Cornish. */
  Kw = 'KW',
  /** Kyrgyz. */
  Ky = 'KY',
  /** Latin. */
  La = 'LA',
  /** Luxembourgish. */
  Lb = 'LB',
  /** Ganda. */
  Lg = 'LG',
  /** Lingala. */
  Ln = 'LN',
  /** Lao. */
  Lo = 'LO',
  /** Lithuanian. */
  Lt = 'LT',
  /** Luba-Katanga. */
  Lu = 'LU',
  /** Latvian. */
  Lv = 'LV',
  /** Malagasy. */
  Mg = 'MG',
  /** Māori. */
  Mi = 'MI',
  /** Macedonian. */
  Mk = 'MK',
  /** Malayalam. */
  Ml = 'ML',
  /** Mongolian. */
  Mn = 'MN',
  /** Moldavian. */
  Mo = 'MO',
  /** Marathi. */
  Mr = 'MR',
  /** Malay. */
  Ms = 'MS',
  /** Maltese. */
  Mt = 'MT',
  /** Burmese. */
  My = 'MY',
  /** Norwegian (Bokmål). */
  Nb = 'NB',
  /** North Ndebele. */
  Nd = 'ND',
  /** Nepali. */
  Ne = 'NE',
  /** Dutch. */
  Nl = 'NL',
  /** Norwegian Nynorsk. */
  Nn = 'NN',
  /** Norwegian. */
  No = 'NO',
  /** Oromo. */
  Om = 'OM',
  /** Odia. */
  Or = 'OR',
  /** Ossetic. */
  Os = 'OS',
  /** Punjabi. */
  Pa = 'PA',
  /** Polish. */
  Pl = 'PL',
  /** Pashto. */
  Ps = 'PS',
  /** Portuguese. */
  Pt = 'PT',
  /** Portuguese (Brazil). */
  PtBr = 'PT_BR',
  /** Portuguese (Portugal). */
  PtPt = 'PT_PT',
  /** Quechua. */
  Qu = 'QU',
  /** Romansh. */
  Rm = 'RM',
  /** Rundi. */
  Rn = 'RN',
  /** Romanian. */
  Ro = 'RO',
  /** Russian. */
  Ru = 'RU',
  /** Kinyarwanda. */
  Rw = 'RW',
  /** Sanskrit. */
  Sa = 'SA',
  /** Sardinian. */
  Sc = 'SC',
  /** Sindhi. */
  Sd = 'SD',
  /** Northern Sami. */
  Se = 'SE',
  /** Sango. */
  Sg = 'SG',
  /** Serbo-Croatian. */
  Sh = 'SH',
  /** Sinhala. */
  Si = 'SI',
  /** Slovak. */
  Sk = 'SK',
  /** Slovenian. */
  Sl = 'SL',
  /** Shona. */
  Sn = 'SN',
  /** Somali. */
  So = 'SO',
  /** Albanian. */
  Sq = 'SQ',
  /** Serbian. */
  Sr = 'SR',
  /** Sundanese. */
  Su = 'SU',
  /** Swedish. */
  Sv = 'SV',
  /** Swahili. */
  Sw = 'SW',
  /** Tamil. */
  Ta = 'TA',
  /** Telugu. */
  Te = 'TE',
  /** Tajik. */
  Tg = 'TG',
  /** Thai. */
  Th = 'TH',
  /** Tigrinya. */
  Ti = 'TI',
  /** Turkmen. */
  Tk = 'TK',
  /** Tongan. */
  To = 'TO',
  /** Turkish. */
  Tr = 'TR',
  /** Tatar. */
  Tt = 'TT',
  /** Uyghur. */
  Ug = 'UG',
  /** Ukrainian. */
  Uk = 'UK',
  /** Urdu. */
  Ur = 'UR',
  /** Uzbek. */
  Uz = 'UZ',
  /** Vietnamese. */
  Vi = 'VI',
  /** Volapük. */
  Vo = 'VO',
  /** Wolof. */
  Wo = 'WO',
  /** Xhosa. */
  Xh = 'XH',
  /** Yiddish. */
  Yi = 'YI',
  /** Yoruba. */
  Yo = 'YO',
  /** Chinese. */
  Zh = 'ZH',
  /** Chinese (Simplified). */
  ZhCn = 'ZH_CN',
  /** Chinese (Traditional). */
  ZhTw = 'ZH_TW',
  /** Zulu. */
  Zu = 'ZU',
}

/** Information about the localized experiences configured for the shop. */
export interface Localization {
  __typename?: 'Localization'
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<Country>
  /** The list of languages available for the active country. */
  availableLanguages: Array<Language>
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: Country
  /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
  language: Language
  /** The market including the country of the active localized experience. Use the `@inContext` directive to change this value. */
  market: Market
}

/** Represents a location where product inventory is held. */
export type Location = HasMetafields & Node & {
  __typename?: 'Location'
  /** The address of the location. */
  address: LocationAddress
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The name of the location. */
  name: Scalars['String']['output']
}

/** Represents a location where product inventory is held. */
export interface LocationMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Represents a location where product inventory is held. */
export interface LocationMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * Represents the address of a location.
 *
 */
export interface LocationAddress {
  __typename?: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']['output']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']['output']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']['output']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']['output']>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']['output']>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']['output']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']['output']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']['output']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']['output']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']['output']>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']['output']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']['output']>
}

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export interface LocationConnection {
  __typename?: 'LocationConnection'
  /** A list of edges. */
  edges: Array<LocationEdge>
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<Location>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export interface LocationEdge {
  __typename?: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of LocationEdge. */
  node: Location
}

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeys {
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddress = Node & {
  __typename?: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']['output']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']['output']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']['output']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']['output']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']['output']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']['output']>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']['output']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']['output']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>
  /**
   * The alphanumeric code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']['output']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>
}

/** Represents a mailing address for customers and shipping. */
export interface MailingAddressFormattedArgs {
  withCompany?: InputMaybe<Scalars['Boolean']['input']>
  withName?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export interface MailingAddressConnection {
  __typename?: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<MailingAddressEdge>
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<MailingAddress>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export interface MailingAddressEdge {
  __typename?: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress
}

/** The input fields to create or update a mailing address. */
export interface MailingAddressInput {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']['input']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']['input']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']['input']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']['input']>
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']['input']>
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']['input']>
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']['input']>
}

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export type ManualDiscountApplication = DiscountApplication & {
  __typename?: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** The description of the application. */
  description?: Maybe<Scalars['String']['output']>
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']['output']
  /** The value of the discount application. */
  value: PricingValue
}

/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
export type Market = HasMetafields & Node & {
  __typename?: 'Market'
  /**
   * A human-readable unique string for the market automatically generated from its title.
   *
   */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
}

/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
export interface MarketMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
export interface MarketMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** Represents a media interface. */
export interface Media {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export interface MediaConnection {
  __typename?: 'MediaConnection'
  /** A list of edges. */
  edges: Array<MediaEdge>
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<Media>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The possible content types for a media object. */
export enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO',
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export interface MediaEdge {
  __typename?: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of MediaEdge. */
  node: Media
}

/** Host for a Media Resource. */
export enum MediaHost {
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
}

/** Represents a Shopify hosted image. */
export type MediaImage = Media & Node & {
  __typename?: 'MediaImage'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The image for the media. */
  image?: Maybe<Image>
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/** A media presentation. */
export type MediaPresentation = Node & {
  __typename?: 'MediaPresentation'
  /** A JSON object representing a presentation view. */
  asJson?: Maybe<Scalars['JSON']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
}

/** A media presentation. */
export interface MediaPresentationAsJsonArgs {
  format: MediaPresentationFormat
}

/** The possible formats for a media presentation. */
export enum MediaPresentationFormat {
  /** A media image presentation. */
  Image = 'IMAGE',
  /** A model viewer presentation. */
  ModelViewer = 'MODEL_VIEWER',
}

/**
 * A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy
 * of hyperlinks (items).
 *
 */
export type Menu = Node & {
  __typename?: 'Menu'
  /** The menu's handle. */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The menu's child items. */
  items: Array<MenuItem>
  /** The count of items on the menu. */
  itemsCount: Scalars['Int']['output']
  /** The menu's title. */
  title: Scalars['String']['output']
}

/** A menu item within a parent menu. */
export type MenuItem = Node & {
  __typename?: 'MenuItem'
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The menu item's child items. */
  items: Array<MenuItem>
  /** The linked resource. */
  resource?: Maybe<MenuItemResource>
  /** The ID of the linked resource. */
  resourceId?: Maybe<Scalars['ID']['output']>
  /** The menu item's tags to filter a collection. */
  tags: Array<Scalars['String']['output']>
  /** The menu item's title. */
  title: Scalars['String']['output']
  /** The menu item's type. */
  type: MenuItemType
  /** The menu item's URL. */
  url?: Maybe<Scalars['URL']['output']>
}

/**
 * The list of possible resources a `MenuItem` can reference.
 *
 */
export type MenuItemResource = Article | Blog | Collection | Metaobject | Page | Product | ShopPolicy

/** A menu item type. */
export enum MenuItemType {
  /** An article link. */
  Article = 'ARTICLE',
  /** A blog link. */
  Blog = 'BLOG',
  /** A catalog link. */
  Catalog = 'CATALOG',
  /** A collection link. */
  Collection = 'COLLECTION',
  /** A collection link. */
  Collections = 'COLLECTIONS',
  /** A frontpage link. */
  Frontpage = 'FRONTPAGE',
  /** An http link. */
  Http = 'HTTP',
  /** A metaobject page link. */
  Metaobject = 'METAOBJECT',
  /** A page link. */
  Page = 'PAGE',
  /** A product link. */
  Product = 'PRODUCT',
  /** A search link. */
  Search = 'SEARCH',
  /** A shop policy link. */
  ShopPolicy = 'SHOP_POLICY',
}

/** The merchandise to be purchased at checkout. */
export type Merchandise = ProductVariant

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type Metafield = Node & {
  __typename?: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']['output']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The unique identifier for the metafield within its namespace. */
  key: Scalars['String']['output']
  /** The container for a group of metafields that the metafield is associated with. */
  namespace: Scalars['String']['output']
  /** The type of resource that the metafield is attached to. */
  parentResource: MetafieldParentResource
  /** Returns a reference object if the metafield's type is a resource reference. */
  reference?: Maybe<MetafieldReference>
  /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>
  /**
   * The type name of the metafield.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']['output']
  /** The date and time when the metafield was last updated. */
  updatedAt: Scalars['DateTime']['output']
  /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
  value: Scalars['String']['output']
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export interface MetafieldReferencesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Possible error codes that can be returned by `MetafieldDeleteUserError`. */
export enum MetafieldDeleteErrorCode {
  /** The owner ID is invalid. */
  InvalidOwner = 'INVALID_OWNER',
  /** Metafield not found. */
  MetafieldDoesNotExist = 'METAFIELD_DOES_NOT_EXIST',
}

/** An error that occurs during the execution of cart metafield deletion. */
export type MetafieldDeleteUserError = DisplayableError & {
  __typename?: 'MetafieldDeleteUserError'
  /** The error code. */
  code?: Maybe<MetafieldDeleteErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 *
 */
export interface MetafieldFilter {
  /** The key of the metafield to filter on. */
  key: Scalars['String']['input']
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String']['input']
  /** The value of the metafield. */
  value: Scalars['String']['input']
}

/** A resource that the metafield belongs to. */
export type MetafieldParentResource = Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | SellingPlan | Shop

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
export type MetafieldReference = Collection | GenericFile | MediaImage | Metaobject | Model3d | Page | Product | ProductVariant | Video

/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 *
 */
export interface MetafieldReferenceConnection {
  __typename?: 'MetafieldReferenceConnection'
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdge>
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<MetafieldReference>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 *
 */
export interface MetafieldReferenceEdge {
  __typename?: 'MetafieldReferenceEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReference
}

/** An error that occurs during the execution of `MetafieldsSet`. */
export type MetafieldsSetUserError = DisplayableError & {
  __typename?: 'MetafieldsSetUserError'
  /** The error code. */
  code?: Maybe<MetafieldsSetUserErrorCode>
  /** The index of the array element that's causing the error. */
  elementIndex?: Maybe<Scalars['Int']['output']>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/** Possible error codes that can be returned by `MetafieldsSetUserError`. */
export enum MetafieldsSetUserErrorCode {
  /** The input value is blank. */
  Blank = 'BLANK',
  /** The input value isn't included in the list. */
  Inclusion = 'INCLUSION',
  /** The owner ID is invalid. */
  InvalidOwner = 'INVALID_OWNER',
  /** The type is invalid. */
  InvalidType = 'INVALID_TYPE',
  /** The value is invalid for metafield type or for definition options. */
  InvalidValue = 'INVALID_VALUE',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
}

/** An instance of a user-defined model based on a MetaobjectDefinition. */
export type Metaobject = Node & OnlineStorePublishable & {
  __typename?: 'Metaobject'
  /** Accesses a field of the object by key. */
  field?: Maybe<MetaobjectField>
  /**
   * All object fields with defined values.
   * Omitted object keys can be assumed null, and no guarantees are made about field order.
   *
   */
  fields: Array<MetaobjectField>
  /** The unique handle of the metaobject. Useful as a custom ID. */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The URL used for viewing the metaobject on the shop's Online Store. Returns `null` if the metaobject definition doesn't have the `online_store` capability. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /**
   * The metaobject's SEO information. Returns `null` if the metaobject definition
   * doesn't have the `renderable` capability.
   *
   */
  seo?: Maybe<MetaobjectSeo>
  /** The type of the metaobject. Defines the namespace of its associated metafields. */
  type: Scalars['String']['output']
  /** The date and time when the metaobject was last updated. */
  updatedAt: Scalars['DateTime']['output']
}

/** An instance of a user-defined model based on a MetaobjectDefinition. */
export interface MetaobjectFieldArgs {
  key: Scalars['String']['input']
}

/**
 * An auto-generated type for paginating through multiple Metaobjects.
 *
 */
export interface MetaobjectConnection {
  __typename?: 'MetaobjectConnection'
  /** A list of edges. */
  edges: Array<MetaobjectEdge>
  /** A list of the nodes contained in MetaobjectEdge. */
  nodes: Array<Metaobject>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 *
 */
export interface MetaobjectEdge {
  __typename?: 'MetaobjectEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of MetaobjectEdge. */
  node: Metaobject
}

/** Provides the value of a Metaobject field. */
export interface MetaobjectField {
  __typename?: 'MetaobjectField'
  /** The field key. */
  key: Scalars['String']['output']
  /** A referenced object if the field type is a resource reference. */
  reference?: Maybe<MetafieldReference>
  /** A list of referenced objects if the field type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>
  /**
   * The type name of the field.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']['output']
  /** The field value. */
  value?: Maybe<Scalars['String']['output']>
}

/** Provides the value of a Metaobject field. */
export interface MetaobjectFieldReferencesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The input fields used to retrieve a metaobject by handle. */
export interface MetaobjectHandleInput {
  /** The handle of the metaobject. */
  handle: Scalars['String']['input']
  /** The type of the metaobject. */
  type: Scalars['String']['input']
}

/** SEO information for a metaobject. */
export interface MetaobjectSeo {
  __typename?: 'MetaobjectSEO'
  /** The meta description. */
  description?: Maybe<MetaobjectField>
  /** The SEO title. */
  title?: Maybe<MetaobjectField>
}

/** Represents a Shopify hosted 3D model. */
export type Model3d = Media & Node & {
  __typename?: 'Model3d'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
  /** The sources for a 3d model. */
  sources: Array<Model3dSource>
}

/** Represents a source for a Shopify hosted 3d model. */
export interface Model3dSource {
  __typename?: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']['output']
  /** The format of the 3d model. */
  format: Scalars['String']['output']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']['output']
  /** The URL of the 3d model. */
  url: Scalars['String']['output']
}

/** The input fields for a monetary value with currency. */
export interface MoneyInput {
  /** Decimal money amount. */
  amount: Scalars['Decimal']['input']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/**
 * A monetary value with currency.
 *
 */
export interface MoneyV2 {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']['output']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface Mutation {
  __typename?: 'Mutation'
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<CartAttributesUpdatePayload>
  /** Updates the billing address on the cart. */
  cartBillingAddressUpdate?: Maybe<CartBillingAddressUpdatePayload>
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<CartBuyerIdentityUpdatePayload>
  /** Creates a new cart. */
  cartCreate?: Maybe<CartCreatePayload>
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<CartDiscountCodesUpdatePayload>
  /** Updates the gift card codes applied to the cart. */
  cartGiftCardCodesUpdate?: Maybe<CartGiftCardCodesUpdatePayload>
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<CartLinesAddPayload>
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<CartLinesRemovePayload>
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<CartLinesUpdatePayload>
  /** Deletes a cart metafield. */
  cartMetafieldDelete?: Maybe<CartMetafieldDeletePayload>
  /**
   * Sets cart metafield values. Cart metafield values will be set regardless if they were previously created or not.
   *
   * Allows a maximum of 25 cart metafields to be set at a time.
   *
   */
  cartMetafieldsSet?: Maybe<CartMetafieldsSetPayload>
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<CartNoteUpdatePayload>
  /** Update the customer's payment method that will be used to checkout. */
  cartPaymentUpdate?: Maybe<CartPaymentUpdatePayload>
  /** Update the selected delivery options for a delivery group. */
  cartSelectedDeliveryOptionsUpdate?: Maybe<CartSelectedDeliveryOptionsUpdatePayload>
  /** Submit the cart for checkout completion. */
  cartSubmitForCompletion?: Maybe<CartSubmitForCompletionPayload>
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayload>
  /**
   * Creates a customer access token using a
   * [multipass token](https://shopify.dev/api/multipass) instead of email and
   * password. A customer record is created if the customer doesn't exist. If a customer
   * record already exists but the record is disabled, then the customer record is enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayload>
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayload>
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayload>
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>
  /**
   * Sends a reset password email to the customer. The reset password
   * email contains a reset password URL and token that you can pass to
   * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
   * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
   * customer password.
   *
   * This mutation is throttled by IP. With private access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
   * The header is case-sensitive and must be sent as `Shopify-Storefront-Buyer-IP`.
   *
   * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
   * mutation presents a security risk.
   *
   */
  customerRecover?: Maybe<CustomerRecoverPayload>
  /**
   * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerReset?: Maybe<CustomerResetPayload>
  /**
   * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayload>
  /** Create a new Shop Pay payment request session. */
  shopPayPaymentRequestSessionCreate?: Maybe<ShopPayPaymentRequestSessionCreatePayload>
  /** Submits a Shop Pay payment request session. */
  shopPayPaymentRequestSessionSubmit?: Maybe<ShopPayPaymentRequestSessionSubmitPayload>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartAttributesUpdateArgs {
  attributes: Array<AttributeInput>
  cartId: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartBillingAddressUpdateArgs {
  billingAddress?: InputMaybe<MailingAddressInput>
  cartId: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartBuyerIdentityUpdateArgs {
  buyerIdentity: CartBuyerIdentityInput
  cartId: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartCreateArgs {
  input?: InputMaybe<CartInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartDiscountCodesUpdateArgs {
  cartId: Scalars['ID']['input']
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartGiftCardCodesUpdateArgs {
  cartId: Scalars['ID']['input']
  giftCardCodes: Array<Scalars['String']['input']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartLinesAddArgs {
  cartId: Scalars['ID']['input']
  lines: Array<CartLineInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartLinesRemoveArgs {
  cartId: Scalars['ID']['input']
  lineIds: Array<Scalars['ID']['input']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartLinesUpdateArgs {
  cartId: Scalars['ID']['input']
  lines: Array<CartLineUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartMetafieldDeleteArgs {
  input: CartMetafieldDeleteInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartMetafieldsSetArgs {
  metafields: Array<CartMetafieldsSetInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartNoteUpdateArgs {
  cartId: Scalars['ID']['input']
  note: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartPaymentUpdateArgs {
  cartId: Scalars['ID']['input']
  payment: CartPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartSelectedDeliveryOptionsUpdateArgs {
  cartId: Scalars['ID']['input']
  selectedDeliveryOptions: Array<CartSelectedDeliveryOptionInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCartSubmitForCompletionArgs {
  attemptToken: Scalars['String']['input']
  cartId: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenCreateArgs {
  input: CustomerAccessTokenCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenCreateWithMultipassArgs {
  multipassToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenDeleteArgs {
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenRenewArgs {
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerActivateArgs {
  id: Scalars['ID']['input']
  input: CustomerActivateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerActivateByUrlArgs {
  activationUrl: Scalars['URL']['input']
  password: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressCreateArgs {
  address: MailingAddressInput
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressDeleteArgs {
  customerAccessToken: Scalars['String']['input']
  id: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressUpdateArgs {
  address: MailingAddressInput
  customerAccessToken: Scalars['String']['input']
  id: Scalars['ID']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerCreateArgs {
  input: CustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerDefaultAddressUpdateArgs {
  addressId: Scalars['ID']['input']
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerRecoverArgs {
  email: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerResetArgs {
  id: Scalars['ID']['input']
  input: CustomerResetInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerResetByUrlArgs {
  password: Scalars['String']['input']
  resetUrl: Scalars['URL']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerUpdateArgs {
  customer: CustomerUpdateInput
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationShopPayPaymentRequestSessionCreateArgs {
  paymentRequest: ShopPayPaymentRequestInput
  sourceIdentifier: Scalars['String']['input']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationShopPayPaymentRequestSessionSubmitArgs {
  idempotencyKey: Scalars['String']['input']
  orderName?: InputMaybe<Scalars['String']['input']>
  paymentRequest: ShopPayPaymentRequestInput
  token: Scalars['String']['input']
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export interface Node {
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
}

/** Represents a resource that can be published to the Online Store sales channel. */
export interface OnlineStorePublishable {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type Order = HasMetafields & Node & {
  __typename?: 'Order'
  /** The address associated with the payment method. */
  billingAddress?: Maybe<MailingAddress>
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReason>
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCode
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes aren't included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2>
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2
  /** The total cost of shipping, excluding shipping lines that have been refunded or removed. Taxes aren't included unless the order is a taxes-included order. */
  currentTotalShippingPrice: MoneyV2
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2
  /** A list of the custom attributes added to the order. For example, whether an order is a customer's first. */
  customAttributes: Array<Attribute>
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']['output']>
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']['output']>
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean']['output']
  /** The customer's email address. */
  email?: Maybe<Scalars['String']['output']>
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatus>
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatus
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String']['output']
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int']['output']
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2>
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']['output']>
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime']['output']
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddress>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation>
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL']['output']
  /** Price of the order before shipping and taxes. */
  subtotalPrice?: Maybe<MoneyV2>
  /**
   * Price of the order before duties, shipping and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2?: Maybe<MoneyV2>
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<Fulfillment>>
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPrice: MoneyV2
  /**
   * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2
  /** The total amount that has been refunded. */
  totalRefunded: MoneyV2
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefunded` instead.
   */
  totalRefundedV2: MoneyV2
  /** The total cost of shipping. */
  totalShippingPrice: MoneyV2
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPrice` instead.
   */
  totalShippingPriceV2: MoneyV2
  /** The total cost of taxes. */
  totalTax?: Maybe<MoneyV2>
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2?: Maybe<MoneyV2>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderDiscountApplicationsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderLineItemsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderSuccessfulFulfillmentsArgs {
  first?: InputMaybe<Scalars['Int']['input']>
}

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
  /** Staff made an error. */
  Staff = 'STAFF',
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export interface OrderConnection {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<OrderEdge>
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<Order>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The total count of Orders. */
  totalCount: Scalars['UnsignedInt64']['output']
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export interface OrderEdge {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of OrderEdge. */
  node: Order
}

/** Represents the order's current financial status. */
export enum OrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum OrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED',
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface OrderLineItem {
  __typename?: 'OrderLineItem'
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']['output']
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it's displayed in the presentment currency. */
  originalTotalPrice: MoneyV2
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']['output']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']['output']
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariant>
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export interface OrderLineItemConnection {
  __typename?: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<OrderLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export interface OrderLineItemEdge {
  __typename?: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type Page = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Page'
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML']['output']
  /** Summary of the page body. */
  bodySummary: Scalars['String']['output']
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime']['output']
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /** The page's SEO information. */
  seo?: Maybe<Seo>
  /** The title of the page. */
  title: Scalars['String']['output']
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime']['output']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface PageMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface PageMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export interface PageConnection {
  __typename?: 'PageConnection'
  /** A list of edges. */
  edges: Array<PageEdge>
  /** A list of the nodes contained in PageEdge. */
  nodes: Array<Page>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export interface PageEdge {
  __typename?: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of PageEdge. */
  node: Page
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
export interface PageInfo {
  __typename?: 'PageInfo'
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']['output']
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']['output']
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** Settings related to payments. */
export interface PaymentSettings {
  __typename?: 'PaymentSettings'
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']['output']
  /** The country where the shop is located. */
  countryCode: CountryCode
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts.
   * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   *
   */
  enabledPresentmentCurrencies: Array<CurrencyCode>
  /** The shop’s Shopify Payments account ID. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']['output']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>
}

/** Decides the distribution of results. */
export enum PredictiveSearchLimitScope {
  /** Return results up to limit across all types. */
  All = 'ALL',
  /** Return results up to limit per type. */
  Each = 'EACH',
}

/**
 * A predictive search result represents a list of products, collections, pages, articles, and query suggestions
 * that matches the predictive search query.
 *
 */
export interface PredictiveSearchResult {
  __typename?: 'PredictiveSearchResult'
  /** The articles that match the search query. */
  articles: Array<Article>
  /** The articles that match the search query. */
  collections: Array<Collection>
  /** The pages that match the search query. */
  pages: Array<Page>
  /** The products that match the search query. */
  products: Array<Product>
  /** The query suggestions that are relevant to the search query. */
  queries: Array<SearchQuerySuggestion>
}

/** The types of search items to perform predictive search on. */
export enum PredictiveSearchType {
  /** Returns matching articles. */
  Article = 'ARTICLE',
  /** Returns matching collections. */
  Collection = 'COLLECTION',
  /** Returns matching pages. */
  Page = 'PAGE',
  /** Returns matching products. */
  Product = 'PRODUCT',
  /** Returns matching query strings. */
  Query = 'QUERY',
}

/** The preferred delivery methods such as shipping, local pickup or through pickup points. */
export enum PreferenceDeliveryMethodType {
  /** A delivery method used to let buyers collect purchases at designated locations like parcel lockers. */
  PickupPoint = 'PICKUP_POINT',
  /** A delivery method used to let buyers receive items directly from a specific location within an area. */
  PickUp = 'PICK_UP',
  /** A delivery method used to send items directly to a buyer’s specified address. */
  Shipping = 'SHIPPING',
}

/**
 * The input fields for a filter used to view a subset of products in a collection matching a specific price range.
 *
 */
export interface PriceRangeFilter {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']['input']>
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']['input']>
}

/** The value of the percentage pricing object. */
export interface PricingPercentageValue {
  __typename?: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']['output']
}

/** The price value (fixed or percentage) for a discount application. */
export type PricingValue = MoneyV2 | PricingPercentageValue

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export type Product = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Product'
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean']['output']
  /** List of collections a product belongs to. */
  collections: CollectionConnection
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ProductPriceRange
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']['output']
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String']['output']
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']['output']
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<Image>
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   *
   */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** List of images associated with the product. */
  images: ImageConnection
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean']['output']
  /** The media associated with the product. */
  media: MediaConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /**
   * The URL used for viewing the resource on the shop's Online Store. Returns
   * `null` if the resource is currently not published to the Online Store sales channel.
   *
   */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>
  /** List of product options. */
  options: Array<ProductOption>
  /** The price range. */
  priceRange: ProductPriceRange
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String']['output']
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime']['output']
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean']['output']
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: SellingPlanGroupConnection
  /** The product's SEO information. */
  seo: Seo
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   *
   */
  tags: Array<Scalars['String']['output']>
  /** The product’s title. */
  title: Scalars['String']['output']
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']['output']>
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime']['output']
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<ProductVariant>
  /** List of the product’s variants. */
  variants: ProductVariantConnection
  /** The product’s vendor name. */
  vendor: Scalars['String']['output']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductCollectionsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductDescriptionArgs {
  truncateAt?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductImagesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ProductImageSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductMediaArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductOptionsArgs {
  first?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductSellingPlanGroupsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductVariantBySelectedOptionsArgs {
  caseInsensitiveMatch?: InputMaybe<Scalars['Boolean']['input']>
  ignoreUnknownOptions?: InputMaybe<Scalars['Boolean']['input']>
  selectedOptions: Array<SelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
export interface ProductVariantsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export interface ProductConnection {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<ProductEdge>
  /** A list of available filters. */
  filters: Array<Filter>
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<Product>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export interface ProductEdge {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of ProductEdge. */
  node: Product
}

/**
 * The input fields for a filter used to view a subset of products in a collection.
 * By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app.
 * Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).
 *
 */
export interface ProductFilter {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']['input']>
  /** A range of prices to filter with-in. */
  price?: InputMaybe<PriceRangeFilter>
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<MetafieldFilter>
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']['input']>
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']['input']>
  /** A product tag to filter on. */
  tag?: InputMaybe<Scalars['String']['input']>
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<MetafieldFilter>
  /** A variant option to filter on. */
  variantOption?: InputMaybe<VariantOptionFilter>
}

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export type ProductOption = Node & {
  __typename?: 'ProductOption'
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The product option’s name. */
  name: Scalars['String']['output']
  /** The corresponding option value to the product option. */
  optionValues: Array<ProductOptionValue>
  /**
   * The corresponding value to the product option name.
   * @deprecated Use `optionValues` instead.
   */
  values: Array<Scalars['String']['output']>
}

/**
 * The product option value names. For example, "Red", "Blue", and "Green" for a "Color" option.
 *
 */
export type ProductOptionValue = Node & {
  __typename?: 'ProductOptionValue'
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The name of the product option value. */
  name: Scalars['String']['output']
  /** The swatch of the product option value. */
  swatch?: Maybe<ProductOptionValueSwatch>
}

/**
 * The product option value swatch.
 *
 */
export interface ProductOptionValueSwatch {
  __typename?: 'ProductOptionValueSwatch'
  /** The swatch color. */
  color?: Maybe<Scalars['Color']['output']>
  /** The swatch image. */
  image?: Maybe<Media>
}

/** The price range of the product. */
export interface ProductPriceRange {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/**
 * The recommendation intent that is used to generate product recommendations.
 * You can use intent to generate product recommendations according to different strategies.
 *
 */
export enum ProductRecommendationIntent {
  /** Offer customers products that are complementary to a product for which recommendations are to be fetched. An example is add-on products that display in a Pair it with section. */
  Complementary = 'COMPLEMENTARY',
  /** Offer customers a mix of products that are similar or complementary to a product for which recommendations are to be fetched. An example is substitutable products that display in a You may also like section. */
  Related = 'RELATED',
}

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export type ProductVariant = HasMetafields & Node & {
  __typename?: 'ProductVariant'
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean']['output']
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']['output']>
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
  compareAtPrice?: Maybe<MoneyV2>
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   * @deprecated Use `compareAtPrice` instead.
   */
  compareAtPriceV2?: Maybe<MoneyV2>
  /**
   * List of bundles components included in the variant considering only fixed bundles.
   *
   */
  components: ProductVariantComponentConnection
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean']['output']
  /**
   * List of bundles that include this variant considering only fixed bundles.
   *
   */
  groupedBy: ProductVariantConnection
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The product variant’s price. */
  price: MoneyV2
  /**
   * The product variant’s price.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2
  /** The product object that the product variant belongs to. */
  product: Product
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']['output']>
  /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection
  /** The quantity rule for the product variant in a given context. */
  quantityRule: QuantityRule
  /**
   * Whether a product variant requires components. The default value is `false`.
   * If `true`, then the product variant can only be purchased as a parent bundle with components.
   *
   */
  requiresComponents: Scalars['Boolean']['output']
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean']['output']
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnection
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']['output']>
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnection
  /** Whether tax is charged when the product variant is sold. */
  taxable: Scalars['Boolean']['output']
  /** The product variant’s title. */
  title: Scalars['String']['output']
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2>
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']['output']>
  /** Unit of measurement for weight. */
  weightUnit: WeightUnit
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantComponentsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantGroupedByArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantQuantityPriceBreaksArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantSellingPlanAllocationsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
export interface ProductVariantStoreAvailabilityArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  near?: InputMaybe<GeoCoordinateInput>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * Represents a component of a bundle variant.
 *
 */
export interface ProductVariantComponent {
  __typename?: 'ProductVariantComponent'
  /** The product variant object that the component belongs to. */
  productVariant: ProductVariant
  /** The quantity of component present in the bundle. */
  quantity: Scalars['Int']['output']
}

/**
 * An auto-generated type for paginating through multiple ProductVariantComponents.
 *
 */
export interface ProductVariantComponentConnection {
  __typename?: 'ProductVariantComponentConnection'
  /** A list of edges. */
  edges: Array<ProductVariantComponentEdge>
  /** A list of the nodes contained in ProductVariantComponentEdge. */
  nodes: Array<ProductVariantComponent>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductVariantComponent and a cursor during pagination.
 *
 */
export interface ProductVariantComponentEdge {
  __typename?: 'ProductVariantComponentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of ProductVariantComponentEdge. */
  node: ProductVariantComponent
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export interface ProductVariantConnection {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<ProductVariantEdge>
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ProductVariant>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export interface ProductVariantEdge {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant
}

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** Represents information about the buyer that is interacting with the cart. */
export interface PurchasingCompany {
  __typename?: 'PurchasingCompany'
  /** The company associated to the order or draft order. */
  company: Company
  /** The company contact associated to the order or draft order. */
  contact?: Maybe<CompanyContact>
  /** The company location associated to the order or draft order. */
  location: CompanyLocation
}

/**
 * Quantity price breaks lets you offer different rates that are based on the
 * amount of a specific variant being ordered.
 *
 */
export interface QuantityPriceBreak {
  __typename?: 'QuantityPriceBreak'
  /**
   * Minimum quantity required to reach new quantity break price.
   *
   */
  minimumQuantity: Scalars['Int']['output']
  /**
   * The price of variant after reaching the minimum quanity.
   *
   */
  price: MoneyV2
}

/**
 * An auto-generated type for paginating through multiple QuantityPriceBreaks.
 *
 */
export interface QuantityPriceBreakConnection {
  __typename?: 'QuantityPriceBreakConnection'
  /** A list of edges. */
  edges: Array<QuantityPriceBreakEdge>
  /** A list of the nodes contained in QuantityPriceBreakEdge. */
  nodes: Array<QuantityPriceBreak>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination.
 *
 */
export interface QuantityPriceBreakEdge {
  __typename?: 'QuantityPriceBreakEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of QuantityPriceBreakEdge. */
  node: QuantityPriceBreak
}

/**
 * The quantity rule for the product variant in a given context.
 *
 */
export interface QuantityRule {
  __typename?: 'QuantityRule'
  /**
   * The value that specifies the quantity increment between minimum and maximum of the rule.
   * Only quantities divisible by this value will be considered valid.
   *
   * The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum
   * must be divisible by this value.
   *
   */
  increment: Scalars['Int']['output']
  /**
   * An optional value that defines the highest allowed quantity purchased by the customer.
   * If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.
   *
   */
  maximum?: Maybe<Scalars['Int']['output']>
  /**
   * The value that defines the lowest allowed quantity purchased by the customer.
   * The minimum must be a multiple of the quantity rule's increment.
   *
   */
  minimum: Scalars['Int']['output']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRoot {
  __typename?: 'QueryRoot'
  /** Fetch a specific Article by its ID. */
  article?: Maybe<Article>
  /** List of the shop's articles. */
  articles: ArticleConnection
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<Blog>
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead.
   */
  blogByHandle?: Maybe<Blog>
  /** List of the shop's blogs. */
  blogs: BlogConnection
  /**
   * Retrieve a cart by its ID. For more information, refer to
   * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
   *
   */
  cart?: Maybe<Cart>
  /**
   * A poll for the status of the cart checkout completion and order creation.
   *
   */
  cartCompletionAttempt?: Maybe<CartCompletionAttemptResult>
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<Collection>
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead.
   */
  collectionByHandle?: Maybe<Collection>
  /** List of the shop’s collections. */
  collections: CollectionConnection
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   *
   */
  customer?: Maybe<Customer>
  /** Returns the localized experiences configured for the shop. */
  localization: Localization
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   *
   */
  locations: LocationConnection
  /** Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle. */
  menu?: Maybe<Menu>
  /** Fetch a specific Metaobject by one of its unique identifiers. */
  metaobject?: Maybe<Metaobject>
  /** All active metaobjects for the shop. */
  metaobjects: MetaobjectConnection
  /** Returns a specific node by ID. */
  node?: Maybe<Node>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<Page>
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead.
   */
  pageByHandle?: Maybe<Page>
  /** List of the shop's pages. */
  pages: PageConnection
  /** List of the predictive search results. */
  predictiveSearch?: Maybe<PredictiveSearchResult>
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<Product>
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead.
   */
  productByHandle?: Maybe<Product>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<Product>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: StringConnection
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnection
  /** List of the shop’s products. For storefront search, use [`search` query](https://shopify.dev/docs/api/storefront/latest/queries/search). */
  products: ProductConnection
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>
  /** List of the search results. */
  search: SearchResultItemConnection
  /** The shop associated with the storefront access token. */
  shop: Shop
  /** A list of redirects for a shop. */
  urlRedirects: UrlRedirectConnection
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootArticleArgs {
  id: Scalars['ID']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootArticlesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ArticleSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootBlogArgs {
  handle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootBlogByHandleArgs {
  handle: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootBlogsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<BlogSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCartArgs {
  id: Scalars['ID']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCartCompletionAttemptArgs {
  attemptId: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCollectionArgs {
  handle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCollectionByHandleArgs {
  handle: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCollectionsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<CollectionSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCustomerArgs {
  customerAccessToken: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootLocationsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  near?: InputMaybe<GeoCoordinateInput>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<LocationSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootMenuArgs {
  handle: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootMetaobjectArgs {
  handle?: InputMaybe<MetaobjectHandleInput>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootMetaobjectsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<Scalars['String']['input']>
  type: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootNodeArgs {
  id: Scalars['ID']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootNodesArgs {
  ids: Array<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPageArgs {
  handle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPageByHandleArgs {
  handle: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPagesArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<PageSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPredictiveSearchArgs {
  limit?: InputMaybe<Scalars['Int']['input']>
  limitScope?: InputMaybe<PredictiveSearchLimitScope>
  query: Scalars['String']['input']
  searchableFields?: InputMaybe<Array<SearchableField>>
  types?: InputMaybe<Array<PredictiveSearchType>>
  unavailableProducts?: InputMaybe<SearchUnavailableProductsType>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductArgs {
  handle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductByHandleArgs {
  handle: Scalars['String']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductRecommendationsArgs {
  intent?: InputMaybe<ProductRecommendationIntent>
  productHandle?: InputMaybe<Scalars['String']['input']>
  productId?: InputMaybe<Scalars['ID']['input']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductTagsArgs {
  first: Scalars['Int']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductTypesArgs {
  first: Scalars['Int']['input']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<ProductSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootSearchArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  prefix?: InputMaybe<SearchPrefixQueryType>
  productFilters?: InputMaybe<Array<ProductFilter>>
  query: Scalars['String']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  sortKey?: InputMaybe<SearchSortKeys>
  types?: InputMaybe<Array<SearchType>>
  unavailableProducts?: InputMaybe<SearchUnavailableProductsType>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootUrlRedirectsArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/** SEO information. */
export interface Seo {
  __typename?: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']['output']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']['output']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export type ScriptDiscountApplication = DiscountApplication & {
  __typename?: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']['output']
  /** The value of the discount application. */
  value: PricingValue
}

/** Specifies whether to perform a partial word match on the last search term. */
export enum SearchPrefixQueryType {
  /** Perform a partial word match on the last search term. */
  Last = 'LAST',
  /** Don't perform a partial word match on the last search term. */
  None = 'NONE',
}

/** A search query suggestion. */
export type SearchQuerySuggestion = Trackable & {
  __typename?: 'SearchQuerySuggestion'
  /** The text of the search query suggestion with highlighted HTML tags. */
  styledText: Scalars['String']['output']
  /** The text of the search query suggestion. */
  text: Scalars['String']['output']
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
}

/**
 * A search result that matches the search query.
 *
 */
export type SearchResultItem = Article | Page | Product

/**
 * An auto-generated type for paginating through multiple SearchResultItems.
 *
 */
export interface SearchResultItemConnection {
  __typename?: 'SearchResultItemConnection'
  /** A list of edges. */
  edges: Array<SearchResultItemEdge>
  /** A list of the nodes contained in SearchResultItemEdge. */
  nodes: Array<SearchResultItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of available filters. */
  productFilters: Array<Filter>
  /** The total number of results. */
  totalCount: Scalars['Int']['output']
}

/**
 * An auto-generated type which holds one SearchResultItem and a cursor during pagination.
 *
 */
export interface SearchResultItemEdge {
  __typename?: 'SearchResultItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of SearchResultItemEdge. */
  node: SearchResultItem
}

/** The set of valid sort keys for the search query. */
export enum SearchSortKeys {
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by relevance to the search terms. */
  Relevance = 'RELEVANCE',
}

/** The types of search items to perform search within. */
export enum SearchType {
  /** Returns matching articles. */
  Article = 'ARTICLE',
  /** Returns matching pages. */
  Page = 'PAGE',
  /** Returns matching products. */
  Product = 'PRODUCT',
}

/** Specifies whether to display results for unavailable products. */
export enum SearchUnavailableProductsType {
  /** Exclude unavailable products. */
  Hide = 'HIDE',
  /** Show unavailable products after all other matching results. This is the default. */
  Last = 'LAST',
  /** Show unavailable products in the order that they're found. */
  Show = 'SHOW',
}

/** Specifies the list of resource fields to search. */
export enum SearchableField {
  /** Author of the page or article. */
  Author = 'AUTHOR',
  /** Body of the page or article or product description or collection description. */
  Body = 'BODY',
  /** Product type. */
  ProductType = 'PRODUCT_TYPE',
  /** Tag associated with the product or article. */
  Tag = 'TAG',
  /** Title of the page or article or product title or collection title. */
  Title = 'TITLE',
  /** Variant barcode. */
  VariantsBarcode = 'VARIANTS_BARCODE',
  /** Variant SKU. */
  VariantsSku = 'VARIANTS_SKU',
  /** Variant title. */
  VariantsTitle = 'VARIANTS_TITLE',
  /** Product vendor. */
  Vendor = 'VENDOR',
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export interface SelectedOption {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']['output']
  /** The product option’s value. */
  value: Scalars['String']['output']
}

/** The input fields required for a selected option. */
export interface SelectedOptionInput {
  /** The product option’s name. */
  name: Scalars['String']['input']
  /** The product option’s value. */
  value: Scalars['String']['input']
}

/** Represents how products and variants can be sold and purchased. */
export type SellingPlan = HasMetafields & {
  __typename?: 'SellingPlan'
  /** The billing policy for the selling plan. */
  billingPolicy?: Maybe<SellingPlanBillingPolicy>
  /** The initial payment due for the purchase. */
  checkoutCharge: SellingPlanCheckoutCharge
  /** The delivery policy for the selling plan. */
  deliveryPolicy?: Maybe<SellingPlanDeliveryPolicy>
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']['output']
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<SellingPlanOption>
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']['output']
}

/** Represents how products and variants can be sold and purchased. */
export interface SellingPlanMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Represents how products and variants can be sold and purchased. */
export interface SellingPlanMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export interface SellingPlanAllocation {
  __typename?: 'SellingPlanAllocation'
  /** The checkout charge amount due for the purchase. */
  checkoutChargeAmount: MoneyV2
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>
  /** The remaining balance charge amount due for the purchase. */
  remainingBalanceChargeAmount: MoneyV2
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan
}

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export interface SellingPlanAllocationConnection {
  __typename?: 'SellingPlanAllocationConnection'
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<SellingPlanAllocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export interface SellingPlanAllocationEdge {
  __typename?: 'SellingPlanAllocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export interface SellingPlanAllocationPriceAdjustment {
  __typename?: 'SellingPlanAllocationPriceAdjustment'
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2>
}

/** The selling plan billing policy. */
export type SellingPlanBillingPolicy = SellingPlanRecurringBillingPolicy

/** The initial payment due for the purchase. */
export interface SellingPlanCheckoutCharge {
  __typename?: 'SellingPlanCheckoutCharge'
  /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeType
  /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValue
}

/** The percentage value of the price used for checkout charge. */
export interface SellingPlanCheckoutChargePercentageValue {
  __typename?: 'SellingPlanCheckoutChargePercentageValue'
  /** The percentage value of the price used for checkout charge. */
  percentage: Scalars['Float']['output']
}

/** The checkout charge when the full amount isn't charged at checkout. */
export enum SellingPlanCheckoutChargeType {
  /** The checkout charge is a percentage of the product or variant price. */
  Percentage = 'PERCENTAGE',
  /** The checkout charge is a fixed price amount. */
  Price = 'PRICE',
}

/** The portion of the price to be charged at checkout. */
export type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export interface SellingPlanConnection {
  __typename?: 'SellingPlanConnection'
  /** A list of edges. */
  edges: Array<SellingPlanEdge>
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<SellingPlan>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The selling plan delivery policy. */
export type SellingPlanDeliveryPolicy = SellingPlanRecurringDeliveryPolicy

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export interface SellingPlanEdge {
  __typename?: 'SellingPlanEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export interface SellingPlanFixedAmountPriceAdjustment {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment'
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export interface SellingPlanFixedPriceAdjustment {
  __typename?: 'SellingPlanFixedPriceAdjustment'
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroup {
  __typename?: 'SellingPlanGroup'
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']['output']>
  /** The name of the selling plan group. */
  name: Scalars['String']['output']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroupSellingPlansArgs {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export interface SellingPlanGroupConnection {
  __typename?: 'SellingPlanGroupConnection'
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<SellingPlanGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export interface SellingPlanGroupEdge {
  __typename?: 'SellingPlanGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup
}

/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 *
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
export interface SellingPlanGroupOption {
  __typename?: 'SellingPlanGroupOption'
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']['output']
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']['output']>
}

/** Represents a valid selling plan interval. */
export enum SellingPlanInterval {
  /** Day interval. */
  Day = 'DAY',
  /** Month interval. */
  Month = 'MONTH',
  /** Week interval. */
  Week = 'WEEK',
  /** Year interval. */
  Year = 'YEAR',
}

/** An option provided by a Selling Plan. */
export interface SellingPlanOption {
  __typename?: 'SellingPlanOption'
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']['output']>
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']['output']>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export interface SellingPlanPercentagePriceAdjustment {
  __typename?: 'SellingPlanPercentagePriceAdjustment'
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int']['output']
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
export interface SellingPlanPriceAdjustment {
  __typename?: 'SellingPlanPriceAdjustment'
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']['output']>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment

/** The recurring billing policy for the selling plan. */
export interface SellingPlanRecurringBillingPolicy {
  __typename?: 'SellingPlanRecurringBillingPolicy'
  /** The billing frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval
  /** The number of intervals between billings. */
  intervalCount: Scalars['Int']['output']
}

/** The recurring delivery policy for the selling plan. */
export interface SellingPlanRecurringDeliveryPolicy {
  __typename?: 'SellingPlanRecurringDeliveryPolicy'
  /** The delivery frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval
  /** The number of intervals between deliveries. */
  intervalCount: Scalars['Int']['output']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type Shop = HasMetafields & Node & {
  __typename?: 'Shop'
  /** The shop's branding configuration. */
  brand?: Maybe<Brand>
  /** A description of the shop. */
  description?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe<Metafield>>
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']['output']
  /** The shop’s name. */
  name: Scalars['String']['output']
  /** Settings related to payments. */
  paymentSettings: PaymentSettings
  /** The primary domain of the shop’s Online Store. */
  primaryDomain: Domain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicy>
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicy>
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicy>
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopPolicyWithDefault>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopMetafieldArgs {
  key: Scalars['String']['input']
  namespace?: InputMaybe<Scalars['String']['input']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopMetafieldsArgs {
  identifiers: Array<HasMetafieldsIdentifier>
}

/** Represents a Shop Pay payment request. */
export interface ShopPayPaymentRequest {
  __typename?: 'ShopPayPaymentRequest'
  /** The delivery methods for the payment request. */
  deliveryMethods: Array<ShopPayPaymentRequestDeliveryMethod>
  /** The discount codes for the payment request. */
  discountCodes: Array<Scalars['String']['output']>
  /** The discounts for the payment request order. */
  discounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>
  /** The line items for the payment request. */
  lineItems: Array<ShopPayPaymentRequestLineItem>
  /** The locale for the payment request. */
  locale: Scalars['String']['output']
  /** The presentment currency for the payment request. */
  presentmentCurrency: CurrencyCode
  /** The delivery method type for the payment request. */
  selectedDeliveryMethodType: ShopPayPaymentRequestDeliveryMethodType
  /** The shipping address for the payment request. */
  shippingAddress?: Maybe<ShopPayPaymentRequestContactField>
  /** The shipping lines for the payment request. */
  shippingLines: Array<ShopPayPaymentRequestShippingLine>
  /** The subtotal amount for the payment request. */
  subtotal: MoneyV2
  /** The total amount for the payment request. */
  total: MoneyV2
  /** The total shipping price for the payment request. */
  totalShippingPrice?: Maybe<ShopPayPaymentRequestTotalShippingPrice>
  /** The total tax for the payment request. */
  totalTax?: Maybe<MoneyV2>
}

/** Represents a contact field for a Shop Pay payment request. */
export interface ShopPayPaymentRequestContactField {
  __typename?: 'ShopPayPaymentRequestContactField'
  /** The first address line of the contact field. */
  address1: Scalars['String']['output']
  /** The second address line of the contact field. */
  address2?: Maybe<Scalars['String']['output']>
  /** The city of the contact field. */
  city: Scalars['String']['output']
  /** The company name of the contact field. */
  companyName?: Maybe<Scalars['String']['output']>
  /** The country of the contact field. */
  countryCode: Scalars['String']['output']
  /** The email of the contact field. */
  email?: Maybe<Scalars['String']['output']>
  /** The first name of the contact field. */
  firstName: Scalars['String']['output']
  /** The first name of the contact field. */
  lastName: Scalars['String']['output']
  /** The phone number of the contact field. */
  phone?: Maybe<Scalars['String']['output']>
  /** The postal code of the contact field. */
  postalCode?: Maybe<Scalars['String']['output']>
  /** The province of the contact field. */
  provinceCode?: Maybe<Scalars['String']['output']>
}

/** Represents a delivery method for a Shop Pay payment request. */
export interface ShopPayPaymentRequestDeliveryMethod {
  __typename?: 'ShopPayPaymentRequestDeliveryMethod'
  /** The amount for the delivery method. */
  amount: MoneyV2
  /** The code of the delivery method. */
  code: Scalars['String']['output']
  /** The detail about when the delivery may be expected. */
  deliveryExpectationLabel?: Maybe<Scalars['String']['output']>
  /** The detail of the delivery method. */
  detail?: Maybe<Scalars['String']['output']>
  /** The label of the delivery method. */
  label: Scalars['String']['output']
  /** The maximum delivery date for the delivery method. */
  maxDeliveryDate?: Maybe<Scalars['ISO8601DateTime']['output']>
  /** The minimum delivery date for the delivery method. */
  minDeliveryDate?: Maybe<Scalars['ISO8601DateTime']['output']>
}

/** The input fields to create a delivery method for a Shop Pay payment request. */
export interface ShopPayPaymentRequestDeliveryMethodInput {
  /** The amount for the delivery method. */
  amount?: InputMaybe<MoneyInput>
  /** The code of the delivery method. */
  code?: InputMaybe<Scalars['String']['input']>
  /** The detail about when the delivery may be expected. */
  deliveryExpectationLabel?: InputMaybe<Scalars['String']['input']>
  /** The detail of the delivery method. */
  detail?: InputMaybe<Scalars['String']['input']>
  /** The label of the delivery method. */
  label?: InputMaybe<Scalars['String']['input']>
  /** The maximum delivery date for the delivery method. */
  maxDeliveryDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>
  /** The minimum delivery date for the delivery method. */
  minDeliveryDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>
}

/** Represents the delivery method type for a Shop Pay payment request. */
export enum ShopPayPaymentRequestDeliveryMethodType {
  /** The delivery method type is pickup. */
  Pickup = 'PICKUP',
  /** The delivery method type is shipping. */
  Shipping = 'SHIPPING',
}

/** Represents a discount for a Shop Pay payment request. */
export interface ShopPayPaymentRequestDiscount {
  __typename?: 'ShopPayPaymentRequestDiscount'
  /** The amount of the discount. */
  amount: MoneyV2
  /** The label of the discount. */
  label: Scalars['String']['output']
}

/** The input fields to create a discount for a Shop Pay payment request. */
export interface ShopPayPaymentRequestDiscountInput {
  /** The amount of the discount. */
  amount?: InputMaybe<MoneyInput>
  /** The label of the discount. */
  label?: InputMaybe<Scalars['String']['input']>
}

/** Represents an image for a Shop Pay payment request line item. */
export interface ShopPayPaymentRequestImage {
  __typename?: 'ShopPayPaymentRequestImage'
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>
  /** The source URL of the image. */
  url: Scalars['String']['output']
}

/** The input fields to create an image for a Shop Pay payment request. */
export interface ShopPayPaymentRequestImageInput {
  /** The alt text of the image. */
  alt?: InputMaybe<Scalars['String']['input']>
  /** The source URL of the image. */
  url: Scalars['String']['input']
}

/** The input fields represent a Shop Pay payment request. */
export interface ShopPayPaymentRequestInput {
  /**
   * The delivery methods for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  deliveryMethods?: InputMaybe<Array<ShopPayPaymentRequestDeliveryMethodInput>>
  /**
   * The discount codes for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>
  /**
   * The discounts for the payment request order.
   *
   * The input must not contain more than `250` values.
   */
  discounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>
  /**
   * The line items for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  lineItems?: InputMaybe<Array<ShopPayPaymentRequestLineItemInput>>
  /** The locale for the payment request. */
  locale: Scalars['String']['input']
  /** The encrypted payment method for the payment request. */
  paymentMethod?: InputMaybe<Scalars['String']['input']>
  /** The presentment currency for the payment request. */
  presentmentCurrency: CurrencyCode
  /** The delivery method type for the payment request. */
  selectedDeliveryMethodType?: InputMaybe<ShopPayPaymentRequestDeliveryMethodType>
  /**
   * The shipping lines for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  shippingLines?: InputMaybe<Array<ShopPayPaymentRequestShippingLineInput>>
  /** The subtotal amount for the payment request. */
  subtotal: MoneyInput
  /** The total amount for the payment request. */
  total: MoneyInput
  /** The total shipping price for the payment request. */
  totalShippingPrice?: InputMaybe<ShopPayPaymentRequestTotalShippingPriceInput>
  /** The total tax for the payment request. */
  totalTax?: InputMaybe<MoneyInput>
}

/** Represents a line item for a Shop Pay payment request. */
export interface ShopPayPaymentRequestLineItem {
  __typename?: 'ShopPayPaymentRequestLineItem'
  /** The final item price for the line item. */
  finalItemPrice: MoneyV2
  /** The final line price for the line item. */
  finalLinePrice: MoneyV2
  /** The image of the line item. */
  image?: Maybe<ShopPayPaymentRequestImage>
  /** The item discounts for the line item. */
  itemDiscounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>
  /** The label of the line item. */
  label: Scalars['String']['output']
  /** The line discounts for the line item. */
  lineDiscounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>
  /** The original item price for the line item. */
  originalItemPrice?: Maybe<MoneyV2>
  /** The original line price for the line item. */
  originalLinePrice?: Maybe<MoneyV2>
  /** The quantity of the line item. */
  quantity: Scalars['Int']['output']
  /** Whether the line item requires shipping. */
  requiresShipping?: Maybe<Scalars['Boolean']['output']>
  /** The SKU of the line item. */
  sku?: Maybe<Scalars['String']['output']>
}

/** The input fields to create a line item for a Shop Pay payment request. */
export interface ShopPayPaymentRequestLineItemInput {
  /** The final item price for the line item. */
  finalItemPrice?: InputMaybe<MoneyInput>
  /** The final line price for the line item. */
  finalLinePrice?: InputMaybe<MoneyInput>
  /** The image of the line item. */
  image?: InputMaybe<ShopPayPaymentRequestImageInput>
  /**
   * The item discounts for the line item.
   *
   * The input must not contain more than `250` values.
   */
  itemDiscounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>
  /** The label of the line item. */
  label?: InputMaybe<Scalars['String']['input']>
  /**
   * The line discounts for the line item.
   *
   * The input must not contain more than `250` values.
   */
  lineDiscounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>
  /** The original item price for the line item. */
  originalItemPrice?: InputMaybe<MoneyInput>
  /** The original line price for the line item. */
  originalLinePrice?: InputMaybe<MoneyInput>
  /** The quantity of the line item. */
  quantity: Scalars['Int']['input']
  /** Whether the line item requires shipping. */
  requiresShipping?: InputMaybe<Scalars['Boolean']['input']>
  /** The SKU of the line item. */
  sku?: InputMaybe<Scalars['String']['input']>
}

/** Represents a receipt for a Shop Pay payment request. */
export interface ShopPayPaymentRequestReceipt {
  __typename?: 'ShopPayPaymentRequestReceipt'
  /** The payment request object. */
  paymentRequest: ShopPayPaymentRequest
  /** The processing status. */
  processingStatusType: Scalars['String']['output']
  /** The token of the receipt. */
  token: Scalars['String']['output']
}

/** Represents a Shop Pay payment request session. */
export interface ShopPayPaymentRequestSession {
  __typename?: 'ShopPayPaymentRequestSession'
  /** The checkout URL of the Shop Pay payment request session. */
  checkoutUrl: Scalars['URL']['output']
  /** The payment request associated with the Shop Pay payment request session. */
  paymentRequest: ShopPayPaymentRequest
  /** The source identifier of the Shop Pay payment request session. */
  sourceIdentifier: Scalars['String']['output']
  /** The token of the Shop Pay payment request session. */
  token: Scalars['String']['output']
}

/** Return type for `shopPayPaymentRequestSessionCreate` mutation. */
export interface ShopPayPaymentRequestSessionCreatePayload {
  __typename?: 'ShopPayPaymentRequestSessionCreatePayload'
  /** The new Shop Pay payment request session object. */
  shopPayPaymentRequestSession?: Maybe<ShopPayPaymentRequestSession>
  /** Error codes for failed Shop Pay payment request session mutations. */
  userErrors: Array<UserErrorsShopPayPaymentRequestSessionUserErrors>
}

/** Return type for `shopPayPaymentRequestSessionSubmit` mutation. */
export interface ShopPayPaymentRequestSessionSubmitPayload {
  __typename?: 'ShopPayPaymentRequestSessionSubmitPayload'
  /** The checkout on which the payment was applied. */
  paymentRequestReceipt?: Maybe<ShopPayPaymentRequestReceipt>
  /** Error codes for failed Shop Pay payment request session mutations. */
  userErrors: Array<UserErrorsShopPayPaymentRequestSessionUserErrors>
}

/** Represents a shipping line for a Shop Pay payment request. */
export interface ShopPayPaymentRequestShippingLine {
  __typename?: 'ShopPayPaymentRequestShippingLine'
  /** The amount for the shipping line. */
  amount: MoneyV2
  /** The code of the shipping line. */
  code: Scalars['String']['output']
  /** The label of the shipping line. */
  label: Scalars['String']['output']
}

/** The input fields to create a shipping line for a Shop Pay payment request. */
export interface ShopPayPaymentRequestShippingLineInput {
  /** The amount for the shipping line. */
  amount?: InputMaybe<MoneyInput>
  /** The code of the shipping line. */
  code?: InputMaybe<Scalars['String']['input']>
  /** The label of the shipping line. */
  label?: InputMaybe<Scalars['String']['input']>
}

/** Represents a shipping total for a Shop Pay payment request. */
export interface ShopPayPaymentRequestTotalShippingPrice {
  __typename?: 'ShopPayPaymentRequestTotalShippingPrice'
  /** The discounts for the shipping total. */
  discounts: Array<ShopPayPaymentRequestDiscount>
  /** The final total for the shipping total. */
  finalTotal: MoneyV2
  /** The original total for the shipping total. */
  originalTotal?: Maybe<MoneyV2>
}

/** The input fields to create a shipping total for a Shop Pay payment request. */
export interface ShopPayPaymentRequestTotalShippingPriceInput {
  /**
   * The discounts for the shipping total.
   *
   * The input must not contain more than `250` values.
   */
  discounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>
  /** The final total for the shipping total. */
  finalTotal?: InputMaybe<MoneyInput>
  /** The original total for the shipping total. */
  originalTotal?: InputMaybe<MoneyInput>
}

/**
 * The input fields for submitting Shop Pay payment method information for checkout.
 *
 */
export interface ShopPayWalletContentInput {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput
  /** Session token for transaction. */
  sessionToken: Scalars['String']['input']
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopPolicy = Node & {
  __typename?: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']['output']
  /** Policy’s handle. */
  handle: Scalars['String']['output']
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** Policy’s title. */
  title: Scalars['String']['output']
  /** Public URL to the policy. */
  url: Scalars['URL']['output']
}

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
export interface ShopPolicyWithDefault {
  __typename?: 'ShopPolicyWithDefault'
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String']['output']
  /** The handle of the policy. */
  handle: Scalars['String']['output']
  /** The unique ID of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']['output']>
  /** The title of the policy. */
  title: Scalars['String']['output']
  /** Public URL to the policy. */
  url: Scalars['URL']['output']
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export interface StoreAvailability {
  __typename?: 'StoreAvailability'
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean']['output']
  /** The location where this product variant is stocked at. */
  location: Location
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']['output']
  /** The quantity of the product variant in-stock at this location. */
  quantityAvailable: Scalars['Int']['output']
}

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export interface StoreAvailabilityConnection {
  __typename?: 'StoreAvailabilityConnection'
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<StoreAvailability>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export interface StoreAvailabilityEdge {
  __typename?: 'StoreAvailabilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability
}

/**
 * An auto-generated type for paginating through multiple Strings.
 *
 */
export interface StringConnection {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<StringEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export interface StringEdge {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of StringEdge. */
  node: Scalars['String']['output']
}

/** An error that occurred during cart submit for completion. */
export interface SubmissionError {
  __typename?: 'SubmissionError'
  /** The error code. */
  code: SubmissionErrorCode
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>
}

/** The code of the error that occurred during cart submit for completion. */
export enum SubmissionErrorCode {
  BuyerIdentityEmailIsInvalid = 'BUYER_IDENTITY_EMAIL_IS_INVALID',
  BuyerIdentityEmailRequired = 'BUYER_IDENTITY_EMAIL_REQUIRED',
  BuyerIdentityPhoneIsInvalid = 'BUYER_IDENTITY_PHONE_IS_INVALID',
  DeliveryAddress1Invalid = 'DELIVERY_ADDRESS1_INVALID',
  DeliveryAddress1Required = 'DELIVERY_ADDRESS1_REQUIRED',
  DeliveryAddress1TooLong = 'DELIVERY_ADDRESS1_TOO_LONG',
  DeliveryAddress2Invalid = 'DELIVERY_ADDRESS2_INVALID',
  DeliveryAddress2Required = 'DELIVERY_ADDRESS2_REQUIRED',
  DeliveryAddress2TooLong = 'DELIVERY_ADDRESS2_TOO_LONG',
  DeliveryAddressRequired = 'DELIVERY_ADDRESS_REQUIRED',
  DeliveryCityInvalid = 'DELIVERY_CITY_INVALID',
  DeliveryCityRequired = 'DELIVERY_CITY_REQUIRED',
  DeliveryCityTooLong = 'DELIVERY_CITY_TOO_LONG',
  DeliveryCompanyInvalid = 'DELIVERY_COMPANY_INVALID',
  DeliveryCompanyRequired = 'DELIVERY_COMPANY_REQUIRED',
  DeliveryCompanyTooLong = 'DELIVERY_COMPANY_TOO_LONG',
  DeliveryCountryRequired = 'DELIVERY_COUNTRY_REQUIRED',
  DeliveryFirstNameInvalid = 'DELIVERY_FIRST_NAME_INVALID',
  DeliveryFirstNameRequired = 'DELIVERY_FIRST_NAME_REQUIRED',
  DeliveryFirstNameTooLong = 'DELIVERY_FIRST_NAME_TOO_LONG',
  DeliveryInvalidPostalCodeForCountry = 'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY',
  DeliveryInvalidPostalCodeForZone = 'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE',
  DeliveryLastNameInvalid = 'DELIVERY_LAST_NAME_INVALID',
  DeliveryLastNameRequired = 'DELIVERY_LAST_NAME_REQUIRED',
  DeliveryLastNameTooLong = 'DELIVERY_LAST_NAME_TOO_LONG',
  DeliveryNoDeliveryAvailable = 'DELIVERY_NO_DELIVERY_AVAILABLE',
  DeliveryNoDeliveryAvailableForMerchandiseLine = 'DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE',
  DeliveryOptionsPhoneNumberInvalid = 'DELIVERY_OPTIONS_PHONE_NUMBER_INVALID',
  DeliveryOptionsPhoneNumberRequired = 'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED',
  DeliveryPhoneNumberInvalid = 'DELIVERY_PHONE_NUMBER_INVALID',
  DeliveryPhoneNumberRequired = 'DELIVERY_PHONE_NUMBER_REQUIRED',
  DeliveryPostalCodeInvalid = 'DELIVERY_POSTAL_CODE_INVALID',
  DeliveryPostalCodeRequired = 'DELIVERY_POSTAL_CODE_REQUIRED',
  DeliveryZoneNotFound = 'DELIVERY_ZONE_NOT_FOUND',
  DeliveryZoneRequiredForCountry = 'DELIVERY_ZONE_REQUIRED_FOR_COUNTRY',
  Error = 'ERROR',
  MerchandiseLineLimitReached = 'MERCHANDISE_LINE_LIMIT_REACHED',
  MerchandiseNotApplicable = 'MERCHANDISE_NOT_APPLICABLE',
  MerchandiseNotEnoughStockAvailable = 'MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE',
  MerchandiseOutOfStock = 'MERCHANDISE_OUT_OF_STOCK',
  MerchandiseProductNotPublished = 'MERCHANDISE_PRODUCT_NOT_PUBLISHED',
  NoDeliveryGroupSelected = 'NO_DELIVERY_GROUP_SELECTED',
  PaymentsAddress1Invalid = 'PAYMENTS_ADDRESS1_INVALID',
  PaymentsAddress1Required = 'PAYMENTS_ADDRESS1_REQUIRED',
  PaymentsAddress1TooLong = 'PAYMENTS_ADDRESS1_TOO_LONG',
  PaymentsAddress2Invalid = 'PAYMENTS_ADDRESS2_INVALID',
  PaymentsAddress2Required = 'PAYMENTS_ADDRESS2_REQUIRED',
  PaymentsAddress2TooLong = 'PAYMENTS_ADDRESS2_TOO_LONG',
  PaymentsBillingAddressZoneNotFound = 'PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND',
  PaymentsBillingAddressZoneRequiredForCountry = 'PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY',
  PaymentsCityInvalid = 'PAYMENTS_CITY_INVALID',
  PaymentsCityRequired = 'PAYMENTS_CITY_REQUIRED',
  PaymentsCityTooLong = 'PAYMENTS_CITY_TOO_LONG',
  PaymentsCompanyInvalid = 'PAYMENTS_COMPANY_INVALID',
  PaymentsCompanyRequired = 'PAYMENTS_COMPANY_REQUIRED',
  PaymentsCompanyTooLong = 'PAYMENTS_COMPANY_TOO_LONG',
  PaymentsCountryRequired = 'PAYMENTS_COUNTRY_REQUIRED',
  PaymentsCreditCardBaseExpired = 'PAYMENTS_CREDIT_CARD_BASE_EXPIRED',
  PaymentsCreditCardBaseGatewayNotSupported = 'PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED',
  PaymentsCreditCardBaseInvalidStartDateOrIssueNumberForDebit = 'PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT',
  PaymentsCreditCardBrandNotSupported = 'PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED',
  PaymentsCreditCardFirstNameBlank = 'PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK',
  PaymentsCreditCardGeneric = 'PAYMENTS_CREDIT_CARD_GENERIC',
  PaymentsCreditCardLastNameBlank = 'PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK',
  PaymentsCreditCardMonthInclusion = 'PAYMENTS_CREDIT_CARD_MONTH_INCLUSION',
  PaymentsCreditCardNameInvalid = 'PAYMENTS_CREDIT_CARD_NAME_INVALID',
  PaymentsCreditCardNumberInvalid = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID',
  PaymentsCreditCardNumberInvalidFormat = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT',
  PaymentsCreditCardSessionId = 'PAYMENTS_CREDIT_CARD_SESSION_ID',
  PaymentsCreditCardVerificationValueBlank = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK',
  PaymentsCreditCardVerificationValueInvalidForCardType = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE',
  PaymentsCreditCardYearExpired = 'PAYMENTS_CREDIT_CARD_YEAR_EXPIRED',
  PaymentsCreditCardYearInvalidExpiryYear = 'PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR',
  PaymentsFirstNameInvalid = 'PAYMENTS_FIRST_NAME_INVALID',
  PaymentsFirstNameRequired = 'PAYMENTS_FIRST_NAME_REQUIRED',
  PaymentsFirstNameTooLong = 'PAYMENTS_FIRST_NAME_TOO_LONG',
  PaymentsInvalidPostalCodeForCountry = 'PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY',
  PaymentsInvalidPostalCodeForZone = 'PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE',
  PaymentsLastNameInvalid = 'PAYMENTS_LAST_NAME_INVALID',
  PaymentsLastNameRequired = 'PAYMENTS_LAST_NAME_REQUIRED',
  PaymentsLastNameTooLong = 'PAYMENTS_LAST_NAME_TOO_LONG',
  PaymentsMethodRequired = 'PAYMENTS_METHOD_REQUIRED',
  PaymentsMethodUnavailable = 'PAYMENTS_METHOD_UNAVAILABLE',
  PaymentsPhoneNumberInvalid = 'PAYMENTS_PHONE_NUMBER_INVALID',
  PaymentsPhoneNumberRequired = 'PAYMENTS_PHONE_NUMBER_REQUIRED',
  PaymentsPostalCodeInvalid = 'PAYMENTS_POSTAL_CODE_INVALID',
  PaymentsPostalCodeRequired = 'PAYMENTS_POSTAL_CODE_REQUIRED',
  PaymentsShopifyPaymentsRequired = 'PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED',
  PaymentsUnacceptablePaymentAmount = 'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
  PaymentsWalletContentMissing = 'PAYMENTS_WALLET_CONTENT_MISSING',
  TaxesDeliveryGroupIdNotFound = 'TAXES_DELIVERY_GROUP_ID_NOT_FOUND',
  TaxesLineIdNotFound = 'TAXES_LINE_ID_NOT_FOUND',
  TaxesMustBeDefined = 'TAXES_MUST_BE_DEFINED',
}

/** Cart submit for checkout completion is successful. */
export interface SubmitAlreadyAccepted {
  __typename?: 'SubmitAlreadyAccepted'
  /** The ID of the cart completion attempt that will be used for polling for the result. */
  attemptId: Scalars['String']['output']
}

/** Cart submit for checkout completion failed. */
export interface SubmitFailed {
  __typename?: 'SubmitFailed'
  /** The URL of the checkout for the cart. */
  checkoutUrl?: Maybe<Scalars['URL']['output']>
  /** The list of errors that occurred from executing the mutation. */
  errors: Array<SubmissionError>
}

/** Cart submit for checkout completion is already accepted. */
export interface SubmitSuccess {
  __typename?: 'SubmitSuccess'
  /** The ID of the cart completion attempt that will be used for polling for the result. */
  attemptId: Scalars['String']['output']
}

/** Cart submit for checkout completion is throttled. */
export interface SubmitThrottled {
  __typename?: 'SubmitThrottled'
  /**
   * UTC date time string that indicates the time after which clients should make their next
   * poll request. Any poll requests sent before this time will be ignored. Use this value to schedule the
   * next poll request.
   *
   */
  pollAfter: Scalars['DateTime']['output']
}

/** Color and image for visual representation. */
export interface Swatch {
  __typename?: 'Swatch'
  /** The swatch color. */
  color?: Maybe<Scalars['Color']['output']>
  /** The swatch image. */
  image?: Maybe<MediaImage>
}

/** Represents a resource that you can track the origin of the search traffic. */
export interface Trackable {
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export interface UnitPriceMeasurement {
  __typename?: 'UnitPriceMeasurement'
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']['output']
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']['output']
}

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
}

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** A redirect on the online store. */
export type UrlRedirect = Node & {
  __typename?: 'UrlRedirect'
  /** The ID of the URL redirect. */
  id: Scalars['ID']['output']
  /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
  path: Scalars['String']['output']
  /** The target location where the user will be redirected to. */
  target: Scalars['String']['output']
}

/**
 * An auto-generated type for paginating through multiple UrlRedirects.
 *
 */
export interface UrlRedirectConnection {
  __typename?: 'UrlRedirectConnection'
  /** A list of edges. */
  edges: Array<UrlRedirectEdge>
  /** A list of the nodes contained in UrlRedirectEdge. */
  nodes: Array<UrlRedirect>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one UrlRedirect and a cursor during pagination.
 *
 */
export interface UrlRedirectEdge {
  __typename?: 'UrlRedirectEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of UrlRedirectEdge. */
  node: UrlRedirect
}

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError'
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/** Error codes for failed Shop Pay payment request session mutations. */
export type UserErrorsShopPayPaymentRequestSessionUserErrors = DisplayableError & {
  __typename?: 'UserErrorsShopPayPaymentRequestSessionUserErrors'
  /** The error code. */
  code?: Maybe<UserErrorsShopPayPaymentRequestSessionUserErrorsCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>
  /** The error message. */
  message: Scalars['String']['output']
}

/** Possible error codes that can be returned by `ShopPayPaymentRequestSessionUserErrors`. */
export enum UserErrorsShopPayPaymentRequestSessionUserErrorsCode {
  /** Idempotency key has already been used. */
  IdempotencyKeyAlreadyUsed = 'IDEMPOTENCY_KEY_ALREADY_USED',
  /** Payment request input is invalid. */
  PaymentRequestInvalidInput = 'PAYMENT_REQUEST_INVALID_INPUT',
  /** Payment request not found. */
  PaymentRequestNotFound = 'PAYMENT_REQUEST_NOT_FOUND',
}

/** The input fields for a filter used to view a subset of products in a collection matching a specific variant option. */
export interface VariantOptionFilter {
  /** The name of the variant option to filter on. */
  name: Scalars['String']['input']
  /** The value of the variant option to filter on. */
  value: Scalars['String']['input']
}

/** Represents a Shopify hosted video. */
export type Video = Media & Node & {
  __typename?: 'Video'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>
  /** A globally-unique ID. */
  id: Scalars['ID']['output']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
  /** The sources for a video. */
  sources: Array<VideoSource>
}

/** Represents a source for a Shopify hosted video. */
export interface VideoSource {
  __typename?: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']['output']
  /** The height of the video. */
  height: Scalars['Int']['output']
  /** The video MIME type. */
  mimeType: Scalars['String']['output']
  /** The URL of the video. */
  url: Scalars['String']['output']
  /** The width of the video. */
  width: Scalars['Int']['output']
}

/** Units of measurement for weight. */
export enum WeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
}

export type GetProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
}>

export interface GetProductsQuery { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, title: string, description: string, featuredImage?: { __typename?: 'Image', id?: string | null, url: any } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } }> } } }> } }

export const GetProductsDocument = gql`
    query getProducts($first: Int) {
  products(first: $first) {
    edges {
      node {
        id
        title
        description
        featuredImage {
          id
          url
        }
        variants(first: 1) {
          edges {
            node {
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}
    `

/**
 * __useGetProductsQuery__
 *
 * To run a query within a Vue component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetProductsQuery({
 *   first: // value for 'first'
 * });
 */
export function useGetProductsQuery(variables: GetProductsQueryVariables | VueCompositionApi.Ref<GetProductsQueryVariables> | ReactiveFunction<GetProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, variables, options)
}
export function useGetProductsLazyQuery(variables: GetProductsQueryVariables | VueCompositionApi.Ref<GetProductsQueryVariables> | ReactiveFunction<GetProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProductsQuery, GetProductsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, variables, options)
}
export type GetProductsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetProductsQuery, GetProductsQueryVariables>