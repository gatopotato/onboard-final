import React from 'react';
import { MapPin, Plane, Monitor, Building2 } from 'lucide-react';

const MapSection = () => {
  const locations = [
    { top: '20%', left: '15%' },
    { top: '25%', left: '35%' },
    { top: '30%', left: '50%' },
    { top: '40%', left: '70%' },
    { top: '60%', left: '25%' },
    { top: '45%', left: '85%' },
    { top: '70%', left: '45%' },
    { top: '55%', left: '65%' }
  ];

  return (
    <div className="w-full bg-white min-h-screen flex items-center py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-[#0A1628]/5 rounded-xl p-6 transition-transform hover:scale-105">
              <div className="rounded-lg p-4 min-h-[400px] relative">
                <div className="absolute inset-0">
                  <img 
                    src="https://static.vecteezy.com/system/resources/previews/010/801/642/non_2x/aerial-clean-top-view-of-the-night-time-city-map-with-street-and-river-001-vector.jpg" 
                    alt="Map" 
                    className="w-full h-full object-cover rounded-lg opacity-100"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
                
                {locations.map((position, i) => (
                  <div key={i} className="absolute" style={position}>
                    <div className="relative">
                      <div className="w-3 h-3 bg-[#0A1628] rounded-full" />
                      <div 
                        className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-[#0A1628] rounded-full animate-ping"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.3
                        }}
                      />
                      <div 
                        className="absolute -top-3 -left-3 w-9 h-9 bg-[#0A1628] rounded-full animate-pulse"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.1
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="flex flex-col gap-4">
                  {[
                    { Icon: MapPin },
                    { Icon: Plane },
                    { Icon: Monitor },
                    { Icon: Building2 }
                  ].map(({ Icon }, index) => (
                    <div
                      key={index}
                      className="p-3 bg-white rounded-full shadow-lg transform hover:scale-110 transition-all hover:-translate-x-1 cursor-pointer text-[#0A1628]"
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0A1628]">
              Global Reach, Local Impact
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Onboard seamlessly connects businesses with their global workforce, 
              enabling efficient management and coordination of teams across borders. 
              From remote hiring to local compliance, we streamline every aspect of 
              your international operations.
            </p>
            <div className="bg-[#0A1628]/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600">
                With Onboard, organizations gain immediate access to comprehensive 
                workforce management tools, ensuring smooth onboarding processes and 
                maintaining compliance across multiple jurisdictions while providing 
                real-time insights into your global operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;