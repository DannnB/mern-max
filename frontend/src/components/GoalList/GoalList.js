import React from 'react';

// css
import './GoalList.scss';
const GoalList = props => {
    return (
        <ul className="goal-list">
            {
                props.goals.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>;
                })
            }
        </ul>
    )
}

export default GoalList;