import svgPaths from "./svg-ku71c2ijdn";
import { imgGroup } from "./svg-r6vid";

function Logo() {
  return (
    <div className="h-[19px] relative shrink-0 w-[136px]" data-name="logo">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.597px] left-1/2 overflow-clip top-[calc(50%+0.3px)] w-[136px]" data-name="logo.andromeda_white">
        <div className="absolute inset-[0.17%_0.14%_4.25%_0.38%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 135.285 10.1281">
            <path d={svgPaths.p405c000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[171px]" data-name="logo_frame">
      <Logo />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Финансовый анализ</p>
      </div>
    </div>
  );
}

function Chapter() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="chapter">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10.667px] whitespace-nowrap">
        <p className="leading-[14.222px]">Сервисы</p>
      </div>
    </div>
  );
}

function Ticker() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Ticker
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[20%_5.81%_20%_4.65%]">
      <div className="absolute inset-[-5.56%_-1.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5001 10">
          <g id="Group 336662">
            <mask height="10" id="mask0_30_5899" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
              <path d={svgPaths.p33e02a80} id="Vector 261" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            <g mask="url(#mask0_30_5899)">
              <rect fill="var(--fill-0, #1FC989)" height="19" id="Rectangle 2689" width="67" x="-12.4978" y="-14.5" />
              <rect fill="var(--fill-0, #F23645)" height="19" id="Rectangle 2690" width="67" x="-12.4978" y="4.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonsgroupRequest() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="buttonsgroup+request">
      <div className="bg-[#131722] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[4px] py-[6px] relative rounded-[4px] shrink-0" data-name="ticker-function_button">
        <Ticker />
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-ellipsis" data-name="quotes">
          <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
            3 123,43₽
          </p>
          <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
            +0,65%
          </p>
        </div>
        <div className="h-[15px] overflow-clip relative shrink-0 w-[43px]" data-name="сhart">
          <Group4 />
        </div>
      </div>
      <div className="bg-white h-[16.111px] relative shrink-0 w-[6px]" data-name="cursor">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector 190 (Stroke)" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#677c9c] text-[12px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Искать по инструментам, функциям, новостям...
      </p>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0 w-full" data-name="field">
      <ButtonsgroupRequest />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <div className="bg-[#191f2d] content-stretch flex gap-[8.889px] h-[40px] items-center justify-center p-[8.889px] relative rounded-[8px] shrink-0 w-[103px]" data-name="product button">
        <div className="content-start flex flex-wrap gap-[1.777777910232544px_1.778px] items-start relative shrink-0 size-[14.222px]" data-name="App">
          <div className="bg-[#28334f] rounded-[2px] shrink-0 size-[6.222px]" />
          <div className="bg-[#5a8cff] rounded-[2px] shrink-0 size-[6.222px]" />
          <div className="bg-[#5a8cff] rounded-[2px] shrink-0 size-[6.222px]" />
          <div className="bg-[#5a8cff] rounded-[2px] shrink-0 size-[6.222px]" />
        </div>
        <Chapter />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col h-[40px] items-start justify-between px-[8px] relative rounded-[8px] shrink-0 w-[592px]" data-name="andromeda main tool (amt)">
        <Field />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[13.041px] relative shrink-0 w-[10.797px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7969 13.0412">
        <g id="Group">
          <path d={svgPaths.pbda2300} fill="var(--fill-0, #5A8CFF)" id="Vector" />
          <path d={svgPaths.p38d88100} fill="var(--fill-0, #5A8CFF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[16.022px] relative shrink-0 w-[47.336px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 47.3358 16.0224">
        <g id="Group 336654">
          <g id="ÑÐ¹Ð»ÐµÑ">
            <path d={svgPaths.p2e529770} fill="var(--fill-0, #5A8CFF)" id="Vector" />
            <path d={svgPaths.p31123d00} fill="var(--fill-0, #5A8CFF)" id="Vector_2" />
            <path d={svgPaths.p58e5c00} fill="var(--fill-0, #5A8CFF)" id="Vector_3" />
            <path d={svgPaths.p3433ec00} fill="var(--fill-0, #5A8CFF)" id="Vector 199" />
            <path d={svgPaths.p2b20da70} fill="var(--fill-0, #5A8CFF)" id="Vector_4" />
          </g>
          <path d={svgPaths.p1e765100} fill="var(--fill-0, #5A8CFF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Group />
      <Group3 />
    </div>
  );
}

