import svgPaths from "./svg-287feuz4s7";
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
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

function Group10() {
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
      <Group10 />
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

function Frame189() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Мои тикеты</p>
      </div>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame189 />
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

function Frame199() {
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
        <Frame198 />
        <Frame199 />
      </div>
    </div>
  );
}

function Frame71() {
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

function Frame200() {
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

function Frame196() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame200 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame197() {
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

function Frame195() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame196 />
      <Frame197 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <Frame195 />
    </div>
  );
}

function Frame72() {
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

function Frame203() {
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

function Frame202() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame203 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame204() {
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

function Frame201() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame202 />
      <Frame204 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#eff4ff] border-solid inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame201 />
    </div>
  );
}

function Frame73() {
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

function Frame210() {
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

function Frame209() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame210 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame211() {
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

function Frame205() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame209 />
      <Frame211 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame205 />
    </div>
  );
}

function Frame74() {
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

function Frame215() {
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

function Frame214() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame215 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame216() {
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

function Frame213() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame214 />
      <Frame216 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame213 />
    </div>
  );
}

function Frame75() {
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

function Frame220() {
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

function Frame219() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame220 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame219 />
      <Frame221 />
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame218 />
    </div>
  );
}

function Frame76() {
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

function Frame225() {
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

function Frame224() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame225 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame226() {
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

function Frame223() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame224 />
      <Frame226 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame223 />
    </div>
  );
}

function Frame77() {
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

function Frame230() {
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

function Frame229() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame230 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame231() {
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

function Frame228() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame229 />
      <Frame231 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame228 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame79() {
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

function Frame235() {
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

function Frame234() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame235 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame234 />
      <Frame236 />
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame233 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame80() {
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

function Frame240() {
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

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame240 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame239 />
      <Frame241 />
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame238 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame81() {
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

function Frame246() {
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

function Frame245() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame246 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame245 />
      <Frame247 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame244 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame82() {
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

function Frame251() {
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

function Frame250() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame251 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame250 />
      <Frame252 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame249 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame83() {
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

function Frame256() {
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

function Frame255() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame256 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame255 />
      <Frame257 />
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame254 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame84() {
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

function Frame261() {
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

function Frame260() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame261 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame260 />
      <Frame262 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame259 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame85() {
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

function Frame266() {
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

function Frame265() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame266 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame265 />
      <Frame267 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame264 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame71 />
          <Frame206 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame72 />
          <Frame207 />
        </div>
        <div className="bg-[rgba(90,140,255,0.3)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame73 />
          <Frame208 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-[-5.03deg]">
                  <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#ceddff] border-solid inset-0 pointer-events-none rounded-[239.968px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame74 />
          <Frame212 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame75 />
          <Frame217 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame76 />
          <Frame222 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame77 />
          <Frame227 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame78 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame79 />
          <Frame232 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame80 />
          <Frame237 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame81 />
          <Frame242 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame82 />
          <Frame248 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame83 />
          <Frame253 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame84 />
          <Frame258 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame85 />
          <Frame263 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top />
      </div>
      <Frame38 />
    </div>
  );
}

function AvatarReport256PxRound() {
  return (
    <div className="bg-gradient-to-b from-[#5a8cff] mr-[-3px] relative rounded-[45.266px] shrink-0 size-[40px] to-[#6470ff]" data-name="avatar-report_256px_round">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[123.76px] items-center justify-center left-[-24.18px] top-[-12.7px] w-[88.362px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-5.03deg]">
            <div className="h-[117.337px] relative w-[78.37px]" data-name="Pro-Capture One 4734 копия 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[4.024px] border-solid border-white inset-[-4.024px] pointer-events-none rounded-[49.29px]" />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex items-center pr-[3px] relative shrink-0">
      <div className="bg-[#607985] mr-[-3px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <AvatarReport256PxRound />
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">Клиент:</p>
      </div>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame273 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] text-ellipsis whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#677c9c]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] overflow-hidden">Аналитик:</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#131722]">
        <p className="leading-[20px] overflow-hidden">Иван Сальковский</p>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame272 />
      <Frame274 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[691.5px]">
      <Frame270 />
      <Frame271 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right">
      <div className="bg-[#f8fafe] content-stretch cursor-pointer flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
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
      <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
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
          <Frame269 />
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

function Frame276() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#677c9c]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        от 04.12.2025
      </p>
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1bac75] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">В работе</p>
          </div>
        </div>
      </div>
      <Frame276 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame275 />
        </div>
      </div>
    </div>
  );
}

function Frame280() {
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

function Frame279() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame280 />
      </div>
    </div>
  );
}

function Frame278() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame279 />
      </div>
    </div>
  );
}

function Frame283() {
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

function Frame282() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame283 />
      </div>
    </div>
  );
}

function Frame281() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame282 />
      </div>
    </div>
  );
}

function Frame286() {
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

function Frame285() {
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
        <Frame286 />
      </div>
    </div>
  );
}

function Frame284() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame285 />
      </div>
    </div>
  );
}

function Frame289() {
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

function Frame288() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Спасибо за ответ, а что делать с акциями</p>
        </div>
        <Frame289 />
      </div>
    </div>
  );
}

function Frame287() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame288 />
      </div>
    </div>
  );
}

function Frame292() {
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

function Frame291() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame292 />
      </div>
    </div>
  );
}

function Frame290() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame291 />
      </div>
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end justify-end relative shrink-0 w-full">
      <Frame278 />
      <Frame281 />
      <Frame284 />
      <Frame287 />
      <Frame290 />
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

function Frame294() {
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

function Frame293() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame294 />
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
          <Frame277 />
          <Frame293 />
        </div>
      </div>
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-center min-h-px min-w-px relative">
      <Header1 />
      <Header2 />
      <Header3 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-ellipsis whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#131722] text-[18px]">
        <p className="leading-[24px] overflow-hidden">Максим Кузнецов</p>
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
          <Frame295 />
        </div>
      </div>
    </div>
  );
}

function Frame300() {
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

function Frame299() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame300 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame298({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame299 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
        </div>
      </div>
    </div>
  );
}

function Frame302() {
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

function Frame301() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame302 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame304() {
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

function Frame303() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame304 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame306() {
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

function Frame305() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame306 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame308() {
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

function Frame307() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame308 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame310() {
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

function Frame309() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame310 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame312() {
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

function Frame311() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame312 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame314() {
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

function Frame313() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame314 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame298 />
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame301 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame303 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame305 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame307 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame309 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame311 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame313 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame297 />
      </div>
    </div>
  );
}

function Publications1() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header4 />
        <Frame296 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame40 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <Frame36 />
      <Frame268 />
      <Frame39 />
    </div>
  );
}

function Rp() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[3373px] top-[320px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <HeaderResearchPlatform />
      <Frame37 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText4 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText5 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText6 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText7 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo1 />
      <Tabs1 />
    </div>
  );
}

function Group11() {
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

function TitleIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group11 />
    </div>
  );
}

function AccountButton1() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon1 />
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton1 />
    </div>
  );
}

function HeaderResearchPlatform1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs1 />
          <Menu1 />
        </div>
      </div>
    </div>
  );
}

function NameSector1() {
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

function Left1() {
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
            <NameSector1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Мои тикеты</p>
      </div>
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame190 />
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

function Component2ndSegment3() {
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

function Component2ndSegment4() {
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

function Component2ndSegment5() {
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

function Frame316() {
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
      <Component2ndSegment3 />
      <Component2ndSegment4 />
      <Component2ndSegment5 />
    </div>
  );
}

function Header5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame315 />
        <Frame316 />
      </div>
    </div>
  );
}

function Frame86() {
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

function Frame320() {
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

function Frame319() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame320 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame321() {
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

function Frame318() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame319 />
      <Frame321 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame318 />
    </div>
  );
}

function Frame87() {
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

function Frame325() {
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

function Frame324() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame325 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame326() {
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

function Frame323() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame324 />
      <Frame326 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame323 />
    </div>
  );
}

function Frame88() {
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

function Frame330() {
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

function Frame329() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame330 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame331() {
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

function Frame328() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame329 />
      <Frame331 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame328 />
    </div>
  );
}

function Frame89() {
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

function Frame335() {
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

function Frame334() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame335 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame336() {
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

function Frame333() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame334 />
      <Frame336 />
    </div>
  );
}

function Frame332() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame333 />
    </div>
  );
}

function Frame90() {
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

function Frame340() {
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

function Frame339() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame340 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame341() {
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

function Frame338() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame339 />
      <Frame341 />
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame338 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame91() {
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

function Frame345() {
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

function Frame344() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame345 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame346() {
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

function Frame343() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame344 />
      <Frame346 />
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame343 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame92() {
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

function Frame350() {
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

function Frame349() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame350 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame351() {
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

function Frame348() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame349 />
      <Frame351 />
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame348 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame94() {
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

function Frame355() {
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

function Frame354() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame355 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame353() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame354 />
      <Frame356 />
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame353 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame95() {
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

function Frame360() {
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

function Frame359() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame360 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame359 />
      <Frame361 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame358 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame96() {
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

function Frame365() {
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

function Frame364() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame365 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame364 />
      <Frame366 />
    </div>
  );
}

function Frame362() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame363 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame97() {
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

function Frame370() {
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

function Frame369() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame370 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame369 />
      <Frame371 />
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame368 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame98() {
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

function Frame375() {
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

function Frame374() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame375 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame374 />
      <Frame376 />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame373 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame99() {
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

function Frame380() {
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

function Frame379() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame380 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame379 />
      <Frame381 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame378 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame100() {
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

function Frame385() {
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

function Frame384() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame385 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame384 />
      <Frame386 />
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame383 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications2() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header5 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame86 />
          <Frame317 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame87 />
          <Frame322 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame88 />
          <Frame327 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame89 />
          <Frame332 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame90 />
          <Frame337 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame91 />
          <Frame342 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame92 />
          <Frame347 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame93 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame94 />
          <Frame352 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame95 />
          <Frame357 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame96 />
          <Frame362 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame97 />
          <Frame367 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame98 />
          <Frame372 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame99 />
          <Frame377 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame100 />
          <Frame382 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top2 />
      </div>
      <Frame43 />
    </div>
  );
}

function Frame388() {
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

function Top3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame388 />
          <Right1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top3 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1bac75] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">В работе</p>
          </div>
        </div>
      </div>
      <Frame390 />
    </div>
  );
}

function Header7() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame389 />
        </div>
      </div>
    </div>
  );
}

function Frame394() {
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

function Frame393() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame394 />
      </div>
    </div>
  );
}

function Frame392() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame393 />
      </div>
    </div>
  );
}

function Frame397() {
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

function Frame396() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame397 />
      </div>
    </div>
  );
}

function Frame395() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame396 />
      </div>
    </div>
  );
}

function Frame400() {
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

function Frame399() {
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
        <Frame400 />
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame399 />
      </div>
    </div>
  );
}

function Frame403() {
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

function Frame402() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Спасибо за ответ, а что делать с акциями</p>
        </div>
        <Frame403 />
      </div>
    </div>
  );
}

function Frame401() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame402 />
      </div>
    </div>
  );
}

function Frame406() {
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

function Frame405() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame406 />
      </div>
    </div>
  );
}

function Frame404() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame405 />
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end justify-end relative shrink-0 w-full">
      <Frame392 />
      <Frame395 />
      <Frame398 />
      <Frame401 />
      <Frame404 />
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

function Frame408() {
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

function Frame407() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame408 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame391 />
          <Frame407 />
        </div>
      </div>
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1028px] isolate items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <Header6 />
      <Header7 />
      <Header8 />
    </div>
  );
}

function Frame409() {
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

function Header9() {
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
          <Frame409 />
        </div>
      </div>
    </div>
  );
}

function Frame413() {
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

function Frame412() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame413 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame415() {
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

function Frame414() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame415 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame417() {
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

function Frame416() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame417 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame419() {
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

function Frame418() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame419 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame421() {
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

function Frame420() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame421 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame423() {
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

function Frame422() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame423 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame425() {
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

function Frame424() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame425 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame427() {
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

function Frame426() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame427 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(90,140,255,0.3)] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame412 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame414 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame416 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame418 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame420 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame422 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame424 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame426 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame410() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame411 />
      </div>
    </div>
  );
}

function Publications3() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header9 />
        <Frame410 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications3 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame45 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <Frame42 />
      <Frame387 />
      <Frame44 />
      <div className="absolute bg-black h-[1028px] left-0 opacity-50 top-0 w-[1572px]" />
    </div>
  );
}

function Frame429() {
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

function Right2() {
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

function Top4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame429 />
          <Right2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top4 />
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Frame431() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">Открытый</p>
          </div>
        </div>
      </div>
      <Frame432 />
    </div>
  );
}

function Frame430() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame431 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[14px] text-ellipsis">Финансовый сектор</p>
    </div>
  );
}

function Header11() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame430 />
        </div>
      </div>
    </div>
  );
}

function Frame436() {
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

function Frame435() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Что делать если результаты Группы ВТБ за 5м25 по МСФО отражают устойчивость базового бизнеса на фоне сжатия маржи и роста операционных расходов. Ключевое влияние на динамику прибыли оказали процентные доходы и качество кредитного портфеля. В дальнейшем фокус смещается на контроль рисков и сохранение капитала.</p>
        </div>
        <Frame436 />
      </div>
    </div>
  );
}

function Frame434() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame435 />
      </div>
    </div>
  );
}

function Frame439() {
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

function Frame438() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame439 />
      </div>
    </div>
  );
}

function Frame437() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame438 />
      </div>
    </div>
  );
}

function Frame442() {
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

function Frame441() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame442 />
      </div>
    </div>
  );
}

function Frame440() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame441 />
      </div>
    </div>
  );
}

