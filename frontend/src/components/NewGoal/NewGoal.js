import React, {useState} from 'react'

import './NewGoal.scss';

const NewGoal = props => {
    let [userText, setUserText] = useState('');
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: userText
        }

        setUserText('');

        props.onAddGoal(newGoal)
    }

    const textChangedHandeler = event => {
        // this way can have issues
        // we dont ned previous state so a non function will work 
        setUserText(event.target.value);
    }
    return <form className="new-goal-form a" onSubmit={addGoalHandler}>
        <div className="field">
            <label className="label">Goal Name</label>
            <div className="control">
                <input value={userText} onChange={textChangedHandeler} className="input" type="text" placeholder="Enter your new goal name"/>
            </div>
        </div>
        <div className="control">
            <button className="button is-link">Submit</button>
        </div>
    </form>
}

export default NewGoal;