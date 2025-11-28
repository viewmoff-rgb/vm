/* eslint-disable @typescript-eslint/member-delimiter-style */
import "./globals.css";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import {
  Bot,
  Workflow,
  Zap,
  Brain,
  Sparkles,
  Shield,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CheckIcon from "@/utils/icons/CheckIcon";
import { cn } from "@/lib/utils";
import ImgPlaceHolderIcon from "@/utils/icons/ImgPlaceHolderIcon";
import {
  database,
  edgefunction,
  realtimeImage,
  supabasePosgress,
  vectorImage,
} from "@/utils/images";

function FeatureSection() {
  const ListItem = ({
    className,
    children,
    ...props
  }: {
    className?: string;
    children?: ReactNode;
    props?: HTMLAttributes<HTMLElement>;
  }) => (
    <li
      className={cn(
        "flex gap-2 text-sm font-normal leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden px-6 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px] ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-4 xl:gap-3 2xl:gap-6">
        <Card className="relative col-span-6 flex h-[400px] w-full flex-col justify-between overflow-hidden lg:col-span-12 lg:flex-row xl:col-span-6">
          <div className="flex h-fit flex-col items-center justify-between  gap-5 p-7 lg:h-full  lg:w-[50%] lg:items-start ">
            <div className=" flex flex-col items-center gap-5 lg:items-start">
              <Button variant="outline" size="icon" className=" border-none">
                <Bot className="h-5 w-5 text-purple-500" />
              </Button>

              <CardHeader className="p-0">
                <CardTitle className=" text-center lg:text-start">
                  AI Agents
                </CardTitle>
                <CardDescription className="text-center lg:text-start">
                  Deploy intelligent AI agents that learn, adapt, and automate
                  complex business processes autonomously.
                </CardDescription>
              </CardHeader>
            </div>
            <ul className="hidden flex-col gap-1 pb-5 pt-10 lg:block">
              <ListItem>
                <CheckIcon />
                GPT-4 & Claude powered
              </ListItem>
              <ListItem>
                <CheckIcon />
                Custom training support
              </ListItem>
              <ListItem>
                <CheckIcon />
                24/7 autonomous operation
              </ListItem>
            </ul>
          </div>
          <div className="w-full lg:relative lg:w-[50%]">
            <figure
              className="inset-0 z-0  lg:absolute"
              role="img"
              aria-label="ViewMarket AI Agents visual composition"
            >
              <span className="absolute left-0 right-0 top-24 my-auto flex h-full w-full items-end justify-center md:top-24 lg:bottom-0 lg:left-auto lg:top-0 lg:aspect-square lg:w-auto lg:items-center lg:justify-end">
                <Image
                  src={database}
                  alt=""
                  className="absolute inset-0 h-full w-full text-transparent"
                />
                <Image
                  src={supabasePosgress}
                  alt=""
                  className="absolute z-10 m-auto h-full w-full opacity-0 transition-opacity will-change-transform group-hover:opacity-100 "
                />
              </span>
            </figure>
          </div>
        </Card>
        <Card className="group col-span-6 flex h-[400px] flex-col items-center justify-between gap-5  overflow-clip pt-7 xl:col-span-3">
          <div className=" flex flex-col items-center gap-5">
            {" "}
            <Button variant="outline" size="icon" className=" border-none">
              <Workflow className="h-5 w-5 text-cyan-500" />
            </Button>
            <CardHeader className="px-5 py-0 text-center  ">
              <CardTitle>Workflow Builder</CardTitle>
              <CardDescription className="">
                Design powerful automation workflows with our visual
                drag-and-drop builder. No coding required.
              </CardDescription>
            </CardHeader>
          </div>
          <div className="group mb-[-10px] flex w-full justify-between gap-4">
            <div className="ml-[-10px] flex flex-1 flex-col gap-3 ">
              <div className="w-full rounded-r-lg border border-input bg-background px-4 py-4 text-sm text-input  ">
                @gmail.com
              </div>
              <div className="w-full rounded-r-lg border border-input bg-background px-4 py-4 text-sm text-input group-hover:border-[#3FCF8E] group-hover:text-[#3FCF8E]">
                ccess Required
              </div>
              <div className="w-full rounded-r-lg border border-input bg-background px-4 py-4 text-sm text-input ">
                7@gmail.com
              </div>
            </div>
            <div className="mr-[-10px] flex flex-1 flex-col gap-3">
              <div className="w-full rounded-l-lg border border-input bg-background px-4 py-4 text-sm text-input ">
                alex160198
              </div>
              <div className="w-full whitespace-nowrap rounded-l-lg border border-input bg-background px-4 py-4 text-sm text-input group-hover:border-[#3FCF8E] group-hover:text-[#3FCF8E]">
                Access Required
              </div>
              <div className="w-full rounded-l-lg border border-input bg-background px-4 py-4 text-sm text-input ">
                mememaster
              </div>
            </div>
          </div>
        </Card>
        <Card className="group relative col-span-6 flex h-[400px] flex-col items-center gap-5 overflow-clip pt-7 xl:col-span-3">
          <Button variant="outline" size="icon" className=" border-none">
            <Zap className="h-5 w-5 text-yellow-500" />
          </Button>
          <CardHeader className="z-10 px-5 py-0 text-center  ">
            <CardTitle>500+ Integrations</CardTitle>

            <CardDescription className="">
              Connect with Slack, Salesforce, HubSpot, Google, and 500+ more
              apps. ViewMarket integrations ecosystem
            </CardDescription>
          </CardHeader>
          <div className="absolute bottom-0 z-0 h-full w-full">
            {/* <Image src={edgefunction} alt="" className="" /> */}
            <figure
              className="absolute inset-0 z-0  w-full"
              role="img"
              aria-label="ViewMarket integrations visual composition"
            >
              <span className="absolute inset-0 object-cover object-center ">
                <Image
                  src={edgefunction}
                  alt=""
                  className="absolute inset-0 h-full w-full text-transparent"
                />
              </span>
            </figure>
          </div>
        </Card>
        <Card className="group col-span-6 flex h-[400px] flex-col items-center gap-5  overflow-clip px-7 pt-7 xl:col-span-3">
          <Button variant="outline" size="icon" className=" border-none">
            <Brain className="h-5 w-5 text-pink-500" />
          </Button>
          <CardHeader className="p-0 text-center ">
            <CardTitle>AI Models</CardTitle>
            <CardDescription className="">
              Access GPT-4, Claude, Gemini, and custom ML models for any
              automation task.
            </CardDescription>
          </CardHeader>
          <div className="relative  overflow-x-hidden">
            <div className="relative left-0 z-10 flex h-full w-auto animate-marquee items-end pb-2 transition-transform will-change-transform paused group-hover:running">
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-auto animate-marquee2 items-end pb-2 transition-transform will-change-transform paused group-hover:running">
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-2 md:gap-2">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-border bg-background hover:border-brand md:h-[62px] md:w-[62px] md:min-w-[62px]">
                  <ImgPlaceHolderIcon color="hsl(var(--muted-foreground))" />
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className=" group relative col-span-6  flex h-[400px] flex-col items-center justify-start gap-5 overflow-clip p-7 xl:col-span-3">
          <Image
            src={realtimeImage}
            alt=""
            className=" absolute bottom-0 z-0 w-full "
          />
          <div className=" group z-10 flex h-fit flex-col items-center gap-5 overflow-clip  ">
            <Button variant="outline" size="icon" className=" border-none">
              <Sparkles className="h-5 w-5 text-blue-500" />
            </Button>
            <CardHeader className="p-0 text-center ">
              <CardTitle>Smart Triggers</CardTitle>
              <CardDescription className="">
                Set up intelligent triggers that respond to events, schedules,
                and conditions in real-time.
              </CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Card className="relative col-span-6 flex h-[400px] w-full justify-between lg:col-span-12 xl:col-span-6">
          <div className="flex w-full flex-col  justify-between gap-5 p-7 lg:w-[50%]">
            <div className=" flex flex-col items-center gap-5 lg:items-start">
              <Button variant="outline" size="icon" className=" border-none">
                <Shield className="h-5 w-5 text-green-500" />
              </Button>

              <CardHeader className="p-0">
                <CardTitle className="text-center lg:text-start">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-center lg:max-w-[50%] lg:text-start">
                  Bank-grade security with SOC2, GDPR compliance, and advanced
                  encryption for all your automation data.
                </CardDescription>
              </CardHeader>
            </div>
            <ul className="hidden flex-col gap-2 pb-5 pt-10 lg:flex ">
              <ListItem>
                <Globe className=" h-4 w-4" />
                SOC2 Certified
              </ListItem>
              <ListItem>
                <Globe className=" h-4 w-4" />
                GDPR Compliant
              </ListItem>
            </ul>
          </div>
          <div className="lg:relative lg:w-[50%]">
            <figure
              className=" inset-0 z-0  lg:absolute"
              role="img"
              aria-label="ViewMarket Enterprise Security visual composition"
            >
              <span className="absolute left-0 right-0 top-24 my-auto flex h-full w-full items-end justify-center md:top-24 lg:bottom-0 lg:left-auto lg:top-0 lg:aspect-square lg:w-auto lg:items-center lg:justify-end">
                <Image
                  src={vectorImage}
                  alt=""
                  className="  absolute inset-0 h-full w-full text-transparent"
                />
              </span>
            </figure>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FeatureSection;
