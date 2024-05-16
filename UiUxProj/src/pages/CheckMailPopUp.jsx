export default function CheckMailPopUp() {
  return (
    <div className="shadow-[var(--depth-01,0px_0px_14px_-4px_rgba(0,0,0,0.05)),var(--depth-01,0px_32px_48px_-8px_rgba(0,0,0,0.1))] backdrop-blur-[var(--depth-01,16px)] rounded-[16px] bg-[var(--neutral-011,#FCFCFC)] flex flex-col p-[24px_24px_24px_24px] box-sizing-border">
      <div className="m-[0_0_24px_0] flex flex-row justify-between w-[100%] box-sizing-border">
        <div className="m-[2px_0_2px_0] flex flex-row box-sizing-border">
          <div className="rounded-[4px] bg-[#6C5DD3] m-[0_16px_0_0] w-[16px] h-[32px]">
          </div>
          <span className="break-words font-['Inter'] font-[var(--title-1-semibold-font-weight,600)] text-[20px] tracking-[var(--title-1-semibold-letter-spacing,-0.4px)] leading-[var(--title-1-semibold-line-height,1.6)] text-[var(--neutral-071,#1A1D1F)]">
          Check Your Mail
          </span>
        </div>
        <div className="rounded-[36px] bg-[var(--neutral-031,#EFEFEF)] flex p-[12.2px_12.2px_12.2px_12.2px] w-[36px] h-[36px] box-sizing-border">
          <img className="w-[11.7px] h-[11.7px]" />
        </div>
      </div>
      <div className="rounded-[1px] bg-[var(--neutral-031,#EFEFEF)] m-[0_0_24px_0] w-[378px] h-[1px]">
      </div>
      <div className="m-[0_0_24px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-1-medium-font-weight,500)] text-[15px] tracking-[var(--body-1-medium-letter-spacing,-0.2px)] leading-[var(--body-1-medium-line-height,1.6)] text-[var(--neutral-041,#6F767E)]">
      We have sent a new password to your registered email address. Please check your email.
      </div>
      <div className="self-end box-sizing-border">
        <div className="rounded-[12px] bg-[#6C5DD3] p-[12px_20px_12px_20px] box-sizing-border">
          <span className="break-words font-['Inter'] font-[var(--button-1-font-weight,700)] text-[15px] tracking-[var(--button-1-letter-spacing,-0.2px)] leading-[var(--button-1-line-height,1.6)] text-[var(--neutral-01,#FCFCFC)]">
          Sign in
          </span>
        </div>
      </div>
    </div>
  )
}