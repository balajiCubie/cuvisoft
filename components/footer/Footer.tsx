import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800  text-white  ">
      <div className="max-w-7xl mx-auto pt-4 sm:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Learn About CuviSoft</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">What Is CuviSoft?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What Is Cloud Computing?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Accessibility</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Inclusion, Diversity & Equity</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What Is DevOps?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What Is a Container?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What Is a Data Lake?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What is Generative AI?</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Cloud Security</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">What's New</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press Releases</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources for CuviSoft</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Getting Started</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Training and Certification</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Solutions Library</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Architecture Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Product and Technical FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Analyst Reports</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Partners</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Developers on CuviSoft</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Developer Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">SDKs & Tools</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">.NET on AWS</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Python on AWS</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Java on AWS</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">PHP on AWS</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">JavaScript on AWS</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Help</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Get Expert Help</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">File a Support Ticket</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft re:Post</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Knowledge Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">AWS Support Overview</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CuviSoft Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">C</a>
            <a href="#" className="text-gray-400 hover:text-white">U</a>
            <a href="#" className="text-gray-400 hover:text-white">V</a>
            <a href="#" className="text-gray-400 hover:text-white">I</a>
            <a href="#" className="text-gray-400 hover:text-white">S</a>
            <a href="#" className="text-gray-400 hover:text-white">O</a>
            <a href="#" className="text-gray-400 hover:text-white">F</a>
            <a href="#" className="text-gray-400 hover:text-white">T</a>
          </div>
        </div>

      </div>
      <div className="text-center mt-5 p-3 px-5 text-black bg-slate-200">
            <a href="#" className="hover:underline">Privacy</a> |
            <a href="#" className="hover:underline"> Accessibility</a> |
            <a href="#" className="hover:underline"> Site Terms</a> |
            <a href="#" className="hover:underline"> Cookie Preferences</a>
            <p className="mt-4">&copy; 2024, CuviSoft Business Processs Management (BPM), Inc. or its affiliates. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
