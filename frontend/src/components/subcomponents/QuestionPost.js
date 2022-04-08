import React from 'react'

const QuestionPost = ({
  questionText, author, answer, setCurrentAnswer, setCurrentAuthor, setCurrentQuestionText,
}) => (
  <button onClick={() => {
    console.log(1)
    setCurrentAuthor(author)
    setCurrentQuestionText(questionText)
    setCurrentAnswer(answer)
  }}
  >
    <label>
      {' '}
      {questionText}
      {' '}
    </label>
  </button>
)

export default QuestionPost
