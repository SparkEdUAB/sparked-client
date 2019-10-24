import { gql } from 'apollo-boost'

export default gql`
  {
    getFiles {
      _id
      filename
      createdAt
      createdBy
    }
  }
`
