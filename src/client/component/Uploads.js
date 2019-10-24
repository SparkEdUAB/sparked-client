import React, { useState, Fragment } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import '../../admin/styles/resources.css'

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`

export default function FileUploads() {
  const [fileState, setState] = useState([])
  const [fileSize, setFileSize] = useState(0)
  const [singleUpload] = useMutation(UPLOAD_FILE)

  function handleFileUpload(e) {
    e.preventDefault()

    singleUpload({
      variables: { file: fileState[0] },
    })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  function handleFileChange(e) {
    const files = e.target.files
    setState(files)
    setFileSize(convertUploadSize(getFileSizes(files)))
  }
  return (
    <Fragment>
      {/* <input type="file" required onChange={e => setState(e.target.files)} />
       */}
      <div className="file-input">
        <input
          multiple
          type="file"
          name="files[]"
          onChange={handleFileChange}
        />
        <span className="button">Choose</span>
        <span className="label" data-js-label>
          {fileSize ? `Total size: ${fileSize}` : 'No file selected'}
        </span>
      </div>
      <button onClick={handleFileUpload}>Upload</button>
    </Fragment>
  )
}

function getFileSizes(files) {
  const all_size = []
  for (let index = 0; index < files.length; index++) {
    const file = files[index]
    all_size.push(file.size)
  }
  const sum = all_size.reduce((a, b) => a + b, 0) // adds all values in the all_sizes array
  return sum
}
export function convertUploadSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {
    return 'n/a'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) {
    return `${bytes} ${sizes[i]})`
  }
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}
