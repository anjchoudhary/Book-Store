import React from 'react'
import banner from "../../public/Banner.png"
function Banner() {
  return (
    <section className='md:pt-20'>
      <div className="max-w-screen-2xl mx-auto md:px-14 px-6 py-22 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-15 order-2 md:order-1 main-content">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            <span className="text-purple-800">Read More, Learn More, Achieve More</span>
          </h1>
          <p className="textarea-xl text-gray-600 leading-relaxed dark:text-white">
            Welcome to <span className="font-semibold text-gray-800 dark:text-white">Book Store</span>, 
            your one-stop destination for knowledge, growth, and inspiration.  
            Whether you are a student aiming to strengthen your concepts, 
            a professional looking for upskilling resources, 
            or simply a curious reader exploring new ideas — 
            we’ve got something for everyone.  
            <br /><br />
            From timeless classics to modern educational resources, 
            our collection is designed to empower you on your journey of learning. 
            Unlock new perspectives, fuel your imagination, and achieve more 
            with books that truly make a difference.
          </p>

          {/* Input + Button */}
          <div className="flex items-center gap-3 mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-900 transition cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content (Image/Illustration) */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1">
        <img   src={banner}  alt="Student Reading" 
        className='w-[480px] h-[480px] md:w-[480px] md:h-[580px] object-contain 
               transition-transform duration-500 ease-in-out 
               hover:scale-120 hover:rotate-3 drop-shadow-2xl'
/>


        </div>
      </div>
</section>
  )
}

export default Banner
