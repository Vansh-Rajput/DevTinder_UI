import React from 'react'

const Cancellation = () => {
  return (
    <div>
         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow py-5 px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cancellation & Refund Policy</h1>
      </header>
      <main className="flex-1 p-6 max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Cancellation Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Users may cancel their account anytime from their profile settings. Any premium services canceled are not eligible for partial refunds.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Refunds</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Refunds are only processed in cases of failed transactions or duplicate payments. All decisions on refunds are final and made at DevTinder's discretion.
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

export default Cancellation