import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  T: null,
}

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
})
export const { saveToken, deleteToken } = loginTokenSlice.actions
export default loginTokenSlice.reducer
