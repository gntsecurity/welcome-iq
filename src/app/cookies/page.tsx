'use client'

import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <HeaderDesktop />
      <main className="flex-grow px-6 md:px-12 py-16 max-w-3xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-extrabold mb-2">Cookies Policy</h1>
          <p className="text-gray-600">Effective Date: April 18, 2025</p>
        </section>

        <section className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
          <p>
            Welcome-IQ uses cookies and similar technologies strictly to ensure platform
            functionality, enhance user experience, and maintain secure access during onboarding
            sessions. We do not use third-party cookies for advertising or behavioral tracking.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">What Are Cookies?</h2>
          <p>
            Cookies are small data files stored on your device when you access certain websites.
            They help systems recognize returning users, persist session data, and secure
            interactions across requests.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Essential Cookies:</strong> Used to authenticate sessions, retain active
              onboarding state, and manage navigation across steps.
            </li>
            <li>
              <strong>Security Cookies:</strong> Used to detect invalid or unauthorized requests and
              prevent abuse of the system.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Anonymous metrics for internal diagnostics,
              uptime monitoring, and UX flow analysis.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">No Third-Party Tracking</h2>
          <p>
            We do not allow external tracking libraries, advertising tags, or cookie-based analytics
            tools on any Welcome-IQ property. All cookies are internal and purpose-specific.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Your Options</h2>
          <p>
            Most browsers allow you to manage or block cookies in your settings. Please note that
            disabling essential cookies may impact your ability to sign in or complete the
            onboarding process.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Retention</h2>
          <p>
            Cookies are stored only as long as necessary to fulfill their function. Session cookies
            expire automatically upon logout or after a defined period of inactivity.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For any questions about our use of cookies, please contact our team at{' '}
            <a href="mailto:privacy@welcome-iq.com" className="text-blue-600 hover:underline">
              privacy@welcome-iq.com
            </a>
            .
          </p>
        </section>
      </main>
      <FooterDesktop />
    </div>
  )
}
