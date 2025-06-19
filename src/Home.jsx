import React from 'react';
import About from './componets/about';
import Contact from './componets/contact';
import Display from './componets/display';
import NavBar from './componets/nav-bar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Display />
            <About />
            <Contact />
        </div>
    );
};

export default Home;