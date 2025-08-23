import React from 'react'

function Cards({ item }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="card bg-base-100 shadow-2xl rounded-xl overflow-hidden hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        
        {/* Image */}
        <figure>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-48 sm:h-60 md:h-72 object-cover" 
          />
        </figure>

        {/* Content */}
        <div className="card-body p-4 sm:p-6">
          <h2 className="card-title text-base sm:text-lg md:text-xl font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-2 text-xs sm:text-sm">{item.category}</div>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-white">
            {item.title || "A card component with image, title and actions."}
          </p>

          {/* Actions */}
          <div className="card-actions flex justify-between items-center mt-3">
            <div className="badge badge-outline px-3 py-2 sm:py-3 text-sm sm:text-base">
              ${item.price}
            </div>
            <button className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border-2 hover:bg-purple-500 hover:text-white duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
