export const fetchTodos = () => {
  return $.ajax({
    method:'GET',
    url: '/api/todos'
  // }).then(
  //   todos => console.log(todos),
  //   error => console.log(error)
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: { todo }
  });
};
