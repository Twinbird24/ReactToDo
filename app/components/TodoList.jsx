var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} =  this.props;
    var renderTodos = () => {
      // interate over passed-in array (todos) and return array of jsx
      // map calls a function for each element in array, and then returns the results
      return todos.map((todo) => {
        // keys help React identify which items have changed, are added, or are removed
        // keys should be given to the elements inside the array to give the elements a stable identity
        return <Todo key={todo.id} {...todo}/> // spread operator lets us spread out all properties of an object, in this case into indv. props
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;