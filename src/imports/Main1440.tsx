import svgPaths from "./svg-7xqkey1fwe";
import imgPhoto202505191605401 from "figma:asset/a711982f59b2bd29e1adbbfb3086c4c8724e9102.png";
import img3 from "figma:asset/3c3ebef3c1066f67fe7c485f10ac5384f7bd69c6.png";
import imgRectangle2857 from "figma:asset/59ed0f9bdde97a66784e760d446da84455b2472c.png";
import img from "figma:asset/f0ae336bb370c8dc0ea4c971ae42be657bd94dfb.png";
import imgImage from "figma:asset/304ef455e4c50005a6b356bd0b1a12c09f355161.png";
import imgImage1 from "figma:asset/e450def5c90443151e88d0a286528e325081c80f.png";
import imgImage242 from "figma:asset/977e4b878eadd822e621f47186b4000e26146076.png";
import img2 from "figma:asset/93d7150aea240ec8764b04905294755c224d4636.png";
import imgDsc01230111 from "figma:asset/c9eb82ccb86a03dca69d57a476f063d0ec0c1d2f.png";

function Logo() {
  return (
    <div className="h-[19px] relative shrink-0 w-[136px]" data-name="logo">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.597px] left-1/2 overflow-clip top-[calc(50%+0.3px)] w-[136px]" data-name="logo.andromeda_white">
        <div className="absolute inset-[0.17%_0.14%_4.25%_0.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.285 10.1281">
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        Ticker
      </p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[20%_5.81%_20%_4.65%]">
      <div className="absolute inset-[-5.56%_-1.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5001 10">
          <g id="Group 336662">
            <mask height="10" id="mask0_130_19695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
              <path d={svgPaths.p33e02a80} id="Vector 261" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            <g mask="url(#mask0_130_19695)">
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
          <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            3 123,43₽
          </p>
          <p className="overflow-hidden relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            +0,65%
          </p>
        </div>
        <div className="h-[15px] overflow-clip relative shrink-0 w-[43px]" data-name="сhart">
          <Group25 />
        </div>
      </div>
      <div className="bg-white h-[16.111px] relative shrink-0 w-[6px]" data-name="cursor">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector 190 (Stroke)" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#677c9c] text-[12px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7969 13.0412">
        <g id="Group">
          <path d={svgPaths.pbda2300} fill="var(--fill-0, #5A8CFF)" id="Vector" />
          <path d={svgPaths.p38d88100} fill="var(--fill-0, #5A8CFF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="h-[16.022px] relative shrink-0 w-[47.336px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.3358 16.0224">
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Group />
      <Group24 />
    </div>
  );
}

function NewButtonEuler() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0" data-name="new_button_euler">
      <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame29 />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[7px] text-white tracking-[0.49px] uppercase whitespace-nowrap">
        <p className="mb-0">Аналитический</p>
        <p>портал</p>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="h-[14.638px] relative shrink-0 w-[86.581px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.5814 14.6382">
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
      <Group26 />
    </div>
  );
}

function Group18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.032px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0322 18">
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
      <Group18 />
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

function Ticker1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number1 />
      <Quotes />
    </div>
  );
}

function Ticker2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number3 />
      <Quotes1 />
    </div>
  );
}

function Ticker3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number5 />
      <Quotes2 />
    </div>
  );
}

function Ticker4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number7 />
      <Quotes3 />
    </div>
  );
}

function Ticker5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number9 />
      <Quotes4 />
    </div>
  );
}

function Ticker6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number11 />
      <Quotes5 />
    </div>
  );
}

function Ticker7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX QWEEA...</p>
    </div>
  );
}

function Number13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">100 145,95</p>
    </div>
  );
}

function Quotes6() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number13 />
      <Quotes6 />
    </div>
  );
}

function Ticker8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes7() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number15 />
      <Quotes7 />
    </div>
  );
}

function Ticker9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number17 />
      <Quotes8 />
    </div>
  );
}

function Ticker10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes9() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number19 />
      <Quotes9 />
    </div>
  );
}

function Ticker11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">GMKN</p>
    </div>
  );
}

function Number21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number21 />
      <Quotes10 />
    </div>
  );
}

function Ticker12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes11() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number23 />
      <Quotes11 />
    </div>
  );
}

function Ticker13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes12() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number25 />
      <Quotes12 />
    </div>
  );
}

function Ticker14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes13() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number27 />
      <Quotes13 />
    </div>
  );
}

function Ticker15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes14() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number29 />
      <Quotes14 />
    </div>
  );
}

function Ticker16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes15() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number31 />
      <Quotes15 />
    </div>
  );
}

function Ticker17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes16() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number33 />
      <Quotes16 />
    </div>
  );
}

function Ticker18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes17() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number35 />
      <Quotes17 />
    </div>
  );
}

function Ticker19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes18() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number37 />
      <Quotes18 />
    </div>
  );
}

function Ticker20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes19() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number39 />
      <Quotes19 />
    </div>
  );
}

function Ticker21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX QWEEA...</p>
    </div>
  );
}

function Number41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">100 145,95</p>
    </div>
  );
}

function Quotes20() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number41 />
      <Quotes20 />
    </div>
  );
}

function Ticker22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes21() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number43 />
      <Quotes21 />
    </div>
  );
}

function Ticker23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number45 />
      <Quotes22 />
    </div>
  );
}

function Ticker24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number47() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes23() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number47 />
      <Quotes23 />
    </div>
  );
}

function Ticker25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">GMKN</p>
    </div>
  );
}

function Number49() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number49 />
      <Quotes24 />
    </div>
  );
}

function Ticker26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number51() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes25() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number51 />
      <Quotes25 />
    </div>
  );
}

function Ticker27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">YNDX</p>
    </div>
  );
}

function Number53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">5 145,95</p>
    </div>
  );
}

function Quotes26() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1fc989] text-[12px] text-right">+9,59%</p>
    </div>
  );
}

function Number52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number53 />
      <Quotes26 />
    </div>
  );
}

function Ticker28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[12px]">NRKL</p>
    </div>
  );
}

function Number55() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[12px]">545,95</p>
    </div>
  );
}

function Quotes27() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="quotes">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ea3943] text-[12px] text-right">-8,59%</p>
    </div>
  );
}

function Number54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="number+%">
      <Number55 />
      <Quotes27 />
    </div>
  );
}

function StockQuotes() {
  return (
    <div className="bg-[#131722] content-stretch flex gap-[4px] items-center justify-center py-[8px] relative shrink-0 w-full z-[3]" data-name="stock quotes">
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker1 />
        <Number />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker2 />
        <Number2 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker3 />
        <Number4 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker4 />
        <Number6 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker5 />
        <Number8 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker6 />
        <Number10 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker7 />
        <Number12 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker8 />
        <Number14 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker9 />
        <Number16 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker10 />
        <Number18 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker11 />
        <Number20 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker12 />
        <Number22 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker13 />
        <Number24 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker14 />
        <Number26 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker15 />
        <Number28 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker16 />
        <Number30 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker17 />
        <Number32 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker18 />
        <Number34 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker19 />
        <Number36 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker20 />
        <Number38 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker21 />
        <Number40 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker22 />
        <Number42 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker23 />
        <Number44 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker24 />
        <Number46 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker25 />
        <Number48 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker26 />
        <Number50 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker27 />
        <Number52 />
      </div>
      <div className="bg-[#191f2d] content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="card.ticker">
        <Ticker28 />
        <Number54 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-between leading-[16px] not-italic relative shrink-0 text-[12px] w-full">
      <p className="relative shrink-0 text-[#677c9c] uppercase">Ближайшие события</p>
      <p className="relative shrink-0 text-[#5a8cff]">Смотреть все</p>
    </div>
  );
}