function Frame445() {
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

function Frame444() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Что делать если результаты Группы ВТБ за 5м25 по МСФО отражают устойчивость базового бизнеса на фоне сжатия маржи и роста операционных расходов. Ключевое влияние на динамику прибыли оказали процентные доходы и качество кредитного портфеля. В дальнейшем фокус смещается на контроль рисков и сохранение капитала.</p>
        </div>
        <Frame445 />
      </div>
    </div>
  );
}

function Frame443() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame444 />
      </div>
    </div>
  );
}

function Frame448() {
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

function Frame447() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame448 />
      </div>
    </div>
  );
}

function Frame446() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame447 />
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-start pt-[40px] relative shrink-0 w-full">
      <Frame434 />
      <Frame437 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-50 overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-center text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Передано в Финансовый сектор</p>
      </div>
      <Frame440 />
      <Frame443 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-50 overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-center text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Передано в Финансовый сектор</p>
      </div>
      <Frame446 />
    </div>
  );
}

function Link2() {
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

function EntertainmentMultimediaPhoto2() {
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

function Frame450() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link2 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto2 />
      </div>
    </div>
  );
}

function Group2() {
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

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group2 />
    </div>
  );
}

function Frame449() {
  return (
    <div className="bg-white opacity-0 relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame450 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Header12() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[40px] relative size-full">
          <Frame433 />
          <Frame449 />
        </div>
      </div>
    </div>
  );
}

function Frame428() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1028px] isolate items-start justify-center left-[570px] top-[48px] w-[1002px]">
      <Header10 />
      <Header11 />
      <Header12 />
    </div>
  );
}

function Rp1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[9368px] top-[320px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <HeaderResearchPlatform1 />
      <Frame41 />
      <Frame428 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText8 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText9 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText10 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText11 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo2 />
      <Tabs2 />
    </div>
  );
}

function Group13() {
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

function TitleIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group13 />
    </div>
  );
}

function AccountButton2() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon2 />
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton2 />
    </div>
  );
}

function HeaderResearchPlatform2() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-between ml-0 mt-0 pr-[16px] relative row-1 w-[1920px]" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <LogoTabs2 />
      <Menu2 />
    </div>
  );
}

function NameSector2() {
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

function Left2() {
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
            <NameSector2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Мои тикеты</p>
      </div>
    </div>
  );
}

function Frame451() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame191 />
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

function Component2ndSegment6() {
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

function Component2ndSegment7() {
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

function Component2ndSegment8() {
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

function Frame452() {
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
      <Component2ndSegment6 />
      <Component2ndSegment7 />
      <Component2ndSegment8 />
    </div>
  );
}

function Header13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame451 />
        <Frame452 />
      </div>
    </div>
  );
}

function Frame101() {
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

function Frame456() {
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

function Frame455() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame456 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame457() {
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

function Frame454() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame455 />
      <Frame457 />
    </div>
  );
}

function Frame453() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame454 />
    </div>
  );
}

function Frame102() {
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

function Frame461() {
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

function Frame460() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame461 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame462() {
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

function Frame459() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame460 />
      <Frame462 />
    </div>
  );
}

function Frame458() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame459 />
    </div>
  );
}

function Frame103() {
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

function Frame466() {
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

function Frame465() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame466 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame467() {
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

function Frame464() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame465 />
      <Frame467 />
    </div>
  );
}

function Frame463() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame464 />
    </div>
  );
}

function Frame104() {
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

function Frame471() {
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

function Frame470() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame471 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame472() {
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

function Frame469() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame470 />
      <Frame472 />
    </div>
  );
}

function Frame468() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame469 />
    </div>
  );
}

