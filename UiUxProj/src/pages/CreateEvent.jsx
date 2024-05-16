export default function CreateEvent() {
  return (
    <div className="flex flex-row justify-between box-sizing-border">
      <div className="rounded-[10px] bg-[#B6B6B6] relative flex p-[5.8px_5.8px_5.8px_5.8px] w-[20px] h-[20px] box-sizing-border">
        <div className="flex w-[8.5px] h-[8.5px] box-sizing-border">
          <img className="w-[8.5px] h-[8.5px]" />
        </div>
      </div>
      <span className="break-words font-['Inter'] font-medium text-[12px] leading-[1.667] text-[#B6B6B6]">
      Create task...
      </span>
    </div>
  )
}