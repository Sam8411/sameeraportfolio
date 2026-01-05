import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/whatsapp_image_2025-12-27_at_7.09.59_pm.jpeg"
              alt="Sameera Bobbala"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-500/50 shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Sameera Bobbala
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Software Engineer | AI Enthusiast | Full-Stack Developer
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400">
          <a href="tel:+918464883333" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={18} />
            <span>+91 84648 83333</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Hyderabad, Telangana</span>
          </span>
          <a href="mailto:bobbalasameera1102@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={18} />
            <span>bobbalasameera1102@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Sam8411"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sameera-bobbala-aa21b6322/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
