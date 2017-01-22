var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: "Do something"
      },
      {
        id: 2,
        text: "Check mail"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // this TestUtils methods will let us check how many of a given component are rendered under a separate component
    // i.e. check how many Todo components rendered under our TodoList component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(TodoList, Todo); // gives array of components

    // check that array length above == array length of todos we made above
    expect(todosComponents.length).toBe(todos.length);
  });
});
