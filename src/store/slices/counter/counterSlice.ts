import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CounterState } from '../../interfaces/Interfaces';

const initialState: CounterState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.counter

// export default counterSlice.reducer