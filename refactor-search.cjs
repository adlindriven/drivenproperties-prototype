const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// The new component to inject
const unifiedSearchBoxCode = `
        // Unified Responsive Search Box (from Map View)
        const UnifiedSearchBox = ({ onSearch }) => {
            const [activeMainTab, setActiveMainTab] = useState('buy');
            const [activeSubTab, setActiveSubTab] = useState('offplan');
            const [selectedHandover, setSelectedHandover] = useState('Q3 2028');
            const [selectedPaymentPlan, setSelectedPaymentPlan] = useState('70/30');
            const [selectedCompletion, setSelectedCompletion] = useState('80%');
            const [locationSearch, setLocationSearch] = useState('');

            const mainTabs = [
                { id: 'buy', label: 'Buy' },
                { id: 'rent', label: 'Rent' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'projects', label: 'Projects' }
            ];
            const subTabs = [
                { id: 'all', label: 'All' },
                { id: 'ready', label: 'Ready' },
                { id: 'offplan', label: 'Off Plan' },
                { id: 'luxury', label: 'Luxury' }
            ];

            return (
                <div
                    className="bg-[rgba(255,255,255,0.8)] border border-[rgba(180,180,180,0.32)] rounded-[24px] md:rounded-[37px] p-[12px] md:p-[16px] w-full"
                    style={{ boxShadow: '-140px 111px 71px rgba(153,153,153,0.01), -79px 62px 60px rgba(153,153,153,0.05), -35px 28px 45px rgba(153,153,153,0.09), -9px 7px 25px rgba(153,153,153,0.1)' }}
                >
                    <div className="flex flex-col gap-[8px]">
                        {/* Row 1: Tabs + Dropdowns */}
                        <div className="flex flex-col lg:flex-row gap-[8px] items-start lg:items-center">
                            {/* Tabs Row (Scrollable on mobile) */}
                            <div className="flex gap-[8px] w-full lg:w-auto overflow-x-auto scrollbar-hide shrink-0 pb-1 lg:pb-0">
                                {/* Property Type Tab Pill */}
                                <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[36px] p-[6px] md:p-[8px] flex gap-[4px] shrink-0">
                                    {mainTabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveMainTab(tab.id)}
                                            className="px-[12px] md:px-[16px] h-[34px] rounded-[16px] flex items-center justify-center transition-all duration-200"
                                            style={{
                                                background: activeMainTab === tab.id ? '#161717' : 'transparent',
                                                boxShadow: activeMainTab === tab.id ? '-16px 6px 7px rgba(0,0,0,0.03), -9px 3px 6px rgba(0,0,0,0.09), -4px 1px 4px rgba(0,0,0,0.15), -1px 0px 2px rgba(0,0,0,0.17)' : 'none',
                                            }}
                                        >
                                            <span className="text-[13px] md:text-[14px] leading-[18px] whitespace-nowrap" style={{ color: activeMainTab === tab.id ? '#FAFAF5' : '#1C1C1A' }}>
                                                {tab.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Category Sub-Tab Pill */}
                                <div className="bg-[#FFFBF6] border border-[#E7DCCC] rounded-[36px] p-[6px] md:p-[8px] flex gap-[4px] shrink-0">
                                    {subTabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveSubTab(tab.id)}
                                            className="px-[10px] md:px-[12px] min-h-[32px] rounded-[16px] flex items-center justify-center transition-all duration-200"
                                            style={{
                                                background: activeSubTab === tab.id ? '#EBEBE2' : 'transparent',
                                                border: activeSubTab === tab.id ? '1px solid #333331' : '1px solid transparent',
                                                boxShadow: activeSubTab === tab.id ? '-16px 6px 7px rgba(0,0,0,0.03), -9px 3px 6px rgba(0,0,0,0.09), -4px 1px 4px rgba(0,0,0,0.15), -1px 0px 2px rgba(0,0,0,0.17)' : 'none',
                                            }}
                                        >
                                            <span className="text-[13px] md:text-[14px] leading-[17px] text-center whitespace-nowrap" style={{ fontWeight: activeSubTab === tab.id ? 600 : 400, color: activeSubTab === tab.id ? '#000000' : '#494946' }}>
                                                {tab.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Dropdowns Row (Grid on mobile, flex on desktop) */}
                            <div className="grid grid-cols-2 lg:flex gap-[8px] w-full lg:w-auto lg:flex-1">
                                {/* Handover */}
                                <div className="col-span-1 flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[12px] md:px-[16px] py-[8px] flex flex-col justify-center cursor-pointer hover:border-[#C4AD8D] transition-colors">
                                    <div className="flex gap-[4px] items-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        <span className="text-[11px] md:text-[12px] leading-[14px] text-[#696765] truncate">Handover by</span>
                                    </div>
                                    <span className="text-[13px] md:text-[14px] leading-[17px] text-black font-semibold mt-[2px] truncate">{selectedHandover}</span>
                                </div>
                                {/* Payment Plan */}
                                <div className="col-span-1 flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[12px] md:px-[16px] py-[8px] flex flex-col justify-center cursor-pointer hover:border-[#C4AD8D] transition-colors">
                                    <div className="flex gap-[4px] items-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        <span className="text-[11px] md:text-[12px] leading-[14px] text-[#696765] truncate">Payment Plan</span>
                                    </div>
                                    <span className="text-[13px] md:text-[14px] leading-[17px] text-black font-semibold mt-[2px] truncate">{selectedPaymentPlan}</span>
                                </div>
                                {/* Completion */}
                                <div className="col-span-2 lg:col-span-1 lg:flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[12px] md:px-[16px] py-[8px] flex flex-col justify-center cursor-pointer hover:border-[#C4AD8D] transition-colors">
                                    <div className="flex gap-[4px] items-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        <span className="text-[11px] md:text-[12px] leading-[14px] text-[#696765] truncate">Completion</span>
                                    </div>
                                    <span className="text-[13px] md:text-[14px] leading-[17px] text-black font-semibold mt-[2px] truncate">{selectedCompletion}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Amenities, Price, Search Input, Reset, Search Button */}
                        <div className="flex flex-col lg:flex-row gap-[8px] items-start lg:items-center w-full">
                            {/* Amenities & Price (Grid on mobile) */}
                            <div className="grid grid-cols-2 gap-[8px] w-full lg:w-auto shrink-0">
                                <div className="col-span-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] lg:w-[167px] px-[12px] md:px-[16px] py-[8px] flex items-center cursor-pointer hover:border-[#C4AD8D] transition-colors">
                                    <div className="flex gap-[4px] items-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        <span className="text-[13px] md:text-[14px] leading-[17px] text-[#696765] truncate">Amenities</span>
                                    </div>
                                </div>
                                <div className="col-span-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] lg:w-[167px] px-[12px] md:px-[16px] py-[8px] flex items-center cursor-pointer hover:border-[#C4AD8D] transition-colors">
                                    <div className="flex gap-[4px] items-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        <span className="text-[13px] md:text-[14px] leading-[17px] text-[#696765] truncate">Price</span>
                                    </div>
                                </div>
                            </div>

                            {/* Search Input + Tools */}
                            <div className="flex-1 flex gap-[8px] items-center w-full lg:w-auto">
                                <div className="flex-1 bg-[#FFFBF6] border border-[#E7DCCC] rounded-[33px] h-[50px] px-[16px] md:px-[24px] py-[16px] flex items-center gap-[8px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 hidden md:block">
                                        <circle cx="8" cy="8" r="6" stroke="#6C5F4C" strokeWidth="2" />
                                        <path d="M12.5 12.5L17 17" stroke="#6C5F4C" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search your preferred location"
                                        value={locationSearch}
                                        onChange={(e) => setLocationSearch(e.target.value)}
                                        className="flex-1 w-full bg-transparent outline-none text-[14px] md:text-[16px] leading-[19px] placeholder:text-[rgba(0,0,0,0.59)] text-[rgba(0,0,0,0.8)]"
                                        style={{ border: 'none' }}
                                    />
                                </div>

                                <button
                                    onClick={() => { setLocationSearch(''); setActiveMainTab('buy'); setActiveSubTab('offplan'); }}
                                    className="text-[13px] md:text-[14px] leading-[17px] text-[#00276F] underline hover:opacity-80 transition-opacity whitespace-nowrap px-[2px]"
                                >
                                    Reset
                                </button>

                                <button onClick={onSearch} className="bg-black border border-[#C4AD8D] rounded-full p-[3px] md:p-[4px] hover:opacity-90 transition-opacity shrink-0">
                                    <div className="bg-black border border-black rounded-full w-[38px] h-[38px] md:w-[44px] md:h-[44px] flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="6.5" cy="6.5" r="5" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.5 10.5L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
`;

