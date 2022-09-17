import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getToDos = createAsyncThunk('GET/TODOS', async () => {
  return axios({
    method: 'get',
    url: process.env.REACT_APP_URL,
  }).then((response) => response.data);
});

const toDosSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(getToDos.fulfilled, (state, action) => {
      state.push({ text: action.payload.value, id: Date.now() });
    });
  },
});

export const { add, remove } = toDosSlice.actions;
export default toDosSlice;
export { getToDos };
