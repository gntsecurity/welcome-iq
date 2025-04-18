'use client'

import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <HeaderDesktop />
      <main className="flex-grow px-6 md:px-12 py-16 max-w-3xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-extrabold mb-2">Terms of Service</h1>
          <p className="text-gray-600">Effective Date: April 18, 2025</p>
        </section>

        <section className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
          <p>
            Welcome to Welcome-IQ. These Terms of Service govern your access to and use of the
            Welcome-IQ platform. By accessing or using our services, you agree to be bound by these
            terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">1. Scope of Service</h2>
          <p>
            Welcome-IQ is a secure web-based platform used by organizations to manage contractor and
            visitor onboarding. You are permitted to access and use the platform only as authorized
            by the organization that granted you access.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">2. User Conduct</h2>
          <p>
            You agree to provide accurate information and not to submit any misleading or
            unauthorized data. You may not attempt to access, alter, or interfere with platform
            functionality outside the intended onboarding flow.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">3. Data Ownership</h2>
          <p>
            All data submitted through Welcome-IQ belongs to the organization administering the
            platform. We act only as a processor of this data. Any requests to view or remove data
            should be directed to that organization.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">4. Platform Availability</h2>
          <p>
            We strive to ensure high uptime and reliability. However, we make no guarantees of
            uninterrupted access and reserve the right to suspend or modify the platform for
            maintenance or security purposes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">5. Intellectual Property</h2>
          <p>
            All content, source code, and branding associated with Welcome-IQ is the intellectual
            property of GNT Security or its licensors. You may not copy, modify, or distribute any
            part of the service without written permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
          <p>
            Welcome-IQ is provided “as is.” We disclaim all warranties, express or implied,
            including fitness for a particular purpose. In no event shall GNT Security be liable for
            indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">7. Termination</h2>
          <p>
            We reserve the right to revoke or suspend access to the platform if you violate these
            terms or misuse the system. Access granted by your host organization may also be revoked
            at their discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">8. Changes</h2>
          <p>
            We may update these Terms of Service from time to time. Updates will be reflected on
            this page with a revised effective date.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">9. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of the State of Ohio, United States, without regard
            to conflict of law principles. Any disputes shall be resolved in the appropriate courts
            of Montgomery County, OH.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">10. Contact</h2>
          <p>
            For questions regarding these terms, contact us at{' '}
            <a
              href="mailto:legal@welcome-iq.com"
              className="text-blue-600 hover:underline"
            >
              legal@welcome-iq.com
            </a>
            .
          </p>
        </section>
      </main>
      <FooterDesktop />
    </div>
  )
}
