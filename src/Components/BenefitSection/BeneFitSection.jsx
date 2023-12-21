

const BenefitSection = () => {
  const targetAudience = [
    { name: 'Developers', description: 'A platform for exploring new technologies and trends.', image: 'https://i.ibb.co/PZPccPs/361587381-3758661557789739-8841199669191703801-n.jpg' },
    { name: 'Corporate Professionals', description: 'Tools and resources for enhancing productivity in the corporate world.', image: 'https://i.ibb.co/GtMHf4L/272696661-3335816690074230-204438013193758038-n.jpg' },
    { name: 'Bankers', description: 'Insights and solutions tailored for the finance industry.', image: 'https://i.ibb.co/93FSvhR/371098457-3784733161849245-5628090038965612412-n.jpg' },
    // Add more audience types as needed with their respective image URLs
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Who Can Benefit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
                src={audience.image}
                alt={audience.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{audience.name}</h3>
              <p className="text-gray-600 text-center">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
