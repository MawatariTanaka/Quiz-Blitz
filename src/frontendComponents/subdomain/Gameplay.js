import { useState, useEffect } from 'react';

const Latex = require('react-latex');

export default function Gameplay({ quizList, currentChallenge }) {
  const [questionsInGame, setQuestionsInGame] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [type, setType] = useState('');
  const [submit, setSubmit] = useState(true);
  const [questionJSX, setQuestionJSX] = useState(null);
  const [answersJSX, setAnswersJSX] = useState(null);
  const [answersSet, setAnswersSet] = useState(null);
  const [answerChoiceArray, setAnswerChoiceArray] = useState([]);
  const [correctAnswerArray, setCorrectAnswerArray] = useState([]);
  const [endTime, setEndTime] = useState(null);
  const [timer, setTimer] = useState(currentChallenge.time);
  const [answersClassName, setAnswersClassName] = useState('answers-container');

  const changeAnswerChoice = (index) => {
    let currentAnswerChoiceArray = answerChoiceArray;
    if (currentAnswerChoiceArray.length > 0) {
      for (let i = 0; i < currentAnswerChoiceArray.length; i++) {
        if (i === index) {
          currentAnswerChoiceArray[i] = !currentAnswerChoiceArray[i];
        } else if (type === 'single') {
          currentAnswerChoiceArray[i] = false;
        }
      }
      setAnswerChoiceArray(currentAnswerChoiceArray);
      setAnswersJSX(updateAnswer(answersSet));
    }
  };

  const updateAnswer = (ans) => {
    if (ans) {
      if (ans.length > 0) {
        return ans.map((answer, index) => (
          <div
            key={index}
            onClick={() => changeAnswerChoice(index)}
            className={`${type === 'single' && 'rounded-container'} ${
              answerChoiceArray[index] && 'selected-answer'
            }`}
          >
            <Latex>{answer}</Latex>
          </div>
        ));
      }
    }
  };

  const [a, setA] = useState(null);
  useEffect(() => {
    if (currentChallenge) {
      function getQuestionIndexes(amount) {
        let q = quizList.sort(() => Math.random() - 0.5);
        let indexArray = [];
        for (let i = 0; i < amount; i++) {
          indexArray.push(q[i]);
        }
        setQuestionsInGame(indexArray);
      }
      if (!questionsInGame) {
        getQuestionIndexes(quizList.length);
      }
      if (endTime) {
        const timerIntervalId = setInterval(() => {
          if (!submit) {
            if (endTime - new Date().getTime() < 0) {
              clearInterval(timerIntervalId);
              setTimer(0);
            } else {
              setTimer((endTime - new Date().getTime()) / 1000);
            }
          } else {
            if (!questionJSX || type === '') {
              setQuestionJSX(questionsInGame[currentQuestionIndex].question);
              setType(questionsInGame[currentQuestionIndex].type);
            } else {
              let b = questionsInGame[currentQuestionIndex].answers.sort(
                () => Math.random() - 0.5,
              );
              let correctAnswersSet =
                questionsInGame[currentQuestionIndex].correct;
              let answersSetChoice = [];
              let correctAnswersSetChoice = [];
              for (let i = 0; i < b.length; i++) {
                answersSetChoice.push(false);
                let checkAnswer = false;
                for (let j = 0; j < correctAnswersSet.length; j++) {
                  if (b[i] === correctAnswersSet[j]) {
                    checkAnswer = true;
                    break;
                  }
                }
                correctAnswersSetChoice.push(checkAnswer);
              }
              setAnswersClassName(
                `answers-container answers-${b.length}-container`,
              );

              if (
                answersSet &&
                answerChoiceArray.length > 0 &&
                correctAnswerArray.length > 0
              ) {
                setAnswersJSX(updateAnswer(answersSet));
              } else {
                setAnswersSet(b);
                setAnswerChoiceArray(answersSetChoice);
                setCorrectAnswerArray(correctAnswersSetChoice);
              }
            }
            setEndTime(new Date().getTime() + timer * 1000);
            clearInterval(timerIntervalId);
          }
        }, 10);
      } else {
        setEndTime(new Date().getTime() + timer * 1000);
        setA(1);
      }
    }
  }, [currentChallenge, a, type, answerChoiceArray]);
  return (
    <main>
      <div className="challenge-quiz-container">
        <div className="timer-container">
          Thời gian còn lại: <span>{timer.toFixed(2)}</span> giây.
        </div>
        <div
          className={`question-container ${
            type === 'single' && 'rounded-container'
          }`}
        >
          <Latex>
            {questionJSX ? questionJSX : 'Đang chuẩn bị câu hỏi...'}
          </Latex>
        </div>
        <div className={answersClassName}>{answersJSX}</div>
        {answersJSX && !submit && (
          <button className={`${type === 'single' && 'rounded-container'}`}>
            Chốt Câu Trả Lời
          </button>
        )}
      </div>
    </main>
  );
}
