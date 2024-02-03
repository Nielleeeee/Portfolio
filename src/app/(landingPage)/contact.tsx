"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MainContainer } from "@/components/containers";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";
import Transition from "@/components/transition/transition";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        const data = fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        await toast.promise(data, {
          pending: "Sending email...",
          success: "Email sent succesfully.",
          error: "Something went wrong.",
        });

        const response = await data;

        if (response.ok) {
          setIsLoading(false);
          resetForm();
        } else {
          setIsLoading(false);
          const errorMessage = await response.text();
          console.error(`Error: ${response.status} - ${response.statusText}`);
          console.error(errorMessage);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  });

  return (
    <section
      id="contact"
      className="bg-[url('/flat-mountains.png')] bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <Transition>
        <MainContainer>
          <div className="mx-auto max-w-screen-xl py-16 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-5 items-center">
              <div className="lg:col-span-2 lg:py-12 text-white bg-white/10 backdrop-blur-xl px-6 py-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="max-w-xl text-lg">
                  Whether you have questions, exciting projects, or
                  opportunities for collaboration, I&apos;d love to hear from
                  you. Feel free to reach out using the form, or directly via
                  this email{" "}
                  <Link
                    href="mailto:jandnllplz@gmail.com"
                    className="text-orange-200 transition hover:text-secondary"
                  >
                    jandnllplz@gmail.com
                  </Link>
                  . I&apos;m always ready to discuss how we can work together to
                  bring your ideas to life.
                </p>

                <div className="mt-8">
                  <ul className="flex flex-col gap-3">
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </span>
                      Mandaluyong City, Metro Manila, Philippines
                    </li>
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-phone fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      +63 977-6996-964
                    </li>
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      jandnllplz@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg h-max bg-[#FFFFFF] p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className={`w-full rounded-lg p-3 text-sm ${
                        formik.touched.message && formik.errors.name
                          ? "border-secondary"
                          : "border-black"
                      }`}
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className={`w-full rounded-lg p-3 text-sm ${
                          formik.touched.message && formik.errors.email
                            ? "border-secondary"
                            : "border-black"
                        }`}
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-black p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className={`w-full rounded-lg p-3 text-sm ${
                        formik.touched.message && formik.errors.message
                          ? "border-secondary"
                          : "border-black"
                      }`}
                      placeholder="Message"
                      rows={8}
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-block w-full rounded-lg disabled:bg-[#9b9b9b] bg-secondary px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </MainContainer>
      </Transition>
    </section>
  );
}
