export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="animate-pulse">
        {/* Hero Skeleton */}
        <div className="relative min-h-[600px] bg-gradient-to-br from-gray-300 to-gray-400">
          <div className="max-w-7xl mx-auto px-4 py-32">
            <div className="h-16 bg-white/30 rounded w-3/4 mb-6"></div>
            <div className="h-8 bg-white/20 rounded w-1/2 mb-8"></div>
            <div className="flex gap-4">
              <div className="h-14 w-40 bg-white/30 rounded-lg"></div>
              <div className="h-14 w-40 bg-white/20 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Services Skeleton */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-12 bg-gray-300 rounded w-1/3 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="h-96 bg-white rounded-2xl shadow-sm"></div>
              <div className="h-96 bg-white rounded-2xl shadow-sm"></div>
              <div className="h-96 bg-white rounded-2xl shadow-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Technology Skeleton */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-12 bg-gray-300 rounded w-1/3 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="h-48 bg-gray-100 rounded-xl"></div>
              <div className="h-48 bg-gray-100 rounded-xl"></div>
              <div className="h-48 bg-gray-100 rounded-xl"></div>
              <div className="h-48 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}