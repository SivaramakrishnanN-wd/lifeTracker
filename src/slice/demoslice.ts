
import { createSlice } from "@reduxjs/toolkit";

interface DemoState {
  message: string;
}

const initialState: DemoState = {
  message: "",
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    printMessage: (state) => {
      console.log("this is from slice");
      state.message = "slice printed";
    },
  },
});

export const { printMessage } = demoSlice.actions;
export default demoSlice.reducer;
