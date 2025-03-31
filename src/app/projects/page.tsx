'use client';

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 relative inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-48 w-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`grid-${project.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                </svg>
              </div>
              <div className="z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="font-medium text-gray-800">{project.title} Screenshot</span>
              </div>
              {/* If you have actual images:
              <Image 
                src="/project-image.jpg" 
                alt={project.title}
                fill
                className="object-cover"
              /> */}
            </div>
            
            <div className="p-5 sm:p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-3 gap-2">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h2>
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap">{project.period}</span>
              </div>
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key Features
                  </h3>
                  
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {project.highlights.map((highlight, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.05 + index * 0.05, duration: 0.4 }}
                      >
                        <div className="mt-1.5 mr-2 h-1 w-1 rounded-full bg-blue-600 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.05 + index * 0.05, duration: 0.3 }}
                        className="px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 text-xs rounded-full border border-blue-100"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-5 pt-4 border-t border-slate-100">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300"
                >
                  View Project
                  <svg 
                    className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}