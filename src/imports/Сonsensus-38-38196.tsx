import svgPaths from "./svg-wf7ww1hy36";
import { imgGroup } from "./svg-mbyd7";

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

function Group19() {
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
          <Group19 />
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

function Group18() {
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

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Group />
      <Group18 />
    </div>
  );
}

function NewButtonEuler() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0" data-name="new_button_euler">
      <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame54 />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[7px] text-white tracking-[0.49px] uppercase whitespace-nowrap">
        <p className="mb-0">Аналитический</p>
        <p>портал</p>
      </div>
    </div>
  );
}

function Group20() {
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
      <Group20 />
    </div>
  );
}

function Group17() {
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
      <Group17 />
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

function Frame58() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#191f2d] content-stretch flex h-[32px] items-center p-[2px] relative rounded-[8px] shrink-0" data-name="segment">
        <div className="bg-[#5a8cff] content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[20px] relative rounded-[6px] shrink-0" data-name="1nd_segment">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">Консенсус</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="2st_segment">
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
          Источник: Все
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

function Filters1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="filters">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="select">
        <InputField1 />
      </div>
    </div>
  );
}

function FiltersControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="filters+controls">
      <Filters />
      <Filters1 />
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

function Group2() {
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

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function FilterMenu() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="filter_menu">
      <FiltersControls />
      <div className="content-stretch flex gap-[16px] items-center opacity-0 relative shrink-0" data-name="date+button">
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
            <ClipPathGroup1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function FiltersFa() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="filters_fa">
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
      <div className="bg-[#131722] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
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
      <div className="bg-[#131722] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
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
      <div className="bg-[#131722] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
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
      <div className="bg-[#131722] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
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

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame58 />
      <FiltersFa />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tabs_fa">
        <Tabs />
        <Buttons />
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

function Frame14() {
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

function Frame84() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV1() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box19 />
      <Frame84 />
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

function Frame85() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV2() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box20 />
      <Frame85 />
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

function Frame15() {
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
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV3() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box29 />
      <Frame86 />
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

function Frame87() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV4() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box30 />
      <Frame87 />
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

function Frame16() {
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

function Frame88() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV5() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box39 />
      <Frame88 />
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

function Frame89() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV6() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box40 />
      <Frame89 />
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

function Frame17() {
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
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV7() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box49 />
      <Frame90 />
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

function Frame91() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV8() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box50 />
      <Frame91 />
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
            <Frame14 />
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
            <Frame15 />
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
            <Frame16 />
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
            <Frame17 />
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

function Frame18() {
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
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV10() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box60 />
      <Frame92 />
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

function Frame93() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV11() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box61 />
      <Frame93 />
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

function Frame19() {
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

function Frame94() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV12() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box70 />
      <Frame94 />
    </div>
  );
}

function Box71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV13() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box71 />
      <Frame95 />
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

function Frame20() {
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
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV14() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box80 />
      <Frame96 />
    </div>
  );
}

function Box81() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45d3ce] text-[14px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV15() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box81 />
      <Frame97 />
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

function Frame21() {
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

function Frame98() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV16() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box90 />
      <Frame98 />
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

function Frame99() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV17() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box91 />
      <Frame99 />
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

function Frame22() {
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
        <p className="leading-[20px]">8 956</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV18() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box100 />
      <Frame100 />
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

function Frame101() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV19() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box101 />
      <Frame101 />
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
            <Frame18 />
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
            <Frame19 />
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
            <Frame20 />
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
            <Frame21 />
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
            <Frame22 />
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

function Frame23() {
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
        <p className="leading-[20px] whitespace-pre-wrap">408,5 млн ₽</p>
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

function Frame102() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV21() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box111 />
      <Frame102 />
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

function Frame103() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV22() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box112 />
      <Frame103 />
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

function Frame24() {
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

function Frame104() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV23() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box121 />
      <Frame104 />
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

function Frame105() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV24() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box122 />
      <Frame105 />
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

function Frame25() {
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

function Frame106() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV25() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box131 />
      <Frame106 />
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

function Frame107() {
  return (
    <div className="bg-[#2a2e39] h-[12px] relative rounded-[4px] shrink-0 w-[19px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[10px] text-center w-full">
            <p className="leading-[10px] whitespace-pre-wrap">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellV26() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box132 />
      <Frame107 />
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
            <Frame23 />
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
            <Frame24 />
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
            <Frame25 />
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
      <Frame59 />
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

function Frame68() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#e0e1e2] text-[24px]">Apple AAPL</p>
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[32px]" data-name="close">
        <div className="absolute inset-1/4" data-name="vector">
          <div className="absolute inset-[-5.31%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7 17.7">
              <path d={svgPaths.p3f41a280} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input_field">
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-[40px] items-center min-h-px min-w-px overflow-clip py-[10px] relative" data-name="placeholder">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#c4c7c9] text-[14px] text-ellipsis" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
              2025
            </p>
          </div>
          <div className="content-stretch flex h-[40px] items-center px-[12px] py-[11px] relative shrink-0" data-name="select_indicator">
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="chevron">
              <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[41.67%]" data-name="vector">
                <div className="absolute inset-[-13.33%_-6.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2 5.7">
                    <path d="M0.6 0.6L5.1 5.1L9.6 0.6" id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
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

function InputField3() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input_field">
      <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-[40px] items-center min-h-px min-w-px overflow-clip py-[10px] relative" data-name="placeholder">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#c4c7c9] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
              Free cash flow yield, %
            </p>
          </div>
          <div className="content-stretch flex h-[40px] items-center px-[12px] py-[11px] relative shrink-0" data-name="select_indicator">
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="chevron">
              <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[41.67%]" data-name="vector">
                <div className="absolute inset-[-13.33%_-6.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2 5.7">
                    <path d="M0.6 0.6L5.1 5.1L9.6 0.6" id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
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

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[91px]" data-name="select_dark">
        <InputField2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="select_dark">
        <InputField3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">1 406,9 млн ₽</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">406,3 млн ₽</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">431,7 млн ₽</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">398,6 млн ₽</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">4,977 млн ₽</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[565px]" data-name="data">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="List item">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] w-[min-content]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Ср.значение</p>
        </div>
        <Frame />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="List item">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] w-[min-content]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Медиана</p>
        </div>
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="List item">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] w-[min-content]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Максимум</p>
        </div>
        <Frame2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="List item">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] w-[min-content]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Минимум</p>
        </div>
        <Frame3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="List item">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] w-[min-content]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Стан. отклонение</p>
        </div>
        <Frame4 />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame82 />
      <div className="flex flex-row items-center self-stretch">
        <Data />
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="h-[96.555px] relative w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 428 96.5549">
        <g id="Line">
          <path d="M0 48.2775H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line1() {
  return (
    <div className="h-[96.555px] relative w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 428 96.5549">
        <g id="Line">
          <path d="M0 48.2775H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line2() {
  return (
    <div className="h-[96.555px] relative w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 428 96.5549">
        <g id="Line">
          <path d="M0 48.2775H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line3() {
  return (
    <div className="h-[96.555px] relative w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 428 96.5549">
        <g id="Line">
          <path d="M0 48.2775H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[96.555px] items-center justify-center py-[10px] relative w-full" data-name="Line">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428 0.919937">
            <path d="M0 0.459969H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[66px] items-center justify-center left-[70.33%] right-[29.67%] top-[8.85px]">
        <div className="flex-none h-px rotate-90 w-[66px]">
          <div className="relative size-full">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 2">
                <path d="M0 1H66" id="Vector 335" stroke="var(--stroke-0, #F87D37)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line5() {
  return (
    <div className="h-[96.555px] relative w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 428 96.5549">
        <g id="Line">
          <path d="M0 48.2775H428" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function VertLine() {
  return (
    <div className="absolute content-stretch flex gap-[59px] h-[235px] items-start left-[6.82%] right-[-23.86%] top-[10px]" data-name="Vert_line">
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line />
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line1 />
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line2 />
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line3 />
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line4 />
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-[428px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <Line5 />
        </div>
      </div>
    </div>
  );
}

function Line6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 16">
        <g id="Line">
          <path d="M0 8H747" id="Vector 200" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Line17() {
  return (
    <div className="h-[3px] relative shrink-0 w-full" data-name="Line">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 747 3">
        <g id="Line">
          <path d="M0 1.5H747" id="Vector 200" opacity="0" stroke="var(--stroke-0, #2A2E39)" strokeDasharray="1.84 1.84" strokeWidth="0.919937" />
        </g>
      </svg>
    </div>
  );
}

function Candle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[19px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Candle">
      <VertLine />
      <Line6 />
      <Line7 />
      <Line8 />
      <Line9 />
      <Line10 />
      <Line11 />
      <Line12 />
      <Line13 />
      <Line14 />
      <Line15 />
      <Line16 />
      <Line17 />
      <div className="absolute h-[72px] left-[-0.13%] right-[8.7%] top-[111px]">
        <div className="absolute inset-[-1.84%_-0.13%_-0.59%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 684.318 73.7504">
            <path d={svgPaths.p3d511f80} id="Vector 261" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[75.5px] left-[18.88%] right-[8.43%] top-[111px]">
        <div className="absolute inset-[-1.32%_0_-1.32%_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 544 77.5">
            <path d={svgPaths.p2bb98e80} id="Vector 334" stroke="var(--stroke-0, #45D3CE)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">408,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">407,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">406,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">405,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">404,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">403,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">402,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-[#5a8cff] content-stretch flex items-center justify-center left-[0.79px] px-[8px] top-[317px] w-[55px]">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[10px] text-white whitespace-pre-wrap">22,56</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-[#f87d37] content-stretch flex items-center justify-center left-[1.21px] px-[8px] top-[130px] w-[52px]">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[10px] text-white whitespace-pre-wrap">407,5</p>
    </div>
  );
}

function VertLine1() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0 w-[53px]" data-name="Vert_line">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <Frame35 />
      <Frame36 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[3px] leading-[16px] not-italic opacity-0 relative shrink-0 text-[#677c9c] text-[10px] w-full whitespace-pre-wrap">0</p>
      <Frame39 />
      <Frame46 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">408,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">407,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">406,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">405,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">404,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">403,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#677c9c] text-[10px] whitespace-pre-wrap">402,0</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute bg-[#5a8cff] content-stretch flex items-center justify-center left-[0.79px] px-[8px] top-[317px] w-[55px]">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[10px] text-white whitespace-pre-wrap">22,56</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-[#5a8cff] content-stretch flex items-center justify-center left-[1.21px] px-[8px] top-[173px] w-[52px]">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] min-h-px min-w-px not-italic relative text-[10px] text-white whitespace-pre-wrap">403,6</p>
    </div>
  );
}

function VertLine2() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0 w-[53px]" data-name="Vert_line">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <Frame38 />
      <Frame45 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[3px] leading-[16px] not-italic opacity-0 relative shrink-0 text-[#677c9c] text-[10px] w-full whitespace-pre-wrap">0</p>
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative w-full">
      <Candle />
      <VertLine1 />
      <VertLine2 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group3 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Фев</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group4 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Мар</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group5 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Апр</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group6 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Май</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group7 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Июн</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group8 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Июл</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group9 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Авг</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group10 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Сен</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group11 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Окт</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group12 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Ноя</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group13 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Дек</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group14 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">2026</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group15 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Янв</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#2a2e39] col-1 h-[7.471px] ml-0 mt-0 row-1 w-[1.542px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px pb-[4px] relative">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <Group16 />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#677c9c] text-[10px] text-right">Фев</p>
    </div>
  );
}

function Line18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Line">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pr-[93px] relative w-full">
        <Frame26 />
        <Frame27 />
        <Frame28 />
        <Frame29 />
        <Frame30 />
        <Frame31 />
        <Frame32 />
        <Frame33 />
        <Frame8 />
        <Frame10 />
        <Frame11 />
        <Frame12 />
        <Frame13 />
        <Frame34 />
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Chart">
      <Frame81 />
      <Line18 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="bg-[#191f2d] content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="legend_part_light">
        <div className="bg-[#5a8cff] rounded-[1px] shrink-0 size-[8px]" data-name="legend_color" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">APPL</p>
      </div>
      <div className="bg-[#191f2d] content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="legend_part_light">
        <div className="bg-[#45d3ce] rounded-[1px] shrink-0 size-[8px]" data-name="legend_color" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">Прогноз</p>
      </div>
      <div className="bg-[#191f2d] content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="legend_part_light">
        <div className="bg-[#f87d37] rounded-[1px] shrink-0 size-[8px]" data-name="legend_color" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">Факт</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="warning">
        <div className="absolute inset-[15.62%_15.63%_15.63%_15.62%]" data-name="vector">
          <div className="absolute inset-[-5.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2 12.2">
              <path d={svgPaths.p1248d080} id="vector" stroke="var(--stroke-0, #677C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a2afc2] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Показатель рассчитан на основе данных источника</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame80 />
      <Frame111 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[329px] items-start relative shrink-0 w-full">
      <Chart />
      <Frame110 />
    </div>
  );
}

function BasicData() {
  return (
    <div className="bg-[#131722] content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-[853px]" data-name="Basic data">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BasicData />
    </div>
  );
}

function Box133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-full justify-center leading-[0] overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis w-[121px] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Источник</p>
      </div>
    </div>
  );
}

function Box134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-full justify-center leading-[0] overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis w-[121px] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Аналитик</p>
      </div>
    </div>
  );
}

function Box135() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-full justify-center leading-[0] overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis w-[121px] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Оценка</p>
      </div>
    </div>
  );
}

function Box136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px py-[4px] relative" data-name="box">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-full justify-center leading-[0] overflow-hidden relative shrink-0 text-[#677c9c] text-[12px] text-ellipsis w-[121px] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Дата оценки</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div className="bg-[#151b27] flex-[1_0_0] min-h-px min-w-px relative" data-name="table.head.cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
            <Box133 />
          </div>
        </div>
      </div>
      <div className="bg-[#151b27] flex-[1_0_0] min-h-px min-w-px relative" data-name="table.head.cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
            <Box134 />
          </div>
        </div>
      </div>
      <div className="bg-[#151b27] flex-[1_0_0] min-h-px min-w-px relative" data-name="table.head.cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
            <Box135 />
          </div>
        </div>
      </div>
      <div className="bg-[#151b27] flex-[1_0_0] min-h-px min-w-px relative" data-name="table.head.cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
            <Box136 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Euler</p>
      </div>
    </div>
  );
}

