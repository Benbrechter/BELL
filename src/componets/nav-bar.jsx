import React from 'react';

const NavBar = () => {
    return (
        <nav className = "NavBar" >
            <img src="null" alt="This willl be a paint sploch" />
            <img src="null" alt="this will be BELL logo" />
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;