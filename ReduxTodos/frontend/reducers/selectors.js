export const allTodos = function (state) {
  return Object.keys(state.todos).map( el => state.todos[el] );
};
