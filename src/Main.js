import React from "react";
import Photos from "./Photos";
import PhotosInfo from "./PhotosInfo";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={`container ${styles.main}`}>
      <Photos />
      <PhotosInfo />
    </main>
  );
};

export default Main;
