/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './backendComponents/firebaseConfig';

import Header from './frontendComponents/Header';
import Home from './frontendComponents/subdomain/Home';
import Courses from './frontendComponents/subdomain/Courses';
import Contests from './frontendComponents/subdomain/Contests';
import Challenges from './frontendComponents/subdomain/Challenges';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [quizList, setQuizList] = useState(null);
    const [dailyQuiz, setDailyQuiz] = useState(null);
    const [a, setA] = useState(0);
    useEffect(() => {
        const quizCollectionReference = collection(db, 'questions');
        const getQuizList = async () => {
            const data = await getDocs(quizCollectionReference);
            setQuizList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            if (!quizList) {
                setA(a + 1);
            }
        };
        getQuizList();
    }, [a]);
    useEffect(() => {
        if (quizList && !dailyQuiz) {
            const customQuizList = quizList.filter(
                (quiz) => quiz.subject === 'biology'
            );

            const daily =
                customQuizList[
                    Math.floor(Math.random() * customQuizList.length)
                ];
            setDailyQuiz(daily);
        }
    }, [quizList]);

    return (
        <Router className="App">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <Routes>
                <Route path="/" element={<Home dailyQuiz={dailyQuiz} />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contests" element={<Contests />} />
                <Route path="/challenges" element={<Challenges />} />
            </Routes>
        </Router>
    );
}

export default App;
