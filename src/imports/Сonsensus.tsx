import svgPaths from "./svg-nuxebzxmdo";
import { imgGroup } from "./svg-elxiq";

function LogoAndromedaWhite() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.597px] left-1/2 top-[calc(50%+0.3px)] w-[136px]" data-name="logo.andromeda_white">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 10.5974">
        <g clipPath="url(#clip0_1_62499)" id="logo.andromeda_white">
          <path d={svgPaths.p30a18a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_62499">
            <rect fill="white" height="10.5974" width="136" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[19px] relative shrink-0 w-[136px]" data-name="logo">
      <LogoAndromedaWhite />
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

function App() {
  return (
    <div className="content-start flex flex-wrap gap-[1.777777910232544px_1.778px] items-start relative shrink-0 size-[14.222px]" data-name="App">
      <div className="bg-[#28334f] rounded-[1.778px] shrink-0 size-[6.222px]" />
      <div className="bg-[#5a8cff] rounded-[1.778px] shrink-0 size-[6.222px]" />
      <div className="bg-[#5a8cff] rounded-[1.778px] shrink-0 size-[6.222px]" />
      <div className="bg-[#5a8cff] rounded-[1.778px] shrink-0 size-[6.222px]" />
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

function ProductButton() {
  return (
    <div className="bg-[#191f2d] content-stretch flex gap-[8.889px] h-[40px] items-center justify-center p-[8.889px] relative rounded-[8px] shrink-0 w-[103px]" data-name="product button">
      <App />
      <Chapter />
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

function Quotes() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-ellipsis" data-name="quotes">
      <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        3 123,43₽
      </p>
      <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        +0,65%
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
            <mask height="10" id="mask0_1_62674" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
              <path d={svgPaths.p33e02a80} id="Vector 261" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            <g mask="url(#mask0_1_62674)">
              <rect fill="var(--fill-0, #1FC989)" height="19" id="Rectangle 2689" width="67" x="-12.4978" y="-14.5" />
              <rect fill="var(--fill-0, #F23645)" height="19" id="Rectangle 2690" width="67" x="-12.4978" y="4.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function hart() {
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-[43px]" data-name="сhart">
      <Group4 />
    </div>
  );
}

function TickerFunctionButton() {
  return (
    <div className="bg-[#131722] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[4px] py-[6px] relative rounded-[4px] shrink-0" data-name="ticker-function_button">
      <Ticker />
      <Quotes />
      <hart />
    </div>
  );
}

function Cursor() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[6px]" data-name="cursor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 16.1111">
        <g id="cursor">
          <rect fill="white" height="16.1111" width="6" />
          <g id="Vector 190 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsgroupRequest() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="buttonsgroup+request">
      <TickerFunctionButton />
      <Cursor />
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

function AndromedaMainToolAmt() {
  return (
    <div className="bg-[#191f2d] content-stretch flex flex-col h-[40px] items-start justify-between px-[8px] relative rounded-[8px] shrink-0 w-[592px]" data-name="andromeda main tool (amt)">
      <Field />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="menu">
      <ProductButton />
      <AndromedaMainToolAmt />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[13.041px] relative shrink-0 w-[10.797px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7969 13.0412">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.3358 16.0224">
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
    <div className="h-[19.625px] relative shrink-0 w-[64.76px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.7605 19.6246">
        <g id="Group 336679">
          <g id="GALAVIEW">
            <path d={svgPaths.p1f1e9600} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p30b1fa40} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2c55b600} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p37449280} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p1fd98a00} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p3c48ff00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p3d6be680} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.pafe7000} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
          <path d={svgPaths.p2a654300} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ProductButton1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="product button" style={{ backgroundImage: "linear-gradient(151.973deg, rgb(69, 211, 206) 8.1594%, rgb(90, 140, 255) 87.999%)" }}>
      <Group5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.032px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0322 18">
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
      <ProductButton1 />
      <AccountButton />
    </div>
  );
}

function AndromedaHeaderV() {
  return (
    <div className="bg-[#131722] content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative shrink-0 w-[1440px]" data-name="Andromeda_header_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <LogoFrame />
      <Menu />
      <SettingsBar />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.22%_12.5%_6.28%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-1.12px] mask-size-[18px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
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

function Tab() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
      <IconText />
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

function Tab1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <IconText1 />
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

function Tab2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <IconText2 />
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

function Tab3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <IconText3 />
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

function Tab4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <IconText4 />
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

function Tab5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
      <IconText5 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function ChevronDoubleLeft() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron_double_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron_double_left">
          <path d={svgPaths.p75b1e00} id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
      <ChevronDoubleLeft />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron_left">
          <path d="M7 9L4 6L7 3" id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
      <ChevronLeft />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron_right">
          <path d="M5 9L8 6L5 3" id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
      <ChevronRight />
    </div>
  );
}

function ChevronDoubleRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron_double_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron_double_right">
          <path d={svgPaths.pee81800} id="vector" stroke="var(--stroke-0, #C4C7C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#191f2d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
      <ChevronDoubleRight />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="buttons">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TabsFa() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tabs_fa">
      <Tabs />
      <Buttons />
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

function TableHead() {
  return (
    <div className="content-stretch flex h-full items-center px-[12px] relative shrink-0 w-[224px]" data-name="table_head">
      <Box />
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

function TableHead1() {
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

function TableHead2() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box2 />
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

function TableHead3() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box3 />
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

function TableHead4() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box4 />
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

function TableHead5() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box5 />
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

function TableHead6() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box6 />
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

function TableHead7() {
  return (
    <div className="content-stretch flex h-full items-center justify-between px-[8px] relative shrink-0 w-[82px]" data-name="table_head">
      <Box7 />
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

function TableHead8() {
  return (
    <div className="bg-[#2a2e39] content-stretch flex h-full items-center justify-end px-[8px] relative shrink-0 w-[110px]" data-name="table_head">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-r border-solid inset-0 pointer-events-none" />
      <Box8 />
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

function TableHead9() {
  return (
    <div className="bg-[#2a2e39] content-stretch flex h-full items-center justify-end px-[8px] relative shrink-0 w-[110px]" data-name="table_head">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box9 />
    </div>
  );
}

function Head() {
  return (
    <div className="bg-[#2f3441] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="head">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch">
          <TableHead />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead6 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead7 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead8 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableHead9 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame />
    </div>
  );
}

function TableCellFa() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box11 />
      <Component />
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

function TableCellV1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box12 />
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

function TableCellV2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box13 />
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

function TableCellV3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box14 />
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

function TableCellV4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box15 />
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

function TableCellV5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box16 />
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

function TableCellV6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box17 />
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

function TableCellV7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box18 />
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

function TableCellV8() {
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

function TableCellV9() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box20 />
    </div>
  );
}

function FaTableRow() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa />
      <TableCellV1 />
      <TableCellV2 />
      <TableCellV3 />
      <TableCellV4 />
      <TableCellV5 />
      <TableCellV6 />
      <TableCellV7 />
      <TableCellV8 />
      <TableCellV9 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame1 />
    </div>
  );
}

function TableCellFa1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box21 />
      <Component1 />
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

function TableCellV10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box22 />
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

function TableCellV11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box23 />
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

function TableCellV12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box24 />
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

function TableCellV13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box25 />
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

function TableCellV14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box26 />
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

function TableCellV15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box27 />
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

function TableCellV16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box28 />
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

function TableCellV17() {
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

function TableCellV18() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box30 />
    </div>
  );
}

function FaTableRow1() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa1 />
      <TableCellV10 />
      <TableCellV11 />
      <TableCellV12 />
      <TableCellV13 />
      <TableCellV14 />
      <TableCellV15 />
      <TableCellV16 />
      <TableCellV17 />
      <TableCellV18 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame2 />
    </div>
  );
}

function TableCellFa2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box31 />
      <Component2 />
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

function TableCellV19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box32 />
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

function TableCellV20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box33 />
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

function TableCellV21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box34 />
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

function TableCellV22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box35 />
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

function TableCellV23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box36 />
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

function TableCellV24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box37 />
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

function TableCellV25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box38 />
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

function TableCellV26() {
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

function TableCellV27() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box40 />
    </div>
  );
}

function FaTableRow2() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa2 />
      <TableCellV19 />
      <TableCellV20 />
      <TableCellV21 />
      <TableCellV22 />
      <TableCellV23 />
      <TableCellV24 />
      <TableCellV25 />
      <TableCellV26 />
      <TableCellV27 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame3 />
    </div>
  );
}

function TableCellFa3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box41 />
      <Component3 />
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

function TableCellV28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box42 />
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

function TableCellV29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box43 />
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

function TableCellV30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box44 />
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

function TableCellV31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box45 />
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

function TableCellV32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box46 />
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

function TableCellV33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box47 />
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

function TableCellV34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box48 />
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

