const Todo = require('../model/todo');
const testController = {
    test: async (ctx, next) => {
        // const todos = await Todo.all();
        // console.log(todos);

        // ctx.body = {
        //     code: 200,
        //     data: {
        //         todos: todoList
        //     }
        // };
        ctx.state.code = 200;
        ctx.state.data = 'sucess'
        console.log('oooooooo')
    }
}

module.exports = testController