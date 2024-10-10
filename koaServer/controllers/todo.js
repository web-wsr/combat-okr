
const Todo = require('../model/todo');
// 处理时间的工具函数
const { formatDate } = require('./../utils/date');

const todoController = {
    getTodoList: async (ctx, next) => {
        const status = 1;

        // 获取用户id
        const user_id = ctx.state.user_id;
        console.log(user_id);
        try {
            const todos = await Todo.select({ user_id, status });
            console.log(todos);

            const todoList = todos.map(item => {
                item.created_time = formatDate(item.created_time);
                item.completed_time = formatDate(item.completed_time);
                return item;
            });

            ctx.body = {
                code: 200,
                data: {
                    todos: todoList
                }
            };
            console.log('ctx.body set:', JSON.stringify(ctx.body)); // 调试输出

        } catch (error) {
            console.error('Error fetching todos:', error);
            ctx.body = {
                code: 500,
                message: 'Internal Server Error'
            };
        }
    }
};

module.exports = todoController;