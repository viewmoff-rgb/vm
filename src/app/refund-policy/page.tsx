"use client";
import React from "react";
import { CheckCircle, XCircle, AlertCircle, Clock, Mail } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleBar from "@/components/shared/TitleBar";

import FooterSection from "../FooterSection";

export default function RefundPolicyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <TitleBar />

      <div className="w-full px-6 pb-20 pt-32 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Refund Policy
            </span>
          </h1>
          <p className="text-lg text-foreground-light">
            Last updated: November 28, 2025
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-green-500/20 bg-green-500/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h3 className="text-lg font-semibold">14-Day Guarantee</h3>
            </div>
            <p className="text-sm text-foreground-light">
              Full refund within 14 days of your first subscription payment, no
              questions asked.
            </p>
          </Card>

          <Card className="border-yellow-500/20 bg-yellow-500/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <Clock className="h-6 w-6 text-yellow-500" />
              <h3 className="text-lg font-semibold">Pro-Rated Refunds</h3>
            </div>
            <p className="text-sm text-foreground-light">
              Annual subscribers may receive pro-rated refunds for unused months
              in certain cases.
            </p>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <Mail className="h-6 w-6 text-purple-500" />
              <h3 className="text-lg font-semibold">Easy Process</h3>
            </div>
            <p className="text-sm text-foreground-light">
              Simply email us or use the dashboard to request a refund. We
              process within 5-7 business days.
            </p>
          </Card>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground-light">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                1. Overview
              </h2>
              <p className="mb-4">
                At ViewMarket, we want you to be completely satisfied with our
                AI automation platform. We understand that sometimes a product
                may not meet your expectations, which is why we offer a fair and
                transparent refund policy.
              </p>
              <p>
                This policy outlines the circumstances under which refunds are
                available and the process for requesting one.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                2. 14-Day Money-Back Guarantee
              </h2>
              <p className="mb-4">
                We offer a{" "}
                <strong className="text-foreground">
                  14-day money-back guarantee
                </strong>{" "}
                for all new subscribers. If you&apos;re not satisfied with
                ViewMarket for any reason within the first 14 days of your
                initial subscription, you can request a full refund.
              </p>
              <div className="my-6 rounded-lg border border-border bg-card p-6">
                <h4 className="mb-3 font-semibold text-foreground">
                  Eligibility for 14-Day Guarantee:
                </h4>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Must be your first subscription to ViewMarket</li>
                  <li>
                    Request must be made within 14 days of the initial payment
                  </li>
                  <li>Applies to monthly and annual subscription plans</li>
                  <li>
                    No questions asked – simply request and we&apos;ll process
                    it
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                3. Refund Eligibility by Plan Type
              </h2>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">
                Monthly Subscriptions
              </h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <p>
                    Full refund within 14 days of first payment (new
                    subscribers)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                  <p>No refunds after the 14-day period for monthly plans</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <p>You can cancel anytime to prevent future charges</p>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Annual Subscriptions
              </h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <p>
                    Full refund within 14 days of first payment (new
                    subscribers)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <p>
                    Pro-rated refund available within first 3 months for
                    qualifying reasons
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                  <p>No refunds after 3 months of annual subscription</p>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Enterprise Plans
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <p>
                    Refunds handled on a case-by-case basis per your enterprise
                    agreement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <p>
                    Contact your dedicated account manager for refund requests
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                4. Non-Refundable Items
              </h2>
              <p className="mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Add-on services or one-time purchases (API credits, premium
                  integrations)
                </li>
                <li>Subscription renewals after the initial 14-day period</li>
                <li>Accounts terminated for Terms of Service violations</li>
                <li>Partial month usage after cancellation</li>
                <li>Setup fees or implementation services (if applicable)</li>
                <li>Third-party integration costs passed through to you</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                5. How to Request a Refund
              </h2>
              <p className="mb-4">
                To request a refund, you can use any of the following methods:
              </p>

              <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h4 className="mb-3 font-semibold text-foreground">
                    Option 1: Dashboard
                  </h4>
                  <ol className="list-decimal space-y-2 pl-6 text-sm">
                    <li>Log in to your ViewMarket account</li>
                    <li>Go to Settings → Billing</li>
                    <li>Click &quot;Request Refund&quot;</li>
                    <li>Fill out the refund request form</li>
                    <li>Submit and await confirmation</li>
                  </ol>
                </Card>

                <Card className="p-6">
                  <h4 className="mb-3 font-semibold text-foreground">
                    Option 2: Email
                  </h4>
                  <p className="mb-3 text-sm">Send an email to:</p>
                  <a
                    href="mailto:billing@viewmarket.ai"
                    className="text-purple-500 hover:underline"
                  >
                    billing@viewmarket.ai
                  </a>
                  <p className="mt-3 text-sm">Include:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm">
                    <li>Your account email</li>
                    <li>Subscription plan</li>
                    <li>Reason for refund (optional)</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                6. Refund Processing
              </h2>
              <p className="mb-4">Once your refund request is approved:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Processing Time:</strong>{" "}
                  5-7 business days for the refund to be processed
                </li>
                <li>
                  <strong className="text-foreground">
                    Credit Card Refunds:
                  </strong>{" "}
                  May take an additional 5-10 business days to appear on your
                  statement
                </li>
                <li>
                  <strong className="text-foreground">PayPal Refunds:</strong>{" "}
                  Typically processed within 3-5 business days
                </li>
                <li>
                  <strong className="text-foreground">Bank Transfers:</strong>{" "}
                  May take up to 14 business days depending on your bank
                </li>
              </ul>
              <p>
                You will receive an email confirmation once your refund has been
                processed.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                7. Account Access After Refund
              </h2>
              <p className="mb-4">Upon refund approval:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your paid subscription will be immediately cancelled</li>
                <li>You will be downgraded to our free tier (if available)</li>
                <li>Your workflows and data will be preserved for 30 days</li>
                <li>After 30 days, data may be permanently deleted</li>
                <li>You can export your data before the deletion period</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                8. Chargebacks
              </h2>
              <p className="mb-4">
                We encourage you to contact us directly for refund requests
                before initiating a chargeback with your bank or credit card
                company. Chargebacks:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>May result in immediate account suspension</li>
                <li>Take longer to resolve than direct refund requests</li>
                <li>May incur additional fees that could be passed to you</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                9. Special Circumstances
              </h2>
              <p className="mb-4">
                We may consider refunds outside our standard policy for:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>Extended service outages caused by ViewMarket</li>
                <li>Billing errors on our part</li>
                <li>Documented technical issues preventing service use</li>
                <li>
                  Extenuating personal circumstances (evaluated case-by-case)
                </li>
              </ul>
              <p>
                Please contact our support team to discuss special
                circumstances.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                10. Changes to This Policy
              </h2>
              <p>
                ViewMarket reserves the right to modify this refund policy at
                any time. Changes will be posted on this page with an updated
                revision date. The policy in effect at the time of your purchase
                will apply to that transaction.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about our refund policy or need assistance
                with a refund request:
              </p>
              <ul className="mb-6 list-none space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:billing@viewmarket.ai"
                    className="text-purple-500 hover:underline"
                  >
                    billing@viewmarket.ai
                  </a>
                </li>
                <li>
                  <strong>Support:</strong>{" "}
                  <a
                    href="mailto:support@viewmarket.ai"
                    className="text-purple-500 hover:underline"
                  >
                    support@viewmarket.ai
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +1 (800) VIEW-MKT
                </li>
              </ul>

              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Support
                </Button>
                <Button variant="outline">View Pricing</Button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
