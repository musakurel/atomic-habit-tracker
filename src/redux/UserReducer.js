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
    removeHabit: {
      reducer(state, action) {
        state.splice(action.payload, 1);
      },
    },
    updateHabit: {
      reducer(state, action) {
        state.filter((habit) => habit.id === action.payload.id)[0].name =
          action.payload.name;
      },
    },
  },
});

export const { addHabit, removeHabit, updateHabit } = habitSlice.actions;
export default habitSlice.reducer;
