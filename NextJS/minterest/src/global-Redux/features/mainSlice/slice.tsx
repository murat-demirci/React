'use client'
import { createSlice } from "@reduxjs/toolkit";

interface IMain {
  scrollY: number;
}

const InitialState: IMain = {
  scrollY: 0,
};

export const MainSlice = createSlice({
  name: "main",
  initialState: InitialState,
  reducers: {
    dragUp: (state) => {
      console.log('drag up')
    },
    dragDown: (state) => {
      console.log('drag down')
    },
  },
});

export const {dragUp, dragDown} = MainSlice.actions;