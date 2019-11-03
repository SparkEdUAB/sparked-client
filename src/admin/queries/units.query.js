import { gql } from 'apollo-boost'

export default gql`
  query getCourseUnits($courseId: String!) {
    getUnitsByCourseId(courseId: $courseId) {
      _id
      name
      createdAt
      createdByName
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
