import React from 'react';
import { auth } from 'firebase';
import fire from './fire';
import Postsection from './Postsection';
import Messages from './Messages';
import Namesection from './namesection';
import logo from './twittercowface.png'

const Hero = ({
    handleLogout,
    user,
    setName,
    name,
    message,
    setMessage,
    hasName

}) => {
    return (
        <section className="hero">
            <div className="nav">
            <img src={logo} className="logo" onClick={() => window.location.reload()} />
            <h2 className="title">MOOH IT!</h2>
            <div className="nav-buttons">
            <a onClick={() => alert('Coming soon..')} className="nav-button">Settings</a>
            <a className="nav-button" onClick={handleLogout}>Logout</a>
            </div>
            </div>
            {hasName ?
                <Postsection user={user} message={message} setMessage={setMessage} />
            :
                <Namesection setName={setName} name={name} user={user} />
            }
            <Messages user={user} />
        </section>
    );
};

export default Hero;