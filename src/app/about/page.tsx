"use client";
import React from "react";
import {
  Users,
  Target,
  Zap,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import TitleBar from "@/components/shared/TitleBar";

import FooterSection from "../FooterSection";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    description:
      "Former VP of Engineering at a Fortune 500 tech company with 15+ years in AI and automation.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    description:
      "PhD in Machine Learning from MIT. Previously led AI research at a major tech giant.",
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    description:
      "10+ years building enterprise SaaS products. Passionate about user-centric design.",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    description:
      "Expert in distributed systems and cloud architecture. Former principal engineer at AWS.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with AI and automation technology.",
  },
  {
    icon: Users,
    title: "Customer Obsession",
    description:
      "Every decision we make starts with how it will benefit our customers and their success.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We maintain the highest standards of security and privacy to protect your data.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "We believe in democratizing AI, making powerful automation accessible to everyone.",
  },
];

const milestones = [
  { year: "2021", event: "ViewMarket founded in San Francisco" },
  { year: "2022", event: "Launched beta with 1,000+ early adopters" },
  { year: "2023", event: "Series A funding, expanded to 50+ team members" },
  { year: "2024", event: "Reached 100,000+ active users worldwide" },
  {
    year: "2025",
    event: "Launched enterprise platform with 500+ integrations",
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <TitleBar />

      <div className="w-full px-6 pb-20 pt-32 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              About ViewMarket
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground-light">
            We&apos;re on a mission to democratize AI automation and empower
            businesses of all sizes to work smarter, not harder.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-purple-500" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="mb-4 text-foreground-light">
                At ViewMarket, we believe that the power of AI should be
                accessible to everyone. Our mission is to eliminate the
                complexity of automation and enable businesses to focus on what
                truly matters – growth and innovation.
              </p>
              <p className="text-foreground-light">
                We&apos;re building the future of work, where intelligent
                automation handles the repetitive tasks while humans focus on
                creative and strategic initiatives.
              </p>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Zap className="h-8 w-8 text-cyan-500" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="mb-4 text-foreground-light">
                We envision a world where every business, regardless of size or
                technical expertise, can harness the power of AI to automate
                their workflows and scale their operations effortlessly.
              </p>
              <p className="text-foreground-light">
                By 2030, we aim to power over 1 million businesses worldwide,
                saving billions of hours through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <Card className="p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-purple-500">100K+</p>
              <p className="text-foreground-light">Active Users</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-cyan-500">500+</p>
              <p className="text-foreground-light">Integrations</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-green-500">50M+</p>
              <p className="text-foreground-light">Tasks Automated</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-yellow-500">99.9%</p>
              <p className="text-foreground-light">Uptime</p>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-foreground-light">
              These principles guide everything we do at ViewMarket.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                  <value.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-foreground-light">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-foreground-light">
              From a small startup to a global platform, here&apos;s how we got
              here.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block p-4">
                      <p className="mb-1 text-lg font-bold text-purple-500">
                        {milestone.year}
                      </p>
                      <p className="text-foreground-light">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="relative z-10 hidden h-4 w-4 rounded-full bg-purple-500 md:block" />
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-foreground-light">
              Meet the people driving ViewMarket&apos;s vision forward.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm text-purple-500">{member.role}</p>
                <p className="text-sm text-foreground-light">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-20">
          <Card className="p-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <Globe className="h-8 w-8 text-cyan-500" />
                  <h2 className="text-3xl font-bold">Global Presence</h2>
                </div>
                <p className="mb-4 text-foreground-light">
                  ViewMarket serves customers in over 120 countries, with
                  offices in San Francisco, London, Singapore, and Sydney. Our
                  distributed team works around the clock to ensure our platform
                  is always available and our customers are always supported.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">SOC2 Type 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">ISO 27001 Certified</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-purple-500/10 p-4 text-center">
                  <p className="text-2xl font-bold">120+</p>
                  <p className="text-sm text-foreground-light">Countries</p>
                </Card>
                <Card className="bg-cyan-500/10 p-4 text-center">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-foreground-light">Offices</p>
                </Card>
                <Card className="bg-green-500/10 p-4 text-center">
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-sm text-foreground-light">Team Members</p>
                </Card>
                <Card className="bg-yellow-500/10 p-4 text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-foreground-light">Support</p>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-12">
            <h2 className="mb-4 text-3xl font-bold">Join Our Journey</h2>
            <p className="mx-auto mb-8 max-w-2xl text-foreground-light">
              Whether you&apos;re looking to automate your business or join our
              team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-medium text-white hover:from-purple-700 hover:to-cyan-600"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium hover:bg-card"
              >
                Explore Platform
              </a>
            </div>
          </Card>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
