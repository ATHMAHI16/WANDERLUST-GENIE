import React from 'react';
import { Sparkles, Languages } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Sutradhar AI</h1>
              <p className="text-xs text-gray-500 font-medium">The AI Narrator for Bharat</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              <Sparkles className="w-3 h-3 mr-1" />
              v1.0 Hackathon MVP
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
