'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer replacement
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Add state for active category filter
  const [activeCategory, setActiveCategory] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Update categories to include property sell and purchase
  const categories = [
    { id: "all", name: "All Services" },
    { id: "construction", name: "Construction" },
    { id: "design", name: "Design" },
    { id: "property", name: "Property" },
    { id: "property-transaction", name: "E-States" },
  ];

  const services = [
    {
      id: 1,
      title: "Construction",
      subtitle: "Building Dreams Into Reality",
      description:
        "Construction is not just about building, its about creating a better future so build with the mind, create with the heart.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="8" width="20" height="14" rx="2" />
          <path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
          <path d="M2 22h20" />
          <path d="M7 16h.01" />
          <path d="M17 16h.01" />
          <path d="M12 16h.01" />
          <path d="M7 12h.01" />
          <path d="M17 12h.01" />
          <path d="M12 12h.01" />
        </svg>
      ),
      features: [
        "Residential Houses",
        "Luxury Apartments",
        "Road & Highways",
        "Resorts & Hotels",

      ],
      cta: "Start Your Project",
      category: "construction"
    },
    {
      id: 2,
      title: "Restaurant",
      subtitle: "Culinary Spaces & Real Estate Excellence",
      description:
        "Where imagination meets innovation a new concept is born, The right ingredients, the right team, the perfect recipe for success.",
      image: "/founder/rest.jpeg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 19.2c-.4.2-.8.4-1.2.4-1.6 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 .4-.1.8-.3 1.1L21 20" />
          <path d="M7.2 11.4c.2-.4.4-.8.4-1.2 0-1.6-1.3-3-3-3S1.6 8.6 1.6 10.2s1.3 3 3 3c.4 0 .8-.1 1.1-.3L9 16" />
          <path d="M16 3s.5 2 2 2c1.5 0 2 1 2 2v2M3 3s-.5 2-2 2c-1.5 0-2 1-2 2v2M16 21s.5-2 2-2c1.5 0 2-1 2-2v-2M3 21s-.5-2-2-2c-1.5 0-2-1-2-2v-2" />
        </svg>
      ),
      features: [
        "Equipment Installation",
        "Hiring to Lunch",
        "Layout Construction",
        "Concept Development",

      ],
      cta: "Explore Solutions",
      category: "property"
    },
    {
      id: 3,
      title: "Interior Design",
      subtitle: "Transforming Spaces With Elegance",
      description:
        "Innovative interior design solutions that blend aesthetics with functionality, creating beautiful living and working spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <path d="M5 12a15 15 0 0 0 14 0" />
        </svg>
      ),
      features: [
        "House Renovation",
        "Moduler Kitchen",
        "False Ceiling & Lighting",
        "Wardrobes & Custom Furniture"
      ],
      cta: "Transform Your Space",
      category: "design"
    },
    // {
    //   id: 4,
    //   title: "Survey",
    //   subtitle: "Transforming Spaces With Elegance",
    //   description:
    //     "Surveying is the path to progress and surveying for safety, building for innovation and we are surving with sensitivity, building with sustainability .",
    //   image: "/founder/survy.jpeg",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    //       <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    //       <polyline points="9 22 9 12 15 12 15 22" />
    //       <path d="M5 12a15 15 0 0 0 14 0" />
    //     </svg>
    //   ),
    //   features: [
    //     "Residential Design",
    //     "Commercial Spaces",
    //     "2D/3D",
    //     "Material Selection"
    //   ],
    //   cta: "Transform Your Space",
    //   category: "design"
    // },
    {
      id: 5,
      title: "Gym Setup",
      subtitle: "Fitness Spaces That Inspire",
      description:
        "Where fitness dreams are made, fitness is not a destination its a journey, choose the right equipment for a stronger you.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 5v14m-5-9h-6m11 0h-6m-5 4h10" />
          <rect x="2" y="9" width="4" height="6" rx="1" />
          <rect x="18" y="9" width="4" height="6" rx="1" />
        </svg>
      ),
      features: [
        "Concept Development",
        "Design and Layout",
        "Premium Machinery Installation",
        "Technology and Security",
        "Maintenance Services"
      ],
      cta: "Design Your Gym",
      category: "design"
    },

    {
      id: 5,
      title: "E-state",
      subtitle: "Seamless E-state Transactions",
      description:
        "Comprehensive property transaction services, from market analysis to closing deals. We simplify your real estate journey with expert guidance and support.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 12h18" />
          <path d="M3 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
          <path d="M3 18h18" />
          <path d="M12 12v6" />
          <path d="M12 6v2" />
        </svg>
      ),
      features: [
        " Residential Plots Sale",
        " Independent Houses Sale",
        " Flats & Apartments Sale",
        " House with Land Sale"
      ],
      cta: "Explore Property Options",
      category: "property-transaction"
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#003478] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 mb-8">
            Professional services delivered with expertise and dedication to transform your vision into reality
          </p>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-[#003478] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                layout
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#003478] bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300 z-10"></div>
                  <div className="relative w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full z-20">
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#003478]/10 text-[#003478] rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-6 mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg className="h-4 w-4 text-[#003478] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.link/2meebn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#003478] hover:bg-[#002456] text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center group"
                    aria-label={`Contact us about ${service.title} services via WhatsApp`}
                  >
                    <span>{service.cta}</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