function Days() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="days">
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Ср</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Чт</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Пт</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Сб</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Вс</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Пн</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e39] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[4px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Вт</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-[#5740ff] content-stretch flex flex-col items-center justify-center min-w-[16px] overflow-clip pb-px px-[2px] relative rounded-[4px] shrink-0" data-name="dot">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[normal]">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">10</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame45() {
  return <div className="content-stretch flex items-center justify-end shrink-0 w-full" />;
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">11</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-[#5740ff] content-stretch flex flex-col items-center justify-center min-w-[13px] overflow-clip pb-px px-[2px] relative rounded-[4px] shrink-0" data-name="dot">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">12</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-[#5740ff] content-stretch flex flex-col items-center justify-center min-w-[10px] overflow-clip pb-px px-[2px] relative rounded-[4px] shrink-0" data-name="dot">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[normal]">99+</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">13</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-[#5740ff] content-stretch flex flex-col items-center justify-center min-w-[16px] overflow-clip pb-px px-[2px] relative rounded-[4px] shrink-0" data-name="dot">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[normal]">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">14</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-[#5740ff] content-stretch flex flex-col items-center justify-center min-w-[13px] overflow-clip pb-px px-[2px] relative rounded-[4px] shrink-0" data-name="dot">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[normal]">6</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
        <p className="mb-0">15</p>
        <p>мар</p>
      </div>
    </div>
  );
}

function Frame50() {
  return <div className="content-stretch flex items-center justify-end shrink-0 w-full" />;
}

function Week() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="week">
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[10px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] whitespace-nowrap">
              <p className="mb-0">9</p>
              <p>мар</p>
            </div>
            <Frame44 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#28334f] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame57 />
            <Frame45 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame55 />
            <Frame46 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame56 />
            <Frame47 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame58 />
            <Frame48 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame59 />
            <Frame49 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="calendar.components">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start p-[4px] relative w-full">
            <Frame60 />
            <Frame50 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DayWeeks() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="day+weeks">
      <Days />
      <Week />
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="Frame 881237180">
          <path d="M6 2L1.99999 5.99999L6 10" id="Vector 299" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame52 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">пред. 7 дней</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[12px] relative w-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="Frame 881237181">
          <path d="M6 2L1.99999 5.99999L6 10" id="Vector 299" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">след. 7 дней</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame51 />
      <Frame53 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Сырье</p>
      </div>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-left whitespace-nowrap">
        <p className="leading-[16px]">Валюты</p>
      </div>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-left whitespace-nowrap">
        <p className="leading-[16px]">Индексы</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText />
      </div>
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText1 />
      </button>
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="tab">
        <IconText2 />
      </button>
    </div>
  );
}

function Ticker29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]">BRENT</p>
    </div>
  );
}

function UpdateTimeActualTooltipHover() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Update/time actual+tooltip/hover">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Update/Group">
          <path clipRule="evenodd" d={svgPaths.p1037c680} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9cedc00} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p169e2700} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Industry() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="industry">
      <UpdateTimeActualTooltipHover />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[10px]">03.12.24</p>
    </div>
  );
}

function TickerIndustry() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="ticker+industry">
      <Ticker29 />
      <Industry />
    </div>
  );
}

function Number56() {
  return (
    <div className="content-stretch flex items-center justify-end mb-[-1px] relative shrink-0 w-full" data-name="number">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a2afc2] text-[14px] text-right whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        1 545,45
      </p>
    </div>
  );
}

function Quotes29() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="quotes">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#089981] text-[12px] text-right w-[85px] whitespace-pre-wrap">+15,50 (-1,7%)</p>
    </div>
  );
}

function NumberQuotes() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-px relative shrink-0" data-name="number+quotes">
      <Number56 />
      <Quotes29 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute h-[23.181px] left-0 top-0 w-[76px]">
      <div className="absolute inset-[-2.74%_0_-2.69%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2476 24.4376">
          <g id="Group 336587">
            <path d={svgPaths.p229e97c0} id="Vector 3" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3a7c8300} fill="url(#paint0_linear_130_19579)" id="Vector 6" />
            <path d={svgPaths.p208e6ee0} id="Vector 1" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3bc025f0} fill="url(#paint1_linear_130_19579)" id="Vector 4" />
            <path d={svgPaths.p3ea48c00} id="Vector 2" stroke="var(--stroke-0, #1FC989)" />
            <path d={svgPaths.p386d0f00} fill="url(#paint2_linear_130_19579)" id="Vector 5" />
            <g id="Group 1">
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #EA3943)" id="Ellipse 1" r="2" />
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #131722)" id="Ellipse 2" r="1" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_19579" x1="71.4976" x2="71.4976" y1="8.23413" y2="13.1742">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_130_19579" x1="22.2476" x2="22.2476" y1="8.61499" y2="23.8151">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_130_19579" x1="56.7476" x2="56.7476" y1="0.634521" y2="8.61458">
              <stop stopColor="#1FC989" />
              <stop offset="1" stopColor="#1FC989" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[23.18px] left-0 overflow-clip top-[4.91px] w-[76px]" data-name="1">
      <Group19 />
    </div>
  );
}

function NumberGraph() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="number+graph">
      <NumberQuotes />
      <div className="h-[33px] overflow-clip relative shrink-0 w-[77px]" data-name="graph">
        <Component1 />
      </div>
    </div>
  );
}

function Ticker30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]">URALS</p>
    </div>
  );
}

function UpdateTimeActualTooltipHover1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Update/time actual+tooltip/hover">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Update/Group">
          <path clipRule="evenodd" d={svgPaths.p1037c680} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9cedc00} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p169e2700} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Industry1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="industry">
      <UpdateTimeActualTooltipHover1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[10px]">03.12.24</p>
    </div>
  );
}

function TickerIndustry1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="ticker+industry">
      <Ticker30 />
      <Industry1 />
    </div>
  );
}

function Number57() {
  return (
    <div className="content-stretch flex items-center justify-end mb-[-1px] relative shrink-0 w-full" data-name="number">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a2afc2] text-[14px] text-right whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        2 845,45
      </p>
    </div>
  );
}

function Quotes30() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="quotes">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f23645] text-[12px] text-right w-[85px] whitespace-pre-wrap">-25,50 (-1,7%)</p>
    </div>
  );
}

function NumberQuotes1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-px relative shrink-0" data-name="number+quotes">
      <Number57 />
      <Quotes30 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute h-[23.181px] left-0 top-0 w-[76px]">
      <div className="absolute inset-[-2.74%_0_-2.69%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2476 24.4376">
          <g id="Group 336587">
            <path d={svgPaths.p229e97c0} id="Vector 3" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3a7c8300} fill="url(#paint0_linear_130_19579)" id="Vector 6" />
            <path d={svgPaths.p208e6ee0} id="Vector 1" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3bc025f0} fill="url(#paint1_linear_130_19579)" id="Vector 4" />
            <path d={svgPaths.p3ea48c00} id="Vector 2" stroke="var(--stroke-0, #1FC989)" />
            <path d={svgPaths.p386d0f00} fill="url(#paint2_linear_130_19579)" id="Vector 5" />
            <g id="Group 1">
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #EA3943)" id="Ellipse 1" r="2" />
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #131722)" id="Ellipse 2" r="1" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_19579" x1="71.4976" x2="71.4976" y1="8.23413" y2="13.1742">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_130_19579" x1="22.2476" x2="22.2476" y1="8.61499" y2="23.8151">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_130_19579" x1="56.7476" x2="56.7476" y1="0.634521" y2="8.61458">
              <stop stopColor="#1FC989" />
              <stop offset="1" stopColor="#1FC989" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[23.18px] left-0 overflow-clip top-[4.91px] w-[76px]" data-name="1">
      <Group20 />
    </div>
  );
}

