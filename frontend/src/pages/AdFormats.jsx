import React from 'react';

const AdFormats = () => {
  const formats = [
    {
      title: 'Billboard Advertising',
      icon: '🗽',
      image: 'https://www.myhoardings.com/FAQ/wp-content/uploads/2021/07/main-qimg-3bf4efcbeb6366d0a1e238c49998065d.jpg',
      description: 'High-impact outdoor advertising that reaches mass audiences through strategically placed large-format displays.'
    },
    {
      title: 'DOOH Advertising',
      icon: '📺',
      image: 'https://www.outdoornetwork.co.za/wp-content/uploads/2018/11/Cresta-LED_00001.jpg',
      description: 'Dynamic digital out-of-home advertising delivering engaging content in high-traffic urban locations.'
    },
    {
      title: 'Airport Advertising',
      icon: '✈️',
      image: 'https://www.myhoardings.com/ads/wp-content/uploads/2021/02/airport-adv-dulles-tension-fabric-cco.jpg',
      description: 'Premium advertising space targeting business travelers and tourists in high-dwell-time environments.'
    }
  ];

  return (
    <div className="bg-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-black text-center sm:text-4xl mb-16">
          Explore Out-Of-Home Advertising Formats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format) => (
            <div 
              key={format.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                <img
                  src={format.image}
                  alt={format.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{format.icon}</span>
                <h3 className="text-xl font-semibold text-black">{format.title}</h3>
              </div>
              
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {format.description}
              </p>
              
              <div className="mt-6 flex items-center">
                <button className="text-black/70 hover:text-black flex items-center gap-2 transition-colors duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdFormats;