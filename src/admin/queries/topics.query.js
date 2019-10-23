import { gql } from 'apollo-boost'

export default gql`
  query getUnitTopics($unitId: String!) {
    getTopicsByUnitId(unitId: $unitId) {
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
  mutation createTopic($name: String!, $unitId: String!, $courseId: String!) {
    addTopic(name: $name, unitId: $unitId, courseId: $courseId) {
      name
      _id
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