function Box138() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">Л. Михайлова</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box138 />
        </div>
      </div>
    </div>
  );
}

function Box139() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">16.06.2025</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box137 />
          </div>
        </div>
      </div>
      <Cell />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box139 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box140 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box142 />
        </div>
      </div>
    </div>
  );
}

function Box143() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box144() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box141 />
          </div>
        </div>
      </div>
      <Cell1 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box143 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box144 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box145() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box146() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box146 />
        </div>
      </div>
    </div>
  );
}

function Box147() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box148() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box145 />
          </div>
        </div>
      </div>
      <Cell2 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box147 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box148 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box149() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box150() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box150 />
        </div>
      </div>
    </div>
  );
}

function Box151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box149 />
          </div>
        </div>
      </div>
      <Cell3 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box151 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box152 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box153() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box154() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box154 />
        </div>
      </div>
    </div>
  );
}

function Box155() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box156() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box153 />
          </div>
        </div>
      </div>
      <Cell4 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box155 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box156 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box157() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box158 />
        </div>
      </div>
    </div>
  );
}

function Box159() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box160() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box157 />
          </div>
        </div>
      </div>
      <Cell5 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box159 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box160 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box161() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box162 />
        </div>
      </div>
    </div>
  );
}

function Box163() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box164() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box161 />
          </div>
        </div>
      </div>
      <Cell6 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box163 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box164 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box165() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box166() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box166 />
        </div>
      </div>
    </div>
  );
}

