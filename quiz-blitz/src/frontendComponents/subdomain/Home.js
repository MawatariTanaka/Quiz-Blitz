/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export default function Home(dailyQuiz) {
    //Temporary variable
    const [a, setA] = useState(0);
    const [type, setType] = useState('single');
    const [questionJSX, setQuestionJSX] = useState(null);
    const [answersJSX, setAnswersJSX] = useState(null);
    const updateAnswer = (ans) => {
        if (ans) {
            if (ans.length > 0) {
                return ans.map((answer, index) => (
                    <div
                        key={index}
                        className={`daily-answer-container ${
                            type === 'single' && 'rounded-container'
                        }`}
                    >
                        {answer}
                    </div>
                ));
            }
        }
    };
    useEffect(() => {
        const daily = dailyQuiz.dailyQuiz;
        if (daily) {
            setQuestionJSX(daily.question);
            setA(daily.answers.length);
            setAnswersJSX(updateAnswer(daily.answers));
            setType(daily.type);
        }
    }, [dailyQuiz]);
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
                </div>
            </section>
        </main>
    );
}
