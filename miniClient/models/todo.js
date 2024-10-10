import request from '../utils/request.js'
import API from '../consts/api.js'

const todoServer = {
    todoList(){
        return request.get(API.todo)
    }
}

export default todoServer