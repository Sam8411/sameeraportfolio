import { Award } from 'lucide-react';

const certifications = [
  { name: "AWS Architecture Job Simulation", provider: "AWS" },
  { name: "Advanced Software Engineering", provider: "Walmart" },
  { name: "Data Analytics", provider: "Tata" },
  { name: "Python Certifications", provider: "GeeksforGeeks, CodSoft, Great Learning" },
  { name: "Java Certification", provider: "CodSoft" },
  { name: "Cyber Job Simulation", provider: "Deloitte" }
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
