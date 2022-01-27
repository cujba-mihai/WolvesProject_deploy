import React, { useState } from 'react';

// Components import - Card styles
import CardTemplate from './partials/CardTemplate';
import CardSkeleton from '../cardSkeletons/CardSkeleton';

// Components import - Card functionalities
import ImagePopup from '../imagePopup/imagePopup';
import CardView from '../cardView/CardView';

// Container components
import useDelayUnmount from '../../utils/useDelayUnmount';

// Styles
import './styles/card.scss';

const Card = ({ images }) => {
  const [bigImg, smallImg] = images;
  const [openView, setOpenView] = useState(false);
  const [showImgPopup, setShowImgPopup] = useState(false);

  const [showCardSkeletons, setShowCardSkeletons] = useState(true);
  const toggleCardSkeletons = () => setShowCardSkeletons(!showCardSkeletons);

  const delayUnmount = useDelayUnmount(openView, 650);

  const handleImagePopup = () => {
    setShowImgPopup(!showImgPopup);
  };

  const handleDescriptionModal = () => {
    setOpenView(!openView);
  };

  return (
    <>
      <CardSkeleton renderSelf={showCardSkeletons} />

      <CardTemplate
        handleImagePopup={handleImagePopup}
        handleDescriptionModal={handleDescriptionModal}
        smallImg={smallImg}
        toggleCardSkeletons={toggleCardSkeletons}
        renderSelf={!showCardSkeletons}
      />

      {delayUnmount ? (
        <CardView
          src={bigImg}
          title="Wolf"
          handleClick={handleDescriptionModal}
          setOpenView={setOpenView}
          openView={openView}
        />
      ) : null}

      {showImgPopup ? (
        <ImagePopup {...images} handleImagePopup={handleImagePopup} />
      ) : null}
    </>
  );
};

export default Card;
