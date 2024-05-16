export default function NotiCreateTask5() {
  return (
    <div className="rounded-[8px] bg-[#FFFFFF] flex flex-row justify-between p-[16px_18px_16px_16px] box-sizing-border">
      <div className="flex flex-row box-sizing-border">
        <img className="m-[10px_24.5px_10px_0] w-[24px] h-[24px]" />
        <div className="flex flex-col box-sizing-border">
          <div className="m-[0_0_6px_0] inline-block self-start break-words font-['Roboto'] font-semibold text-[16px] text-[var(--green-1,#219653)]">
          Success!
          </div>
          <span className="break-words font-['Roboto'] font-normal text-[16px] text-[var(--green-1,#219653)]">
          Joined in new workspace!
          </span>
        </div>
      </div>
      <img className="m-[0_0_38px_0] w-[7.3px] h-[6px]" />
    </div>
  )
}