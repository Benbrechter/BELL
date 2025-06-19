import React from 'react';

const NavBar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;