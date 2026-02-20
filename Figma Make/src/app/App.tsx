import { PropertyCard } from './components/PropertyCard';
import { SearchBox } from './components/SearchBox';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1696880443820-3bc2838a0be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yJTIwZHViYWl8ZW58MXx8fHwxNzcwOTcwMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fully Furnished | Branded Developer | Near Metro Station | Hot Deal',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,825 m²',
    location: 'Palm Jumeirah, Dubai',
    developer: 'AVA at Palm Jumeirah by Omniyat',
    monthlyPrice: '11,928',
    totalPrice: '450,000',
    agentName: 'Khadija El Otmani',
    agentImage: 'https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjB3b21hbnxlbnwxfHx8fDE3NzEwNTQxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: true,
    hasVideo: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwOTU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fully Furnished | Branded Developer | Near Marina | Best Deal',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,450 m²',
    location: 'Dubai Marina, Dubai',
    developer: 'Marina Residences by Emaar',
    monthlyPrice: '9,240',
    totalPrice: '350,000',
    agentName: 'Ahmed Al Masri',
    agentImage: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBtYW58ZW58MXx8fHwxNzcwOTgwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: false,
    hasVideo: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1735320858369-037368ccac85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzcxMDU0MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Penthouse | Panoramic Views | Prime Location | Exclusive',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,100 m²',
    location: 'Downtown Dubai, Dubai',
    developer: 'Burj Vista by Emaar',
    monthlyPrice: '15,680',
    totalPrice: '595,000',
    agentName: 'Sarah Johnson',
    agentImage: 'https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjB3b21hbnxlbnwxfHx8fDE3NzEwNTQxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: true,
    hasVideo: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcwOTY5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Studio | Fully Furnished | Smart Home | Great Investment',
    bedrooms: 1,
    bathrooms: 1,
    area: '850 m²',
    location: 'Business Bay, Dubai',
    developer: 'Bay Square by Omniyat',
    monthlyPrice: '5,880',
    totalPrice: '223,000',
    agentName: 'Mohammed Khan',
    agentImage: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBtYW58ZW58MXx8fHwxNzcwOTgwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: true,
    hasVideo: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1696880443820-3bc2838a0be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yJTIwZHViYWl8ZW58MXx8fHwxNzcwOTcwMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Spacious Villa | Private Pool | Garden View | Family Home',
    bedrooms: 5,
    bathrooms: 4,
    area: '3,200 m²',
    location: 'Arabian Ranches, Dubai',
    developer: 'Ranches by Emaar',
    monthlyPrice: '19,600',
    totalPrice: '743,000',
    agentName: 'Emma Williams',
    agentImage: 'https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjB3b21hbnxlbnwxfHx8fDE3NzEwNTQxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: false,
    hasVideo: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwOTU1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contemporary Apartment | City Views | Near Metro | Premium',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,300 m²',
    location: 'JLT, Dubai',
    developer: 'Lake View by DMCC',
    monthlyPrice: '7,840',
    totalPrice: '297,000',
    agentName: 'David Chen',
    agentImage: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBtYW58ZW58MXx8fHwxNzcwOTgwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    has3D: true,
    hasVideo: true,
  },
];

export default function App() {
  return (
    <div className="bg-[#f8f7f4] min-h-screen w-full">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(216,206,190,0.32)] shadow-[0px_1px_16.6px_0px_rgba(199,165,110,0.03)] px-[80px] py-[13px] flex items-center justify-between h-[66px]">
        <div className="flex items-center gap-[8px]">
          <div className="text-[24px] font-['Lato:Bold',sans-serif]">Driven Properties</div>
        </div>
        <nav className="flex gap-[8px] items-center">
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Buy
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Sell
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Rent
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Invest
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Projects
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Services
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Content Hub
          </button>
          <button className="px-[12px] py-[8px] font-['Lato:Medium',sans-serif] text-[#3a3a3a] text-[14px] hover:bg-gray-50 rounded-lg transition-colors">
            Find Agent
          </button>
        </nav>
        <div className="flex gap-[8px] items-center">
          <button className="bg-white border border-black px-[12px] py-[4px] rounded-[16px] font-['Lato:Bold',sans-serif] text-[14px] text-black hover:bg-gray-50 transition-colors">
            Instant Valuation
          </button>
          <button className="px-[16px] py-[8px] rounded-[20px] shadow-[0px_1px_4px_0px_rgba(233,233,233,0.25)] font-['Lato:Bold',sans-serif] text-[14px] text-black hover:bg-gray-50 transition-colors">
            Sign In
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-[80px] py-[40px]">
        {/* Title */}
        <div className="mb-[32px]">
          <h1 className="text-[32px] font-['Lato:Bold',sans-serif] text-[#1c1c1a] mb-[8px]">
            Popular Off-plan Properties in Dubai
          </h1>
          <p className="text-[16px] font-['Lato:Regular',sans-serif] text-[#7c7c78]">
            Hover over any card to see interactive effects
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-[24px]">
          <SearchBox />
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              location={property.location}
              developer={property.developer}
              monthlyPrice={property.monthlyPrice}
              totalPrice={property.totalPrice}
              agentName={property.agentName}
              agentImage={property.agentImage}
              has3D={property.has3D}
              hasVideo={property.hasVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}