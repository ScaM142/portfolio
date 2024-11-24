import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'VISKB',
    description: 'A full-stack web application for MIRRI, used to maintain database of cybersecurity incidents.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Java', 'Javascript', 'PostgtreSQL'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'RPO',
    description: 'A full-stack web application for ŠUSR, used to maintain registry of physical and corporate entities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Java', 'Javascript', 'JSP', 'Kubernetes', 'Oracle DB'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'IVIS',
    description: 'A full-stack web application for ŠUSR, which provides services for preparation of elections, referendums and other voting events. Also maintains collecting and summarization of voting results',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Java', 'Javascript', 'Vaadin', 'Kubernetes', 'Oracle DB'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'FS',
    description: 'Backend for...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Java', 'Springboot','JPA', 'XML', 'MariaDB', 'SpectraDB'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'NFQES',
    description: 'Backend for..',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Java', 'Springboot', 'JPA', 'MariaDB'],
    githubUrl: '',
    liveUrl: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}