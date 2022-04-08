import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TextBox from './subcomponents/TextBox'
import Title from './subcomponents/Title'
import SignUpButton from './subcomponents/SignUpButton'

const SignUpForm = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Title text="Sign Up" />
      <br />
      <label> Username: </label>
      <br />
      <TextBox backgroundName="Username" setText={setUsername} />
      <br />
      <label> Password: </label>
      <br />
      <TextBox backgroundName="Password" setText={setPassword} />
      <br />
      <SignUpButton />
      <br />
      <label> Already have an account? </label>
      <Link to="/login"> Login</Link>
    </>
  )
}

export default SignUpForm
