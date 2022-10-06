import React from 'react';
import MyList from './MyList';
import './App.css';

function App() {
    const toDoList = ['Cooking', 'Homework', 'Laundry'];
  
  return (
    <div>
      <MyList items={toDoList}/>
    </div>
  );
}

export default App;