function Box167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box168() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box165 />
          </div>
        </div>
      </div>
      <Cell7 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box167 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box168 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box169() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Источник</p>
      </div>
    </div>
  );
}

function Box170() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] overflow-hidden">И. Фамилия</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <Box170 />
        </div>
      </div>
    </div>
  );
}

function Box171() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">408,5 млн ₽</p>
      </div>
    </div>
  );
}

function Box172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="box">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">15.06.2025</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[850px]">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box169 />
          </div>
        </div>
      </div>
      <Cell8 />
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box171 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-[100px] relative" data-name="cell">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
            <Box172 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rail() {
  return <div className="absolute bg-[#2a2e39] bottom-0 right-0 rounded-[2px] top-0 w-[6px]" data-name="rail" />;
}

function Scroll() {
  return <div className="absolute bg-[#5a8cff] h-[36px] right-0 rounded-[4px] top-[3px] w-[6px]" data-name="scroll" />;
}

function VerticalScroll() {
  return (
    <div className="absolute h-[284px] left-[844px] opacity-50 top-[27.53px] w-[6px]" data-name="vertical_scroll">
      <Rail />
      <Scroll />
    </div>
  );
}

function TableCons() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="table_cons">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <Frame69 />
        <Frame70 />
        <Frame71 />
        <Frame72 />
        <Frame73 />
        <Frame74 />
        <Frame75 />
        <Frame76 />
        <Frame78 />
        <Frame79 />
        <VerticalScroll />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame77 />
      <TableCons />
    </div>
  );
}

