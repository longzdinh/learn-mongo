const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '5a606febdfcb5223b82ebebf';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('todos: ',todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('todo: ',todo);
});

Todo.findById(id).then((todo) => {
    console.log('todo: ', JSON.stringify(todo, undefined, 2));
});