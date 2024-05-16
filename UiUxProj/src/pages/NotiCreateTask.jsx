export default function NotiCreateTask() {
  return (
    <div className="rounded-[8px] bg-[#FFFFFF] flex flex-row p-[16px_18px_16px_16px] box-sizing-border">
      <img className="m-[10px_24.5px_10px_0] w-[24px] h-[24px]" />
      <div className="m-[0_28.6px_0_0] flex flex-col grow basis-[211.6px] box-sizing-border">
        <div className="m-[0_0_2px_0] inline-block self-start break-words font-['Roboto'] font-semibold text-[20px] text-[var(--green-1,#219653)]">
        Success!
        </div>
        <span className="break-words font-['Roboto'] font-normal text-[16px] text-[var(--green-1,#219653)]">
        Task was added successfully!
        </span>
      </div>
      <img className="m-[0_0_38px_0] w-[7.3px] h-[6px]" />
    </div>
  )
}