import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import MessageIcon from "@/utils/icons/MessageIcon";
import TwitterIcon from "@/utils/icons/socialMedia/TwitterIcon";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
} from "@/utils/images";

const personList1 = [
  {
    img: person1,
    name: "@techfounder_mike",
    desc: "Working with @ViewMarket has been transformative for our business. We automated 80% of our manual workflows in just one weekend. The AI agents are incredibly smart and the no-code builder is a game changer!",
  },
  {
    img: person2,
    name: "@sarahops_cto",
    desc: "@ViewMarket is just 🤯 Our team went from spending 40 hours/week on repetitive tasks to just 5 hours. The AI automation is so intuitive, even our non-technical team members can build workflows!",
  },
];

const personList2 = [
  {
    img: person3,
    name: "@devmarketing_pro",
    desc: "I've been using @ViewMarket for our marketing automation and it's incredible. The AI agents handle lead scoring, email sequences, and social posting automatically.",
  },
  {
    img: person4,
    name: "@startupjane",
    desc: "Y'all @ViewMarket + AI agents is amazing! 🙌 Built our entire customer onboarding automation in 2 hours. Our conversion rate jumped 40%! 🤯🤯🤯",
  },
  {
    img: person5,
    name: "@ops_wizard",
    desc: "Thanks to @ViewMarket, we automated our entire invoice processing workflow. What used to take 3 days now happens in minutes. Absolutely game-changing!",
  },
];

const personList3 = [
  {
    img: person6,
    name: "@aibuilder_kate",
    desc: "The AI models in @ViewMarket are next level! We connected GPT-4 to our customer support and now handle 10x more tickets with better satisfaction scores. The future is here!",
  },
  {
    img: person7,
    name: "@enterprise_tom",
    desc: "Holy crap. @ViewMarket is absolutely incredible. Most powerful automation platform I've ever used. The 500+ integrations mean we can connect literally everything!",
  },
];

const personList4 = [
  {
    img: person8,
    name: "@scaleup_founder",
    desc: "Over the past month, we migrated all our Zapier workflows to @ViewMarket. The AI-powered automation is leagues ahead - smarter triggers, better error handling, and 60% cost savings!",
  },
  {
    img: person9,
    name: "@automation_guru",
    desc: "Using @ViewMarket I'm blown away by how intelligent the automation is. The AI agents actually learn from our data and improve over time. Enterprise-grade security too. Couldn't ask for more!",
  },
];

const CommunitySection: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-6 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px] ">
      <div className="flex flex-col gap-5 pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl text-white">Join the community</div>
          <CardDescription className="text-base text-foreground-light">
            Supported by a network of early advocates, contributors, and
            champions.
          </CardDescription>

          <div className="flex gap-5">
            <Button
              variant="outline"
              className="border-border bg-card p-3"
              size="sm"
            >
              Github discussions{" "}
              <div className="pl-2 text-foreground">
                <MessageIcon />
              </div>
            </Button>
            <Button
              variant="outline"
              className="border-border bg-card p-3"
              size="sm"
            >
              Discord{" "}
              <div className="pl-2 text-foreground">
                <MessageIcon />
              </div>
            </Button>
          </div>
        </div>
        <div className="relative columns-1 gap-4 overflow-hidden transition-all sm:columns-2 lg:columns-3 xl:columns-4">
          {/* <div className=" break-inside-avoid-column"> */}
          {personList1.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList2.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList3.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList4.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-5 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div> */}
          <div className="absolute bottom-0 left-0 z-10 h-[400px] w-full bg-gradient-to-t from-background via-[#1c1c1c00]"></div>
        </div>

        <div className="flex w-full justify-center py-20">
          <Button variant="outline" className="w-fit bg-card" size="sm">
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
