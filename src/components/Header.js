import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h1>
            Todo List
            <svg width="68" height="76" viewBox="0 0 68 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M67.25 75.9998H58.5655L37.359 54.7934C35.504 52.9384 32.4965 52.9384 30.6415 54.7934L9.43503 75.9998L0.75 76V3C0.75 1.34315 2.09315 0 3.75 0H64.25C65.9069 0 67.25 1.34315 67.25 3V75.9998ZM57.75 10.5C57.75 9.94771 57.3023 9.5 56.75 9.5H11.25C10.6977 9.5 10.25 9.94771 10.25 10.5V61.7498L23.924 48.0759C29.4889 42.5109 38.5115 42.5109 44.0765 48.0759L57.75 61.7493V10.5Z" fill="#E8F1F2" />
            </svg>
            </h1>
            <h2>Organize your task better</h2>
        </header>
    )
}

export default Header;
