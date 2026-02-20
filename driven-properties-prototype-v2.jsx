import React, { useState } from 'react';
import { Search, Heart, Building2, TrendingUp, Shield, MapPin, Calendar, ChevronRight, CheckCircle2, Clock, Star, Phone, MessageCircle, Filter, ArrowLeft, Plus, Trash2, Send, Bot, Sparkles, BadgeCheck, FileCheck, Building, Eye, Calculator, BarChart3, X, Map, List, Navigation, Compass, Play, Maximize2, RotateCcw, Layers, Car, Train, Footprints, Briefcase, GraduationCap, ShoppingBag, Plane } from 'lucide-react';

// Driven Properties - Off-Plan Investment Journey Prototype V2
// UPDATED: Map View, Distance Calculator, 3D/Immersive Views
// For: Yield-Focused Investor (HNI) Persona

const mockProjects = [
  {
    id: 1,
    name: "Emaar Beachfront Vista",
    developer: "Emaar Properties",
    developerProjects: 42,
    location: "Dubai Harbour",
    price: "AED 1.85M",
    priceNum: 1850000,
    pricePerSqft: "AED 2,150",
    roi: "8.2%",
    appreciation: "+12.4%",
    completion: "Q4 2026",
    progress: 65,
    stage: "Structure Complete",
    beds: "1-3 BR",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    reraNo: "RERA-2024-0892",
    escrowBank: "Emirates NBD",
    escrowAcc: "****4521",
    verified: true,
    trending: true,
    yieldRating: 4.5,
    amenities: ["Beach Access", "Pool", "Gym", "Concierge"],
    paymentPlan: "60/40",
    handoverDate: "Dec 2026",
    totalUnits: 450,
    soldUnits: 380,
    lat: 25.0800,
    lng: 55.1400,
    has3DTour: true,
    hasVideo: true,
    floorPlan: true,
    milestones: [
      { name: "Ground Breaking", date: "Jan 2024", completed: true },
      { name: "Foundation Complete", date: "Apr 2024", completed: true },
      { name: "Structure 50%", date: "Aug 2024", completed: true },
      { name: "Structure Complete", date: "Dec 2024", completed: true },
      { name: "MEP Installation", date: "Apr 2025", completed: false },
      { name: "Finishing Works", date: "Aug 2025", completed: false },
      { name: "Handover", date: "Dec 2026", completed: false }
    ]
  },
  {
    id: 2,
    name: "Sobha One Tower",
    developer: "Sobha Realty",
    developerProjects: 28,
    location: "Sobha Hartland",
    price: "AED 2.4M",
    priceNum: 2400000,
    pricePerSqft: "AED 1,890",
    roi: "7.8%",
    appreciation: "+9.2%",
    completion: "Q2 2027",
    progress: 42,
    stage: "Podium Level",
    beds: "2-4 BR",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    reraNo: "RERA-2024-1203",
    escrowBank: "FAB",
    escrowAcc: "****7832",
    verified: true,
    trending: false,
    yieldRating: 4.2,
    amenities: ["Lagoon", "Sports Courts", "Kids Area", "Retail"],
    paymentPlan: "70/30",
    handoverDate: "Jun 2027",
    totalUnits: 620,
    soldUnits: 445,
    lat: 25.1850,
    lng: 55.3100,
    has3DTour: true,
    hasVideo: true,
    floorPlan: true,
    milestones: [
      { name: "Ground Breaking", date: "Mar 2024", completed: true },
      { name: "Foundation Complete", date: "Jul 2024", completed: true },
      { name: "Podium Level", date: "Nov 2024", completed: true },
      { name: "Structure 50%", date: "May 2025", completed: false },
      { name: "Structure Complete", date: "Oct 2025", completed: false },
      { name: "Finishing Works", date: "Mar 2026", completed: false },
      { name: "Handover", date: "Jun 2027", completed: false }
    ]
  },
  {
    id: 3,
    name: "Damac Lagoons Villas",
    developer: "DAMAC Properties",
    developerProjects: 55,
    location: "DAMAC Lagoons",
    price: "AED 3.1M",
    priceNum: 3100000,
    pricePerSqft: "AED 1,450",
    roi: "9.1%",
    appreciation: "+15.8%",
    completion: "Q1 2026",
    progress: 78,
    stage: "Finishing Works",
    beds: "4-5 BR Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    reraNo: "RERA-2023-0456",
    escrowBank: "Dubai Islamic Bank",
    escrowAcc: "****2109",
    verified: true,
    trending: true,
    yieldRating: 4.8,
    amenities: ["Private Pool", "Garden", "Lagoon Access", "Community Center"],
    paymentPlan: "50/50",
    handoverDate: "Mar 2026",
    totalUnits: 180,
    soldUnits: 165,
    lat: 25.0300,
    lng: 55.2200,
    has3DTour: true,
    hasVideo: true,
    floorPlan: true,
    milestones: [
      { name: "Ground Breaking", date: "Aug 2023", completed: true },
      { name: "Foundation Complete", date: "Dec 2023", completed: true },
      { name: "Structure Complete", date: "Jun 2024", completed: true },
      { name: "MEP Installation", date: "Sep 2024", completed: true },
      { name: "Finishing Works", date: "Dec 2024", completed: true },
      { name: "Landscaping", date: "Jun 2025", completed: false },
      { name: "Handover", date: "Mar 2026", completed: false }
    ]
  }
];

