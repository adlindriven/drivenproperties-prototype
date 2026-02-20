import { useState } from "react";
import svgPaths from "../../imports/svg-qtzqqlpv5r";

export function SearchBoxDesktop() {
  const [selectedPropertyType, setSelectedPropertyType] = useState("Buy");
  const [selectedReadyType, setSelectedReadyType] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedPropertyType("Buy");
    setSelectedReadyType("All");
    setSearchValue("");
    setSelectedDropdown(null);
  };

  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start p-[8px] relative rounded-[44px] w-full">
      <div className="backdrop-blur-[8.5px] bg-[rgba(248,247,244,0.9)] content-stretch flex flex-col items-center p-[16px] relative rounded-[40px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          {/* Property Type Tabs - Horizontal */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
                <div className="bg-[#fffbf6] flex-[1_0_0] min-h-px min-w-px relative rounded-[36px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]"
                  />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
                      {["Buy", "Rent", "Commercial", "Projects"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedPropertyType(type)}
                          className={`flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[16px] transition-all ${
                            selectedPropertyType === type
                              ? "bg-[#161717] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]"
                              : "bg-[rgba(255,255,255,0)]"
                          }`}
                        >
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                              <p
                                className={`font-['Lato:Regular',sans-serif] leading-[18px] not-italic text-[14px] text-center whitespace-nowrap ${
                                  selectedPropertyType === type ? "text-[#fafaf5]" : "text-[#1c1c1a]"
                                }`}
                              >
                                {type}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Filters + Dropdowns - All Horizontal */}
          <div className="content-stretch flex flex-wrap gap-[8px] items-center justify-center relative shrink-0 w-full">
            {/* Ready Type Filters */}
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-[#fffbf6] content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[36px] shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]"
                />
                {["All", "Ready", "Off Plan", "Luxury"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedReadyType(type)}
                    className={`min-h-[32px] px-[12px] py-[4px] relative rounded-[16px] transition-all ${
                      selectedReadyType === type ? "bg-[#ebebe2]" : "bg-[rgba(255,255,255,0)]"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute border ${
                        selectedReadyType === type
                          ? "border-[#333331] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]"
                          : "border-[rgba(255,255,255,0)]"
                      } border-solid inset-0 pointer-events-none rounded-[16px]`}
                    />
                    <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] relative">
                        <p
                          className={`${
                            selectedReadyType === type
                              ? "font-['Lato:SemiBold',sans-serif] text-black"
                              : "font-['Lato:Regular',sans-serif] text-[#494946]"
                          } leading-[normal] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap transition-colors`}
                        >
                          {type}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdown Filters */}
            {["Type", "Beds, Baths", "Price", "Extra filter"].map((label) => (
              <button
                key={label}
                onClick={() => setSelectedDropdown(label)}
                className="bg-[#fffbf6] h-[50px] relative rounded-[33px] flex-[1_1_120px] min-w-[120px] hover:bg-[#f8f5f0] transition-colors"
              >
                <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 10 5.5"
                          >
                            <path d={svgPaths.pf297500} fill="var(--fill-0, #242424)" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center whitespace-nowrap">
                        {label}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]"
                />
              </button>
            ))}

            {/* Search Bar + Reset + Button - Wrappable */}
            <div className="flex-[1_1_400px] min-w-[300px] flex gap-[8px] items-end">
              <div className="content-stretch flex flex-[1_0_0] h-[50px] items-center min-h-px min-w-px relative">
                <div className="bg-[#fffbf6] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[33px]">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[32px] py-[16px] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 14 14"
                          >
                            <path d={svgPaths.p2e369600} fill="var(--fill-0, #6C5F4C)" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search your preferred location"
                        className="flex-1 bg-transparent font-['Lato:Regular',sans-serif] leading-[normal] not-italic text-[16px] text-[rgba(0,0,0,0.85)] placeholder:text-[rgba(0,0,0,0.59)] outline-none [&:not(:placeholder-shown)]:font-['Lato:Bold',sans-serif]"
                      />
                      {searchValue && (
                        <button
                          onClick={() => setSearchValue("")}
                          className="shrink-0 size-[20px] flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                          aria-label="Clear search"
                        >
                          <svg
                            className="size-[12px]"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M1 1L11 11M11 1L1 11"
                              stroke="#696765"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]"
                  />
                </div>
              </div>
              <button
                onClick={handleReset}
                className="decoration-solid font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00276f] text-[14px] underline hover:text-[#003a9c] transition-colors"
              >
                Reset
              </button>
              <button className="bg-black relative rounded-[27.586px] shrink-0 hover:scale-105 active:scale-95 transition-transform">
                <div className="content-stretch flex items-center overflow-clip p-[4.12px] relative rounded-[inherit]">
                  <div className="bg-black relative rounded-[28.842px] shrink-0">
                    <div className="content-stretch flex flex-col items-start overflow-clip p-[11.526px] relative rounded-[inherit]">
                      <div className="overflow-clip relative shrink-0 size-[16.036px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[12.695px] top-[calc(50%-0.33px)]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12.6949 12.6949"
                          >
                            <path d={svgPaths.p6cb0a00} fill="var(--fill-0, white)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border-[1.03px] border-black border-solid inset-0 pointer-events-none rounded-[28.842px]"
                    />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-[#c4ad8d] border-[1.03px] border-solid inset-0 pointer-events-none rounded-[27.586px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}