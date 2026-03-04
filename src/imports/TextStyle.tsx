function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[32px]">
        <p className="leading-[40px]">Headline h1</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]">
        <p className="leading-[32px]">Headline h2</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px]">Headline h3</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">Headline h4</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="leading-[20px]">Headline h5</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Headline h6</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px]">
        <p className="leading-[28px]">Text big</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px]">Text medium</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">{`Text  small`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">Text extrasmall</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">Caption uppercase semibold</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">Caption uppercase medium</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Caption medium</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Caption small</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[10px]">
        <p className="leading-[16px]">Caption light</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px] uppercase">
        <p className="leading-[24px]">Button L</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">Button M</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Button S</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Button xs</p>
      </div>
    </div>
  );
}

function TextStyles() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start p-[64px] relative shrink-0 w-[313px]" data-name="text styles">
      <Frame />
      <Frame2 />
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[32px]">
        <p className="leading-[40px]">Inter_Medium_32/40</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]">
        <p className="leading-[32px]">Inter_SemiBolt_24/32</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px]">Inter_SemiBolt_18/24</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">Inter_SemiBolt_16/20</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="leading-[20px]">Inter_SemiBolt_14/20</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Inter_SemiBolt_12/16</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px]">
        <p className="leading-[28px]">Inter_Regular_18/28</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px]">Inter_Regular_16/24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">Inter_Regular_14/20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">Inter_Regular_12/16</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">Inter_semibold_12/16</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">Inter_medium_12/16</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Inter_medium_12/16</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px]">
        <p className="leading-[16px]">Inter_medium_10/16</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[10px]">
        <p className="leading-[16px]">Inter_light_10/16</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px] uppercase">
        <p className="leading-[24px]">Inter_SemiBolt_18/24 (uppercase)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">Inter_SemiBolt_16/20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Inter_SemiBolt_14/20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Inter_SemiBolt_12/16</p>
      </div>
    </div>
  );
}

function TextStyles1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start p-[64px] relative shrink-0" data-name="text styles">
      <Frame1 />
      <Frame3 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[32px]">
        <p className="leading-[40px]">500</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]">
        <p className="leading-[32px]">600</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px]">600</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">600</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="leading-[20px]">600</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">600</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px]">
        <p className="leading-[28px]">400</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px]">400</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[20px]">400</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]" style={{ fontFeatureSettings: "\'lnum\', \'tnum\'" }}>
        <p className="leading-[16px]">400</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">600</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] uppercase">
        <p className="leading-[16px]">500</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">500</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px]">
        <p className="leading-[16px]">500</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[10px]">
        <p className="leading-[16px]">300</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px] uppercase">
        <p className="leading-[24px]">600</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px]">600</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">600</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">600</p>
      </div>
    </div>
  );
}

function TextStyles2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start p-[64px] relative shrink-0" data-name="text styles">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function TextStyle1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-[49px]" data-name="text_style">
      <TextStyles />
      <TextStyles1 />
      <TextStyles2 />
    </div>
  );
}

export default function TextStyle() {
  return (
    <div className="leading-[0] not-italic relative size-full text-black whitespace-nowrap" data-name="text_style">
      <TextStyle1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[784px] text-[32px] top-[20px]">
        <p className="leading-[40px]">font-weight</p>
      </div>
    </div>
  );
}