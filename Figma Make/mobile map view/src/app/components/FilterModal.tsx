import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-smlju4ho5i";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(0,0,0,0.11)] z-40"
          />
          
          {/* Filter Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[31px] w-[364px] z-50"
          >
            <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px relative">
                {/* Header and Tabs Section */}
                <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                  {/* Header with Close Button */}
                  <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full">
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] text-center w-[223px]">
                        <p className="decoration-solid font-['Lato:SemiBold',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.8)] underline">Search location</p>
                        <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.38)]">Sort</p>
                      </div>
                      <button 
                        onClick={onClose}
                        className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
                      >
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.5px] top-1/2">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
                            <path d="M15.5 1.55L13.95 0L7.75 6.2L1.55 0L0 1.55L6.2 7.75L0 13.95L1.55 15.5L7.75 9.3L13.95 15.5L15.5 13.95L9.3 7.75L15.5 1.55Z" fill="#0A0A0A" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    {/* Buy/Rent/Commercial/Projects Tabs */}
                    <div className="bg-[#fffbf6] relative rounded-[36px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
                          <div className="bg-[#161717] flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[16px] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafaf5] text-[14px] text-center whitespace-nowrap">
                                  <p className="leading-[18px]">Buy</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-[34px] min-h-px min-w-px relative">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[14px] text-center whitespace-nowrap">
                                  <p className="leading-[18px]">Rent</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-[34px] min-h-px min-w-px relative">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[14px] text-center whitespace-nowrap">
                                  <p className="leading-[18px]">Commercial</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-[34px] min-h-px min-w-px relative">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[14px] text-center whitespace-nowrap">
                                  <p className="leading-[18px]">Projects</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* All/Ready/Off Plan/Luxury Tabs */}
                  <div className="bg-[#fffbf6] relative rounded-[36px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
                        <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">All</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">Ready</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#ebebe2] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div aria-hidden="true" className="absolute border border-[#333331] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]" />
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Off Plan</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">Luxury</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Investor/Normal Mode */}
                  <div className="bg-[#fffbf6] relative rounded-[36px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
                        <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">Investor Mode</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#ebebe2] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]">
                          <div aria-hidden="true" className="absolute border border-[#333331] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]" />
                          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                              <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Normal Mode</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Handover by Dropdown */}
                  <div className="bg-[#fffbf6] h-[50px] relative rounded-[33px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
                                  <path d="M5 5.5L0 0H10L5 5.5Z" fill="#242424" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[12px] text-center">Handover by</p>
                          </div>
                          <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Q3 2028</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
                  </div>
                  
                  {/* Payment Plan Dropdown */}
                  <div className="bg-[#fffbf6] h-[50px] relative rounded-[33px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
                                  <path d="M5 5.5L0 0H10L5 5.5Z" fill="#242424" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[12px] text-center">Payment Plan</p>
                          </div>
                          <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">70/30</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
                  </div>
                  
                  {/* Completion Dropdown */}
                  <div className="bg-[#fffbf6] h-[50px] relative rounded-[33px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
                                  <path d="M5 5.5L0 0H10L5 5.5Z" fill="#242424" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[12px] text-center">Completion</p>
                          </div>
                          <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">80%</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
                  </div>
                  
                  {/* Amenities Dropdown */}
                  <div className="bg-[#fffbf6] h-[50px] relative rounded-[33px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
                                  <path d="M5 5.5L0 0H10L5 5.5Z" fill="#242424" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center">Amenities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
                  </div>
                  
                  {/* Price Dropdown */}
                  <div className="bg-[#fffbf6] h-[50px] relative rounded-[33px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
                                  <path d="M5 5.5L0 0H10L5 5.5Z" fill="#242424" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center">Price</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
                  </div>
                </div>
                
                {/* Bottom Section - Reset and Search */}
                <div className="content-stretch flex flex-col gap-[18px] items-center justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <p className="decoration-solid font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00276f] text-[14px] underline cursor-pointer">Reset</p>
                  </div>
                  <div className="content-stretch flex gap-[24px] h-[50px] items-end justify-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-[1_0_0] h-[50px] items-center min-h-px min-w-px relative">
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
                      </div>
                    </div>
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
                      <div aria-hidden="true" className="absolute border-[#c4ad8d] border-[1.03px] border-solid inset-0 pointer-events-none rounded-[27.586px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e4e4e5] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[-128px_41px_38px_0px_rgba(0,0,0,0),-82px_26px_34px_0px_rgba(0,0,0,0.01),-46px_15px_29px_0px_rgba(0,0,0,0.05),-21px_7px_22px_0px_rgba(0,0,0,0.09),-5px_2px_12px_0px_rgba(0,0,0,0.1)]" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
