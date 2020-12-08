import {useState, useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from './Login';
import Hero from "./Hero";

function App() {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [message, setMessage] = useState('');
  const [hasName, setHasName] = useState(false);

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
            break;
          case "auth/user-disabled":
            break;
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
            break;
          case "auth/invalid-email":
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    window.location.reload();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
        if (user.displayName != null) {
          setHasName(!hasName)
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
