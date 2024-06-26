import React from 'react';

const Card: React.FC<{ title: string, description: string }> = ({ title, description }) => (
  <div className="bg-gray-50 p-4 rounded-xl shadow-xl">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const BodyCard: React.FC = () => {
  const cards = [
    {
        title: 'Save 33% on your CuviSoft Certified Data Engineer - Associate exam',
        description: 'Join the challenge and showcase your data skills'
      },
      {
        title: 'Save 33% on your CuviSoft Certified Data Engineer - Associate exam',
        description: 'Join the challenge and showcase your data skills'
      },
      {
        title: 'Save 33% on your CuviSoft Certified Data Engineer - Associate exam',
        description: 'Join the challenge and showcase your data skills'
      },

      {
        title: 'Save 33% on your CuviSoft Certified Data Engineer - Associate exam',
        description: 'Join the challenge and showcase your data skills'
      },
  ];

  return (
    <div className="flex space-x-4 p-4 m-5 ">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default BodyCard;
