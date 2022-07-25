import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import '../../services/pixabay';
const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imagesUrl={image.webformatURL}
          imagesAlt={image.tags}
          imageId={image.id}
          onClick={() => {
            onOpenModal(image);
          }}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags:PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
    ),
    onOpenModal:PropTypes.func.isRequired,

};

export default ImageGallery;
