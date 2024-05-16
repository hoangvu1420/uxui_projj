export default function Sidebar() {
  return (
    <div className="border-r-[1px_solid_#EADEFF] bg-[#FFFFFF] flex flex-col items-end p-[24px_0_581px_0] box-sizing-border">
      <div className="m-[0_0_15px_0] flex flex-row justify-between w-[215px] box-sizing-border">
        <div className="m-[10px_0_10px_0] flex flex-row box-sizing-border">
          <div className="m-[1px_13.2px_2px_0] flex flex-col items-center w-[17.8px] h-[fit-content] box-sizing-border">
            <div className="m-[0_0_2px_0] flex flex-row w-[17.8px] box-sizing-border">
              <div className="rounded-[3px] bg-[var(--nd-text-color,#B6B6B6)] m-[0_2px_0_0] w-[7.9px] h-[8px]">
              </div>
              <div className="rounded-[3px] bg-[var(--nd-text-color,#B6B6B6)] w-[7.9px] h-[8px]">
              </div>
            </div>
            <div className="flex flex-row w-[17.8px] box-sizing-border">
              <div className="rounded-[3px] bg-[var(--nd-text-color,#B6B6B6)] m-[0_2px_0_0] w-[7.9px] h-[8px]">
              </div>
              <div className="rounded-[3px] bg-[var(--nd-text-color,#B6B6B6)] w-[7.9px] h-[8px]">
              </div>
            </div>
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[18px] text-[var(--nd-text-color,#B6B6B6)]">
          Dashboard
          </span>
        </div>
        <div className="rounded-[2px] bg-[#FFFFFF] w-[3px] h-[41px]">
        </div>
      </div>
      <div className="m-[0_0_15px_0] flex flex-row justify-between w-[218px] box-sizing-border">
        <div className="m-[10px_0_10px_0] flex flex-row box-sizing-border">
          <div className="m-[1px_14.3px_2px_0] flex w-[19.7px] h-[18px] box-sizing-border">
            <img className="w-[19.7px] h-[18px]" />
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[18px] text-[var(--nd-text-color,#B6B6B6)]">
          Calendar
          </span>
        </div>
        <div className="rounded-[2px] bg-[#FFFFFF] w-[3px] h-[41px]">
        </div>
      </div>
      <div className="m-[0_0_81px_0] flex flex-row justify-between w-[218px] box-sizing-border">
        <div className="m-[8px_0_9px_0] flex flex-row box-sizing-border">
          <img className="m-[0_10.2px_0_0] w-[23.8px] h-[24px]" />
          <div className="m-[2px_0_1px_0] inline-block break-words font-['Roboto'] font-normal text-[18px] text-[var(--nd-text-color,#B6B6B6)]">
          KPI
          </div>
        </div>
        <div className="rounded-[2px] bg-[#FFFFFF] w-[3px] h-[41px]">
        </div>
      </div>
      <div className="rounded-[2px] bg-[#FFFFFF] w-[3px] h-[41px]">
      </div>
    </div>
  )
}