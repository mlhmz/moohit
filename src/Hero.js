import React from 'react';
import { auth } from 'firebase';
import fire from './fire';
import Postsection from './Postsection';
import Messages from './Messages';
import Namesection from './namesection';

const Hero = ({
    handleLogout,
    user,
    setName,
    name,
    message,
    setMessage,
    hasName,

}) => {
    return (
        <section className="hero">
            <p className="logo" onClick={() => window.location.reload()}>🐮</p>
            <div className="nav">
            <a className="nav-button">Settings</a>
            <a className="nav-button" onClick={handleLogout}>Logout</a>
            </div>
            {hasName ?
                <Postsection user={user} message={message} setMessage={message} hasName = {hasName} />
            :
                <Namesection setName={setName} name={name} user={user} />
            }


            <Messages user={user} />
        </section>
    );
};

export default Hero;