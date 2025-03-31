"use client";
import { useRef } from "react";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = () => {
    const content = resumeRef.current;
    if (!content) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    // Add print-specific styling with two-column layout
    const printContent = `
      <html>
        <head>
          <title>Resume - ${personalInfo.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @page {
              size: letter;
              margin: 0.5in;
            }
            
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              color: #1f2937;
              line-height: 1.5;
              background-color: white;
            }
            
            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .resume-container {
              max-width: 7.5in;
              margin: 0 auto;
              background-color: white;
            }
            
            .resume-wrapper {
              display: flex;
              flex-direction: row;
              background-color: white;
            }
            
            .left-column {
              width: 30%;
              padding-right: 20px;
              background-color: white;
            }
            
            .right-column {
              width: 70%;
              padding-left: 20px;
              background-color: white;
            }
            
            .profile-photo {
              width: 100%;
              aspect-ratio: 1;
              border-radius: 4px;
              margin-bottom: 16px;
              background-color: #f1f5f9;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            
            .profile-photo img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
            h1 { font-size: 24px; margin: 0 0 4px 0; color: #111827; }
            h2 { font-size: 16px; margin: 14px 0 8px 0; color: #111827; position: relative; font-weight: 700; }
            h2:after { content: ''; position: absolute; left: 0; bottom: -2px; width: 30px; height: 2px; background: #2563eb; }
            h3 { font-size: 14px; margin: 0 0 4px 0; color: #111827; }
            p { margin: 0 0 5px; }
            
            .contact { margin-bottom: 15px; font-size: 13px; }
            .contact-item { 
              display: flex; 
              align-items: flex-start; 
              margin-bottom: 6px;
            }
            .contact-icon {
              margin-right: 8px;
              margin-top: 3px;
              color: #2563eb;
            }
            .section { margin-bottom: 16px; }
            .experience { margin-bottom: 14px; }
            ul { margin: 5px 0; padding-left: 16px; }
            li { margin-bottom: 4px; font-size: 13px; }
            .skills-list { 
              padding: 0;
              margin: 0;
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            .skills-list li {
              padding: 4px 0;
              font-size: 13px;
              border-bottom: 1px dotted #e2e8f0;
              color: #1f2937;
            }
            .skills-category {
              margin-top: 8px;
              margin-bottom: 4px;
              font-weight: bold;
              font-size: 12px;
              color: #374151;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; }
            .period { font-size: 12px; color: #4b5563; }
            .company { font-style: italic; color: #374151; }
            
            .job-title {
              font-weight: bold;
              font-size: 14px;
              color: #111827;
            }
            
            .job-company {
              font-size: 13px;
              margin-bottom: 4px;
              color: #374151;
            }
            
            .right-column h2 {
              margin-top: 0;
              padding-bottom: 6px;
              border-bottom: 1px solid #e2e8f0;
              margin-bottom: 12px;
            }
            
            .right-column h2:after {
              display: none;
            }
            
            .title {
              font-size: 13px;
              color: #2563eb;
              font-weight: 600;
              margin-bottom: 8px;
            }
            
            @media print {
              body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                background-color: white;
              }
              
              .resume-container {
                width: 100%;
                box-shadow: none;
                border: none;
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            ${content.innerHTML}
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Give browser time to process all CSS and render before printing
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 500);
  };
  
  // Select a few key experiences for the resume
  const selectedExperiences = experiences.slice(0, 3);
  
  // Select key projects for the resume (optional)
  const selectedProjects = projects.slice(0, 2);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <motion.div 
        className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            Resume Preview
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h1>
          <p className="text-gray-700 mt-2 text-sm">A professionally formatted resume ready to print or download</p>
        </div>
        <motion.button
          onClick={handlePrint}
          className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-medium py-2.5 px-5 rounded-md flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm transition-all duration-200 hover:shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
          </svg>
          Print Resume
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="rounded-xl overflow-hidden shadow-sm border border-slate-200/60 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white p-6 sm:p-8">
          {/* Printable Resume Content */}
          <div ref={resumeRef} className="print-content w-full">
            {/* Two-column resume layout */}
            <div className="resume-wrapper flex flex-row">
              {/* Left column */}
              <div className="left-column w-[30%] pr-4">
                {/* Profile Photo */}
                <div className="profile-photo w-full aspect-square rounded bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm border border-slate-200">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Contact Information */}
                <div className="section mt-4">
                  <h2 className="text-base font-bold text-gray-900 relative mb-3">Contact</h2>
                  <div className="contact">
                    <div className="contact-item flex items-start mb-2">
                      <span className="contact-icon mt-1 mr-2 text-blue-600">
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">{personalInfo.email}</span>
                    </div>
                    
                    <div className="contact-item flex items-start mb-2">
                      <span className="contact-icon mt-1 mr-2 text-blue-600">
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">{personalInfo.phone}</span>
                    </div>
                    
                    <div className="contact-item flex items-start mb-2">
                      <span className="contact-icon mt-1 mr-2 text-blue-600">
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">{personalInfo.github}</span>
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="section mt-6">
                  <h2 className="text-base font-bold text-gray-900 relative mb-3">Skills</h2>
                  <ul className="skills-list">
                    <div className="skills-category">Technical</div>
                    {personalInfo.skills.slice(0, Math.ceil(personalInfo.skills.length/2)).map((skill, index) => (
                      <li key={index} className="text-sm text-gray-700 py-1 border-b border-dotted border-slate-200">{skill}</li>
                    ))}
                    
                    <div className="skills-category mt-3">Additional</div>
                    {personalInfo.skills.slice(Math.ceil(personalInfo.skills.length/2)).map((skill, index) => (
                      <li key={index} className="text-sm text-gray-700 py-1 border-b border-dotted border-slate-200">{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Education */}
                <div className="section mt-6">
                  <h2 className="text-base font-bold text-gray-900 relative mb-3">Education</h2>
                  <div className="space-y-3">
                    {personalInfo.education.map((edu, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-sm italic text-gray-700">{edu.institution}</p>
                        <p className="text-xs text-gray-600">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column */}
              <div className="right-column w-[70%] pl-6 border-l border-slate-200">
                <h1 className="text-xl font-bold text-gray-900">{personalInfo.name}</h1>
                <p className="text-sm text-blue-700 font-medium mb-4">{personalInfo.title}</p>
                
                {/* Summary */}
                <div className="section mb-6">
                  <h2 className="text-base font-bold text-gray-900 border-b border-slate-200 pb-1 mb-3">Professional Summary</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>
                
                {/* Experience */}
                <div className="section mb-6">
                  <h2 className="text-base font-bold text-gray-900 border-b border-slate-200 pb-1 mb-3">Professional Experience</h2>
                  
                  <div className="space-y-5">
                    {selectedExperiences.map((exp) => (
                      <div key={exp.id} className="experience">
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                          <div className="text-xs text-gray-600">{exp.period}</div>
                        </div>
                        <p className="text-sm mb-1">
                          <span className="font-medium text-gray-700">{exp.company}</span>, {exp.location}
                        </p>
                        <ul className="list-disc pl-4 text-sm space-y-1 text-gray-700">
                          {exp.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Projects */}
                {selectedProjects.length > 0 && (
                  <div className="section mb-5">
                    <h2 className="text-base font-bold text-gray-900 border-b border-slate-200 pb-1 mb-3">Projects</h2>
                    
                    <div className="space-y-4">
                      {selectedProjects.map((project) => (
                        <div key={project.id}>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-bold text-gray-900">{project.title}</h3>
                            <div className="text-xs text-gray-600">{project.period}</div>
                          </div>
                          <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                          <ul className="list-disc pl-4 text-sm space-y-1 text-gray-700">
                            {project.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-900 text-sm flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="font-medium mb-1">Tips:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Click the &quot;Print Resume&quot; button to generate a printer-friendly version.</li>
            <li>To add your photo, replace the placeholder in the print version.</li>
            <li>This two-column layout provides a modern professional look with WCAG-compliant color contrast.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}