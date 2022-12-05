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
  const [photoMain, setPhotoMain] = React.useState(0);
  const [active, setActive] = React.useState(photoMain);

  const photos = [img1, img2, img3, img4];
  const photosThumb = [img1Thumb, img2Thumb, img3Thumb, img4Thumb];

  function handleClickModal({ currentTarget }) {
    setPhotoModal(true);
    setPhotoMain(currentTarget.id);
    setActive(currentTarget.id);
  }

  return (
    <section className={styles.photos}>
      {photoModal ? (
        <img src={img1} alt="Sneaker" />
      ) : (
        <img src={photos[photoMain]} alt="Sneaker" />
      )}
      {photoModal && (
        <PhotosModal
          setActiveMain={setActive}
          setPhotoModal={setPhotoModal}
          setPhotoMain={setPhotoMain}
          photoMain={photoMain}
        />
      )}
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
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Photos;
