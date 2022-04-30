const app = document.getElementById('app');
let Header = '';
let Main = '';
let Footer = '';
let currentPage = 'home';

function switchHeader(page) {
    Header = `
        <header>
            <div id="page-name">Qu<img class="thunder-1" src="image/thunder-1.png">z <span class= "sub-page-name"><i>Bl<img class="thunder-2" src="image/thunder-2.png">tz</i></span></div>
            <nav id="navigation-container">
                <div class="navigation ${
                    currentPage == 'home' ? 'navigation-active' : ''
                }" >Trang Chủ</div>
                <div class="navigation ${
                    currentPage == 'course' ? 'navigation-active' : ''
                }">Khóa Học</div>
                <div class="navigation ${
                    currentPage == 'challenge' ? 'navigation-active' : ''
                }">Thử Thách</div>
                <div class="navigation ${
                    currentPage == 'contest' ? 'navigation-active' : ''
                }">Thi Đấu</div>
            </nav>
            <nav id="authentication-container">
                <div class="authentication">Đăng nhập</div>
                <div class="authentication">Đăng kí</div>
            </nav>
        </header>
    `;
}

function switchMain(page) {
    switch (page) {
        case 'hone':
            Main = `
                <main>
                    <section>
                    
                    </section>
                </main>
            `;
            break;
    }
}

function renderPage(page) {
    switchHeader(page);
    switchMain(page);
    app.innerHTML = Header + Main + Footer;
}

renderPage(currentPage);
