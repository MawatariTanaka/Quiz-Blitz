import './App.scss';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './backendComponents/firebaseConfig';

import Header from './frontendComponents/Header';
import Home from './frontendComponents/subdomain/Home';
import Courses from './frontendComponents/subdomain/Courses';
import Contests from './frontendComponents/subdomain/Contests';
import Challenges from './frontendComponents/subdomain/Challenges';
import Gameplay from './frontendComponents/subdomain/Gameplay';
import Login from './frontendComponents/subdomain/Login';
import Register from './frontendComponents/subdomain/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizList, setQuizList] = useState(null);
  const [dailyQuiz, setDailyQuiz] = useState(null);
  const [a, setA] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  useEffect(() => {
    const quizCollectionReference = collection(db, 'questions');
    const getQuizList = async () => {
      const data = await getDocs(quizCollectionReference);
      setQuizList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      if (!quizList) {
        setA(a + 1);
      }
    };
    getQuizList();
  }, [a]);
  useEffect(() => {
    if (quizList && !dailyQuiz) {
      const daily = quizList[Math.floor(Math.random() * quizList.length)];
      setDailyQuiz(daily);
    }
  }, [quizList]);

  return (
    <BrowserRouter className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Routes>
        <Route path="/" element={<Home dailyQuiz={dailyQuiz} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contests" element={<Contests />} />
        <Route
          path="/challenges"
          element={<Challenges setCurrentChallenge={setCurrentChallenge} />}
        />
        <Route
          path="/challenges-gameplay"
          element={
            <Gameplay quizList={quizList} currentChallenge={currentChallenge} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
