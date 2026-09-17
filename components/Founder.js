import { Linkedin, Twitter, ArrowRight, Quote } from "lucide-react";

const founders = [
  // {
  //   name: "Er. Ashish Gairola",
  //   img: "/founder/Ashish.jpeg",
  //   role: "Co-Founder & Technical Lead",
  //   bio: "Leading the technology vision and architecture.",
  // },
  {
    name: "Gopal Joshi",
    img: "/founder/Gopal.jpeg",
    role: "Co-Founder & Business Strategist",
    bio: "With a sharp eye for market trends, Gopal drives our business vision forward. He believes in creating sustainable growth through strategic innovation and empowering teams to reach their full potential.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function FoundersSection() {
  return (
    <section id="founder" className="relative py-24 overflow-hidden bg-slate-900">
      {/* Decorative background glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            The Visionaries <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Behind Our Mission
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Meet the leaders who inspire our team, shape our strategy, and drive our commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative w-full max-w-3xl group"
            >
              {/* Glassmorphism Card */}
              <div className="relative z-10 flex flex-col md:flex-row items-center bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-500 hover:bg-slate-800/80 hover:border-slate-600">
                
                {/* Asymmetrical Image Section */}
                <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:-ml-16 md:mr-10 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl transform rotate-6 opacity-70 group-hover:rotate-12 transition-all duration-500"></div>
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="relative w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-slate-800 z-10"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-10 h-10 text-blue-400/20 mb-4 mx-auto md:mx-0 transform -scale-x-100" />
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-5">
                    {founder.role}
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed mb-8">
                    "{founder.bio}"
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <a 
                      href={founder.linkedin} 
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-700/50 text-slate-300 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.twitter} 
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-700/50 text-slate-300 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`${founder.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <button className="hidden md:flex ml-auto items-center gap-2 text-sm font-medium text-white opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}