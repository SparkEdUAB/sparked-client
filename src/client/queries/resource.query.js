import { gql } from 'apollo-boost'

export default gql`
  query getResources($topicId: String!) {
    getResourceByTopicId($topicId: $topicId) {
      _id
      name
      createdAt
      topics {
        _id
        name
      }
    }
  }
`
