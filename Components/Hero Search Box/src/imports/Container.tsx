function Tab() {
  return (
    <div className="bg-[#fffbf6] flex-[1_0_0] min-h-px min-w-px relative rounded-[36px]" data-name="Tab">
      <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-h-[32px] px-[12px] py-[4px] relative rounded-[16px] shrink-0 w-[51px]" data-name="Component 6">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">All</p>
          </div>
          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]" data-name="Component 5">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">Ready</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ebebe2] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]" data-name="Component 4">
            <div aria-hidden="true" className="absolute border border-[#333331] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[-24px_9px_7px_0px_rgba(0,0,0,0),-16px_6px_7px_0px_rgba(0,0,0,0.03),-9px_3px_6px_0px_rgba(0,0,0,0.09),-4px_1px_4px_0px_rgba(0,0,0,0.15),-1px_0px_2px_0px_rgba(0,0,0,0.17)]" />
            <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Off Plan</p>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-[32px] min-w-px relative rounded-[16px]" data-name="Component 7">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[12px] py-[4px] relative w-full">
                <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#494946] text-[14px] text-center">Luxury</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Container">
      <Tab />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}