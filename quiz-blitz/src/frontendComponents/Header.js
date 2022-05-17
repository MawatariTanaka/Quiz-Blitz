import { Link } from 'react-router-dom';

export default function Header({ currentPage, setCurrentPage }) {
    let thunder1 = require('./image/thunder-1.png');
    let thunder2 = require('./image/thunder-2.png');
    return (
        <header>
            <Link
                to="/"
                onClick={() => setCurrentPage('home')}
                className="page-name"
            >
                Qu
                <img className="thunder-1" src={thunder1} alt="" />z{' '}
                <span className="sub-page-name">
                    <i>
                        Bl
                        <img className="thunder-2" src={thunder2} alt="" />
                        tz
                    </i>
                </span>
            </Link>
            <nav className="navigation-container">
                <Link
                    to="/"
                    onClick={() => setCurrentPage('home')}
                    className={`navigation ${
                        currentPage === 'home' ? 'navigation-active' : ''
                    }`}
                >
                    Trang Chủ
                </Link>
                <Link
                    to="courses"
                    onClick={() => setCurrentPage('course')}
                    className={`navigation ${
                        currentPage === 'course' ? 'navigation-active' : ''
                    }`}
                >
                    Khóa Học
                </Link>
                <Link
                    to="challenges"
                    onClick={() => setCurrentPage('challenge')}
                    className={`navigation ${
                        currentPage === 'challenge' ? 'navigation-active' : ''
                    }`}
                >
                    Thử Thách
                </Link>
                <Link
                    to="contests"
                    onClick={() => setCurrentPage('contest')}
                    className={`navigation ${
                        currentPage === 'contest' ? 'navigation-active' : ''
                    }`}
                >
                    Thi Đấu
                </Link>
            </nav>
            <nav id="authentication-container">
                <div className="authentication">Đăng nhập</div>
                <div className="authentication">Đăng kí</div>
            </nav>
        </header>
    );
}