function NumberGraph1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="number+graph">
      <NumberQuotes1 />
      <div className="h-[33px] overflow-clip relative shrink-0 w-[77px]" data-name="graph">
        <Component2 />
      </div>
    </div>
  );
}

function Ticker31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]">{`TTFGAHD `}</p>
    </div>
  );
}

function UpdateTimeActualTooltipHover2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Update/time actual+tooltip/hover">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Update/Group">
          <path clipRule="evenodd" d={svgPaths.p1037c680} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9cedc00} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p169e2700} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Industry2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="industry">
      <UpdateTimeActualTooltipHover2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[10px]">03.12.24</p>
    </div>
  );
}

function TickerIndustry2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="ticker+industry">
      <Ticker31 />
      <Industry2 />
    </div>
  );
}

function Number58() {
  return (
    <div className="content-stretch flex items-center justify-end mb-[-1px] relative shrink-0 w-full" data-name="number">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a2afc2] text-[14px] text-right whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        145,45
      </p>
    </div>
  );
}

function Quotes31() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="quotes">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[85px] whitespace-pre-wrap">0,00 (0,0%)</p>
    </div>
  );
}

function NumberQuotes2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-px relative shrink-0" data-name="number+quotes">
      <Number58 />
      <Quotes31 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute h-[23.181px] left-0 top-0 w-[76px]">
      <div className="absolute inset-[-2.74%_0_-2.69%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2476 24.4376">
          <g id="Group 336587">
            <path d={svgPaths.p26a1b600} id="Vector 3" stroke="var(--stroke-0, #677C9C)" />
            <path d={svgPaths.p208e6ee0} id="Vector 1" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3bc025f0} fill="url(#paint0_linear_130_19613)" id="Vector 4" />
            <path d={svgPaths.p3fcd1900} id="Vector 2" stroke="var(--stroke-0, #1FC989)" />
            <path d={svgPaths.p5f23700} fill="url(#paint1_linear_130_19613)" id="Vector 5" />
            <g id="Group 1">
              <circle cx="74.2476" cy="8.23413" fill="var(--fill-0, #677C9C)" id="Ellipse 1" r="2" />
              <circle cx="74.2476" cy="8.23413" fill="var(--fill-0, #131722)" id="Ellipse 2" r="1" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_19613" x1="22.2476" x2="22.2476" y1="8.61499" y2="23.8151">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_130_19613" x1="56.7476" x2="56.7476" y1="0.634521" y2="8.61458">
              <stop stopColor="#1FC989" />
              <stop offset="1" stopColor="#1FC989" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[23.18px] left-0 overflow-clip top-[4.91px] w-[76px]" data-name="1">
      <Group21 />
    </div>
  );
}

function NumberGraph2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="number+graph">
      <NumberQuotes2 />
      <div className="h-[33px] overflow-clip relative shrink-0 w-[77px]" data-name="graph">
        <Component3 />
      </div>
    </div>
  );
}

function Ticker32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]">XAU</p>
    </div>
  );
}

function UpdateTimeActualTooltipHover3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Update/time actual+tooltip/hover">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Update/Group">
          <path clipRule="evenodd" d={svgPaths.p1037c680} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9cedc00} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p169e2700} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Industry3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="industry">
      <UpdateTimeActualTooltipHover3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[10px]">02.12.24</p>
    </div>
  );
}

function TickerIndustry3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="ticker+industry">
      <Ticker32 />
      <Industry3 />
    </div>
  );
}

function Number59() {
  return (
    <div className="content-stretch flex items-center justify-end mb-[-1px] relative shrink-0 w-full" data-name="number">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a2afc2] text-[14px] text-right whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>{` 845,45`}</p>
    </div>
  );
}

function Quotes32() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="quotes">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[85px] whitespace-pre-wrap">
        <span className="leading-[16px]">{`0,00 `}</span>
        <span className="leading-[16px]">(0,0%)</span>
      </p>
    </div>
  );
}

function NumberQuotes3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-px relative shrink-0" data-name="number+quotes">
      <Number59 />
      <Quotes32 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute h-[23.181px] left-0 top-0 w-[76px]">
      <div className="absolute inset-[-2.74%_0_-2.69%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2476 24.4376">
          <g id="Group 336587">
            <path d={svgPaths.p26a1b600} id="Vector 3" stroke="var(--stroke-0, #677C9C)" />
            <path d={svgPaths.p208e6ee0} id="Vector 1" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3bc025f0} fill="url(#paint0_linear_130_19613)" id="Vector 4" />
            <path d={svgPaths.p3fcd1900} id="Vector 2" stroke="var(--stroke-0, #1FC989)" />
            <path d={svgPaths.p5f23700} fill="url(#paint1_linear_130_19613)" id="Vector 5" />
            <g id="Group 1">
              <circle cx="74.2476" cy="8.23413" fill="var(--fill-0, #677C9C)" id="Ellipse 1" r="2" />
              <circle cx="74.2476" cy="8.23413" fill="var(--fill-0, #131722)" id="Ellipse 2" r="1" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_19613" x1="22.2476" x2="22.2476" y1="8.61499" y2="23.8151">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_130_19613" x1="56.7476" x2="56.7476" y1="0.634521" y2="8.61458">
              <stop stopColor="#1FC989" />
              <stop offset="1" stopColor="#1FC989" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[23.18px] left-0 overflow-clip top-[4.91px] w-[76px]" data-name="1">
      <Group22 />
    </div>
  );
}

function NumberGraph3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="number+graph">
      <NumberQuotes3 />
      <div className="h-[33px] overflow-clip relative shrink-0 w-[77px]" data-name="graph">
        <Component4 />
      </div>
    </div>
  );
}

function Ticker33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ticker">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px]">XAG</p>
    </div>
  );
}

function UpdateTimeActualTooltipHover4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Update/time actual+tooltip/hover">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Update/Group">
          <path clipRule="evenodd" d={svgPaths.p1037c680} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9cedc00} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p169e2700} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Industry4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="industry">
      <UpdateTimeActualTooltipHover4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a2afc2] text-[10px]">01.12.24</p>
    </div>
  );
}

function TickerIndustry4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="ticker+industry">
      <Ticker33 />
      <Industry4 />
    </div>
  );
}

function Number60() {
  return (
    <div className="content-stretch flex items-center justify-end mb-[-1px] relative shrink-0 w-full" data-name="number">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a2afc2] text-[14px] text-right whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        45,45
      </p>
    </div>
  );
}

function Quotes33() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="quotes">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f23645] text-[12px] text-right w-[85px] whitespace-pre-wrap">-2,50 (-1,7%)</p>
    </div>
  );
}

function NumberQuotes4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-px relative shrink-0" data-name="number+quotes">
      <Number60 />
      <Quotes33 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute h-[23.181px] left-0 top-0 w-[76px]">
      <div className="absolute inset-[-2.74%_0_-2.69%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.2476 24.4376">
          <g id="Group 336587">
            <path d={svgPaths.p229e97c0} id="Vector 3" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3a7c8300} fill="url(#paint0_linear_130_19579)" id="Vector 6" />
            <path d={svgPaths.p208e6ee0} id="Vector 1" stroke="var(--stroke-0, #EA3943)" />
            <path d={svgPaths.p3bc025f0} fill="url(#paint1_linear_130_19579)" id="Vector 4" />
            <path d={svgPaths.p3ea48c00} id="Vector 2" stroke="var(--stroke-0, #1FC989)" />
            <path d={svgPaths.p386d0f00} fill="url(#paint2_linear_130_19579)" id="Vector 5" />
            <g id="Group 1">
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #EA3943)" id="Ellipse 1" r="2" />
              <circle cx="74.2476" cy="12.6345" fill="var(--fill-0, #131722)" id="Ellipse 2" r="1" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_130_19579" x1="71.4976" x2="71.4976" y1="8.23413" y2="13.1742">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_130_19579" x1="22.2476" x2="22.2476" y1="8.61499" y2="23.8151">
              <stop stopColor="#EA3943" stopOpacity="0" />
              <stop offset="1" stopColor="#EA3943" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_130_19579" x1="56.7476" x2="56.7476" y1="0.634521" y2="8.61458">
              <stop stopColor="#1FC989" />
              <stop offset="1" stopColor="#1FC989" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[23.18px] left-0 overflow-clip top-[4.91px] w-[76px]" data-name="1">
      <Group23 />
    </div>
  );
}

