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
