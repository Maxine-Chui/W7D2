import React from 'react';
import uniqueId from '../../util/id';


class TodoForm extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       title: '',
       body: ''
     };
    //  console.log(this.props);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    const todo = { title: this.state.title, body: this.state.body, done: false };
    this.props.createTodo(todo).then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.linkState('title')} value={this.state.title}/>
        <input onChange={this.linkState('body')} value={this.state.body}/>
        <button type="submit" name="button">Submit</button>
      </form>
    );
  }

}

export default TodoForm;
