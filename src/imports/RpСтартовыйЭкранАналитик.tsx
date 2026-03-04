import svgPaths from "./svg-bww5h6dl14";
import img2509Ph333 from "figma:asset/57c09ab953546adb659a28b9834065da6e3174ae.png";
import imgImage5 from "figma:asset/60cdcade542a2943a7e9e47600472b4c21fc9344.png";
import imgProCaptureOne47341 from "figma:asset/6a2351e03dfb569168225ea1910ca640b716cf9b.png";
import imgImage6 from "figma:asset/3ebbcfd68db8e7f43f9d82fdca9913bfb686c4b9.png";
import imgImage7 from "figma:asset/9215771ee58370873c77d5134e7c2d42873059da.png";
import imgImage8 from "figma:asset/ef9d4cefcb1bb671a5050f3df06a5978b19ca880.png";
import imgImage9 from "figma:asset/200536d57b922df0a3a0898765366bb9b854d81a.png";
import imgImage10 from "figma:asset/3124fdce260da53df742f2640c39c2302d783624.png";
import imgImage11 from "figma:asset/c3c8aeb3dc64debb039ba115dda0cc01ef186f50.png";

function Logo() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText1 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText2 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText3 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo />
      <Tabs />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.032px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0322 18">
        <g id="Group 336586">
          <path d={svgPaths.p3b5d5300} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p9bfca00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function TitleIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group2 />
    </div>
  );
}

function AccountButton() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton />
    </div>
  );
}

function HeaderResearchPlatform() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs />
          <Menu />
        </div>
      </div>
    </div>
  );
}

