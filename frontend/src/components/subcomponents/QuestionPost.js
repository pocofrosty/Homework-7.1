import React from 'react'

const QuestionPost = ({
  questionText, author, answer, setCurrentAnswer, setCurrentAuthor, setCurrentQuestionText, setCurrentID, currentID,
}) => (
  <button onClick={() => {
    setCurrentAuthor(author)
    setCurrentQuestionText(questionText)
    setCurrentAnswer(answer)
    setCurrentID(currentID)
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
