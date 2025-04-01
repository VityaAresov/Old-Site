import { useEffect, useRef } from 'react';
import './index.css';

type THamburgerProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const Hamburger: React.FC<THamburgerProps> = ({ toggleMenu, isMenuOpen }) => {
  const hamburgerRef = useRef<HTMLInputElement>(null);

  // To close icon after the link's pressed
  useEffect(() => {
    if (!isMenuOpen && hamburgerRef.current) {
      hamburgerRef.current.checked = false;
    }
  }, [isMenuOpen]);

  return (
    <label htmlFor="hb" className="hamburger" onChange={toggleMenu}>
      <input type="checkbox" id="hb" ref={hamburgerRef} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
