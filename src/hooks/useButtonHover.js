import { useEffect } from 'react';

const useButtonHover = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const parentOffset = e.currentTarget.getBoundingClientRect();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;

      const span = e.currentTarget.querySelector('span');
      if (span) {
        // span.style.top = '0';
        // span.style.left = '0';
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    };

    const handleMouseOut = (e) => {
      const parentOffset = e.currentTarget.getBoundingClientRect();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;

      const span = e.currentTarget.querySelector('span');
      if (span) {
        span.style.top = '0';
        span.style.left = '0';
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    };

    const buttons = document.querySelectorAll('.btn-hover');

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);
};

export default useButtonHover;
