import React from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
import CartModal from "./CartModal";

const Header = () => {
  const [cartModal, setCartModal] = React.useState(false);

  function handleClick() {
    setCartModal(!cartModal);
  }

  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        <img src={logo} alt="Sneakers" />
        <ul className={styles.links}>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <Cart onClick={handleClick} />
        {cartModal && (
          <CartModal setCartModal={setCartModal} cartModal={cartModal} />
        )}
        {cartModal && <div className={styles.modalBackdrop}></div>}
        <img src={profileImage} alt="Profile Logo" />
      </div>
    </header>
  );
};

export default Header;
