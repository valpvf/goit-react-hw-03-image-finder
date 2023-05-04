import PT from 'prop-types';

const ImageGalleryItem = ({ gallery, openModal }) => {
  return gallery.map(el => (
    <li
      key={el.id}
      className="ImageGalleryItem"
      onClick={() => openModal({ src: el.largeImageURL, alt: el.tags })}
    >
      <img
        className="ImageGalleryItem-image"
        src={el.webformatURL}
        alt={el.tags}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  gallery: PT.array({
    id: PT.number.isRequired,
    largeImageURL: PT.string.isRequired,
    tags: PT.string.isRequired,
  }),
  openModal: PT.func,
};

export default ImageGalleryItem;
