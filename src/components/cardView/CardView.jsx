import updateWindowDimensions from '../../utils/calculateWinResize';

import { useEffect, useState } from 'react';
import './styles/cardView.scss';

const CardView = ({ src, title, handleClick, openView }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [pxSize, setPxSize] = useState(0.625);

  const handleBack = () => handleClick();
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
    <div
      className={
        openView
          ? 'cardView__portal cardView__portal_isOpen'
          : 'cardView__portal cardView__portal_isClosed'
      }
      style={{ top: `calc(${positionY}px)` }}
    >
      <div className="cardView__container">
        <button className="cardView__back-btn" onClick={handleBack}>
          <span className="cardView__back-text">← back</span>
        </button>

        <figure className="cardView__image-container">
          <img src={src} alt={title} className="cardView__image" />
        </figure>

        <article className="cardView__info-container">
          <h3 className="cardView__title">Gray Wolf</h3>
          <div className="cardView__list-container">
            <ul className="cardView__list cardView__list_isLeft">
              <li className="cardView__list-item">Kingdom: Animalia</li>
              <li className="cardView__list-item">Phylum: Chordata</li>
              <li className="cardView__list-item">Class: Mammalia</li>
              <li className="cardView__list-item">Order: Carnivora</li>
            </ul>
            <ul className="cardView__list cardView__list_isRight">
              <li className="cardView__list-item">Family: Canidae</li>
              <li className="cardView__list-item">Genus: Canis</li>
              <li className="cardView__list-item">Species: C. lupus</li>
            </ul>
          </div>

          <div className="cardView__descripiton-container">
            <em className="cardView__description-text">
              The wolf (Canis lupus[b]), also known as the gray wolf or grey
              wolf, is a large canine native to Eurasia and North America. More
              than thirty subspecies of Canis lupus have been recognized, and
              gray wolves, as popularly understood, comprise non-domestic/feral
              subspecies. The wolf is the largest extant member of the family
              Canidae. It is also distinguished from other Canis species by its
              less pointed ears and muzzle, as well as a shorter torso and a
              longer tail. The wolf is nonetheless related closely enough to
              smaller Canis species, such as the coyote and the golden jackal,
              to produce fertile hybrids with them. The banded fur of a wolf is
              usually mottled white, brown, gray, and black, although subspecies
              in the arctic region may be nearly all white.
            </em>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CardView;
