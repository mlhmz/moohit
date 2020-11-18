import React from 'react';
import fire from './fire';

/*
function post() {
        if (user.displayName == null) {
            alert("Error! You cant post something without a Displayname.");
            return;
        } else {
            console.log(message);
        }
}
*/

const imports = (props) => {
    const {
        hasName
    } = props;
}

class User extends React.Component {
    

    render() { 
        return (
        <section className="User">
            <div className="post-section">
                <h3>Welcome to Mooh it! {Greet()}</h3>
                {textarea()}
                <button >Mooooh!</button>
                
            </div>
        </section>
        );  
    }

}

function Greet() {
    if (fire.auth().currentUser.displayName != null) {
        console.log();
        return fire.auth().currentUser.displayName;
    } else {
        return fire.auth().currentUser.email;
    }
}

function textarea() {
    if (fire.auth().currentUser.displayName != null) {
        return <textarea 
        type="text"
        placeholder="Message"
        />
    }
    return <p>Please set your Displayname first!</p>
}

export default User;