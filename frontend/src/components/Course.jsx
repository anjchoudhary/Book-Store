import React from 'react'
import Cards from "./Cards";

import {Link} from "react-router-dom";  
import { useState,useEffect } from 'react';
import axios from "axios";

function Course() {
  const [book,setBook] = useState([]);
  useEffect(() => {
const getBook = async ()=>{
  try {
   const res= await axios.get("https://book-store-don6.onrender.com/book");
   console.log(res.data);
    setBook(res.data); 
  } catch (error) {
    console.log(error);
  }
};
getBook();
  },[]);
  return (
 <>
 <div className="max-w-screen-2xl mx-auto px-4 md:px-20 dark:bg-slate-900">

<div className='mt-28 item-center justify-center text-center '>
  <h1 className='text-2xl  md:text-4xl'>We're delighted to have you {" "}<span  className ="text-purple-700"> Here! :)</span> </h1>
<p className='mt-12 text-xl'>
  Discover the art of storytelling through engaging exercises in plot, character, and dialogue.  You’ll explore different genres of fiction and non-fiction, while learning how to structure narratives that capture readers’ attention.  You’ll also gain insights into common writing challenges such as writer’s block and how to overcome them effectively. Practical assignments and peer feedback will ensure hands-on learning and improvement. Whether your dream is to write short stories, novels, or personal essays, you’ll be ready to craft compelling stories of your own.
</p>
<Link to="/"><button className='mt-6 bg-purple-600 px-4 py-2 cursor-pointer shadow-md rounded-md hover:bg-purple-900 duration-300 text-white '>Back</button></Link>
</div>
 </div>
 <div className='mt-10 grid grid-cols-1 md:grid-cols-3 '>
  {
    book.map((item) =>(
    <Cards key = {item.id} item={item}/>
  ))}
 </div>
 </>
  )
}


export default Course
