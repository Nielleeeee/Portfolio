"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
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
  );
}
