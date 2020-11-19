import React from 'react';
import fire from './fire';

// date + "." + month + "." + year
function post(message) {
    fire.firestore().collection('posts').add({
        text: message,
        createdAt: new Date(),
        likes: {},
        userid: fire.auth().currentUser.uid,
        name: fire.auth().currentUser.displayName
    })
}





    const Users = ({
        user,
        message,
        setMessage
    }) => {
        return (
            <section className="User">
                <div className="post-section">
                    <h3>Welcome to Mooh it! {fire.auth().currentUser.displayName}</h3>
                    <textarea
                    type="text"
                    value = {message}
                    onChange = {e => setMessage(e.target.value)}
                    />
                    <button 
                        onClick={() => post(message)}
                    >Mooooh!</button>
                </div>
            </section>
            )
    }
        
    



export default Users;






