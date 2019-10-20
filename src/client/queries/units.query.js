import { gql } from 'apollo-boost'

export default gql`
  query getCourseUnits($courseId: String!) {
    getUnitsByCourseId(courseId: $courseId) {
      _id
      name
      createdAt
      topics {
        _id
        name
      }
    }
  }
`
