import React from 'react';
import fire from './fire';

class User extends React.Component {



    
    render() {
        return (
        <section className="User">
            <div className="post-section">
                <h3>Welcome to Mooh it! {fire.auth().currentUser.displayName}</h3>
                <textarea
                    type="text"
                    placeholder="Message"
                />
                <button >Mooooh!</button>

            </div>
        </section>
        );
    }

}

export default User;