function NumberGraph4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="number+graph">
      <NumberQuotes4 />
      <div className="h-[33px] overflow-clip relative shrink-0 w-[77px]" data-name="graph">
        <Component5 />
      </div>
    </div>
  );
}

function Quotes28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="quotes">
      <div className="bg-[#191f2d] relative rounded-[8px] shrink-0 w-full" data-name="card.ticker">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <TickerIndustry />
            <NumberGraph />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] relative rounded-[8px] shrink-0 w-full" data-name="card.ticker">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <TickerIndustry1 />
            <NumberGraph1 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] relative rounded-[8px] shrink-0 w-full" data-name="card.ticker">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <TickerIndustry2 />
            <NumberGraph2 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] relative rounded-[8px] shrink-0 w-full" data-name="card.ticker">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <TickerIndustry3 />
            <NumberGraph3 />
          </div>
        </div>
      </div>
      <div className="bg-[#191f2d] relative rounded-[8px] shrink-0 w-full" data-name="card.ticker">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <TickerIndustry4 />
            <NumberGraph4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Акции</p>
      </div>
    </div>
  );
}

function IconText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon+text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Облигации</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="tabs">
      <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[4px] relative shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border-[#5a8cff] border-b-3 border-solid inset-0 pointer-events-none" />
        <IconText3 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[4px] relative shrink-0" data-name="tab">
        <IconText4 />
      </div>
    </div>
  );
}

function SegmentButton() {
  return (
    <div className="bg-[#191f2d] content-stretch flex h-[32px] items-center px-px relative rounded-[8px] shrink-0" data-name="segment_button">
      <div className="content-stretch flex h-[32px] items-start opacity-0 relative shrink-0" data-name="divider_vertical">
        <div className="h-full relative shrink-0 w-0" data-name="divider">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00001 32">
              <path d="M0.500007 1.14742e-07L0.5 32" id="divider" stroke="var(--stroke-0, #2A2E39)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#5a8cff] content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[16px] relative rounded-[6px] shrink-0 w-[32px]" data-name="2nd_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">1Д</p>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex gap-[8px] h-[24px] items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0 w-[33px]" data-name="1st_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] text-left whitespace-nowrap">
          <p className="leading-[16px]">1М</p>
        </div>
      </button>
      <div className="h-[24px] relative rounded-[4px] shrink-0 w-[30px]" data-name="1st_segment">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">1Г</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0 w-[37px]" data-name="1st_segment">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">YTD</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <SegmentButton />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236379">
          <path d="M77 10.5H151" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236393">
          <path d="M77 10.5H142" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236394">
          <path d="M77 10.5H131" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236395">
          <path d="M77 10.5H123" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236396">
          <path d="M77 10.5H117" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236397">
          <path d="M77 10.5H112" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236398">
          <path d="M77 10.5H108" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236399">
          <path d="M77 10.5H101" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236400">
          <path d="M77 10.5H97" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[21px] relative shrink-0 w-[170px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 21">
        <g id="Frame 881236401">
          <path d="M77 10.5H89" id="Vector 200" stroke="var(--stroke-0, #089981)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236386">
          <path d="M64 10L75 10" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236403">
          <path d="M59 10L75 10" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236404">
          <path d="M56 10L75 10" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236405">
          <path d="M51 10L75 10" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 21">
        <g id="Frame 881236387">
          <path d="M45 10.5L75 10.5" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 21">
        <g id="Frame 881236388">
          <path d="M40.5554 10.5L75 10.5" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236389">
          <path d="M27.2759 10L75 10" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 21">
        <g id="Frame 881236390">
          <path d="M18.5933 10.5L75 10.5" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 20">
        <g id="Frame 881236391">
          <path d="M9 10L75 9.99999" id="Vector 200" stroke="var(--stroke-0, #EA3943)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[75px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 21">
        <g id="Frame 881236392">
          <path d="M3.49691e-07 10.5L75 10.5" id="Vector 200" stroke="var(--stroke-0, #F55E6A)" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[326px] items-start relative shrink-0 w-[158px]">
      <Frame2 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame4 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full items-start not-italic relative shrink-0 text-[10px] text-right w-[47px]">
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+75,60%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+35,66%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+21,22%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+12,42%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+10,21%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+9,21%</p>
      </div>
      <div className="flex flex-col h-[20.957px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+5,21%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+4,31%</p>
      </div>
      <div className="flex flex-col h-[20.957px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+2,31%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#1fc989] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">+1,35%</p>
      </div>
      <p className="h-[1.655px] leading-[16px] opacity-0 relative shrink-0 text-[#677c9c] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        0
      </p>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-5,35%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-10,32%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-15,32%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-22,13%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-24,12%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-35,12%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-55,12%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-65,11%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-66,12%</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#f23645] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">-75,12%</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full items-start not-italic pl-[4px] pr-[8px] relative shrink-0 text-[10px] w-[78px]">
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#5a8cff] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Полюс, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Т-Технологии, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#5a8cff] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">НОВАТЭК ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">ДВ морское пароходство ПАО, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Озон Холдингс ПиЭлСи, адр</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">RenIns Group, ао</p>
      </div>
      <div className="flex flex-col h-[20.957px] justify-center leading-[0] relative shrink-0 text-[#5a8cff] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">НМТП, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] relative shrink-0 text-[#5a8cff] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">МТС, ао</p>
      </div>
      <div className="flex flex-col h-[20.957px] justify-center leading-[0] relative shrink-0 text-[#5a8cff] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">ТМК, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Русагро, гдр</p>
      </div>
      <p className="h-[1.655px] leading-[16px] opacity-0 relative shrink-0 text-[#677c9c] w-full whitespace-pre-wrap">0</p>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">ТМК, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">RenIns Group, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">ДВ морское пароходство ПАО, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">НОВАТЭК ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Полюс, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">НМТП, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">ТМК, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">RenIns Group, ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">НОВАТЭК ао</p>
      </div>
      <div className="flex flex-col h-[20.406px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5a8cff] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Т-Технологии, ао</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-[416px] items-start justify-between relative w-[141px]">
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-full">
          <div className="h-[141px] relative w-full">
            <div aria-hidden="true" className="absolute border-[#2a2e39] border-dashed border-r inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[416px] items-start relative shrink-0 w-[287px]">
      <Frame1 />
      <Frame24 />
      <Frame />
      <div className="absolute flex h-[416px] items-center justify-center left-0 top-0 w-[141px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#191f2d] h-[448px] relative rounded-[8px] shrink-0 w-full" data-name="оси_шаблон">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute right-[13px] size-[24px] top-[68px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 881237187">
          <rect fill="var(--fill-0, #131722)" height="24" rx="12" width="24" />
          <path d="M9.99999 8L14 12L9.99999 16" id="Vector 298" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 881237189">
          <rect fill="var(--fill-0, #131722)" height="24" rx="12" width="24" />
          <path d="M9.99999 8L14 12L9.99999 16" id="Vector 298" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Up() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Паевые инвестиционные фонды</p>
        </div>
      </div>
    </div>
  );
}

function DataBage() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">25 октября</p>
      </div>
      <Tags />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[16px] text-ellipsis w-full whitespace-pre-wrap">Акции: вложения фондов; ноябрь 2025 г. - Продавали Фосагро, Сургутнефтегаз</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Елена Бакланова</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Эйлер</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.81%_18.67%_12.81%_18.68%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0373 17.8495">
        <g id="Group">
          <path d={svgPaths.p27943900} fill="var(--fill-0, #677C9C)" id="Vector" />
          <path d={svgPaths.p17cf3e00} fill="var(--fill-0, #677C9C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mask group">
      <div className="absolute left-0 size-[24px] top-0" data-name="NF group" />
      <Group1 />
    </div>
  );
}

