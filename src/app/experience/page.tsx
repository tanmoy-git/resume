'use client';

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 relative inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Work Experience
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
      </motion.h1>
      
      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200/60">
              {/* Time line dots and line */}
              <div className="absolute left-8 top-8 sm:left-10 sm:top-10 bottom-0 flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/20 z-10"></div>
                {idx !== experiences.length - 1 && (
                  <div className="h-full w-0.5 bg-gradient-to-b from-blue-500/70 via-indigo-300/50 to-transparent"></div>
                )}
              </div>
              
              {/* Card content */}
              <div className="p-6 sm:p-8 pl-16 sm:pl-20 relative z-0">
                <div className="mb-4">
                  <div className="flex items-center mb-1.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.title}</h2>
                    <span className="ml-3 px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-gray-700 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm sm:text-base">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline-block text-slate-400">•</span>
                    <span className="text-gray-700">{exp.location}</span>
                  </div>
                </div>
                
                <div className="mb-5">
                  <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                    {exp.description.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 + index * 0.05, duration: 0.4 }}
                      >
                        <div className="mt-1.5 mr-3 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 + index * 0.05, duration: 0.3 }}
                      className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-gray-700 px-2.5 py-1 text-xs sm:text-sm rounded-md font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}