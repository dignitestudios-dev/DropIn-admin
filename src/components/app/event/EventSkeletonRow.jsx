
const EventSkeletonRow = () => {
    return (
      <div className="animate-pulse">
        {/* Mobile View Skeleton */}
        <div className="md:hidden bg-black bg-opacity-40 rounded-[15px] p-4 mb-4 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full" />
            <div className="space-y-2">
              <div className="w-24 h-4 bg-gray-700 rounded" />
              <div className="w-36 h-3 bg-gray-600 rounded" />
            </div>
          </div>
          <div className="space-y-3 mb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-[12px]">
                <div className="w-24 h-3 bg-gray-700 rounded opacity-70" />
                <div className="w-28 h-3 bg-gray-600 rounded" />
              </div>
            ))}
          </div>
          <div className="w-full h-8 bg-gray-700 rounded-[8px]" />
        </div>
  
        {/* Desktop View Skeleton */}
        <div className="hidden md:grid grid-cols-12 text-[12px] border-b border-[#313131] py-4 mb-4 text-white">
          <div className="col-span-2 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full" />
            <div className="w-24 h-3 bg-gray-700 rounded" />
          </div>
          {[2, 3, 2, 1, 1, 1].map((span, i) => (
            <div key={i} className={`col-span-${span} flex items-center`}>
              <div className="w-full h-3 bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default EventSkeletonRow;
  