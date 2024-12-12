import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const foodStore = createSlice({
  name: "foods",
  initialState: {
    foodList: [],
    activeIndex: 0,
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
  },
});

const { setFoodList, changeActiveIndex } = foodStore.actions;
const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export { setFoodList, fetchFoodList, changeActiveIndex };

export default foodStore.reducer;
