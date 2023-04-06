import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PersonSate {
    id: string
    name: string
    age: string
    address: string
    phone: string
    email: string
}

const initialState: PersonSate[] = []

const personSlice = createSlice({
    name: 'person slice',
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<PersonSate>) => {
            return [...state, { ...action.payload }]
        },
        removePerson: (
            state,
            action: PayloadAction<Pick<PersonSate, 'id'>>
        ) => {
            return state.filter((person) => person.id !== action.payload.id)
        },
        resetPersons: () => initialState,
    },
})

export const { addPerson, removePerson, resetPersons } = personSlice.actions

export default personSlice.reducer
