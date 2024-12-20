/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const syncTodos = /* GraphQL */ `query SyncTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTodos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTodosQueryVariables, APITypes.SyncTodosQuery>;
export const getRestaurant = /* GraphQL */ `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    name
    description
    city
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantsQueryVariables,
  APITypes.ListRestaurantsQuery
>;
export const syncRestaurants = /* GraphQL */ `query SyncRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRestaurants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRestaurantsQueryVariables,
  APITypes.SyncRestaurantsQuery
>;
