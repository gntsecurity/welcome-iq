'use client'

import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <HeaderDesktop />
      <main className="flex-grow px-6 md:px-12 py-16 max-w-3xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: April 18, 2025</p>
        </section>

        <section className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
          <p>
            At Welcome-IQ, we take privacy seriously. Our platform is built to securely manage
            contractor and visitor onboarding information for organizations that value compliance,
            transparency, and operational excellence.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">What We Collect</h2>
          <p>
            We collect only the data required to fulfill our core functions. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Company affiliation</li>
            <li>Person or department being visited</li>
            <li>Digital signature and date of agreement</li>
            <li>Device/browser metadata for security auditing</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">How It’s Used</h2>
          <p>We use collected data exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verify and log contractor site access</li>
            <li>Comply with legal and regulatory onboarding requirements</li>
            <li>Notify designated personnel of visitor arrival</li>
            <li>Improve operational safety and visibility</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Data Sharing</h2>
          <p>
            We do not sell, lease, or share personal data with third parties. All submitted
            information remains under the control of the organization managing the Welcome-IQ
            instance. We may disclose information only when required by law.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
          <p>
            Logs and agreements are retained for as long as required by the customer organization’s
            policy, or until explicitly deleted. Digital signatures are stored securely with
            tamper-resistant audit metadata.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          <p>
            We employ industry-standard encryption in transit and at rest. Administrative access to
            data is strictly controlled and monitored. Backups are retained securely and rotated
            periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
          <p>
            If your information was submitted through Welcome-IQ and you wish to request access,
            correction, or deletion, please contact the organization managing your onboarding. We
            act as a secure processor on their behalf.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For platform-specific privacy concerns, please reach out to our administrative team at{' '}
            <a
              href="mailto:admin@welcome-iq.com"
              className="text-blue-600 hover:underline"
            >
              admin@welcome-iq.com
            </a>
            .
          </p>
        </section>
      </main>
      <FooterDesktop />
    </div>
  )
}
