import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const foodStore = createSlice({
  name: "foods",
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.cartList.push(action.payload);
      }
    },
  },
});

const { setFoodList, changeActiveIndex, addCart } = foodStore.actions;
const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export { setFoodList, fetchFoodList, changeActiveIndex, addCart };

export default foodStore.reducer;
