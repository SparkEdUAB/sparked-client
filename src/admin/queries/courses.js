import { gql } from 'apollo-boost'

export default gql`
  {
    getCourses {
      name
      createdAt
      topics {
        name
      }
      createdBy
    }
  }
`
