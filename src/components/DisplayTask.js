import React from "react";

export default function  DisplayTask(props) {
    const {todos, setTodos} = props;

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

       const handleDeleteTodo = (item) => {
        let deleteTodo = [...todos];
        let filtertodo = deleteTodo.filter((todo, i) => {
          return i!== item;
        } )
        setTodos(filtertodo);
      };
  
    return(
        <div>
            <ul className='tc'>
                {props.todos.map((todo, i) => (
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