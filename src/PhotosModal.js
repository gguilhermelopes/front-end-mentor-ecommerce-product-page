import React from "react";
import img1 from "./images/image-product-1.jpg";
import img1Thumb from "./images/image-product-1-thumbnail.jpg";
import img2 from "./images/image-product-2.jpg";
import img2Thumb from "./images/image-product-2-thumbnail.jpg";
import img3 from "./images/image-product-3.jpg";
import img3Thumb from "./images/image-product-3-thumbnail.jpg";
import img4 from "./images/image-product-4.jpg";
import img4Thumb from "./images/image-product-4-thumbnail.jpg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Previous } from "./images/icon-previous.svg";
import { ReactComponent as Next } from "./images/icon-next.svg";
import styles from "./PhotosModal.module.css";

const PhotosModal = ({
  setPhotoModal,
  photoMain,
  setPhotoMain,
  setActiveMain,
  setActive,
  active,
}) => {
  const [photo, setPhoto] = React.useState(photoMain);

  const photos = [img1, img2, img3, img4];
  const photosThumb = [img1Thumb, img2Thumb, img3Thumb, img4Thumb];

  function handleOutsideClick({ target, currentTarget }) {
    if (currentTarget === target) {
      setPhotoModal(false);
      setActiveMain(active);
      setPhotoMain(photo);
    }
  }

  function handlePhotoClick({ currentTarget }) {
    setPhoto(currentTarget.id);
    setActive(currentTarget.id);
    console.log(currentTarget.id);
  }

  function handlePrev() {
    if (photo > 0) {
      setPhoto(+photo - 1);
      setActive(+active - 1);
    } else if (+photo === 0) {
      setPhoto(+photosThumb.length - 1);
      setActive(+photosThumb.length - 1);
    }
  }

  function handleNext() {
    if (+active < photosThumb.length - 1) {
      setPhoto(+photo + 1);
      setActive(+active + 1);
    } else if (+photo === +photosThumb.length - 1) {
      setPhoto(0);
      setActive(0);
    }
  }

  return (
    <section
      onClick={handleOutsideClick}
      className={`${styles.photosModalContainer}`}
    >
      <div>
        <Close
          onClick={() => {
            setPhotoModal(false);
            setActiveMain(active);
            setPhotoMain(photo);
          }}
          className={styles.close}
        />
        <Previous onClick={handlePrev} className={styles.previous} />
        <img src={photos[photo]} alt={`Sneaker ${photo + 1}`} />
        <Next onClick={handleNext} className={styles.next} />
      </div>

      <ul className={styles.photosModalList}>
        {photosThumb.map((photo, index) => (
          <li key={photo}>
            <img
              className={+active === +index ? "active" : ""}
              id={index}
              onClick={handlePhotoClick}
              src={photo}
              alt={`Sneaker ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PhotosModal;
