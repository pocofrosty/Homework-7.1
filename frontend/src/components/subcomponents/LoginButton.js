import React from 'react'
import axios from 'axios'

const LoginButton = ({ username, password }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      await axios.post('/account/login', { username, password })
    }}
  >
    Log In
  </button>
)

export default LoginButton
