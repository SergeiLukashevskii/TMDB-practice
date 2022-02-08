import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'test',
    initialState: {
        data: null,

    },

    reducers: {
        setUser: (state, { payload }) => {
            state.data = payload
        }

    },
})

export const { setUser } = userReducer.actions
export const selectUser = (state) => state.userReducer.data



export default userReducer.reducer