function Analyst() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <div className="bg-[#5a8cff] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
        <div className="absolute h-[57.333px] left-[-28.73px] top-[1.73px] w-[86.034px]" data-name="photo_2025-05-19_16-05-40 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto202505191605401} />
        </div>
      </div>
      <Frame93 />
      <MaskGroup />
    </div>
  );
}

function AnalystLogo() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame96 />
      <Text />
    </div>
  );
}

function CardMaster() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(-10.8705deg, rgb(19, 23, 34) 41.671%, rgb(37, 44, 60) 98.36%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up />
        <Title />
      </div>
      <div aria-hidden="true" className="absolute border border-[#30394d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Up1() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Нефть и газ</p>
        </div>
      </div>
    </div>
  );
}

function DataBage1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">25 октября</p>
      </div>
      <Tags1 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#5a8cff] text-[16px] text-ellipsis w-full whitespace-pre-wrap">Россия - Европейский медицинский центр (GEMC) - начало покрытия</p>
    </div>
  );
}

function AnalystsAvatars() {
  return (
    <div className="bg-[#ff4b5f] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
      <div className="absolute h-[61.963px] left-[-6.59px] top-[-2.12px] w-[41.39px]" data-name="Маргарита Яковлева 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[51.79%] left-[20.97%] max-w-none top-[3.04%] w-[71.08%]" src={img3} />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Виктор Смирновский</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Совкомбанк</p>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[1.48px] top-[0.43px]" data-name="Mask group">
      <div className="absolute bg-[#677c9c] h-[55.656px] left-[-1.93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.404px_12.778px] mask-size-[148.354px_23.134px] top-[-12.35px] w-[203.958px]" style={{ maskImage: `url('${imgRectangle2857}')` }} />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mask group">
      <MaskGroup2 />
    </div>
  );
}

function Analyst1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <AnalystsAvatars />
      <Frame94 />
      <MaskGroup1 />
    </div>
  );
}

function AnalystLogo1() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame97 />
      <Text1 />
    </div>
  );
}

function CardMaster1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(115.535deg, rgb(32, 42, 66) 0.43774%, rgb(19, 23, 34) 100%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up1 />
        <Title1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a8cff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Up2() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Нефть и газ</p>
        </div>
      </div>
    </div>
  );
}

function DataBage2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">25 октября</p>
      </div>
      <Tags2 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[16px] text-ellipsis w-full whitespace-pre-wrap">Россия - Европейский медицинский центр (GEMC) - начало покрытия</p>
    </div>
  );
}

function AnalystsAvatars1() {
  return (
    <div className="bg-[#ff4b5f] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
      <div className="absolute h-[61.963px] left-[-6.59px] top-[-2.12px] w-[41.39px]" data-name="Маргарита Яковлева 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[51.79%] left-[20.97%] max-w-none top-[3.04%] w-[71.08%]" src={img3} />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Виктор Смирновский</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Совкомбанк</p>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[1.48px] top-[0.43px]" data-name="Mask group">
      <div className="absolute bg-[#677c9c] h-[55.656px] left-[-1.93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.404px_12.778px] mask-size-[148.354px_23.134px] top-[-12.35px] w-[203.958px]" style={{ maskImage: `url('${imgRectangle2857}')` }} />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mask group">
      <MaskGroup4 />
    </div>
  );
}

function Analyst2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <AnalystsAvatars1 />
      <Frame95 />
      <MaskGroup3 />
    </div>
  );
}

function AnalystLogo2() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame98 />
      <Text2 />
    </div>
  );
}

function CardMaster2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(-10.8705deg, rgb(19, 23, 34) 41.671%, rgb(37, 44, 60) 98.36%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up2 />
        <Title2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#30394d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Up3() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Нефть и газ</p>
        </div>
      </div>
    </div>
  );
}

function DataBage3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">25 октября</p>
      </div>
      <Tags3 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[16px] w-full whitespace-pre-wrap">2% SAAR = 100 bp lower</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Елена Ахмедова</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">Эйлер</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.81%_18.67%_12.81%_18.68%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0498 23.7993">
        <g id="Group">
          <path d={svgPaths.p80ecd80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3e228500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Mask group">
      <div className="absolute left-0 size-[32px] top-0" data-name="NF group" />
      <Group2 />
    </div>
  );
}

function Analyst3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <div className="bg-[#5a8cff] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
        <div className="absolute h-[74.667px] left-[-6.2px] top-[-5.4px] w-[49.733px]" data-name="Елена Ахмедова">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      <Frame100 />
      <MaskGroup5 />
    </div>
  );
}

function AnalystLogo3() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame99 />
      <Text3 />
    </div>
  );
}

function CardMaster3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(-10.8705deg, rgb(19, 23, 34) 41.671%, rgb(37, 44, 60) 98.36%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up3 />
        <Title3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#30394d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 881237189">
          <rect fill="var(--fill-0, #131722)" height="24" rx="12" width="24" />
          <path d="M9.99999 8L14 12L9.99999 16" id="Vector 298" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute right-[13px] size-[24px] top-[78px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 881237187">
          <rect fill="var(--fill-0, #131722)" height="24" rx="12" width="24" />
          <path d="M9.99999 8L14 12L9.99999 16" id="Vector 298" stroke="var(--stroke-0, #5A8CFF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pt-[12px] px-[12px] relative w-full">
          <Frame62 />
          <div className="absolute flex items-center justify-center right-[683px] size-[24px] top-[68px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Frame63 />
            </div>
          </div>
          <CardMaster />
          <CardMaster1 />
          <CardMaster2 />
          <CardMaster3 />
          <div className="absolute bg-gradient-to-l from-[rgba(19,23,34,0)] h-[158.397px] left-0 to-[#131722] top-[9.6px] w-[51.855px]" />
          <div className="absolute flex h-[158.397px] items-center justify-center right-0 top-[9.6px] w-[51.855px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-gradient-to-l from-[rgba(19,23,34,0)] h-[158.397px] to-[#131722] w-[51.855px]" />
            </div>
          </div>
          <div className="absolute flex items-center justify-center right-[683px] size-[24px] top-[78px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Frame64 />
            </div>
          </div>
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#131722] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[24px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="settings_2">
        <div className="absolute inset-[13.54%_18.75%_14.58%_18.75%]" data-name="Vector">
          <div className="absolute inset-[-7.83%_-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8 13.3">
              <path d={svgPaths.p22147f00} id="Vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="checkbox">
      <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Checkbox">
        <div className="absolute border-[#677c9c] border-[0.75px] border-solid inset-0 rounded-[4px]" />
      </button>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e1e2] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">Сгруппировать по темам</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Checkbox />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0">
      <Frame102 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#677c9c] text-[12px] uppercase">Важное</p>
      <Frame112 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#5a8cff] text-[12px]">Все новости (NEWS)</p>
    </div>
  );
}

function Head() {
  return (
    <div className="bg-[#191f2d] h-[40px] relative shrink-0 w-full z-[16]" data-name="head">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <Frame101 />
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function When() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">15:32</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[11.11%_16.69%_11.11%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.995 14">
        <g id="Group">
          <path d={svgPaths.p21082e00} fill="var(--fill-0, #677C9C)" id="Vector" />
          <path d={svgPaths.p110eb200} fill="var(--fill-0, #677C9C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group3 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Эйлер: Россия - Первичный рынок облигаций - Самолет: новые летные испытания</p>
      <Frame37 />
    </div>
  );
}

