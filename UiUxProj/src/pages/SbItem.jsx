export default function SbItem() {
  return (
    <div className="flex flex-row justify-between box-sizing-border">
      <div className="m-[15px_8.2px_16px_0] flex flex-row h-[fit-content] grow basis-[12.9px] box-sizing-border">
        <img className="m-[0_2.2px_0_0] w-[5.4px] h-[10px]" />
        <img className="w-[5.4px] h-[10px]" />
      </div>
      <div className="rounded-[2px] flex flex-row justify-between grow basis-[151.4px] box-sizing-border">
        <div className="m-[10px_10.5px_10px_0] inline-block w-[138.4px] break-words font-['Roboto'] font-normal text-[18px] text-[var(--nd-text-color,#B6B6B6)]">
        Calendar
        </div>
        <div className="rounded-[2px] bg-[#FFFFFF] w-[2.5px] h-[41px]">
        </div>
      </div>
    </div>
  )
}