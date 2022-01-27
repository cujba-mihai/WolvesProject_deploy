import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({
  children,
  className = 'root-portal',
  el = 'div',
  style = { position: 'absolute', top: '47px' },
}) => {
  const [container] = React.useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    className.split(' ').forEach((e) => container.classList.add(e));

    document.body.appendChild(container);
    container.style.top = style.top;
    document.body.style.overflow = 'hidden';

    return () => {
      container.remove();
      document.body.style.overflow = 'unset';
    };
  }, [className, container, style]);

  return createPortal(children, container);
};

export default Portal;
