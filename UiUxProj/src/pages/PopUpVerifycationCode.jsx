export default function PopUpVerifycationCode() {
  return (
    <div className="rounded-[16px] bg-[#FFFFFF] flex flex-col p-[23px_26px_24px_24px] box-sizing-border">
      <div className="m-[0_0_25px_0] flex flex-row justify-between w-[100%] box-sizing-border">
        <div className="m-[4px_0_0_0] flex flex-row box-sizing-border">
          <div className="rounded-[4px] bg-[#6C5DD3] m-[0_16px_0_0] w-[16px] h-[32px]">
          </div>
          <span className="break-words font-['Inter'] font-[var(--title-1-semibold-font-weight,600)] text-[20px] tracking-[var(--title-1-semibold-letter-spacing,-0.4px)] leading-[var(--title-1-semibold-line-height,1.6)] text-[#000000]">
          Join in workspace with a code
          </span>
        </div>
        <div className="rounded-[36px] bg-[var(--neutral-031,#EFEFEF)] flex p-[12.2px_12.2px_12.2px_12.2px] w-[36px] h-[36px] box-sizing-border">
          <img className="w-[11.7px] h-[11.7px]" />
        </div>
      </div>
      <div className="rounded-[1px] bg-[var(--neutral-031,#EFEFEF)] m-[0_0_12px_0] w-[407px] h-[1px]">
      </div>
      <div className="m-[0_2.4px_9px_0] inline-block break-words font-['Inter'] font-[var(--body-1-medium-font-weight,500)] text-[15px] tracking-[var(--body-1-medium-letter-spacing,-0.2px)] leading-[var(--body-1-medium-line-height,1.6)] text-[var(--neutral-041,#6F767E)]">
      Please enter code of workspace and enter the code below to join in.
      </div>
      <div className="flex flex-row justify-between w-[100%] box-sizing-border">
        <div className="flex flex-row box-sizing-border">
          <p className="m-[12px_12.6px_12px_0] break-words font-['Inter'] font-[var(--body-1-medium-font-weight,500)] text-[15px] tracking-[var(--body-1-medium-letter-spacing,-0.2px)] leading-[var(--body-1-medium-line-height,1.6)] text-[var(--neutral-041,#6F767E)]">
          <span className="digits-code-sub-3"></span><span className="digits-code-sub-5"></span><span></span>
          </p>
          <div className="rounded-[8px] bg-[#F5F5F5] relative p-[12px_14px_12px_14px] w-[140px] box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-1-medium-font-weight,500)] text-[15px] tracking-[var(--body-1-medium-letter-spacing,-0.2px)] leading-[var(--body-1-medium-line-height,1.6)] text-[#858585]">
            Enter code
            </span>
          </div>
        </div>
        <div className="w-[89px] box-sizing-border">
          <div className="rounded-[12px] bg-[#6C5DD3] p-[12px_20px_12px_20px] box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--button-1-font-weight,700)] text-[15px] tracking-[var(--button-1-letter-spacing,-0.2px)] leading-[var(--button-1-line-height,1.6)] text-[var(--neutral-01,#FCFCFC)]">
            Join in
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}