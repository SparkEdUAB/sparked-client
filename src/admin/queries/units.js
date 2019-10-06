import { gql } from 'apollo-boost'

export default gql`
  {
    getUnits {
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
export const CREATE_UNIT = gql`
  mutation createUnit($name: String!, $courseId: String!) {
    addUnit(name: $name, courseId: $courseId) {
      name
    }
  }
`
export const DELETE_UNIT = gql`
  mutation deleteUnit($ids: [String]!) {
    deleteUnit(ids: $ids) {
      name
    }
  }
`
