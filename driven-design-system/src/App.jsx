import React, { useState } from 'react';
import { Header } from './components/Header';
import { PropertyCard } from './components/PropertyCard';
import { Watchlist } from './components/Watchlist';
import { ROICalculator } from './components/ROICalculator';
import { useAppState } from './context/AppStateProvider';
import { mockProjects } from './data/mockProperties';

function App() {
  const { watchlist, toggleWatchlist, watchlistCount } = useAppState();
  const [currentView, setCurrentView] = useState('search');
  const [selectedProject, setSelectedProject] = useState(null);
  const user = { name: 'Adlin Antony', email: 'adlin@driven.ae' };

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedProject(null);
  };

  const handleDashboard = () => setCurrentView('dashboard');

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentView('detail');
  };

  // Filter mockProjects based on watchlist ids
  const favoriteProjects = mockProjects.filter(p => watchlist.includes(p.id));

  return (
    <div className="min-h-screen bg-warm-50 font-sans">
      <Header
        onNavigate={handleNavigate}
        watchlistCount={watchlistCount}
        user={user}
        onDashboard={handleDashboard}
      />

      <main className="w-full">
        {currentView === 'search' && (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-2xl font-bold text-warm-800 mb-6">Explore Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProjects.map(project => (
                <PropertyCard
                  key={project.id}
                  project={project}
                  inWatchlist={watchlist.includes(project.id)}
                  onToggleWatchlist={toggleWatchlist}
                  onSelect={handleSelectProject}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'detail' && selectedProject && (
          <div className="max-w-4xl mx-auto px-6 py-8">
            <button onClick={() => setCurrentView('search')} className="text-warm-500 hover:text-warm-800 mb-6 font-medium flex items-center gap-2">
              ← Back to Search
            </button>
            <h1 className="text-3xl font-bold text-warm-800 mb-2">{selectedProject.name}</h1>
            <p className="text-warm-600 mb-8">{selectedProject.location} · by {selectedProject.developer}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-80 object-cover rounded-3xl mb-6 shadow-sm" />
                <div className="flex gap-4 mb-6">
                  <button onClick={() => toggleWatchlist(selectedProject.id)} className={`flex-1 py-3 rounded-xl font-bold border transition-colors ${watchlist.includes(selectedProject.id) ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white text-warm-700 border-warm-200 hover:border-warm-400'}`}>
                    {watchlist.includes(selectedProject.id) ? '♥ Saved' : '♡ Save to Watchlist'}
                  </button>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-3xl border border-warm-200 shadow-sm">
                  <ROICalculator projectPrice={selectedProject.priceNum || 2000000} />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'dashboard' && (
          <Watchlist
            user={user}
            favorites={favoriteProjects}
            onRemoveFavorite={(p) => toggleWatchlist(p.id)}
            onViewProperty={handleSelectProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;
