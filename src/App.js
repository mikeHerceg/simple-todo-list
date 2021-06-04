
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState(['Add Some More Todos']);
  
  const addTodo = () =>{
    if(todoItem.length>0){
      console.log('todo added!', todoItem)
      todoList.push(todoItem);
      setTodoItem('');
    }
    else{alert('value needed')}
  }
  const removeTodo = (todo) =>{
    setTodoList( todoList.filter(list => {return list !== todo}) );
    
  }

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <ul className='list-group mb-4'>
        {todoList.length > 0 ?
        todoList.map((todo, index)=>{
          return (
            <li key={index} className="list-group-item">
              <span 
                className="mr-4 btn btn-secondary" 
                onClick={()=>{removeTodo(todo)}}>x</span> 
                {todo}
            </li>
          )
        }):
        <p>Congrats your done your tasks.</p>
      }
      </ul>
      <input 
          name="todo" 
          type="text" 
          value={todoItem} 
          onChange={(e)=>setTodoItem(e.target.value)}
          onKeyPress={(e)=>{if(e.charCode === 13){addTodo()}}}
          placeholder="Add your Todo here" 
          className="mb-2"/>
      <br/>
      <button type="submit " onClick={ ()=>{ addTodo() }} className="btn btn-primary">Add Todo</button>
    </div>
  );
}

export default App;
