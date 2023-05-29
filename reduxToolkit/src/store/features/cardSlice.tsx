import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import courseItems from "../../../public/courseItems";
import {CSHelper} from '../../helpers/CardSliceHelper/CardSliceHelper'
 

const initialState: CardState = {
  id: "",
  item: courseItems,
  quantity: 4,
  total: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const cardItem = state.item.filter(
        (item) => item.id === action.payload.id
      );
      cardItem[0].quantity += 1;
      CSHelper.ChangeQuantity(state, 1);
      CSHelper.ChangeTotal(
        state,
        1,
        cardItem[0].price
      );
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const cardItem = state.item.filter(
        (item) => item.id === action.payload.id
      );

      CSHelper.ChangeTotal(
        state,
        -1,
        cardItem[0].price
      );
      cardItem[0].quantity -= 1;
      CSHelper.CheckQuantity(state,cardItem[0]);
      CSHelper.ChangeQuantity(state, -1);
      
    },
    clearCard: (state) => {
      state.item = [];
      state.quantity = 0;
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const itemId = action.payload.id;
      const removedItem = state.item.filter((itm) => itm.id === itemId);
      state.item = state.item.filter((itm) => itm.id !== itemId);
      CSHelper.ChangeQuantity(state, 0, removedItem[0].quantity);
      CSHelper.ChangeTotal(
        state,
        -1,
        removedItem[0].quantity > 0
          ? removedItem[0].quantity * removedItem[0].price
          : 0
      );
    },
    setTotal:(state)=>{
      let totals = 0;
      state.item.map((itm)=>{
        totals += itm.price * itm.quantity;
    })
    state.total = totals
    }
  },
});

export const { incrementQuantity, decrementQuantity, clearCard, removeItem,setTotal } =
  cardSlice.actions;

