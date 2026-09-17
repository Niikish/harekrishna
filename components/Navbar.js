"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Added Image import for Next.js optimization

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id").toLowerCase();

        // Check if section is in view
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Handle initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling and navigation
  const handleNavigation = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for fixed navbar
      window.scrollTo({ 
        top: offsetTop, 
        behavior: "smooth" 
      });
      
      // Update URL without reloading
      window.history.pushState({}, "", `#${id}`);
      setActiveSection(id);
    }
  };

  const menuItems = [
    { title: "Home", id: "home" },
    { title: "Founder", id: "founder" },
    { title: "Services", id: "services" },
    { title: "Contact", id: "contact" },
  ];
  const toggleMobileMenu = () => {
    // Force a state reset by toggling based on previous state
    setIsMobileMenuOpen(prev => !prev);
  };
  return (
    
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      
      <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={(e) => handleNavigation(e, "home")}
              className="flex items-center group transition-all duration-300"
            >
              <div className="relative">
                <Image 
                  src="/logo.png"
                  alt="Hare Krishna Logo"
                  width={100}
                  height={100}
                  priority
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                    isScrolled ? "w-14 h-14 sm:w-16 sm:h-16" : "w-16 h-16 sm:w-20 sm:h-20"
                  }`}
                />
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-red-600 transition-all duration-300 ${
                  isScrolled ? "w-10" : "w-12 sm:w-14"
                } group-hover:w-full opacity-0 group-hover:opacity-100`}></div>
              </div>

              <div className={`flex flex-col ml-2 transition-all duration-300 ${
                isScrolled ? "pt-2" : "pt-4"
              }`}>
                <h1 className={`text-red-600 font-medium tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"
                }`}>
                  Hare Krishna Home Decor
                </h1>
                <h2 className={`text-red-600 font-medium tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"
                }`}>
                  & Developers
                </h2>
                <p className={`text-gray-600 tracking-wide font-light transition-all duration-300 ${
                  isScrolled ? "text-xs mt-0.5" : "text-sm mt-1"
                }`}>
                  Construct Your Dreams with Devotion
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavigation(e, item.id)}
                  className={`py-2 font-medium relative transition-all duration-300 group`}
                >
                  <span className={`${
                    isScrolled ? "text-green-800" : "text-white"
                  } group-hover:text-red-600 transition-colors duration-300`}>
                    {item.title}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 transform origin-left ${
                    activeSection === item.id 
                      ? "scale-x-100 bg-red-600" 
                      : "scale-x-0 group-hover:scale-x-100 bg-green-600"
                  }`}></span>
                </Link>
              ))}
              {/* "Get Quote" button */}
              <a
  href="tel:+918941086108"
  className={`relative overflow-hidden py-2 px-4 rounded-full transition-all duration-300 ${
    isScrolled 
      ? "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg" 
      : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
  } font-medium flex items-center group`}
>
  <span className="relative z-10">Call</span>
  <svg 
    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
</a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2 focus:outline-none group"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute top-0 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                  isScrolled || isMobileMenuOpen ? "bg-green-800" : "bg-white"
                } ${isMobileMenuOpen ? "transform rotate-45 translate-y-2" : "group-hover:w-5"}`}></span>
                
                <span className={`absolute top-1/2 left-0 w-4 h-0.5 rounded-full -translate-y-1/2 transition-all duration-300 ease-in-out ${
                  isScrolled || isMobileMenuOpen ? "bg-green-800" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0 w-6" : "group-hover:w-6"}`}></span>
                
                <span className={`absolute bottom-0 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                  isScrolled || isMobileMenuOpen ? "bg-green-800" : "bg-white"
                } ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : "w-5 group-hover:w-6"}`}></span>
              </div>
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      
      


<div
  className={`fixed inset-0 bg-gradient-to-b from-white to-green-50 z-40 transform transition-transform duration-300 ease-in-out ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  } lg:hidden pt-0 shadow-xl`}
>
  <div className="container mx-auto px-6 overflow-y-auto h-full pb-20">
    {/* Centered Logo with no upper spacing */}
    <div className="flex justify-center mb-8 mt-0 pt-0">
 
