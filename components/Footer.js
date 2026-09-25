import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="text-center text-yellow-300 text-lg font-semibold py-4 tracking-wide">
        हरे कृष्ण हरे कृष्ण | कृष्ण कृष्ण हरे हरे | <br />
        हरे राम हरे राम | राम राम हरे हरे
      </div>

      <div className="container mx-auto px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Company Info Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Hare Krishna Logo"
                width={80}
                height={80}
                priority
                className="w-24 h-24 object-contain p-0 m-0"
              />
              <h3 className="text-base font-bold pb-1">Hare Krishna Projects</h3>
            </div>
            <p className="text-gray-400 text-sm leading-snug">
              Your trusted partner in creating beautiful living spaces. We specialize in construction, interior design, and home decor solutions.
            </p>

            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/1U4HreVJ46/?mibextid=wwXIfr" target="_blank">
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
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/harekrishna_projects108?stkn=azkxZzN4bTQyOXVt&utm_source=qr" target="_blank">
                <svg
                  className="w-6 h-6 text-green-700 hover:text-green-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/hare-krishna-home-decor-developers/" target="_blank">
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
              <Link href="https://youtube.com/@harekrishnaprojects?si=p7RtY_0_HvD090kh" target="_blank">
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

          {/* Services Section */}
          <div>
            <h3 className="text-base font-semibold mb-2">Our Services</h3>
            <ul className="space-y-1 text-gray-300">
              <li><div className="hover:text-white">Construction</div></li>
              <li><div className="hover:text-white">Restaurant</div></li>

              <li><div className="hover:text-white">Interior Design</div></li>
              <li><div className="hover:text-white">Home Decor</div></li>
              <li><div className="hover:text-white">Survey</div></li>
              <li><div className="hover:text-white">Gym Setup</div></li>

              <li><div className="hover:text-white">Property Sell & Purchase</div></li>

            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-base font-semibold mb-2">Business Hours</h3>
            <ul className="space-y-1 text-gray-300">
              <li className="flex justify-between"><span>Mon - Sun</span><span>10:00 AM - 5:00 PM</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sri Dev Suman Marg , gali no 1
                  Bhattonwala ,Gumaniwala road ,Rishikesh, Uttarakhand - 249204</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 7983911790</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>harekrishnahomedecordevelopers@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Developer Promotion */}
      {/* <div className="bg-gray-800 py-3">
        <div className="container mx-auto px-2 text-center text-gray-400 text-xs space-y-1">
          <p>Designed & Developed by <span className="font-semibold text-yellow-400">Niikish & Co.</span></p>
          <p>Contact: <a href="mailto:niikish75@gmail.com" className="hover:text-white">niikish75@gmail.com</a> | +91 9808035980</p>
          <p>© {new Date().getFullYear()} Hare Krishna Projects. All rights reserved.</p>
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
