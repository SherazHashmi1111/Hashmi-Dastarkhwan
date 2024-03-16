import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

function CartItem(props) {
  const ctx = useContext(CartContext);
  const removeItemHandler = (e) => {
    e.preventDefault();
    ctx.removeItem(props.id)
  }
  const addItemHandler = (e) => {
    e.preventDefault();
    ctx.addItem(props.item);
  }
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-info"]}>
        <h4>{props.title}</h4>
        <div className={styles['cart-info__price']}>
        <span>Rs {props.price}</span>
        <div>X {props.amount}</div>
        </div>
      </div>
      <div className={styles['cart-actions']}>
        <div className={styles['cart-action']}>
            <button className={styles.btn} onClick={removeItemHandler}>-</button>
            <button className={styles.btnAlt} onClick={addItemHandler}>+</button>
        </div>
        <div className={styles['total-amount']}>Rs {props.price * props.amount}</div>
      </div>
    </div>
  );
}

export default CartItem;
