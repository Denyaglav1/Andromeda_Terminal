import svgPaths from "./svg-br61pw6u5a";

function TitelDescriptive() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive />
      <ButtonGroup />
    </div>
  );
}

function NotificationsErrorOnOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[113px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/on/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive1 />
      <ButtonGroup1 />
    </div>
  );
}

function NotificationsWarningOnOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[113px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/on/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content1 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive2 />
      <ButtonGroup2 />
    </div>
  );
}

function NotificationsInfoOnOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[113px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/on/on/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content2 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive3 />
      <ButtonGroup3 />
    </div>
  );
}

function NotificationsSuccessOnOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[113px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/on/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content3 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive4 />
    </div>
  );
}

function NotificationsSuccessOnOffOffDarkOnOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[1643px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/off/dark/on/on/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading />
      </div>
      <Content4 />
    </div>
  );
}

function Loading1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start justify-between pr-[4px] relative w-full">
        <TitelDescriptive5 />
      </div>
    </div>
  );
}

function NotificationsInfoOnOffOffDarkOnOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[1643px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/off/dark/on/on/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading1 />
      </div>
      <Frame />
    </div>
  );
}

function Loading2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive6 />
    </div>
  );
}

function NotificationsWarningOnOffOffDarkOnOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[1643px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/off/dark/on/on/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading2 />
      </div>
      <Content5 />
    </div>
  );
}

function Loading3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive7 />
    </div>
  );
}

function NotificationsErrorOnOffOffDarkOnOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[1643px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/off/dark/on/on/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading3 />
      </div>
      <Content6 />
    </div>
  );
}

function Loading4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive8 />
    </div>
  );
}

function NotificationsErrorOnOffOffDarkOnOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[2001px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/off/dark/on/off/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading4 />
      </div>
      <Content7 />
    </div>
  );
}

function Loading5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive9 />
    </div>
  );
}

function NotificationsWarningOnOffOffDarkOnOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[2001px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/off/dark/on/off/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading5 />
      </div>
      <Content8 />
    </div>
  );
}

function Loading6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive10 />
    </div>
  );
}

function NotificationsSuccessOnOffOffDarkOnOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[2001px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/off/dark/on/off/off">
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading6 />
      </div>
      <Content9 />
    </div>
  );
}

function Loading7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="loading">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--fill-0, #677C9C)" fillOpacity="0.1" fillRule="evenodd" id="Ellipse 391" />
          <path clipRule="evenodd" d={svgPaths.p38db5100} fill="url(#paint0_linear_30_8268)" fillRule="evenodd" id="Ellipse 390" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_8268" x1="10" x2="6.51516" y1="0.302986" y2="18.1818">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitelDescriptive11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start justify-between pr-[4px] relative w-full">
        <TitelDescriptive11 />
      </div>
    </div>
  );
}

function NotificationsInfoOnOffOffDarkOnOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[2001px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/off/dark/on/off/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="relative shrink-0 size-[20px]" data-name="loading">
        <Loading7 />
      </div>
      <Frame1 />
    </div>
  );
}

function TitelDescriptive12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive12 />
      <ButtonGroup4 />
    </div>
  );
}

function NotificationsErrorOnOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[2359px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content10 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive13 />
      <ButtonGroup5 />
    </div>
  );
}

function NotificationsWarningOnOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[2359px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content11 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive14 />
      <ButtonGroup6 />
    </div>
  );
}

function NotificationsSuccessOnOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[2359px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/on/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content12 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive15() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive15 />
      <ButtonGroup7 />
    </div>
  );
}

function NotificationsInfoOnOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[2359px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/on/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content13 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive16() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive16 />
    </div>
  );
}

function NotificationsErrorOnOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[3099.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/on/dark/off/on/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content14 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive17 />
    </div>
  );
}

function NotificationsWarningOnOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[3099.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/on/dark/off/on/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content15 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive18() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive18 />
    </div>
  );
}

function NotificationsSuccessOnOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[3099.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/on/dark/off/on/off">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content16 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive19 />
    </div>
  );
}

function NotificationsInfoOnOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[3099.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/on/dark/off/on/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content17 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive20 />
    </div>
  );
}

function NotificationsInfoOnOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[3457.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/on/dark/off/off/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content18 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive21 />
    </div>
  );
}

function NotificationsSuccessOnOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[3457.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/on/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content19 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive22 />
    </div>
  );
}

function NotificationsWarningOnOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[3457.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/on/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content20 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive23 />
    </div>
  );
}

function NotificationsErrorOnOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[3457.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/on/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content21 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive24 />
      <ButtonGroup8 />
    </div>
  );
}

function NotificationsErrorOffOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[872px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/on/on/dark/off/on/on">
      <Content22 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive25() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive25 />
      <ButtonGroup9 />
    </div>
  );
}

function NotificationsWarningOffOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[872px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/on/on/dark/off/on/on">
      <Content23 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive26() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive26 />
      <ButtonGroup10 />
    </div>
  );
}

function NotificationsInfoOffOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[872px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/on/on/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content24 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive27() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive27 />
      <ButtonGroup11 />
    </div>
  );
}

function NotificationsSuccessOffOnOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[872px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/on/on/dark/off/on/on">
      <Content25 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive28 />
      <ButtonGroup12 />
    </div>
  );
}

function NotificationsErrorOffOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex items-start left-[1257.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/on/off/dark/off/on/on">
      <Content26 />
    </div>
  );
}

function TitelDescriptive29() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive29 />
      <ButtonGroup13 />
    </div>
  );
}

function NotificationsWarningOffOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex items-start left-[1257.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/on/off/dark/off/on/on">
      <Content27 />
    </div>
  );
}

function TitelDescriptive30() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive30 />
      <ButtonGroup14 />
    </div>
  );
}

function NotificationsInfoOffOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex items-start left-[1257.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/on/off/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content28 />
    </div>
  );
}

function TitelDescriptive31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive31 />
      <ButtonGroup15 />
    </div>
  );
}

function NotificationsSuccessOffOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex items-start left-[1257.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/on/off/dark/off/on/on">
      <Content29 />
    </div>
  );
}

function TitelDescriptive32() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive32 />
      <ButtonGroup16 />
    </div>
  );
}

function NotificationsErrorOnOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[2729.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content30 />
    </div>
  );
}

function TitelDescriptive33() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive33 />
      <ButtonGroup17 />
    </div>
  );
}

function NotificationsWarningOnOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[2729.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content31 />
    </div>
  );
}

function TitelDescriptive34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive34 />
      <ButtonGroup18 />
    </div>
  );
}

function NotificationsSuccessOnOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[2729.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content32 />
    </div>
  );
}

function TitelDescriptive35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive35 />
      <ButtonGroup19 />
    </div>
  );
}

function NotificationsInfoOnOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[2729.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/off/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content33 />
    </div>
  );
}

function TitelDescriptive36() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive36 />
      <ButtonGroup20 />
    </div>
  );
}

function NotificationsErrorOffOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[4158px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/off/on/dark/off/on/on">
      <Content34 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive37() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive37 />
      <ButtonGroup21 />
    </div>
  );
}

function NotificationsWarningOffOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[4158px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/off/on/dark/off/on/on">
      <Content35 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive38 />
      <ButtonGroup22 />
    </div>
  );
}

function NotificationsSuccessOffOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[4158px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/off/on/dark/off/on/on">
      <Content36 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive39() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive39 />
      <ButtonGroup23 />
    </div>
  );
}

function NotificationsInfoOffOffOnDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[4158px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/off/on/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content37 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive40 />
    </div>
  );
}

function NotificationsErrorOffOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[4898.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/off/on/dark/off/on/off">
      <Content38 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive41() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive41 />
    </div>
  );
}

function NotificationsWarningOffOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[4898.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/off/on/dark/off/on/off">
      <Content39 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive42() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive42 />
    </div>
  );
}

function NotificationsSuccessOffOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[4898.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/off/on/dark/off/on/off">
      <Content40 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive43() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive43 />
    </div>
  );
}

function NotificationsInfoOffOffOnDarkOffOnOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[4898.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/off/on/dark/off/on/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content41 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive44 />
    </div>
  );
}

function NotificationsInfoOffOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[5256.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/off/on/dark/off/off/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content42 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive45 />
    </div>
  );
}

function NotificationsSuccessOffOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[5256.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/off/on/dark/off/off/off">
      <Content43 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive46 />
    </div>
  );
}

function NotificationsWarningOffOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[5256.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/off/on/dark/off/off/off">
      <Content44 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive47 />
    </div>
  );
}

function NotificationsErrorOffOffOnDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[5256.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/off/on/dark/off/off/off">
      <Content45 />
      <div className="absolute content-stretch flex items-center justify-center right-0 size-[32px] top-0" data-name="button  icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[19.44%]" data-name="vector">
            <div className="absolute inset-[-5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
                <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitelDescriptive48() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive48 />
      <ButtonGroup24 />
    </div>
  );
}

function NotificationsErrorOffOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex items-start left-[4528.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/off/off/dark/off/on/on">
      <Content46 />
    </div>
  );
}

function TitelDescriptive49() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive49 />
      <ButtonGroup25 />
    </div>
  );
}

function NotificationsWarningOffOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex items-start left-[4528.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/off/off/dark/off/on/on">
      <Content47 />
    </div>
  );
}

function TitelDescriptive50() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive50 />
      <ButtonGroup26 />
    </div>
  );
}

function NotificationsSuccessOffOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex items-start left-[4528.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/off/off/dark/off/on/on">
      <Content48 />
    </div>
  );
}

function TitelDescriptive51() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive51 />
      <ButtonGroup27 />
    </div>
  );
}

function NotificationsInfoOffOffOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex items-start left-[4528.25px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/off/off/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content49 />
    </div>
  );
}

function TitelDescriptive52() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive52 />
      <ButtonGroup28 />
    </div>
  );
}

function NotificationsErrorOnOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[481px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/on/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content50 />
    </div>
  );
}

function TitelDescriptive53() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive53 />
      <ButtonGroup29 />
    </div>
  );
}

function NotificationsWarningOnOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[481px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/on/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content51 />
    </div>
  );
}

function TitelDescriptive54() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#e0e1e2] w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive54 />
      <ButtonGroup30 />
    </div>
  );
}

function NotificationsSuccessOnOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[481px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/on/off/dark/off/on/on">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content52 />
    </div>
  );
}

function TitelDescriptive55() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[16px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Descriptive text under the title
      </p>
    </div>
  );
}

function ButtonGroup31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
    </div>
  );
}

function Content53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive55 />
      <ButtonGroup31 />
    </div>
  );
}

function NotificationsInfoOnOnOffDarkOffOnOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[481px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/on/off/dark/off/on/on">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content53 />
    </div>
  );
}

function TitelDescriptive56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive56 />
    </div>
  );
}

function NotificationsErrorOnOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[3807.75px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/on/off/off/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[14.44%_13.89%_13.33%_13.89%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3 14.3">
              <path d={svgPaths.pf9d4b80} id="vector" stroke="var(--stroke-0, #EA3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content54 />
    </div>
  );
}

function TitelDescriptive57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive57 />
    </div>
  );
}

function NotificationsWarningOnOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[3807.75px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/on/off/off/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon_16">
        <div className="absolute inset-[13.89%_11.11%]" data-name="vector">
          <div className="absolute inset-[-5%_-4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3 14.3">
              <path d={svgPaths.p953ce00} id="vector" stroke="var(--stroke-0, #F7620D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <Content55 />
    </div>
  );
}

function TitelDescriptive58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive58 />
    </div>
  );
}

function NotificationsSuccessOnOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[3807.75px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/on/off/off/dark/off/off/off">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p3b34b180} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content56 />
    </div>
  );
}

function TitelDescriptive59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive59 />
    </div>
  );
}

function NotificationsInfoOnOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[3807.75px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/on/off/off/dark/off/off/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content57 />
    </div>
  );
}

function TitelDescriptive60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive60 />
    </div>
  );
}

function NotificationsInfoOffOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#191f2d] content-stretch flex gap-[12px] items-start left-[5614.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] top-[722px] w-[320px]"} data-name="notifications/info/off/off/off/dark/off/off/off">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Content58 />
    </div>
  );
}

function TitelDescriptive61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive61 />
    </div>
  );
}

function NotificationsSuccessOffOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#1b5249] content-stretch flex gap-[12px] items-start left-[5614.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[534px] w-[320px]"} data-name="notifications/success/off/off/off/dark/off/off/off">
      <Content59 />
    </div>
  );
}

function TitelDescriptive62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive62 />
    </div>
  );
}

function NotificationsWarningOffOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5c3b30] content-stretch flex gap-[12px] items-start left-[5614.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[346px] w-[320px]"} data-name="notifications/warning/off/off/off/dark/off/off/off">
      <Content60 />
    </div>
  );
}

function TitelDescriptive63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">Title</p>
    </div>
  );
}

function Content61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="content">
      <TitelDescriptive63 />
    </div>
  );
}

