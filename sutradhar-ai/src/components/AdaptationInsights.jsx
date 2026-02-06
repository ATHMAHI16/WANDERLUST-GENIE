import React from 'react';
import { ArrowRight, Lightbulb, MapPin, User, Quote, Tag } from 'lucide-react';

const AdaptationInsights = ({ adaptations }) => {
  const getTypeIcon = (type) => {
    switch (type) {
        case 'Location': return <MapPin className="w-3 h-3" />;
        case 'Role': return <User className="w-3 h-3" />;
        case 'Metaphor': return <Quote className="w-3 h-3" />;
        default: return <Tag className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-4 h-4 text-amber-600" />
        <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide">AI Reasoning Engine</h4>
      </div>

      <div className="space-y-3">
        {adaptations.map((item, index) => (
          <div key={index} className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-xs text-gray-400 font-mono">
               <span className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                 {getTypeIcon(item.type)} {item.type}
               </span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium mb-1">
              <span className="text-red-500 line-through decoration-red-300 decoration-2">{item.original}</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="text-green-600">{item.new}</span>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed italic">
              "{item.reason}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptationInsights;
