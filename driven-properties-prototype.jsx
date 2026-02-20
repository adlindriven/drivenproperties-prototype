import React, { useState } from 'react';
import { Search, Heart, Building2, TrendingUp, Shield, MapPin, Calendar, ChevronRight, CheckCircle2, Clock, Star, Phone, MessageCircle, Filter, ArrowLeft, Plus, Trash2, Send, Bot, Sparkles, BadgeCheck, FileCheck, Building, Eye, Calculator, BarChart3, X } from 'lucide-react';

// Driven Properties - Off-Plan Investment Journey Prototype
// For: Yield-Focused Investor (HNI) Persona
// Flow: Off-Plan Search → Project Verification → Construction Tracker → Bulk Inquiry

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

// Navigation Component
const TopNav = ({ currentScreen, onNavigate, watchlistCount }) => (
  <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-amber-400">DRIVEN</span> PROPERTIES
        </div>
        <div className="hidden md:flex gap-1">
          {['Buy', 'Rent', 'Off-Plan', 'Commercial'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg transition-all ${
                tab === 'Off-Plan'
                  ? 'bg-amber-500 text-slate-900 font-semibold'
                  : 'hover:bg-slate-800'
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
          className="relative p-2 hover:bg-slate-800 rounded-lg transition-all"
        >
          <Heart className={`w-5 h-5 ${watchlistCount > 0 ? 'fill-amber-400 text-amber-400' : ''}`} />
          {watchlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {watchlistCount}
            </span>
          )}
        </button>
        <button className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all">
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
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 mb-4 w-96 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Investment AI Advisor</span>
            </div>
            <p className="text-amber-100 text-sm mt-1">Ask me anything about off-plan investments</p>
          </div>
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about ROI, yields, developers..."
                className="w-full pl-4 pr-10 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              <Sparkles className="absolute right-3 top-3.5 w-4 h-4 text-amber-500" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-xs text-slate-500 font-medium">SUGGESTED QUERIES</p>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(s)}
                  className="block w-full text-left text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 p-2 rounded-lg transition-all"
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
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
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
    <Icon className="w-4 h-4 text-emerald-600" />
    <div className="text-sm">
      <span className="text-slate-500">{label}:</span>
      <span className="font-semibold text-slate-800 ml-1">{value}</span>
    </div>
    {verified && <BadgeCheck className="w-4 h-4 text-emerald-500" />}
  </div>
);

// Screen 1: Off-Plan Search & Discovery
const OffPlanSearchScreen = ({ onSelectProject, watchlist, onToggleWatchlist }) => {
  const [priceRange, setPriceRange] = useState([1000000, 5000000]);
  const [sortBy, setSortBy] = useState('roi');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>INVESTOR-FOCUSED DISCOVERY</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Off-Plan Investment Opportunities</h1>
          <p className="text-slate-400 text-lg mb-8">Data-driven selection for maximum ROI potential</p>

          {/* Smart Search Bar */}
          <div className="bg-white rounded-2xl p-2 flex items-center gap-2 max-w-4xl">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by project, developer, or area..."
                className="w-full py-3 outline-none text-slate-800"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all">
              Search
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {['High Yield (8%+)', 'Under 2M AED', 'Ready 2026', 'Payment Plan 60/40', 'Waterfront'].map(filter => (
              <button
                key={filter}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-sm transition-all"
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
            <h2 className="text-xl font-semibold text-slate-800">
              {mockProjects.length} Investment-Grade Projects
            </h2>
            <p className="text-slate-500 text-sm">Sorted by highest projected yield</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="roi">Highest ROI</option>
              <option value="appreciation">Best Appreciation</option>
              <option value="completion">Nearest Completion</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6">
          {mockProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-80 relative">
                  <img src={project.image} alt={project.name} className="w-full h-64 md:h-full object-cover" />
                  {project.trending && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleWatchlist(project); }}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all"
                  >
                    <Heart className={`w-5 h-5 ${watchlist.some(w => w.id === project.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                        {project.verified && (
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                            <Shield className="w-3 h-3" /> DLD Verified
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {project.developer} · {project.developerProjects} delivered projects
                      </p>
                      <p className="text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-800">{project.price}</p>
                      <p className="text-slate-500 text-sm">{project.pricePerSqft}/sqft</p>
                    </div>
                  </div>

                  {/* Investment Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4 bg-slate-50 rounded-xl">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">Expected ROI</p>
                      <p className="text-xl font-bold text-emerald-600">{project.roi}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">Capital Growth</p>
                      <p className="text-xl font-bold text-amber-600">{project.appreciation}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">Completion</p>
                      <p className="text-lg font-semibold text-slate-800">{project.completion}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">Construction</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{project.progress}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {project.beds}
                      </span>
                      <span>Payment: {project.paymentPlan}</span>
                      <span>{project.soldUnits}/{project.totalUnits} Sold</span>
                    </div>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition-all"
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
      </div>
    </div>
  );
};

// Screen 2: Project Detail with Verification & ROI Calculator
const ProjectDetailScreen = ({ project, onBack, onAddToWatchlist, inWatchlist }) => {
  const [selectedUnit, setSelectedUnit] = useState('2BR');
  const [rentalIncome, setRentalIncome] = useState(120000);
  const [holdingPeriod, setHoldingPeriod] = useState(5);

  const calculateROI = () => {
    const annualYield = (rentalIncome / project.priceNum) * 100;
    const totalReturn = annualYield * holdingPeriod;
    return { annualYield: annualYield.toFixed(1), totalReturn: totalReturn.toFixed(1) };
  };

  const roi = calculateROI();

  return (
    <div className="min-h-screen bg-slate-50">
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

      {/* Hero Image */}
      <div className="relative h-96">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
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

              {/* ROI Calculator */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-600" />
                  ROI Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-600">Expected Annual Rent (AED)</label>
                    <input
                      type="range"
                      min="80000"
                      max="200000"
                      step="5000"
                      value={rentalIncome}
                      onChange={(e) => setRentalIncome(Number(e.target.value))}
                      className="w-full mt-2 accent-amber-500"
                    />
                    <p className="text-right font-semibold">AED {rentalIncome.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Holding Period (Years)</label>
                    <div className="flex gap-2 mt-2">
                      {[3, 5, 7, 10].map(y => (
                        <button
                          key={y}
                          onClick={() => setHoldingPeriod(y)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            holdingPeriod === y
                              ? 'bg-amber-500 text-slate-900'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {y}y
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Annual Yield</span>
                    <span className="font-bold text-emerald-600">{roi.annualYield}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{holdingPeriod}-Year Return</span>
                    <span className="font-bold text-emerald-600">{roi.totalReturn}%</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-amber-500 text-slate-900 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </button>
                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Site Visit
                </button>
                <button className="w-full border border-slate-200 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
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

// Screen 3: Watchlist & Bulk Inquiry
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
export default function DrivenPropertiesPrototype() {
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
    <div className="min-h-screen bg-slate-50">
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
