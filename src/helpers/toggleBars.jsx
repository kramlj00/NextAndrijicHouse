import React from 'react';
import Sidebar from '@components/navigation/Sidebar';
import Navbar from '@components/navigation/Navbar';

const ToggleBars = ({ activeTab, isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar activeTab={activeTab} isOpen={isOpen} />
      <Navbar activeTab={activeTab} toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default ToggleBars;
