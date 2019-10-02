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
    addCourse(name: $name)
  }
`
