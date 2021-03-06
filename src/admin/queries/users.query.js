import { gql } from 'apollo-boost'

export default gql`
  {
    allUsers {
      _id
      name
      role
      gender
      email
    }
  }
`
export const UPDATE_USER = gql`
  mutation updateRole($name: String!) {
    updateRole(name: $name) {
      name
    }
  }
`
export const DELETE_USERS = gql`
  mutation deleteUser($ids: [String]!) {
    deleteUser(ids: $ids) {
      name
    }
  }
`