</div>


    {/* Navigation Items */}
    <nav className="space-y-2">
      {menuItems.map((item) => (
        <div key={item.id} className="py-3 border-b border-green-100">
          <Link
            href={`#${item.id}`}
            onClick={(e) => handleNavigation(e, item.id)}
            className={`block font-medium text-green-800 hover:text-green-600 transition-colors duration-200 text-lg flex items-center ${
              activeSection === item.id ? "font-semibold" : ""
            }`}
          >
            {activeSection === item.id && (
              <span className="w-1.5 h-5 bg-green-500 rounded-full mr-2.5"></span>
            )}
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
    <div className="mt-8 text-center">
            <a
              href="tel:+918941086108"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300"
            >
              📞 Call Us Now
            </a>
          </div>
    {/* Social Media Icons */}
    {/* <div className="mt-10 flex justify-center space-x-6">
    <div className="flex gap-4">
  <Link href="https://facebook.com" target="_blank">
    <svg
      className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3V22C18.34 21.13 22 16.99 22 12z" />
    </svg>
  </Link>
  <Link href="https://twitter.com" target="_blank">
    <svg
      className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </Link>
  <Link href="https://instagram.com" target="_blank">
    <svg
      className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
    </svg>
  </Link>
  <Link href="https://linkedin.com" target="_blank">
    <svg
      className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2h-3v-6.26c0-1.5-.02-3.44-2.1-3.44-2.1 0-2.43 1.64-2.43 3.33V21H8V9h3v1.64h.04a3.3 3.3 0 0 1 2.97-1.64c3.18 0 3.77 2.1 3.77 4.83V21h-.01zM5 8H2V21h3V8zM3.5 3A1.5 1.5 0 1 0 3.5 6a1.5 1.5 0 0 0 0-3z" />
    </svg>
  </Link>
  <Link href="https://wa.me/919999999999" target="_blank">
    <svg
      className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.5 3.5A11.49 11.49 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.17 1.6 5.97L0 24l6.2-1.61a11.96 11.96 0 0 0 5.8 1.5c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.5-8.49zM12 22c-1.77 0-3.5-.46-5.02-1.33l-.36-.2-3.68.96.98-3.6-.23-.37A9.93 9.93 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.09-7.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.73.93-.9 1.12c-.17.2-.33.22-.62.07a8.11 8.11 0 0 1-2.4-1.5 9.02 9.02 0 0 1-1.66-2.06c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.03-.52-.08-.15-.64-1.54-.88-2.1-.23-.55-.47-.47-.65-.47h-.55c-.18 0-.47.07-.7.34a2.94 2.94 0 0 0-1 2.17c0 1.28.91 2.52 1.04 2.7.14.18 1.79 2.73 4.34 3.82.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.58.21-1.07.15-1.17-.06-.1-.26-.15-.55-.3z" />
    </svg>
  </Link>
</div>
    </div> */}
    <div className="mt-10 flex justify-center space-x-6">
  <div className="flex gap-4">
    <Link href="https://www.facebook.com/share/1AMioDko1f/?mibextid=wwXIfr" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3V22C18.34 21.13 22 16.99 22 12z" />
      </svg>
    </Link>
    <Link href="https://x.com/krishna_decor?s=11" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </Link>
    <Link href="https://www.instagram.com/harekrishna_developers108?igsh=MTRjanBvemR5bTV3Zw%3D%3D&utm_source=qr" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
      </svg>
    </Link>
    <Link href="https://www.linkedin.com/company/hare-krishna-home-decor-developers" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2h-3v-6.26c0-1.5-.02-3.44-2.1-3.44-2.1 0-2.43 1.64-2.43 3.33V21H8V9h3v1.64h.04a3.3 3.3 0 0 1 2.97-1.64c3.18 0 3.77 2.1 3.77 4.83V21h-.01zM5 8H2V21h3V8zM3.5 3A1.5 1.5 0 1 0 3.5 6a1.5 1.5 0 0 0 0-3z" />
      </svg>
    </Link>
    <Link href="https://wa.link/2meebn" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.5 3.5A11.49 11.49 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.17 1.6 5.97L0 24l6.2-1.61a11.96 11.96 0 0 0 5.8 1.5c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.5-8.49zM12 22c-1.77 0-3.5-.46-5.02-1.33l-.36-.2-3.68.96.98-3.6-.23-.37A9.93 9.93 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.09-7.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.73.93-.9 1.12c-.17.2-.33.22-.62.07a8.11 8.11 0 0 1-2.4-1.5 9.02 9.02 0 0 1-1.66-2.06c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.03-.52-.08-.15-.64-1.54-.88-2.1-.23-.55-.47-.47-.65-.47h-.55c-.18 0-.47.07-.7.34a2.94 2.94 0 0 0-1 2.17c0 1.28.91 2.52 1.04 2.7.14.18 1.79 2.73 4.34 3.82.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.58.21-1.07.15-1.17-.06-.1-.26-.15-.55-.3z" />
      </svg>
    </Link>
    <Link href="https://www.youtube.com/@HareKrishnaDevelopers" target="_blank">
      <svg
        className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.2 2.5 12 2.5 12 2.5h0s-5.2 0-8.6.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.5.4 7.5.4s5.2 0 8.6-.4c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.8 14.5v-5l5.1 2.5-5.1 2.5z" />
      </svg>
    </Link>
  </div>
</div>

   
  </div>
</div>

    </header>
  );
}
