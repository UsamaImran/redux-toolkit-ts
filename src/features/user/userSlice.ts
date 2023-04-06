import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface UserState {
    name: string
    age: string
    city: string
}

const initialState: UserState = {
    name: '',
    age: '',
    city: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<UserState>>) => {
            return (state = { ...state, ...action.payload })
        },
        resetUser: () => initialState,
    },
})

export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
