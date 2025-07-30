const UserListSkeleton = () => {
    const skeletonArray = new Array(5).fill(0); // Adjust how many rows you want
  
    return (
      <>
        {skeletonArray.map((_, index) => (
          <div key={index}>
            {/* Mobile Skeleton */}
            <div className="md:hidden bg-opacity-40 rounded-[15px] p-4 mb-4 animate-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700" />
                <div className="space-y-2">
                  <div className="w-24 h-4 bg-gray-700 rounded" />
                  <div className="w-16 h-3 bg-gray-600 rounded" />
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Email:</span>
                  <span className="h-3 w-32 bg-gray-700 rounded" />
                </div>
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Contact:</span>
                  <span className="h-3 w-24 bg-gray-700 rounded" />
                </div>
                <div className="flex items-center text-[12px] text-white">
                  <span className="w-24 opacity-70">Registered:</span>
                  <span className="h-3 w-20 bg-gray-700 rounded" />
                </div>
              </div>
              <div className="h-9 bg-gray-700 rounded-[8px]" />
            </div>
  
            {/* Desktop Skeleton */}
            <div className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-[#313131] py-2 mb-4 text-white text-[12px] animate-pulse">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div className="w-20 h-3 bg-gray-700 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-3 w-28 bg-gray-700 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-3 w-20 bg-gray-700 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-3 w-24 bg-gray-700 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-3 w-20 bg-gray-700 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-9 w-24 bg-gray-700 rounded-[8px]" />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default UserListSkeleton;
  