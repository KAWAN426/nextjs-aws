/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      descript
      img
      createdAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        descript
        img
        createdAt
      }
      nextToken
    }
  }
`;
// export const postsByDate = /* GraphQL */ `
//   query PostsByDate(
//     $type: String!
//     $createdAt: ModelStringKeyConditionInput
//     $sortDirection: ModelSortDirection
//     $filter: ModelPostFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     postsByDate(
//       type: $type
//       createdAt: $createdAt
//       sortDirection: $sortDirection
//       filter: $filter
//       limit: $limit
//       nextToken: $nextToken
//     ) {
//       items {
//         id
//         title
//         descript
//         img
//         createdAt
//       }
//       nextToken
//     }
//   }
// `;

export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: DESC
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        descript
        img
        createdAt
      }
      nextToken
    }
  }
`;