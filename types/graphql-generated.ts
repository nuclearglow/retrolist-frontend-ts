// THIS FILE IS GENERATED, DO NOT EDIT!
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/**  A keystone list  */
export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  list?: Maybe<List>;
};

export type ItemCreateInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  list?: Maybe<ListRelateToOneInput>;
};

export type ItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<ItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ItemUpdateInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  list?: Maybe<ListRelateToOneInput>;
};

export type ItemWhereInput = {
  AND?: Maybe<Array<Maybe<ItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  list?: Maybe<ListWhereInput>;
  list_is_null?: Maybe<Scalars['Boolean']>;
};

export type ItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemsCreateInput = {
  data?: Maybe<ItemCreateInput>;
};

export type ItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemUpdateInput>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsHash: Scalars['String'];
  customViewsHash?: Maybe<Scalars['String']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

/**  A keystone list  */
export type List = {
  __typename?: 'List';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  items: Array<Item>;
  _itemsMeta?: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type ListItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type List_ItemsMetaArgs = {
  where?: Maybe<ItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ListCreateInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  items?: Maybe<ItemRelateToManyInput>;
};

export type ListRelateToManyInput = {
  create?: Maybe<Array<Maybe<ListCreateInput>>>;
  connect?: Maybe<Array<Maybe<ListWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ListWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ListRelateToOneInput = {
  create?: Maybe<ListCreateInput>;
  connect?: Maybe<ListWhereUniqueInput>;
  disconnect?: Maybe<ListWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ListUpdateInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  items?: Maybe<ItemRelateToManyInput>;
};

export type ListWhereInput = {
  AND?: Maybe<Array<Maybe<ListWhereInput>>>;
  OR?: Maybe<Array<Maybe<ListWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle?: Maybe<Scalars['String']>;
  subtitle_not?: Maybe<Scalars['String']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  subtitle_starts_with?: Maybe<Scalars['String']>;
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  subtitle_ends_with?: Maybe<Scalars['String']>;
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  subtitle_i?: Maybe<Scalars['String']>;
  subtitle_not_i?: Maybe<Scalars['String']>;
  subtitle_contains_i?: Maybe<Scalars['String']>;
  subtitle_not_contains_i?: Maybe<Scalars['String']>;
  subtitle_starts_with_i?: Maybe<Scalars['String']>;
  subtitle_not_starts_with_i?: Maybe<Scalars['String']>;
  subtitle_ends_with_i?: Maybe<Scalars['String']>;
  subtitle_not_ends_with_i?: Maybe<Scalars['String']>;
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  items_every?: Maybe<ItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  items_some?: Maybe<ItemWhereInput>;
  /**  condition must be false for all nodes  */
  items_none?: Maybe<ItemWhereInput>;
};

export type ListWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ListsCreateInput = {
  data?: Maybe<ListCreateInput>;
};

export type ListsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ListUpdateInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single List item.  */
  createList?: Maybe<List>;
  /**  Create multiple List items.  */
  createLists?: Maybe<Array<Maybe<List>>>;
  /**  Update a single List item by ID.  */
  updateList?: Maybe<List>;
  /**  Update multiple List items by ID.  */
  updateLists?: Maybe<Array<Maybe<List>>>;
  /**  Delete a single List item by ID.  */
  deleteList?: Maybe<List>;
  /**  Delete multiple List items by ID.  */
  deleteLists?: Maybe<Array<Maybe<List>>>;
  /**  Create a single Item item.  */
  createItem?: Maybe<Item>;
  /**  Create multiple Item items.  */
  createItems?: Maybe<Array<Maybe<Item>>>;
  /**  Update a single Item item by ID.  */
  updateItem?: Maybe<Item>;
  /**  Update multiple Item items by ID.  */
  updateItems?: Maybe<Array<Maybe<Item>>>;
  /**  Delete a single Item item by ID.  */
  deleteItem?: Maybe<Item>;
  /**  Delete multiple Item items by ID.  */
  deleteItems?: Maybe<Array<Maybe<Item>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateListArgs = {
  data?: Maybe<ListCreateInput>;
};


export type MutationCreateListsArgs = {
  data?: Maybe<Array<Maybe<ListsCreateInput>>>;
};


export type MutationUpdateListArgs = {
  id: Scalars['ID'];
  data?: Maybe<ListUpdateInput>;
};


export type MutationUpdateListsArgs = {
  data?: Maybe<Array<Maybe<ListsUpdateInput>>>;
};


export type MutationDeleteListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteListsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemArgs = {
  data?: Maybe<ItemCreateInput>;
};


export type MutationCreateItemsArgs = {
  data?: Maybe<Array<Maybe<ItemsCreateInput>>>;
};


export type MutationUpdateItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemUpdateInput>;
};


export type MutationUpdateItemsArgs = {
  data?: Maybe<Array<Maybe<ItemsUpdateInput>>>;
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all List items which match the where clause.  */
  allLists?: Maybe<Array<Maybe<List>>>;
  /**  Search for the List item with the matching ID.  */
  List?: Maybe<List>;
  /**  Perform a meta-query on all List items which match the where clause.  */
  _allListsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the List list.  */
  _ListsMeta?: Maybe<_ListMeta>;
  /**  Search for all Item items which match the where clause.  */
  allItems?: Maybe<Array<Maybe<Item>>>;
  /**  Search for the Item item with the matching ID.  */
  Item?: Maybe<Item>;
  /**  Perform a meta-query on all Item items which match the where clause.  */
  _allItemsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Item list.  */
  _ItemsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllListsArgs = {
  where?: Maybe<ListWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortListsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryListArgs = {
  where: ListWhereUniqueInput;
};


export type Query_AllListsMetaArgs = {
  where?: Maybe<ListWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortListsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput;
};


export type Query_AllItemsMetaArgs = {
  where?: Maybe<ItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  ListAsc = 'list_ASC',
  ListDesc = 'list_DESC'
}

export enum SortListsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  ItemsAsc = 'items_ASC',
  ItemsDesc = 'items_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ListsAsc = 'lists_ASC',
  ListsDesc = 'lists_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC'
}


/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  lists: Array<List>;
  _listsMeta?: Maybe<_QueryMeta>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type UserListsArgs = {
  where?: Maybe<ListWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortListsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_ListsMetaArgs = {
  where?: Maybe<ListWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortListsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lists?: Maybe<ListRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lists?: Maybe<ListRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  lists_every?: Maybe<ListWhereInput>;
  /**  condition must be true for at least 1 node  */
  lists_some?: Maybe<ListWhereInput>;
  /**  condition must be false for all nodes  */
  lists_none?: Maybe<ListWhereInput>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_not?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_not?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type CreateItemMutationVariables = Exact<{
  title: Scalars['String'];
  quantity: Scalars['Int'];
  list: ListRelateToOneInput;
}>;


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
  )> }
);

export type CreateListMutationVariables = Exact<{
  title: Scalars['String'];
  subtitle: Scalars['String'];
  user: UserRelateToOneInput;
}>;


export type CreateListMutation = (
  { __typename?: 'Mutation' }
  & { createList?: Maybe<(
    { __typename?: 'List' }
    & Pick<List, 'id'>
  )> }
);

export type DeleteListByIdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteListByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteList?: Maybe<(
    { __typename?: 'List' }
    & Pick<List, 'id'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
  )> }
);

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetMutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export type SignoutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type SaveItemMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  quantity: Scalars['Int'];
}>;


