export default function StateState4() {
  return (
    <div className="rounded-[8px] flex flex-col box-sizing-border">
      <div className="rounded-[8px] border-[1px_solid_var(--stroke,rgba(0,0,0,0.1))] bg-[var(--hover,#F5F4FB)] m-[0_0_4px_0] flex flex-row justify-between p-[7px_15px_7px_15px] w-[100%] box-sizing-border">
        <span className="m-[0_10px_0_0] w-[103px] break-words font-['Fira_Sans'] font-medium text-[16px] leading-[1.25] text-[#6C5DD3]">
        Events
        </span>
        <div className="opacity-50 m-[1px_0_1px_0] flex p-[5.8px_3px_6.3px_3px] w-[18px] h-[18px] box-sizing-border">
          <img className="w-[12px] h-[6px]" />
        </div>
      </div>
      <div className="rounded-[8px] border-[1px_solid_var(--stroke,rgba(0,0,0,0.1))] bg-[var(--white-3,#FFFFFF)] flex flex-col p-[15px_0_15px_0] w-[100%] box-sizing-border">
        <div className="m-[0_15px_12px_15px] flex self-start box-sizing-border">
          <span className="break-words font-['Fira_Sans'] font-normal text-[16px] leading-[1.25] text-[var(--black-1,#000000)]">
          Select all
          </span>
        </div>
        <div className="border-l-[4px_solid_#6C5DD3] m-[0_0_12px_0] p-[8px_12px_8px_12px] w-[100%] box-sizing-border">
          <span className="break-words font-['Fira_Sans'] font-normal text-[16px] leading-[1.25] text-[var(--black-1,#000000)]">
          Events
          </span>
        </div>
        <div className="m-[0_15px_0_15px] flex self-start box-sizing-border">
          <span className="break-words font-['Fira_Sans'] font-normal text-[16px] leading-[1.25] text-[var(--black-1,#000000)]">
          Tasks
          </span>
        </div>
      </div>
    </div>
  )
}