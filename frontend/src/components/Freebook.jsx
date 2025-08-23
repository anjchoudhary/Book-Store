import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";



function Freebook() {
    const filterData = list.filter((data)=>data.category === "Free")
    console.log(filterData);

 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  return (
    <>
    <div className='max w-screen-xl mx-auto md:px-17 px-4'>
<div>
    <h1 className='md:text-3xl leading-tight text-gray-800 font-semibold pb-2 text-2xl dark:text-white'>Free Offered Courses </h1>
<p className='textarea-xl text-gray-900 leading-relaxed dark:text-white'>
    "Books are treasures meant to be shared. Here, you’ll find a collection of free reads carefully picked for curious minds and passionate readers. Dive in and discover your next favorite story—absolutely free!"
</p>
</div>
    </div>
    <div >
        <Slider {...settings}>
       {filterData.map((item) => (
        <Cards item ={item} key = {item.id}/>
       )
    )}
      </Slider>
    </div>
    </>
  )
}

export default Freebook