import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-auto py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sutradhar AI. Built for the Hackathon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
