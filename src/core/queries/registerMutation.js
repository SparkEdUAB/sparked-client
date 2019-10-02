import { gql } from 'apollo-boost'

export default gql`
  mutation RegisterUser($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      email
      password
    }
  }
`
