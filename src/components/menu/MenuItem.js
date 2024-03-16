import React, { useContext } from "react";
import styles from "./MenuItem.module.css";
import MenuForm from "./MenuForm";
import CartContext from "../../store/cart-context";

function MenuItem(props) {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      key: props.id,
      title: props.title,
      price: props.price,
      amount: +amount,
    });
  };
  return (
    <div className={styles.meun__item}>
      <div className={styles.menu__detail}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <span>Rs {props.price.toFixed(2)}</span>
      </div>
      <div>
        <MenuForm itemQuantity={addToCartHandler} />
      </div>
    </div>
  );
}

export default MenuItem;