function Frame105() {
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

function Frame476() {
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

function Frame475() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame476 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame477() {
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

function Frame474() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame475 />
      <Frame477 />
    </div>
  );
}

function Frame473() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame474 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame106() {
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

function Frame481() {
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

function Frame480() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame481 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame482() {
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

function Frame479() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame480 />
      <Frame482 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame479 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame107() {
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

function Frame486() {
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

function Frame485() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame486 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame487() {
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

function Frame484() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame485 />
      <Frame487 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame484 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame108() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame109() {
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

function Frame491() {
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

function Frame490() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame491 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame492() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame489() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame490 />
      <Frame492 />
    </div>
  );
}

function Frame488() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame489 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame110() {
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

function Frame496() {
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

function Frame495() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame496 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame497() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame494() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame495 />
      <Frame497 />
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame494 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame111() {
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

function Frame501() {
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

function Frame500() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame501 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame502() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame499() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame500 />
      <Frame502 />
    </div>
  );
}

function Frame498() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame499 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame112() {
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

function Frame506() {
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

function Frame505() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame506 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame504() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame505 />
      <Frame507 />
    </div>
  );
}

function Frame503() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame504 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame113() {
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

function Frame511() {
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

function Frame510() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame511 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame512() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame509() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame510 />
      <Frame512 />
    </div>
  );
}

function Frame508() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame509 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame114() {
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

function Frame516() {
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

function Frame515() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame516 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame517() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame514() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame515 />
      <Frame517 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame514 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame115() {
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

function Frame521() {
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

function Frame520() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame521 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame522() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame519() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame520 />
      <Frame522 />
    </div>
  );
}

function Frame518() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame519 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications4() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header13 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame101 />
          <Frame453 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame102 />
          <Frame458 />
        </div>
        <div className="bg-[rgba(90,140,255,0.3)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame103 />
          <Frame463 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame104 />
          <Frame468 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame105 />
          <Frame473 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame106 />
          <Frame478 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame107 />
          <Frame483 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame108 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame109 />
          <Frame488 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame110 />
          <Frame493 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame111 />
          <Frame498 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame112 />
          <Frame503 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame113 />
          <Frame508 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame114 />
          <Frame513 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame115 />
          <Frame518 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications4 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top5 />
      </div>
      <Frame48 />
    </div>
  );
}

function Frame524() {
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

function Right3() {
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

function Top6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame524 />
          <Right3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header14() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top6 />
    </div>
  );
}

function Frame525() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis w-full">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Header15() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame525 />
        </div>
      </div>
    </div>
  );
}

function Frame529() {
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

function Frame528() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame529 />
      </div>
    </div>
  );
}

function Frame527() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame528 />
      </div>
    </div>
  );
}

function Frame532() {
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

function Frame531() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame532 />
      </div>
    </div>
  );
}

function Frame530() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame531 />
      </div>
    </div>
  );
}

function Frame535() {
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

function Frame534() {
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
        <Frame535 />
      </div>
    </div>
  );
}

function Frame533() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame534 />
      </div>
    </div>
  );
}

function Frame538() {
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

function Frame537() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Спасибо за ответ, а что делать с акциями</p>
        </div>
        <Frame538 />
      </div>
    </div>
  );
}

function Frame536() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame537 />
      </div>
    </div>
  );
}

function Frame541() {
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

function Frame540() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame541 />
      </div>
    </div>
  );
}

function Frame539() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame540 />
      </div>
    </div>
  );
}

function Frame526() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end justify-end relative shrink-0 w-full">
      <Frame527 />
      <Frame530 />
      <Frame533 />
      <Frame536 />
      <Frame539 />
    </div>
  );
}

function Link3() {
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

function EntertainmentMultimediaPhoto3() {
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

function Frame543() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link3 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto3 />
      </div>
    </div>
  );
}

function Group3() {
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

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group3 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame543 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Header16() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame526 />
          <Frame542 />
        </div>
      </div>
    </div>
  );
}

function Frame523() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-center min-h-px min-w-px relative">
      <Header14 />
      <Header15 />
      <Header16 />
    </div>
  );
}

function Frame544() {
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

function Header17() {
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
          <Frame544 />
        </div>
      </div>
    </div>
  );
}

function Frame548() {
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

function Frame547() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame548 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame550() {
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

function Frame549() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame550 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame552() {
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

function Frame551() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame552 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame554() {
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

function Frame553() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame554 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame556() {
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

function Frame555() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame556 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame558() {
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

function Frame557() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame558 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame560() {
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

function Frame559() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame560 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame562() {
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

function Frame561() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame562 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame546() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame547 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame549 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame551 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame553 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame555 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame557 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame559 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame561 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame545() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame546 />
      </div>
    </div>
  );
}

function Publications5() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header17 />
        <Frame545 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications5 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame50 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white col-1 content-stretch flex h-[1028px] items-start ml-0 mt-[48px] overflow-clip relative row-1 w-[1920px]">
      <Frame47 />
      <Frame523 />
      <Frame49 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <HeaderResearchPlatform2 />
      <Frame46 />
    </div>
  );
}

function BgModal() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[1076px] left-0 top-0 w-[1920px]" data-name="bg+modal" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Макроэкономика</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame7({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Ставки, облигации, валюты</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Максим Коровин</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`Корпоративный долг `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Станислав Боженко</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#5a8cff] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Стратегия: акции</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Лидия Михайлова</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Нефть и газ: добыча и переработка</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Андрей Полищук</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Материалы</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Никанор Халин</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Финансовый сектор</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Светлана Асланова</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">ТМТ</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Владимир Беспалов</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Розничная торговля и недвижимость</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Транспорт</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Глобальные активы</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Электроэнергетика</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Паевые инвестиционные фонды</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame7 />
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame11 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame12 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame13 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame14 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame16 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame17 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame18 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame19 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame20 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame21 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rail() {
  return <div className="absolute bg-[#e9f1f6] bottom-0 right-0 rounded-[2px] top-0 w-[6px]" data-name="rail" />;
}

function Scroll() {
  return <div className="absolute bg-[#5a8cff] h-[49px] right-0 rounded-[4px] top-[25px] w-[6px]" data-name="scroll" />;
}

function Body() {
  return (
    <div className="bg-white h-[510px] relative shrink-0 w-full" data-name="body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
          <Frame8 />
          <div className="absolute h-[510px] opacity-20 right-0 top-0 w-[6px]" data-name="vertical_scroll">
            <Rail />
            <Scroll />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end p-[16px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="buttons">
            <div className="bg-[#f8fafe] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[204.5px]" data-name="button">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Отмена</p>
              </div>
            </div>
            <div className="bg-[#5a8cff] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[204.5px]" data-name="button">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                <p className="leading-[16px]">Передать</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9f1f6] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Modal() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip rounded-[8px] top-1/2 w-[448px]" data-name="modal">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="title">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#131722] text-[18px] w-full">
                <p className="leading-[24px] whitespace-pre-wrap">Передать тикет</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#677c9c] text-[14px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Выберите деск которому хотите передать данный тикет</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

function Rp2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[5356px] top-[320px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <Group12 />
      <BgModal />
      <Modal />
    </div>
  );
}

function Logo3() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText12 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText13 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText14 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText15 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo3 />
      <Tabs3 />
    </div>
  );
}

function Group15() {
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

function TitleIcon3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group15 />
    </div>
  );
}

function AccountButton3() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon3 />
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton3 />
    </div>
  );
}

function HeaderResearchPlatform3() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-between ml-0 mt-0 pr-[16px] relative row-1 w-[1920px]" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <LogoTabs3 />
      <Menu3 />
    </div>
  );
}

function NameSector3() {
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

function Left3() {
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
            <NameSector3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Мои тикеты</p>
      </div>
    </div>
  );
}

function Frame563() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame192 />
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

function Component2ndSegment9() {
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

function Component2ndSegment10() {
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

function Component2ndSegment11() {
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

function Frame564() {
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
      <Component2ndSegment9 />
      <Component2ndSegment10 />
      <Component2ndSegment11 />
    </div>
  );
}

function Header18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame563 />
        <Frame564 />
      </div>
    </div>
  );
}

function Frame116() {
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

function Frame568() {
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

function Frame567() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame568 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame569() {
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

function Frame566() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame567 />
      <Frame569 />
    </div>
  );
}

function Frame565() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame566 />
    </div>
  );
}

function Frame117() {
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

function Frame573() {
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

function Frame572() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame573 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame574() {
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

function Frame571() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame572 />
      <Frame574 />
    </div>
  );
}

function Frame570() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame571 />
    </div>
  );
}

function Frame118() {
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

function Frame578() {
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

function Frame577() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame578 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame579() {
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

function Frame576() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame577 />
      <Frame579 />
    </div>
  );
}

function Frame575() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame576 />
    </div>
  );
}

function Frame119() {
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

function Frame583() {
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

function Frame582() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame583 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame584() {
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

function Frame581() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame582 />
      <Frame584 />
    </div>
  );
}

function Frame580() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame581 />
    </div>
  );
}

function Frame120() {
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

function Frame588() {
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

function Frame587() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame588 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame589() {
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

function Frame586() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame587 />
      <Frame589 />
    </div>
  );
}

function Frame585() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame586 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame121() {
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

function Frame593() {
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

function Frame592() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame593 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame594() {
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

function Frame591() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame592 />
      <Frame594 />
    </div>
  );
}

function Frame590() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame591 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame122() {
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

function Frame598() {
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

function Frame597() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame598 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame599() {
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

function Frame596() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame597 />
      <Frame599 />
    </div>
  );
}

function Frame595() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame596 />
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame123() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame124() {
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

function Frame603() {
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

function Frame602() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame603 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame604() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame601() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame602 />
      <Frame604 />
    </div>
  );
}

function Frame600() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame601 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame125() {
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

function Frame608() {
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

function Frame607() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame608 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame609() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame606() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame607 />
      <Frame609 />
    </div>
  );
}

function Frame605() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame606 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame126() {
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

function Frame613() {
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

function Frame612() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame613 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame614() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame611() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame612 />
      <Frame614 />
    </div>
  );
}

function Frame610() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame611 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame127() {
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

function Frame618() {
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

function Frame617() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame618 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame619() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame616() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame617 />
      <Frame619 />
    </div>
  );
}

function Frame615() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame616 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame128() {
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

function Frame623() {
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

function Frame622() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame623 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame624() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame621() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame622 />
      <Frame624 />
    </div>
  );
}

function Frame620() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame621 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame129() {
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

function Frame628() {
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

function Frame627() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame628 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame629() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame626() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame627 />
      <Frame629 />
    </div>
  );
}

function Frame625() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame626 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame130() {
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

function Frame633() {
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

function Frame632() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame633 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame634() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame631() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame632 />
      <Frame634 />
    </div>
  );
}

function Frame630() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame631 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications6() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header18 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame116 />
          <Frame565 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame117 />
          <Frame570 />
        </div>
        <div className="bg-[rgba(90,140,255,0.3)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame118 />
          <Frame575 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame119 />
          <Frame580 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame120 />
          <Frame585 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame121 />
          <Frame590 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame122 />
          <Frame595 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame123 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame124 />
          <Frame600 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame125 />
          <Frame605 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame126 />
          <Frame610 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame127 />
          <Frame615 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame128 />
          <Frame620 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame129 />
          <Frame625 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame130 />
          <Frame630 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications6 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top7 />
      </div>
      <Frame53 />
    </div>
  );
}

function Frame636() {
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

function Right4() {
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

function Top8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame636 />
          <Right4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header19() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top8 />
    </div>
  );
}

function Frame637() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis w-full">
      <p className="overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="overflow-hidden relative shrink-0 text-[#677c9c]">от 04.12.2025</p>
    </div>
  );
}

