/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export default function Home(todayQuiz) {
    //Temporary variable
    const [type, setType] = useState('single');
    const [questionJSX, setQuestionJSX] = useState(null);
    const [answersJSX, setAnswersJSX] = useState(null);
    useEffect(() => {
        const updateAnswer = (ans) => {
            if (ans) {
                if (ans.length > 0) {
                    return ans.map((answer, index) => (
                        <div key={index} className="daily-answer-container">
                            {answer}
                        </div>
                    ));
                }
            }
        };
        if (todayQuiz) {
            const today = todayQuiz.todayQuiz;
            setQuestionJSX(today.question);
            setAnswersJSX(updateAnswer(today.answers));
            setType(today.type);
        }
    }, [todayQuiz]);
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
                    <div className="answer-container">
                        {answersJSX ? answersJSX : 'Loading...'}
                    </div>
                </div>
            </section>
        </main>
    );
}
