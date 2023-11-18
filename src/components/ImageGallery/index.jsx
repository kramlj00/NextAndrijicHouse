import React, { useState } from "react";
import styles from "./gallery.module.scss";
import Image from "next/legacy/image";
import FsLightbox from "fslightbox-react";

const ImageGallery = ({ imageList }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  return (
    <div className="items">
      <div className={styles.imagesContainer}>
        {imageList.map((image, index) => (
          <div key={image} className={styles.imageContainer}>
            <Image
              priority
              src={image}
              alt={image}
              width={350}
              height={200}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={image}
              onClick={() =>
                setLightboxController({
                  toggler: !lightboxController.toggler,
                  slide: index + 1,
                })
              }
            />
          </div>
        ))}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageList}
        slide={lightboxController.slide}
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
      />
    </div>
  );
};

export default ImageGallery;
