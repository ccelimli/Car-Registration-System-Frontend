import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8081"

export const registerUser = createAsyncThunk(
    'registerUser',
    async ({username, password}) => {
        const response = await axios.post(
            `${baseUrl}/user/register`,
            {
                firstName: "null",
                lastName: "null",
                username,
                password
            },
            {withCredentials: true}
        )
        return response.data
    }
)

export const loginUser = createAsyncThunk(
    'loginUser',
    async ({username, password}) => {
        const response = await axios.post(
            `${baseUrl}/user/login`,
            {
                username,
                password
            },
            {withCredentials: true}
        )
        return response.data
    }
)

export const changePasswordUser = createAsyncThunk(
    'changePasswordUser',
    async ({username, oldPassword, newPassword}) => {
        const response = await axios.post(
            `${baseUrl}/user/changepassword`,
            {
                username,
                oldPassword,
                newPassword
            },
            {withCredentials: true}
        )
        return response.data
    }
)

const initialState = {
    login: {
        data: [],
        loading: false,
        error: ""
    },
    register: {
        data: [],
        loading: false,
        error: ""
    },
    changePasswordUser: {
        data: [],
        loading: false,
        error: ""
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.users.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {

        // registerUser
        builder.addCase(registerUser.pending, (state) => {
            state.register.loading = true
            state.register.error = ''
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.register.data = action.payload
            state.register.loading = false
        })
        builder.addCase(registerUser.rejected, (state) => {
            state.register.loading = false
            state.register.error = 'Request Fetching Error'
        })

        // loginUser
        builder.addCase(loginUser.pending, (state) => {
            state.login.loading = true
            state.login.error = ''
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.login.data = action.payload
            state.login.loading = false
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.login.loading = false
            state.login.error = 'Request Fetching Error'
        })

        // changePasswordUser
        builder.addCase(changePasswordUser.pending, (state) => {
            state.changePasswordUser.loading = true
            state.changePasswordUser.error = ''
        })
        builder.addCase(changePasswordUser.fulfilled, (state, action) => {
            state.changePasswordUser.data = action.payload
            state.changePasswordUser.loading = false
        })
        builder.addCase(changePasswordUser.rejected, (state) => {
            state.changePasswordUser.loading = false
            state.changePasswordUser.error = 'Request Fetching Error'
        })

    }
})

export const {setLoading} = userSlice.actions
export default userSlice.reducer