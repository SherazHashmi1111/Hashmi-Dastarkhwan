import React, { Fragment, useContext } from "react";
import styels from "./Modal.module.css";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";

const Backdrop = () => {
  const ctx = useContext(CartContext);
  const hideCartHandler = () => {
    ctx.hideCart();
  }
  return <div className={styels.backdrop} onClick={hideCartHandler}></div>;
};
const Overlay = (props) => {
  return (
    <div className={styels.overlay}>
      <div className={styels.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("backdrop")
      )}
    </Fragment>
  );
}

export default Modal;
