'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
          >
            Privacy <span className="text-gradient-neon">Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* Policy Content - exact content from Policy-Doc.docx */}
      <section className="section-padding relative">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 text-left space-y-6"
          >
            <h2 className="text-2xl font-heading font-semibold text-white mt-8 first:mt-0">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This policy outlines the guidelines for the use and management of the Transport Management System (TMS) and the associated mobile application within Inntri Labs Pvt Ltd. The purpose of this policy is to ensure efficient, secure, and effective transportation operations, leveraging technology to streamline processes and enhance service delivery.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              2. Scope
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This policy applies to all employees, contractors, and third-party service providers who use the TMS and mobile application for transportation-related activities.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              3. Objectives
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>To ensure the proper use of the TMS and mobile application.</li>
              <li>To protect the security and integrity of transportation data.</li>
              <li>To enhance the efficiency and effectiveness of transportation operations.</li>
              <li>To ensure compliance with relevant laws and regulations.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              4. Roles and Responsibilities
            </h2>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              4.1 Users
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Ensure proper use of the TMS and mobile application as per this policy.</li>
              <li>Report any issues or security breaches immediately to the IT department.</li>
              <li>Keep login credentials confidential and secure.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              4.2 IT Department
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Maintain and update the TMS and mobile application.</li>
              <li>Ensure the security and integrity of the system.</li>
              <li>Provide training and support to users.</li>
              <li>Monitor the system for any unauthorized access or unusual activity.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              4.3 Management
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Ensure compliance with this policy.</li>
              <li>Review and update the policy periodically.</li>
              <li>Provide necessary resources for the effective implementation of the TMS and mobile application.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              5. Usage Policy
            </h2>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              5.1 System Access
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Access to the TMS and mobile application is restricted to authorized personnel only.</li>
              <li>Users must use their unique login credentials to access the system.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              5.2 Data Entry and Accuracy
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Users are responsible for ensuring the accuracy of data entered into the TMS.</li>
              <li>Any discrepancies or errors must be reported and corrected promptly.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              5.3 Data Security
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>All data within the TMS and mobile application must be treated as confidential.</li>
              <li>Users must not share data with unauthorized individuals.</li>
              <li>Encryption must be used for sensitive data transmissions.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              5.4 Mobile Application Usage
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Users must ensure their mobile devices are secure and protected with passwords or biometric authentication.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              6. Compliance and Monitoring
            </h2>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              6.1 Compliance
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>All users must comply with this policy.</li>
              <li>Non-compliance may result in disciplinary action, including termination of access or employment.</li>
            </ul>
            <h3 className="text-xl font-heading font-medium text-cyan-300 mt-6">
              6.2 Monitoring
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>The IT department will regularly monitor the usage of the TMS and mobile application to ensure compliance with this policy.</li>
              <li>Any suspicious activity will be investigated promptly.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              7. Training and Support
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>The IT department will provide regular training sessions for all users on the proper use of the TMS and mobile application.</li>
              <li>Support will be available to users for any technical issues or questions.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              8. Policy Review
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>This policy will be reviewed annually and updated as necessary to ensure its effectiveness and relevance.</li>
              <li>Any changes to the policy will be communicated to all users promptly.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-white mt-8">
              9. Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              For any questions or concerns regarding this policy, please contact the IT department at
            </p>
            <div className="text-gray-300 leading-relaxed space-y-1 pl-0">
              <p className="font-medium text-white">S M N Prasanna</p>
              <p>Senior Technical Lead</p>
              <p>Inntri Labs Private LTD</p>
              <p>No 102/3, Srimath Anagarika</p>
              <p>Dharmapala Mawatha, Colombo 07,</p>
              <p>Sri Lanka.</p>
              <p>mobile: +94 76 603 3474</p>
              <p>email: nuwan@inntrilabs.com</p>
              <p>: info@inntrilabs.com</p>
              <p>web: https://inntrilabs.com/</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
