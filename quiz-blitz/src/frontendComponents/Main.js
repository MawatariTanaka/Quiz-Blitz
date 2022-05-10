import Home from './subdomain/Home';
export default function Main({ currentPage }) {
    return <main>{currentPage === 'home' && <Home />}</main>;
}
