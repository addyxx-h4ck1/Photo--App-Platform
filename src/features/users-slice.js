import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u'
const apiKey = import.meta.env.VITE_APP_API_KEY

export const fetchallUsers = createAsyncThunk('/u', async () => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    // Extract relevant headers
    const contentType = response.headers['content-type']
    const contentLength = response.headers['content-length']

    return { data: response.data, contentType, contentLength }
  } catch (error) {
    return error
  }
})

const initialState = {
  users: null,
  usersFetchLoading: false,
}

const usersSlice = createSlice({
  name: 'All users',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchallUsers.pending, (state, action) => {
        state.usersFetchLoading = true
      })
      .addCase(fetchallUsers.fulfilled, (state, action) => {
        state.usersFetchLoading = false
        state.users = action.payload.data
      })
      .addCase(fetchallUsers.rejected, (state, action) => {
        state.usersFetchLoading = false
        console.error(action.payload)
      })
  },
})

export default usersSlice.reducer
