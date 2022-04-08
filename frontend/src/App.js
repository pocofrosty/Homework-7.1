import React, { useState, useEffect } from 'react'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'
import axios from 'axios'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

// eslint-disable-next-line import/prefer-default-export
export const App = () => {
  const [question, setQuestions] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const { questions } = await axios.get('/api/questions/')
      setQuestions(questions)
      console.log(questions)
      console.log(1)
    }
    getUsers()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}
const Layout = () => (
  <div>
    <Outlet />
  </div>
)

const Test = () => (
  <div>
    <h1>Test2 </h1>
  </div>
)
