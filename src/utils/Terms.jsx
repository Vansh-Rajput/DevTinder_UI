import React from 'react'

const Terms = () => {
  return (
    <div>
         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow py-5 px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms and Conditions</h1>
      </header>
      <main className="flex-1 p-6 max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Use of Service</h2>
          <p className="text-gray-700 dark:text-gray-300">
            By accessing DevTinder, you agree to comply with our terms. Misuse or spamming may lead to permanent bans.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. User Content</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You are responsible for the content you share. Offensive or harmful material is strictly prohibited.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            DevTinder is not liable for any damages resulting from service use, downtime, or data loss.
          </p>
        </section>
      </main>
      <footer className="text-sm text-center text-gray-600 dark:text-gray-400 p-4 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} DevTinder. All rights reserved.
      </footer>
    </div>
    </div>
  )
}

export default Terms