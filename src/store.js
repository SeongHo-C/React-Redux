import { configureStore } from '@reduxjs/toolkit';
import toDosSlice from './toDosSlice';

const store = configureStore({ reducer: { toDos: toDosSlice.reducer } });

export default store;
