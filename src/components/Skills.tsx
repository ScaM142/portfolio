import React from 'react';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Vaadin'] },
  { category: 'Backend', items: ['Springboot', 'JPA', 'MariaDB', 'PL/SQL'] },
  { category: 'Tools', items: ['Git', 'Mercurial', 'Docker', 'Kubernetes', 'Selenium', 'Jmeter', 'Jenkins'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Communication'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}