function NewButtonEuler() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0" data-name="new_button_euler">
      <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame12 />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[7px] text-white tracking-[0.49px] uppercase whitespace-nowrap">
        <p className="mb-0">Аналитический</p>
        <p>портал</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[14.638px] relative shrink-0 w-[86.581px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 86.5814 14.6382">
        <g id="Group 336679">
          <g id="GALAVIEW">
            <path d={svgPaths.p39ca200} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2499f3f0} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p1eda5740} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p395f2e80} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p279be700} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p2e952b00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p9f04000} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p6ac6d80} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
          <path d={svgPaths.p3cf9800} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ProductButton() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="product button" style={{ backgroundImage: "linear-gradient(156.864deg, rgb(69, 211, 206) 8.1594%, rgb(90, 140, 255) 87.999%)" }}>
      <Group5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.032px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0322 18">
        <g id="Group 336586">
          <path d={svgPaths.p3b5d5300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9bfca00} fill="var(--fill-0, white)" id="Vector_2" />
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
    <div className="bg-[#191f2d] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="account_button">
      <TitleIcon />
    </div>
  );
}

function SettingsBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="settings_bar">
      <NewButtonEuler />
      <ProductButton />
      <AccountButton />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.22%_12.5%_6.28%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-1.12px] mask-size-[18px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p9760200} fill="var(--fill-0, #5A8CFF)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_60%_0] items-start justify-between">
      <div className="bg-[#191f2d] content-stretch flex h-[32px] items-center p-[2px] relative rounded-[8px] shrink-0" data-name="segment">
        <div className="bg-[#5a8cff] content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[20px] relative rounded-[6px] shrink-0" data-name="1nd_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">Консенсус</p>
          </div>
        </div>
        <div className="bg-[#5a8cff] content-stretch flex gap-[8px] h-full items-center justify-center px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="2st_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">Euler Live models</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="date+button">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="text-[10px]">
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#131722]">Обновлено:</span>
            <span className="leading-[16px]">{` `}</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#131722]">3 Апр 2024, 18:19</span>
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="left_icon">
            <ClipPathGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#131722] content-stretch flex h-[32px] items-center pl-[8px] relative rounded-[8px] shrink-0" data-name="input_field">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[2px] h-[32px] items-center overflow-clip py-[8px] relative shrink-0" data-name="placeholder">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          APPL
        </p>
      </div>
      <div className="content-stretch flex h-[32px] items-center p-[8px] relative shrink-0" data-name="select_indicator">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[41.67%]" data-name="vector">
            <div className="absolute inset-[-13.75%_-6.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
                <path d={svgPaths.p36d8fd00} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="filters">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="select">
        <InputField />
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#131722] content-stretch flex h-[32px] items-center pl-[8px] relative rounded-[8px] shrink-0" data-name="input_field">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[2px] h-[32px] items-center overflow-clip py-[8px] relative shrink-0" data-name="placeholder">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          Сценарий: Estimate
        </p>
      </div>
      <div className="content-stretch flex h-[32px] items-center p-[8px] relative shrink-0" data-name="select_indicator">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[41.67%]" data-name="vector">
            <div className="absolute inset-[-13.75%_-6.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 5.1">
                <path d={svgPaths.p36d8fd00} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiltersControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="filters+controls">
      <Filters />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="select">
        <InputField1 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[32px] items-center px-[2px] relative rounded-[8px] shrink-0" data-name="segment">
        <div className="bg-[#5a8cff] h-[28px] relative rounded-[6px] shrink-0 w-[38px]" data-name="1nd_segment">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] relative size-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                <p className="leading-[16px]">Y</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center opacity-30 px-[16px] py-[6px] relative rounded-[4px] shrink-0 w-[38px]" data-name="2st_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">H</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center opacity-30 px-[16px] py-[6px] relative rounded-[4px] shrink-0 w-[38px]" data-name="3st_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">Q</p>
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[32px] items-center px-[2px] relative rounded-[8px] shrink-0" data-name="segment">
        <div className="bg-[#5a8cff] h-[28px] relative rounded-[6px] shrink-0 w-[38px]" data-name="1nd_segment">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] relative size-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                <p className="leading-[16px]">n</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0 w-[38px]" data-name="2st_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterMenu() {
  return (
    <div className="absolute content-stretch flex inset-[60%_0_0_0] items-center" data-name="filter_menu">
      <FiltersControls />
    </div>
  );
}

