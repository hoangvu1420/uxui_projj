export default function MainScreenMobile() {
  return (
    <div className="bg-[#FFFFFF] flex box-sizing-border">
      <div className="relative flex flex-col items-center w-[100%] h-[fit-content] box-sizing-border">
        <div className="shadow-[var(--token,0px_0.5px_1px_0px_rgba(0,0,0,0.1)),var(--token,0px_4px_8px_0px_rgba(0,0,0,0.2))] bg-[var(--white-100,#FFFFFF)] m-[0_0_61px_0] flex flex-row justify-between p-[32px_26px_32px_19px] w-[100%] box-sizing-border">
          <div className="m-[8px_0_8px_0] flex w-[18px] h-[12px] box-sizing-border">
            <img className="w-[18px] h-[12px]" />
          </div>
          <span className="break-words font-['Roboto'] font-[var(--header-32028-font-weight,500)] text-[20px] leading-[var(--header-32028-line-height,1.4)] text-[var(--black-87,rgba(0,0,0,0.87))]">
          KPI Call
          </span>
          <div className="m-[5.3px_0_5.3px_0] flex flex-row justify-between w-[58.7px] h-[fit-content] box-sizing-border">
            <div className="flex w-[17.5px] h-[17.5px] box-sizing-border">
              <img className="w-[17.5px] h-[17.5px]" />
            </div>
            <div className="m-[0.7px_0_0.7px_0] flex w-[4px] h-[16px] box-sizing-border">
              <img className="w-[4px] h-[16px]" />
            </div>
          </div>
        </div>
        <div className="shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px] bg-[rgba(231,231,231,0.333)] relative m-[0_52px_90px_52px] self-end p-[54px_37px_49px_37px] w-[fit-content] box-sizing-border">
          <span className="break-words font-['Roboto'] font-semibold text-[40px] text-[#0A007D]">
          65%
          </span>
        </div>
        <div className="m-[0_261.5px_9px_0] inline-block break-words font-['Roboto'] font-semibold text-[25px] text-[#000000]">
        Tiến độ công việc
        </div>
        <div className="shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px] bg-[rgba(231,231,231,0.333)] m-[0_52px_80px_52px] self-end w-[466px] h-[156px]">
        </div>
        <div className="m-[0_299.8px_121px_0] inline-block break-words font-['Roboto'] font-semibold text-[25px] text-[#000000]">
        Thống kê tuần 
        </div>
        <span className="m-[0_217.7px_0_0] break-words font-['Roboto_Flex'] font-normal text-[20px] text-[#000000]">
        Chỉ tiêu còn lại
        </span>
      </div>
      <div className="shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px] bg-[rgba(231,231,231,0.333)] absolute left-[58px] bottom-[113.9px] w-[453.7px] h-[208.1px]">
      </div>
      <span className="absolute left-[170px] bottom-[214px] break-words font-['Roboto'] font-normal text-[40px] text-[#000000]">
      6
      </span>
    </div>
  )
}