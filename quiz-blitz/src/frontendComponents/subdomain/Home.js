import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../backendComponents/firebaseConfig';

export default function Home() {
    //Temporary variable
    const [a, setA] = useState(0);

    const [quizList, setQuizList] = useState([]);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [answersJSX, setAnswersJSX] = useState([]);
    const quizCollectionReference = collection(db, 'questions');
    useEffect(() => {
        const updateAnswer = (ans) => {
            if (ans) {
                if (ans.length > 0) {
                    return ans.map((answer) => (
                        <div className="daily-answer-container">{answer}</div>
                    ));
                }
            }
        };
        const getQuiz = async () => {
            const data = await getDocs(quizCollectionReference);
            setQuizList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            const todayQuiz =
                quizList[Math.floor(Math.random() * quizList.length)];
            if (!todayQuiz) {
                setA(a + 1);
            } else if (todayQuiz.question !== '') {
                console.log(todayQuiz);
                setQuestion(todayQuiz.question);
                setAnswers(todayQuiz.answers);
                console.log(question);
                console.log(answers);
            }
        };

        getQuiz();
    }, [a]);
    return (
        <main className="home-main">
            <section className="daily-quiz">
                <h2>Câu Hỏi Trong Ngày</h2>
                <div className="daily-quiz-container">
                    <div className="question-container">{question}</div>
                    <div className="answer-container">{answersJSX}</div>
                </div>
            </section>
        </main>
    );
}
