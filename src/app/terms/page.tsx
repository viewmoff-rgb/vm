"use client";
import React from "react";

import TitleBar from "@/components/shared/TitleBar";

import FooterSection from "../FooterSection";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <TitleBar />

      <div className="w-full px-6 pb-20 pt-32 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Terms and Conditions
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
                1. Agreement to Terms
              </h2>
              <p className="mb-4">
                By accessing or using ViewMarket&apos;s AI automation platform
                and services (&quot;Services&quot;), you agree to be bound by
                these Terms and Conditions (&quot;Terms&quot;). If you disagree
                with any part of these terms, you may not access the Services.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access
                or use the Services. By using our Services, you represent that
                you are at least 18 years of age and have the legal capacity to
                enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                2. Description of Services
              </h2>
              <p className="mb-4">
                ViewMarket provides an AI-powered automation platform that
                enables users to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  Create and deploy AI agents for business process automation
                </li>
                <li>Build visual workflows using our no-code builder</li>
                <li>
                  Connect and integrate with 500+ third-party applications
                </li>
                <li>
                  Access AI models including GPT-4, Claude, and custom models
                </li>
                <li>Set up smart triggers and event-driven automations</li>
                <li>Manage team access and enterprise security features</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any
                aspect of the Services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                3. User Accounts
              </h2>
              <p className="mb-4">
                To access certain features of the Services, you must create an
                account. You agree to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>
                  Notify us immediately of any unauthorized access or security
                  breach
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these Terms or engage in fraudulent activity.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                4. Subscription and Billing
              </h2>
              <p className="mb-4">
                ViewMarket offers various subscription plans. By subscribing to
                a paid plan, you agree to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  Pay all applicable fees as described in your selected plan
                </li>
                <li>
                  Provide valid payment information and authorize recurring
                  charges
                </li>
                <li>
                  Accept that subscriptions automatically renew unless canceled
                </li>
                <li>
                  Understand that fees are non-refundable except as stated in
                  our Refund Policy
                </li>
              </ul>
              <p>
                We may change our pricing with 30 days&apos; notice. Continued
                use after price changes constitutes acceptance of new pricing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                5. Acceptable Use Policy
              </h2>
              <p className="mb-4">You agree not to use the Services to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  Violate any applicable laws, regulations, or third-party
                  rights
                </li>
                <li>Send spam, phishing attempts, or malicious content</li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users&apos; accounts
                </li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>
                  Reverse engineer, decompile, or disassemble any part of the
                  Services
                </li>
                <li>
                  Use the Services for any illegal, harmful, or fraudulent
                  purposes
                </li>
                <li>
                  Automate actions that violate third-party terms of service
                </li>
                <li>Exceed rate limits or abuse API access</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                6. Intellectual Property
              </h2>
              <p className="mb-4">
                The Services, including all content, features, and
                functionality, are owned by ViewMarket and protected by
                intellectual property laws. You retain ownership of any content
                you create using our Services.
              </p>
              <p className="mb-4">
                By using our Services, you grant ViewMarket a limited license to
                use, store, and process your content solely to provide and
                improve the Services.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of
                our Services without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                7. Data Privacy and Security
              </h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy. By using
                the Services, you consent to our data practices as described
                therein.
              </p>
              <p className="mb-4">
                ViewMarket implements industry-standard security measures
                including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>SOC2 Type 2 certification</li>
                <li>GDPR compliance</li>
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                8. Third-Party Integrations
              </h2>
              <p className="mb-4">
                The Services allow integration with third-party applications.
                Your use of third-party services is subject to their respective
                terms and privacy policies. ViewMarket is not responsible for:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  The availability or functionality of third-party services
                </li>
                <li>
                  Any data shared with or processed by third-party services
                </li>
                <li>
                  Changes to third-party APIs that may affect integrations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                9. Limitation of Liability
              </h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIEWMARKET SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Any damages arising from your use of the Services</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount paid by you to
                ViewMarket in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                10. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                IMPLIED. VIEWMARKET DISCLAIMS ALL WARRANTIES INCLUDING:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or reliability of any content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless ViewMarket and
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of the
                Services, violation of these Terms, or infringement of any
                third-party rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                12. Termination
              </h2>
              <p className="mb-4">
                Either party may terminate this agreement at any time. Upon
                termination:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your access to the Services will be immediately revoked</li>
                <li>You may request export of your data within 30 days</li>
                <li>We may delete your data after the 30-day period</li>
                <li>
                  Provisions that should survive termination will remain in
                  effect
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, United States, without
                regard to its conflict of law provisions. Any disputes shall be
                resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                14. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of material changes via email or through the
                Services. Continued use after changes constitutes acceptance of
                the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                15. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Email:</strong> legal@viewmarket.ai
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