function Header20() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame637 />
        </div>
      </div>
    </div>
  );
}

function Frame641() {
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

function Frame640() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame641 />
      </div>
    </div>
  );
}

function Frame639() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame640 />
      </div>
    </div>
  );
}

function Frame644() {
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

function Frame643() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame644 />
      </div>
    </div>
  );
}

function Frame642() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame643 />
      </div>
    </div>
  );
}

function Frame647() {
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

function Frame646() {
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
        <Frame647 />
      </div>
    </div>
  );
}

function Frame645() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame646 />
      </div>
    </div>
  );
}

function Frame650() {
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

function Frame649() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Спасибо за ответ, а что делать с акциями</p>
        </div>
        <Frame650 />
      </div>
    </div>
  );
}

function Frame648() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame649 />
      </div>
    </div>
  );
}

function Frame653() {
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

function Frame652() {
  return (
    <div className="bg-[#3b66c9] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative w-full">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Вернусь с ответом через 30 минут</p>
        </div>
        <Frame653 />
      </div>
    </div>
  );
}

function Frame651() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame652 />
      </div>
    </div>
  );
}

function Frame638() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end justify-end relative shrink-0 w-full">
      <Frame639 />
      <Frame642 />
      <Frame645 />
      <Frame648 />
      <Frame651 />
    </div>
  );
}

function Link4() {
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

function EntertainmentMultimediaPhoto4() {
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

function Frame655() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link4 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto4 />
      </div>
    </div>
  );
}

function Group4() {
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

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group4 />
    </div>
  );
}

function Frame654() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame655 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Header21() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame638 />
          <Frame654 />
        </div>
      </div>
    </div>
  );
}

function Frame635() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-center min-h-px min-w-px relative">
      <Header19 />
      <Header20 />
      <Header21 />
    </div>
  );
}

function Frame656() {
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

function Header22() {
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
          <Frame656 />
        </div>
      </div>
    </div>
  );
}

function Frame660() {
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

function Frame659() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame660 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame662() {
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

function Frame661() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame662 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame664() {
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

function Frame663() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame664 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame666() {
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

function Frame665() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame666 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame668() {
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

function Frame667() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame668 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame670() {
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

function Frame669() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame670 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame672() {
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

function Frame671() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame672 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame674() {
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

function Frame673() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame674 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame658() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame659 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame661 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame663 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame665 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame667 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame669 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame671 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame673 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame657() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame658 />
      </div>
    </div>
  );
}

function Publications7() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header22 />
        <Frame657 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications7 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame55 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white col-1 content-stretch flex h-[1028px] items-start ml-0 mt-[48px] overflow-clip relative row-1 w-[1920px]">
      <Frame52 />
      <Frame635 />
      <Frame54 />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <HeaderResearchPlatform3 />
      <Frame51 />
    </div>
  );
}

function BgModal1() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[1076px] left-0 top-0 w-[1920px]" data-name="bg+modal" />;
}

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-1/2 w-[370px]" data-name="Удаление виджета">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center not-italic relative shrink-0 w-full" data-name="title">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
                <p className="leading-[24px]">Закрыть тикет?</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] min-w-full relative shrink-0 text-[#677c9c] text-[14px] text-center w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
                <p className="mb-0">После подтверждения тикет будет переведён</p>
                <p>в статус «Закрыт»</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="footer">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="buttons">
              <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Отмена</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#5a8cff] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                      <p className="leading-[16px]">Закрыть</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Rp3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[7357px] top-[320px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <Group14 />
      <BgModal1 />
      <Component />
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText16 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText17 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText18 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText19 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo4 />
      <Tabs4 />
    </div>
  );
}

function Group16() {
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

function TitleIcon4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group16 />
    </div>
  );
}

function AccountButton4() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon4 />
    </div>
  );
}

function Menu4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton4 />
    </div>
  );
}

function HeaderResearchPlatform4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs4 />
          <Menu4 />
        </div>
      </div>
    </div>
  );
}

function NameSector4() {
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

function Left4() {
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
            <NameSector4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Тикеты</p>
      </div>
    </div>
  );
}

function Frame675() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame193 />
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

function Component2ndSegment12() {
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

function Component2ndSegment13() {
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

function Component2ndSegment14() {
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

function Frame676() {
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
      <Component2ndSegment12 />
      <Component2ndSegment13 />
      <Component2ndSegment14 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">Показывать только мои</p>
      </div>
    </div>
  );
}

function CheckboxText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="checkbox+text">
      <div className="relative shrink-0 size-[16px]" data-name="checkbox">
        <div className="absolute border border-[#caced9] border-solid inset-0 rounded-[4px]" data-name="border" />
      </div>
      <Text />
    </div>
  );
}

function Header23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame675 />
        <Frame676 />
        <CheckboxText />
      </div>
    </div>
  );
}

function Frame131() {
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

function Frame680() {
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

function Frame679() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame680 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame681() {
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

function Frame678() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame679 />
      <Frame681 />
    </div>
  );
}

function Frame677() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <Frame678 />
    </div>
  );
}

function Frame132() {
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

function Frame685() {
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

function Frame684() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame685 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame686() {
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

function Frame683() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame684 />
      <Frame686 />
    </div>
  );
}

function Frame682() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#eff4ff] border-solid inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame683 />
    </div>
  );
}

function Frame133() {
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

function Frame690() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame689() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame690 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame691() {
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

function Frame688() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame689 />
      <Frame691 />
    </div>
  );
}

function Frame687() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame688 />
    </div>
  );
}

function Frame134() {
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

function Frame695() {
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

function Frame694() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame695 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame696() {
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

function Frame693() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame694 />
      <Frame696 />
    </div>
  );
}

function Frame692() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame693 />
    </div>
  );
}

function Frame135() {
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

function Frame700() {
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

function Frame699() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame700 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame701() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame698() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame699 />
      <Frame701 />
    </div>
  );
}

function Frame697() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame698 />
    </div>
  );
}

function Frame136() {
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

function Frame705() {
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

function Frame704() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame705 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame706() {
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

function Frame703() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame704 />
      <Frame706 />
    </div>
  );
}

function Frame702() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame703 />
    </div>
  );
}

function Frame137() {
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

function Frame710() {
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

function Frame709() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame710 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame711() {
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

function Frame708() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame709 />
      <Frame711 />
    </div>
  );
}

function Frame707() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame708 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame139() {
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

function Frame715() {
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

function Frame714() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame715 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame716() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame713() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame714 />
      <Frame716 />
    </div>
  );
}

function Frame712() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame713 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame140() {
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

function Frame720() {
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

function Frame719() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame720 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame721() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame718() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame719 />
      <Frame721 />
    </div>
  );
}

function Frame717() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame718 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame141() {
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

function Frame725() {
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

function Frame724() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame725 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame726() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame723() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame724 />
      <Frame726 />
    </div>
  );
}

function Frame722() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame723 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame142() {
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

function Frame730() {
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

function Frame729() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame730 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame731() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame728() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame729 />
      <Frame731 />
    </div>
  );
}

function Frame727() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame728 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame143() {
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

function Frame735() {
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

function Frame734() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame735 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame736() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame733() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame734 />
      <Frame736 />
    </div>
  );
}

function Frame732() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame733 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame144() {
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

function Frame740() {
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

function Frame739() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame740 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame741() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame738() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame739 />
      <Frame741 />
    </div>
  );
}

function Frame737() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame738 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame145() {
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

function Frame745() {
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

function Frame744() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame745 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame746() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame743() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame744 />
      <Frame746 />
    </div>
  );
}

function Frame742() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame743 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications8() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header23 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame131 />
          <Frame677 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame132 />
          <Frame682 />
        </div>
        <div className="bg-[rgba(90,140,255,0.3)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame133 />
          <Frame687 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame134 />
          <Frame692 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame135 />
          <Frame697 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame136 />
          <Frame702 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame137 />
          <Frame707 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame138 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame139 />
          <Frame712 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame140 />
          <Frame717 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame141 />
          <Frame722 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame142 />
          <Frame727 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame143 />
          <Frame732 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame144 />
          <Frame737 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame145 />
          <Frame742 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications8 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top9 />
      </div>
      <Frame58 />
    </div>
  );
}

function Frame749() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Frame751() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Клиент:</p>
      </div>
    </div>
  );
}

