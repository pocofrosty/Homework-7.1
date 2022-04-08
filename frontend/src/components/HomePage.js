import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Title from './subcomponents/Title'

const HomePage = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Title text="Campuswire Lite" />
      <br />
      <Link to="/login">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      </Link>
      <br />
    </>
  )
}

export default HomePage
