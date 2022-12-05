import React from "react";
import styles from "./CartModal.module.css";

const CartModal = ({ setCartModal }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setCartModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setCartModal]);

  return (
    <section>
      <div ref={ref} className={`${styles.cartModal}`}>
        <h1>Cart</h1>
        <p>Cart content.</p>
      </div>
    </section>
  );
};

export default CartModal;
