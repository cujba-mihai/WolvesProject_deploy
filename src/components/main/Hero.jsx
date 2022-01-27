//Component imports
import withFetch from '../container/withFetch';
import Card from '../card/Card';

//Styles import
import './styles/hero.scss';

const WrappedComponent = (props) => {
  const {
    data: { wolves },
    isError,
  } = props;

  return (
    <main className="hero">
      <div className="hero__container">
        <div className="hero__head-container">
          <h1 className="hero__heading">LATEST STORIES</h1>
          <h3 className="hero__subheading">
            <span className="hero__subheading_isPrimary">Subscribe</span> for
            full access to read stories from National Geographic.
          </h3>
        </div>
        <div className="hero__cart-container">
          {wolves
            ? wolves.map((e, i) => <Card key={i} images={e.images} />)
            : null}

          {isError ? (
            <>
              <h3>`Oops! An error occured. ☹ `</h3>
              <h2 style={{ fontSize: '3rem', width: 'fit-content' }}>
                `${isError.message}`
              </h2>
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
};

const Hero = withFetch(WrappedComponent, './api/wolves.json');

export default Hero;
