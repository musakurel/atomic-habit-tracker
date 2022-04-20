import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: 0,
    name: "Test 112",
    checkedDays: ["05-04-2022"],
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
      prepare(name, checkedDays) {
        const id = uuidv4();
        return { payload: { id, name, checkedDays } };
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
    addCheckedDay: (state, action) => {
      const { id, day } = action.payload;
      const habitIndex = state.findIndex((habit) => habit.id === id);

      if (state[habitIndex].checkedDays.includes(day)) {
        state[habitIndex].checkedDays?.splice(
          state[habitIndex].checkedDays.indexOf(day),
          1
        );
      } else {
        state[habitIndex].checkedDays.push(day);
      }
    },
  },
});

export const {
  addHabit,
  deleteHabit,
  editHabit,
  addCheckedDay,
  removeCheckedDay,
} = habitSlice.actions;
export default habitSlice.reducer;
