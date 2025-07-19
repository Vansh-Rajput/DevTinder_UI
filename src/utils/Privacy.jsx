import React from 'react'

const Privacy = () => {
  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
      
      <header className="bg-white dark:bg-gray-800 shadow py-5 px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
      </header>

      <main className="flex-1 p-6 max-w-4xl mx-auto space-y-8">
        
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This Privacy Policy explains how DevTinder collects, uses, and protects your personal data when you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Your name, email, and age</li>
            <li>Profile information and preferences</li>
            <li>Activity and interaction data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To personalize your experience, improve matchmaking, and enhance platform features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We implement standard security practices to keep your data safe. However, no method is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We never sell your data. We only share with trusted services required to operate DevTinder.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You can request to view, edit, or delete your data anytime. Contact us at : vanshrjpt8@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Updates to Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This policy may be updated occasionally. We encourage you to review it regularly.
          </p>
        </section>
      </main>

      <footer className="text-sm text-center text-gray-600 dark:text-gray-400 p-4 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} DevTinder. All rights reserved.
      </footer>
    </div>
  )
}

export default Privacy