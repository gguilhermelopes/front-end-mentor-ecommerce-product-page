import React from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
import CartModal from "./CartModal";
import { GlobalContext } from "./GlobalContext";
import useMedia from "./useMedia";
import { ReactComponent as Close } from "./images/icon-close.svg";

const Header = () => {
  const [addCart, setAddCart, cartModal, setCartModal, cartQ] =
    React.useContext(GlobalContext);

  const mobile = useMedia("(max-width:60rem)");

  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleClick() {
    setCartModal(!cartModal);
  }

  function handleMobileClick(event) {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className={`${styles.header}`}>
      {mobileMenu && <div className={styles.mobileBackground}></div>}
      <nav className={styles.nav}>
        {mobile && (
          <button
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={handleMobileClick}
            aria-label="Menu"
          ></button>
        )}
        <img src={logo} alt="Sneakers" />
        <ul
          className={`${mobile ? styles.mobile : styles.links} ${
            mobileMenu && styles.mobileActive
          }`}
        >
          {mobile && (
            <Close
              className={styles.close}
              onClick={() => setMobileMenu(false)}
            />
          )}
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
        {cartQ > 0 && <span className={styles.cartQ}>{cartQ}</span>}
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
