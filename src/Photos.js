import React from "react";
import styles from "./Photos.module.css";
import img1 from "./images/image-product-1.jpg";
import img1Thumb from "./images/image-product-1-thumbnail.jpg";
import img2 from "./images/image-product-2.jpg";
import img2Thumb from "./images/image-product-2-thumbnail.jpg";
import img3 from "./images/image-product-3.jpg";
import img3Thumb from "./images/image-product-3-thumbnail.jpg";
import img4 from "./images/image-product-4.jpg";
import img4Thumb from "./images/image-product-4-thumbnail.jpg";
import PhotosModal from "./PhotosModal";

const Photos = () => {
  const [photoModal, setPhotoModal] = React.useState(false);

  function handleClickModal() {
    setPhotoModal(true);
  }

  return (
    <section className={styles.photos}>
      <img onClick={handleClickModal} src={img1} alt="Sneaker" />
      {photoModal && <PhotosModal />}
      <ul className={styles.photoList}>
        <li>
          <img
            onClick={handleClickModal}
            src={img1Thumb}
            alt="Sneaker Thumbnail"
          />
        </li>
        <li>
          <img
            onClick={handleClickModal}
            src={img2Thumb}
            alt="Sneaker Thumbnail"
          />
        </li>
        <li>
          <img
            onClick={handleClickModal}
            src={img3Thumb}
            alt="Sneaker Thumbnail"
          />
        </li>
        <li>
          <img
            onClick={handleClickModal}
            src={img4Thumb}
            alt="Sneaker Thumbnail"
          />
        </li>
      </ul>
    </section>
  );
};

export default Photos;
