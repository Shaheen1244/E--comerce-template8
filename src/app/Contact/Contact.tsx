import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Get In Touch With Us</h1>
      <p className="text-center text-gray-600 max-w-xl my-2">
        For more information about our product & services, please feel free to drop us an email.
        Our staff is always there to help you out. Do not hesitate!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Address</h2>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">Mobile: +(84) 546-6789</p>
            <p className="text-gray-600">Hotline: +(84) 456-6789</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Working Time</h2>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Section */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="This is optional"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea>
               id="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
             placeholder="Hi! I'd like to ask about..."
            </textarea>

          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
