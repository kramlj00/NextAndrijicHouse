import React, { useState } from 'react';
import Sidebar from '@components/navigation/Sidebar';
import Navbar from '@components/navigation/Navbar';

const ToggleBars = ({ isOpen, setIsOpen }) => {
  const [active, setActive] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar
        active={active}
        setActive={setActive}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Navbar
        toggle={toggle}
        isOpen={isOpen}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default ToggleBars;
