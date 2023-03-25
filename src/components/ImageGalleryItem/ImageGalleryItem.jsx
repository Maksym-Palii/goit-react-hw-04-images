import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ images, showModal, toggleModal }) => {
  const [largeImage, setLargeImage] = useState('');
  const [tags, setTags] = useState('');

  const setImage = (el, tags) => {
    setLargeImage(el);
    setTags(tags);
  };

  return images.map(el => (
    <li key={el.id} className={css.ImageGalleryItem}>
      <img
        id={el.id}
        onClick={() => {
          setImage(el.largeImage, el.tags);
          toggleModal();
        }}
        className={css.image}
        src={el.smallImage}
        alt={el.tags}
      />

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt={tags} />
        </Modal>
      )}
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