function News() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[15]" data-name="body">
      <News />
    </div>
  );
}

function When1() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">15:32</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[11.09%_15.42%_11.12%_13.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7306 14.0017">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a3f5ef0} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Oval 12" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group4 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When1 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">РЖД установили ориентир ставки купона облигаций объемом от 20 млрд руб. на уровне не выше 15,35%</p>
      <Frame38 />
    </div>
  );
}

function News1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[14]" data-name="body">
      <News1 />
    </div>
  );
}

function When2() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">15:32</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[11.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group">
          <path clipRule="evenodd" d="M0 0V13.06L13.06 0H0Z" fill="var(--fill-0, #A2AFC2)" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d="M0.93 14H14V0.93L0.93 14Z" fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Fill-2" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group5 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When2 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">ЦБ РФ 23 декабря проведет 6-дневный аукцион репо с лимитом 3,63 трлн рублей</p>
      <Frame39 />
    </div>
  );
}

function News2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[13]" data-name="body">
      <News2 />
    </div>
  );
}

function When3() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex items-center justify-center relative size-[20px]" data-name="Arrow">
            <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="-scale-y-100 flex-none rotate-90">
                <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
                  <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                    <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                      <div className="relative size-full" data-name="path">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                          <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When3 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Спасатели продолжают тушить возгорание на одном из терминалов в Тамани после атаки БПЛА - оперштаб Кубани</p>
      <Frame105 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic pl-[93px] relative w-full">
        <div className="flex flex-col justify-center relative shrink-0 text-[#e0e1e2] text-[14px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[20px] whitespace-pre-wrap">{`Глобальные рынки вчера закрылись в плюсе. Американский рынок (S&P 500 +0,9%) вырос. Акции техсектора (NASDAQ 100 +1,3%) Были среди лидеров. Европейские рынки завершили день в положительной зоне`}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#c4c7c9] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <ul>
            <li className="list-disc ms-[18px] whitespace-pre-wrap">
              <span className="leading-[16px]">{`Глобальные рынки вчера закрылись в плюсе. Американский рынок (S&P 500 +0,9%) вырос. Акции техсектора (NASDAQ 100 +1,3%) Были среди лидеров. Европейские рынки завершили день в положительной зоне`}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#c4c7c9] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <ul>
            <li className="list-disc ms-[18px] whitespace-pre-wrap">
              <span className="leading-[16px]">{`Глобальные рынки вчера закрылись в плюсе. Американский рынок (S&P 500 +0,9%) вырос. Акции техсектора (NASDAQ 100 +1,3%) Были среди лидеров. Европейские рынки завершили день в положительной зоне`}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame43 />
      <Frame120 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow down fill">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
          <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
            <div className="relative size-full" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function When4() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[40px] overflow-clip relative shrink-0 w-[55px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[52px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">10:30</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[11.7%_12.3%_11.7%_12.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 12.2553">
        <g id="Group">
          <path d={svgPaths.pd926900} fill="var(--fill-0, #9A8CFF)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p4be9f00} fill="var(--fill-0, #F87D37)" />
            <path d={svgPaths.p3c5bb200} fill="var(--fill-0, #F87D37)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="tags">
      <div className="bg-[rgba(154,140,255,0.3)] relative rounded-[20px] shrink-0 size-[20px]" data-name="type">
        <div className="absolute left-[3px] overflow-clip size-[16px] top-[2px]" data-name="fi_4058839">
          <Group6 />
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[51px]" data-name="stat">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="views.16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.33px] left-1/2 top-1/2 w-[13.33px]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
              <path clipRule="evenodd" d={svgPaths.p3ac2e380} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px]">198</p>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[11.11%_16.69%_11.11%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.995 14">
        <g id="Group">
          <path d={svgPaths.p21082e00} fill="var(--fill-0, #677C9C)" id="Vector" />
          <path d={svgPaths.p110eb200} fill="var(--fill-0, #677C9C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group7 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Tags4 />
      <Icons3 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[63px] relative w-full">
          <Arrow />
          <When4 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] overflow-hidden">Рынок акций РФ попытается подрости в понедельник</p>
          </div>
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow down fill">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
          <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
            <div className="relative size-full" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function When5() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[40px] overflow-clip relative shrink-0 w-[55px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[59px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">12.06.25</p>
      </div>
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="tags">
      <div className="bg-[rgba(69,211,206,0.3)] relative rounded-[20px] shrink-0 size-[20px]" data-name="type">
        <div className="absolute left-[2px] overflow-clip size-[16px] top-[2px]" data-name="podcast.16">
          <div className="absolute inset-[12.5%_23.19%_12.5%_21.88%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79 12">
              <g id="Vector">
                <path d={svgPaths.p6a54180} fill="var(--fill-0, #8FE5E2)" />
                <path d={svgPaths.p17e39800} fill="var(--fill-0, #8FE5E2)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[51px]" data-name="stat">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="views.16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.33px] left-1/2 top-1/2 w-[13.33px]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
              <path clipRule="evenodd" d={svgPaths.p3ac2e380} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px]">10</p>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[11.09%_15.42%_11.12%_13.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7306 14.0017">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a3f5ef0} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Oval 12" />
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group8 />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Tags5 />
      <Icons4 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[63px] relative w-full">
          <Arrow1 />
          <When5 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#92a1b8] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] overflow-hidden">Рубль утром почти не меняется в паре с юанем</p>
          </div>
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow down fill">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
          <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
            <div className="relative size-full" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function When6() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[40px] overflow-clip relative shrink-0 w-[55px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[63px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">12.06.25</p>
      </div>
    </div>
  );
}

function Tags6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="tags">
      <div className="bg-[rgba(248,125,55,0.3)] relative rounded-[20px] shrink-0 size-[20px]" data-name="type">
        <div className="absolute left-[2px] overflow-clip size-[16px] top-[2px]" data-name="important.16">
          <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
              <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #FBB187)" id="path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[51px]" data-name="stat">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="views.16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.33px] left-1/2 top-1/2 w-[13.33px]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
              <path clipRule="evenodd" d={svgPaths.p3ac2e380} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px]">11</p>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[16.67%_11.1%_11.14%_11.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 12.9954">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1ce4a980} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group9 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Tags6 />
      <Icons5 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[63px] relative w-full">
          <Arrow2 />
          <When6 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] overflow-hidden">Страны ШОС решили создать Банк развития</p>
          </div>
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow down fill">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
          <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
            <div className="relative size-full" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function When7() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[40px] overflow-clip relative shrink-0 w-[55px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[63px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">12.06.25</p>
      </div>
    </div>
  );
}

