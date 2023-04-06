import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
import todosReducer from '../features/todo/todoSlice'
import personReducer from '../features/Person/personSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        todos: todosReducer,
        person: personReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
