import React from "react";
import styles from "./CartModal.module.css";
import thumb from "./images/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "./images/icon-delete.svg";
import { GlobalContext } from "./GlobalContext";

const CartModal = ({ setCartModal }) => {
  const [addCart, setAddCart] = React.useContext(GlobalContext);
  const setCartQ = React.useContext(GlobalContext)[5];

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
      {addCart ? (
        <div ref={ref} className={`${styles.cartModal}`}>
          <h1>Cart</h1>
          <div className={styles.cartModalInfo}>
            <img src={thumb} alt="" />
            <div className={styles.cartModalText}>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                <span>$125.00</span> x <span>{addCart}</span>{" "}
                <span className={styles.finalPrice}>{`$${
                  125 * addCart
                }.00`}</span>
              </p>
              <Delete
                onClick={() => {
                  setAddCart(0);
                  setCartQ(0);
                }}
                className={styles.delete}
              />
            </div>
            <button className={styles.btn}>Checkout</button>
          </div>
        </div>
      ) : (
        <div ref={ref} className={`${styles.cartModal}`}>
          <h1>Cart</h1>
          <p className={styles.empty}>Your cart is empty.</p>
        </div>
      )}
    </section>
  );
};

export default CartModal;