function Frame750() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame751 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame748() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[691.5px]">
      <Frame749 />
      <Frame750 />
    </div>
  );
}

function Right5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right">
      <div className="bg-[#f8fafe] content-stretch cursor-pointer flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
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
      <div className="bg-[#f8fafe] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="left_icon">
          <div className="absolute inset-[14.54%_14.45%_16.71%_16.8%]" data-name="vector">
            <div className="absolute inset-[-5.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2 12.2">
                <path d={svgPaths.p1639f300} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Взять в работу</p>
        </div>
      </div>
    </div>
  );
}

function Top10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame748 />
          <Right5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header24() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top10 />
    </div>
  );
}

function Frame753() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#677c9c]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        от 04.12.2025
      </p>
    </div>
  );
}

function Frame752() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">Открыт</p>
          </div>
        </div>
      </div>
      <Frame753 />
    </div>
  );
}

function Header25() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame752 />
        </div>
      </div>
    </div>
  );
}

function Frame757() {
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

function Frame756() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame757 />
      </div>
    </div>
  );
}

function Frame755() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame756 />
      </div>
    </div>
  );
}

function Frame758() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#5a8cff] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="left_icon">
          <div className="absolute inset-[14.54%_14.45%_16.71%_16.8%]" data-name="vector">
            <div className="absolute inset-[-5.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2 12.2">
                <path d={svgPaths.p1639f300} id="vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Взять в работу</p>
        </div>
      </div>
    </div>
  );
}

function Frame754() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end pt-[24px] relative shrink-0 w-full">
      <Frame755 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[14px] text-center text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Чтобы ответить клиенту, возьмите тикет в работу</p>
      </div>
      <Frame758 />
    </div>
  );
}

function Link5() {
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

function EntertainmentMultimediaPhoto5() {
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

function Frame760() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link5 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto5 />
      </div>
    </div>
  );
}

function Group5() {
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

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group5 />
    </div>
  );
}

function Frame759() {
  return (
    <div className="bg-white opacity-30 relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame760 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Header26() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame754 />
          <Frame759 />
        </div>
      </div>
    </div>
  );
}

function Frame747() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-center min-h-px min-w-px relative">
      <Header24 />
      <Header25 />
      <Header26 />
    </div>
  );
}

function Frame761() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-ellipsis whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#131722] text-[18px]">
        <p className="leading-[24px] overflow-hidden">Максим Кузнецов</p>
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

function Header27() {
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
          <Frame761 />
        </div>
      </div>
    </div>
  );
}

function Frame765() {
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

function Frame764() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame765 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame767() {
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

function Frame766() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame767 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame769() {
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

function Frame768() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame769 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame771() {
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

function Frame770() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame771 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame773() {
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

function Frame772() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame773 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame775() {
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

function Frame774() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame775 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame777() {
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

function Frame776() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame777 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame779() {
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

function Frame778() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame779 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame763() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame764 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame766 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame768 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame770 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame772 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame774 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame776 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame778 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame762() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame763 />
      </div>
    </div>
  );
}

function Publications9() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header27 />
        <Frame762 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications9 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame60 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <Frame57 />
      <Frame747 />
      <Frame59 />
    </div>
  );
}

function Rp4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[5782px] top-[2362px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <HeaderResearchPlatform4 />
      <Frame56 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText20 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText21 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText22 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText23 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo5 />
      <Tabs5 />
    </div>
  );
}

function Group17() {
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

function TitleIcon5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group17 />
    </div>
  );
}

function AccountButton5() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon5 />
    </div>
  );
}

function Menu5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton5 />
    </div>
  );
}

function HeaderResearchPlatform5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs5 />
          <Menu5 />
        </div>
      </div>
    </div>
  );
}

function NameSector5() {
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

function Left5() {
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
            <NameSector5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Тикеты</p>
      </div>
    </div>
  );
}

function Frame780() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame194 />
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

function Component2ndSegment15() {
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

function Component2ndSegment16() {
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

function Component2ndSegment17() {
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

function Frame781() {
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
      <Component2ndSegment15 />
      <Component2ndSegment16 />
      <Component2ndSegment17 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">Показывать только мои</p>
      </div>
    </div>
  );
}

function CheckboxText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="checkbox+text">
      <div className="relative shrink-0 size-[16px]" data-name="checkbox">
        <div className="absolute border border-[#caced9] border-solid inset-0 rounded-[4px]" data-name="border" />
      </div>
      <Text1 />
    </div>
  );
}

function Header28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame780 />
        <Frame781 />
        <CheckboxText1 />
      </div>
    </div>
  );
}

function Frame146() {
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

function Frame785() {
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

function Frame784() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame785 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame786() {
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

function Frame783() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame784 />
      <Frame786 />
    </div>
  );
}

function Frame782() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <Frame783 />
    </div>
  );
}

function Frame147() {
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

function Frame790() {
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

function Frame789() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame790 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame791() {
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

function Frame788() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame789 />
      <Frame791 />
    </div>
  );
}

function Frame787() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-[-2px] from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-5.03deg]">
              <div className="h-[63.841px] relative w-[42.64px]" data-name="Pro-Capture One 4734 копия 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProCaptureOne47341} />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#eff4ff] border-solid inset-0 pointer-events-none rounded-[239.968px]" />
      </div>
      <Frame788 />
    </div>
  );
}

function Frame148() {
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

function Frame795() {
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

function Frame794() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame795 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame796() {
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

function Frame793() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame794 />
      <Frame796 />
    </div>
  );
}

function Frame792() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame793 />
    </div>
  );
}

function Frame149() {
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

function Frame800() {
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

function Frame799() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame800 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame801() {
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

function Frame798() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame799 />
      <Frame801 />
    </div>
  );
}

function Frame797() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame798 />
    </div>
  );
}

function Frame150() {
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

function Frame805() {
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

function Frame804() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame805 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame806() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame803() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame804 />
      <Frame806 />
    </div>
  );
}

function Frame802() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame803 />
    </div>
  );
}

function Frame151() {
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

function Frame810() {
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

function Frame809() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame810 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame811() {
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

function Frame808() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame809 />
      <Frame811 />
    </div>
  );
}

function Frame807() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame808 />
    </div>
  );
}

function Frame152() {
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

function Frame815() {
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

function Frame814() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame815 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame816() {
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

function Frame813() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame814 />
      <Frame816 />
    </div>
  );
}

function Frame812() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame813 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame154() {
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

function Frame820() {
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

function Frame819() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame820 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame821() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame818() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame819 />
      <Frame821 />
    </div>
  );
}

function Frame817() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame818 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame155() {
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

function Frame825() {
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

function Frame824() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame825 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame826() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame823() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame824 />
      <Frame826 />
    </div>
  );
}

function Frame822() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame823 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame156() {
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

function Frame830() {
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

function Frame829() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame830 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame831() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame828() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame829 />
      <Frame831 />
    </div>
  );
}

function Frame827() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame828 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame157() {
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

function Frame835() {
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

function Frame834() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame835 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame836() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame833() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame834 />
      <Frame836 />
    </div>
  );
}

function Frame832() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame833 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame158() {
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

function Frame840() {
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

function Frame839() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame840 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame841() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame838() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame839 />
      <Frame841 />
    </div>
  );
}

function Frame837() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame838 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame159() {
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

function Frame845() {
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

function Frame844() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame845 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame846() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame843() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame844 />
      <Frame846 />
    </div>
  );
}

function Frame842() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame843 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame160() {
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

function Frame850() {
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

function Frame849() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame850 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame851() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame848() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame849 />
      <Frame851 />
    </div>
  );
}

function Frame847() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame848 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications10() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header28 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame146 />
          <Frame782 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame147 />
          <Frame787 />
        </div>
        <div className="bg-[rgba(90,140,255,0.3)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame148 />
          <Frame792 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame149 />
          <Frame797 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame150 />
          <Frame802 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame151 />
          <Frame807 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame152 />
          <Frame812 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame153 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame154 />
          <Frame817 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame155 />
          <Frame822 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame156 />
          <Frame827 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame157 />
          <Frame832 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame158 />
          <Frame837 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame159 />
          <Frame842 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame160 />
          <Frame847 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications10 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
        <Top11 />
      </div>
      <Frame63 />
    </div>
  );
}

function AvatarReport256PxRound1() {
  return (
    <div className="bg-gradient-to-b from-[#5a8cff] mr-[-3px] relative rounded-[45.266px] shrink-0 size-[40px] to-[#6470ff]" data-name="avatar-report_256px_round">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[99.05px] items-center justify-center left-[-18.29px] top-[-8.52px] w-[70.72px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-5.03deg]">
            <div className="h-[93.909px] relative w-[62.723px]" data-name="Pro-Capture One 4734 копия 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={img2509Ph333} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[4.024px] border-solid border-white inset-[-4.024px] pointer-events-none rounded-[49.29px]" />
    </div>
  );
}

function Frame854() {
  return (
    <div className="content-stretch flex items-center pr-[3px] relative shrink-0">
      <div className="bg-[#607985] mr-[-3px] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <AvatarReport256PxRound1 />
    </div>
  );
}

function Frame857() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Клиент:</p>
      </div>
    </div>
  );
}

function Frame856() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame857 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame859() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Аналитик:</p>
      </div>
    </div>
  );
}

function Frame858() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame859 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Никанор Халин</p>
      </div>
    </div>
  );
}

