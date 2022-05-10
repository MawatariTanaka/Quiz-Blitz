import { useState } from 'react';
import './App.scss';
import Header from './frontendComponents/Header';
import Main from './frontendComponents/Main';
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    return (
        <div className="App">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main currentPage={currentPage} />
        </div>
    );
}

export default App;