function TableCellV35() {
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

function TableCellV36() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box50 />
    </div>
  );
}

function FaTableRow3() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa3 />
      <TableCellV28 />
      <TableCellV29 />
      <TableCellV30 />
      <TableCellV31 />
      <TableCellV32 />
      <TableCellV33 />
      <TableCellV34 />
      <TableCellV35 />
      <TableCellV36 />
    </div>
  );
}

function PnL() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PnL">
      <Head />
      <TableCellV />
      <FaTableRow />
      <FaTableRow1 />
      <FaTableRow2 />
      <FaTableRow3 />
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

function TableCellV37() {
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame4 />
    </div>
  );
}

function TableCellFa4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box52 />
      <Component4 />
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

function TableCellV38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box53 />
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

function TableCellV39() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box54 />
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

function TableCellV40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box55 />
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

function TableCellV41() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box56 />
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

function TableCellV42() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box57 />
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

function TableCellV43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box58 />
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

function TableCellV44() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box59 />
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

function TableCellV45() {
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

function TableCellV46() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box61 />
    </div>
  );
}

function FaTableRow4() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa4 />
      <TableCellV38 />
      <TableCellV39 />
      <TableCellV40 />
      <TableCellV41 />
      <TableCellV42 />
      <TableCellV43 />
      <TableCellV44 />
      <TableCellV45 />
      <TableCellV46 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame5 />
    </div>
  );
}

function TableCellFa5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box62 />
      <Component5 />
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

function TableCellV47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box63 />
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

function TableCellV48() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box64 />
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

function TableCellV49() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box65 />
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

function TableCellV50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box66 />
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

function TableCellV51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box67 />
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

function TableCellV52() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box68 />
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

function TableCellV53() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box69 />
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

function TableCellV54() {
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

function TableCellV55() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box71 />
    </div>
  );
}

function FaTableRow5() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa5 />
      <TableCellV47 />
      <TableCellV48 />
      <TableCellV49 />
      <TableCellV50 />
      <TableCellV51 />
      <TableCellV52 />
      <TableCellV53 />
      <TableCellV54 />
      <TableCellV55 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame6 />
    </div>
  );
}

function TableCellFa6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box72 />
      <Component6 />
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

function TableCellV56() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box73 />
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

function TableCellV57() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box74 />
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

function TableCellV58() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box75 />
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

function TableCellV59() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box76 />
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

function TableCellV60() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box77 />
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

function TableCellV61() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box78 />
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

function TableCellV62() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box79 />
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

function TableCellV63() {
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

function TableCellV64() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box81 />
    </div>
  );
}

function FaTableRow6() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa6 />
      <TableCellV56 />
      <TableCellV57 />
      <TableCellV58 />
      <TableCellV59 />
      <TableCellV60 />
      <TableCellV61 />
      <TableCellV62 />
      <TableCellV63 />
      <TableCellV64 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame7 />
    </div>
  );
}

function TableCellFa7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box82 />
      <Component7 />
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

function TableCellV65() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box83 />
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

function TableCellV66() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box84 />
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

function TableCellV67() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box85 />
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

function TableCellV68() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box86 />
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

function TableCellV69() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box87 />
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

function TableCellV70() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box88 />
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

function TableCellV71() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box89 />
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

function TableCellV72() {
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

function TableCellV73() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box91 />
    </div>
  );
}

function FaTableRow7() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa7 />
      <TableCellV65 />
      <TableCellV66 />
      <TableCellV67 />
      <TableCellV68 />
      <TableCellV69 />
      <TableCellV70 />
      <TableCellV71 />
      <TableCellV72 />
      <TableCellV73 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame8 />
    </div>
  );
}

function TableCellFa8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box92 />
      <Component8 />
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

function TableCellV74() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box93 />
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

function TableCellV75() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box94 />
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

function TableCellV76() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box95 />
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

function TableCellV77() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box96 />
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

function TableCellV78() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box97 />
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

function TableCellV79() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box98 />
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

function TableCellV80() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box99 />
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

function TableCellV81() {
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

function TableCellV82() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box101 />
    </div>
  );
}

function FaTableRow8() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa8 />
      <TableCellV74 />
      <TableCellV75 />
      <TableCellV76 />
      <TableCellV77 />
      <TableCellV78 />
      <TableCellV79 />
      <TableCellV80 />
      <TableCellV81 />
      <TableCellV82 />
    </div>
  );
}

