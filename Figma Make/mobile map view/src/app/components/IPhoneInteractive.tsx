import { useState } from "react";
import { motion, PanInfo } from "motion/react";
import svgPaths from "../../imports/svg-smlju4ho5i";
import imgDrivenMapView1 from "figma:asset/554726363b7e5a4f122b5ad8faac4ddbcf9934d4.png";
import imgPropertyImage from "figma:asset/1fbfb06346b0a594f12989171c9702a9bbcfa750.png";
import imgEllipse1 from "figma:asset/d1a43bba84c3270993c2c57b6f260a8f0e3c2593.png";
import { FilterModal } from "./FilterModal";
import DrivenProperties from "../../imports/DrivenProperties";

// Import all the components from the original file
// (I'll reuse them by copying the relevant ones)

function IconAndText() {
  return (
    <div className="min-w-[132px] relative rounded-[20px] shadow-[0px_1px_4px_0px_rgba(233,233,233,0.25)] shrink-0 w-full" data-name="Icon and Text">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
            <p className="leading-[20px]">Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative rounded-[24px] shrink-0 w-[80px]" data-name="Button">
        <IconAndText />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Frame8 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Navigation">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.497px] left-1/2 top-[calc(50%+0.25px)] w-[20.001px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0009 14.4968">
            <path d={svgPaths.p37b3f7f0} fill="var(--fill-0, #0A0A0A)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Driven Properties Logo - simplified version
function DrivenLogo() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[158.75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 24">
        <text x="0" y="18" className="font-bold text-[16px]" fill="black">DRIVEN</text>
        <text x="90" y="18" className="font-serif text-[12px]" fill="black">Forbes</text>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <div className="h-[24px] overflow-clip relative shrink-0 w-[158.75px]" data-name="Driven Properties">
        <div className="absolute inset-[24.45%_81.17%_24.42%_11.69%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3384 12.2708">
            <path d={svgPaths.pabe6a80} fill="var(--fill-0, black)" />
          </svg>
        </div>
        {/* Rest of the logo SVG paths... */}
      </div>
      <Container />
    </div>
  );
}

function TopNavigationMenu() {
  return (
    <div className="bg-white flex-[1_0_0] h-[66px] min-h-[66px] min-w-px relative" data-name="Top Navigation Menu">
      <div aria-hidden="true" className="absolute border-[rgba(216,206,190,0.32)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_16.6px_0px_rgba(199,165,110,0.03)]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[16px] py-[13px] relative size-full">
          <div className="h-[24px] w-[158.75px]">
            <DrivenProperties />
          </div>
          <div className="flex gap-[16px] items-center">
            <button className="px-[16px] py-[8px] rounded-[20px] border border-gray-200">Sign In</button>
            <div className="w-[24px] h-[24px]">
              <svg viewBox="0 0 20 14.5" fill="none">
                <path d={svgPaths.p37b3f7f0} fill="#0A0A0A" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavigationMenuInteractive() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 top-0 w-[402px]" data-name="Top Navigation Menu Interactive">
      <TopNavigationMenu />
    </div>
  );
}

function SearchBox() {
  return (
    <div className="bg-[#fffbf6] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[33px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[32px] py-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2e369600} fill="var(--fill-0, #6C5F4C)" />
              </svg>
            </div>
          </div>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.59)] text-center">Search location</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
    </div>
  );
}

function Container1() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  return (
    <>
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-[calc(50%+0.5px)] px-[16px] py-[8px] rounded-[37px] top-[78px] w-[373px]" data-name="Container">
        <div aria-hidden="true" className="absolute border border-[rgba(180,180,180,0.32)] border-solid inset-0 pointer-events-none rounded-[37px] shadow-[-219px_173px_78px_0px_rgba(153,153,153,0),-140px_111px_71px_0px_rgba(153,153,153,0.01),-79px_62px_60px_0px_rgba(153,153,153,0.05),-35px_28px_45px_0px_rgba(153,153,153,0.09),-9px_7px_25px_0px_rgba(153,153,153,0.1)]" />
        <div className="content-stretch flex gap-[8px] h-[50px] items-end justify-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.995px] left-1/2 top-1/2 w-[18px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.9955">
                  <path d={svgPaths.p16f56a80} fill="var(--fill-0, #0A0A0A)" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] h-[50px] items-center min-h-px min-w-px relative">
                <SearchBox />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
            <div className="bg-black relative rounded-[27.586px] shrink-0">
              <div className="content-stretch flex items-center overflow-clip p-[4.12px] relative rounded-[inherit]">
                <div className="bg-black relative rounded-[28.842px] shrink-0">
                  <div className="content-stretch flex flex-col items-start overflow-clip p-[11.526px] relative rounded-[inherit]">
                    <div className="overflow-clip relative shrink-0 size-[16.036px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[12.695px] top-[calc(50%-0.33px)]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6949 12.6949">
                          <path d={svgPaths.p6cb0a00} fill="var(--fill-0, white)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p2cf0c180} fill="var(--fill-0, #0A0A0A)" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </>
  );
}

