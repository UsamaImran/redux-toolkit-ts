import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'

interface Post {
    id: string
    userId: string
    title: string
    body: string
}

export interface CounterState {
    value: number
    posts: Post[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
    posts: [],
}

const getPosts = () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((data) => data)

export const getPostsData = createAsyncThunk('counter/posts', async () => {
    const response = await getPosts()

    return response
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPostsData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getPostsData.fulfilled, (state, action) => {
                state.status = 'idle'
                state.posts = action.payload
            })
            .addCase(getPostsData.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const { increment, decrement, incrementByAmount } =
    counterSlice.actions

export default counterSlice.reducer
