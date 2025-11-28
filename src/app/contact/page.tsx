"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TitleBar from "@/components/shared/TitleBar";

import FooterSection from "../FooterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <TitleBar />

      <div className="w-full px-6 pb-20 pt-32 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground-light">
            Have questions about ViewMarket? We&apos;re here to help. Reach out
            to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll respond within 24 hours.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-purple-500/10 p-3">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Email Us</h3>
                  <p className="mb-2 text-foreground-light">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:support@viewmarket.ai"
                    className="text-purple-500 hover:underline"
                  >
                    support@viewmarket.ai
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <Phone className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Call Us</h3>
                  <p className="mb-2 text-foreground-light">
                    Mon-Fri from 9am to 6pm EST
                  </p>
                  <a
                    href="tel:+1-800-VIEW-MKT"
                    className="text-cyan-500 hover:underline"
                  >
                    +1 (800) VIEW-MKT
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-500/10 p-3">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Visit Us</h3>
                  <p className="mb-2 text-foreground-light">Our headquarters</p>
                  <p className="text-foreground-light">
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-500/10 p-3">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Business Hours</h3>
                  <p className="text-foreground-light">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                    <br />
                    Saturday: 10:00 AM - 4:00 PM EST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <MessageSquare className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Live Chat</h3>
                  <p className="mb-3 text-foreground-light">
                    Get instant help from our AI-powered support assistant,
                    available 24/7.
                  </p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
