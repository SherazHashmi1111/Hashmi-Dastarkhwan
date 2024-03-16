import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import img from "../../assets/logo192.jpg";
import img__header from "../../assets/headerImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MealSummary from "./MealSummary";
import CartContext from "../../store/cart-context";

function Header() {
  const [btnIsHighlighted , setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const showCartHandler = (e) => {
    e.preventDefault();
    ctx.showCart();
  }
  const numberOfCartItems = ctx.items.reduce((curNum , item) => {
    return curNum + item.amount;
  }, 0);
  const {  items } = ctx;
  const btnClasses = `${styles.button} ${ btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if(items.length === 0){return;}
  
    return () => {
      setBtnIsHighlighted(true);
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false)
      }, 300);

      return(() =>{clearTimeout(timer)})
    }
  }, [items]);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.nav__logo}>
          <img src={img} alt="nav-img" />
          <h3>Hashmi Dasterkhwan</h3>
        </div>
        <button onClick={showCartHandler} className={btnClasses}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <p>Your Cart</p>
          <span>{numberOfCartItems}</span>
        </button>
      </nav>
      <div className={styles.header__img}>
        <img src={img__header} alt="" />
      </div>
      <MealSummary/>
    </header>
  );
}

export default Header;
