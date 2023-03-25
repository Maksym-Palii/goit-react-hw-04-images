import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ ...otherProps }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem {...otherProps} />
    </ul>
  );
};
