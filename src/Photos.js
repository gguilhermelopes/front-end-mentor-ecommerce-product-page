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
import useMedia from "./useMedia";
import { ReactComponent as Previous } from "./images/icon-previous.svg";
import { ReactComponent as Next } from "./images/icon-next.svg";

const Photos = () => {
  const [photoModal, setPhotoModal] = React.useState(false);
  const [photoMain, setPhotoMain] = React.useState(0);
  const [active, setActive] = React.useState(photoMain);
  const mobile = useMedia("(max-width:60rem)");

  const photos = [img1, img2, img3, img4];
  const photosThumb = [img1Thumb, img2Thumb, img3Thumb, img4Thumb];

  function handleClickModal({ currentTarget }) {
    setPhotoMain(currentTarget.id);
    setActive(currentTarget.id);
  }

  function handlePrev() {
    if (photoMain > 0) {
      setPhotoMain(+photoMain - 1);
      setActive(+active - 1);
    }
  }

  function handleNext() {
    if (+active < photosThumb.length - 1) {
      console.log(photosThumb.length - 1);
      setPhotoMain(+photoMain + 1);
      setActive(+active + 1);
    }
  }

  return (
    <section className={`${styles.photos} unselectable`}>
      {mobile && <Previous onClick={handlePrev} className={styles.previous} />}
      <img
        onClick={() => setPhotoModal(true)}
        src={photos[photoMain]}
        alt="Sneaker"
      />
      {mobile && <Next onClick={handleNext} className={styles.next} />}
      {!mobile && photoModal && (
        <PhotosModal
          setActiveMain={setActive}
          setPhotoModal={setPhotoModal}
          setPhotoMain={setPhotoMain}
          photoMain={photoMain}
        />
      )}
      {!mobile && (
        <ul className={styles.photoList}>
          {photosThumb.map((photo, index) => {
            return (
              <li key={photo}>
                <img
                  className={+active === +index ? "active" : ""}
                  id={index}
                  src={photo}
                  alt="Sneaker Thumbnail"
                  onClick={handleClickModal}
                  onDoubleClick={(event) => event.preventDefault()}
                />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Photos;
