import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiox from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axiox.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const todoReducer = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      state.error = null;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.todos = [];
      state.error = action.error.message;
    });
  },
});

export default todoReducer.reducer;
