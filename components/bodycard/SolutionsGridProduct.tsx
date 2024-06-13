// components/SolutionsGrid.tsx
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface SolutionCardProps {
  category: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ category, title, description }) => (
  <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
    <span className="text-sm text-blue-600 font-medium">{category}</span>
    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <button className="mt-4 text-black hover:underline"> <HiArrowNarrowRight /></button>
  </div>
);

const SolutionsGrid: React.FC = () => {
  const solutions = [
    { category: 'Industry', title: 'Financial services', description: 'Reimagine your business and enable security and compliance at scale' },
    { category: 'Industry', title: 'Telecom', description: 'Transition from connectivity provider to digital service provider and reimagine the customer experience' },
    { category: 'Industry', title: 'Healthcare and life sciences', description: 'Innovate faster for clinicians and patients with unmatched reliability, security, and data privacy' },
    { category: 'Industry', title: 'Games', description: 'Build, run, and grow games with purpose-built, developer-friendly solutions' },
    { category: 'Technology', title: 'Analytics and data lakes', description: 'Get solutions for advanced analytics, data management, and predictive analytics with ML' },
    { category: 'Technology', title: 'Artificial intelligence', description: 'Find curated solutions for use cases like language understanding and MLOps' },
    { category: 'Technology', title: 'Serverless computing', description: 'Run code, manage data, and integrate applications—all without managing servers' },
    { category: 'Industry', title: 'View all industry solutions', description: 'Learn how AWS customers around the world transform businesses and entire industries' },
    { category: 'Industry', title: 'View all industry solutions', description: 'Learn how AWS customers around the world transform businesses and entire industries' },
  ];

  return (
    <div className="max-w-16xl py-12 px-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* overlay up */}
        <button className="text-blue-500 py-5 px-8  rounded-full p-2  bg-gray-100 shadow-lg">Show 15 more</button>
      </div>
    </div>
  );
};

export default SolutionsGrid;
