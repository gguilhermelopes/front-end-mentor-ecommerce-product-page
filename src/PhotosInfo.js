import React from "react";
import styles from "./PhotosInfo.module.css";
import { ReactComponent as IconMinus } from "./images/icon-minus.svg";
import { ReactComponent as IconPlus } from "./images/icon-plus.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import { GlobalContext } from "./GlobalContext";

const PhotosInfo = () => {
  const [addCart, setAddCart, cartModal, setCartModal, cartQ, setCartQ] =
    React.useContext(GlobalContext);

  function handleCartClick() {
    if (addCart) {
      setCartModal(true);
      setCartQ(addCart);
    }
  }

  function handleClickMinus() {
    if (addCart > 0) setAddCart(addCart - 1);
  }

  function handleClickPlus() {
    setAddCart(addCart + 1);
  }

  return (
    <section className={styles.info}>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <p className={styles.prices}>
        <span>$125.00</span>
        <span>50%</span>
        <span className={styles.discount}>$250.00</span>
      </p>

      <div className={`${styles.cart} unselectable`}>
        <p>
          <IconMinus onClick={handleClickMinus} />
          <span>{addCart}</span>
          <IconPlus onClick={handleClickPlus} />
        </p>
        {addCart ? (
          <button onClick={handleCartClick}>
            <Cart /> Add to cart
          </button>
        ) : (
          <button disabled>
            <Cart /> Add to cart
          </button>
        )}
      </div>
    </section>
  );
};

export default PhotosInfo;
