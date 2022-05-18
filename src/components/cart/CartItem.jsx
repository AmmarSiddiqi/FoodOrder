import React from "react";
import classes from "../../styles/cart/CartItem.module.scss";

const CartItem = (props) => {
  const { name, price, amount } = props.item;
  return (
    <div className={classes["cart-item"]}>
      <div>
        <span>{name}</span>
        <div className={classes.summary}>
          <span className={classes.price}>{price} </span>
          <span className={classes.amount}> x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