function PriceTooltip({ left, top, price }: { left: string; top: string; price: string }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center" style={{ left, top }}>
      <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[8px] shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div className="h-[12px] relative shrink-0 w-[13.8px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 12">
              <g>
                <path d={svgPaths.p5cac280} fill="var(--fill-0, #1C1C1A)" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="flex flex-col font-['Lato:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[14px] whitespace-nowrap">
              <p className="leading-[24px]">{price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
          <g>
            <path d={svgPaths.p126b22c0} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[1085px] left-[calc(50%+0.5px)] rounded-[32px] top-[156px] w-[395px]">
      <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[27px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[27px] size-full" src={imgDrivenMapView1} />
        </div>
        <PriceTooltip left="267px" top="202px" price="760,000" />
        <PriceTooltip left="420px" top="405px" price="11,928" />
        <PriceTooltip left="132px" top="526px" price="11,928" />
        <PriceTooltip left="167px" top="845px" price="11,928" />
        <PriceTooltip left="484px" top="754px" price="11,928" />
        <PriceTooltip left="570px" top="914px" price="11,928" />
        <PriceTooltip left="535px" top="904px" price="11,928" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebe2] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

// Property Card Component
function PropertyCard() {
  return (
    <div className="bg-white h-[572px] min-h-[497px] min-w-[314px] relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebebe2] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-y-[8px] items-start justify-center min-h-[inherit] min-w-[inherit] p-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-h-px min-w-px relative">
            <div className="h-[220px] relative rounded-[16px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgPropertyImage} />
              <div aria-hidden="true" className="absolute border border-[#f8f7f4] border-solid inset-[-1px] rounded-[17px]" />
              
              {/* 3D and Video tags */}
              <div className="absolute content-stretch flex gap-[8px] items-center left-[8px] top-[186px]">
                <div className="bg-[rgba(75,75,75,0.51)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.392px] left-1/2 top-1/2 w-[18px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 15.3918">
                          <path d={svgPaths.pbc94a00} fill="var(--fill-0, white)" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[12px] whitespace-nowrap">
                      <p className="leading-[normal]">3D</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(75,75,75,0.51)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                          <path d={svgPaths.p34fd7b80} fill="var(--fill-0, white)" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[12px] whitespace-nowrap">
                      <p className="leading-[normal]">Video</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heart icon */}
              <div className="absolute right-[10px] size-[24px] top-[186px]">
                <div className="absolute inset-0 overflow-clip">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.293px] left-1/2 top-[calc(50%+0.65px)] w-[20.004px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0038 17.2929">
                      <path d={svgPaths.p1678cac0} fill="var(--fill-0, white)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Property Details */}
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
                      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[16px] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">Fully Furnished | Branded Developer | Near Metro Station | Hot Deal</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[10px] items-start min-w-[60px] relative shrink-0">
                          <div className="opacity-72 overflow-clip relative shrink-0 size-[20px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.972px] left-1/2 top-[calc(50%+0.49px)] w-[16px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.9719">
                                <path d={svgPaths.pf68ee00} fill="var(--fill-0, #B1B1AB)" />
                              </svg>
                            </div>
                          </div>
                          <p className="flex-[1_0_0] font-['Lato:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c1c1a] text-[16px] whitespace-pre-wrap">Q3 2028</p>
                        </div>
                        <div className="flex flex-row items-center self-stretch">
                          <div className="bg-[#f8f7f4] h-full rounded-[8px] shrink-0 w-px" />
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start min-w-[60px] relative shrink-0">
                          <div className="opacity-72 overflow-clip relative shrink-0 size-[20px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[16px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0001 12">
                                <path d={svgPaths.p13d98800} fill="var(--fill-0, #C7C7C3)" />
                              </svg>
                            </div>
                          </div>
                          <p className="flex-[1_0_0] font-['Lato:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c1c1a] text-[16px] whitespace-pre-wrap">70/30</p>
                        </div>
                        <div className="flex flex-row items-center self-stretch">
                          <div className="bg-[#f8f7f4] h-full rounded-[8px] shrink-0 w-px" />
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start min-w-[60px] relative shrink-0">
                          <div className="opacity-72 overflow-clip relative shrink-0 size-[20px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[12px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
                                <path d={svgPaths.p7bade00} fill="var(--fill-0, #B1B1AB)" />
                              </svg>
                            </div>
                          </div>
                          <p className="flex-[1_0_0] font-['Lato:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c1c1a] text-[16px] whitespace-pre-wrap">80%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location and Price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#f8f7f4] relative rounded-[6px] shrink-0 w-full">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative w-full">
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                            <div className="opacity-72 overflow-clip relative shrink-0 size-[20px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <path d={svgPaths.p20133300} fill="var(--fill-0, #7C7C78)" />
                                </svg>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] gap-[4px] items-start justify-center leading-[20px] min-h-px min-w-px not-italic relative text-[#7c7c78] text-[16px] whitespace-pre-wrap">
                              <p className="relative shrink-0 w-full">AVA at Palm Jumeirah by Omniyat</p>
                              <p className="relative shrink-0 w-full">Palm Jumeirah, Dubai</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f8f7f4] relative rounded-[6px] shrink-0 w-full">
                      <div className="flex flex-row items-end size-full">
                        <div className="content-stretch flex items-end justify-between px-[16px] py-[8px] relative w-full">
                          <div className="bg-[#ebebe2] content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[14px] shrink-0">
                            <div className="h-[12px] relative shrink-0 w-[13.8px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 12">
                                <g>
                                  <path d={svgPaths.p5cac280} fill="var(--fill-0, #1C1C1A)" />
                                </g>
                              </svg>
                            </div>
                            <div className="content-stretch flex items-center justify-center relative shrink-0">
                              <div className="flex flex-col font-['Lato:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[14px] whitespace-nowrap">
                                <p className="leading-[24px]">3,042/month*</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                            <div className="h-[17px] relative shrink-0 w-[19.55px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5499 17">
                                <g>
                                  <path d={svgPaths.p14fb4c00} fill="var(--fill-0, #1C1C1A)" />
                                </g>
                              </svg>
                            </div>
                            <div className="content-stretch flex items-center justify-center relative shrink-0">
                              <p className="font-['Lato:ExtraBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c1c1a] text-[20px]">760,000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Agent */}
                <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f8f7f4] border-solid border-t inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                    <div className="relative shrink-0 size-[40px]">
                      <div className="absolute inset-[-4%]">
                        <img alt="" className="block max-w-none size-full rounded-full" height="43.2" src={imgEllipse1} width="43.2" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center relative shrink-0 text-[#7c7c78] w-full">
                        <p className="leading-[18px] whitespace-pre-wrap">Listed By</p>
                      </div>
                      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#1c1c1a] text-ellipsis w-full whitespace-nowrap">
                        <p className="leading-[normal] overflow-hidden">Khadija El Otmani</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                    <div className="overflow-clip relative rounded-[13px] shrink-0 size-[56px] bg-gray-100 flex items-center justify-center">
                      <svg className="size-[24px]" viewBox="0 0 29 38" fill="none">
                        <path d={svgPaths.p2d210200} fill="#7C7C78" />
                      </svg>
                    </div>
                    <div className="bg-[#f8f7f4] h-[41px] shrink-0 w-px" />
                    <div className="overflow-clip relative rounded-[13px] shrink-0 size-[56px] bg-green-500 flex items-center justify-center">
                      <svg className="size-[46px]" viewBox="0 0 46 46" fill="none">
                        <path d={svgPaths.p1e0cc800} fill="white" />
                        <path d={svgPaths.p2a3b4380} fill="#00AA57" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Frame30 with cards
function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[42px] top-[25px] w-[317.5px] overflow-y-auto max-h-[calc(100vh-200px)]">
      <PropertyCard />
      <PropertyCard />
    </div>
  );
}