function Tags7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="tags">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[51px]" data-name="stat">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="views.16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.33px] left-1/2 top-1/2 w-[13.33px]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
              <path clipRule="evenodd" d={svgPaths.p3ac2e380} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[16.67%_11.1%_11.14%_11.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 12.9954">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1ce4a980} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group10 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Tags7 />
      <Icons6 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[63px] relative w-full">
          <Arrow3 />
          <When7 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#92a1b8] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] overflow-hidden">{`Инвесткомпания CapVest близка к покупке  германской компании за 10 млрд. евро - СМИ`}</p>
          </div>
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow down fill">
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
          <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
            <div className="relative size-full" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function When8() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[40px] overflow-clip relative shrink-0 w-[55px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right w-[63px]" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">12.06.25</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[11.7%_12.3%_11.7%_12.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 12.2553">
        <g id="Group">
          <path d={svgPaths.pd926900} fill="var(--fill-0, #9A8CFF)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p4be9f00} fill="var(--fill-0, #F87D37)" />
            <path d={svgPaths.p3c5bb200} fill="var(--fill-0, #F87D37)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tags8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="tags">
      <div className="bg-[rgba(154,140,255,0.3)] relative rounded-[20px] shrink-0 size-[20px]" data-name="type">
        <div className="absolute left-[3px] overflow-clip size-[16px] top-[2px]" data-name="fi_4058839">
          <Group11 />
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[51px]" data-name="stat">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="views.16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.33px] left-1/2 top-1/2 w-[13.33px]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 9.33">
              <path clipRule="evenodd" d={svgPaths.p3ac2e380} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          <p className="leading-[16px]">198</p>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[11.11%_16.69%_11.11%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.995 14">
        <g id="Group">
          <path d={svgPaths.p21082e00} fill="var(--fill-0, #677C9C)" id="Vector" />
          <path d={svgPaths.p110eb200} fill="var(--fill-0, #677C9C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group12 />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Tags8 />
      <Icons7 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[63px] relative w-full">
          <Arrow4 />
          <When8 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#677c9c] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px] overflow-hidden">Рынок акций РФ попытается подрости в понедельник</p>
          </div>
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[154px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5a8cff] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <p className="leading-[16px]">Смотреть все связанные новости (12)..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame103 />
      <Frame121 />
    </div>
  );
}

function News3() {
  return (
    <div className="relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[12px] pt-[8px] px-[12px] relative w-full">
          <Frame124 />
          <Frame106 />
        </div>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[12]" data-name="body">
      <News3 />
    </div>
  );
}

function When9() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When9 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Рынок акций РФ открылся в основную сессию незначительными изменениями индексов МосБиржи и РТС</p>
      <Frame107 />
    </div>
  );
}

function News4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[11]" data-name="body">
      <News4 />
    </div>
  );
}

function When10() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When10 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">ТЕХНОЛОГИЧЕСКИ НИЧТО НЕ УГРОЖАЕТ СТАБИЛЬНОСТИ ПОСТАВОК НЕФТИ И НЕФТЕПРОДУКТОВ ПО СИСТЕМЕ ТРАНСНЕФТИ - ТОКАРЕВ</p>
      <Frame108 />
    </div>
  );
}

function News5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[10]" data-name="body">
      <News5 />
    </div>
  );
}

function When11() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When11 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Совет директоров МТС утвердил программу биржевых облигаций на 350 млрд рублей</p>
      <Frame110 />
    </div>
  );
}

function News6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[9]" data-name="body">
      <News6 />
    </div>
  );
}

function When12() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When12 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">{`Мосбиржа зарегистрировала программу облигаций "Т Плюс" объемом 70 млрд руб. и выпуск в ее рамках`}</p>
      <Frame111 />
    </div>
  );
}

function News7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[8]" data-name="body">
      <News7 />
    </div>
  );
}

function When13() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[16.67%_11.1%_11.14%_11.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0019 12.9954">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1ce4a980} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group13 />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons8 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When13 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Спасатели продолжают тушить возгорание на одном из терминалов в Тамани после атаки БПЛА - оперштаб Кубани</p>
      <Frame76 />
    </div>
  );
}

function News8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Body9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[7]" data-name="body">
      <News8 />
    </div>
  );
}

function When14() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When14 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Рынок акций РФ открылся в основную сессию незначительными изменениями индексов МосБиржи и РТС</p>
      <Frame113 />
    </div>
  );
}

function News9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Body10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[6]" data-name="body">
      <News9 />
    </div>
  );
}

function When15() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When15 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">ТЕХНОЛОГИЧЕСКИ НИЧТО НЕ УГРОЖАЕТ СТАБИЛЬНОСТИ ПОСТАВОК НЕФТИ И НЕФТЕПРОДУКТОВ ПО СИСТЕМЕ ТРАНСНЕФТИ - ТОКАРЕВ</p>
      <Frame114 />
    </div>
  );
}

function News10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Body11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[5]" data-name="body">
      <News10 />
    </div>
  );
}

function When16() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[11.09%_15.42%_11.12%_13.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7306 14.0017">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a3f5ef0} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Oval 12" />
        </g>
      </svg>
    </div>
  );
}

function Icons9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group14 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons9 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When16 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Совет директоров МТС утвердил программу биржевых облигаций на 350 млрд рублей</p>
      <Frame80 />
    </div>
  );
}

function News11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Body12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[4]" data-name="body">
      <News11 />
    </div>
  );
}

function When17() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When17 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Рынок акций РФ открылся в основную сессию незначительными изменениями индексов МосБиржи и РТС</p>
      <Frame115 />
    </div>
  );
}

function News12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Body13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="body">
      <News12 />
    </div>
  );
}

function When18() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Atribute">
        <div className="bg-[rgba(248,125,55,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="important">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="important">
            <div className="absolute bottom-[12.5%] left-1/4 right-[24.79%] top-[12.5%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.0344 12.0007">
                <path d={svgPaths.p3f0dda80} fill="var(--fill-0, #F87D37)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">5</p>
        </div>
        <div className="bg-[rgba(90,140,255,0.1)] content-stretch flex h-[24px] items-center pl-[6px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[44px]" data-name="doc">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="article">
            <div className="absolute inset-[12.5%_18.75%]" data-name="path">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                <path d={svgPaths.pbdc4b00} fill="var(--fill-0, #5A8CFF)" id="path" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e0e1e2] text-[10px] text-center w-[14px] whitespace-pre-wrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Arrow">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="overflow-clip relative size-[12px]" data-name="arrow down fill">
              <div className="absolute bottom-1/4 flex items-center justify-center left-[12.96%] right-[12.96%] top-[33.33%]">
                <div className="flex-none h-[5px] rotate-180 w-[8.889px]">
                  <div className="relative size-full" data-name="path">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88889 5">
                      <path d={svgPaths.p2d4d4380} fill="var(--fill-0, #5A8CFF)" id="path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <When18 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">ТЕХНОЛОГИЧЕСКИ НИЧТО НЕ УГРОЖАЕТ СТАБИЛЬНОСТИ ПОСТАВОК НЕФТИ И НЕФТЕПРОДУКТОВ ПО СИСТЕМЕ ТРАНСНЕФТИ - ТОКАРЕВ</p>
      <Frame116 />
    </div>
  );
}

function News13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame82 />
        </div>
      </div>
    </div>
  );
}

function Body14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="body">
      <News13 />
    </div>
  );
}

function When19() {
  return (
    <div className="content-stretch flex items-center justify-end min-w-[49px] overflow-clip relative shrink-0 w-[56px]" data-name="when">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#677c9c] text-[12px] text-right whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[16px]">22.12.25</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[11.09%_15.42%_11.12%_13.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7306 14.0017">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a3f5ef0} fill="var(--fill-0, #677C9C)" fillRule="evenodd" id="Oval 12" />
        </g>
      </svg>
    </div>
  );
}

function Icons10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icons">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="sources">
        <Group15 />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icons10 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <When19 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e0e1e2] text-[16px] text-ellipsis whitespace-nowrap">Совет директоров МТС утвердил программу биржевых облигаций на 350 млрд рублей</p>
      <Frame84 />
    </div>
  );
}

function News14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="News">
      <div aria-hidden="true" className="absolute border-[#131722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function Body15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="body">
      <News14 />
    </div>
  );
}

