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
  const [currentUsername, setCurrentUsername] = useState('')

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm setCurrentUsername={setCurrentUsername} />} />
          <Route path="" element={<HomePage setCurrentUsername={setCurrentUsername} currentUsername={currentUsername} />} />
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
