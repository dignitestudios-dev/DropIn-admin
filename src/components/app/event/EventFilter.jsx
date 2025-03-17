export default function EventFilter() {
  return (
    <div className="flex items-center justify-end w-full flex-wrap gap-3">
        <select
          name=""
          className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px] "
          id=""
        >
          <option value="">Select Tye</option>
        </select>
        <select
          name=""
          className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px] "
          id=""
        >
          <option value="">Select Status</option>
        </select>
        <select
          name=""
          className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px] "
          id=""
        >
          <option value="">Select City</option>
        </select>
      
    </div>
  );
}
