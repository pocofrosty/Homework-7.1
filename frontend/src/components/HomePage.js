import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Title from './subcomponents/Title'
import QuestionPost from './subcomponents/QuestionPost'
import CurrentPost from './subcomponents/CurrentPost'

const HomePage = ({ currentUsername, questionList }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [currentAuthor, setCurrentAuthor] = useState('')
  const [currentQuestionText, setCurrentQuestionText] = useState('')
  const [currentAnswer, setCurrentAnswer] = useState('')

  const checkIfLoggedIn = async () => {
    const { data: { LoggedIn } } = await axios.get('/account/verify')
    setIsLoggedIn(LoggedIn)
  }

  checkIfLoggedIn()

  const showLoggedIn = () => (
    <>
      <label>Logged In</label>
      <br />
      <label>
        {`Username: ${currentUsername}`}
      </label>
    </>
  )

  const showLoggedOut = () => (
    <>
      <label> Logged Out </label>
      <Link to="/login">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      </Link>
      <br />
      <div>
        {questionList.map(question => (
          <QuestionPost
            author={question.author}
            questionText={question.questionText}
            answer={question.answer}
            key={question._id}
            setCurrentAnswer={setCurrentAnswer}
            setCurrentAuthor={setCurrentAuthor}
            setCurrentQuestionText={setCurrentQuestionText}
          />
        ))}
      </div>
      <br />
      <CurrentPost author={currentAuthor} questionText={currentQuestionText} answer={currentAnswer} />
    </>
  )
  return (
    <>
      <Title text="Campuswire Lite" />
      <br />
      {isLoggedIn ? showLoggedIn() : showLoggedOut()}
    </>
  )
}

export default HomePage
