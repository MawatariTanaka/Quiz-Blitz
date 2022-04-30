export function Header(props) {
    let currentPage = props.page;
    return (
        <header>
            <div id="page-name">
                Qu
                <img className="thunder-1" src="image/thunder-1.png" />z{' '}
                <span className="sub-page-name">
                    <i>
                        Bl
                        <img className="thunder-2" src="image/thunder-2.png" />
                        tz
                    </i>
                </span>
            </div>
            <nav id="navigation-container">
                <div
                    className="navigation {
                    currentPage == 'home' ? 'navigation-active' : ''
                }"
                >
                    Trang Chủ
                </div>
                <div
                    className="navigation {
                    currentPage == 'course' ? 'navigation-active' : ''
                }"
                >
                    Khóa Học
                </div>
                <div
                    className="navigation {
                    currentPage == 'challenge' ? 'navigation-active' : ''
                }"
                >
                    Thử Thách
                </div>
                <div
                    className="navigation {
                    currentPage == 'contest' ? 'navigation-active' : ''
                }"
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
