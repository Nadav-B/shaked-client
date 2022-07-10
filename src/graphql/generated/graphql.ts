import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
  _FieldSet: any;
};

export type Answer = {
  __typename?: 'Answer';
  answer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Scalars['String']>;
};

export type AnswerInput = {
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  phoneNumber: Scalars['String'];
  survey?: Maybe<Survey>;
};

export type ContactInput = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  phoneNumber: Scalars['String'];
  survey?: InputMaybe<SurveyInput>;
};

export type ContactUniqueInput = {
  id: Scalars['String'];
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN'
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN'
}

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['Date'];
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type Module = {
  __typename?: 'Module';
  contactButton?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  introduction?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: ModuleType;
  updatedAt: Scalars['Date'];
};

export type ModuleInput = {
  contactButton?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  mediaId?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ModuleType>;
};

export enum ModuleType {
  Article = 'ARTICLE',
  Introduction = 'INTRODUCTION',
  Offer = 'OFFER',
  Service = 'SERVICE'
}

export type ModuleUniqueInput = {
  id: Scalars['String'];
};

export type ModuleWhereInput = {
  type?: InputMaybe<ModuleType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteContact: Contact;
  deleteMedia: Module;
  deleteModule: Module;
  saveContact?: Maybe<Contact>;
  saveMedia?: Maybe<Media>;
  saveModule?: Maybe<Module>;
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID'];
};


export type MutationSaveContactArgs = {
  data: ContactInput;
};


export type MutationSaveMediaArgs = {
  data: Scalars['Upload'];
};


export type MutationSaveModuleArgs = {
  data: ModuleInput;
};

export type Query = {
  __typename?: 'Query';
  _service?: Maybe<_Service>;
  contact?: Maybe<Contact>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  isAuthenticated?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<Maybe<Media>>>;
  module?: Maybe<Module>;
  modules?: Maybe<Array<Maybe<Module>>>;
};


export type QueryContactArgs = {
  where: ContactUniqueInput;
};


export type QueryModuleArgs = {
  where: ModuleUniqueInput;
};


export type QueryModulesArgs = {
  where?: InputMaybe<ModuleWhereInput>;
};

export type Survey = {
  __typename?: 'Survey';
  answers?: Maybe<Array<Maybe<Answer>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SurveyInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String'];
};

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteContactMutation = { __typename?: 'Mutation', deleteContact: { __typename?: 'Contact', id: string } };

export type DeleteModuleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteModuleMutation = { __typename?: 'Mutation', deleteModule: { __typename?: 'Module', id: string } };

export type GetAllModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllModulesQuery = { __typename?: 'Query', modules?: Array<{ __typename?: 'Module', id: string, title?: string | null, introduction?: string | null, tag?: string | null, mediaId?: number | null } | null> | null };

export type GetContactQueryVariables = Exact<{
  where: ContactUniqueInput;
}>;


export type GetContactQuery = { __typename?: 'Query', contact?: { __typename?: 'Contact', id: string, fullName: string, category?: string | null, createdAt: any, phoneNumber: string, survey?: { __typename?: 'Survey', id?: string | null, name?: string | null, answers?: Array<{ __typename?: 'Answer', answer?: string | null, question?: string | null } | null> | null } | null } | null };

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', contacts?: Array<{ __typename?: 'Contact', id: string, fullName: string, category?: string | null, createdAt: any, phoneNumber: string, survey?: { __typename?: 'Survey', id?: string | null, name?: string | null, answers?: Array<{ __typename?: 'Answer', answer?: string | null, question?: string | null } | null> | null } | null } | null> | null };

export type GetMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMediaQuery = { __typename?: 'Query', media?: Array<{ __typename?: 'Media', id: string, fileName?: string | null } | null> | null };

export type GetModuleQueryVariables = Exact<{
  where: ModuleUniqueInput;
}>;


export type GetModuleQuery = { __typename?: 'Query', module?: { __typename?: 'Module', id: string, title?: string | null, introduction?: string | null, content?: string | null, tag?: string | null, mediaId?: number | null, contactButton?: string | null, createdAt: any, updatedAt: any, type: ModuleType } | null };

export type GetModulesQueryVariables = Exact<{
  where: ModuleWhereInput;
}>;


export type GetModulesQuery = { __typename?: 'Query', modules?: Array<{ __typename?: 'Module', id: string, title?: string | null, introduction?: string | null, tag?: string | null, mediaId?: number | null } | null> | null };

export type GetModulesWithContentQueryVariables = Exact<{
  where: ModuleWhereInput;
}>;


