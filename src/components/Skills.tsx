import { Code, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C/C++", "JavaScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: Code,
    skills: ["React.js", "Node.js", "Express.js", "Spring Boot"],
    color: "from-teal-500 to-green-500"
  },
  {
    title: "AI & Data",
    icon: Database,
    skills: ["Artificial Intelligence", "NLP", "TensorFlow", "PyTorch", "Mood Analysis"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQLite", "Elasticsearch"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Firebase", "Docker", "Kubernetes", "CI/CD"],
    color: "from-sky-500 to-blue-500"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jenkins", "VS Code", "IntelliJ", "Postman", "JIRA", "Grafana"],
    color: "from-emerald-500 to-teal-500"
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      {skill}
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

export default Skills;
