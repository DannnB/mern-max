import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

import './App.scss'

// components
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

const App = () => {
   // could make a class for this like a constructor
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'item 1'},
    {id: 'cg2', text: 'item 2'},
    {id: 'cg3', text: 'item 3'}
  ]);

  const addNewGoalHandeler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  }
  return (
    <div className="App container">
      <div className="columns">
        <div className="column">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="title is-1">Course Goals</h1>
          </header>
        </div>
      </div>
      
      <div className="columns">
        <div className="column">
          <NewGoal onAddGoal={addNewGoalHandeler}/>
        </div>
        <div className="column">
          <h2 className="title is-2">Your Goals</h2>
          <GoalList goals={courseGoals}/>
        </div>
      </div>
    </div>
  );
}

export default App;
