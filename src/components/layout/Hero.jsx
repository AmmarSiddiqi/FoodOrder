import React from "react";
import Wrapper from "../UI/Wrapper";
import classes from "../../styles/layout/Hero.module.scss";

const Hero = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img
        src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
        alt="Food"
      />
    </div>
  );
};

export default Hero;
