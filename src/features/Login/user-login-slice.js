import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/o'

const initialState = {
  T: null,
  userInfo: {},
  fetchLoading: false,
  error: null,
}

export const fetchUser = createAsyncThunk('/u/o', async ({ token }) => {
  try {
    let req = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return req.data
  } catch (error) {
    return error
  }
})

const loginTokenSlice = createSlice({
  name: 'Token',
  initialState,
  reducers: {
    saveToken: (state, { payload }) => {
      state.T = payload
    },
    deleteToken: (state) => {
      state.T = null
      sessionStorage.removeItem('persist:main-root')
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.fetchLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.fetchLoading = false
        state.userInfo = action.payload
        console.log(action.payload)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(action.error)
        ;(state.fetchLoading = false), (state.error = action.error)
      })
  },
})
export const { saveToken, deleteToken } = loginTokenSlice.actions
export default loginTokenSlice.reducer
