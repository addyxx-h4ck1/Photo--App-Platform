import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const loadingSlice = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.loading = true
    },
    disableLoading: (state) => {
      state.loading = false
    },
  },
})

export const { enableLoading, disableLoading } = loadingSlice.actions

export default loadingSlice.reducer
