import { useState } from 'react';

//Component import
import Menu from '../../menu/Menu';

//Utils
import useDelayUnmount from '../../../utils/useDelayUnmount';

const NavList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const shouldRenderChild = useDelayUnmount(showMenu, 650);

  const handleToggleClicked = () => {
    setShowMenu(!showMenu);
  };

  return (
    <ul className="navigation__list-container">
      <li className="navigation__menu" onClick={handleToggleClicked}>
        <span className="navigation__text">Menu</span>
      </li>
      <section>
        {shouldRenderChild ? <Menu showMenu={showMenu} /> : null}
      </section>
    </ul>
  );
};

export default NavList;