function Cons() {
  return (
    <div className="bg-[#131722] content-stretch flex flex-col gap-[32px] items-start p-[16px] relative rounded-[16px] shrink-0" data-name="cons">
      <Frame67 />
      <Frame83 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a2afc2] text-[12px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">15 января 2025 Consensus</p>
      </div>
    </div>
  );
}

function LegendName() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="legend+name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis">Среднее значение</p>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">406,9 млн.</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
      <LegendName />
      <Number />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame55 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <Frame57 />
    </div>
  );
}

function LegendName1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="legend+name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis">Медиана</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">406,3 млн.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
      <LegendName1 />
      <Number1 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <Frame60 />
    </div>
  );
}

function LegendName2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="legend+name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis">Максимум</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">431,7 млн.</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
      <LegendName2 />
      <Number2 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row2 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <Frame61 />
    </div>
  );
}

function LegendName3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="legend+name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis">Минимум</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">398,6 млн.</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
      <LegendName3 />
      <Number3 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row3 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <Frame63 />
    </div>
  );
}

function LegendName4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="legend+name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis">Стандартное отклонение</p>
    </div>
  );
}

function Number4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[10px] text-ellipsis text-right">4,977 млн.</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
      <LegendName4 />
      <Number4 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row4 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="body">
      <Frame65 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[10.86%_0.01%_10.83%_-0.01%]" data-name="_28">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 12.53">
        <g id="_28">
          <path d={svgPaths.p1bf68e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LayerCopy() {
  return (
    <div className="absolute contents inset-[10.86%_0.01%_10.83%_-0.01%]" data-name="Layer_copy_9">
      <Component />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[10.86%_0.01%_10.83%_-0.01%]" data-name="Layer_2_00000145058293593620181860000002453152773290465202_">
      <LayerCopy />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] pt-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[16px]">Выберите показатель</p>
      </div>
      <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="close">
        <div className="absolute inset-1/4" data-name="vector">
          <div className="absolute inset-[-10.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.7 9.7">
              <path d={svgPaths.p2580bac0} id="vector" stroke="var(--stroke-0, #A2AFC2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Color/Popup/search">
        <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.03%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1667 12.1667">
              <path d={svgPaths.p1a7b8a00} id="Vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.37%_12.5%_12.5%_69.37%]" data-name="Vector">
          <div className="absolute inset-[-25.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.4 4.4">
              <path d="M3.65 3.65L0.75 0.75" id="Vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic opacity-30 relative text-[#e0e1e2] text-[12px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        Начните вводить
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[3px] items-start pt-[8px] relative shrink-0">
      <div className="bg-[#5a8cff] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Все</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Summary</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">BS</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">PnL</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">CF</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">{`Mults & Yield`}</p>
        </div>
      </div>
      <div className="bg-[#191f2d] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[0px] whitespace-nowrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Other</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#131722] relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[8px] px-[12px] relative w-full">
        <Frame7 />
        <div className="bg-[#131722] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Search">
          <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
              <Frame5 />
            </div>
          </div>
        </div>
        <Frame6 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Revenue</p>
      </div>
    </div>
  );
}

