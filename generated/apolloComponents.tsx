import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Exercise = {
  __typename?: 'Exercise';
  id: Scalars['ID'];
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  weight: Scalars['Float'];
  user: User;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  signUp: Token;
  signIn: Token;
  signOut: Scalars['String'];
  createExercise: Exercise;
  deleteExercise: Scalars['Boolean'];
  updateExercise?: Maybe<Exercise>;
};

export type MutationSignUpArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignInArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateExerciseArgs = {
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  weight: Scalars['Float'];
};

export type MutationDeleteExerciseArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateExerciseArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  weight: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  exercises: Array<Exercise>;
  exercise: Exercise;
  exercisesByName: Array<Exercise>;
  leaderboards: Array<Exercise>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryExerciseArgs = {
  id: Scalars['ID'];
};

export type QueryExercisesByNameArgs = {
  name: Scalars['String'];
};

export type QueryLeaderboardsArgs = {
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  exercises?: Maybe<Array<Exercise>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};
export type SignInMutationVariables = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'Token' } & Pick<Token, 'token'>;
};

export type SignOutMutationVariables = {};

export type SignOutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'signOut'
>;

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'username'>>;
};

export const SignInDocument = gql`
  mutation SignIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;
export type SignInMutationFn = ReactApollo.MutationFn<
  SignInMutation,
  SignInMutationVariables
>;
export type SignInComponentProps = Omit<
  ReactApollo.MutationProps<SignInMutation, SignInMutationVariables>,
  'mutation'
>;

export const SignInComponent = (props: SignInComponentProps) => (
  <ReactApollo.Mutation<SignInMutation, SignInMutationVariables>
    mutation={SignInDocument}
    {...props}
  />
);

export type SignInProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignInMutation, SignInMutationVariables>
> &
  TChildProps;
export function withSignIn<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignInMutation,
    SignInMutationVariables,
    SignInProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignInMutation,
    SignInMutationVariables,
    SignInProps<TChildProps>
  >(SignInDocument, {
    alias: 'withSignIn',
    ...operationOptions,
  });
}

export function useSignInMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    baseOptions
  );
}
export const SignOutDocument = gql`
  mutation SignOut {
    signOut
  }
`;
export type SignOutMutationFn = ReactApollo.MutationFn<
  SignOutMutation,
  SignOutMutationVariables
>;
export type SignOutComponentProps = Omit<
  ReactApollo.MutationProps<SignOutMutation, SignOutMutationVariables>,
  'mutation'
>;

export const SignOutComponent = (props: SignOutComponentProps) => (
  <ReactApollo.Mutation<SignOutMutation, SignOutMutationVariables>
    mutation={SignOutDocument}
    {...props}
  />
);

export type SignOutProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignOutMutation, SignOutMutationVariables>
> &
  TChildProps;
export function withSignOut<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignOutMutation,
    SignOutMutationVariables,
    SignOutProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignOutMutation,
    SignOutMutationVariables,
    SignOutProps<TChildProps>
  >(SignOutDocument, {
    alias: 'withSignOut',
    ...operationOptions,
  });
}

export function useSignOutMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    SignOutMutation,
    SignOutMutationVariables
  >(SignOutDocument, baseOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
export type MeComponentProps = Omit<
  ReactApollo.QueryProps<MeQuery, MeQueryVariables>,
  'query'
>;

export const MeComponent = (props: MeComponentProps) => (
  <ReactApollo.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
);

export type MeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQuery, MeQueryVariables>
> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >(MeDocument, {
    alias: 'withMe',
    ...operationOptions,
  });
}

export function useMeQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryVariables>
) {
  return ReactApolloHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
