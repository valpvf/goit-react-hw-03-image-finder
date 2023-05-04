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

export default ImageGalleryItem;