function NameSector() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-[125px] whitespace-nowrap" data-name="name+sector">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#131722] text-[12px]">
        <p className="leading-[16px]">Никанор Халин</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center min-w-full overflow-hidden relative shrink-0 text-[#2a2e39] text-[10px] text-ellipsis w-[min-content]">
        <p className="leading-[16px] overflow-hidden">Аналитик, Материалы</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="bg-[#f8fafe] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="analyst">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
              <div className="absolute h-[72.533px] left-[-11.34px] top-[-5.73px] w-[48.333px]" data-name="25-09-ph-333">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={img2509Ph333} />
                </div>
              </div>
            </div>
            <NameSector />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Мои тикеты</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame22 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5002 16.5">
              <path d={svgPaths.p3aca680} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2ndSegment() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">В работе</p>
      </div>
      <div className="absolute left-[75px] size-[6px] top-0">
        <div className="absolute inset-[-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #EA3943)" id="Ellipse 1" r="4" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component2ndSegment1() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Открытые</p>
      </div>
      <div className="absolute left-[86px] size-[6px] top-0">
        <div className="absolute inset-[-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #EA3943)" id="Ellipse 1" r="4" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component2ndSegment2() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #677C9C)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Закрытые</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full">
      <div className="bg-[#5a8cff] flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="2nd_segment">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              <p className="leading-[16px]">Все</p>
            </div>
          </div>
        </div>
      </div>
      <Component2ndSegment />
      <Component2ndSegment1 />
      <Component2ndSegment2 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame26 />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Александр Воронов</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame28 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[#5a8cff] content-stretch flex gap-[4px] items-center justify-center min-w-[20px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame23 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">{`Группа ВТБ — Результаты по МСФО `}</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Илья Морозов</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame31 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[#5a8cff] content-stretch flex gap-[4px] items-center justify-center min-w-[20px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame29 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame38 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="overflow-hidden">
          <span className="leading-[16px] text-[#131722]">{`Вы: `}</span>
          <span className="leading-[16px]">Текст последнего сообщения в одну строку для</span>
        </p>
      </div>
      <div className="content-stretch flex items-start shrink-0" data-name="Status" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame33 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6641 10.6641">
            <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Какая ставка будет в 2026 году</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Артём Лебедев</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame43 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex gap-[4px] items-center justify-center min-w-[20px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6641 10.6641">
            <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Что делать с акциями Яндекса в 2026</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Самуил Сантоновский</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame48 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="overflow-hidden">
          <span className="leading-[16px] text-[#131722]">{`Вы: `}</span>
          <span className="leading-[16px]">Текст последнего сообщения в одну строку для</span>
        </p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame47 />
      <Frame49 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame46 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Ярослав Петров</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame53 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="overflow-hidden">
          <span className="leading-[16px] text-[#131722]">{`Вы: `}</span>
          <span className="leading-[16px]">Текст последнего сообщения в одну строку для</span>
        </p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame52 />
      <Frame54 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame51 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Тимофей Егоров</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame58 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="overflow-hidden">
          <span className="leading-[16px] text-[#131722]">Вы:</span>
          <span className="leading-[16px]">{` Текст последнего сообщения в одну строку для`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame57 />
      <Frame59 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame56 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Евгений Крылов</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame63 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame62 />
      <Frame64 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame61 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Андрей Фёдоров</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame68 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame67 />
      <Frame69 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame66 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Никита Орлов</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame73 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame72 />
      <Frame74 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame71 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Самуил Сантоновский</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame78 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame77 />
      <Frame79 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame76 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Андрей Фёдоров</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame83 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame82 />
      <Frame84 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame81 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Никита Орлов</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame88 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame87 />
      <Frame89 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame86 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Самуил Сантоновский</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame93 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame92 />
      <Frame94 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame91 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame7 />
          <Frame34 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame8 />
          <Frame35 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame9 />
          <Frame36 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame10 />
          <Frame40 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1188", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-[-5.03deg]">
                  <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame11 />
          <Frame45 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame12 />
          <Frame50 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame13 />
          <Frame55 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame14 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame15 />
          <Frame60 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame16 />
          <Frame65 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame17 />
          <Frame70 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame18 />
          <Frame75 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame19 />
          <Frame80 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame20 />
          <Frame85 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame21 />
          <Frame90 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[691.5px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[18px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right">
      <div className="bg-[#f8fafe] content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="left_icon">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[7px] items-center justify-center left-[calc(50%-0.06px)] top-[calc(50%-0.5px)] w-[11px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[7px] relative w-[11px]" data-name="vector">
                <div className="absolute inset-[-8.57%_-5.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2 8.20001">
                    <path d={svgPaths.p65bce40} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Передать</p>
        </div>
      </div>
      <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="left_icon">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="vector">
            <div className="absolute inset-[-8.18%_-5.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8667 8.53333">
                <path d={svgPaths.pb6339c0} id="vector" stroke="var(--stroke-0, #1BAC75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1bac75] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Закрыть тикет</p>
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame96 />
          <Right />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top1 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1bac75] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">В работе</p>
          </div>
        </div>
      </div>
      <Frame98 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame102 />
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame101 />
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame105 />
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame104 />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#d4dae3] text-[12px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center leading-[20px] min-w-full relative shrink-0 text-[14px] text-white w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="mb-0">Опыт прошлых допэмиссий в российских технологических компаниях, таких как Яндекс и Ozon, действительно может служить полезным ориентиром при теханализе и прогнозировании финансовых показателей VK. Особенности этих компаний дают сравнительный контекст, который помогает:</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">1. Понимание рынка спроса на акции технологических компаний</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">История допэмиссий Яндекса и Ozon показывает, как воспринимают рынком дополнительные выпуски акций IT-компаний в условиях волатильности экономики и санкционного давления.</p>
          <p className="mb-0">&nbsp;</p>
          <p>Это помогает оценить, насколько инвесторы готовы реинвестировать капитал, и какие оценочные мультипликаторы считаются приемлемыми в секторе. Такой опыт полезен для оценки рыночной реакции на допэмиссию VK.</p>
        </div>
        <Frame108 />
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame107 />
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Спасибо за ответ, а что делать с акциями</p>
        </div>
        <Frame111 />
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame110 />
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#d4dae3] text-[12px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame114 />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame113 />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end justify-end relative shrink-0 w-full">
      <Frame100 />
      <Frame103 />
      <Frame106 />
      <Frame109 />
      <Frame112 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="link">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="link">
        <div className="absolute flex inset-[7.82%_7.21%_7.72%_8.33%] items-center justify-center">
          <div className="-rotate-45 flex-none h-[7.148px] w-[16.74px]">
            <div className="relative size-full">
              <div className="absolute inset-[-9.33%_-3.98%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.073 8.48116">
                  <path d={svgPaths.pea25e80} id="Vector 129" stroke="var(--stroke-0, #677C9C)" strokeLinecap="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EntertainmentMultimediaPhoto() {
  return (
    <div className="absolute left-[2.5px] size-[15px] top-[2.5px]" data-name="entertainment/multimedia/photo">
      <div className="absolute inset-[-4.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333">
          <g id="entertainment/multimedia/photo">
            <path d={svgPaths.p25142d00} id="Vector 233" stroke="var(--stroke-0, #677C9C)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1e1ff00} fill="var(--fill-0, #5A8CFF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame116 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame99 />
          <Frame115 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1028px] isolate items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <Header1 />
      <Header2 />
      <Header3 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-ellipsis whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#131722] text-[18px]">
        <p className="leading-[24px] overflow-hidden">Алекандр Воронов</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#677c9c] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">Совкомбанк</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#5a8cff] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">@oleksandvor</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#5a8cff] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">Aleksandrvoron@sovkombank.ru</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#677c9c] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">+7 985 668 96 66</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] py-[24px] relative w-full">
          <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[122px]" data-name="Analysts avatars">
            <div className="absolute h-[140.636px] left-[-5.92px] top-[-9.32px] w-[133.831px]" data-name="image 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
            </div>
          </div>
          <Frame117 />
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Финансовый сектор</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame121 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6641 10.6641">
            <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Стратегия: акции</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame123 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6641 10.6641">
            <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Транспорт</p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame125 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Глобальные активы</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame127 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6641 10.6641">
            <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1FC989)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Стратегия: акции</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame129 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Глобальные активы</p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame131 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Нефть и газ: добыча и переработка</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame133 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[12.5%_18.75%]" data-name="path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #677C9C)" id="path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #677C9C)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Макроэкномика</p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame135 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(90,140,255,0.3)] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame120 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame122 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame124 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame126 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame128 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame130 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame132 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame134 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame119 />
      </div>
    </div>
  );
}

function Publications1() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header4 />
        <Frame118 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <Frame2 />
      <Frame95 />
      <Frame5 />
      <div className="absolute bg-black h-[1028px] left-0 opacity-50 top-0 w-[1572px]" />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[691.5px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[18px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="right">
      <div className="bg-[#f8fafe] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="left_icon">
          <div className="absolute inset-[21.88%]" data-name="vector">
            <div className="absolute inset-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2 10.2">
                <path d={svgPaths.p247d4e00} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame137 />
          <Right1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top2 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">Открытый</p>
          </div>
        </div>
      </div>
      <Frame140 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame139 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[14px] text-ellipsis">Финансовый сектор</p>
    </div>
  );
}

function Header6() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame138 />
        </div>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Что делать если результаты Группы ВТБ за 5м25 по МСФО отражают устойчивость базового бизнеса на фоне сжатия маржи и роста операционных расходов. Ключевое влияние на динамику прибыли оказали процентные доходы и качество кредитного портфеля. В дальнейшем фокус смещается на контроль рисков и сохранение капитала.</p>
        </div>
        <Frame144 />
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame143 />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#d4dae3] text-[12px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Никанов</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame147 />
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame146 />
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#d4dae3] text-[12px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Петр</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame150 />
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame149 />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Что делать если результаты Группы ВТБ за 5м25 по МСФО отражают устойчивость базового бизнеса на фоне сжатия маржи и роста операционных расходов. Ключевое влияние на динамику прибыли оказали процентные доходы и качество кредитного портфеля. В дальнейшем фокус смещается на контроль рисков и сохранение капитала.</p>
        </div>
        <Frame153 />
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame152 />
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#d4dae3] text-[12px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Елена</p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame156 />
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame155 />
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-start pt-[40px] relative shrink-0 w-full">
      <Frame142 />
      <Frame145 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-50 overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-center text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Передано в Финансовый сектор</p>
      </div>
      <Frame148 />
      <Frame151 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-50 overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-center text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Передано в Финансовый сектор</p>
      </div>
      <Frame154 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="link">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="link">
        <div className="absolute flex inset-[7.82%_7.21%_7.72%_8.33%] items-center justify-center">
          <div className="-rotate-45 flex-none h-[7.148px] w-[16.74px]">
            <div className="relative size-full">
              <div className="absolute inset-[-9.33%_-3.98%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.073 8.48116">
                  <path d={svgPaths.pea25e80} id="Vector 129" stroke="var(--stroke-0, #677C9C)" strokeLinecap="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EntertainmentMultimediaPhoto1() {
  return (
    <div className="absolute left-[2.5px] size-[15px] top-[2.5px]" data-name="entertainment/multimedia/photo">
      <div className="absolute inset-[-4.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333">
          <g id="entertainment/multimedia/photo">
            <path d={svgPaths.p25142d00} id="Vector 233" stroke="var(--stroke-0, #677C9C)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link1 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto1 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1e1ff00} fill="var(--fill-0, #5A8CFF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-white opacity-0 relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame158 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[40px] relative size-full">
          <Frame141 />
          <Frame157 />
        </div>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1028px] isolate items-start justify-center left-[570px] top-[48px] w-[1002px]">
      <Header5 />
      <Header6 />
      <Header7 />
    </div>
  );
}

export default function Rp() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="RP - Стартовый экран - Аналитик">
      <HeaderResearchPlatform />
      <Frame3 />
      <Frame136 />
    </div>
  );
}