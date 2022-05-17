import { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './frontendComponents/Header';
import Home from './frontendComponents/subdomain/Home';
import Courses from './frontendComponents/subdomain/Courses';
import Contests from './frontendComponents/subdomain/Contests';
import Challenges from './frontendComponents/subdomain/Challenges';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    return (
        <Router className="App">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contests" element={<Contests />} />
                <Route path="/challenges" element={<Challenges />} />
            </Routes>
        </Router>
    );
}

export default App;
