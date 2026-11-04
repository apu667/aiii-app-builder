"use client";

export const Header = () => {
  return (
    <div className="border-b border-gray-100 bg-white rounded-b-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 px-6 py-3 text-xs font-medium tracking-wider uppercase">
          <span className="flex items-center gap-2 text-blue-600">
            🚚 Free shipping on orders over $50
          </span>
          <span className="w-px h-3 bg-gray-300 mx-1" />
          <span className="hidden sm:block text-gray-500">↻ Easy 30-day returns</span>
          <span className="w-px h-3 bg-gray-300 mx-1 hidden sm:block" />
          <span className="hidden md:block text-gray-500">🎁 Get 10% off your first order</span>
        </div>
      </div>
    </div>
  );
};