export type GetModulesWithContentQuery = { __typename?: 'Query', modules?: Array<{ __typename?: 'Module', id: string, title?: string | null, introduction?: string | null, tag?: string | null, content?: string | null, mediaId?: number | null } | null> | null };

export type IsAuthenticatedQueryVariables = Exact<{ [key: string]: never; }>;


export type IsAuthenticatedQuery = { __typename?: 'Query', isAuthenticated?: boolean | null };

export type SaveContactMutationVariables = Exact<{
  data: ContactInput;
}>;


export type SaveContactMutation = { __typename?: 'Mutation', saveContact?: { __typename?: 'Contact', fullName: string, phoneNumber: string, email?: string | null, address?: string | null, category?: string | null, comment?: string | null } | null };

export type SaveMediaMutationVariables = Exact<{
  data: Scalars['Upload'];
}>;


export type SaveMediaMutation = { __typename?: 'Mutation', saveMedia?: { __typename?: 'Media', id: string, fileName?: string | null } | null };

export type SaveModuleMutationVariables = Exact<{
  data: ModuleInput;
}>;


export type SaveModuleMutation = { __typename?: 'Mutation', saveModule?: { __typename?: 'Module', id: string, title?: string | null, introduction?: string | null, tag?: string | null, content?: string | null, mediaId?: number | null, contactButton?: string | null, type: ModuleType } | null };

export const namedOperations = {
  Query: {
    GetAllModules: 'GetAllModules',
    GetContact: 'GetContact',
    GetContacts: 'GetContacts',
    GetMedia: 'GetMedia',
    GetModule: 'GetModule',
    GetModules: 'GetModules',
    GetModulesWithContent: 'GetModulesWithContent',
    IsAuthenticated: 'IsAuthenticated'
  },
  Mutation: {
    DeleteContact: 'DeleteContact',
    DeleteModule: 'DeleteModule',
    SaveContact: 'SaveContact',
    SaveMedia: 'SaveMedia',
    SaveModule: 'SaveModule'
  }
}

export const DeleteContactDocument = gql`
    mutation DeleteContact($id: ID!) {
  deleteContact(id: $id) {
    id
  }
}
    `;
export type DeleteContactMutationFn = Apollo.MutationFunction<DeleteContactMutation, DeleteContactMutationVariables>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutation, DeleteContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutation, DeleteContactMutationVariables>(DeleteContactDocument, options);
      }
export type DeleteContactMutationHookResult = ReturnType<typeof useDeleteContactMutation>;
export type DeleteContactMutationResult = Apollo.MutationResult<DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutation, DeleteContactMutationVariables>;
export const DeleteModuleDocument = gql`
    mutation DeleteModule($id: ID!) {
  deleteModule(id: $id) {
    id
  }
}
    `;
export type DeleteModuleMutationFn = Apollo.MutationFunction<DeleteModuleMutation, DeleteModuleMutationVariables>;

