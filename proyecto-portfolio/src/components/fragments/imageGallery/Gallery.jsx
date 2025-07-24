import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={image.alt || 'Gallery Image'}
            className="w-[200px] h-[300px] object-cover rounded-md sm:w-[150px] sm:h-[225px] md:w-[200px] md:h-[300px]"
            onClick={() => openLightbox(index)}
            loading='lazy'
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeLightbox}
          >
            <AiOutlineClose />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            <AiOutlineLeft />
          </button>
          <img
            src={images[currentIndex].full}
            alt={images[currentIndex].alt || 'Full Image'}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            <AiOutlineRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
