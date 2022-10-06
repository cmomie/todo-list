import React from 'react';
import ListItem from './ListItem';

const toDoList = ['Cooking', 'Homework', 'Laundry'];

let toDos = toDoList.map((item, index) => {
    return <ListItem key={index} task={item} />
  });

function MyList() {
  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        {toDos}
      </ul>
    </div>
  )
}

export default MyList;