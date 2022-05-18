import React, { useReducer } from "react";
import CartContext from "./cartContext";

const ACTIONS = {
  ADD_ITEM: "add-items-to-cart",
  REMOVE_ITEM: "remove-item-to-cart",
};

const initialCart = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      let index = state.items.findIndex((item) => item.id === action.item.id);

      let existingCartItem = state.items[index];

      let updatedItems;
      if (existingCartItem) {
        let updatedItem;
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[index] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case ACTIONS.REMOVE_ITEM: {
      const index = state.items.findIndex((item) => item.id === action.id);
      const existingCartItem = state.items[index];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
      let updatedItems;
      if (existingCartItem) {
        let updatedItem;
        if (existingCartItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1,
          };
          updatedItems = [...state.items];
          updatedItems[index] = updatedItem;
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    }

    default:
      return initialCart;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducer, initialCart);

  const addItemHandler = (item) => {
    dispatchCart({ type: ACTIONS.ADD_ITEM, item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: ACTIONS.REMOVE_ITEM, id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
