// import React from 'react';
import Image from 'next/image';

const Wecare = () => {
  return (
    <section className="py-4 sm:py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center text-center overflow-hidden bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center">
          <span className="relative inline-block">
            <span className="opacity-50 text-red-800">W</span>
            <div className="absolute inset-0 z-10 text-red-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>W</div>
          </span>
          <span className="relative inline-block">
            <span className="opacity-50 text-green-800">E</span>
            <div className="absolute inset-0 z-10 text-green-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>E</div>
          </span>
          <span className="relative inline-block">
            <span className="opacity-50 text-yellow-800">C</span>
            <div className="absolute inset-0 z-10 text-yellow-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>C</div>
          </span>
          <span className="relative inline-block">
            <span className="opacity-50 text-orange-800">A</span>
            <div className="absolute inset-0 z-10 text-orange-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>A</div>
          </span>
          <span className="relative inline-block">
            <span className="opacity-50 text-pink-800">R</span>
            <div className="absolute inset-0 z-10 text-pink-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>R</div>
          </span>
          <span className="relative inline-block">
            <span className="opacity-50 text-blue-800">E</span>
            <div className="absolute inset-0 z-10 text-blue-800" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>E</div>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed md:leading-relaxed lg:leading-relaxed">
          When we do a task considering it as our own, we give our best. That is why we should do the work of others by considering it as our own.
        </p>
      </div>
    </section>
  );
};

export default Wecare;