function Frame855() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame856 />
      <Frame858 />
    </div>
  );
}

function Frame853() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[691.5px]">
      <Frame854 />
      <Frame855 />
    </div>
  );
}

function Right6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right">
      <div className="bg-[#f8fafe] content-stretch cursor-pointer flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
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
      <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button_dark">
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

function Top12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <Frame853 />
          <Right6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header29() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full z-[3]" data-name="Header">
      <Top12 />
    </div>
  );
}

function Frame861() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-ellipsis">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#131722]">ВК — Технический пересмотр прогнозов после допэмиссии</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#677c9c]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        от 04.12.2025
      </p>
    </div>
  );
}

function Frame860() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[rgba(31,201,137,0.1)] content-stretch flex gap-[4px] h-[24px] items-center justify-center min-w-[20px] px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1bac75] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">В работе</p>
          </div>
        </div>
      </div>
      <Frame861 />
    </div>
  );
}

function Header30() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Frame860 />
        </div>
      </div>
    </div>
  );
}

function Frame865() {
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

function Frame864() {
  return (
    <div className="bg-white relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic p-[20px] relative text-ellipsis w-full">
        <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#131722] text-[14px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?</p>
        </div>
        <Frame865 />
      </div>
    </div>
  );
}

function Frame863() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[40px] relative w-full">
        <Frame864 />
      </div>
    </div>
  );
}

function Frame868() {
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

function Frame867() {
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
        <Frame868 />
      </div>
    </div>
  );
}

function Frame866() {
  return (
    <div className="relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[40px] relative w-full">
        <Frame867 />
      </div>
    </div>
  );
}

function Frame869() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[14px] text-center text-ellipsis" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Не забудьте закрыть тикет после окончания диалога с клиентом</p>
      </div>
    </div>
  );
}

function Frame862() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[786px] items-end pt-[24px] relative shrink-0 w-full">
      <Frame863 />
      <Frame866 />
      <Frame869 />
    </div>
  );
}

function Link6() {
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

function EntertainmentMultimediaPhoto6() {
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

function Frame871() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link6 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="image">
        <EntertainmentMultimediaPhoto6 />
      </div>
    </div>
  );
}

function Group6() {
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

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group6 />
    </div>
  );
}

function Frame870() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Frame871 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative text-[#131722] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Начните вводить сообщение</p>
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Header31() {
  return (
    <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] px-[276px] relative size-full">
          <Frame862 />
          <Frame870 />
        </div>
      </div>
    </div>
  );
}

function Frame852() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-center min-h-px min-w-px relative">
      <Header29 />
      <Header30 />
      <Header31 />
    </div>
  );
}

function Frame872() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-ellipsis whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#131722] text-[18px]">
        <p className="leading-[24px] overflow-hidden">Максим Кузнецов</p>
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

function Header32() {
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
          <Frame872 />
        </div>
      </div>
    </div>
  );
}

function Frame876() {
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

function Frame875() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame876 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame878() {
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

function Frame877() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame878 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame880() {
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

function Frame879() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame880 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame882() {
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

function Frame881() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame882 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame884() {
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

function Frame883() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame884 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame886() {
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

function Frame885() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame886 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame888() {
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

function Frame887() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame888 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame890() {
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

function Frame889() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame890 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">14.04.2025</p>
      </div>
    </div>
  );
}

function Frame874() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame875 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame877 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame879 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25 длинное название не больше двух...</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame881 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ – Аэрофлот — Перевес по дивидендам - Почему прибыль лучше оставить на борту?</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame883 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">Какие акции стоит добавить в портфель в этом году, какие стоит убрать</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame885 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">ГЛОБАЛЬНЫЙ РЫНОК – Crypto Monitor - январь 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame887 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">РОССИЯ И СНГ – Нефть и газ — Фаворит недели - Транснефть (ап)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] opacity-50 relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Frame889 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            Какая ставка будет в 2026 году
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame873() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[16px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Все обращения</p>
        </div>
        <Frame874 />
      </div>
    </div>
  );
}

function Publications11() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header32 />
        <Frame873 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications11 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
      <Frame65 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <Frame62 />
      <Frame852 />
      <Frame64 />
    </div>
  );
}

function Rp5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[8302px] top-[2362px] w-[1920px]" data-name="RP - Стартовый экран - Аналитик">
      <HeaderResearchPlatform5 />
      <Frame61 />
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+4715.5px)] overflow-clip rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] top-[calc(50%+1489.5px)] w-[370px]" data-name="Удаление виджета">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center not-italic relative shrink-0 w-full" data-name="title">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
                <p className="leading-[24px]">Закрыть тикет?</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] min-w-full relative shrink-0 text-[#677c9c] text-[14px] text-center w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
                <p className="mb-0">После подтверждения тикет будет переведён</p>
                <p>в статус «Закрыт»</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="footer">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="buttons">
              <div className="bg-[#f8fafe] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Отмена</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#5a8cff] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                      <p className="leading-[16px]">Закрыть</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Logo6() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText24 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText25 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText26 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText27 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs6() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo6 />
      <Tabs6 />
    </div>
  );
}

function Group18() {
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

function TitleIcon6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group18 />
    </div>
  );
}

function AccountButton6() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon6 />
    </div>
  );
}

function Menu6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton6 />
    </div>
  );
}

function HeaderResearchPlatform6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs6 />
          <Menu6 />
        </div>
      </div>
    </div>
  );
}

function NameSector6() {
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

function Left6() {
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
            <NameSector6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame893() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Тикеты</p>
      </div>
    </div>
  );
}

function Frame892() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame893 />
    </div>
  );
}

function Frame891() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame892 />
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

function Component2ndSegment18() {
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

function Component2ndSegment19() {
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

function Component2ndSegment20() {
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

function Frame894() {
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
      <Component2ndSegment18 />
      <Component2ndSegment19 />
      <Component2ndSegment20 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">Показывать только мои</p>
      </div>
    </div>
  );
}

function CheckboxText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="checkbox+text">
      <div className="relative shrink-0 size-[16px]" data-name="checkbox">
        <div className="absolute border border-[#caced9] border-solid inset-0 rounded-[4px]" data-name="border" />
      </div>
      <Text2 />
    </div>
  );
}

function Header33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame891 />
        <Frame894 />
        <CheckboxText2 />
      </div>
    </div>
  );
}

function Frame161() {
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

function Frame898() {
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

function Frame897() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame898 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame899() {
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

function Frame896() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame897 />
      <Frame899 />
    </div>
  );
}

function Frame895() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <Frame896 />
    </div>
  );
}

function Frame162() {
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

function Frame903() {
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

function Frame902() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame903 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame904() {
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

function Frame901() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame902 />
      <Frame904 />
    </div>
  );
}

function Frame900() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame901 />
    </div>
  );
}

function Frame163() {
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

function Frame908() {
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

function Frame907() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame908 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame909() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame906() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame907 />
      <Frame909 />
    </div>
  );
}

function Frame905() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame906 />
    </div>
  );
}

function Frame164() {
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

function Frame913() {
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

function Frame912() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame913 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame914() {
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

function Frame911() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame912 />
      <Frame914 />
    </div>
  );
}

function Frame910() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame911 />
    </div>
  );
}

function Frame165() {
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

function Frame918() {
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

function Frame917() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame918 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame919() {
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

function Frame916() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame917 />
      <Frame919 />
    </div>
  );
}

function Frame915() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame916 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame167() {
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

function Frame923() {
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

function Frame922() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame923 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame924() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame921() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame922 />
      <Frame924 />
    </div>
  );
}

function Frame920() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame921 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame168() {
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

function Frame928() {
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

function Frame927() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame928 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame929() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame926() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame927 />
      <Frame929 />
    </div>
  );
}

function Frame925() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame926 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame169() {
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

function Frame933() {
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

function Frame932() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame933 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame934() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame931() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame932 />
      <Frame934 />
    </div>
  );
}

function Frame930() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame931 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame170() {
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

function Frame938() {
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

function Frame937() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame938 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame939() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame936() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame937 />
      <Frame939 />
    </div>
  );
}

function Frame935() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame936 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame171() {
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

function Frame943() {
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

function Frame942() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame943 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame944() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame941() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame942 />
      <Frame944 />
    </div>
  );
}

function Frame940() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame941 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame172() {
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

function Frame948() {
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

function Frame947() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame948 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame949() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame946() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame947 />
      <Frame949 />
    </div>
  );
}

function Frame945() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame946 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame173() {
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

function Frame953() {
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

function Frame952() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame953 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame954() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame951() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame952 />
      <Frame954 />
    </div>
  );
}

function Frame950() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame951 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications12() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header33 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame161 />
          <Frame895 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame162 />
          <Frame900 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame163 />
          <Frame905 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame164 />
          <Frame910 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame165 />
          <Frame915 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame166 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame167 />
          <Frame920 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame168 />
          <Frame925 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame169 />
          <Frame930 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame170 />
          <Frame935 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame171 />
          <Frame940 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame172 />
          <Frame945 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame173 />
          <Frame950 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications12 />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="img">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="img">
          <g id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Выберите тикет, чтобы начать общение</p>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="block">
      <Img />
      <Text3 />
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="block">
      <Block1 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col h-[908px] items-center justify-center relative shrink-0 w-[1683px]" data-name="body">
      <Block />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-name="box">
      <Body1 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Top13 />
        </div>
        <Frame67 />
      </div>
      <Box />
    </div>
  );
}