// Inject component before SearchScreen
if (!content.includes('const UnifiedSearchBox =')) {
    content = content.replace(/const SearchScreen = \(\{/, unifiedSearchBoxCode + '\n        const SearchScreen = ({');
}

// 1. Replace Home Screen Manual Search Interface
// The block spans from `// Manual Search Interface` to right before `{/* Properties Carousel Section */}`
const homeManualSearchRegex = /\/\/\s*Manual Search Interface([\s\S]*?)(?=<\!-- Properties Carousel Section -->|\{\/\* Properties Carousel Section \*\/)/;
// It currently looks like:
// // Manual Search Interface
// <div className="p-4 md:p-6 pb-6 md:pb-8 flex flex-col gap-4 md:gap-5"> ... </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// {/* Properties Carousel Section */}
//
// The exact regex is tricky, so let's use string manipulation for Home Screen

const homeSplitTop = content.split('// Manual Search Interface');
if (homeSplitTop.length > 1) {
    const homeSplitBottom = homeSplitTop[1].split('{/* Properties Carousel Section */}');
    if (homeSplitBottom.length > 1) {
        // The last part of homeSplitTop[1] before the split should be the closing divs
        content = homeSplitTop[0] +
            `// Manual Search Interface
                                                <div className="mt-4 md:mt-6 w-full max-w-[1000px] mx-auto text-left">
                                                    <UnifiedSearchBox onSearch={() => onViewAll()} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Properties Carousel Section */}` + homeSplitBottom[1];
    }
}

// 2. Replace SearchResultsScreen Map View Search Bar
const mapSplitTop = content.split('{/* ── Advanced Search & Filter Bar — Figma Make Design ── */}');
if (mapSplitTop.length > 1) {
    const mapSplitBottom = mapSplitTop[1].split('{/* ── More Filters Accordion ── */}');
    if (mapSplitBottom.length > 1) {
        content = mapSplitTop[0] +
            `{/* ── Advanced Search & Filter Bar — Figma Make Design ── */}
                    <div className="bg-[#f8f7f4] border-b border-[rgba(216,206,190,0.32)]">
                        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 pb-4">
                            <UnifiedSearchBox onSearch={() => {}} />
                        </div>
                    </div>
                        
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 pb-4">
                        {/* ── More Filters Accordion ── */}` + mapSplitBottom[1];
    }
}

fs.writeFileSync('index.html', content);
console.log('Search component extracted and updated successfully.');
