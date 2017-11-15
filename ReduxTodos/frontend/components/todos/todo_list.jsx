import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

// module.exports = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {

  constructor(props) {
     super(props);
   }

  render(){
// <li key={idx}>{todo.title}</li>)
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)
          }
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

}
export default TodoList;
