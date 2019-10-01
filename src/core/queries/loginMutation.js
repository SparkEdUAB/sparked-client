import { gql } from 'apollo-boost'

export default gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
