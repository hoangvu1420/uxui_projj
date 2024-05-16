export default function CreateNewEvent() {
  return (
    <div className="rounded-[12px] bg-[#FFFFFF] flex flex-col box-sizing-border">
      <div className="rounded-t-[12px] bg-[#D9D9D9] relative m-[0_0_42px_0] flex flex-row justify-between p-[16px_22px_16px_24px] w-[100%] box-sizing-border">
        <span className="m-[0_14px_0_0] w-[189px] break-words font-['Roboto'] font-medium text-[24px] text-[#6C5DD3]">
        Add task
        </span>
        <div className="m-[6px_0_3px_0] flex flex-row justify-between w-[56px] h-[fit-content] box-sizing-border">
          <div className="m-[1px_0_0px_0] flex w-[14px] h-[18px] box-sizing-border">
            <img className="w-[14px] h-[18px]" />
          </div>
          <div className="flex w-[20px] h-[19px] box-sizing-border">
            <img className="w-[20px] h-[19px]" />
          </div>
        </div>
        <img className="m-[4px_0_0_0] w-[24px] h-[24px]" />
      </div>
      <div className="m-[0_57px_6px_57px] flex flex-row self-start w-[fit-content] box-sizing-border">
        <p className="m-[12px_37.5px_11px_0] break-words font-['Roboto'] font-normal text-[16px] leading-[1.25] text-[#000000]">
        <span className="name-sub-0"></span><span></span>
        </p>
        <div className="bg-[#FFFFFF] p-[13px_16px_12px_16px] w-[228px] box-sizing-border">
          <span className="break-words font-['Roboto'] font-normal text-[16px] text-[#858585]">
          Input name...
          </span>
        </div>
      </div>
      <div className="m-[0_57px_18px_57px] flex flex-row self-start w-[fit-content] box-sizing-border">
        <div className="m-[12px_28.1px_12px_0] inline-block break-words font-['Roboto'] font-normal text-[16px] leading-[1.25] text-[#000000]">
        KPI place
        </div>
        <div className="rounded-[5px] bg-[#FFFFFF] flex flex-row justify-between p-[14px_16.2px_14px_15.5px] w-[221px] box-sizing-border">
          <span className="m-[0_8px_0_0] w-[173.3px] break-words font-['Roboto'] font-normal text-[16px] tracking-[-0.4px] leading-[1] text-[#858585]">
          Add to KPI
          </span>
          <img className="m-[6px_0_6px_0] w-[8.1px] h-[4px]" />
        </div>
      </div>
      <div className="m-[0_57px_36px_57px] flex flex-row justify-between self-start w-[330px] box-sizing-border">
        <p className="m-[5px_10.5px_6px_0] w-[100.5px] break-words font-['Roboto'] font-normal text-[16px] tracking-[-0.4px] leading-[1.25] text-[#000000]">
        <span className="priority-sub-0"></span><span></span>
        </p>
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[16px] m-[0_16px_0_0] flex box-sizing-border">
            <div className="rounded-[16px] bg-[#B6B6B6] flex p-[7px_13px_7px_12px] box-sizing-border">
              <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
              High
              </span>
            </div>
          </div>
          <div className="rounded-[16px] m-[0_16px_0_0] flex box-sizing-border">
            <div className="rounded-[16px] bg-[#B6B6B6] flex p-[7px_12.4px_7px_12px] box-sizing-border">
              <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
              Medium
              </span>
            </div>
          </div>
          <div className="rounded-[16px] flex box-sizing-border">
            <div className="rounded-[16px] bg-[#B6B6B6] flex p-[7px_12.1px_7px_12px] box-sizing-border">
              <span className="break-words font-['Roboto'] font-normal text-[15px] text-[#000000]">
              Low
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[0_57px_63px_57px] flex flex-row justify-between self-start w-[316.3px] box-sizing-border">
        <div className="m-[12px_10px_12px_0] inline-block w-[85px] break-words font-['Roboto'] font-normal text-[16px] tracking-[-0.4px] leading-[1.25] text-[#000000]">
        Tag
        </div>
        <div className="rounded-[8px] bg-[#FFFFFF] flex flex-row justify-between p-[14px_16px_14px_16px] w-[221.3px] box-sizing-border">
          <span className="m-[0_8px_0_0] w-[173px] break-words font-['Roboto'] font-normal text-[16px] tracking-[-0.4px] leading-[1] text-[#858585]">
          Add to tag
          </span>
          <img className="m-[6px_0_6px_0] w-[8.3px] h-[4px]" />
        </div>
      </div>
      <div className="m-[0_57px_17px_57px] inline-block self-start break-words font-['Roboto'] font-normal text-[16px] text-[#000000]">
      Description
      </div>
      <div className="rounded-[8px] border-[1px_solid_rgba(0,0,0,0.1)] bg-[#FFFFFF] relative m-[0_57px_161px_57px] self-start p-[16px_18.5px_76px_18.5px] w-[fit-content] box-sizing-border">
        <span className="break-words font-['Roboto'] font-normal text-[16px] text-[#858585]">
        Input description for your task...
        </span>
      </div>
      <div className="rounded-b-[12px] bg-[#D9D9D9] relative flex flex-row justify-between p-[12px_60px_12px_0] w-[100%] box-sizing-border">
        <div className="rounded-[8px] border-[1px_solid_#858585] flex flex-row p-[5px_11.2px_5px_11px] box-sizing-border">
          <img className="m-[0_4px_0_0] w-[24px] h-[24px]" />
          <div className="m-[2.5px_0_2.5px_0] inline-block break-words font-['Roboto'] font-normal text-[16px] text-[#858585]">
          Share
          </div>
        </div>
        <div className="rounded-[8px] bg-[#6C5DD3] relative flex p-[8px_0_9px_1.2px] w-[100px] h-[fit-content] box-sizing-border">
          <span className="break-words font-['Roboto'] font-medium text-[16px] text-[#FFFFFF]">
          Save
          </span>
        </div>
      </div>
    </div>
  )
}