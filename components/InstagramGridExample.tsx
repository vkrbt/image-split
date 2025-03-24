import React from 'react';

const InstagramGridExample: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-1 w-full h-full">
        {/* Grid Items */}
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="relative aspect-square bg-gradient-to-br from-purple-500 to-blue-500"
          >
            {/* Grid Number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{index + 1}</span>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 border-2 border-white rounded-full" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Instagram-like UI Elements */}
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white" />
        <div className="text-white text-sm font-medium">instagram_grid_example</div>
      </div>
      
      <div className="absolute bottom-2 right-2">
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default InstagramGridExample; 