function NotificationsErrorOffOffOffDarkOffOffOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#5b2635] content-stretch flex gap-[12px] items-start left-[5614.5px] pl-[16px] pr-[32px] py-[16px] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[158px] w-[320px]"} data-name="notifications/error/off/off/off/dark/off/off/off">
      <Content61 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <NotificationsErrorOnOnOnDarkOffOnOn />
      <NotificationsWarningOnOnOnDarkOffOnOn />
      <NotificationsInfoOnOnOnDarkOffOnOn />
      <NotificationsSuccessOnOnOnDarkOffOnOn />
      <NotificationsSuccessOnOffOffDarkOnOnOff />
      <NotificationsInfoOnOffOffDarkOnOnOff />
      <NotificationsWarningOnOffOffDarkOnOnOff />
      <NotificationsErrorOnOffOffDarkOnOnOff />
      <NotificationsErrorOnOffOffDarkOnOffOff />
      <NotificationsWarningOnOffOffDarkOnOffOff />
      <NotificationsSuccessOnOffOffDarkOnOffOff />
      <NotificationsInfoOnOffOffDarkOnOffOff />
      <NotificationsErrorOnOffOnDarkOffOnOn />
      <NotificationsWarningOnOffOnDarkOffOnOn />
      <NotificationsSuccessOnOffOnDarkOffOnOn />
      <NotificationsInfoOnOffOnDarkOffOnOn />
      <NotificationsErrorOnOffOnDarkOffOnOff />
      <NotificationsWarningOnOffOnDarkOffOnOff />
      <NotificationsSuccessOnOffOnDarkOffOnOff />
      <NotificationsInfoOnOffOnDarkOffOnOff />
      <NotificationsInfoOnOffOnDarkOffOffOff />
      <NotificationsSuccessOnOffOnDarkOffOffOff />
      <NotificationsWarningOnOffOnDarkOffOffOff />
      <NotificationsErrorOnOffOnDarkOffOffOff />
      <NotificationsErrorOffOnOnDarkOffOnOn />
      <NotificationsWarningOffOnOnDarkOffOnOn />
      <NotificationsInfoOffOnOnDarkOffOnOn />
      <NotificationsSuccessOffOnOnDarkOffOnOn />
      <NotificationsErrorOffOnOffDarkOffOnOn />
      <NotificationsWarningOffOnOffDarkOffOnOn />
      <NotificationsInfoOffOnOffDarkOffOnOn />
      <NotificationsSuccessOffOnOffDarkOffOnOn />
      <NotificationsErrorOnOffOffDarkOffOnOn />
      <NotificationsWarningOnOffOffDarkOffOnOn />
      <NotificationsSuccessOnOffOffDarkOffOnOn />
      <NotificationsInfoOnOffOffDarkOffOnOn />
      <NotificationsErrorOffOffOnDarkOffOnOn />
      <NotificationsWarningOffOffOnDarkOffOnOn />
      <NotificationsSuccessOffOffOnDarkOffOnOn />
      <NotificationsInfoOffOffOnDarkOffOnOn />
      <NotificationsErrorOffOffOnDarkOffOnOff />
      <NotificationsWarningOffOffOnDarkOffOnOff />
      <NotificationsSuccessOffOffOnDarkOffOnOff />
      <NotificationsInfoOffOffOnDarkOffOnOff />
      <NotificationsInfoOffOffOnDarkOffOffOff />
      <NotificationsSuccessOffOffOnDarkOffOffOff />
      <NotificationsWarningOffOffOnDarkOffOffOff />
      <NotificationsErrorOffOffOnDarkOffOffOff />
      <NotificationsErrorOffOffOffDarkOffOnOn />
      <NotificationsWarningOffOffOffDarkOffOnOn />
      <NotificationsSuccessOffOffOffDarkOffOnOn />
      <NotificationsInfoOffOffOffDarkOffOnOn />
      <NotificationsErrorOnOnOffDarkOffOnOn />
      <NotificationsWarningOnOnOffDarkOffOnOn />
      <NotificationsSuccessOnOnOffDarkOffOnOn />
      <NotificationsInfoOnOnOffDarkOffOnOn />
      <NotificationsErrorOnOffOffDarkOffOffOff />
      <NotificationsWarningOnOffOffDarkOffOffOff />
      <NotificationsSuccessOnOffOffDarkOffOffOff />
      <NotificationsInfoOnOffOffDarkOffOffOff />
      <NotificationsInfoOffOffOffDarkOffOffOff />
      <NotificationsSuccessOffOffOffDarkOffOffOff />
      <NotificationsWarningOffOffOffDarkOffOffOff />
      <NotificationsErrorOffOffOffDarkOffOffOff />
    </div>
  );
}