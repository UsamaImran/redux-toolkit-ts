import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    addToDo,
    Todo,
    updateTodoStatus,
    removeTodo,
    clearTodos,
} from './todoSlice'

let count = 0
const AddTodo = () => {
    const [todo, setTodo] = useState<Todo>({} as Todo)
    const dispatch = useAppDispatch()
    return (
        <div>
            <input
                defaultValue={todo.title as string}
                placeholder="title"
                onChange={(e) =>
                    setTodo((prev) => ({
                        ...prev,
                        id: `${count++}`,
                        title: e.target.value,
                        isCompleted: false,
                    }))
                }
            />
            <button
                onClick={() => {
                    dispatch(addToDo(todo))
                    setTodo({} as Todo)
                }}
            >
                Add
            </button>
        </div>
    )
}

function Todos() {
    const todos = useAppSelector((state) => state.todos)
    const dispatch = useAppDispatch()
    return (
        <div>
            Todos
            <hr />
            <AddTodo />
            <hr />
            <button onClick={() => dispatch(clearTodos())}>
                Reset Todos
            </button>
            {todos.map((todo) => (
                <p key={todo.id}>
                    {todo.title} -{' '}
                    <input
                        defaultChecked={todo.isCompleted}
                        type={'checkbox'}
                        onChange={(e) =>
                            dispatch(
                                updateTodoStatus({
                                    ...todo,
                                    isCompleted: e.target.checked,
                                })
                            )
                        }
                    />{' '}
                    {'=>'}{' '}
                    <span onClick={() => dispatch(removeTodo(todo.id))}>
                        x
                    </span>
                </p>
            ))}
        </div>
    )
}

export default Todos
