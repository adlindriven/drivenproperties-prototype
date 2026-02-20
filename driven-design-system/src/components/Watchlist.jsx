import React from 'react';
import { Icon } from './Icon';

export const Watchlist = ({ user, favorites = [], onViewProperty, onRemoveFavorite, onLogout }) => {
    return (
        <div className="min-h-screen bg-cream-50">
            <div className="bg-white border-b border-warm-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-warm-800">My Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{user?.name?.[0] || 'U'}</span>
                            </div>
                            <div>
                                <p className="font-semibold text-warm-800">{user?.name || 'User'}</p>
                                <p className="text-xs text-warm-500">{user?.email || 'user@example.com'}</p>
                            </div>
                        </div>
                        {onLogout && (
                            <button onClick={onLogout} className="text-warm-600 hover:text-warm-800 font-medium">
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 bg-accent-gold text-white rounded-lg font-semibold">
                            ❤️ Favorites ({favorites.length})
                        </button>
                        <button className="w-full text-left px-4 py-3 text-warm-600 hover:bg-white rounded-lg font-medium">
                            ⚖️ Compared
                        </button>
                        <button className="w-full text-left px-4 py-3 text-warm-600 hover:bg-white rounded-lg font-medium">
                            🔍 Saved Searches
                        </button>
                        <button className="w-full text-left px-4 py-3 text-warm-600 hover:bg-white rounded-lg font-medium">
                            🔔 Alerts
                        </button>
                        <button className="w-full text-left px-4 py-3 text-warm-600 hover:bg-white rounded-lg font-medium">
                            ⚙️ Account Settings
                        </button>
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-2xl font-bold text-warm-800 mb-6">My Favorites ({favorites.length})</h2>

                        {favorites.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center border border-warm-200">
                                <div className="w-24 h-24 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Icon name="heart" className="w-12 h-12 text-warm-400" />
                                </div>
                                <h3 className="text-xl font-bold text-warm-800 mb-2">No Favorites Yet</h3>
                                <p className="text-warm-500 mb-6">Start exploring properties and save your favorites here</p>
                                <button className="bg-warm-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-warm-700">
                                    Browse Properties
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {favorites.map(project => (
                                    <div key={project.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-all">
                                        <div className="flex gap-4 p-4">
                                            <img src={project.image} alt={project.name} className="w-48 h-32 object-cover rounded-lg" />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-warm-800 mb-2">{project.name}</h3>
                                                <p className="text-warm-600 mb-2">{project.location} · by {project.developer}</p>
                                                <div className="flex items-center gap-4 text-sm text-warm-600 mb-3">
                                                    <span className="flex items-center gap-1">
                                                        <Icon name="bed" className="w-4 h-4" /> {project.beds} BR
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Icon name="bath" className="w-4 h-4" /> {project.baths}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Icon name="area" className="w-4 h-4" /> {project.sqft} sqft
                                                    </span>
                                                </div>
                                                <p className="text-2xl font-bold text-accent-gold">{project.price}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button onClick={() => onViewProperty && onViewProperty(project)} className="px-4 py-2 bg-warm-800 text-white rounded-lg font-medium hover:bg-warm-700">
                                                    View Details
                                                </button>
                                                <button className="px-4 py-2 border-2 border-warm-200 rounded-lg font-medium hover:border-accent-gold">
                                                    Compare
                                                </button>
                                                <button onClick={() => onRemoveFavorite && onRemoveFavorite(project)} className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
