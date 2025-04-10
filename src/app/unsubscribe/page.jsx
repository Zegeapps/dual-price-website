'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Client-side only component
function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Get email from URL parameters if available
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Simulate loading for a more realistic demo
    setStatus("loading");
    
    // Simulate processing time (1 second)
    setTimeout(() => {
      // Show success message
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        {status === "success" ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Successfully Unsubscribed</h2>
            <p className="text-gray-600 mb-6">
              Thank you, {name || "valued customer"}. Your email {email} has been removed from our mailing list. 
              You will no longer receive newsletters from us.
            </p>
            <p className="text-gray-600">
              If you unsubscribed by mistake or would like to resubscribe in the future, please contact us at{" "}
              <a href="mailto:zegeapps@gmail.com" className="text-blue-600 hover:underline">
                zegeapps@gmail.com
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="text-gray-600 mb-6">
              Please confirm your information below to unsubscribe from our newsletter.
            </p>

            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your@email.com"
                required
              />
            </div>

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                status === "loading"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              } transition-colors duration-300`}
            >
              {status === "loading" ? "Processing..." : "Unsubscribe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Main page component with client directive
export default function Unsubscribe() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight mb-8">
          Unsubscribe from Our Newsletter
        </h1>
        
        <UnsubscribeForm />
      </div>
    </section>
  );
}