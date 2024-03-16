import React, { useRef } from "react";
import styles from "./MenuForm.module.css";

function MenuForm(props) {
  const inputRef = useRef('')
  const addItemHandler = (e) => {
    e.preventDefault();
    props.itemQuantity(inputRef.current.value);
    inputRef.current.value = 1;
  };
  return (
    <form className={styles.form} onSubmit={addItemHandler}>
      <div className={styles.menu__input}>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          ref={inputRef}
        />
      </div>
      <div className={styles.menu__action}>
        <button type="submit">+ Add</button>
      </div>
    </form>
  );
}

export default MenuForm;
