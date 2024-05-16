export default function Property1WorkflowOption1() {
  return (
    <div className="flex flex-col box-sizing-border">
      <div className="rounded-[8px] border-[2px_solid_#6C5DD3] bg-[var(--trng-1,#FFFFFF)] m-[0_0_4px_0] flex flex-row justify-between p-[13px_14.7px_12px_13px] w-[100%] box-sizing-border">
        <span className="m-[0_7.5px_0_0] w-[180.5px] break-words font-['Roboto'] font-normal text-[15px] tracking-[-0.4px] leading-[1] text-[var(--xm-11,#363636)]">
        Shared
        </span>
        <img className="m-[5px_0_6px_0] w-[8.3px] h-[4px]" />
      </div>
      <div className="rounded-[8px] border-[1px_solid_var(--tm-6,#DDCCFF)] bg-[#FFFFFF] flex flex-col w-[100%] box-sizing-border">
        <div className="bg-[var(--trng-21,#F5F5F5)] relative p-[15px_16px_14px_16px] w-[100%] box-sizing-border">
          <div className="bg-[#DDCCFF] absolute left-[0px] right-[0px] bottom-[-1px] h-[1px]">
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[15px] tracking-[-0.4px] leading-[1] text-[var(--xm-11,#363636)]">
          Shared
          </span>
        </div>
        <div className="bg-[var(--trng,#FFFFFF)] relative p-[15px_16px_14px_16px] w-[100%] box-sizing-border">
          <div className="bg-[#DDCCFF] absolute left-[0px] right-[0px] bottom-[-1px] h-[1px]">
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[15px] tracking-[-0.4px] leading-[1] text-[var(--xm-11,#363636)]">
          Private
          </span>
        </div>
        <div className="bg-[var(--trng,#FFFFFF)] relative p-[15px_16px_14px_16px] w-[100%] box-sizing-border">
          <div className="bg-[#D7D7D7] absolute left-[0px] right-[0px] bottom-[-1px] h-[1px]">
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[15px] tracking-[-0.4px] leading-[1] text-[var(--xm-11,#363636)]">
          Community
          </span>
        </div>
      </div>
    </div>
  )
}