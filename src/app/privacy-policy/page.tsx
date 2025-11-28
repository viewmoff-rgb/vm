"use client";
import React from "react";

import TitleBar from "@/components/shared/TitleBar";

import FooterSection from "../FooterSection";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <TitleBar />

      <div className="w-full px-6 pb-20 pt-32 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-foreground-light">
            Last updated: November 28, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground-light">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                1. Introduction
              </h2>
              <p className="mb-4">
                ViewMarket (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our AI automation platform and related
                services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using our Services, you agree to this Privacy
                Policy. If you do not agree with the terms of this policy,
                please do not access the Services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">
                2.1 Information You Provide
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">
                    Account Information:
                  </strong>{" "}
                  Name, email address, password, company name, and job title
                  when you create an account.
                </li>
                <li>
                  <strong className="text-foreground">
                    Payment Information:
                  </strong>{" "}
                  Billing address and payment method details (processed securely
                  by our payment processors).
                </li>
                <li>
                  <strong className="text-foreground">
                    Profile Information:
                  </strong>{" "}
                  Profile picture, preferences, and settings you choose to
                  provide.
                </li>
                <li>
                  <strong className="text-foreground">Communications:</strong>{" "}
                  Information you provide when contacting support or
                  participating in surveys.
                </li>
                <li>
                  <strong className="text-foreground">User Content:</strong>{" "}
                  Workflows, automations, and data you create or upload to our
                  platform.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                2.2 Information Collected Automatically
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Usage Data:</strong> How
                  you interact with our Services, including features used,
                  actions taken, and time spent.
                </li>
                <li>
                  <strong className="text-foreground">
                    Device Information:
                  </strong>{" "}
                  Browser type, operating system, device identifiers, and IP
                  address.
                </li>
                <li>
                  <strong className="text-foreground">Log Data:</strong> Server
                  logs including access times, pages viewed, and referring URLs.
                </li>
                <li>
                  <strong className="text-foreground">
                    Cookies and Tracking:
                  </strong>{" "}
                  We use cookies and similar technologies to enhance your
                  experience.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                2.3 Information from Third Parties
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Data from integrated third-party services you connect to
                  ViewMarket
                </li>
                <li>
                  Information from identity verification services for security
                  purposes
                </li>
                <li>
                  Publicly available information from business directories
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our Services
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>Personalize and improve your experience</li>
                <li>
                  Send promotional communications (with your consent where
                  required)
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                4. How We Share Your Information
              </h2>
              <p className="mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  With vendors who perform services on our behalf (hosting,
                  analytics, payment processing).
                </li>
                <li>
                  <strong className="text-foreground">
                    Business Transfers:
                  </strong>{" "}
                  In connection with a merger, acquisition, or sale of assets.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legal Requirements:
                  </strong>{" "}
                  When required by law or to protect our rights and safety.
                </li>
                <li>
                  <strong className="text-foreground">
                    With Your Consent:
                  </strong>{" "}
                  When you have given us permission to share your information.
                </li>
                <li>
                  <strong className="text-foreground">Aggregated Data:</strong>{" "}
                  We may share anonymized, aggregated data that cannot identify
                  you.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement robust security measures to protect your
                information:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  End-to-end encryption for data in transit and at rest
                  (AES-256)
                </li>
                <li>SOC2 Type 2 certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication options</li>
                <li>Role-based access controls</li>
                <li>24/7 security monitoring</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of
                transmission over the Internet is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                6. Data Retention
              </h2>
              <p className="mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide our Services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records as required by law</li>
              </ul>
              <p className="mt-4">
                When you delete your account, we will delete or anonymize your
                personal information within 30 days, except where retention is
                required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                7. Your Rights and Choices
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Access:</strong> Request a
                  copy of your personal information.
                </li>
                <li>
                  <strong className="text-foreground">Correction:</strong>{" "}
                  Request correction of inaccurate information.
                </li>
                <li>
                  <strong className="text-foreground">Deletion:</strong> Request
                  deletion of your personal information.
                </li>
                <li>
                  <strong className="text-foreground">Portability:</strong>{" "}
                  Request a copy of your data in a portable format.
                </li>
                <li>
                  <strong className="text-foreground">Opt-Out:</strong> Opt out
                  of marketing communications at any time.
                </li>
                <li>
                  <strong className="text-foreground">Restriction:</strong>{" "}
                  Request restriction of processing in certain circumstances.
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at privacy@viewmarket.ai.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">We use the following types of cookies:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">
                    Essential Cookies:
                  </strong>{" "}
                  Required for the Services to function properly.
                </li>
                <li>
                  <strong className="text-foreground">
                    Analytics Cookies:
                  </strong>{" "}
                  Help us understand how visitors interact with our Services.
                </li>
                <li>
                  <strong className="text-foreground">
                    Preference Cookies:
                  </strong>{" "}
                  Remember your settings and preferences.
                </li>
                <li>
                  <strong className="text-foreground">
                    Marketing Cookies:
                  </strong>{" "}
                  Used to deliver relevant advertisements.
                </li>
              </ul>
              <p className="mt-4">
                You can manage cookie preferences through your browser settings.
                Note that disabling certain cookies may affect functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                9. International Data Transfers
              </h2>
              <p className="mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Standard Contractual Clauses approved by the EU Commission
                </li>
                <li>Data Processing Agreements with all service providers</li>
                <li>Compliance with applicable data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                10. GDPR Compliance (EU Users)
              </h2>
              <p className="mb-4">
                If you are in the European Economic Area (EEA), you have
                additional rights under GDPR:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Right to lodge a complaint with a supervisory authority</li>
                <li>Right to withdraw consent at any time</li>
                <li>
                  Right to object to processing based on legitimate interests
                </li>
              </ul>
              <p className="mt-4">
                Our legal bases for processing include: contract performance,
                legitimate interests, legal obligations, and consent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                11. CCPA Compliance (California Residents)
              </h2>
              <p className="mb-4">
                California residents have additional rights under CCPA:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Right to know what personal information is collected</li>
                <li>
                  Right to know whether personal information is sold or
                  disclosed
                </li>
                <li>Right to opt out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
              <p className="mt-4">
                We do not sell personal information as defined by CCPA.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                12. Children&apos;s Privacy
              </h2>
              <p>
                Our Services are not intended for children under 16 years of
                age. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                13. Third-Party Links
              </h2>
              <p>
                Our Services may contain links to third-party websites. We are
                not responsible for the privacy practices of these sites. We
                encourage you to review their privacy policies before providing
                any information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                14. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the new policy on this
                page and updating the &quot;Last updated&quot; date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                15. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Email:</strong> privacy@viewmarket.ai
                </li>
                <li>
                  <strong>Data Protection Officer:</strong> dpo@viewmarket.ai
                </li>
                <li>
                  <strong>Address:</strong> 123 Innovation Drive, San Francisco,
                  CA 94105, United States
                </li>
                <li>
                  <strong>Phone:</strong> +1 (800) VIEW-MKT
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
