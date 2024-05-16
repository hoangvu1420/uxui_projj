export default function ChooseProjectTableTitle1() {
  return (
    <div className="flex flex-row box-sizing-border">
      <span className="m-[0_0.5px_0_0] break-words font-['Roboto'] font-medium text-[16px] leading-[2.25] text-[#6C5DD3]">
      Header
      </span>
      <span className="m-[0_0.6px_0_0] break-words font-['Roboto'] font-normal text-[16px] leading-[2.25] text-[#FFFFFF]">
      Data
      </span>
      <span className="m-[0_6.1px_0_0] break-words font-['Roboto'] font-normal text-[16px] leading-[2.25] text-[#FFFFFF]">
      Detail
      </span>
      <div className="m-[15px_6px_15px_0] flex w-[12px] h-[6px] box-sizing-border">
        <img className="w-[12px] h-[6px]" />
      </div>
      <div className="rounded-[16px] m-[2px_0_2px_0] flex grow basis-[56px] box-sizing-border">
        <div className="rounded-[16px] bg-[#F14A5B] flex p-[7px_13px_7px_12px] h-[fit-content] box-sizing-border">
          <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
          High
          </span>
        </div>
      </div>
      <div className="rounded-[16px] bg-[#FF9F38] m-[2px_0_2px_0] flex p-[7px_12.4px_7px_12px] grow basis-[79px] box-sizing-border">
        <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
        Medium
        </span>
      </div>
      <div className="rounded-[16px] bg-[#5EAD56] m-[2px_0_2px_0] flex p-[7px_12.1px_7px_12px] grow basis-[52px] box-sizing-border">
        <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
        Low
        </span>
      </div>
    </div>
  )
}