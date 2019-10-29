import { gql } from 'apollo-boost'

export default gql`
  query getResourcesByTopicId($topicId: String!) {
    getResourcesByTopicId(topicId: $topicId) {
      _id
      filename
      type
      path
      createdAt
      createdBy
    }
  }
`

export const GET_RESOURCE = gql`
  query getResource($id: String!) {
    getResource(id: $id) {
      path
      filename
      _id
    }
  }
`
export const DELETE_RESOURCES = gql`
  mutation deleteResources($ids: [String]!) {
    deleteResources(ids: $ids) {
      filename
    }
  }
`
