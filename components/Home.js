// import Link from "next/link";

// export default function Home() {
//   return (
//     <section id="home" className="relative h-screen text-white flex items-center overflow-hidden">
//     <div className="absolute inset-0 z-0">
//       <video 
//         src="/videos/2835998-uhd_3840_2160_24fps.mp4" 
//         className="w-full h-full object-cover scale-105"
//         autoPlay
//         playsInline
//         muted
//         loop
//         aria-hidden="true"
//       ></video>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-1"></div>
//     <div className="container mx-auto px-4 z-10 relative">
//       <h1 className="text-5xl md:text-7xl font-bold mb-8">Hare Krishna Home Decor & Developers.</h1>
//       <p className="text-3xl md:text-3xl mb-8 max-w-3xl">Construct your dreams with devotion</p>
//       <p className="text-3xl md:text-3xl mb-8 max-w-3xl">Pour Your Soals into other Projects</p>

//       <div className="flex flex-wrap space-x-6 mb-12">
//         <Link href="/#About" className="py-2.5 px-5 me-2 mb-2 text-white text-xl focus:outline-none bg-transparent rounded-full border border-gray-300 hover:bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-white transition-all duration-300 focus:ring-4 focus:ring-yellow-300"
//         >About Us</Link>
//         <Link href="/#Services" className="py-2.5 px-5 me-2 mb-2 text-white text-xl focus:outline-none bg-transparent rounded-full border border-gray-300 hover:bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-white transition-all duration-300 focus:ring-4 focus:ring-yellow-300">Our Services</Link>
//       </div>
//     </div>
//   </section>
//   );
// }
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative h-screen text-white flex items-center overflow-hidden">
      {/* Background Video with subtle animation */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/2835998-uhd_3840_2160_24fps.mp4"
          className="w-full h-full object-cover scale-105 filter brightness-75"
          autoPlay
          playsInline
          muted
          loop
          aria-hidden="true"
        ></video>
      </div>

      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-1"></div>

      {/* Content with animations */}
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-50">
            Hare Krishna Projects          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl mb-4 max-w-3xl font-light">
              Construct your dreams with devotion
            </p>

          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/#founder" className="group relative overflow-hidden py-3 px-8 text-white text-lg font-medium bg-transparent rounded-full border border-yellow-400 hover:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">About Us</span>
            </Link>

            <Link href="/#services" className="group relative overflow-hidden py-3 px-8 text-white text-lg font-medium bg-transparent rounded-full border border-yellow-400 hover:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">Our Services</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent z-2"></div>
    </section>
  );
}
