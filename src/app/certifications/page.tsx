'use client';

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
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
        Certifications
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
      </motion.h1>
      
      <div className="space-y-6 sm:space-y-8">
        {certifications.map((cert, idx) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200/60"
          >
            <div className="flex flex-col md:flex-row">
              {/* Certificate Image/Logo */}
              <div className="w-full md:w-1/4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
                <div className="w-32 h-32 relative bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <Image 
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-2 text-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="text-xs font-medium mt-2 text-gray-700">Certificate Badge</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="flex-1 p-6">
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h2 className="text-xl font-bold text-gray-900">{cert.title}</h2>
                    <div className="flex gap-2 items-center">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Issued: {cert.issueDate}
                      </span>
                      {cert.expiryDate && (
                        <span className="text-xs px-2 py-1 bg-amber-50 text-amber-800 rounded-full">
                          Expires: {cert.expiryDate}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-medium mt-1">{cert.issuer}</p>
                  
                  {cert.credentialId && (
                    <p className="text-sm text-gray-600 mt-1">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 text-sm sm:text-base">
                    {cert.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 + index * 0.05, duration: 0.3 }}
                      className="bg-blue-50 text-blue-800 px-2.5 py-1 text-xs rounded-md font-medium border border-blue-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                {cert.credentialURL && (
                  <div className="mt-4 flex justify-end">
                    <Link 
                      href={cert.credentialURL}
                      target="_blank"
                      className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
                    >
                      View Certificate
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 className="font-semibold mb-1">Need to add a new certification?</h3>
            <p className="text-sm">
              You can upload your new certifications by editing the certifications data file. Make sure to include all relevant details such as issuer, date, and credential ID.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}