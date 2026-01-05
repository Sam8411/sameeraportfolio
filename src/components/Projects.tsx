import { Brain, ShoppingCart, FileText, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: "MOODMATE",
    subtitle: "Mental Health & Well-being Tool",
    description: "Developed an AI-powered mental health application with multilingual support and emotional analysis. Implemented mood detection using NLP, mood-based music recommendations, journaling, meditation, offline usability, and empathetic AI avatar interaction.",
    technologies: ["Python", "TensorFlow/Keras", "NLP", "React Native", "Firebase", "Spotify API", "Dialogflow"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "GREENMART",
    subtitle: "Farmer-Customer Marketplace Platform",
    description: "Built a user-friendly web platform connecting farmers directly with customers. Enabled product listing, browsing, and direct purchasing to reduce middlemen and improve accessibility.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "AWS S3", "REST APIs"],
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "EXAMREADY",
    subtitle: "Previous Exam Papers Portal",
    description: "Developed a scalable portal providing previous exam papers with secure access, search, filter, and download functionality.",
    technologies: ["Django", "PostgreSQL", "Bootstrap", "Elasticsearch", "AWS S3", "Celery"],
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "CHATNOVA",
    subtitle: "Multilingual AI Chatbot",
    description: "Created a ChatGPT-like AI chatbot enabling real-time multilingual conversations using NLP-based response handling.",
    technologies: ["Python", "FastAPI", "Transformers", "React.js", "WebSockets", "PostgreSQL", "Google Translate API"],
    icon: MessageSquare,
    gradient: "from-orange-500 to-red-500"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
