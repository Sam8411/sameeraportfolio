import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <p className="text-center text-gray-300 mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:bobbalasameera1102@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-100 font-medium">bobbalasameera1102@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918464883333"
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-100 font-medium">+91 84648 83333</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl md:col-span-2">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-100 font-medium">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-6 border-t border-gray-700">
            <a
              href="https://github.com/Sam8411"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={28} className="text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sameera-bobbala-aa21b6322/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={28} className="text-gray-300 group-hover:text-white" />
            </a>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>© 2025 Sameera Bobbala. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
