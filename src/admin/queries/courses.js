import { gql } from 'apollo-boost'

export default gql`
  {
    getCourses {
      _id
      name
      createdAt
      topics {
        name
      }
      createdBy
    }
  }
`
export const CREATE_COURSE = gql`
  mutation createCourse($name: String!) {
    addCourse(name: $name) {
      name
    }
  }
`
export const DELETE_COURSE = gql`
  mutation deleteCourse($ids: [String]!) {
    deleteCourse(ids: $ids) {
      name
    }
  }
`
