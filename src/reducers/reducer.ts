import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IS,trainType,characteristicsType } from "../types/types";

const initialState:IS = {
  trainList:[],
  trainCard:[],
  name:"",
  setButtonAccess:true
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
        getTrainList(state, action:PayloadAction<trainType[]>){
          state.trainList = action.payload
        },
        getTrainInfo(state, action:PayloadAction<characteristicsType[]>){
          state.trainCard = action.payload 
        },
        setName(state, action:PayloadAction<string>){
          state.name = action.payload 
        },
        setButtonAccess(state, action:PayloadAction<boolean>){
          state.setButtonAccess = action.payload 
        },
  },
});
export const {
  getTrainList,
  getTrainInfo,
  setName,
  setButtonAccess
} = reducer.actions;
export default reducer.reducer;