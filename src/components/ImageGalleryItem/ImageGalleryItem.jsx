import style from '../../styles.module.css'

export const ImageGalleryItem = ({ post, onOpenModal }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => onOpenModal(post.largeImageURL)}
    >
      <img className={style.ImageGalleryItemImage} src={post.webformatURL} alt={post.tags} />
    </li>
  );
};
