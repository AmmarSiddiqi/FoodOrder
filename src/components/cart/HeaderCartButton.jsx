import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import classes from "../../styles/cart/HeaderCartButton.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let numberOfCartItems = cartCtx.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;
  return (
    <button className={btnClasses} onClick={props.showCart}>
      <span className={classes.icon}>
        <ShoppingCartOutlinedIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
