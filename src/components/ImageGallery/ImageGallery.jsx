import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import style from '../../styles.module.css';

export const ImageGallery = ({ posts, onOpenModal }) => {
  if (!Array.isArray(posts)) {
    return null;
  }
  return (
    <div>
      <ul className={style.ImageGallery}>
        {posts.map((post, id) => (
          <ImageGalleryItem key={id} post={post} onOpenModal={onOpenModal} />
        ))}
      </ul>
    </div>
  );
};
