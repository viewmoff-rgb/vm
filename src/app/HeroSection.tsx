import { Bot, Workflow, Zap, Brain, Sparkles, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import BookIcon from "@/utils/icons/BookIcon";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 pb-14 pt-32 ">
      <div className=" pt-14 text-center">
        <div className="block bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-7xl text-transparent">
          Automate Everything
        </div>
        <div className="block bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#06B6D4] bg-clip-text text-7xl text-transparent md:ml-0">
          With AI Power
        </div>
      </div>
      <CardDescription className=" mx-auto w-full text-center text-lg text-card-foreground md:w-[60%]">
        ViewMarket is the next-generation AI automation platform. <br /> Build
        intelligent workflows, deploy AI agents, connect 500+ apps, and scale
        your business operations effortlessly.
      </CardDescription>
      <div className="flex gap-2 ">
        <Button
          variant="default"
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
        >
          Start Automating Free
        </Button>
        <Button variant="secondary" size="sm">
          <div className="my-auto pr-2 text-[#707070]">
            <BookIcon />
          </div>
          Watch Demo
        </Button>
      </div>
      <div className=" flex flex-col items-center gap-3 pt-7">
        <div className=" text-xs text-foreground-light">
          Trusted by 10,000+ businesses worldwide
        </div>
        <div className=" flex justify-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Bot className="h-5 w-5" />
            <span className="text-xs">AI Agents</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Workflow className="h-5 w-5" />
            <span className="text-xs">Workflows</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Zap className="h-5 w-5" />
            <span className="text-xs">Integrations</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Brain className="h-5 w-5" />
            <span className="text-xs">AI Models</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs">Smart Triggers</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-xs">Enterprise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
