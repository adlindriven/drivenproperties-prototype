import svgPaths from "./svg-v9tftrg3z7";

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
            <path d={svgPaths.pf297500} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[12px] text-center">Type</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame4 />
      <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Residential</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
            <path d={svgPaths.pf297500} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center">Beds, Baths</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
            <path d={svgPaths.pf297500} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center">Price</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
            <path d={svgPaths.pf297500} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#696765] text-[14px] text-center">Extra filter</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(2,fit-content(100%))] relative size-full">
      <div className="bg-[#fffbf6] col-1 h-[50px] relative rounded-[33px] row-1 shrink-0 w-[133px]" data-name="Dropdown">
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <Frame />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
      </div>
      <div className="bg-[#fffbf6] col-2 h-[50px] justify-self-stretch relative rounded-[33px] row-1 shrink-0">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
            <Frame1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
      </div>
      <div className="bg-[#fffbf6] col-1 h-[50px] justify-self-stretch relative rounded-[33px] row-2 shrink-0">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
            <Frame2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
      </div>
      <div className="bg-[#fffbf6] col-2 h-[50px] justify-self-stretch relative rounded-[33px] row-2 shrink-0">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
            <Frame3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
      </div>
    </div>
  );
}