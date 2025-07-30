export default function EventFilter({  type, setType, status, setStatus  }) {
  return (
    <div className="flex items-center justify-end w-full flex-wrap gap-3">

      {/* Type Filter */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px]"
      >
        <option className="text-black" value="public">Public</option>
        <option className="text-black" value="private">Private</option>
      </select>

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px]"
      >
        <option className="text-black" value="featured">Featured</option>
        <option className="text-black" value="upcoming">Upcoming</option>
        <option className="text-black" value="completed">Completed</option>
      </select>

      {/* City Filter */}
      {/* <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-[#FBFBFB1A] event-select w-full sm:w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-white h-[32px] text-[10px] font-[400] rounded-[10px]"
      >
        <option value="">Select City</option>
        <option value="lahore">Lahore</option>
        <option value="karachi">Karachi</option>
        <option value="islamabad">Islamabad</option>
      </select> */}
    </div>
  );
}
