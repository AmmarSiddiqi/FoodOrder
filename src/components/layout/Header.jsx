import React, { Fragment } from "react";
import classes from "../../styles/layout/Header.module.scss";
import HeaderCartButton from "../cart/HeaderCartButton";

const Header = (props) => {
  const tabs = ["Why Foodie?", "Services", "Menu", "Contact"];
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>Foodie</div>
        <div className={classes.menus}>
          {tabs.map((tab) => (
            <li key={Math.random().toString()}>{tab}</li>
          ))}
        </div>
        <div className={classes.cart}>
          <HeaderCartButton showCart={props.onShowCart} />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
