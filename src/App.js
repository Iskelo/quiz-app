import { useState } from 'react';
import { questions } from './questions';

import './App.css';

function App() {

  // const questions = [
  //   {
  //     id: 'Q1',
  //     questionText: 'How do you fix the syntax error that results from running this code?',
  //     questionImg: require('./img/carbon.png'),
  //     answerOptions: [
  //       { ansverText: 'Wrap the object in parentheses.', isCorrect: true },
  //       { ansverText: 'Call the function from another file.', isCorrect: false },
  //       { ansverText: 'Add a return statement before the first curly brace.', isCorrect: false },
  //       { ansverText: 'Replace the object with an array.', isCorrect: false }
  //     ]
  //   },
  //   {
  //     id: 'Q2',
  //     questionText: 'If you see the following import in a file, what is being used for state management in the component?',
  //     questionImg: require('./img/Q2.png'),
  //     answerOptions: [
  //       { ansverText: 'React Hooks', isCorrect: true },
  //       { ansverText: 'stateful components', isCorrect: false },
  //       { ansverText: 'math', isCorrect: false },
  //       { ansverText: 'class components.', isCorrect: false }

  //     ]
  //   },
  //   {
  //     id: 'Q3',
  //     questionText: 'Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?',
  //     questionImg: require('./img/Q1.png'),
  //     answerOptions: [
  //       { ansverText: '{{name: "Rachel", age: 31}}', isCorrect: false },
  //       { ansverText: '{name: "Rachel", age: 31}', isCorrect: true },
  //       { ansverText: '{person: "Rachel", person: 31}}', isCorrect: false },
  //       { ansverText: '{person: {name: "Rachel", age: 31}}', isCorrect: false }
  //     ]
  //   },

  // ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  }

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false)
  }


  return (
    <div className="app">
      {showScore
        ?
        <div className="section__score">
          Correct answer: {score} / {questions.length}
          <button onClick={() => refresh()} className='refresh__btn'>Try again</button>
        </div>
        :
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span> Question {currentQuestion + 1}</span>/ {questions.length}
            </div>
            <div className="question__text">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].questionImg ? (
              <div className="img">
                <img src={questions[currentQuestion].questionImg} alt='img' />
              </div>
            ) : null}

          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map(item =>
            (
              <button
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >{item.ansverText}</button>
            )
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
