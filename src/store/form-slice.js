import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    showForm: false,
  },
  reducers: {
    setShowForm(state) {
      state.showForm = !state.showForm
    },
  },
})

export const formActions = formSlice.actions

export default formSlice
