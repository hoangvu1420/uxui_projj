export default function DateDesign() {
  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[8px] bg-[#FFFFFF] flex flex-row justify-between p-[14px_15.6px_16.8px_14.9px] box-sizing-border">
      <div className="m-[37.5px_11.5px_84.1px_0] flex flex-col items-end grow basis-[75.5px] box-sizing-border">
        <div className="m-[0_0_33.2px_9.6px] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.333] text-[#000000]">
        Normal Day
        </div>
        <div className="m-[0_0.1px_33.2px_0.1px] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.333] text-[#000000]">
        Today
        </div>
        <div className="m-[0_0.4px_35.2px_0] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.333] text-[#000000]">
        Selected Day
        </div>
        <span className="m-[0_0.4px_0_14px] break-words font-['Inter'] font-normal text-[12px] leading-[1.333] text-[#000000]">
        Empty Day
        </span>
      </div>
      <div className="rounded-[5px] border-[1px_dashed_#9747FF] flex flex-col items-center p-[31px_0_127.2px_0] h-[fit-content] grow basis-[104.4px] box-sizing-border">
        <div className="relative m-[0_0_29px_5.3px] flex p-[4px_5.3px_0_0] box-sizing-border">
          <span className="break-words font-['Roboto'] font-normal text-[12px] leading-[1.333] text-[var(--gray,#858585)]">
          03
          </span>
          <div className="rounded-[2px] bg-[var(--green-1,#62D0A2)] absolute top-[0px] right-[0px] w-[4px] h-[4px]">
          </div>
        </div>
        <div className="rounded-[1000px] relative m-[0_0_26px_4.1px] flex p-[4px_4.1px_0_0] box-sizing-border">
          <span className="break-words font-['Inter'] font-semibold text-[12px] leading-[1.333] text-[var(--primary-blue,#5865F2)]">
          03
          </span>
          <div className="rounded-[2px] bg-[var(--green-1,#62D0A2)] absolute top-[0px] right-[0px] w-[4px] h-[4px]">
          </div>
        </div>
        <div className="rounded-[8px] bg-[#6C5DD3] flex p-[8px_8.4px_8px_8.4px] box-sizing-border">
          <span className="break-words font-['Inter'] font-normal text-[12px] leading-[1.333] text-[var(--white-2,#FFFFFF)]">
          03
          </span>
        </div>
      </div>
    </div>
  )
}