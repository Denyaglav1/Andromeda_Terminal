export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] size-full" data-name="Удаление виджета">
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