import React from 'react'
import axios from 'axios'

const SubmitAnswerButton = ({ _id, answer }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      try {
        await axios.post('/api/questions/answer', { _id, answer })
        console.log(`${_id} ${answer}`)
      } catch (e) {
        alert('Cannot Submit Answer')
      }
    }}
  >
    Submit Answer
  </button>
)

export default SubmitAnswerButton
