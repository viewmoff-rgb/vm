/* eslint-disable @typescript-eslint/member-delimiter-style */
import CheckIcon from "@/utils/icons/CheckIcon";
import DiscordIcon from "@/utils/icons/socialMedia/DiscordIcon";
import GithubIcon from "@/utils/icons/socialMedia/GithubIcon";
import TwitterIcon from "@/utils/icons/socialMedia/TwitterIcon";
import YoutubeIcon from "@/utils/icons/socialMedia/YoutubeIcon";
import ViewMarketLogo from "@/utils/icons/ViewMarketLogo";

const menuItems = [
  {
    title: "Product",
    items: [
      { name: "AI Agents", href: "#" },
      { name: "Workflow Builder", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "AI Models", href: "#" },
      { name: "Smart Triggers", href: "#" },
      { name: "Enterprise", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "What's New", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Support", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Become a Partner", href: "#" },
      { name: "App Directory", href: "#" },
      { name: "Experts", href: "#" },
      { name: "Brand Assets", href: "#" },
      { name: "Security & Compliance", href: "#" },
    ],
  },
  {
    title: "Developers",
    items: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Tutorials", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Blog", href: "#" },
      { name: "Customer Stories", href: "#" },
      { name: "Careers", href: "#" },
      { name: "About Us", href: "/about" },
      { name: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Settings", href: "#" },
    ],
  },
];
const FooterSection = () => {
  return (
    <div className=" w-full bg-popover">
      <div className=" flex w-full flex-col gap-5 ">
        <div className="mx-auto flex w-full flex-col justify-between gap-10 px-6 py-10 text-sm sm:flex-row md:max-w-[768px] md:px-10 lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px] ">
          <div className="">
            We protect your data.
            <span className="text-brand"> More on Security</span>
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-row md:items-center md:gap-8">
            <div className="flex gap-3 text-sm font-normal leading-none tracking-tight">
              <CheckIcon />
              SOC2 Type 2{" "}
              <span className="text-foreground-light">Certified</span>
            </div>
            <div className="flex gap-3 text-sm font-normal leading-none tracking-tight">
              <CheckIcon />
              HIPAA <span className="text-foreground-light">Certified</span>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="sm:py-18 container relative mx-auto w-full px-6 py-24 md:max-w-[768px] md:py-24 lg:max-w-[1024px] lg:px-16 lg:py-24 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <ViewMarketLogo size="md" />
              <div className="flex items-center gap-5  text-muted-foreground">
                <a
                  className=" scale-110 hover:text-brand "
                  type="button"
                  href="https://x.com/KrinalSojitra"
                >
                  <TwitterIcon />
                </a>
                <a
                  className=" scale-110 hover:text-brand "
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <GithubIcon />
                </a>
                <a
                  className=""
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <DiscordIcon />
                </a>
                <a
                  className=""
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
            <nav className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                {menuItems?.map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col gap-4 text-card-foreground"
                  >
                    <h2>{section.title}</h2>
                    <ul className="flex flex-col gap-2">
                      {section.items.map((item) => (
                        <li
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                          key={item.name}
                        >
                          <a href={item.href}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          <div className="mt-32 w-full ">
            <div className=" border-t border-border pt-8 text-xs text-muted-foreground ">
              © ViewMarket Inc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
