import { gql } from 'apollo-boost'

export default gql`
  {
    getTopics {
      _id
      name
      createdAt
      createdBy
    }
  }
`

//   name: String!
//   unitId: String!
//   courseId: String!
export const CREATE_TOPIC = gql`
  mutation createTopic($name: String!) {
    addTopic(name: $name) {
      name
    }
  }
`
export const DELETE_TOPIC = gql`
  mutation deleteTopic($ids: [String]!) {
    deleteTopic(ids: $ids) {
      name
    }
  }
`
