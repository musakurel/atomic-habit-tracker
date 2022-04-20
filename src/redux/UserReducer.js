import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: 0,
    name: "Test 112",
  },
];

const habitSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addHabit: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        const id = uuidv4();
        return { payload: { id, name } };
      },
    },
    editHabit: (state, action) => {
      const { id, name } = action.payload;
      const habitIndex = state.findIndex((habit) => habit.id === id);
      state[habitIndex].name = name;
      return state;
    },

    deleteHabit: (state, action) => {
      return state.filter((habit) => habit.id !== action.payload);
    },
  },
});

export const { addHabit, deleteHabit, editHabit } = habitSlice.actions;
export default habitSlice.reducer;
