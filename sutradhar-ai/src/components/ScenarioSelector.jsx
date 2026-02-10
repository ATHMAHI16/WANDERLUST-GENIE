import React from 'react';
import { Trophy, TrendingUp, Film, CheckCircle2 } from 'lucide-react';

const ScenarioSelector = ({ scenarios, activeId, onSelect }) => {
  const getIcon = (category) => {
    switch (category) {
      case 'Sports': return <Trophy className="w-5 h-5" />;
      case 'Finance': return <TrendingUp className="w-5 h-5" />;
      case 'Pop Culture': return <Film className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Choose a Demo Scenario</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              onClick={() => onSelect(scenario.id)}
              className={`
                relative p-4 rounded-xl text-left transition-all duration-200 border-2
                flex items-start gap-4 hover:shadow-md
                ${isActive
                  ? 'border-indigo-600 bg-indigo-50 shadow-sm ring-1 ring-indigo-600'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
                }
              `}
            >
              <div className={`
                p-2 rounded-lg shrink-0
                ${isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}
              `}>
                {getIcon(scenario.category)}
              </div>

              <div className="flex-1">
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${isActive ? 'text-indigo-700' : 'text-gray-500'}`}>
                  {scenario.category}
                </p>
                <h4 className={`font-bold text-sm ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                  {scenario.title}
                </h4>
              </div>

              {isActive && (
                <div className="absolute top-3 right-3 text-indigo-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScenarioSelector;