function MenuFilters({ className }: { className?: string }) {
  return (
    <div className={className || "h-[80px] relative shrink-0 w-[1392px]"} data-name="Menu_filters">
      <Frame13 />
      <FilterMenu />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Summary</p>
      </div>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">BS</p>
      </div>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">PnL</p>
      </div>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">CF</p>
      </div>
    </div>
  );
}

function IconText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Mults & Yields`}</p>
      </div>
    </div>
  );
}

function IconText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Other</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText />
      </div>
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText1 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText2 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText3 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText4 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText5 />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="buttons">
      <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon">
          <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[29.17%]" data-name="vector">
            <div className="absolute inset-[-12%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.2 6.2">
                <path d={svgPaths.p3408e500} id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon">
          <div className="absolute bottom-1/4 left-[33.33%] right-[41.67%] top-1/4" data-name="vector">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 7.2">
                <path d="M3.6 6.6L0.6 3.6L3.6 0.6" id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon">
          <div className="absolute bottom-1/4 left-[41.67%] right-[33.33%] top-1/4" data-name="vector">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 7.2">
                <path d="M0.6 6.6L3.6 3.6L0.6 0.6" id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon">
          <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[29.17%]" data-name="vector">
            <div className="absolute inset-[-12%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.2 6.2">
                <path d={svgPaths.pa9f79a0} id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">mn/USD</p>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2017</p>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="content-stretch flex h-full items-center justify-end px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box1 />
    </div>
  );
}

function Box2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2018</p>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2019</p>
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2020</p>
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2021</p>
      </div>
    </div>
  );
}

function Box6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2022</p>
      </div>
    </div>
  );
}

function Box7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2023</p>
      </div>
    </div>
  );
}

function Box8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#45d3ce] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2024</p>
      </div>
    </div>
  );
}

function Box9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#45d3ce] text-[12px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[16px]">2025</p>
      </div>
    </div>
  );
}

function Head() {
  return (
    <div className="bg-[#2f3441] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="head">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0 w-[224px]" data-name="table_head">
            <Box />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box2 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box3 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box4 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box5 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box6 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
            <Box7 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#2a2e39] content-stretch flex h-full items-center justify-end px-[8px] relative shrink-0 w-[110px]" data-name="table_head">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-r border-solid inset-0 pointer-events-none" />
            <Box8 />
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#2a2e39] content-stretch flex h-full items-center justify-end px-[8px] relative shrink-0 w-[110px]" data-name="table_head">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
            <Box9 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Box10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">PnL</p>
      </div>
    </div>
  );
}

function TableCellV() {
  return (
    <div className="bg-[#191f2d] h-[32px] relative shrink-0 w-full" data-name="table_cell_v2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <Box10 />
        </div>
      </div>
    </div>
  );
}

function Box11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Revenue</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">11 915</p>
      </div>
    </div>
  );
}

function Box13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">7 566</p>
      </div>
    </div>
  );
}

function Box14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 750</p>
      </div>
    </div>
  );
}

function Box15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 395</p>
      </div>
    </div>
  );
}

function Box16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">11 869</p>
      </div>
    </div>
  );
}

function Box17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">10 129</p>
      </div>
    </div>
  );
}

function Box18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">8 956</p>
      </div>
    </div>
  );
}

function Box19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV1() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box19 />
    </div>
  );
}

function Box20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV2() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box20 />
    </div>
  );
}

function Box21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">EBITDA</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 743</p>
      </div>
    </div>
  );
}

function Box23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">7 923</p>
      </div>
    </div>
  );
}

function Box24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 743</p>
      </div>
    </div>
  );
}

function Box25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">9 883</p>
      </div>
    </div>
  );
}

function Box26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">10 512</p>
      </div>
    </div>
  );
}

function Box27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">8 697</p>
      </div>
    </div>
  );
}

function Box28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 884</p>
      </div>
    </div>
  );
}

function Box29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">12 956</p>
      </div>
    </div>
  );
}

function TableCellV3() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box29 />
    </div>
  );
}

function Box30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV4() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box30 />
    </div>
  );
}

function Box31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">EBITDA margin</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">5 566</p>
      </div>
    </div>
  );
}

function Box33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 578</p>
      </div>
    </div>
  );
}

function Box34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">58,54</p>
      </div>
    </div>
  );
}

function Box35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`63,66	`}</p>
      </div>
    </div>
  );
}

function Box36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">58,99</p>
      </div>
    </div>
  );
}

function Box37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">51,95</p>
      </div>
    </div>
  );
}

function Box38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">47,18</p>
      </div>
    </div>
  );
}

function Box39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV5() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box39 />
    </div>
  );
}

function Box40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV6() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box40 />
    </div>
  );
}

function Box41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Net Income</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 576</p>
      </div>
    </div>
  );
}

function Box43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 223</p>
      </div>
    </div>
  );
}

function Box44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">5 782</p>
      </div>
    </div>
  );
}

function Box45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">3 385</p>
      </div>
    </div>
  );
}

function Box46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 483</p>
      </div>
    </div>
  );
}

function Box47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">5 498</p>
      </div>
    </div>
  );
}

function Box48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">2 384</p>
      </div>
    </div>
  );
}

function Box49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">-</p>
      </div>
    </div>
  );
}

function TableCellV7() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box49 />
    </div>
  );
}

function Box50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV8() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box50 />
    </div>
  );
}

function PnL() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PnL">
      <Head />
      <TableCellV />
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box11 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box12 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box13 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box14 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box15 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box16 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box17 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box18 />
        </div>
        <TableCellV1 />
        <TableCellV2 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box21 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame1 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box22 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box23 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box24 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box25 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box26 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box27 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box28 />
        </div>
        <TableCellV3 />
        <TableCellV4 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box31 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame2 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box32 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box33 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box34 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box35 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box36 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box37 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box38 />
        </div>
        <TableCellV5 />
        <TableCellV6 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box41 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame3 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box42 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box43 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box44 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box45 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box46 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box47 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box48 />
        </div>
        <TableCellV7 />
        <TableCellV8 />
      </div>
    </div>
  );
}

function Box51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Cash Flow</p>
      </div>
    </div>
  );
}

function TableCellV9() {
  return (
    <div className="bg-[#191f2d] h-[32px] relative shrink-0 w-full" data-name="table_cell_v2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <Box51 />
        </div>
      </div>
    </div>
  );
}

function Box52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Dividends paid</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-3 166</p>
      </div>
    </div>
  );
}

function Box54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-5 066</p>
      </div>
    </div>
  );
}

function Box55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-4 166</p>
      </div>
    </div>
  );
}

function Box56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-4 165</p>
      </div>
    </div>
  );
}

function Box57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-2 198</p>
      </div>
    </div>
  );
}

function Box58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-5 725</p>
      </div>
    </div>
  );
}

function Box59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-503,6</p>
      </div>
    </div>
  );
}

function Box60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">-</p>
      </div>
    </div>
  );
}

function TableCellV10() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box60 />
    </div>
  );
}

function Box61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV11() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box61 />
    </div>
  );
}

function Box62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Free cash flow</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">3 573</p>
      </div>
    </div>
  );
}

function Box64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 895</p>
      </div>
    </div>
  );
}

function Box65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 428</p>
      </div>
    </div>
  );
}

function Box66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 168</p>
      </div>
    </div>
  );
}

function Box67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 093</p>
      </div>
    </div>
  );
}

function Box68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-181,5</p>
      </div>
    </div>
  );
}

function Box69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1 903</p>
      </div>
    </div>
  );
}

function Box70() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV12() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box70 />
    </div>
  );
}

function Box71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">254 956</p>
      </div>
    </div>
  );
}

function TableCellV13() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box71 />
    </div>
  );
}

function Box72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Sustaining FCF</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1 576</p>
      </div>
    </div>
  );
}

function Box74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">2 894</p>
      </div>
    </div>
  );
}

function Box75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 428</p>
      </div>
    </div>
  );
}

function Box76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">7 573</p>
      </div>
    </div>
  );
}

function Box77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">6 349</p>
      </div>
    </div>
  );
}

function Box78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">3 440</p>
      </div>
    </div>
  );
}

function Box79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 080</p>
      </div>
    </div>
  );
}

function Box80() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">-</p>
      </div>
    </div>
  );
}

function TableCellV14() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box80 />
    </div>
  );
}

function Box81() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">-</p>
      </div>
    </div>
  );
}

function TableCellV15() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box81 />
    </div>
  );
}

function Box82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Dividend yield, %</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12,00</p>
      </div>
    </div>
  );
}

function Box84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">15,00</p>
      </div>
    </div>
  );
}

function Box85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">22,42</p>
      </div>
    </div>
  );
}

function Box86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">22,32</p>
      </div>
    </div>
  );
}

function Box87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">11,57</p>
      </div>
    </div>
  );
}

function Box88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">30,45</p>
      </div>
    </div>
  );
}

function Box89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">22,68</p>
      </div>
    </div>
  );
}

function Box90() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV16() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box90 />
    </div>
  );
}

function Box91() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV17() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box91 />
    </div>
  );
}

function Box92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Free cash flow yield, %</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12,00</p>
      </div>
    </div>
  );
}

function Box94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">15,00</p>
      </div>
    </div>
  );
}

function Box95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">23,76</p>
      </div>
    </div>
  );
}

function Box96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">32,19</p>
      </div>
    </div>
  );
}

function Box97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">21,58</p>
      </div>
    </div>
  );
}

function Box98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">-0,96</p>
      </div>
    </div>
  );
}

function Box99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">10,51</p>
      </div>
    </div>
  );
}

function Box100() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">956 956</p>
      </div>
    </div>
  );
}

function TableCellV18() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box100 />
    </div>
  );
}

function Box101() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV19() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box101 />
    </div>
  );
}

function CashFlow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cash Flow">
      <TableCellV9 />
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box52 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame4 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box53 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box54 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box55 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box56 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box57 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box58 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box59 />
        </div>
        <TableCellV10 />
        <TableCellV11 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box62 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame5 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box63 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box64 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box65 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box66 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box67 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box68 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box69 />
        </div>
        <TableCellV12 />
        <TableCellV13 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box72 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame6 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box73 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box74 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box75 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box76 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box77 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box78 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box79 />
        </div>
        <TableCellV14 />
        <TableCellV15 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box82 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame7 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box83 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box84 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box85 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box86 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box87 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box88 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box89 />
        </div>
        <TableCellV16 />
        <TableCellV17 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box92 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame8 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box93 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box94 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box95 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box96 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box97 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box98 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box99 />
        </div>
        <TableCellV18 />
        <TableCellV19 />
      </div>
    </div>
  );
}

function Box102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Balance Sheet</p>
      </div>
    </div>
  );
}

function TableCellV20() {
  return (
    <div className="bg-[#191f2d] h-[32px] relative shrink-0 w-full" data-name="table_cell_v2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <Box102 />
        </div>
      </div>
    </div>
  );
}

function Box103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Net debt</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">2 134</p>
      </div>
    </div>
  );
}

function Box105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">8 905</p>
      </div>
    </div>
  );
}

function Box106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">7 009</p>
      </div>
    </div>
  );
}

function Box107() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 647</p>
      </div>
    </div>
  );
}

function Box108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">4 871</p>
      </div>
    </div>
  );
}

function Box109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">9 795</p>
      </div>
    </div>
  );
}

function Box110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">8 090</p>
      </div>
    </div>
  );
}

function Box111() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV21() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-full items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box111 />
    </div>
  );
}

function Box112() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV22() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-full items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box112 />
    </div>
  );
}

function Box113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">net debt/EBITDA</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">3 745</p>
      </div>
    </div>
  );
}

function Box115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">104,1</p>
      </div>
    </div>
  );
}

function Box116() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">0,8851</p>
      </div>
    </div>
  );
}

function Box117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">0,4704</p>
      </div>
    </div>
  );
}

function Box118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">0,4630</p>
      </div>
    </div>
  );
}

function Box119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1,513</p>
      </div>
    </div>
  );
}

function Box120() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1,918</p>
      </div>
    </div>
  );
}

function Box121() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV23() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box121 />
    </div>
  );
}

function Box122() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV24() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box122 />
    </div>
  );
}

function Box123() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Minority interests</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Box124() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">705,1</p>
      </div>
    </div>
  );
}

function Box125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">507,4</p>
      </div>
    </div>
  );
}

function Box126() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">474,7</p>
      </div>
    </div>
  );
}

function Box127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">646,9</p>
      </div>
    </div>
  );
}

function Box128() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1 100</p>
      </div>
    </div>
  );
}

function Box129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1 442</p>
      </div>
    </div>
  );
}

function Box130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] text-right w-full" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1 199</p>
      </div>
    </div>
  );
}

function Box131() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV25() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box131 />
    </div>
  );
}

function Box132() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function TableCellV26() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box132 />
    </div>
  );
}

function BalanceSheet() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Balance Sheet">
      <TableCellV20 />
      <div className="content-stretch flex h-[44px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box103 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame9 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box104 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box105 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box106 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box107 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box108 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box109 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box110 />
        </div>
        <TableCellV21 />
        <TableCellV22 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box113 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame10 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box114 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box115 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box116 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box117 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box118 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box119 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box120 />
        </div>
        <TableCellV23 />
        <TableCellV24 />
      </div>
      <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
          <Box123 />
          <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
            <Frame11 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box124 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box125 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box126 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box127 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box128 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box129 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
          <Box130 />
        </div>
        <TableCellV25 />
        <TableCellV26 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <PnL />
      <CashFlow />
      <BalanceSheet />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="table">
      <Body1 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="body">
      <MenuFilters />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tabs_fa">
        <Tabs />
        <Buttons />
      </div>
      <Table />
    </div>
  );
}

function CompanyFundamentals() {
  return (
    <div className="bg-[#131722] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Company Fundamentals">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Body />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-center not-italic relative shrink-0 text-[#5a8cff]" data-name="links">
      <p className="relative shrink-0 text-center">support@euler.team</p>
      <p className="relative shrink-0 text-center">Политика конфиденциальности</p>
      <p className="relative shrink-0 text-right">Условия использования</p>
    </div>
  );
}

export default function onsensus() {
  return (
    <div className="bg-[#131722] content-stretch flex flex-col items-start justify-between relative size-full" data-name="Сonsensus">
      <div className="bg-[#131722] content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative shrink-0 w-[1440px]" data-name="Andromeda_header_v2">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <LogoFrame />
        <Menu />
        <SettingsBar />
      </div>
      <CompanyFundamentals />
      <div className="bg-[#131722] relative shrink-0 w-full" data-name="footer.andromeda">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between leading-[16px] px-[24px] py-[16px] relative text-[10px] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold relative shrink-0 text-[#677c9c]">© Andromeda 2025. Авторские права защищены.</p>
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}