import React from 'react'

const SignUpButton = ({}) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      console.log(1)
    }}
  >
    Sign Up
  </button>
)

export default SignUpButton
