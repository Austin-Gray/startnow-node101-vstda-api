const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
// add your code here
app.use(bodyParser.json());
var todoItems = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];
itemIds = [0,1,2];
app.get('/', function(req, res) {
  var status = {'status': 'ok'};
  res.json(status)
});
app.get('/api/TodoItems', function(req, res) {
  res.json(todoItems);
});
app.get('/api/TodoItems/:number', function(req, res) {
  var num = parseInt(req.params.number);
  res.json(todoItems[itemIds.indexOf(num)]);
});
app.post('/api/TodoItems/', function(req, res) {
  if (itemIds.includes(req.body.todoItemId)) {
    todoItems.splice(itemIds.indexOf(req.body.todoItemId, 1, req.body));
  } else {
    todoItems.push(req.body);
    itemIds.push(req.body.todoItemId);
  };
  res.status(201).send(req.body);
});
app.delete('/api/TodoItems/:number', function(req, res) {
  var num = parseInt(req.params.number);
  res.json(todoItems[num]);
  todoItems.splice(itemIds.indexOf(num), 1);
  itemIds.splice(itemIds.indexOf(num), 1);
});

module.exports = app;
