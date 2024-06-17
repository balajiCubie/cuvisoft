// components/DockerHero.tsx
import React from 'react';

const CuvisoftHero: React.FC = () => {
  return (
    <div className="flex  flex-col items-center justify-center bg-white text-center pt-16">
      <h2 className="text-xl font-semibold text-blue-700">ALL IN-ONE SUITE </h2>
      <h1 className="mt-2  text-8xl font-bold text-blue-900 leading-tight">
        The #1 containerization<br/>software for developers<br/>and teams
      </h1>
      <p className="mt-4 text-gray-600">Your command center for innovative container development</p>
      <div className="mt-8 flex space-x-4 rounded-full">
        <button className="bg-amazon_blue text-white py-2  px-4 rounded-full hover:bg-blue-700 hover:text-amazon_blue">Get Started</button>
        <button className="bg-amazon_blue text-white py-2 px-4 rounded-full hover:bg-blue-700 hover:text-amazon_blue"> Explore More</button>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-full">
        <p className="text-sm text-gray-700">
          <span className="font-semibold  text-blue-700">Commercial use of Cuvisoft operating system for business</span> at a company of more than <span className="font-semibold">250 employees</span> OR more than <span className="font-semibold">$10 million</span> in annual revenue requires a paid subscription (Pro, Team, or Business).
        </p>
      </div>
    </div>
  );
};

export default CuvisoftHero;
