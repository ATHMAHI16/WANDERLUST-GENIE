import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScenarioSelector from './components/ScenarioSelector';
import TranscreationEngine from './components/TranscreationEngine';
import { scenarios } from './data/scenarios';

function App() {
  // State for the currently selected scenario
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);

  const activeScenario = scenarios.find(s => s.id === activeScenarioId);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-8 mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Context-Aware Transcreation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Select a scenario below to see how Sutradhar AI adapts content culturally.
          </p>
        </div>

        <div className="mb-12">
          <ScenarioSelector
            scenarios={scenarios}
            activeId={activeScenarioId}
            onSelect={setActiveScenarioId}
          />
        </div>

        {/* Transcreation Engine */}
        <div className="mb-12">
          <TranscreationEngine scenario={activeScenario} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
