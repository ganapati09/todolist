import React,{useState} from 'react';
import './App.css';
import 'tachyons';
import Help from './Help/Help';
import Input from './components/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DisplayTask from './components/DisplayTask';

function App(props) {
    const [todos, setTodos] = useState([]);
 
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date)
        fetch('http://localhost:3001/getTask',{
                  method: 'post',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                  date: props.selectedDate
              })
              
              }).then(response => response.json())
              .then(data => {
              
                  console.log(data.length)
                  for(let i = 0;i < data.length;i++){
                  if (data) {
                  const newTodos = {
                      text: ' ' + data[i].task,
                      completed: data[i].isCompleted
                  };
                  setTodos([...todos, newTodos]);
                  } else {
                  setTodos([]); // clear the state if no task is found
                  }
                  }
                  // update the state with the new task
              
              })
              .catch(error => {
              console.error('Error fetching task:', error);
              })
          }

  return (
    <div className='tc'>
      <h1 className='f1'>Todo App</h1>
      <Help />
      <DatePicker selected={selectedDate} onChange={handleDateChange}  />
      
      <Input  />
      
      <DisplayTask todos={todos}  setTodos={setTodos}/>

      </div>
  );
}

export default App;
