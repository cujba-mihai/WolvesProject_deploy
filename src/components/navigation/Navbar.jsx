import Logo from './partials/Logo';
import NavList from './partials/NavList';

import './styles/navigation.scss';

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__wrapper">
          <Logo />
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
