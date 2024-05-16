export default function NotiCreateTask1() {
  return (
    <div className="rounded-[8px] bg-[#FFFFFF] flex flex-row p-[13px_16px_13px_16px] box-sizing-border">
      <img className="m-[10px_24.5px_29px_0] w-[24px] h-[24px]" />
      <div className="m-[0_24.9px_0_0] flex flex-col grow basis-[215.3px] box-sizing-border">
        <div className="m-[0_0_2px_0] inline-block self-start break-words font-['Roboto'] font-semibold text-[20px] text-[var(--green-1,#219653)]">
        Success!
        </div>
        <span className="break-words font-['Roboto'] font-normal text-[16px] text-[var(--green-1,#219653)]">
        Member was requested to join group successfully!
        </span>
      </div>
      <img className="m-[0_0_57px_0] w-[7.3px] h-[6px]" />
    </div>
  )
}