// components/DockerHero.tsx
import React from 'react';
import  '../../app/textAnimation.css';

const CuvisoftHero: React.FC = () => {
  return (
    <div className="flex  flex-col items-center justify-center bg-white text-center pt-16">
      <h2 className="text-xl font-semibold text-blue-700">Your life's work,powered by our life's work</h2>
      <div className='container1'>
      <h1 className="mt-2  text-7xl font-bold text-blue-900 leading-snug  text-gradient">
      Transform your work with our powerful<br/>
      privacy-focused software suite,<br/> designed for businesses of all sizes.
      </h1>
      </div>

      <p className="mt-10 mb-5 text-gray-600 font-semibold text-xl leading-8 tracking-wide">All-in-one suite <br />Run your entire business on Cuvisoft with our unified cloud software, <br />designed to help you break down silos between departments and increase organizational efficiency.</p>

      <div className="mt-8 flex space-x-4 rounded-full">
      <button className="text-blue-500 py-5 px-8  rounded-full p-2  bg-gray-100 shadow-lg  ">Get Started</button>
      <button className="text-blue-500 py-5 px-8  rounded-full p-2  bg-gray-100 shadow-lg  ">Explore More</button>

      </div>
      <div className="mt-16 p-8 mb-10 bg-gray-100 rounded-full">
        <p className="text-sm text-gray-700">
          <span className="font-semibold  text-blue-700">Commercial use of Cuvisoft operating system for business</span> at a company of more than <span className="font-semibold">250 employees</span> OR more than <span className="font-semibold">$10 million</span> in annual revenue requires a paid subscription (Pro, Team, or Business).
        </p>
      </div>
      </div>

  );
};

export default CuvisoftHero;