function Rail1() {
  return <div className="absolute bg-[#2a2e39] bottom-0 right-0 rounded-[2px] top-0 w-[6px]" data-name="rail" />;
}

function Scroll1() {
  return <div className="absolute bg-[#5a8cff] h-[49px] right-0 rounded-[4px] top-[25px] w-[6px]" data-name="scroll" />;
}

function Body7() {
  return (
    <div className="bg-[#131722] relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start pb-[8px] px-[4px] relative w-full">
        <div className="bg-[#28334f] relative rounded-[4px] shrink-0 w-full" data-name="Item">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[4px] relative w-full">
              <Frame53 />
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">EBITDA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">EBITDA margin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Net Income</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Dividends paid</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] overflow-hidden">Free cash flow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Sustaining FCF</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Dividend yield, %</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Free cash flow yield, %</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">Net debt</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131722] relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
                <p className="leading-[20px] whitespace-pre-wrap">net debt/EBITDA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 opacity-20 right-0 top-0 w-[6px]" data-name="vertical_scroll">
          <Rail1 />
          <Scroll1 />
        </div>
      </div>
    </div>
  );
}

function BgModal() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col gap-[10px] h-[1080px] items-center justify-center left-1/2 overflow-clip p-[60px] top-1/2 w-[1440px]" data-name="bg+modal">
      <Cons />
      <div className="absolute bg-black content-stretch flex flex-col gap-[4px] items-start left-[944.71px] p-[8px] rounded-[4px] top-[424px] w-[212px]" data-name="tooltip.default">
        <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
        <Title />
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
        <Body6 />
      </div>
      <div className="absolute left-[947.5px] overflow-clip size-[16px] top-[412px]" data-name="hand icon">
        <Layer />
      </div>
      <div className="absolute left-[393px] rounded-[8px] top-[254px] w-[390px]" data-name="Инструмент">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Header />
          <Body7 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#2a2e39] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
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
      <BgModal />
    </div>
  );
}