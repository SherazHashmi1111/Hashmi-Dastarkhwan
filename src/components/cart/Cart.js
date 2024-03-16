import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

function Cart() {
  const [isOrder, setIsOrder] = useState(false);
  const ctx = useContext(CartContext);
  const closeCartHandler = (e) => {
    e.preventDefault();
    ctx.hideCart();
  };
  const orderHandler = (e) => {
    e.preventDefault();
    setIsOrder(true);
  };
  const confirmOrderHandler = (customer) => {
    fetch('https://foodorderapp-abb98-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
    {
      method: 'POST',
      body: JSON.stringify({
        orderItems: ctx.items,
        user: customer
      })
    }
    )
    ctx.clearCart();
  };

  return (
    <>
      <Modal>
        {ctx.items.length === 0 ? (
          <p className={styles.empty__cart}>Cart is empty</p>
        ) : (
          ctx.items.map((item) => (
            <CartItem
              item={item}
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))
        )}
        <div className={styles.actions}>
          <div className={styles.action}>
            <h3>Total Amount</h3>
            <span>Rs {ctx.totalAmount}</span>
          </div>
          {!isOrder && <div className={styles.action__btn}>
            <button className={styles.btn} onClick={closeCartHandler}>
              Close
            </button>
            <button className={styles.btnAlt} onClick={orderHandler}>
              Order
            </button>
          </div>}
        </div>
        {isOrder && <Checkout onConfirm={confirmOrderHandler} />}
      </Modal>
    </>
  );
}

export default Cart;
