export default function Header({ currentPage, setCurrentPage }) {
    let thunder1 = require('./image/thunder-1.png');
    let thunder2 = require('./image/thunder-2.png');
    return (
        <header>
            <div id="page-name">
                Qu
                <img className="thunder-1" src={thunder1} alt="" />z{' '}
                <span className="sub-page-name">
                    <i>
                        Bl
                        <img className="thunder-2" src={thunder2} alt="" />
                        tz
                    </i>
                </span>
            </div>
            <nav id="navigation-container">
                <div
                    onClick={() => setCurrentPage('home')}
                    className={`navigation ${
                        currentPage === 'home' ? 'navigation-active' : ''
                    }`}
                >
                    Trang Chủ
                </div>
                <div
                    onClick={() => setCurrentPage('course')}
                    className={`navigation ${
                        currentPage === 'course' ? 'navigation-active' : ''
                    }`}
                >
                    Khóa Học
                </div>
                <div
                    onClick={() => setCurrentPage('challenge')}
                    className={`navigation ${
                        currentPage === 'challenge' ? 'navigation-active' : ''
                    }`}
                >
                    Thử Thách
                </div>
                <div
                    onClick={() => setCurrentPage('contest')}
                    className={`navigation ${
                        currentPage === 'contest' ? 'navigation-active' : ''
                    }`}
                >
                    Thi Đấu
                </div>
            </nav>
            <nav id="authentication-container">
                <div className="authentication">Đăng nhập</div>
                <div className="authentication">Đăng kí</div>
            </nav>
        </header>
    );
}
