import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "../../styles/meals/MealItem.module.scss";
import CartContext from "./../../store/cartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { img, name, description, price, id } = props.meal;

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal} key={id}>
      <div>
        <img src={`${img}`} className={classes.img} />
      </div>
      <div className={classes.details}>
        <h4>{name}</h4>
        <span>{description}</span>
        <p>{`$${price.toFixed(2)}`}</p>
      </div>
      <div className={classes.form}>
        <MealItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