function NewsFeed() {
  return (
    <div className="bg-[#191f2d] content-stretch flex flex-col h-[920px] isolate items-center overflow-clip rounded-[8px] shrink-0 sticky top-0 w-[722px]" data-name="news_feed">
      <Head />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
      <Body7 />
      <Body8 />
      <Body9 />
      <Body10 />
      <Body11 />
      <Body12 />
      <Body13 />
      <Body14 />
      <Body15 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px relative">
      <Frame61 />
      <NewsFeed />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between leading-[16px] not-italic relative shrink-0 text-[12px] w-full">
      <p className="relative shrink-0 text-[#677c9c] uppercase">Видеоматериалы</p>
      <p className="relative shrink-0 text-[#5a8cff]">Смотреть все</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[16px] items-start leading-[16px] relative shrink-0 text-[10px]">
      <p className="opacity-50 relative shrink-0">Андрей Полищук</p>
      <p className="opacity-50 relative shrink-0">14.04.2024</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic opacity-0 relative shrink-0 text-white">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px]">Альманах</p>
      <Frame26 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-[179px] items-start justify-between overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[319px]" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage} />
        <div className="absolute inset-0 object-cover rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Frame27 />
      <div className="absolute bg-[rgba(90,140,255,0.1)] content-stretch flex items-center left-[130.5px] p-[8px] rounded-[350px] top-[64.5px]" data-name="Component 15">
        <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="relative size-[24px]">
              <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8624 16">
                  <path d={svgPaths.p25f6bb00} fill="var(--fill-0, white)" id="Polygon 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[180.393px] left-0 top-[-1.11px] w-[319px]" data-name="image 242">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage242} />
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e0e1e2] text-[14px] w-full">
        <p className="mb-0">{`Экономика нефти и нефтепродуктов. `}</p>
        <p>Ноябрь 2025</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a2afc2] text-[12px] w-full" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        Видеоинтервью
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[8px] relative shrink-0 w-[47px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 8">
        <g id="Frame 881237166">
          <circle cx="4" cy="4" fill="var(--fill-0, #2A2E39)" id="Ellipse 395" r="4" />
          <circle cx="23.5" cy="4" fill="var(--fill-0, #5A8CFF)" id="Ellipse 394" r="4" />
          <circle cx="43" cy="4" fill="var(--fill-0, #2A2E39)" id="Ellipse 396" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[16px]" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="icon">
          <div className="absolute bottom-1/4 left-[33.33%] right-[41.67%] top-1/4" data-name="vector">
            <div className="absolute inset-[-14.17%_-28.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 7.7">
                <path d={svgPaths.p1ebbec40} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[16px]" data-name="button_dark">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="icon">
          <div className="absolute bottom-1/4 left-[41.67%] right-[33.33%] top-1/4" data-name="vector">
            <div className="absolute inset-[-14.17%_-28.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 7.7">
                <path d={svgPaths.p3cef0400} id="vector" stroke="var(--stroke-0, #5A8CFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame32 />
      <Frame86 />
    </div>
  );
}

function TitleSubtitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="title+subtitle">
      <Frame122 />
      <Frame34 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Image />
      <TitleSubtitle />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Video() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="video">
      <Frame85 />
      <Frame31 />
    </div>
  );
}

function Up4() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Стратегия: Акции</p>
        </div>
      </div>
    </div>
  );
}

function DataBage4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">09:49</p>
      </div>
      <Tags9 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage4 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[16px] text-ellipsis w-full whitespace-nowrap">Обзор рынков акций</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        Эйлер: Глобальный рынок - Обзор рынков акций - Ралли откладывается?
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Лидия Михайлова</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">ЭЙлер</p>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[12.81%_18.67%_12.81%_18.68%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0373 17.8495">
        <g id="Group">
          <path d={svgPaths.p27943900} fill="var(--fill-0, #677C9C)" id="Vector" />
          <path d={svgPaths.p17cf3e00} fill="var(--fill-0, #677C9C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mask group">
      <div className="absolute left-0 size-[24px] top-0" data-name="NF group" />
      <Group16 />
    </div>
  );
}

function Analyst4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <div className="bg-[#5a8cff] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
        <div className="absolute flex h-[65.487px] items-center justify-center left-[-6.6px] top-[-2.47px] w-[47.774px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-5.1deg]">
            <div className="h-[61.96px] relative w-[42.434px]" data-name="Виталий Наумов 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
            </div>
          </div>
        </div>
      </div>
      <Frame117 />
      <MaskGroup6 />
    </div>
  );
}

function AnalystLogo4() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame104 />
      <Text4 />
    </div>
  );
}

function CardMaster4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(-12.7624deg, rgb(19, 23, 34) 41.671%, rgb(37, 44, 60) 98.36%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up4 />
        <Title4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#30394d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Up5() {
  return <div className="-translate-x-1/2 absolute bottom-0 h-[232px] left-1/2 max-h-[319px] min-h-[232px] w-[319px]" data-name="up" />;
}

function Tags10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="tags">
      <div className="bg-[#202a42] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[32px] shrink-0" data-name="badges_dark">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Стратегия: Акции</p>
        </div>
      </div>
    </div>
  );
}

function DataBage5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="data+bage">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a2afc2] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="leading-[20px]">09:31</p>
      </div>
      <Tags10 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <DataBage5 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#e0e1e2] text-[16px] text-ellipsis w-full whitespace-nowrap">Валюта и ставки</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e0e1e2] text-[14px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
        <p className="mb-0">{`Эйлер: Россия - Валюта и ставки - `}</p>
        <p>23 декабря 2025</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-center min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#e0e1e2] text-[14px] text-ellipsis w-[min-content]">Максим Коровин</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a2afc2] text-[0px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px]">ЭЙлер</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[12.81%_18.67%_12.81%_18.68%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0498 23.7993">
        <g id="Group">
          <path d={svgPaths.p80ecd80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3e228500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Mask group">
      <div className="absolute left-0 size-[32px] top-0" data-name="NF group" />
      <Group17 />
    </div>
  );
}

function Analyst5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="analyst">
      <div className="bg-[#5a8cff] overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-name="Analysts avatars">
        <div className="absolute h-[100.267px] left-[-24.33px] top-[-2.87px] w-[66.933px]" data-name="DSC_0123_01-1 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc01230111} />
        </div>
      </div>
      <Frame119 />
      <MaskGroup7 />
    </div>
  );
}

function AnalystLogo5() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="analyst+logo">
      <Analyst5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <AnalystLogo5 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title+">
      <Frame118 />
      <Text5 />
    </div>
  );
}

function CardMaster5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[319px]" data-name="card.master" style={{ backgroundImage: "linear-gradient(-12.7624deg, rgb(19, 23, 34) 41.671%, rgb(37, 44, 60) 98.36%), linear-gradient(90deg, rgb(25, 31, 45) 0%, rgb(25, 31, 45) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Up5 />
        <Title5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#30394d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <CardMaster4 />
      <CardMaster5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Обзоры">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] uppercase w-[min-content] whitespace-pre-wrap">Обзоры рынков</p>
      <Frame123 />
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px overflow-clip pl-[16px] pr-[24px] pt-[16px] relative w-[359px]" data-name="right_sidebar">
      <Video />
      <Component6 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col h-full items-start shrink-0 sticky top-0">
      <RightSidebar />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative w-full z-[2]" data-name="body">
      <div className="content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip pl-[24px] pr-[16px] pt-[16px] shrink-0 sticky top-0 w-[359px]" data-name="left_sidebar">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="calendar">
          <Frame36 />
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="calendar">
            <DayWeeks />
            <Frame35 />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="market trends">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#677c9c] text-[12px] uppercase">Тенденции рынка</p>
          <Tabs />
          <Quotes28 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[319px]" data-name="Bond Selection">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#677c9c] text-[12px] uppercase w-[min-content] whitespace-pre-wrap">Лидеры роста и падения</p>
          <Tabs1 />
          <Frame28 />
          <Component />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#5a8cff] text-[12px]">Скринер Акций (ES)</p>
        </div>
      </div>
      <Frame109 />
      <Frame87 />
    </div>
  );
}

export default function Main() {
  return (
    <div className="bg-[#131722] content-stretch flex flex-col isolate items-start relative size-full" data-name="main_1440">
      <div className="bg-[#131722] shrink-0 sticky top-0 w-full z-[4]" data-name="Andromeda_header_v2">
        <div aria-hidden="true" className="absolute border-[#2a2e39] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative w-full">
            <LogoFrame />
            <Menu />
            <SettingsBar />
          </div>
        </div>
      </div>
      <StockQuotes />
      <Body />
    </div>
  );
}