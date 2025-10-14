import React from 'react';
import Sidebar from '@components/navigation/Sidebar';
import Navbar from '@components/navigation/Navbar';

const ToggleBars = ({ isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} />
      <Navbar toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default ToggleBars;