function CashFlow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cash Flow">
      <TableCellV37 />
      <FaTableRow4 />
      <FaTableRow5 />
      <FaTableRow6 />
      <FaTableRow7 />
      <FaTableRow8 />
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

function TableCellV83() {
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame9 />
    </div>
  );
}

function TableCellFa9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box103 />
      <Component9 />
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

function TableCellV84() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box104 />
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

function TableCellV85() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box105 />
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

function TableCellV86() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box106 />
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

function TableCellV87() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box107 />
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

function TableCellV88() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box108 />
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

function TableCellV89() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box109 />
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

function TableCellV90() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box110 />
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

function TableCellV91() {
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

function TableCellV92() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-full items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box112 />
    </div>
  );
}

function FaTableRow9() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa9 />
      <TableCellV84 />
      <TableCellV85 />
      <TableCellV86 />
      <TableCellV87 />
      <TableCellV88 />
      <TableCellV89 />
      <TableCellV90 />
      <TableCellV91 />
      <TableCellV92 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame10 />
    </div>
  );
}

function TableCellFa10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box113 />
      <Component10 />
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

function TableCellV93() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box114 />
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

function TableCellV94() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box115 />
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

function TableCellV95() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box116 />
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

function TableCellV96() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box117 />
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

function TableCellV97() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box118 />
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

function TableCellV98() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box119 />
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

function TableCellV99() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box120 />
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

function TableCellV100() {
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

function TableCellV101() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box122 />
    </div>
  );
}

function FaTableRow10() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa10 />
      <TableCellV93 />
      <TableCellV94 />
      <TableCellV95 />
      <TableCellV96 />
      <TableCellV97 />
      <TableCellV98 />
      <TableCellV99 />
      <TableCellV100 />
      <TableCellV101 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 18">
        <g id="Frame 881236397">
          <path d={svgPaths.p137d4940} id="Vector 258" stroke="var(--stroke-0, #5A8CFF)" />
          <path d={svgPaths.p2481e300} id="Vector 260" stroke="var(--stroke-0, #45D3CE)" />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start px-[0.737px] py-[1.475px] relative shrink-0 w-[45px]" data-name="Component 1">
      <Frame11 />
    </div>
  );
}

function TableCellFa11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[10px] relative shrink-0 w-[224px]" data-name="table_cell_FA">
      <Box123 />
      <Component11 />
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

function TableCellV102() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box124 />
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

function TableCellV103() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box125 />
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

function TableCellV104() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box126 />
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

function TableCellV105() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box127 />
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

function TableCellV106() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box128 />
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

function TableCellV107() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box129 />
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

function TableCellV108() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[82px]" data-name="table_cell_v2">
      <Box130 />
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

function TableCellV109() {
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

function TableCellV110() {
  return (
    <div className="bg-[#151b27] content-stretch flex gap-[4px] h-[40px] items-center justify-end px-[8px] py-[10px] relative shrink-0 w-[110px]" data-name="table_cell_v2">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <Box132 />
    </div>
  );
}

function FaTableRow11() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="FA_table_row">
      <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
      <TableCellFa11 />
      <TableCellV102 />
      <TableCellV103 />
      <TableCellV104 />
      <TableCellV105 />
      <TableCellV106 />
      <TableCellV107 />
      <TableCellV108 />
      <TableCellV109 />
      <TableCellV110 />
    </div>
  );
}

function BalanceSheet() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Balance Sheet">
      <TableCellV83 />
      <FaTableRow9 />
      <FaTableRow10 />
      <FaTableRow11 />
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
      <TabsFa />
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
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-center relative shrink-0 text-[#5a8cff]" data-name="links">
      <p className="relative shrink-0 text-center">support@euler.team</p>
      <p className="relative shrink-0 text-center">Политика конфиденциальности</p>
      <p className="relative shrink-0 text-right">Условия использования</p>
    </div>
  );
}

function FooterAndromeda() {
  return (
    <div className="bg-[#131722] relative shrink-0 w-full" data-name="footer.andromeda">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[16px] not-italic px-[24px] py-[16px] relative text-[10px] w-full">
          <p className="font-['Manrope:Bold',sans-serif] relative shrink-0 text-[#677c9c]">© Andromeda 2025. Авторские права защищены.</p>
          <Links />
        </div>
      </div>
    </div>
  );
}

export default function onsensus() {
  return (
    <div className="bg-[#131722] content-stretch flex flex-col items-start justify-between relative size-full" data-name="Сonsensus">
      <AndromedaHeaderV />
      <CompanyFundamentals />
      <FooterAndromeda />
    </div>
  );
}