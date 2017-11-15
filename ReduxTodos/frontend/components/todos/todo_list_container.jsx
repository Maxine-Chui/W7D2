import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import TodoForm from '../todo_list/todo_form';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
//<TodoList todos={allTodos(state)} receiveTodo={dispatch(receiveTodo(todo))}/>
