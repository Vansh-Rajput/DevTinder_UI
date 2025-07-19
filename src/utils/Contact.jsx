import React from 'react'

const Contact = () => {
  return (
    <div>
         <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>

        <p className="mb-6 text-gray-300">
          Have questions, feedback, or partnership opportunities? Feel free to reach out using the form below.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact