import { createRef, useState, useCallback, useEffect } from 'react';

const CardTemplate = ({
  smallImg,
  handleImagePopup,
  handleDescriptionModal,
  toggleCardSkeletons,
  renderSelf,
}) => {
  const [imageLoadStatus, setImageLoadStatus] = useState(false);
  const bgImage = createRef();
  const toggleSkeleton = useCallback(
    () => toggleCardSkeletons(),
    [imageLoadStatus]
  );
  useEffect(() => {
    if (imageLoadStatus) {
      toggleSkeleton();
    }
  }, [imageLoadStatus, toggleSkeleton]);

  return (
    <article
      className="card"
      style={renderSelf ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="card__container">
        <div className="card__image-wrapper" onClick={handleImagePopup}>
          <img
            src={smallImg}
            onLoad={() => setImageLoadStatus(true)}
            ref={bgImage}
            alt="wolf"
            className="card__bg-image"
          />
        </div>

        <div className="card__tags">
          <span className="card__tags card__tags_isPrimary">ANIMALS</span>
          <span className="card__tags card__tags_isSecondary">
            WILDLIFE WATCH
          </span>
        </div>
        <div onClick={handleDescriptionModal}>
          <div className="card__description">
            <span className="card__description-text">
              Siberian tigers are being hunted at night for their body parts
            </span>
          </div>

          <div className="card__footer">
            <svg
              className="card__menu-icon"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="6.5" x2="9" y2="6.5" stroke="black" />
              <line y1="3.5" x2="12" y2="3.5" stroke="black" />
              <line y1="0.5" x2="12" y2="0.5" stroke="black" />
            </svg>
            <span className="card__menu-text">VIEW</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardTemplate;