export type SaveItemMutation = (
  { __typename?: 'Mutation' }
  & { updateItem?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
  )> }
);

export type ListByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ListByIdQuery = (
  { __typename?: 'Query' }
  & { List?: Maybe<(
    { __typename?: 'List' }
    & Pick<List, 'title' | 'subtitle'>
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'title' | 'quantity'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
    & { lists: Array<(
      { __typename?: 'List' }
      & Pick<List, 'id' | 'title' | 'subtitle'>
      & { items: Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'title' | 'quantity'>
      )> }
    )> }
  )> }
);


export const CreateItemDocument = gql`
    mutation createItem($title: String!, $quantity: Int!, $list: ListRelateToOneInput!) {
  createItem(data: {title: $title, quantity: $quantity, list: $list}) {
    id
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      quantity: // value for 'quantity'
 *      list: // value for 'list'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreateListDocument = gql`
    mutation createList($title: String!, $subtitle: String!, $user: UserRelateToOneInput!) {
  createList(data: {title: $title, subtitle: $subtitle, user: $user}) {
    id
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      title: // value for 'title'
 *      subtitle: // value for 'subtitle'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const DeleteListByIdDocument = gql`
    mutation deleteListById($id: ID!) {
  deleteList(id: $id) {
    id
  }
}
    `;
export type DeleteListByIdMutationFn = Apollo.MutationFunction<DeleteListByIdMutation, DeleteListByIdMutationVariables>;

/**
 * __useDeleteListByIdMutation__
 *
 * To run a mutation, you first call `useDeleteListByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListByIdMutation, { data, loading, error }] = useDeleteListByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListByIdMutation, DeleteListByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListByIdMutation, DeleteListByIdMutationVariables>(DeleteListByIdDocument, options);
      }
