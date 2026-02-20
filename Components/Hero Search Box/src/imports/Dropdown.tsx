import svgPaths from "./svg-j1ijqy112b";

function Frame1() {
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
      <Frame1 />
      <p className="font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Residential</p>
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-[#fffbf6] relative rounded-[33px] size-full" data-name="Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7dccc] border-solid inset-0 pointer-events-none rounded-[33px]" />
    </div>
  );
}