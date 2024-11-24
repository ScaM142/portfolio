import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-24 mt-16">
      <img
            src="./images/photo.png"
            alt="Marek Šutý"
            className="w-96 h-128 rounded-full mx-auto mb-6"
          />
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Marek Šutý</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Java Backend Developer
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </a>
    </section>
  );
}