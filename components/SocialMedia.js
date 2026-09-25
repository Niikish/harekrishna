"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SocialMediaPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.4 }
    }
  };

  const socialPlatforms = [
    {
      name: "YouTube",
      tagline: "Watch Our Videos",
      url: "https://youtube.com/@harekrishnahomedecor?si=FMU8J3QzCvwn4JHa",
      image: "/social/youtube.png",
      color: "from-red-500 to-red-700",
      shadow: "shadow-red-500/40",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      tagline: "Follow Our Journey",
      url: "https://www.instagram.com/harekrishna_developers108?igsh=MTRjanBvemR5bTV3Zw%3D%3D&utm_source=qr",
      image: "/social/instagram.png",
      color: "from-pink-500 via-purple-500 to-yellow-500",
      shadow: "shadow-pink-500/40",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      tagline: "Join Our Community",
      url: "https://www.facebook.com/people/Hare-Krishna-Homedecordevelopers/pfbid088Fa7iDjyGxgv9mitqruPtsyAMELXrVyd838vi58Kkky2CRMLuUc7nUfjQemcyZbl/?mibextid=wwXIfr&rdid=uVIDZyq1j2qqxFRp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMioDko1f%2F%3Fmibextid%3DwwXIfr",
      image: "/social/facebook.png",
      color: "from-blue-600 to-blue-800",
      shadow: "shadow-blue-600/40",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      tagline: "Connect Professionally",
      url: "https://www.linkedin.com/company/hare-krishna-home-decor-developers",
      image: "/social/linkedin.png",
      color: "from-blue-500 to-blue-700",
      shadow: "shadow-blue-500/40",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "X",
      tagline: "Stay Updated",
      url: "https://x.com/krishna_decor?s=11",
      image: "/social/twitter.png",
      color: "from-gray-800 to-black dark:from-gray-600 dark:to-gray-900",
      shadow: "shadow-gray-900/40",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-24 z-0">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-pink-400/10 dark:bg-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container px-4 mx-auto relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Join Our
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Community
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light">
            Stay connected, follow our journey, and be part of the Hare Krishna Developers family across all platforms.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {socialPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative flex flex-col items-center p-8 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/50 shadow-xl transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${platform.color} mix-blend-overlay -z-10`}></div>
              
              <div className="relative w-28 h-28 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-110 blur-md`}></div>
                <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full p-1 shadow-inner overflow-hidden border-2 border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-colors duration-300 z-10">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      sizes="112px"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">{platform.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8 font-medium">{platform.tagline}</p>
              
              <a 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`mt-auto w-full py-3 px-6 flex items-center justify-center space-x-2 rounded-2xl text-white bg-gradient-to-r ${platform.color} shadow-lg ${platform.shadow} transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group/btn`}
                aria-label={`Visit our ${platform.name}`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="font-semibold tracking-wide relative z-10">Connect</span>
                <div className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300">
                  {platform.icon}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
