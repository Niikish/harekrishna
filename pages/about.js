'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/founder/survy.jpeg"
          alt="Hare Krishna Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Hare Krishna Stays</h1>
            <p className="text-xl md:text-2xl">Spreading Divine Consciousness</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Our Spiritual Sanctuary
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Hare Krishna Stays, we create spaces where devotees can immerse themselves in spiritual practices, connect with like-minded souls, and experience the divine presence of Lord Krishna through comfortable accommodation and spiritual guidance.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Connect With Us
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
              >
                Explore Stays
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/founder/survy.jpeg"
              alt="Spiritual Environment"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Spiritual Atmosphere",
              description: "Peaceful environment for meditation and chanting"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Daily Programs",
              description: "Regular kirtan, meditation, and spiritual discourses"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Community",
              description: "Connect with fellow devotees and spiritual seekers"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide sacred spaces where devotees can immerse themselves in spiritual practices, connect with like-minded souls, and experience the divine presence of Lord Krishna through comfortable accommodation and spiritual guidance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a network of spiritual stays that serve as sanctuaries for devotees worldwide, fostering spiritual growth, community, and the spread of Krishna consciousness while maintaining the highest standards of comfort and service.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          {...fadeInUp}
          className="bg-orange-500 rounded-3xl p-12 text-white text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Happy Devotees</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Spiritual Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Years of Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
