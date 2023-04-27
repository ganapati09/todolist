import React,{useState} from 'react';

function Input(props) {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [isCompleted] = useState(false);
    const handleInputChange = (e) => {
        setInputText(e.target.value);
      };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleAddTodo();
        }
      };

    const handleAddTodo = () => {
        if (inputText.trim() === '') return;
        const newTodo = {
        text: ' ' + inputText,
        completed: isCompleted
        };

        setTodos([...todos, newTodo]);
        setInputText('');
        
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
    
    return(
        <div>
            <input className='br3 pa2 shadow-5 tc'
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter a task..."
              />
            <ul className='tc'>
              {todos.map((todo, i) => (
                  <li className='ml-0 pa-5' key={i}>
                    <div className='pa3 dib shadow-5 br4 overflow-x-auto w-40'>
                      <input className='tl' type='checkbox' checked={todo.completed} onChange={() => handleCheckBox(i)} />
                        {todo.text}
                      {todo.completed && <button className="tc bg-light-green br3 pa-2" onClick={() => handleDeleteTodo(i)}>delete</button>}
                    </div>
                  </li>
                ))}
            </ul>
        </div>
    );
}

export default Input;