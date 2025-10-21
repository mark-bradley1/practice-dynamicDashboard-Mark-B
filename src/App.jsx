import React from 'react';
import "./App.css";
import Greeting from './components/Greeting';
import tasksList from './components/Tasks';
import Tasks from './components/Tasks';

function App() {
  const userName = 'Mark';
  const isPremium = true;
  const tasksList = [
    { taskName: "Take out trash", completed: true },
    { taskName: "Clean room", completed: false },
    { taskName: "Do dishes", completed: true },
    { taskName: "Finish homework", completed: false },
    { taskName: "Blow leaves", completed: false },
    { taskName: "Wash car", completed: false }
  ];

  return (
    <div className="myDivClass">
      <Greeting name={userName} />
      {isPremium? <p>Thank you for being a premium member!</p>:<p>Upgrade to premium to enjoy exclusive features!</p>}
      { tasksList.map((task) => <Tasks key={task.taskName} name={task.taskName} completed={task.completed} />) }
    </div>
  );
}

export default App


// { userNames.map((name) => <Greeting key={name} name={name}/>)}