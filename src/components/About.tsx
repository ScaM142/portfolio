import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Backend Developer working mostly in Java.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            </p>
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Based in Žilina, Slovakia</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">2+ Years of Experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}