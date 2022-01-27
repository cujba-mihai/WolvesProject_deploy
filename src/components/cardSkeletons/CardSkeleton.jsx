import './styles/cardSkeleton.scss';

const Skeleton = () => {
  return (
    <article className="card-skeleton">
      <div className="card-skeleton__container">
        <div className="card-skeleton__image-wrapper">
          <i className="card-skeleton__background-image"></i>
        </div>

        <div className="card-skeleton__tags">
          <i className="card-skeleton__tags card-skeleton__tags_isPrimary"></i>
          <i className="card-skeleton__tags card-skeleton__tags_isSecondary"></i>
        </div>

        <div className="card-skeleton__description">
          <div className="card-skeleton__description-text"></div>
        </div>

        <div className="card-skeleton__footer">
          <svg
            width="12"
            className="card-skeleton__menu-icon"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="6.5" x2="9" y2="6.5" stroke="lightgray" />
            <line y1="3.5" x2="12" y2="3.5" stroke="lightgray" />
            <line y1="0.5" x2="12" y2="0.5" stroke="lightgray" />
          </svg>
          <span className="card-skeleton__menu-text"></span>
        </div>
      </div>
    </article>
  );
};

const CardSkeleton = ({ renderSelf }) => {
  return <>{renderSelf ? <Skeleton /> : null}</>;
};

export default CardSkeleton;
