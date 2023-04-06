import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: string
    title: string
    isCompleted: boolean
}

const initialState: Todo[] = []

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<Todo>) => {
            return [...state, { ...action.payload }]
        },

        removeTodo: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter((item) => item.id !== action.payload)
        },

        updateTodoStatus: (state, action: PayloadAction<Todo>) => {
            const currentState = state.findIndex(
                (item) => item.id === action.payload.id
            )
            if (currentState !== -1) state[currentState] = action.payload
            return state
        },
        clearTodos: () => initialState,
    },
})

export const { addToDo, removeTodo, updateTodoStatus, clearTodos } =
    todoSlice.actions

export default todoSlice.reducer
