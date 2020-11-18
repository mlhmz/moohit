import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import Login from './Login';
import Hero from "./Hero";
import { findAllByDisplayValue } from '@testing-library/react';

function App() {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [message, setMessage] = useState('');
  const [hasName] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setMessage('');
    setName('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":

          case "auth/user-disabled":

          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });  
  };


  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          
          case "auth/invalid-email":

          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
        if (user.displayName != null) {
          hasName = true;
        }
        
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
        {user ? (
          <Hero 
          handleLogout={handleLogout} 
          user={user} 
          setName={setName}
          name={name}
          message={message}
          setMessage={setMessage}
          hasName={hasName}

          />
          
          
          
        ) : (
        /*<div className="loader-container"><div id="loader" className="loader"></div></div>*/
          <Login 
          email={email} 
          setEmail={setEmail} 
          name={name}
          setName={setName}
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        )}
    </div>
  );
};

export default App;