// Common POI locations for distance calculation
const commonLocations = [
  { id: 'difc', name: 'DIFC', icon: Briefcase, lat: 25.2100, lng: 55.2800 },
  { id: 'dxb', name: 'Dubai Airport (DXB)', icon: Plane, lat: 25.2532, lng: 55.3657 },
  { id: 'mall', name: 'Dubai Mall', icon: ShoppingBag, lat: 25.1972, lng: 55.2744 },
  { id: 'marina', name: 'Dubai Marina', icon: Navigation, lat: 25.0805, lng: 55.1403 },
  { id: 'custom', name: 'Custom Location', icon: MapPin, lat: null, lng: null }
];

// Navigation Component
const TopNav = ({ currentScreen, onNavigate, watchlistCount }) => (
  <nav className="bg-white border-b border-stone-200 px-6 py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-stone-900">DRIVEN</span> <span className="text-stone-500 font-normal">PROPERTIES</span>
        </div>
        <div className="hidden md:flex gap-1">
          {['Buy', 'Rent', 'Commercial'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg transition-all ${
                tab === 'Buy'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('watchlist')}
          className="relative p-2 hover:bg-stone-50 rounded-lg transition-all"
        >
          <Heart className={`w-5 h-5 ${watchlistCount > 0 ? 'fill-amber-600 text-amber-600' : 'text-stone-400'}`} />
          {watchlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {watchlistCount}
            </span>
          )}
        </button>
        <button className="bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-800 transition-all">
          Investor Login
        </button>
      </div>
    </div>
  </nav>
);

// AI Assistant Chip
const AIAssistant = ({ onAsk }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const suggestions = [
    "Show me off-plan projects under 2M with highest ROI",
    "Compare yields in Dubai Marina vs JVC",
    "Which developer has best track record?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 mb-4 w-96 overflow-hidden">
          <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Investment AI Advisor</span>
            </div>
            <p className="text-stone-300 text-sm mt-1">Ask me anything about off-plan investments</p>
          </div>
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about ROI, yields, developers..."
                className="w-full pl-4 pr-10 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
              />
              <Sparkles className="absolute right-3 top-3.5 w-4 h-4 text-amber-600" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-xs text-stone-500 font-medium">SUGGESTED QUERIES</p>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(s)}
                  className="block w-full text-left text-sm text-stone-600 hover:text-amber-700 hover:bg-amber-50 p-2 rounded-lg transition-all"
                >
                  "{s}"
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-stone-800 to-stone-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
      >
        <Bot className="w-6 h-6" />
        {!isOpen && <span className="font-medium pr-1">AI Advisor</span>}
      </button>
    </div>
  );
};

// Trust Badge Component
const TrustBadge = ({ label, value, icon: Icon, verified }) => (
  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
    <Icon className="w-4 h-4 text-emerald-700" />
    <div className="text-sm">
      <span className="text-stone-600">{label}:</span>
      <span className="font-semibold text-stone-900 ml-1">{value}</span>
    </div>
    {verified && <BadgeCheck className="w-4 h-4 text-emerald-600" />}
  </div>
);

// Map Price Pin Component
const MapPricePin = ({ project, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute transform -translate-x-1/2 -translate-y-full transition-all ${
      isSelected ? 'z-20 scale-110' : 'z-10 hover:scale-105'
    }`}
    style={{ left: `${(project.lng - 55.1) * 500 + 50}px`, top: `${(25.3 - project.lat) * 800 + 50}px` }}
  >
    <div className={`px-3 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap shadow-lg ${
      isSelected
        ? 'bg-stone-900 text-white ring-4 ring-white/50'
        : 'bg-white text-stone-900 border border-stone-200'
    }`}>
      {project.price}
      {project.trending && <span className="ml-1">🔥</span>}
    </div>
    <div className={`w-3 h-3 rotate-45 mx-auto -mt-1.5 ${
      isSelected ? 'bg-stone-900' : 'bg-white border-r border-b border-stone-200'
    }`} />
  </button>
);

// Map View Component
const MapView = ({ projects, onSelectProject, selectedProject, watchlist, onToggleWatchlist }) => {
  const [mapStyle, setMapStyle] = useState('default');

  return (
    <div className="relative h-[500px] bg-slate-100 rounded-xl overflow-hidden">
      {/* Map Background (Mockup) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-100 to-emerald-50">
        {/* Simulated map grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Simulated water/coastline */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200/50 to-transparent" />

        {/* Simulated roads */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-slate-300" />
        <div className="absolute top-1/2 left-1/4 bottom-0 w-1 bg-slate-300" />
        <div className="absolute top-1/4 left-1/2 bottom-1/4 w-1 bg-slate-300" />

        {/* Area Labels */}
        <div className="absolute top-20 left-20 text-slate-400 text-xs font-medium">Dubai Marina</div>
        <div className="absolute top-40 right-32 text-slate-400 text-xs font-medium">Downtown Dubai</div>
        <div className="absolute bottom-40 left-1/3 text-slate-400 text-xs font-medium">DAMAC Lagoons</div>
        <div className="absolute top-32 right-20 text-slate-400 text-xs font-medium">Sobha Hartland</div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-50 transition-all">
          <Plus className="w-5 h-5 text-slate-600" />
        </button>
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-50 transition-all">
          <span className="text-slate-600 font-bold text-sm">−</span>
        </button>
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-50 transition-all mt-2">
          <Compass className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      {/* Map Style Toggle */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setMapStyle('default')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            mapStyle === 'default' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 shadow-md'
          }`}
        >
          Default
        </button>
        <button
          onClick={() => setMapStyle('satellite')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            mapStyle === 'satellite' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 shadow-md'
          }`}
        >
          Satellite
        </button>
      </div>

      {/* Lasso/Draw Tool */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-all" title="Draw to search">
          <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
          </svg>
        </button>
        <span className="text-xs text-slate-500 pr-2">Draw to search</span>
      </div>

      {/* Price Pins */}
      {projects.map(project => (
        <MapPricePin
          key={project.id}
          project={project}
          isSelected={selectedProject?.id === project.id}
          onClick={() => onSelectProject(project)}
        />
      ))}

      {/* Selected Project Card Popup */}
      {selectedProject && (
        <div className="absolute bottom-4 right-4 w-80 bg-white rounded-xl shadow-xl overflow-hidden">
          <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-32 object-cover" />
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-slate-800">{selectedProject.name}</h3>
                <p className="text-sm text-slate-500">{selectedProject.location}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onToggleWatchlist(selectedProject); }}
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-all"
              >
                <Heart className={`w-5 h-5 ${watchlist.some(w => w.id === selectedProject.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
              </button>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <span className="font-bold text-slate-900">{selectedProject.price}</span>
              <span className="text-emerald-600 font-semibold">{selectedProject.roi} ROI</span>
            </div>
            <button className="w-full mt-3 bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition-all">
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Screen 1: Off-Plan Search & Discovery with Map View
const OffPlanSearchScreen = ({ onSelectProject, watchlist, onToggleWatchlist }) => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [selectedMapProject, setSelectedMapProject] = useState(null);
  const [sortBy, setSortBy] = useState('roi');
  const [searchTab, setSearchTab] = useState('off-plan');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>INVESTOR-FOCUSED DISCOVERY</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Off-Plan Investment Opportunities</h1>
          <p className="text-stone-300 text-lg mb-8">Data-driven selection for maximum ROI potential</p>

          {/* Advanced Search Bar with Tabs */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl">
            {/* Search Type Tabs */}
            <div className="flex border-b border-stone-200">
              {[
                { id: 'buy', label: 'Buy', icon: Building2 },
                { id: 'rent', label: 'Rent', icon: Building },
                { id: 'off-plan', label: 'Off-Plan', icon: TrendingUp },
                { id: 'commercial', label: 'Commercial', icon: Building2 }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSearchTab(tab.id)}
                  className={`flex-1 px-6 py-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    searchTab === tab.id
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="p-4">
              {/* Main Search Input */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Location, project, or developer..."
                    className="w-full pl-12 pr-4 py-3 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>
                <button className="bg-stone-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-stone-800 transition-all flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>

              {/* Advanced Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Property Type */}
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none cursor-pointer"
                  >
                    <option value="all">All Property Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-stone-400 pointer-events-none" />
                </div>

                {/* Bedrooms */}
                <div className="relative">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none cursor-pointer"
                  >
                    <option value="all">Bedrooms</option>
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-stone-400 pointer-events-none" />
                </div>

                {/* Price Range */}
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none cursor-pointer"
                  >
                    <option value="all">Price Range</option>
                    <option value="0-1m">Up to 1M AED</option>
                    <option value="1m-2m">1M - 2M AED</option>
                    <option value="2m-3m">2M - 3M AED</option>
                    <option value="3m-5m">3M - 5M AED</option>
                    <option value="5m+">5M+ AED</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-stone-400 pointer-events-none" />
                </div>

                {/* More Filters */}
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-50 transition-all font-medium">
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {['High Yield (8%+)', 'Under 2M AED', 'Ready 2026', 'Payment Plan 60/40', 'Waterfront', 'DLD Verified'].map(filter => (
              <button
                key={filter}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-full text-sm text-white transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-stone-900">
              {mockProjects.length} Investment-Grade Projects
            </h2>
            <p className="text-stone-500 text-sm">Sorted by highest projected yield</p>
          </div>
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center bg-stone-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'
                }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'map' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'
                }`}
              >
                <Map className="w-4 h-4" />
                Map
              </button>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-stone-900"
            >
              <option value="roi">Highest ROI</option>
              <option value="appreciation">Best Appreciation</option>
              <option value="completion">Nearest Completion</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Map View */}
        {viewMode === 'map' && (
          <div className="mb-8">
            <MapView
              projects={mockProjects}
              onSelectProject={setSelectedMapProject}
              selectedProject={selectedMapProject}
              watchlist={watchlist}
              onToggleWatchlist={onToggleWatchlist}
            />
          </div>
        )}

        {/* Project Cards (List View) */}
        {viewMode === 'list' && (
          <div className="grid gap-6">
            {mockProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg hover:border-amber-600 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-80 relative">
                    <img src={project.image} alt={project.name} className="w-full h-64 md:h-full object-cover" />
                    {project.trending && (
                      <div className="absolute top-4 left-4 bg-white text-stone-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                        <TrendingUp className="w-3 h-3" />
                        Hot Deal
                      </div>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggleWatchlist(project); }}
                      className="absolute top-4 right-4 bg-white/95 p-2 rounded-full hover:bg-white transition-all shadow-md"
                    >
                      <Heart className={`w-5 h-5 ${watchlist.some(w => w.id === project.id) ? 'fill-amber-600 text-amber-600' : 'text-stone-400'}`} />
                    </button>
                    {/* Media Badges */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {project.has3DTour && (
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Layers className="w-3 h-3" /> 3D Tour
                        </span>
                      )}
                      {project.hasVideo && (
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Play className="w-3 h-3" /> Video
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-stone-900">{project.name}</h3>
                          {project.verified && (
                            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                              <Shield className="w-3 h-3" /> DLD Verified
                            </span>
                          )}
                        </div>
                        <p className="text-stone-600 flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {project.developer} · {project.developerProjects} delivered projects
                        </p>
                        <p className="text-stone-600 flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-stone-900">{project.price}</p>
                        <p className="text-stone-500 text-sm">{project.pricePerSqft}/sqft</p>
                      </div>
                    </div>

                    {/* Investment Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4 bg-stone-50 border border-stone-100 rounded-xl">
                      <div>
                        <p className="text-stone-600 text-xs uppercase tracking-wide">Expected ROI</p>
                        <p className="text-xl font-bold text-emerald-700">{project.roi}</p>
                      </div>
                      <div>
                        <p className="text-stone-600 text-xs uppercase tracking-wide">Capital Growth</p>
                        <p className="text-xl font-bold text-amber-700">{project.appreciation}</p>
                      </div>
                      <div>
                        <p className="text-stone-600 text-xs uppercase tracking-wide">Completion</p>
                        <p className="text-lg font-semibold text-stone-900">{project.completion}</p>
                      </div>
                      <div>
                        <p className="text-stone-600 text-xs uppercase tracking-wide">Construction</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-amber-600 to-emerald-600 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-stone-900">{project.progress}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-4 text-sm text-stone-600">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {project.beds}
                        </span>
                        <span>Payment: {project.paymentPlan}</span>
                        <span>{project.soldUnits}/{project.totalUnits} Sold</span>
                      </div>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-stone-800 transition-all"
                      >
                        View Investment Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// 3D Tour / Immersive View Modal
const ImmersiveViewModal = ({ project, onClose, activeView }) => {
  const [currentView, setCurrentView] = useState(activeView || '3d');

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/80">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="text-white hover:text-amber-400 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-white font-semibold">{project.name}</h2>
            <p className="text-slate-400 text-sm">{project.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentView('3d')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === '3d' ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            3D Tour
          </button>
          <button
            onClick={() => setCurrentView('video')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'video' ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-white'
            }`}
          >
            <Play className="w-4 h-4" />
            Video
          </button>
          <button
            onClick={() => setCurrentView('floorplan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'floorplan' ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-white'
            }`}
          >
            <Map className="w-4 h-4" />
            Floor Plan
          </button>
        </div>
      </div>

      {/* Main View */}
      <div className="flex-1 relative">
        {currentView === '3d' && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Mock 3D Tour View */}
            <img
              src={project.image}
              alt="3D Tour"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-all">
                  <RotateCcw className="w-10 h-10 text-white" />
                </div>
                <p className="text-white text-lg font-medium">Drag to explore 360° view</p>
                <p className="text-slate-400 text-sm">Use mouse or touch to navigate</p>
              </div>
            </div>
            {/* Navigation Hotspots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {['Living Room', 'Kitchen', 'Bedroom', 'Balcony', 'Bathroom'].map((room, i) => (
                <button
                  key={room}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0 ? 'bg-amber-500 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
            {/* Fullscreen Toggle */}
            <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        )}

        {currentView === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <img
              src={project.image}
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-400 transition-all">
                <Play className="w-8 h-8 text-slate-900 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-white/30 rounded-full">
                    <div className="w-1/3 h-full bg-amber-500 rounded-full" />
                  </div>
                  <span className="text-white text-sm">2:34 / 5:20</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'floorplan' && (
          <div className="absolute inset-0 flex items-center justify-center bg-white p-8">
            {/* Mock Floor Plan */}
            <div className="max-w-4xl w-full">
              <div className="aspect-video bg-slate-100 rounded-xl p-8 relative">
                {/* Simplified floor plan mockup */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Outer walls */}
                  <rect x="20" y="20" width="360" height="260" fill="none" stroke="#1e293b" strokeWidth="4"/>

                  {/* Living Room */}
                  <rect x="20" y="20" width="200" height="160" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"/>
                  <text x="120" y="100" textAnchor="middle" className="text-xs fill-slate-500">Living Room</text>
                  <text x="120" y="115" textAnchor="middle" className="text-xs fill-slate-400">24 sqm</text>

                  {/* Kitchen */}
                  <rect x="220" y="20" width="160" height="100" fill="#fef3c7" stroke="#cbd5e1" strokeWidth="2"/>
                  <text x="300" y="70" textAnchor="middle" className="text-xs fill-slate-500">Kitchen</text>
                  <text x="300" y="85" textAnchor="middle" className="text-xs fill-slate-400">12 sqm</text>

                  {/* Bedroom */}
                  <rect x="20" y="180" width="150" height="100" fill="#dbeafe" stroke="#cbd5e1" strokeWidth="2"/>
                  <text x="95" y="230" textAnchor="middle" className="text-xs fill-slate-500">Bedroom</text>
                  <text x="95" y="245" textAnchor="middle" className="text-xs fill-slate-400">18 sqm</text>

                  {/* Bathroom */}
                  <rect x="170" y="180" width="80" height="100" fill="#e0f2fe" stroke="#cbd5e1" strokeWidth="2"/>
                  <text x="210" y="230" textAnchor="middle" className="text-xs fill-slate-500">Bath</text>
                  <text x="210" y="245" textAnchor="middle" className="text-xs fill-slate-400">6 sqm</text>

                  {/* Balcony */}
                  <rect x="250" y="120" width="130" height="160" fill="#dcfce7" stroke="#cbd5e1" strokeWidth="2"/>
                  <text x="315" y="200" textAnchor="middle" className="text-xs fill-slate-500">Balcony</text>
                  <text x="315" y="215" textAnchor="middle" className="text-xs fill-slate-400">15 sqm</text>

                  {/* Door indicators */}
                  <rect x="95" y="175" width="30" height="10" fill="#f59e0b"/>
                  <rect x="165" y="215" width="10" height="30" fill="#f59e0b"/>
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-100 border border-slate-300 rounded"></span> Living</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-100 border border-amber-300 rounded"></span> Kitchen</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></span> Bedroom</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-100 border border-emerald-300 rounded"></span> Balcony</span>
                </div>

                {/* Total Area */}
                <div className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg">
                  <p className="text-xs text-slate-400">Total Area</p>
                  <p className="font-bold">75 sqm / 807 sqft</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Distance Calculator Component
const DistanceCalculator = ({ project }) => {
  const [selectedLocation, setSelectedLocation] = useState(commonLocations[0]);
  const [customAddress, setCustomAddress] = useState('');
  const [travelMode, setTravelMode] = useState('car');

  // Mock distance calculations
  const getDistance = () => {
    const distances = {
      'difc': { km: 25, car: 28, metro: 35, walk: 180 },
      'dxb': { km: 32, car: 35, metro: 45, walk: 240 },
      'mall': { km: 22, car: 25, metro: 30, walk: 160 },
      'marina': { km: 5, car: 8, metro: 15, walk: 45 },
      'custom': { km: 15, car: 20, metro: 28, walk: 120 }
    };
    return distances[selectedLocation.id] || distances['custom'];
  };

  const distance = getDistance();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-blue-600" />
        Distance Calculator
      </h2>

      {/* Location Selector */}
      <div className="space-y-3 mb-4">
        <label className="text-sm text-slate-600">Calculate distance to:</label>
        <div className="grid grid-cols-2 gap-2">
          {commonLocations.map(loc => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc)}
              className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                selectedLocation.id === loc.id
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <loc.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{loc.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Address Input */}
      {selectedLocation.id === 'custom' && (
        <div className="mb-4">
          <input
            type="text"
            value={customAddress}
            onChange={(e) => setCustomAddress(e.target.value)}
            placeholder="Enter address or landmark..."
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      )}

      {/* Travel Mode Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setTravelMode('car')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            travelMode === 'car' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          <Car className="w-4 h-4" />
          Car
        </button>
        <button
          onClick={() => setTravelMode('metro')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            travelMode === 'metro' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          <Train className="w-4 h-4" />
          Metro
        </button>
        <button
          onClick={() => setTravelMode('walk')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            travelMode === 'walk' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          <Footprints className="w-4 h-4" />
          Walk
        </button>
      </div>

      {/* Results */}
      <div className="bg-blue-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600">Distance</span>
          <span className="text-xl font-bold text-slate-900">{distance.km} km</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Estimated Time</span>
          <span className="text-xl font-bold text-blue-600">
            {travelMode === 'car' && `${distance.car} min`}
            {travelMode === 'metro' && `${distance.metro} min`}
            {travelMode === 'walk' && `${distance.walk} min`}
          </span>
        </div>
      </div>

      {/* View on Map Button */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all">
        <Map className="w-4 h-4" />
        View Route on Map
      </button>
    </div>
  );
};

// Screen 2: Project Detail with Verification, 3D View & Distance Calculator
const ProjectDetailScreen = ({ project, onBack, onAddToWatchlist, inWatchlist }) => {
  const [selectedUnit, setSelectedUnit] = useState('2BR');
  const [rentalIncome, setRentalIncome] = useState(120000);
  const [holdingPeriod, setHoldingPeriod] = useState(5);
  const [showImmersiveView, setShowImmersiveView] = useState(false);
  const [immersiveViewType, setImmersiveViewType] = useState('3d');

  const calculateROI = () => {
    const annualYield = (rentalIncome / project.priceNum) * 100;
    const totalReturn = annualYield * holdingPeriod;
    return { annualYield: annualYield.toFixed(1), totalReturn: totalReturn.toFixed(1) };
  };

  const roi = calculateROI();

  const openImmersiveView = (type) => {
    setImmersiveViewType(type);
    setShowImmersiveView(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Immersive View Modal */}
      {showImmersiveView && (
        <ImmersiveViewModal
          project={project}
          onClose={() => setShowImmersiveView(false)}
          activeView={immersiveViewType}
        />
      )}

      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>
        </div>
      </div>

      {/* Hero Image with 3D/Video Options */}
      <div className="relative h-96">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Media Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => openImmersiveView('3d')}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-white transition-all"
          >
            <Layers className="w-4 h-4" />
            3D Tour
          </button>
          <button
            onClick={() => openImmersiveView('video')}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-white transition-all"
          >
            <Play className="w-4 h-4" />
            Video
          </button>
          <button
            onClick={() => openImmersiveView('floorplan')}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-white transition-all"
          >
            <Map className="w-4 h-4" />
            Floor Plan
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              {project.verified && (
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Shield className="w-4 h-4" /> DLD Verified Project
                </span>
              )}
              {project.trending && (
                <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> High Demand
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
            <p className="text-slate-300 text-lg">{project.location} · by {project.developer}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Verification Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                Project Verification & Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <TrustBadge label="RERA Registration" value={project.reraNo} icon={FileCheck} verified />
                <TrustBadge label="Escrow Bank" value={project.escrowBank} icon={Building2} verified />
                <TrustBadge label="Escrow Account" value={project.escrowAcc} icon={CheckCircle2} verified />
                <TrustBadge label="Developer Track Record" value={`${project.developerProjects} Projects`} icon={Star} verified />
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium mt-4 hover:underline">
                Verify on DLD Portal <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Construction Progress Tracker */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-600" />
                Construction Progress Tracker
              </h2>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Overall Progress</span>
                  <span className="text-2xl font-bold text-amber-600">{project.progress}%</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-2">Current Stage: <span className="font-semibold text-slate-700">{project.stage}</span></p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 last:pb-0">
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-400'
                      }`}>
                        {milestone.completed ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                      </div>
                      {index < project.milestones.length - 1 && (
                        <div className={`absolute left-4 top-8 w-0.5 h-full -ml-px ${
                          milestone.completed ? 'bg-emerald-500' : 'bg-slate-200'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${milestone.completed ? 'text-slate-800' : 'text-slate-500'}`}>
                        {milestone.name}
                      </p>
                      <p className="text-sm text-slate-500">{milestone.date}</p>
                    </div>
                    {milestone.completed && (
                      <span className="text-emerald-600 text-sm font-medium">Complete</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Distance Calculator */}
            <DistanceCalculator project={project} />

            {/* Market Data */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Market Analysis - {project.location}
              </h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">{project.appreciation}</p>
                  <p className="text-sm text-slate-600 mt-1">3-Year Price Growth</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-600">{project.roi}</p>
                  <p className="text-sm text-slate-600 mt-1">Average Rental Yield</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl">
                  <p className="text-3xl font-bold text-amber-600">{Math.round(project.soldUnits/project.totalUnits*100)}%</p>
                  <p className="text-sm text-slate-600 mt-1">Units Sold</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - ROI Calculator & CTA */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-500">Starting From</p>
                <button
                  onClick={() => onAddToWatchlist(project)}
                  className={`p-2 rounded-lg transition-all ${
                    inWatchlist ? 'bg-red-50 text-red-500' : 'hover:bg-slate-100 text-slate-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWatchlist ? 'fill-current' : ''}`} />
                </button>
              </div>
              <p className="text-3xl font-bold text-slate-900">{project.price}</p>
              <p className="text-slate-500">{project.pricePerSqft}/sqft · {project.beds}</p>

              {/* Quick View Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <button
                  onClick={() => openImmersiveView('3d')}
                  className="flex flex-col items-center gap-1 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all"
                >
                  <Layers className="w-5 h-5 text-amber-600" />
                  <span className="text-xs text-slate-600">3D Tour</span>
                </button>
                <button
                  onClick={() => openImmersiveView('video')}
                  className="flex flex-col items-center gap-1 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all"
                >
                  <Play className="w-5 h-5 text-amber-600" />
                  <span className="text-xs text-slate-600">Video</span>
                </button>
                <button
                  onClick={() => openImmersiveView('floorplan')}
                  className="flex flex-col items-center gap-1 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all"
                >
                  <Map className="w-5 h-5 text-amber-600" />
                  <span className="text-xs text-slate-600">Floor Plan</span>
                </button>
              </div>

              {/* ROI Calculator */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-600" />
                  ROI Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-stone-600">Expected Annual Rent (AED)</label>
                    <input
                      type="range"
                      min="80000"
                      max="200000"
                      step="5000"
                      value={rentalIncome}
                      onChange={(e) => setRentalIncome(Number(e.target.value))}
                      className="w-full mt-2 accent-amber-700"
                    />
                    <p className="text-right font-semibold text-stone-900">AED {rentalIncome.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm text-stone-600">Holding Period (Years)</label>
                    <div className="flex gap-2 mt-2">
                      {[3, 5, 7, 10].map(y => (
                        <button
                          key={y}
                          onClick={() => setHoldingPeriod(y)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            holdingPeriod === y
                              ? 'bg-stone-900 text-white'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200'
                          }`}
                        >
                          {y}y
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-700">Annual Yield</span>
                    <span className="font-bold text-emerald-700">{roi.annualYield}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-700">{holdingPeriod}-Year Return</span>
                    <span className="font-bold text-emerald-700">{roi.totalReturn}%</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-emerald-700 text-white py-3 rounded-full font-semibold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </button>
                <button className="w-full bg-stone-900 text-white py-3 rounded-full font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Calendar className="w-5 h-5" />
                  Schedule Site Visit
                </button>
                <button className="w-full border border-stone-200 text-stone-700 py-3 rounded-full font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Screen 3: Watchlist & Bulk Inquiry (unchanged from v1)
const WatchlistScreen = ({ watchlist, onRemove, onBack, onViewProject }) => {
  const [selectedForInquiry, setSelectedForInquiry] = useState([]);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const toggleSelection = (id) => {
    setSelectedForInquiry(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedForInquiry.length === watchlist.length) {
      setSelectedForInquiry([]);
    } else {
      setSelectedForInquiry(watchlist.map(p => p.id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Investment Watchlist</h1>
              <p className="text-slate-500 text-sm">{watchlist.length} properties saved</p>
            </div>
          </div>
          {watchlist.length > 0 && (
            <button
              onClick={() => setShowInquiryModal(true)}
              disabled={selectedForInquiry.length === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all ${
                selectedForInquiry.length > 0
                  ? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
              Bulk Inquiry ({selectedForInquiry.length})
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {watchlist.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-600 mb-2">Your watchlist is empty</h2>
            <p className="text-slate-500 mb-6">Save properties to compare and track your investment opportunities</p>
            <button
              onClick={onBack}
              className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all"
            >
              Browse Off-Plan Projects
            </button>
          </div>
        ) : (
          <>
            {/* Selection Header */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedForInquiry.length === watchlist.length}
                  onChange={selectAll}
                  className="w-5 h-5 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                />
                <span className="text-slate-600">Select all for portfolio inquiry</span>
              </label>
              <button className="text-slate-600 hover:text-slate-900 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Compare Selected
              </button>
            </div>

            {/* Watchlist Cards */}
            <div className="grid gap-4">
              {watchlist.map(project => (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${
                    selectedForInquiry.includes(project.id)
                      ? 'border-amber-500 ring-2 ring-amber-200'
                      : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={selectedForInquiry.includes(project.id)}
                      onChange={() => toggleSelection(project.id)}
                      className="w-5 h-5 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                    />
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-24 h-20 object-cover rounded-lg cursor-pointer"
                      onClick={() => onViewProject(project)}
                    />
                    <div className="flex-1">
                      <h3
                        className="font-semibold text-slate-800 hover:text-amber-600 cursor-pointer"
                        onClick={() => onViewProject(project)}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-500">{project.location} · {project.developer}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-lg font-bold text-slate-800">{project.price}</span>
                        <span className="text-emerald-600 font-semibold">{project.roi} ROI</span>
                        <span className="text-amber-600 font-semibold">{project.appreciation}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-2">
                        <span className="text-slate-500 text-sm">Progress:</span>
                        <span className="font-semibold ml-1">{project.progress}%</span>
                      </div>
                      <button
                        onClick={() => onRemove(project.id)}
                        className="text-slate-400 hover:text-red-500 p-2 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4">Portfolio Summary</h3>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-slate-400 text-sm">Total Value</p>
                  <p className="text-2xl font-bold">
                    AED {(watchlist.reduce((sum, p) => sum + p.priceNum, 0) / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Avg. ROI</p>
                  <p className="text-2xl font-bold text-emerald-400">
                    {(watchlist.reduce((sum, p) => sum + parseFloat(p.roi), 0) / watchlist.length).toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Properties</p>
                  <p className="text-2xl font-bold">{watchlist.length}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Earliest Handover</p>
                  <p className="text-2xl font-bold">
                    {watchlist.sort((a, b) => new Date(a.handoverDate) - new Date(b.handoverDate))[0]?.completion}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bulk Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Portfolio Inquiry</h2>
              <button onClick={() => setShowInquiryModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-600 mb-4">
              You're inquiring about <strong>{selectedForInquiry.length} properties</strong> with a combined value of{' '}
              <strong>AED {(watchlist.filter(p => selectedForInquiry.includes(p.id)).reduce((sum, p) => sum + p.priceNum, 0) / 1000000).toFixed(1)}M</strong>
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="tel"
                placeholder="Phone (WhatsApp)"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                placeholder="Additional Notes (Investment timeline, budget flexibility, etc.)"
                rows={3}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button className="w-full mt-6 bg-amber-500 text-slate-900 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Submit Portfolio Inquiry
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              A dedicated investment advisor will contact you within 2 hours
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
export default function DrivenPropertiesPrototypeV2() {
  const [currentScreen, setCurrentScreen] = useState('search');
  const [selectedProject, setSelectedProject] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentScreen('detail');
  };

  const handleToggleWatchlist = (project) => {
    setWatchlist(prev => {
      if (prev.some(p => p.id === project.id)) {
        return prev.filter(p => p.id !== project.id);
      }
      return [...prev, project];
    });
  };

  const handleRemoveFromWatchlist = (id) => {
    setWatchlist(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <TopNav
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        watchlistCount={watchlist.length}
      />

      {currentScreen === 'search' && (
        <OffPlanSearchScreen
          onSelectProject={handleSelectProject}
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
      )}

      {currentScreen === 'detail' && selectedProject && (
        <ProjectDetailScreen
          project={selectedProject}
          onBack={() => setCurrentScreen('search')}
          onAddToWatchlist={handleToggleWatchlist}
          inWatchlist={watchlist.some(p => p.id === selectedProject.id)}
        />
      )}

      {currentScreen === 'watchlist' && (
        <WatchlistScreen
          watchlist={watchlist}
          onRemove={handleRemoveFromWatchlist}
          onBack={() => setCurrentScreen('search')}
          onViewProject={handleSelectProject}
        />
      )}

      <AIAssistant />
    </div>
  );
}
