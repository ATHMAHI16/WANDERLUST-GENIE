import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw, Sparkles, Loader2, Zap } from 'lucide-react';
import AdaptationInsights from './AdaptationInsights';

const TranscreationEngine = ({ scenario }) => {
  const [status, setStatus] = useState('idle'); // idle, processing, complete
  const [loadingStep, setLoadingStep] = useState(0);

  // Reset state when scenario changes
  useEffect(() => {
    setStatus('idle');
    setLoadingStep(0);
  }, [scenario.id]);

  const handleTranscreate = () => {
    setStatus('processing');

    // Simulate steps
    setTimeout(() => setLoadingStep(1), 500); // Analyzing
    setTimeout(() => setLoadingStep(2), 1200); // Adapting
    setTimeout(() => {
      setStatus('complete');
      setLoadingStep(0);
    }, 2000);
  };

  const loadingMessages = [
    "Analyzing semantic structure...",
    "Identifying cultural metaphors...",
    "Injecting local context...",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header / Toolbar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="bg-indigo-100 p-1.5 rounded-md">
             <Zap className="w-4 h-4 text-indigo-600" />
           </div>
           <span className="font-semibold text-gray-700">Real-time Adaptation Engine</span>
        </div>

        {status === 'complete' && (
          <button
            onClick={() => setStatus('idle')}
            className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 min-h-[400px]">
        {/* Source Panel */}
        <div className="p-8 flex flex-col bg-slate-50/50">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Input Source</span>
            <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">{scenario.originalLanguage}</span>
          </div>

          <div className="flex-1 font-medium text-xl leading-relaxed text-gray-800">
            "{scenario.originalText}"
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200/60">
            {status === 'idle' ? (
              <button
                onClick={handleTranscreate}
                className="group w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                <span className="font-bold text-lg">Transcreate Content</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <div className="w-full py-4 px-6 bg-gray-100 text-gray-400 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                 <span className="font-medium">Processed</span>
              </div>
            )}
          </div>
        </div>

        {/* Target Panel */}
        <div className="p-8 flex flex-col relative bg-white">
           <div className="mb-4 flex justify-between items-center">
            <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase">Localized Output</span>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{scenario.targetLanguage}</span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {status === 'idle' && (
               <div className="text-center text-gray-400 py-10">
                 <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                   <ArrowRight className="w-8 h-8 text-gray-300" />
                 </div>
                 <p>Waiting for input...</p>
               </div>
            )}

            {status === 'processing' && (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
                <div className="relative mx-auto w-16 h-16 mb-6">
                   <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transcreating...</h3>
                <p className="text-gray-500 h-6 transition-all duration-300">
                  {loadingMessages[loadingStep]}
                </p>
              </div>
            )}

            {status === 'complete' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="font-medium text-xl leading-relaxed text-gray-900 border-l-4 border-indigo-500 pl-6 py-2">
                  "{scenario.transcreatedText}"
                </div>

                <div id="insights-container" className="mt-8">
                   <AdaptationInsights adaptations={scenario.adaptations} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscreationEngine;
