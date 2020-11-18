import React from 'react';
import "./App.css";

const Namesection = ({
    setName,
    name,
    user

}) => {
    return (
        <section className="Namesection">
            <div className="name-section">
            <h3>Change your Name</h3>
            <input 
            placeholder="Set Display Name"
            value={name}
            onChange = {e => setName(e.target.value)}
            ></input>
            <button onClick={() => 
            user.updateProfile({
                displayName: name
            })}>Change</button>
            </div>
        </section>
    )
}

export default Namesection;