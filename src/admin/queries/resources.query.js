import { gql } from 'apollo-boost'

export default gql`
  query getResourcesByTopicId($topicId: String!) {
    getResourcesByTopicId(topicId: $topicId) {
      _id
      filename
      createdAt
      createdBy
    }
  }
`
export const DELETE_RESOURCES = gql`
  mutation deleteResources($ids: [String]!) {
    deleteResources(ids: $ids) {
      name
    }
  }
`
