import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Signup() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    
   console.log("Form Data:", data);
  }
  
  return (
   <>
   <div className ="flex h-screen items-center justify-center ">
    <div  className = "border-2px  w-[600px] p-10 shadow-md  ">
        <div className = "">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl">Signup</h3>

 <div className="mt-4 space-y-2 text-xl">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-95 px-4 py-2 border rounded-md outline-none"
                  {...register("name", { required: true })}
              />
              <br/>
              {errors.name && (
                <span className="text-md text-red-500">
                  This field is required
                </span>
              )}
              
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2 text-xl">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-95 px-4 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
              />
             <br/>
              {errors.email && (
                <span className="text-md text-red-500">
                  This field is required
                </span>
              )}
              
              
            </div>
            {/* password */}
            <div className="mt-4 space-y-2 text-xl">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-95 px-4 py-2 border rounded-md outline-none"
               {...register("password", { required: true })}
              />
              
              <br/>
              {errors.password && (
                <span className="text-md text-red-500">
                  This field is required
                </span>
              )}
              
            </div>

            {/* Button */}
            <div className="flex justify-around mt-8 text-xl">
              <button className="bg-purple-500 text-white rounded-md px-5 py-2 hover:bg-purple-700 duration-300">
                Signup
              </button>
              <p>
                Have account ?{" "}
                <button
                  
                  className="underline text-blue-500 cursor-pointer"
                  onClick={()=>document.getElementById("my_modal_3").showModal()}>
                
                  Login
                </button>{" "}
              
              </p>
              
            </div>
          </form>
            <Login/>
        </div>
      </div>
   </div>
   </>
  );
}

export default Signup;
