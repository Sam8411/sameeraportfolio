import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "J.B. Institute of Engineering and Technology",
    score: "CGPA: 8.97",
    year: "2023-2027",
    current: true
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College",
    score: "96.4%",
    year: "2021-2023",
    current: false
  },
  {
    degree: "SSC",
    institution: "Kakatiya High School",
    score: "CGPA: 10",
    year: "2020",
    current: false
  }
];

function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${edu.current ? 'bg-gradient-to-br from-blue-500 to-teal-500' : 'bg-gray-700'}`}>
                  <GraduationCap size={28} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 mb-1">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>

                  <div className="mt-3">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                      {edu.score}
                    </span>
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

export default Education;
