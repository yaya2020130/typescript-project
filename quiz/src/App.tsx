import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard'
import { useState } from 'react';
const TOTAL_QUESTIONS = 10;
const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnaswers, setUserAnswers] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = (true)
  const [userAnswers, setUserAnswers] = ([])
  
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {}
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        start
        </button>
      <p className='score'>Score:</p>
      <p >Loading Questions ...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS }
        question={questions[number].question}
        answer={questions[number].answer}
        userAnswer={UserAnswers ? userAnaswers[number]: undefined}
        
          />

          <button className='next' onClick={nextQuestion} >

          Next Question</button>
    </div>
  );
}

export default App;
