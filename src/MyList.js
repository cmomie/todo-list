import React, { useState } from 'react'
import ListItem from './ListItem';

function MyList(props) {
    const [tasks, setTasks] = useState(props.items);
    const [newItem, setNewItem] = useState('');

    const clearList = () => {
        console.log('clearing list...');
        setTasks([]);
    }

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        let newList = tasks;
        newList.push(newItem);
        setTasks(newList);
        setNewItem('');
    } 

    const removeItem = (index) =>{
        index = parseInt(index)
        let newList = tasks.filter((item, idx) => {
            if (index === idx) {
                return false;
            } else {
                return true;
            }
        });
        setTasks(newList);
    }

    const rendertoDos = () => {
        let toDos = tasks.map((item, index) => {
            return <ListItem key={index} task={item} index={index} removeItem={removeItem} />
        });
        return toDos;
    }
    return (
        <div>
            <h1>Things I should stop procrastinating:</h1>
            <form onSubmit={addItem}>
                <input type="text"
                    placeholder="Type an item here"
                    onChange={handleChange}
                    value={newItem}
                />
                <button type="submit">Add it!</button>
            </form>
            <ul>
                {rendertoDos()}
            </ul>

            <button onClick={clearList}>Clear List</button>
        </div>

    )
}

export default MyList;