function Rp6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[1301px] top-[2362px] w-[1920px]" data-name="RP - Чаты">
      <HeaderResearchPlatform6 />
      <Frame66 />
    </div>
  );
}

function Logo7() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[236px]" data-name="logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#131722] text-[16px]">Research Platform</p>
    </div>
  );
}

function IconText28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Главная</p>
      </div>
    </div>
  );
}

function IconText29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Публикации</p>
      </div>
    </div>
  );
}

function IconText30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Временные ряды</p>
      </div>
    </div>
  );
}

function IconText31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Чаты</p>
      </div>
    </div>
  );
}

function Tabs7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
        <IconText28 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText29 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <IconText30 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText31 />
        <div className="bg-[#ea3943] content-stretch flex gap-[4px] items-center justify-center min-w-[16px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoTabs7() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="logo+tabs">
      <Logo7 />
      <Tabs7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_11.21%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9643 18">
        <g id="Group">
          <path d={svgPaths.p591ef00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3ae59900} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_11.21%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[0_11.21%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Fi() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fi_162722">
      <Group7 />
      <div className="absolute bg-[#ea3943] content-stretch flex flex-col inset-[0_0_66.67%_66.67%] items-center justify-center rounded-[8px]" data-name="badges_light">
        <div className="relative shrink-0 size-[6px]" data-name="dot">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #EA3943)" id="dot" r="3.5" stroke="var(--stroke-0, #F8FAFE)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group19() {
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

function TitleIcon7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="title+icon">
      <Group19 />
    </div>
  );
}

function AccountButton7() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon7 />
    </div>
  );
}

function Menu7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <AccountButton7 />
    </div>
  );
}

function Frame955() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#f8fafe] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="bell_button">
        <Fi />
      </div>
      <Menu7 />
    </div>
  );
}

function HeaderResearchPlatform7({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white relative shrink-0 w-full"} data-name="header_Research Platform">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <LogoTabs7 />
          <Frame955 />
        </div>
      </div>
    </div>
  );
}

function NameSector7() {
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

function Left7() {
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
            <NameSector7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Top14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Left7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame958() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Тикеты</p>
      </div>
    </div>
  );
}

function Frame957() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame958 />
    </div>
  );
}

function Frame956() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame957 />
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

function Component2ndSegment21() {
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

function Component2ndSegment22() {
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

function Component2ndSegment23() {
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

function Frame959() {
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
      <Component2ndSegment21 />
      <Component2ndSegment22 />
      <Component2ndSegment23 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">Показывать только мои</p>
      </div>
    </div>
  );
}

function CheckboxText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="checkbox+text">
      <div className="relative shrink-0 size-[16px]" data-name="checkbox">
        <div className="absolute border border-[#caced9] border-solid inset-0 rounded-[4px]" data-name="border" />
      </div>
      <Text4 />
    </div>
  );
}

function Header34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame956 />
        <Frame959 />
        <CheckboxText3 />
      </div>
    </div>
  );
}

function Frame174() {
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

function Frame963() {
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

function Frame962() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame963 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame964() {
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

function Frame961() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame962 />
      <Frame964 />
    </div>
  );
}

function Frame960() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
      </div>
      <Frame961 />
    </div>
  );
}

function Frame175() {
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

function Frame968() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Илья Морозов</p>
      </div>
    </div>
  );
}

function Frame967() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame968 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10:45</p>
      </div>
    </div>
  );
}

function Frame969() {
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

function Frame966() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame967 />
      <Frame969 />
    </div>
  );
}

function Frame965() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ИМ</p>
        </div>
      </div>
      <Frame966 />
    </div>
  );
}

function Frame176() {
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

function Frame973() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Максим Кузнецов</p>
      </div>
    </div>
  );
}

function Frame972() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame973 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:23</p>
      </div>
    </div>
  );
}

function Frame974() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="overflow-hidden">
          <span className="leading-[16px] text-[#131722]">{`Вы: `}</span>
          <span className="leading-[16px]">Текст последнего сообщения в одну строку для</span>
        </p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
        <div className="bg-[#5a8cff] content-stretch flex gap-[4px] items-center justify-center min-w-[20px] px-[6px] relative rounded-[32px] shrink-0" data-name="badges_light">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame971() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame972 />
      <Frame974 />
    </div>
  );
}

function Frame970() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
      <Frame971 />
    </div>
  );
}

function Frame177() {
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

function Frame978() {
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

function Frame977() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame978 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09:21</p>
      </div>
    </div>
  );
}

function Frame979() {
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

function Frame976() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame977 />
      <Frame979 />
    </div>
  );
}

function Frame975() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АЛ</p>
        </div>
      </div>
      <Frame976 />
    </div>
  );
}

function Frame178() {
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

function Frame983() {
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

function Frame982() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame983 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">10.03.25</p>
      </div>
    </div>
  );
}

function Frame984() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame981() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame982 />
      <Frame984 />
    </div>
  );
}

function Frame980() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <Frame981 />
    </div>
  );
}

function Frame179() {
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

function Frame988() {
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

function Frame987() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame988 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">09.03.25</p>
      </div>
    </div>
  );
}

function Frame989() {
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

function Frame986() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame987 />
      <Frame989 />
    </div>
  );
}

function Frame985() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <Frame986 />
    </div>
  );
}

function Frame180() {
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

function Frame993() {
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

function Frame992() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame993 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">08.03.25</p>
      </div>
    </div>
  );
}

function Frame994() {
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

function Frame991() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame992 />
      <Frame994 />
    </div>
  );
}

function Frame990() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
      <Frame991 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#131722] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Закрытые 4569</p>
      </div>
    </div>
  );
}

function Frame182() {
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

function Frame998() {
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

function Frame997() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame998 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">07.01.25</p>
      </div>
    </div>
  );
}

function Frame999() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame996() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame997 />
      <Frame999 />
    </div>
  );
}

function Frame995() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">ЕК</p>
        </div>
      </div>
      <Frame996 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame183() {
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

function Frame1003() {
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

function Frame1002() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1003 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">06.01.25</p>
      </div>
    </div>
  );
}

function Frame1004() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1001() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1002 />
      <Frame1004 />
    </div>
  );
}

function Frame1000() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">АФ</p>
        </div>
      </div>
      <Frame1001 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame184() {
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

function Frame1008() {
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

function Frame1007() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1008 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">05.01.25</p>
      </div>
    </div>
  );
}

function Frame1009() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1006() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1007 />
      <Frame1009 />
    </div>
  );
}

function Frame1005() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame1006 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame185() {
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

function Frame1013() {
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

function Frame1012() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1013 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">04.01.25</p>
      </div>
    </div>
  );
}

function Frame1014() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1011() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1012 />
      <Frame1014 />
    </div>
  );
}

function Frame1010() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">СС</p>
        </div>
      </div>
      <Frame1011 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame186() {
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

function Frame1018() {
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

function Frame1017() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1018 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">03.01.25</p>
      </div>
    </div>
  );
}

function Frame1019() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1016() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1017 />
      <Frame1019 />
    </div>
  );
}

function Frame1015() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <Frame1016 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame187() {
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

function Frame1023() {
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

function Frame1022() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1023 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">02.01.25</p>
      </div>
    </div>
  );
}

function Frame1024() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1021() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1022 />
      <Frame1024 />
    </div>
  );
}

function Frame1020() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#d0deff] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic overflow-hidden text-[#131722] text-[14px] text-center text-ellipsis top-1/2 whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">НО</p>
        </div>
      </div>
      <Frame1021 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Frame188() {
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

function Frame1028() {
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

function Frame1027() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1028 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131722] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">01.01.25</p>
      </div>
    </div>
  );
}

function Frame1029() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] overflow-hidden">Текст последнего сообщения в одну строку для</p>
      </div>
    </div>
  );
}

function Frame1026() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]">
      <Frame1027 />
      <Frame1029 />
    </div>
  );
}

function Frame1025() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <div className="bg-[#607985] overflow-clip relative rounded-[32px] shrink-0 size-[40px]" data-name="Analysts avatars">
        <div className="absolute h-[46.11px] left-[-1.94px] top-[-3.06px] w-[43.879px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
        </div>
      </div>
      <Frame1026 />
      <div className="absolute bg-gradient-to-b from-[#5a8cff] left-[-2px] rounded-[239.968px] size-[24px] to-[#6470ff] top-[18px]" data-name="avatar-report_256px_round">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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

function Publications13() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[348px]" data-name="Publications">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header34 />
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame174 />
          <Frame960 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame175 />
          <Frame965 />
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame176 />
          <Frame970 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame177 />
          <Frame975 />
          <div className="absolute bg-gradient-to-b bottom-[10px] from-[#5a8cff] left-[14px] rounded-[239.968px] size-[24px] to-[#6470ff]" data-name="avatar-report_256px_round">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex h-[67.336px] items-center justify-center left-[-11.63px] top-[-6.37px] w-[48.076px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
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
          <Frame178 />
          <Frame980 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame179 />
          <Frame985 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame180 />
          <Frame990 />
        </div>
        <div className="bg-[#e9ecf1] content-stretch flex flex-col gap-[8px] h-[24px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame181 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame182 />
          <Frame995 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame183 />
          <Frame1000 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame184 />
          <Frame1005 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame185 />
          <Frame1010 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame186 />
          <Frame1015 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame187 />
          <Frame1020 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center opacity-50 px-[16px] py-[12px] relative shrink-0 w-[348px]" data-name="Tiket">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Frame188 />
          <Frame1025 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9ecf1] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Publications13 />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="img">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="img">
          <g id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#131722] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Выберите тикет, чтобы начать общение</p>
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="block">
      <Img1 />
      <Text5 />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="block">
      <Block3 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col h-[908px] items-center justify-center relative shrink-0 w-[1683px]" data-name="body">
      <Block2 />
    </div>
  );
}

