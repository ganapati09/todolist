import React, { useState } from 'react';
import './App.css';
import 'tachyons';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [helptext, setHelpText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = {
      text: inputText,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (item) => {
    let deleteTodo = [...todos];
    let filtertodo = deleteTodo.filter((todo, i) => {
      return i!== item;
    } )
    setTodos(filtertodo);
  };

  const handleCheckBox = (i) => {
    setTodos(todos.map((todo, index) => {
      if (index === i) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }));
  }
  const onClikHelpButton = (e) =>  {
    console.log(e);
    setHelpText('type  a task in  text field and then press Enter. If you want to  mark the task as completed click on check box. if you want to delete click delete buttonrmdir ');
  }

  return (
    <div className='tc'>
      <h1 className='f1'>Todo App</h1>
      <p>{helptext}</p>
      <button onClick={onClikHelpButton}>help</button>
      <div>
        <input className='br3 pa2 shadow-5 tc'
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a task..."
        />

      </div>
      <ul className='tc'>
        {todos.map((todo, i) => (
            <li className='ml-0 pa-5' key={i}>
              <input type='checkbox' checked={todo.completed} onChange={() => handleCheckBox(i)} />
              {todo.text}
              {todo.completed && <button className="tc bg-light-green br3 pa-2" onClick={() => handleDeleteTodo(i)}>delete</button>}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
