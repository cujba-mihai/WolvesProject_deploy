import { useEffect, useState } from 'react';
import updateWindowDimensions from '../../utils/calculateWinResize';
import Portal from '../../utils/CreatePortal';
import './styles/imagePopup.scss';
const ImagePopup = ({ 0: imagesrc, handleImagePopup }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [pxSize, setPxSize] = useState(0.625);

  const positionY = window.scrollY + 75 * pxSize;
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Set responsive pos. absolute
    setWindowWidth(updateWindowDimensions().width);
    setPxSize(updateWindowDimensions().remSize);
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [windowWidth]);
  return (
    <Portal className="image-popup__portal" style={{ top: `${positionY}px` }}>
      <div className="image-popup__bg">
        <figure className="image-popup__img-container">
          <button className="image-popup__close" onClick={handleImagePopup}>
            <svg
              className="image-popup__close-icon"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="500px"
              height="500px"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </button>
          <img src={imagesrc} alt="wolf" className="image-popup__img" />
        </figure>
      </div>
    </Portal>
  );
};

export default ImagePopup;
