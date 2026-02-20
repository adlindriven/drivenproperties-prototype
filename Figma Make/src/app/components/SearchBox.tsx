import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function SearchBox() {
  const [selectedType, setSelectedType] = useState('Buy');
  const [selectedCategory, setSelectedCategory] = useState('Off Plan');
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

  const propertyTypes = ['Buy', 'Rent', 'Commercial', 'Projects'];
  const categories = ['All', 'Ready', 'Off Plan', 'Luxury'];

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Main Search Container */}
      <div
        className="bg-[rgba(255,255,255,0.8)] border border-[rgba(180,180,180,0.32)] rounded-[37px] p-[16px]"
        style={{
          boxShadow: '-140px 111px 71px rgba(153, 153, 153, 0.01), -79px 62px 60px rgba(153, 153, 153, 0.05), -35px 28px 45px rgba(153, 153, 153, 0.09), -9px 7px 25px rgba(153, 153, 153, 0.1)',
        }}
      >
        <div className="flex flex-col gap-[8px]">
          {/* First Row - Property Type & Category Tabs + Dropdowns */}
          <div className="flex gap-[8px] items-center">
            {/* Property Type Tab */}
            <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[36px] p-[8px] flex gap-[4px] w-[318px]">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  className="flex-1 px-[16px] h-[34px] rounded-[16px] flex items-center justify-center transition-all duration-200"
                  style={{
                    background: selectedType === type ? '#161717' : 'transparent',
                    boxShadow: selectedType === type 
                      ? '-16px 6px 7px rgba(0, 0, 0, 0.03), -9px 3px 6px rgba(0, 0, 0, 0.09), -4px 1px 4px rgba(0, 0, 0, 0.15), -1px 0px 2px rgba(0, 0, 0, 0.17)'
                      : 'none',
                  }}
                  onClick={() => setSelectedType(type)}
                >
                  <span
                    className="font-['Lato:Regular',sans-serif] text-[14px] leading-[18px] whitespace-nowrap"
                    style={{
                      color: selectedType === type ? '#FAFAF5' : '#1C1C1A',
                    }}
                  >
                    {type}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Tab */}
            <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[36px] p-[8px] flex gap-[4px] w-[318px]">
              {categories.map((category) => (
                <button
                  key={category}
                  className="flex-1 px-[12px] min-h-[32px] rounded-[16px] flex items-center justify-center transition-all duration-200"
                  style={{
                    background: selectedCategory === category ? '#EBEBE2' : 'transparent',
                    border: selectedCategory === category ? '1px solid #333331' : '1px solid transparent',
                    boxShadow: selectedCategory === category 
                      ? '-16px 6px 7px rgba(0, 0, 0, 0.03), -9px 3px 6px rgba(0, 0, 0, 0.09), -4px 1px 4px rgba(0, 0, 0, 0.15), -1px 0px 2px rgba(0, 0, 0, 0.17)'
                      : 'none',
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span
                    className="text-[14px] leading-[17px] text-center whitespace-nowrap"
                    style={{
                      fontFamily: selectedCategory === category ? 'Lato:SemiBold' : 'Lato:Regular',
                      color: selectedCategory === category ? '#000000' : '#494946',
                    }}
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>

            {/* Handover By Dropdown */}
            <div className="flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[16px] py-[8px] flex items-center">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[4px] items-start">
                  <ChevronDown size={16} color="#242424" />
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[14px] text-[#696765]">
                    Handover by
                  </span>
                </div>
                <span className="font-['Lato:SemiBold',sans-serif] text-[14px] leading-[17px] text-black">
                  Q3 2028
                </span>
              </div>
            </div>

            {/* Payment Plan Dropdown */}
            <div className="flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[16px] py-[8px] flex items-center">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[4px] items-start">
                  <ChevronDown size={16} color="#242424" />
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[14px] text-[#696765]">
                    Payment Plan
                  </span>
                </div>
                <span className="font-['Lato:SemiBold',sans-serif] text-[14px] leading-[17px] text-black">
                  70/30
                </span>
              </div>
            </div>

            {/* Completion Dropdown */}
            <div className="flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[16px] py-[8px] flex items-center">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[4px] items-start">
                  <ChevronDown size={16} color="#242424" />
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[14px] text-[#696765]">
                    Completion
                  </span>
                </div>
                <span className="font-['Lato:SemiBold',sans-serif] text-[14px] leading-[17px] text-black">
                  80%
                </span>
              </div>
            </div>
          </div>

          {/* Second Row - Amenities, Price, Search Input, Reset, Search Button */}
          <div className="flex gap-[8px] items-end">
            {/* Amenities Dropdown */}
            <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] w-[167px] px-[16px] py-[8px] flex items-center">
              <div className="flex gap-[4px] items-start">
                <ChevronDown size={16} color="#242424" />
                <span className="font-['Lato:Regular',sans-serif] text-[14px] leading-[17px] text-[#696765]">
                  Amenities
                </span>
              </div>
            </div>

            {/* Price Dropdown */}
            <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] w-[167px] px-[16px] py-[8px] flex items-center">
              <div className="flex gap-[4px] items-start">
                <ChevronDown size={16} color="#242424" />
                <span className="font-['Lato:Regular',sans-serif] text-[14px] leading-[17px] text-[#696765]">
                  Price
                </span>
              </div>
            </div>

            {/* Search Input + Reset Button */}
            <div className="flex-1 flex gap-[8px] items-end">
              {/* Search Input */}
              <div className="flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[24px] py-[16px] flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#6C5F4C" strokeWidth="2" />
                  <path d="M12.5 12.5L17 17" stroke="#6C5F4C" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search your preferred location"
                  className="flex-1 bg-transparent outline-none font-['Lato:Regular',sans-serif] text-[16px] leading-[19px] text-[rgba(0,0,0,0.59)] placeholder:text-[rgba(0,0,0,0.59)]"
                />
              </div>

              {/* Reset Link */}
              <button className="font-['Lato:Regular',sans-serif] text-[14px] leading-[17px] text-[#00276F] underline hover:opacity-80 transition-opacity">
                Reset
              </button>
            </div>

            {/* Search Button */}
            <button className="bg-black border border-[#C4AD8D] rounded-[27.586px] p-[4.12px] hover:opacity-90 transition-opacity">
              <div className="bg-black border border-black rounded-[28.842px] p-[11.526px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="white" strokeWidth="1.5" />
                  <path d="M10.5 10.5L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filters Accordion */}
      <button
        className="w-full rounded-[25px] px-[24px] py-[8px] hover:bg-[rgba(0,0,0,0.02)] transition-colors"
        onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
      >
        <div className="flex items-center gap-[8px]">
          <div className="flex-1 h-px bg-[#DCDCDC] rounded-[5px]" />
          <span className="font-['Lato:Medium',sans-serif] text-[14px] leading-[17px] text-[#656565]">
            More Filters
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300"
            style={{
              transform: isFiltersExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#242424" />
            <rect x="4" y="11" width="12" height="2" rx="1" fill="#242424" />
            <rect x="4" y="16" width="8" height="2" rx="1" fill="#242424" />
          </svg>
        </div>
      </button>

      {/* Expanded Filters Panel */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isFiltersExpanded ? '500px' : '0',
          opacity: isFiltersExpanded ? 1 : 0,
        }}
      >
        <div className="bg-[rgba(255,255,255,0.8)] border border-[rgba(180,180,180,0.32)] rounded-[24px] p-[24px]">
          <div className="grid grid-cols-3 gap-[16px]">
            {/* Bedrooms Filter */}
            <div>
              <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#656565] mb-[8px] block">
                Bedrooms
              </label>
              <div className="flex gap-[8px]">
                {['Studio', '1', '2', '3', '4', '5+'].map((bed) => (
                  <button
                    key={bed}
                    className="flex-1 px-[12px] py-[8px] border border-[#E7DCCC] rounded-[8px] bg-[#FFFBF6] hover:bg-[#EBEBE2] transition-colors font-['Lato:Regular',sans-serif] text-[14px]"
                  >
                    {bed}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms Filter */}
            <div>
              <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#656565] mb-[8px] block">
                Bathrooms
              </label>
              <div className="flex gap-[8px]">
                {['1', '2', '3', '4', '5+'].map((bath) => (
                  <button
                    key={bath}
                    className="flex-1 px-[12px] py-[8px] border border-[#E7DCCC] rounded-[8px] bg-[#FFFBF6] hover:bg-[#EBEBE2] transition-colors font-['Lato:Regular',sans-serif] text-[14px]"
                  >
                    {bath}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Size Filter */}
            <div>
              <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#656565] mb-[8px] block">
                Property Size (sqft)
              </label>
              <div className="flex gap-[8px]">
                <input
                  type="number"
                  placeholder="Min"
                  className="flex-1 px-[12px] py-[8px] border border-[#E7DCCC] rounded-[8px] bg-[#FFFBF6] outline-none font-['Lato:Regular',sans-serif] text-[14px]"
                />
                <span className="flex items-center text-[#656565]">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="flex-1 px-[12px] py-[8px] border border-[#E7DCCC] rounded-[8px] bg-[#FFFBF6] outline-none font-['Lato:Regular',sans-serif] text-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
