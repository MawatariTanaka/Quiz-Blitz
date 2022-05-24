/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export default function Home({ dailyQuiz }) {
    const [type, setType] = useState(null);
    const [submit, setSubmit] = useState(false);
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
                        <span>{answer}</span>
                    </div>
                ));
            }
        }
    };
    const finalUpdateAnswer = () => {
        if (!submit) {
            setSubmit(true);
            let answerState = [];
            for (let i = 0; i < answerArray.length; i++) {
                if (correctAnswerArray[i]) {
                    if (answerChoiceArray[i]) {
                        answerState.push('correct');
                    } else {
                        answerState.push('unchosen');
                    }
                } else {
                    if (answerChoiceArray[i]) {
                        answerState.push('wrong');
                    } else {
                        answerState.push('neutral');
                    }
                }
            }
            console.log(answerState);
            setAnswersJSX(
                answerArray.map((answer, index) => (
                    <div
                        key={index}
                        className={`daily-answer-container ${
                            type === 'single' && 'rounded-container'
                        } ${
                            answerState[index] === 'correct' && 'correct-answer'
                        } ${
                            answerState[index] === 'unchosen' &&
                            'unchosen-answer'
                        } ${answerState[index] === 'wrong' && 'wrong-answer'}`}
                    >
                        {answer}
                    </div>
                ))
            );
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
                    let f = false;
                    for (let j = 0; j < correctAns.length; j++) {
                        if (ansArray[i] === correctAns[j]) {
                            f = true;
                        }
                    }
                    d.push(f);
                }
                setAnswerChoiceArray(b);
                setCorrectAnswerArray(d);
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
                    {answersJSX && !submit && (
                        <button
                            onClick={() => finalUpdateAnswer()}
                            className={`${
                                type === 'single' && 'rounded-container'
                            }`}
                        >
                            Chốt Câu Trả Lời
                        </button>
                    )}
                </div>
            </section>
        </main>
    );
}
