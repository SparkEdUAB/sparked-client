import { gql } from 'apollo-boost'

export default gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $name: String!
    $gender: String!
  ) {
    register(email: $email, password: $password, name: $name, gender: $gender) {
      email
      password
    }
  }
`
