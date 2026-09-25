import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PopupWidget from "./PopupWidget";

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="contact" className="relative pb-16 pt-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute right-0 top-0 w-1/2 h-full"
        style={{
          backgroundImage: "url(/pattern.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 0
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block"
            variants={itemVariants}
          >
            Get in Touch
            <motion.span
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#003478]"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            variants={itemVariants}
          >
            Need assistance or have any inquiries? We're here to help you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Form first on mobile, moves to right on desktop */}
          <motion.div
            variants={formVariants}
            className="md:col-span-7 md:order-2"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Form */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-4"
                      >
                        <p>{error}</p>
                      </motion.div>
                    )}

                    <div className="relative">
                      <motion.input
                        whileFocus={{ borderColor: "#003478" }}
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#003478] focus:ring-2 focus:ring-[#003478]/20"
                        placeholder="Your Name"
                        required
                        disabled={loading}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-1 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <motion.input
                        whileFocus={{ borderColor: "#003478" }}
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#003478] focus:ring-2 focus:ring-[#003478]/20"
                        placeholder="Your Email"
                        required
                        disabled={loading}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-1 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Your Email
                      </label>
                    </div>

                    <div className="relative">
                      <motion.textarea
                        whileFocus={{ borderColor: "#003478" }}
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows="4"
                        className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#003478] focus:ring-2 focus:ring-[#003478]/20"
                        placeholder="Your Message"
                        required
                        disabled={loading}
                      ></motion.textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-1 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Your Message
                      </label>
                    </div>

                    <motion.button
                      variants={buttonVariants}
                      initial="rest"
                      whileHover={!loading ? "hover" : "rest"}
                      whileTap={!loading ? "tap" : "rest"}
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-[#003478] text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </motion.svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            className="md:col-span-5 md:order-1 space-y-4"
          >
            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-[#003478]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-gray-900">Our Address</h3>
                  <Link href="https://maps.app.goo.gl/b1N6Ug6KMUuUo1zr6" className="text-gray-600 hover:text-[#003478] transition-colors block mb-1">
                    Sri Dev Suman Marg , gali no 1
                    Bhattonwala ,Gumaniwala road ,Rishikesh, Uttarakhand - 249201
                  </Link>

                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3 text-green-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-gray-900">Contact</h3>
                  <Link href="tel:7983911790" className="text-gray-600 hover:text-[#003478] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 7983911790</span>
                  </Link>
                  <Link href="https://wa.link/7ytvco" className="text-gray-600 hover:text-green-600 transition-colors mt-1 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp Us</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3 text-amber-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-gray-900">Working Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Monday - Sunday:</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>


                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map - Moved to a collapsible section */}
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <details className="bg-white rounded-xl shadow-lg overflow-hidden">
            <summary className="p-4 cursor-pointer text-gray-800 font-medium flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#003478]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View Location Map
              </div>
            </summary>
            <div className="px-4 py-3 bg-gray-50 border-t border-b border-gray-100 text-sm text-gray-700">
              <span className="font-semibold text-gray-900 block mb-1">Our Address:</span>
              Sri Dev Suman Marg , gali no 1 Bhattonwala ,Gumaniwala road ,Rishikesh, Uttarakhand - 249201
            </div>
            <div className="aspect-w-16 aspect-h-9 h-64">
              <iframe
                title="Satnaam Dhaba Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.193999886705!2d78.1411265!3d30.1672999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093ad218e3957d%3A0x272317b6ca3ba9a6!2sSatnaam%20Dhaba!5e0!3m2!1sen!2sin!4v1712733036022!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </details>
        </motion.div>

        {/* Add PopupWidget */}
        <PopupWidget
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </motion.div>
    </section>
  );
}