function TitelDescriptive() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#131722] text-[16px] w-full">Новый тикет</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        Илья Морозов написал вопрос
      </p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Перейти</p>
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

function TitelDescriptive1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="titel_descriptive">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#131722] text-[16px] w-full">Новый тикет</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        Максим Кузнецов хочет обсудить отчет
      </p>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button_group">
      <div className="bg-gradient-to-r content-stretch flex from-[#5a8cff] gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 to-[#5a8cff]" data-name="button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Перейти</p>
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

function Frame70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1245px] top-[7px] w-[320px]">
      <div className="bg-[#f8fafe] relative rounded-[12px] shrink-0 w-full" data-name="notifications">
        <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
        <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[32px] py-[16px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
            <div className="absolute inset-[12.5%]" data-name="vector">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                  <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
                    <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #131722)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[12px] shrink-0 w-full" data-name="notifications">
        <div aria-hidden="true" className="absolute border border-[#e9ecf1] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
        <div className="content-stretch flex gap-[12px] items-start pl-[16px] pr-[32px] py-[16px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_16">
            <div className="absolute inset-[12.5%]" data-name="vector">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                  <path d={svgPaths.p2074d000} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
                    <path d={svgPaths.p6528718} id="vector" stroke="var(--stroke-0, #131722)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-[#f8fafe] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-center justify-center min-h-px min-w-px relative" data-name="box">
      <Body2 />
      <Frame70 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white content-stretch flex h-[1028px] items-start overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex flex-col h-[1032px] items-start relative shrink-0 w-[348px]" data-name="Left Sidebar">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e9ecf1] border-b border-solid inset-0 pointer-events-none" />
          <Top14 />
        </div>
        <Frame69 />
      </div>
      <Box1 />
    </div>
  );
}

function Rp7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[3541.5px] top-[2362px] w-[1920px]" data-name="RP - Чаты">
      <HeaderResearchPlatform7 />
      <Frame68 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Макроэкономика</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Ставки, облигации, валюты</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Максим Коровин</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`Корпоративный долг `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Станислав Боженко</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#5a8cff] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Стратегия: акции</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Лидия Михайлова</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Нефть и газ: добыча и переработка</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Андрей Полищук</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Материалы</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Никанор Халин</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Финансовый сектор</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Светлана Асланова</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">ТМТ</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Владимир Беспалов</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Розничная торговля и недвижимость</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Транспорт</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Глобальные активы</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Электроэнергетика</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#131722] text-[16px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Паевые инвестиционные фонды</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#677c9c] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Петр Гришин / Елена Ахмедова</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame23 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame24 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame25 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame26 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame27 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame28 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame29 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame30 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame31 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame32 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame33 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame34 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafe] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
            <Frame35 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rail1() {
  return <div className="absolute bg-[#e9f1f6] bottom-0 right-0 rounded-[2px] top-0 w-[6px]" data-name="rail" />;
}

function Scroll1() {
  return <div className="absolute bg-[#5a8cff] h-[49px] right-0 rounded-[4px] top-[25px] w-[6px]" data-name="scroll" />;
}

function Body3() {
  return (
    <div className="bg-white h-[510px] relative shrink-0 w-full" data-name="body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full">
          <Frame9 />
          <div className="absolute h-[510px] opacity-20 right-0 top-0 w-[6px]" data-name="vertical_scroll">
            <Rail1 />
            <Scroll1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end p-[16px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="buttons">
            <div className="bg-[#f8fafe] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[204.5px]" data-name="button">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Отмена</p>
              </div>
            </div>
            <div className="bg-[#5a8cff] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[204.5px]" data-name="button">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                <p className="leading-[16px]">Передать</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9f1f6] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Modal1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+4754.5px)] overflow-clip rounded-[8px] top-[calc(50%+824.5px)] w-[448px]" data-name="modal">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="title">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#131722] text-[18px] w-full">
                <p className="leading-[24px] whitespace-pre-wrap">Передать тикет</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#677c9c] text-[14px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Выберите деск которому хотите передать данный тикет</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e9f1f6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Body3 />
      <Footer1 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[24px] not-italic relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-name="Info #1">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#2c40a1] w-full">Заметка:</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#302f2d] w-full">Дефолтное состояние экрана при входе в систему</p>
    </div>
  );
}

function InfoList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Info List">
      <Info />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[24px] not-italic relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-name="Info #1">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#2c40a1] w-full">Заметка:</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#302f2d] w-full">Пришло два новых уведомления в систему</p>
    </div>
  );
}

function InfoList1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Info List">
      <Info1 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[24px] not-italic relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-name="Info #1">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#2c40a1] w-full">Заметка:</p>
      <div className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#302f2d] w-full">
        <p className="mb-0">{`Выбрали один из новых тикетов. Пока не взяли `}</p>
        <p>в работу, строка ввода неактивна</p>
      </div>
    </div>
  );
}

function InfoList2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Info List">
      <Info2 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[24px] not-italic relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-name="Info #1">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#2c40a1] w-full">Заметка:</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#302f2d] w-full">Взяли в работу. Добавилась аватарка и ФИ аналитика в строку статуса. Строка ввода активна</p>
    </div>
  );
}

function InfoList3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Info List">
      <Info3 />
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[24px] not-italic relative shrink-0 text-[20px] w-full whitespace-pre-wrap" data-name="Info #1">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#2c40a1] w-full">Заметка:</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#302f2d] w-full">Написали сообщение. Можем передать в другой деск или закрыть тикет если вопрос решен</p>
    </div>
  );
}

function InfoList4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Info List">
      <Info4 />
    </div>
  );
}

function Frame1030() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Новые тикеты в статусте «Открыт» которые еще не открывали</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[661px] top-[2633px]" data-name="_">
      <Frame1030 />
      <div className="h-[8.418px] relative shrink-0 w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1031() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Тикеты в статусте «В работе» у аналитика моей команды оставшиеся без ответ (2 сообщения от пользователя)</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[231px] top-[2723px]" data-name="_">
      <Frame1031 />
      <div className="h-[8.418px] relative shrink-0 w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1032() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Тикеты в статусте «Открыт» просмотерели но не взяли в работу</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[646px] top-[2812px]" data-name="_">
      <Frame1032 />
      <div className="h-[8.418px] relative shrink-0 w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1033() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Закрытые тикеты</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[1064px] top-[3278px]" data-name="_">
      <Frame1033 />
      <div className="h-[8.418px] relative shrink-0 w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1034() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Выбранный тикет</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[5543px] top-[2803px]" data-name="_">
      <Frame1034 />
      <div className="h-[8.418px] relative shrink-0 w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[7899px] p-[8px] rounded-[8px] top-[2803px]" data-name="_">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#302f2d] text-[20px] text-right">Статус изменился на “В работе”</p>
    </div>
  );
}

function StatusTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Status + Title">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[43px] not-italic relative shrink-0 text-[36px] text-white">01</p>
    </div>
  );
}

function StatusTitleSubTitle() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[45px]" data-name="Status+Title+SubTitle">
      <StatusTitle />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Block">
      <StatusTitleSubTitle />
    </div>
  );
}

function SystemTitle() {
  return (
    <div className="bg-[#5a8cff] content-stretch flex flex-col items-start pl-[18px] pr-[14px] py-[11px] relative rounded-bl-[133px] rounded-tl-[133px] shrink-0" data-name="System – Title">
      <TextBlock />
    </div>
  );
}

function StatusTitle1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Status + Title">
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Medium',sans-serif] leading-[43px] min-h-px min-w-px not-italic relative text-[36px] text-black whitespace-pre-wrap">Флоу взятия нового тикета в работу</p>
    </div>
  );
}

function StatusTitleSubTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Status+Title+SubTitle">
      <StatusTitle1 />
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Block">
      <StatusTitleSubTitle1 />
    </div>
  );
}

function SystemTitle1() {
  return (
    <div className="bg-[#f7f8fc] flex-[1_0_0] min-h-px min-w-px relative rounded-br-[133px] rounded-tr-[133px]" data-name="System – Title">
      <div className="content-stretch flex flex-col items-start pl-[17px] py-[11px] relative w-full">
        <TextBlock1 />
      </div>
    </div>
  );
}

export default function Frame243() {
  return (
    <div className="bg-[#4a4a4a] relative size-full">
      <Rp />
      <Rp1 />
      <Rp2 />
      <Rp3 />
      <Rp4 />
      <Rp5 />
      <Component1 />
      <Rp6 />
      <Rp7 />
      <Modal1 />
      <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[1301px] p-[16px] rounded-[16px] top-[2214px] w-[516px]" data-name="Note">
        <InfoList />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[3541.5px] p-[16px] rounded-[16px] top-[2214px] w-[516px]" data-name="Note">
        <InfoList1 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[5782px] p-[16px] rounded-[16px] top-[2194px] w-[516px]" data-name="Note">
        <InfoList2 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[8302px] p-[16px] rounded-[16px] top-[2194px] w-[516px]" data-name="Note">
        <InfoList3 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[9706px] p-[16px] rounded-[16px] top-[2194px] w-[516px]" data-name="Note">
        <InfoList4 />
      </div>
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <div className="absolute h-[8.418px] left-[8220px] top-[2818.79px] w-[32.471px]">
        <div className="absolute inset-[-5.2%_-3.14%_-5.14%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4899 9.2894">
            <path d={svgPaths.p13a0f9e0} id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[1301px] rounded-[133px] top-[2063px] w-[9613px]" data-name="Subtitle">
        <SystemTitle />
        <SystemTitle1 />
      </div>
    </div>
  );
}