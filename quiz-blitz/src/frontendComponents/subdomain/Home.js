import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../backendComponents/firebaseConfig';

export default function Home() {
    const [quizList, setQuizList] = useState([]);
    const quizCollectionReference = collection(db, 'questions');
    useEffect(() => {
        const getQuiz = async () => {
            const data = await getDocs(quizCollectionReference);
            setQuizList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            console.log(quizList);
        };
        getQuiz();
    }, []);
    return (
        <main className="home-main">
            <section className="daily-question">
                <h2>Câu Hỏi Trong Ngày</h2>
                <div className="daily-question-container">
                    <div className="question-container"></div>
                </div>
            </section>
        </main>
    );
}
