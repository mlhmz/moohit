import React from 'react';
import './Login.css'

const Login = (props) => {

    const {
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="login-container">
                <h3>Sign in into Moo it!</h3>
                <input 
                type="text"
                placeholder="Email" 
                autoFocus 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <input 
                type="password"
                placeholder="Password" 
                required 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                />
                <p className="errorMsg">{passwordError}</p>
                
                <div className="button-container">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>
                            Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}> Sign up!</span>
                        </p>
                        </>
                    ) : (
                        <>
                        <button className="loginBtn" onClick={handleSignup}>Sign up</button>
                        <p>
                            Already have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}> Sign in!</span>
                        </p>
                        </>
                        
                    )}
                </div>
                
            </div>
        </section>
    )
}

export default Login;