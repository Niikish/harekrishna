"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const businessCategoryDetails = {
  Construction: {
    heading: "Building Dreams Into Reality",
    description: "Construction is not just about building, its about creating a better future so build with the mind, create with the heart.",
    features: [
      "Residential Houses",
      "Luxury Apartments",
      "Road & Highways",
      "Resorts & Hotels"
    ]
  },
  Restaurant: {
    heading: "Culinary Spaces & Real Estate Excellence",
    description: "Where imagination meets innovation a new concept is born, The right ingredients, the right team, the perfect recipe for success.",
    features: [
      "Equipment Installation",
      "Hiring to Lunch",
      "Layout Construction",
      "Concept Development"
    ]
  },
  Interior: {
    heading: "Transforming Spaces With Elegance",
    description: "Innovative interior design solutions that blend aesthetics with functionality, creating beautiful living and working spaces.",
    features: [
      "House Renovation",
      "Moduler Kitchen",
      "2D/3D Modeling",
      "Material Selection"
    ]
  },
  Survey: {
    heading: "Transforming Spaces With Elegance",
    description: "Surveying is the path to progress and surveying for safety, building for innovation and we are surving with sensitivity, building with sustainability.",
    features: [
      "Residential Design",
      "Commercial Spaces",
      "2D/3D",
      "Material Selection"
    ]
  },
  Gym: {
    heading: "Fitness Spaces That Inspire",
    description: "Where fitness dreams are made, fitness is not a destination its a journey, choose the right equipment for a stronger you.",
    features: [
      "Concept Development",
      "Design and Layout",
      "Premium Machinery Installation",
      "Technology and Security",
      "Maintenance Services"
    ]
  },
  Property: {
    heading: "Seamless Real Estate Transactions",
    description: "Comprehensive property transaction services, from market analysis to closing deals. We simplify your real estate journey with expert guidance and support.",
    features: [
      "Property Valuation",
      "Market Analysis",
      "Legal Documentation",
      "Negotiation Support",
      "Investment Consultation"
    ]
  }
};

const BusinessCard = () => {
  const [activeCategory, setActiveCategory] = useState("Construction");
  const [screenWidth, setScreenWidth] = useState(1024);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isMobileDetailView, setIsMobileDetailView] = useState(false);

  const backgroundImages = [
    "/carousel/1.jpeg",
    "/carousel/2.jpeg",
    "/carousel/3.jpeg",
    "/carousel/4.jpeg",
    "/carousel/5.jpeg",
     "/carousel/6.jpeg"
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCategory = businessCategoryDetails[activeCategory];

  if (!currentCategory) {
    console.error(`Category ${activeCategory} not found in businessCategoryDetails`);
    return null;
  }

  const isMobile = screenWidth < 768;

  // Desktop View with Hover Interactions
  const DesktopView = () => (
    <div 
      className="relative w-full h-screen bg-cover bg-center overflow-hidden flex transition-all duration-1000 ease-in-out" 
      style={{
        backgroundImage: `url("${backgroundImages[backgroundIndex]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex w-full">
        {/* Left Content Section */}
        <div className="w-2/3 flex flex-col justify-center p-16 text-white">
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 mr-4 text-lg">●</span>
            <span className="uppercase text-sm tracking-widest">Our Businesses</span>
          </div>
          
          <h1 className="text-6xl font-light mb-8 transition-all duration-500">
            {currentCategory.heading}
          </h1>
          
          <p className="text-lg mb-8 max-w-xl font-light leading-relaxed transition-all duration-500">
            {currentCategory.description}
          </p>
        </div>
        {/* Right Sidebar Navigation */}
        <div className="w-1/3 flex flex-col justify-center items-end pr-16">
          <nav className="w-full">
            {Object.keys(businessCategoryDetails).map((category) => (
              <div 
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`
                  text-2xl  
                  text-right 
                  py-4      
                  border-b 
                  border-white/20 
                  cursor-pointer 
                  transition-all 
                  duration-300
                  group
                  ${activeCategory === category 
                    ? 'text-yellow-500 border-yellow-500' 
                    : 'text-white/70 hover:text-white hover:border-white/50'}
                `}
              >
                {category}
                <div 
                  className={`
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-300 
                    absolute 
                    right-0 
                    text-white/50 
                    group-hover:text-white/70
                  `}
                >
                  <ChevronRight className="inline-block ml-2" size={20} />
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );

  // Mobile views remain the same as in the original code
  const MobileCategoriesList = () => (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("${backgroundImages[backgroundIndex]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="px-6">
          {Object.keys(businessCategoryDetails).map((category) => (
            <div 
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setIsMobileDetailView(true);
              }}
              className="
                text-white 
                text-lg 
                py-4 
                border-b 
                border-white/20 
                cursor-pointer 
                flex 
                justify-between 
                items-center
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              <span>{category}</span>
              <ChevronRight className="text-white/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileDetailView = () => (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("${backgroundImages[backgroundIndex]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 h-full flex flex-col">
        <button 
          onClick={() => setIsMobileDetailView(false)}
          className="absolute top-4 left-4 text-white flex items-center p-2"
        >
          <ChevronRight className="transform rotate-180 mr-2" /> Back
        </button>

        <div className="flex-grow flex flex-col justify-center px-6 text-white">
          <h1 className="text-3xl font-bold mb-4">{currentCategory.heading}</h1>
          <p className="text-lg mb-4">{currentCategory.description}</p>
          <ul className="space-y-4">
            {currentCategory.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-[#003478] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="mt-6 bg-white/20 backdrop-blur-md py-3 px-6 rounded-full text-white hover:bg-white/30 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  // Render logic based on screen size
  if (isMobile) {
    return isMobileDetailView ? <MobileDetailView /> : <MobileCategoriesList />;
  }

  return <DesktopView />;
};

export default BusinessCard;
