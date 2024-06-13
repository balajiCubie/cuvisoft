// components/Navbar.tsx
import { FC } from 'react';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import SecondaryNavbar from './secondaryNavbar/SecondaryNavbar';

const Navbar: FC = () => {
  return (
    <nav className="bg-amazon_blue p-4 shadow-xl">
      <div className=" mx-auto flex justify-between items-center">
        {/* Left Links */}
        <LeftNavbar/>
        {/* Right Links */}
       <RightNavbar/>
      </div>
      {/* Secondary Navbar */}
      <div>
        {/* Secondary Navbar Content */}
        <SecondaryNavbar/>
      </div>
    </nav>
  );
};

export default Navbar;
