import React from "react";
import { Button } from "../../components/ui/button";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { StepByStepGuideSection } from "./sections/StepByStepGuideSection/StepByStepGuideSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";
import AchievementsSection from "./sections/AchievementsSection/AchievementsSection";

export const LandingPage = (): JSX.Element => {

  const navItems = [
    { label: "Features", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "About", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  // Stats data
  const statsData = [
    {
      title: "250+ Championships Organized",
      description:
        "Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.",
      vectorPosition: "top-14 left-[159px]",
    },
    {
      title: "3,000+ Athletes Empowered",
      description:
        "Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!",
      vectorPosition: "top-[118px] left-0",
    },
    {
      title: "100,000+ Events Logged",
      description:
        "Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!",
      vectorPosition: "top-[60px] left-0",
    },
  ];

  return (
    <div className="relative w-full h-full  overflow-x-hidden ">
      {/* Header/Navigation */}
      <div className=" bg-[url(/screenshot-2024-06-14-at-10-21-36-1.png)] bg-top bg-contain   w-full">
        <header className="w-full flex justify-center px-[60px]  pt-[48px] ">
          <div className="flex w-full max-w-full px-[124px] py-3 items-center justify-between bg-white rounded-[111px]">
            <div className="[font-family:'Alata',Helvetica] font-normal text-[#333f47] text-[28px] leading-6">
              YuGa
            </div>

            <nav className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-text font-[number:var(--text-font-weight)] text-[#333f47] text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <Button className="h-[48px] bg-[#222222] rounded-[444px] border border-solid border-[#dfe3e8] shadow-shadow">
                <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-sm leading-5 ">
                  Talk To Sales
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-[48px] rounded-[444px] border border-solid border-[#333f47] shadow-drip-2"
              >
                <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-[#333f47] text-sm leading-5">
                  Get Started For Free
                </span>
              </Button>
            </div>
          </div>
        </header>

        {/* Step By Step Guide Section */}
        <section className="w-full ">
          <section className="relative w-full">
            {/* Hero background with gradient overlay */}
            <div className="relative w-full h-[1006px]">
              <div className="w-full h-[1006px] ">
                <div className="relative h-[839px] top-[167px] " />
              </div>

              {/* Hero content */}
              <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center max-w-[1234px] w-full">
                <div className="flex flex-col items-center gap-4 w-full"> {/* Reduced gap from 6 to 4 */}
                  <h1 className="font-['Alata',Helvetica] font-normal text-white text-[80px] text-center tracking-[-1.00px] leading-[84px]">
                    The World&#39;s First Yogasana Championship Software
                  </h1>

                  <p className="w-[770px] font-['Rethink_Sans',Helvetica] font-medium text-[#f4f5f7] text-xl leading-8 text-center">
                    Experience the future of competition management with Yogasana
                    Bharat—a cutting-edge platform designed to streamline every aspect
                    of your championship.
                  </p>

                  <img
                    className="relative -top-[110px] left-[260px] w-[363px] h-[30px] mt-[8px]"
                    alt="Vector"
                    src="/vector-6.svg"
                  />
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-[16px] -mt-4"> {/* Reduced gap and added -mt-4 */}
                  <Button className="h-[50px] px-5 py-4 bg-white text-[#333f47] rounded-[55px] shadow-shadow hover:bg-gray-100">
                    <span className="font-h2-semi-bold font-[number:var(--h2-semi-bold-font-weight)] text-[length:var(--h2-semi-bold-font-size)] tracking-[var(--h2-semi-bold-letter-spacing)] leading-[var(--h2-semi-bold-line-height)]">
                      Get start for free
                    </span>
                  </Button>
                </div>
              </div>

            </div>


          </section>
        </section>
      </div>
      {/* Software screenshot */}
      <div className="relative   ">
        <img
          className="relative w-[1361px] h-[900px] mx-auto -mt-[500px]"
          alt="State district management interface"
          src="/state-district-mng--1.png"
        />

        {/* Gradient overlay for the bottom part */}
        <div className="absolute w-full h-[864px] top-[83px] bg-gradient-to-b from-transparent  to-white" />
      </div>
      {/* Achievements  */}
      <section className="relative mt-12">
        <AchievementsSection />
      </section>


      {/* User Profile Section */}
      <section className="w-full mt-4">
        <UserProfileSection />
      </section>

      {/* Testimonials Section */}
      <section className="w-full mt-16">
        <TestimonialsSection />
      </section>

      {/* Features Overview Section */}
      <section className="w-full mt-16">
        <FeaturesOverviewSection />
      </section>
    </div>
  );
};