export type DeleteListByIdMutationHookResult = ReturnType<typeof useDeleteListByIdMutation>;
export type DeleteListByIdMutationResult = Apollo.MutationResult<DeleteListByIdMutation>;
export type DeleteListByIdMutationOptions = Apollo.BaseMutationOptions<DeleteListByIdMutation, DeleteListByIdMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        name
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      code
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $name: String!, $password: String!) {
  createUser(data: {email: $email, name: $name, password: $password}) {
    id
    email
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const RequestResetDocument = gql`
    mutation requestReset($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
    `;
export type RequestResetMutationFn = Apollo.MutationFunction<RequestResetMutation, RequestResetMutationVariables>;

/**
 * __useRequestResetMutation__
 *
 * To run a mutation, you first call `useRequestResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutation, { data, loading, error }] = useRequestResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, options);
      }
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<RequestResetMutation, RequestResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignoutDocument = gql`
    mutation signout {
  endSession
}
    `;
export type SignoutMutationFn = Apollo.MutationFunction<SignoutMutation, SignoutMutationVariables>;

/**
 * __useSignoutMutation__
 *
 * To run a mutation, you first call `useSignoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signoutMutation, { data, loading, error }] = useSignoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignoutMutation(baseOptions?: Apollo.MutationHookOptions<SignoutMutation, SignoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignoutMutation, SignoutMutationVariables>(SignoutDocument, options);
      }
export type SignoutMutationHookResult = ReturnType<typeof useSignoutMutation>;
export type SignoutMutationResult = Apollo.MutationResult<SignoutMutation>;
export type SignoutMutationOptions = Apollo.BaseMutationOptions<SignoutMutation, SignoutMutationVariables>;
export const SaveItemDocument = gql`
    mutation saveItem($id: ID!, $title: String!, $quantity: Int!) {
  updateItem(id: $id, data: {title: $title, quantity: $quantity}) {
    id
  }
}
    `;
export type SaveItemMutationFn = Apollo.MutationFunction<SaveItemMutation, SaveItemMutationVariables>;

/**
 * __useSaveItemMutation__
 *
 * To run a mutation, you first call `useSaveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveItemMutation, { data, loading, error }] = useSaveItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useSaveItemMutation(baseOptions?: Apollo.MutationHookOptions<SaveItemMutation, SaveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveItemMutation, SaveItemMutationVariables>(SaveItemDocument, options);
      }
export type SaveItemMutationHookResult = ReturnType<typeof useSaveItemMutation>;
export type SaveItemMutationResult = Apollo.MutationResult<SaveItemMutation>;
export type SaveItemMutationOptions = Apollo.BaseMutationOptions<SaveItemMutation, SaveItemMutationVariables>;
export const ListByIdDocument = gql`
    query listById($id: ID!) {
  List(where: {id: $id}) {
    title
    subtitle
    items {
      id
      title
      quantity
    }
  }
}
    `;

/**
 * __useListByIdQuery__
 *
 * To run a query within a React component, call `useListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListByIdQuery(baseOptions: Apollo.QueryHookOptions<ListByIdQuery, ListByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListByIdQuery, ListByIdQueryVariables>(ListByIdDocument, options);
      }
export function useListByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListByIdQuery, ListByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListByIdQuery, ListByIdQueryVariables>(ListByIdDocument, options);
        }
export type ListByIdQueryHookResult = ReturnType<typeof useListByIdQuery>;
export type ListByIdLazyQueryHookResult = ReturnType<typeof useListByIdLazyQuery>;
export type ListByIdQueryResult = Apollo.QueryResult<ListByIdQuery, ListByIdQueryVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  authenticatedItem {
    ... on User {
      id
      email
      name
      lists {
        id
        title
        subtitle
        items {
          id
          title
          quantity
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AuthenticatedItem": [
      "User"
    ],
    "UserAuthenticationWithPasswordResult": [
      "UserAuthenticationWithPasswordSuccess",
      "UserAuthenticationWithPasswordFailure"
    ]
  }
};
      export default result;
    
// Generated on 05.08.21 16:07:10+02:00
