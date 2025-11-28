/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  Bot,
  Workflow,
  Zap,
  Brain,
  Sparkles,
  Shield,
} from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { structure1, structure2, structure3 } from "@/utils/images";
import GithubIcon from "@/utils/icons/socialMedia/GithubIcon";
import ViewMarketLogo from "@/utils/icons/ViewMarketLogo";

import { Button } from "../ui/button";

import MobileMenu from "./MobileMenu";

const list = [
  {
    icon: structure1,
    desc: "TechCorp automates 80% of manual workflows with ViewMarket AI, saving 200+ hours monthly",
  },
  {
    icon: structure2,
    desc: "StartupXYZ scales customer support with AI agents, handling 10x more requests",
  },
  {
    icon: structure3,
    desc: "Enterprise Inc. reduces operational costs by 60% using ViewMarket automation",
  },
];
const menuItems = [
  {
    icon: <Bot className="h-5 w-5 text-purple-500" />,
    title: "AI Agents",
    description: "Intelligent automation assistants",
  },
  {
    icon: <Workflow className="h-5 w-5 text-cyan-500" />,
    title: "Workflow Builder",
    description: "Visual automation designer",
  },
  {
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    title: "Integrations",
    description: "Connect 500+ apps seamlessly",
  },
  {
    icon: <Brain className="h-5 w-5 text-pink-500" />,
    title: "AI Models",
    description: "GPT-4, Claude & custom models",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-blue-500" />,
    title: "Smart Triggers",
    description: "Event-driven automation",
  },
  {
    icon: <Shield className="h-5 w-5 text-green-500" />,
    title: "Enterprise Security",
    description: "SOC2 & GDPR compliant",
  },
];

const Developers = ["Documentation", "Integrations", "Changelog", "Support"];
const resources = [
  "Open Source",
  "GitHub Discussions",
  "Become a Partner",
  "Careers",
];
const blog = [
  {
    title: "Building AI Agents That Actually Work",
    desc: "Learn how to create reliable AI automation workflows that handle complex business processes.",
  },
  {
    title: "The Future of No-Code AI Automation",
    desc: "Discover how ViewMarket is revolutionizing business automation with intelligent AI agents.",
  },
];
const CustomerStoryItem = ({ logo, title }: any) => (
  <div className="group flex items-start">
    <div className="  mr-3 flex  aspect-video w-40 flex-shrink-0  items-center justify-center overflow-hidden rounded-md border border-border bg-popover p-5 group-hover:border-foreground-light">
      {typeof logo === "object" ? <Image src={logo} alt={title} /> : logo}
    </div>

    <div className="flex h-full items-center self-center text-sm font-medium text-foreground-light group-hover:text-foreground">
      {title}
    </div>
  </div>
);

const ComparisonLink = ({ text }: any) => (
  <a href="#" className="block text-sm text-foreground-light hover:underline">
    {text}
  </a>
);

const TitleBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed z-20 h-16 w-full border-b border-border bg-background ">
      <nav className="mx-auto h-full w-full px-6 sm:px-0 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <div className="mx-auto flex h-full w-full items-center justify-between lg:px-16 xl:px-20">
          <div className=" flex gap-8 ">
            <a
              className="focus-visible:ring-foreground-lighter focus-visible:ring-offset-background-alternative block  focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
              type="button"
              href="/"
            >
              <ViewMarketLogo size="sm" />
            </a>

            <div className="hidden lg:flex">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    Product
                    <div className="pt-0.5 ">
                      <ChevronDown size={12} />
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className=" max-w-[900px]">
                    <div className="flex">
                      <div className="flex min-w-[40%] flex-none flex-col justify-between p-10">
                        {menuItems.map((item) => (
                          <div className="flex items-center">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-card  ">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <div className=" text-sm text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex-grow  bg-card p-10 ">
                        <div className="mb-6">
                          <h3 className="mb-4 text-sm font-semibold text-gray-500">
                            CUSTOMER STORIES
                          </h3>
                          <div className="space-y-4">
                            {list.map((item) => {
                              return (
                                <CustomerStoryItem
                                  logo={item.icon}
                                  title={item.desc}
                                />
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-4 text-sm font-semibold text-gray-500">
                            COMPARE VIEWMARKET
                          </h3>
                          <div className="space-y-2">
                            <ComparisonLink text="ViewMarket vs Zapier" />
                            <ComparisonLink text="ViewMarket vs Make" />
                            <ComparisonLink text="ViewMarket vs n8n" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </MenubarContent>
                  {/* <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent> */}
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    Developers
                    <div className="pt-0.5 ">
                      <ChevronDown size={12} />
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className=" max-w-[900px]">
                    <div className=" mx-auto flex  w-full bg-card ">
                      <div className=" w-[35%] bg-background p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          DEVELOPERS
                        </h3>
                        {Developers.map((data, index) => {
                          return (
                            <div>
                              <a
                                key={index}
                                href="#"
                                className="hover:text-white"
                              >
                                {data}
                              </a>
                            </div>
                          );
                        })}
                      </div>

                      <div className="w-[35%] bg-background p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          RESOURCES
                        </h3>
                        {resources.map((data, index) => {
                          return (
                            <div>
                              <a
                                key={index}
                                href="#"
                                className="hover:text-white"
                              >
                                {data}
                              </a>
                            </div>
                          );
                        })}
                      </div>

                      <div className=" space-y-5 bg-card p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          BLOG
                        </h3>
                        {blog.map((data, index) => (
                          <div key={index}>
                            <a href="#" className="hover:text-white">
                              <h3 className="font-medium">{data.title} </h3>
                              <p className="text-sm text-gray-400">
                                {data.desc}
                              </p>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Pricing</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Docs</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Blog</MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              className=" flex items-center pr-2 text-xs text-muted-foreground "
              type="button"
              href="https://github.com/KrinalSojitra21"
            >
              <div className="pr-2 text-foreground">
                <GithubIcon />
              </div>
              62.8k
            </a>
            <Button size="xs" variant="outline">
              Sign in
            </Button>
            <Button size="xs">Start Automating</Button>
            {/* <ModeToggle /> */}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-brand lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </div>
  );
};

export default TitleBar;
