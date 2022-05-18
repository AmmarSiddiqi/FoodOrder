import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../common/Button";
import CartItem from "./CartItem";
import CartContext from "../../store/cartContext";
import classes from "../../styles/cart/Cart.module.scss";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAdd = (item) => {
    cartCtx.addItem(item);
  };
  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes.cartItem}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            item={item}
            key={item.id}
            onAdd={onAdd.bind(null, item)}
            onRemove={onRemove.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );
  const itemsPresentInCart = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      {/* <CartItem item={cartItems} /> */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonCancel} onClick={props.onClose}>
          Cancel
        </button>
        {itemsPresentInCart && <Button label="Order" />}
      </div>
    </Modal>
  );
};

export default Cart;
