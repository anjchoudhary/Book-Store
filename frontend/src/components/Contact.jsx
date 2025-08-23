import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // TODO: send to your backend or a service
    console.log("contact form:", data);

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 mt-24 mb-16">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-base-100 p-8 rounded-2xl shadow-md"
      >
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="text-black text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Min 2 characters" },
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="text-xl text-black">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="form-control">
          <label className="label">
            <span className="text-xl text-black">Message</span>
          </label>
          <textarea
            placeholder="Type your message"
            className="textarea textarea-bordered w-full h-32"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 5, message: "Please add a bit more detail" },
            })}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary text-xl"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {submitted && (
          <div className="alert alert-success mt-4">
            <span>Thanks! We’ll get back to you soon.</span>
          </div>
        )}
      </form>
    </section>
  );
}