// Interactive Bottom Drawer
function InteractiveBottomDrawer() {
  const COLLAPSED_Y = 510;
  const EXPANDED_Y = 160;
  
  const [drawerY, setDrawerY] = useState(COLLAPSED_Y);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;
    
    if (isExpanded) {
      if (offset > 50 || velocity > 500) {
        setDrawerY(COLLAPSED_Y);
        setIsExpanded(false);
      } else {
        setDrawerY(EXPANDED_Y);
      }
    } else {
      if (offset < -50 || velocity < -500) {
        setDrawerY(EXPANDED_Y);
        setIsExpanded(true);
      } else {
        setDrawerY(COLLAPSED_Y);
      }
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: EXPANDED_Y, bottom: COLLAPSED_Y }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      animate={{ y: drawerY }}
      initial={{ y: COLLAPSED_Y }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
      }}
      className="absolute bg-[#f7f6f3] h-[1205px] left-0 shadow-[-213px_108px_67px_0px_rgba(0,0,0,0),-136px_69px_61px_0px_rgba(0,0,0,0.01),-77px_39px_52px_0px_rgba(0,0,0,0.05),-34px_17px_38px_0px_rgba(0,0,0,0.09),-9px_4px_21px_0px_rgba(0,0,0,0.1)] w-[402px] cursor-grab active:cursor-grabbing"
      style={{
        top: 0,
        touchAction: "none",
      }}
    >
      <Frame30 />
      <div className="-translate-x-1/2 absolute bg-[#eeede6] h-[4px] left-[calc(50%+0.5px)] rounded-[12px] top-[8px] w-[81px]" />
    </motion.div>
  );
}

export default function IPhoneInteractive() {
  return (
    <div className="bg-white relative size-full overflow-hidden">
      <TopNavigationMenuInteractive />
      <Container1 />
      <Map />
      <InteractiveBottomDrawer />
    </div>
  );
}