var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // blank for now, do nothing if fails
    }

    // check if we actualy get an array
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted (filter returns a new array)
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();

      // returns true if text length is 0, we want to return every item (i.e. nothing will change)
      // indexOf: -1 if not found, 0+ if found (returns true)
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // sort todos with non-completed first (sort modifies the existing array)
    filteredTodos.sort((a,b) => {
      if (!a.completed && b.completed) {
        return -1; // if a is not completed and b is, a should come before b
      } else if (a.completed && !b.completed) {
        return 1; // a should come after b, because a is completed and b isn't
      } else {
        return 0; // a === b so no reason to re-sort
      }
    });

    return filteredTodos;
  }
}
