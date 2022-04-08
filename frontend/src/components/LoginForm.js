import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TextBox from './subcomponents/TextBox'
import Title from './subcomponents/Title'
import LoginButton from './subcomponents/LoginButton'

const LoginForm = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Title text="Log In" />
      <br />
      <label> Username: </label>
      <br />
      <TextBox backgroundName="Username" setText={setUsername} />
      <br />
      <label> Password: </label>
      <br />
      <TextBox backgroundName="Password" setText={setPassword} />
      <br />
      <LoginButton username={username} password={password} />
      <br />
      <label> Don&apos;t have an account? </label>
      <Link to="/signup"> Login</Link>
    </>
  )
}

export default LoginForm
