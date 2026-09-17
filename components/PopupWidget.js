"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const PopupWidget = ({ isOpen, onClose }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      setIsSubmitSuccessful(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          subject: "New Contact Form Submission",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setIsSubmitSuccessful(true);
      setMessage("Your message has been sent successfully. We'll get back to you soon!");
      reset();
      setTimeout(() => {
        setIsSubmitSuccessful(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Error sending message:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Disclosure>
        {({ open, close }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-[#c4c238] rounded-full shadow-lg right-5 bottom-2 w-14 h-14 focus:outline-none hover:bg-[#00275a] focus:bg-[#00275a] ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                as="div"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as="div"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <Disclosure.Panel className="flex flex-col overflow-hidden left-0 h-auto w-full sm:w-[350px] min-h-[200px] sm:h-[575px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-[#003478]">
                  <h3 className="text-lg text-white">How can we help?</h3>
                  <p className="text-white opacity-50">
                    We usually respond in a few hours
                  </p>
                </div>
                <div className="flex-grow h-auto p-6 overflow-auto bg-gray-50">
                  {!isSubmitSuccessful && (
                    <form onSubmit={(e) => handleSubmit((data) => onSubmit(data))(e)} noValidate>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Your name is required",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-900 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-11 focus:outline-none focus:ring-1 focus:ring-[#003478] focus:border-transparent ${errors.name ? "border-red-600 ring-red-100 focus:ring-red-600" : ""}`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          placeholder="you@company.com"
                          className={`w-full px-3 py-2 text-gray-900 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-11 focus:outline-none focus:ring-1 focus:ring-[#003478] focus:border-transparent ${errors.email ? "border-red-600 ring-red-100 focus:ring-red-600" : ""}`}
                        />
                        {errors.email && (
                          <div className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          id="message"
                          {...register("message", {
                            required: "Enter your message",
                          })}
                          placeholder="Your message"
                          className={`w-full px-3 py-2 text-gray-900 placeholder-gray-300 bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#003478] focus:border-transparent ${errors.message ? "border-red-600 ring-red-100 focus:ring-red-600" : ""}`}
                          required
                        ></textarea>
                        {errors.message && (
                          <div className="mt-1 text-sm text-red-600">
                            {errors.message.message}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-[#003478] rounded-md focus:bg-[#00275a] hover:bg-[#00275a] focus:outline-none transition-colors"
                      >
                        {loading ? (
                          <svg
                            className="w-5 h-5 mx-auto text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}

                  {isSubmitSuccessful && (
                    <>
                      <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                        <svg
                          width="60"
                          height="60"
                          className="text-green-300"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.6666 50L46.6666 66.6667L73.3333 33.3333"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="py-5 text-xl text-green-500">
                          Message sent successfully
                        </h3>
                        <p className="text-gray-700 md:px-3">{message}</p>
                        <p className="mt-2 text-sm text-gray-500">Closing automatically...</p>
                      </div>
                    </>
                  )}

                  {isSubmitSuccessful && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M27.9995 29C43.6205 44.621 52.3786 53.379 67.9995 69"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h3 className="py-5 text-xl text-red-500">
                        Oops, something went wrong!
                      </h3>
                      <p className="text-gray-700 md:px-3">{error}</p>
                      <button
                        className="mt-6 text-[#003478] focus:outline-none"
                        onClick={() => reset()}
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PopupWidget;