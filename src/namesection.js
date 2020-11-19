import Filter from 'bad-words';
import React from 'react';
import "./App.css";
import fire from './fire'

const filter = new Filter();

const Namesection = ({
    setName,
    name,
    user,
    hasName,
    setHasName

}) => {
    return (
        <section className="Namesection">
            <div className="name-section">
            <h3>To continue, set yourself a Displayname.</h3>
            <input
            placeholder="Set Display Name"
            value={name}
            onChange = {e => setName(e.target.value)}
            ></input>
            <button onClick={() => changeName(user, name, hasName, setHasName)}>Change</button>
            </div>
        </section>
    )
}

function changeName(user, name, hasName, setHasName) {
    if (name.length < 3) {
        alert("Please choose a name that has over 3 Characters!")
        return;
    } else if (filter.isProfane(name)) {
        alert("Please dont use bad words!")
        return;
    }
    user.updateProfile({
        displayName: name
    });
    console.log(displayName);



}

export default Namesection;