/**
 * __useDeleteModuleMutation__
 *
 * To run a mutation, you first call `useDeleteModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteModuleMutation, { data, loading, error }] = useDeleteModuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteModuleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteModuleMutation, DeleteModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteModuleMutation, DeleteModuleMutationVariables>(DeleteModuleDocument, options);
      }
export type DeleteModuleMutationHookResult = ReturnType<typeof useDeleteModuleMutation>;
export type DeleteModuleMutationResult = Apollo.MutationResult<DeleteModuleMutation>;
export type DeleteModuleMutationOptions = Apollo.BaseMutationOptions<DeleteModuleMutation, DeleteModuleMutationVariables>;
export const GetAllModulesDocument = gql`
    query GetAllModules {
  modules {
    id
    title
    introduction
    tag
    mediaId
  }
}
    `;

/**
 * __useGetAllModulesQuery__
 *
 * To run a query within a React component, call `useGetAllModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllModulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllModulesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllModulesQuery, GetAllModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllModulesQuery, GetAllModulesQueryVariables>(GetAllModulesDocument, options);
      }
export function useGetAllModulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllModulesQuery, GetAllModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllModulesQuery, GetAllModulesQueryVariables>(GetAllModulesDocument, options);
        }
export type GetAllModulesQueryHookResult = ReturnType<typeof useGetAllModulesQuery>;
export type GetAllModulesLazyQueryHookResult = ReturnType<typeof useGetAllModulesLazyQuery>;
export type GetAllModulesQueryResult = Apollo.QueryResult<GetAllModulesQuery, GetAllModulesQueryVariables>;
export const GetContactDocument = gql`
    query GetContact($where: ContactUniqueInput!) {
  contact(where: $where) {
    id
    fullName
    category
    createdAt
    phoneNumber
    survey {
      id
      name
      answers {
        answer
        question
      }
    }
  }
}
    `;

/**
 * __useGetContactQuery__
 *
 * To run a query within a React component, call `useGetContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetContactQuery(baseOptions: Apollo.QueryHookOptions<GetContactQuery, GetContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactQuery, GetContactQueryVariables>(GetContactDocument, options);
      }
export function useGetContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactQuery, GetContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactQuery, GetContactQueryVariables>(GetContactDocument, options);
        }
export type GetContactQueryHookResult = ReturnType<typeof useGetContactQuery>;
export type GetContactLazyQueryHookResult = ReturnType<typeof useGetContactLazyQuery>;
export type GetContactQueryResult = Apollo.QueryResult<GetContactQuery, GetContactQueryVariables>;
export const GetContactsDocument = gql`
    query GetContacts {
  contacts {
    id
    fullName
    category
    createdAt
    phoneNumber
    survey {
      id
      name
      answers {
        answer
        question
      }
    }
  }
}
    `;

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
      }
export function useGetContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
        }
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<typeof useGetContactsLazyQuery>;
export type GetContactsQueryResult = Apollo.QueryResult<GetContactsQuery, GetContactsQueryVariables>;
export const GetMediaDocument = gql`
    query GetMedia {
  media {
    id
    fileName
  }
}
    `;

/**
 * __useGetMediaQuery__
 *
 * To run a query within a React component, call `useGetMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMediaQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
      }
export function useGetMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
        }
export type GetMediaQueryHookResult = ReturnType<typeof useGetMediaQuery>;
export type GetMediaLazyQueryHookResult = ReturnType<typeof useGetMediaLazyQuery>;
export type GetMediaQueryResult = Apollo.QueryResult<GetMediaQuery, GetMediaQueryVariables>;
export const GetModuleDocument = gql`
    query GetModule($where: ModuleUniqueInput!) {
  module(where: $where) {
    id
    title
    introduction
    content
    tag
    mediaId
    contactButton
    createdAt
    updatedAt
    type
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetModuleQuery__
 *
 * To run a query within a React component, call `useGetModuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModuleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetModuleQuery(baseOptions: Apollo.QueryHookOptions<GetModuleQuery, GetModuleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModuleQuery, GetModuleQueryVariables>(GetModuleDocument, options);
      }
export function useGetModuleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModuleQuery, GetModuleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModuleQuery, GetModuleQueryVariables>(GetModuleDocument, options);
        }
export type GetModuleQueryHookResult = ReturnType<typeof useGetModuleQuery>;
export type GetModuleLazyQueryHookResult = ReturnType<typeof useGetModuleLazyQuery>;
export type GetModuleQueryResult = Apollo.QueryResult<GetModuleQuery, GetModuleQueryVariables>;
export const GetModulesDocument = gql`
    query GetModules($where: ModuleWhereInput!) {
  modules(where: $where) {
    id
    title
    introduction
    tag
    mediaId
  }
}
    `;

/**
 * __useGetModulesQuery__
 *
 * To run a query within a React component, call `useGetModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModulesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetModulesQuery(baseOptions: Apollo.QueryHookOptions<GetModulesQuery, GetModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModulesQuery, GetModulesQueryVariables>(GetModulesDocument, options);
      }
export function useGetModulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModulesQuery, GetModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModulesQuery, GetModulesQueryVariables>(GetModulesDocument, options);
        }
export type GetModulesQueryHookResult = ReturnType<typeof useGetModulesQuery>;
export type GetModulesLazyQueryHookResult = ReturnType<typeof useGetModulesLazyQuery>;
export type GetModulesQueryResult = Apollo.QueryResult<GetModulesQuery, GetModulesQueryVariables>;
export const GetModulesWithContentDocument = gql`
    query GetModulesWithContent($where: ModuleWhereInput!) {
  modules(where: $where) {
    id
    title
    introduction
    tag
    content
    mediaId
  }
}
    `;

/**
 * __useGetModulesWithContentQuery__
 *
 * To run a query within a React component, call `useGetModulesWithContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModulesWithContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModulesWithContentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetModulesWithContentQuery(baseOptions: Apollo.QueryHookOptions<GetModulesWithContentQuery, GetModulesWithContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModulesWithContentQuery, GetModulesWithContentQueryVariables>(GetModulesWithContentDocument, options);
      }
export function useGetModulesWithContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModulesWithContentQuery, GetModulesWithContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModulesWithContentQuery, GetModulesWithContentQueryVariables>(GetModulesWithContentDocument, options);
        }
export type GetModulesWithContentQueryHookResult = ReturnType<typeof useGetModulesWithContentQuery>;
export type GetModulesWithContentLazyQueryHookResult = ReturnType<typeof useGetModulesWithContentLazyQuery>;
export type GetModulesWithContentQueryResult = Apollo.QueryResult<GetModulesWithContentQuery, GetModulesWithContentQueryVariables>;
export const IsAuthenticatedDocument = gql`
    query IsAuthenticated {
  isAuthenticated
}
    `;

/**
 * __useIsAuthenticatedQuery__
 *
 * To run a query within a React component, call `useIsAuthenticatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAuthenticatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAuthenticatedQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsAuthenticatedQuery(baseOptions?: Apollo.QueryHookOptions<IsAuthenticatedQuery, IsAuthenticatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsAuthenticatedQuery, IsAuthenticatedQueryVariables>(IsAuthenticatedDocument, options);
      }
export function useIsAuthenticatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAuthenticatedQuery, IsAuthenticatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsAuthenticatedQuery, IsAuthenticatedQueryVariables>(IsAuthenticatedDocument, options);
        }
export type IsAuthenticatedQueryHookResult = ReturnType<typeof useIsAuthenticatedQuery>;
export type IsAuthenticatedLazyQueryHookResult = ReturnType<typeof useIsAuthenticatedLazyQuery>;
export type IsAuthenticatedQueryResult = Apollo.QueryResult<IsAuthenticatedQuery, IsAuthenticatedQueryVariables>;
export const SaveContactDocument = gql`
    mutation SaveContact($data: ContactInput!) {
  saveContact(data: $data) {
    fullName
    phoneNumber
    email
    address
    category
    comment
  }
}
    `;
export type SaveContactMutationFn = Apollo.MutationFunction<SaveContactMutation, SaveContactMutationVariables>;

/**
 * __useSaveContactMutation__
 *
 * To run a mutation, you first call `useSaveContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveContactMutation, { data, loading, error }] = useSaveContactMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveContactMutation(baseOptions?: Apollo.MutationHookOptions<SaveContactMutation, SaveContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveContactMutation, SaveContactMutationVariables>(SaveContactDocument, options);
      }
export type SaveContactMutationHookResult = ReturnType<typeof useSaveContactMutation>;
export type SaveContactMutationResult = Apollo.MutationResult<SaveContactMutation>;
export type SaveContactMutationOptions = Apollo.BaseMutationOptions<SaveContactMutation, SaveContactMutationVariables>;
export const SaveMediaDocument = gql`
    mutation SaveMedia($data: Upload!) {
  saveMedia(data: $data) {
    id
    fileName
  }
}
    `;
export type SaveMediaMutationFn = Apollo.MutationFunction<SaveMediaMutation, SaveMediaMutationVariables>;

/**
 * __useSaveMediaMutation__
 *
 * To run a mutation, you first call `useSaveMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveMediaMutation, { data, loading, error }] = useSaveMediaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveMediaMutation(baseOptions?: Apollo.MutationHookOptions<SaveMediaMutation, SaveMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveMediaMutation, SaveMediaMutationVariables>(SaveMediaDocument, options);
      }
export type SaveMediaMutationHookResult = ReturnType<typeof useSaveMediaMutation>;
export type SaveMediaMutationResult = Apollo.MutationResult<SaveMediaMutation>;
export type SaveMediaMutationOptions = Apollo.BaseMutationOptions<SaveMediaMutation, SaveMediaMutationVariables>;
export const SaveModuleDocument = gql`
    mutation SaveModule($data: ModuleInput!) {
  saveModule(data: $data) {
    id
    title
    introduction
    tag
    content
    mediaId
    contactButton
    type
  }
}
    `;
export type SaveModuleMutationFn = Apollo.MutationFunction<SaveModuleMutation, SaveModuleMutationVariables>;

/**
 * __useSaveModuleMutation__
 *
 * To run a mutation, you first call `useSaveModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveModuleMutation, { data, loading, error }] = useSaveModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveModuleMutation(baseOptions?: Apollo.MutationHookOptions<SaveModuleMutation, SaveModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveModuleMutation, SaveModuleMutationVariables>(SaveModuleDocument, options);
      }
export type SaveModuleMutationHookResult = ReturnType<typeof useSaveModuleMutation>;
export type SaveModuleMutationResult = Apollo.MutationResult<SaveModuleMutation>;
export type SaveModuleMutationOptions = Apollo.BaseMutationOptions<SaveModuleMutation, SaveModuleMutationVariables>;