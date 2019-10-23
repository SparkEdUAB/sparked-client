import React, { useState, Fragment } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`

export default function FileUploads() {
  const [fileState, setState] = useState(null)
  const [singleUpload] = useMutation(UPLOAD_FILE)

  function handleFileUpload(e) {
    e.preventDefault()
    const { files } = e.target
    console.log(files[0])

    singleUpload({
      variables: { file: files[0] },
    })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  return (
    <Fragment>
      <input type="file" required onChange={handleFileUpload} />
      <button onClick={handleFileUpload}>submit</button>
    </Fragment>
  )
}
