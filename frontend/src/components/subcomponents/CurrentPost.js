import React from 'react'

const CurrentPost = ({ author, questionText, answer }) => (
  <>
    <label>
      {' '}
      {questionText}
      {' '}
    </label>
    <label>
      {' '}
      {`Author: ${author}`}
      {' '}
    </label>
    <label>
      {' '}
      {`Answer: ${answer}`}
      {' '}
    </label>
  </>
)

export default CurrentPost
