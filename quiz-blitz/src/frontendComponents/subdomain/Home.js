/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export default function Home({ dailyQuiz }) {
    const [type, setType] = useState(null);
    const [answerArray, setAnswerArray] = useState(null);
    const [answerChoiceArray, setAnswerChoiceArray] = useState(null);
    const [correctAnswerArray, setCorrectAnswerArray] = useState(null);
    const [questionJSX, setQuestionJSX] = useState(null);
    const [answersJSX, setAnswersJSX] = useState(null);
    const changeAnswerChoice = (index) => {
        let currentAnswerChoiceArray = answerChoiceArray;
        for (let i = 0; i < currentAnswerChoiceArray.length; i++) {
            if (i === index) {
                currentAnswerChoiceArray[i] = !currentAnswerChoiceArray[i];
            } else if (type === 'single') {
                currentAnswerChoiceArray[i] = false;
            }
        }
        setAnswerChoiceArray(currentAnswerChoiceArray);
        console.log(currentAnswerChoiceArray);
        setAnswersJSX(updateAnswer(answerArray));
    };
    const updateAnswer = (ans) => {
        if (ans) {
            if (ans.length > 0) {
                return ans.map((answer, index) => (
                    <div
                        key={index}
                        onClick={() => changeAnswerChoice(index)}
                        className={`daily-answer-container ${
                            type === 'single' && 'rounded-container'
                        } ${answerChoiceArray[index] && 'selected-answer'}`}
                    >
                        {answer}
                    </div>
                ));
            }
        }
    };
    //Temporary variable
    const [a, setA] = useState(0);
    const [c, setC] = useState(0);
    const [e, setE] = useState(0);
    useEffect(() => {
        const daily = dailyQuiz;
        if (daily) {
            setA(daily.answers.length);
            setType(daily.type);
            const ansArray = daily.answers.sort(() => Math.random() - 0.5);
            const correctAns = daily.correct;
            setAnswerArray(ansArray);
            let b = [];
            let d = [];
            if (type && a && answerArray) {
                for (let i = 0; i < a; i++) {
                    b.push(false);
                    if (type === 'single') {
                        if (ansArray[i] === correctAns) {
                            d.push(true);
                        } else {
                            d.push(false);
                        }
                    }
                }
                setAnswerChoiceArray(b);
                setCorrectAnswerArray(d);
                console.log(d);
                if (answerChoiceArray && correctAnswerArray) {
                    setQuestionJSX(daily.question);
                    setAnswersJSX(updateAnswer(answerArray));
                } else {
                    setC(c + 1);
                }
            } else {
                setE(e + 1);
            }
        }
    }, [dailyQuiz, c, e]);
    return (
        <main className="home-main">
            <section className="daily-quiz">
                <h2>Câu Hỏi Trong Ngày</h2>
                <div className="daily-quiz-container">
                    <div
                        className={`question-container ${
                            type === 'single' && 'rounded-container'
                        }`}
                    >
                        {questionJSX ? questionJSX : 'Loading...'}
                    </div>
                    <div className={`answers-container answers-${a}-container`}>
                        {answersJSX}
                    </div>
                    <button
                        className={`${
                            type === 'single' && 'rounded-container'
                        }`}
                    >
                        Chốt Câu Trả Lời
                    </button>
                </div>
            </section>
        </main>
    );
}
