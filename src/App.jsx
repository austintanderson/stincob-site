import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Code, 
  Zap, 
  Mail, 
  User, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  CheckCircle2,
  Menu,
  X,
  Github,
  Linkedin
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Logo Component
  const Logo = ({ className = "w-10 h-10" }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path 
          d="M30 20 L70 20 L70 40 L30 40 L30 60 L70 60 L70 80 L30 80" 
          fill="none" 
          stroke="url(#logoGradient)" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="70" cy="20" r="6" fill="#22c55e" />
        <circle cx="30" cy="80" r="6" fill="#f97316" />
      </svg>
    </div>
  );

  const services = [
    {
      title: "Cloud Migrations",
      desc: "We move your stuff to the cloud so fast your physical servers will get separation anxiety.",
      icon: <Cloud className="text-teal-500" />,
      color: "border-teal-500/30"
    },
    {
      title: "Cybersecurity",
      desc: "Digital fortresses that make hackers want to go back to school and get a real job.",
      icon: <Shield className="text-orange-500" />,
      color: "border-orange-500/30"
    },
    {
      title: "Custom Development",
      desc: "If you can dream it, we can code it. If you can't dream it, we'll dream it for you for a fee.",
      icon: <Code className="text-green-500" />,
      color: "border-green-500/30"
    },
    {
      title: "The 'Impossible' Stuff",
      desc: "Legacy systems from 1994? Smart-fridges that won't stop ordering milk? We fix it all.",
      icon: <Zap className="text-teal-400" />,
      color: "border-teal-400/30"
    }
  ];

  const Navigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <Logo className="w-12 h-12 transition-transform group-hover:rotate-12" />
          <span className="text-3xl font-black tracking-tighter text-white">STINCOB</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`capitalize text-sm font-bold tracking-widest transition-colors ${
                currentPage === item ? 'text-orange-500' : 'text-gray-400 hover:text-teal-400'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/20"
          >
            Hire Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6">
          {['home', 'services', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrentPage(item);
                setIsMenuOpen(false);
              }}
              className="text-2xl font-bold text-left text-white capitalize hover:text-orange-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const Home = () => (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full -mr-48 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 blur-[120px] rounded-full -ml-48 -mb-24"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Now accepting impossible projects</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
          IT Consulting that <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-orange-500">
            Doesn't Actually Stink.
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mb-12 font-medium leading-relaxed">
          We are Austin & Jacob. We solve the technical nightmares that keep you up at night, 
          using technology you've heard of and some we probably made up.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => setCurrentPage('services')}
            className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-900/40"
          >
            VIEW SERVICES
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-black rounded-xl transition-all"
          >
            MEET THE GEEKS
          </button>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center"><Terminal size={40} className="text-white mb-2" /> <span className="text-white font-bold">Linux</span></div>
          <div className="flex flex-col items-center"><Cpu size={40} className="text-white mb-2" /> <span className="text-white font-bold">Hardened HW</span></div>
          <div className="flex flex-col items-center"><Shield size={40} className="text-white mb-2" /> <span className="text-white font-bold">Zero Trust</span></div>
          <div className="flex flex-col items-center"><Cloud size={40} className="text-white mb-2" /> <span className="text-white font-bold">Serverless</span></div>
        </div>
      </div>
    </div>
  );

  const Services = () => (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">WHAT WE DO</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-teal-500 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-400 max-w-xl mx-auto text-lg italic uppercase tracking-widest font-bold">
            "If it plugs into a wall or uses a battery, we can probably break it and then fix it better."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              className={`p-8 bg-zinc-900/50 border ${s.color} rounded-3xl hover:bg-zinc-800/80 transition-all group`}
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center text-xs font-bold text-teal-500 tracking-widest uppercase">
                <span>Learn More</span>
                <ExternalLink size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-br from-teal-900/40 to-green-900/40 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-white mb-2">Need something really weird?</h3>
            <p className="text-teal-200/70">Custom hardware, weird protocols, or satellite hacking. Ask us.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="mt-8 md:mt-0 px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-teal-400 transition-colors"
          >
            CHALLENGE US
          </button>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase">The Cob Squad</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Stincob was founded on the radical idea that IT experts shouldn't talk like robots. 
              We're real people, with real coffee addictions, solving real digital disasters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Austin */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-teal-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-orange-600 rounded-full mb-8 flex items-center justify-center text-5xl border-4 border-white/10 shadow-2xl">
                🧔‍♂️
              </div>
              <h3 className="text-3xl font-black text-white mb-1">Austin Anderson</h3>
              <p className="text-orange-500 font-bold mb-6 tracking-widest uppercase text-sm">Cloud Overlord & Toaster Hacker</p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 italic">
                "Austin once optimized a toaster to run Doom. He specializes in cloud architecture and making sure Jacob doesn't accidentally delete the internet. His spirit animal is a 404 error—hard to find, but always there."
              </p>
              <div className="flex space-x-4">
                <Github className="text-gray-500 hover:text-white cursor-pointer" />
                <Linkedin className="text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Jacob */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-green-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-teal-600 rounded-full mb-8 flex items-center justify-center text-5xl border-4 border-white/10 shadow-2xl">
                👨‍💻
              </div>
              <h3 className="text-3xl font-black text-white mb-1">Jacob Ellis</h3>
              <p className="text-teal-500 font-bold mb-6 tracking-widest uppercase text-sm">Cyber Ninja & Caffeine Engine</p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 italic">
                "Jacob is the only person known to communicate fluently in binary and sarcasm. He once survived three weeks on nothing but coffee and Stack Overflow threads. He claims he can hear your Wi-Fi signal if he concentrates hard enough."
              </p>
              <div className="flex space-x-4">
                <Github className="text-gray-500 hover:text-white cursor-pointer" />
                <Linkedin className="text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    return (
      <div className="py-24 bg-zinc-950 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-none">
              READY TO <br />
              <span className="text-orange-500">LEVEL UP?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Fill out the form and we'll get back to you faster than a Fiber connection. 
              Unless we're playing D&D. Then maybe 4-6 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-white font-bold">help@stincob.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <User />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Office</p>
                  <p className="text-white font-bold">The Internet, mostly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-zinc-900 border border-green-500/50 p-12 rounded-[2.5rem] text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Transmission Received!</h3>
                <p className="text-gray-400">Austin or Jacob (or both, if it's really cool) will be in touch soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-teal-500 font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another one
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Tony Stark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="tony@stark.industries"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Project Details</label>
                    <textarea 
                      required
                      rows="4"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="I'm having trouble with the JARVIS mainframe. Can you take a look?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 text-white font-black rounded-xl transition-all shadow-lg shadow-teal-900/40 uppercase tracking-widest"
                  >
                    Initiate Contact
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Logo className="w-8 h-8 opacity-50" />
          <span className="text-xl font-black text-white/50 tracking-tighter">STINCOB</span>
        </div>
        <p className="text-gray-600 text-sm font-medium">
          © {new Date().getFullYear()} Stincob IT Consulting. Built with ☕ and sheer willpower.
        </p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <Github size={20} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <Linkedin size={20} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-teal-500 selection:text-white">
      <Navigation />
      
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Persistent Slogan Bar (Only on Home) */}
      {currentPage === 'home' && (
        <div className="bg-orange-600 py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee space-x-12 items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-black font-black uppercase italic tracking-tighter text-xl">
                We fix the things your "tech guy" broke • Austin & Jacob • Stincob •
              </span>
            ))}
          </div>
        </div>
      )}

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
};

export default App;