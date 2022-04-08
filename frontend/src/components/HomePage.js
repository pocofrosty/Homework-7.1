import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Title from './subcomponents/Title'
import QuestionPost from './subcomponents/QuestionPost'
import CurrentPost from './subcomponents/CurrentPost'
import LogoutButton from './subcomponents/LogoutButton'
import TextBox from './subcomponents/TextBox'
import SubmitAnswerButton from './subcomponents/SubmitAnswerButton'

const HomePage = ({
  setCurrentUsername, currentUsername,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [currentAuthor, setCurrentAuthor] = useState('')
  const [currentQuestionText, setCurrentQuestionText] = useState('')
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [currentID, setCurrentID] = useState('')
  const [questionList, setQuestionList] = useState([])

  const [answerText, setAnswerText] = useState('')

  const updateState = async () => {
    const { data } = await axios.get('/account/currentLogin')
    setCurrentUsername(data)
    const { data: data2 } = await axios.get('/api/questions')
    setQuestionList(data2)
  }

  useEffect(() => {
    updateState()
    const interval = setInterval(() => {
      updateState()
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const checkIfLoggedIn = async () => {
    const { data: { LoggedIn } } = await axios.get('/account/verify')
    setIsLoggedIn(LoggedIn)
  }

  checkIfLoggedIn()

  const loginButton = () => (
    <Link to="/login">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In To Submit a Question
      </button>
    </Link>
  )

  const addNewQuestionButton = () => (
    <label>
      {answerText}
    </label>
  )

  const logoutButton = () => (
    <>
      <label>
        {`Username: ${currentUsername}`}
      </label>
      <LogoutButton setIsLoggedIn={setIsLoggedIn} setCurrentUsername={setCurrentUsername} />
    </>
  )

  const answerForm = () => (
    <>
      <Title text="Answer This Question" />
      <TextBox backgroundName="Answer" text={answerText} setText={setAnswerText} />
      <SubmitAnswerButton _id={currentID} answer={answerText} updateState={updateState} />
    </>
  )
  return (
    <>
      <Title text="Campuswire Lite" />
      <br />
      {isLoggedIn ? logoutButton() : null}
      <br />
      {isLoggedIn ? addNewQuestionButton() : loginButton()}
      <br />
      <div>
        {questionList.map(question => (
          <QuestionPost
            author={question.author}
            questionText={question.questionText}
            answer={question.answer}
            key={question._id}
            currentID={question._id}
            setCurrentAnswer={setCurrentAnswer}
            setCurrentAuthor={setCurrentAuthor}
            setCurrentQuestionText={setCurrentQuestionText}
            setCurrentID={setCurrentID}
          />
        ))}
      </div>
      <br />
      <CurrentPost author={currentAuthor} questionText={currentQuestionText} answer={currentAnswer} />
      <br />
      {isLoggedIn ? answerForm() : null}
    </>
  )
}

export default HomePage
