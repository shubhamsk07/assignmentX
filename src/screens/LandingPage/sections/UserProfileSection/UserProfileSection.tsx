import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

// Define step data for reusability
const steps = [
  {
    number: "1",
    badgeColor: "bg-[#e6e6ff]",
    badgeTextColor: "text-[#6666ff]",
    title: "Let your customers share what they love about you",
    description:
      "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
    features: [
      "Create a form in 30 seconds. Share or embed it anywhere",
      "Collect video adn texdt testimonials",
      "Import testimonials from 20+ social & review platforms",
    ],
    buttonText: "Create Your Organization",
    buttonVariant: "default",
    gradientBg:
      "bg-gradient-to-br from-[rgba(2,162,254,1)] to-[rgba(182,234,255,1)]",
  },
  {
    number: "2",
    badgeColor: "bg-[#e6e6ff]",
    badgeTextColor: "text-[#6666ff]",
    title: "Save, manage, group, tag and\nsearch your testimonials",
    description:
      "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
    features: [
      "Create a form in 30 seconds. Share or embed it anywhere",
      "Collect video adn texdt testimonials",
      "Import testimonials from 20+ social & review platforms",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "default",
    gradientBg:
      "bg-gradient-to-br from-[rgba(255,203,220,1)] to-[rgba(199,44,255,1)]",
  },
  {
    number: "3",
    badgeColor: "bg-[#badcfb80]",
    badgeTextColor: "text-[#0f54fa]",
    title: "Let your customers share what they love about you",
    description:
      "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
    features: [
      "Create a form in 30 seconds. Share or embed it anywhere",
      "Collect video adn texdt testimonials",
      "Import testimonials from 20+ social & review platforms",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "default",
    gradientBg:
      "bg-gradient-to-br from-[rgba(53,231,234,1)] to-[rgba(244,255,230,1)]",
  },
  {
    number: "4",
    badgeColor: "bg-[#e6e6ff]",
    badgeTextColor: "text-[#6666ff]",
    title: "Save, manage, group, tag and\nsearch your testimonials",
    description:
      "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
    features: [
      "Create a form in 30 seconds. Share or embed it anywhere",
      "Collect video adn texdt testimonials",
      "Import testimonials from 20+ social & review platforms",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "default",
    gradientBg:
      "bg-gradient-to-br from-[rgba(102,102,255,1)] to-[rgba(235,235,255,1)]",
  },
];

// Define pricing plan data
const pricingPlans = [
  {
    title: "Starter",
    subtitle: "For Individuals",
    price: "$599",
    period: "/ Per Yearly",
    description:
      "Affordable option for small teams seeking essential project management.",
    iconUrl: "/uaaxrcvtyxuj4rmcqoy6bkkhmn4-png.png",
    features: [
      { name: "Task Management", included: true },
      { name: "Real-time Collaboration", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "Advanced Analytics", included: false },
      { name: "Resource Allocation", included: false },
      { name: "Mobile Accessibility", included: false },
    ],
  },
  {
    title: "Pro",
    subtitle: "For Startups",
    price: "$999",
    period: "/ Per Yearly",
    description: "Comprehensive package tailored for growing businesses.",
    iconUrl: "/xglpet6hihh5wqrlcupfaamlnjc-png.png",
    features: [
      { name: "Task Management", included: true },
      { name: "Real-time Collaboration", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Resource Allocation", included: false },
      { name: "Mobile Accessibility", included: false },
    ],
    highlight: true,
    discountCode: 'Use "FIRST100" code for 60% Discount',
  },
  {
    title: "Enterprise",
    subtitle: "For Organizations",
    price: "$1,999",
    period: "/ Per Yearly",
    description:
      "Customized solutions for large enterprises with robust features.",
    iconUrl: "/dzcalyfgx1pdueykasa9kbl0ni-png.png",
    features: [
      { name: "Task Management", included: true },
      { name: "Real-time Collaboration", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Resource Allocation", included: true },
      { name: "Mobile Accessibility", included: true },
    ],
  },
];

// Define testimonial data
const testimonials = [
  {
    text: "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
    author: "Mahmud Tamvir",
    role: "Co-Founder of  Huge icons",
    avatar: "/ellipse-45-5.png",
  },
  {
    text: "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
    author: "Mahmud Tamvir",
    role: "Co-Founder of  Huge icons",
    avatar: "/ellipse-45-5.png",
  },
];

export const UserProfileSection = (): JSX.Element => {
  const [selected, setSelected] = useState("monthly");
  return (
    <section className="flex flex-col w-full items-center gap-40 py-20">
      <div className="flex flex-col w-full max-w-[1320px] items-center gap-20">
        <div className="flex flex-col w-full items-center gap-14">
          <h2 className="text-[64px] text-center leading-[60px] font-normal [font-family:'Alata',Helvetica] text-black">
            A Step-by-Step Guide
          </h2>

          <div className="flex flex-col items-start gap-20 w-full">
            {steps.map((step, index) => (
              <div key={index} className="w-full flex items-center gap-[78px]">
                {index % 2 !== 0 && (
                  <div
                    className={`w-[600px] h-[600px] rounded-[20px] overflow-hidden ${step.gradientBg}`}
                  >
                    <div className="relative w-[520px] h-[520px] mt-10 ml-10">
                      {index === 1 ? (
                        <div className="w-[520px] h-[519px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d5dae8]">
                          <div className="w-[369px] h-[35px] absolute top-[78px] left-[114px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[369px] h-[35px] absolute top-[38px] left-[114px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[47px] h-[441px] absolute top-[38px] left-10 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[361px] h-[332px] absolute top-[147px] left-[122px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#dde3f1]">
                            <div className="w-[311px] h-[61px] absolute top-[122px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[100px] h-[27px] absolute top-[25px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[100px] h-[27px] absolute top-16 left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[99px] h-[27px] absolute top-[25px] left-[130px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[99px] h-[27px] absolute top-16 left-[130px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[100px] h-[27px] absolute top-[25px] left-[235px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[100px] h-[27px] absolute top-16 left-[235px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[311px] h-[61px] absolute top-[195px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[311px] h-[61px] absolute top-[268px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-[520px] h-[520px]">
                          <div className="absolute w-[361px] h-[399px] top-[121px] left-0 bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d4d9e7]">
                            <div className="absolute w-[311px] h-[61px] top-[243px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[311px] h-[61px] top-[314px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                          <div className="absolute w-[319px] h-[368px] top-0 left-[201px] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[271px] h-[179px] top-[165px] left-[225px] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[271px] h-[61px] top-6 left-[225px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[271px] h-[61px] top-[95px] left-[225px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex-1 max-w-[629px]">
                  <div className="flex flex-col gap-[26px]">
                    <div className="flex flex-col gap-[18px]">
                      <Badge
                        className={`h-[31px] ${step.badgeColor} rounded-[56px] ${step.badgeTextColor} text-base font-normal [font-family:'Rethink_Sans',Helvetica] w-fit`}
                      >
                        Step {step.number}
                      </Badge>

                      <h3 className="text-[40px] leading-[50px] font-normal [font-family:'Alata',Helvetica] text-[#010512]">
                        {step.title}
                      </h3>

                      <p className="text-lg leading-[27.2px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525358]">
                        {step.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[42px]">
                      <div className="space-y-[37px]">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <img
                              className="w-[22px] h-[22px]"
                              alt="Checkmark circle"
                              src="/checkmark-circle-02.svg"
                            />
                            <span className="text-lg leading-[27.2px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525358]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`h-[50px] px-[25px] py-4 rounded-[100px] bg-[#1256fb] border border-solid ${index === 2 ? "bg-[#0f54fa]" : "bg-[#1256fb]"} ${index === 0 ? "border-none" : "border-[#2b59fc]"} text-white`}
                      >
                        {step.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>

                {index % 2 === 0 && (
                  <div
                    className={`w-[600px] h-[600px] rounded-[20px] overflow-hidden ${step.gradientBg}`}
                  >
                    <div className="relative w-[520px] h-[520px] mt-10 ml-10">
                      <div className="absolute w-[361px] h-[399px] top-[121px] left-0 bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d4d9e7]">
                        <div className="absolute w-[311px] h-[61px] top-[243px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                        <div className="absolute w-[311px] h-[61px] top-[314px] left-6 bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                      </div>
                      <div className="absolute w-[319px] h-[368px] top-0 left-[201px] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                      <div className="absolute w-[271px] h-[179px] top-[165px] left-[225px] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                      <div className="absolute w-[271px] h-[61px] top-6 left-[225px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                      <div className="absolute w-[271px] h-[61px] top-[95px] left-[225px] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[490px] bg-[#f3f3f3] rounded-[14px] overflow-hidden relative">
          <div className="absolute w-[1487px] h-[1213px] top-[-361px] left-[-83px] bg-[url(/vector-7818.svg)] bg-[100%_100%]">
            <div className="relative w-[618px] h-[227px] top-[474px] left-[425px] flex flex-col items-center gap-[17px]">
              <h3 className="w-[618px] text-5xl text-center leading-[54px] font-normal [font-family:'Alata',Helvetica]">
                <span className="text-[#00b836]">Success!</span>
                <br />
                <span className="text-[#04070d]">
                  Seamlessly manage your Championship with us
                </span>
              </h3>

              <Button className="px-  py-3 bg-[#0175ff] rounded-[80px] border border-solid shadow-[inset_0px_4px_4px_#4399ff] text-white flex items-center gap-2.5 ">
                <span className="font-h2-semi-bold">
                  Create Your Championship
                </span>
                <img
                  className="w-[15px] h-2.5"
                  alt="Group"
                  src="/group-1000004041.png"
                />
              </Button>
            </div>
          </div>

          <img
            className="absolute w-[2263px] h-[1174px] top-[-1657px] left-[1440px] object-cover"
            alt="Screenshot"
          />
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1352px] items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-[854px] items-center gap-2">
            <h2 className="w-[740px] text-[40px] text-center leading-normal font-normal [font-family:'Alata',Helvetica] text-[#0c0c0c]">
              Flexible Pricing, Unbeatable Value
            </h2>

            <p className="text-lg text-center leading-normal font-medium [font-family:'Rethink_Sans',Helvetica] text-[#666666]">
              Discover the perfect plan to power your championships—whether
              you're managing local events or global competitions. Our
              transparent pricing offers all the tools you need, without hidden
              fees. Choose your plan and elevate your events today.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 w-full">
        <ToggleGroup
      type="single"
      value={selected}
      onValueChange={(value) => value && setSelected(value)}
      className="w-[183.47px] h-14 bg-[#f8f9fa] rounded-[14px] border border-solid border-[#edeff3]"
    >
      <ToggleGroupItem
        value="monthly"
        className={`w-[78px] h-11 rounded-[10px] font-medium text-[15.9px] [font-family:'Inter',Helvetica] ${
          selected === "monthly"
            ? "bg-[#6666ff] text-white"
            : "bg-[#6666FF] text-white"
        }`}
      >
        Monthly
      </ToggleGroupItem>

      <ToggleGroupItem
        value="yearly"
        className={`w-[94px] h-11 rounded-[10px] font-medium text-[15.9px] [font-family:'Inter',Helvetica] ${
          selected === "yearly"
            ? "bg-[#6666ff] text-white"
            : "bg-[#6666FF] text-white"
        }`}
      >
        Yearly
      </ToggleGroupItem>
    </ToggleGroup>

          <div className="flex items-center gap-4 w-full">
          {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`w-[440px] h-[698px] rounded-[20px] border border-solid border-[#e6e9ee] ${plan.highlight ? "bg-neutral-100 relative" : ""}`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-4 left-[82px] w-[276px] h-[33px] bg-[#6666ff] rounded-[100px] text-white">
                    {plan.discountCode}
                  </Badge>
                )}

                <CardContent className="p-0">
                  <div className="flex w-full items-center justify-between p-[30px]">
                    <div
                      className="w-[50px] h-[50px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${plan.iconUrl})` }}
                    />
                    <div className="flex items-end">
                      <span className="text-neutral-800 font-title-3 text-[length:var(--title-3-font-size)]">
                        {plan.price}
                      </span>
                      <span className="text-[#666666] font-content text-[length:var(--content-font-size)]">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="px-[30px]">
                    <div className="flex items-center">
                      <h3 className="font-title-3 text-neutral-800 text-[length:var(--title-3-font-size)]">
                        {plan.title}
                      </h3>
                      <Badge className="ml-2 bg-[#0175ff] rounded-md text-white">
                        {plan.subtitle}
                      </Badge>
                    </div>

                    <p className="mt-2 font-content-2 text-[#666666] text-[length:var(--content-2-font-size)]">
                      {plan.description}
                    </p>

                    <Separator className="my-6 border-t border-dashed border-[#e6e9ee]" />

                    <Button
                      className={`w-[380px] h-[52px] rounded-[10px] ${plan.highlight ? "bg-[#0175ff] text-white border border-solid border-white" : "bg-[#f8f9fa] text-[#191919] border border-solid border-[#e6e9ee]"}`}
                    >
                      <span className="font-button-text text-[length:var(--button-text-font-size)]">
                        Get Started
                      </span>
                      <img
                        className="w-[18px] h-[18px] ml-2"
                        alt="Arrow"
                        src={
                          plan.highlight
                            ? "/hcyhdojiei9tufdxhvtsbo4eak-svg.svg"
                            : "/nwoxflacic3m5vdj82pjiyk1698-svg.svg"
                        }
                      />
                    </Button>

                    <h4 className="mt-6 mb-4 font-title-3 text-neutral-800 text-[length:var(--title-3-font-size)]">
                      Features Included:
                    </h4>

                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <React.Fragment key={featureIndex}>
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-md ${feature.included ? "bg-[#6666ff]" : "bg-[#f2f4f6] border border-solid border-[#e6e9ee]"}`}
                            >
                              <div
                                className="w-3 h-3 mx-auto mt-1.5"
                                style={{
                                  backgroundImage: `url(${feature.included ? "/0im5czrhpjymimt0m4hqfvmharg-svg.svg" : "/gcxi3ehma3z5wfaitti3e1gid0-svg.svg"})`,
                                  backgroundSize: "100% 100%",
                                }}
                              />
                            </div>
                            <span className="ml-4 font-content-2 text-[#333333] text-[length:var(--content-2-font-size)]">
                              {feature.name}
                            </span>
                            <img
                              className="w-[18px] h-[18px] ml-auto"
                              alt="Info"
                              src="/hk21vwzrxkkqqvwa0rq5fptw-svg.svg"
                            />
                          </div>
                          {featureIndex < plan.features.length - 1 && (
                            <Separator className="h-px bg-[#e6e9ee]" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[994px] relative">
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden bg-gradient-to-b from-white to-[#fafafa]">
          <div className="relative w-[2032px] h-[926px] top-[27px] left-[-307px]">
            <div className="absolute w-[2032px] h-[757px] top-[169px] left-0">
              <div className="flex items-start gap-6 absolute top-[101px] left-0 overflow-hidden">
                {[...Array(3)].map((_, index) => (
                  <Card
                    key={index}
                    className="w-[600px] h-[312px] bg-white rounded-[10px] border border-solid border-neutral-200"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-1.5">
                        {[...Array(5)].map((_, starIndex) => (
                          <img
                            key={starIndex}
                            className="w-5 h-5"
                            alt="Star"
                            src={starIndex < 4 ? "/star.svg" : "/star-15.svg"}
                          />
                        ))}
                      </div>

                      <p className="mt-4 text-lg leading-[27px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525459]">
                        I had a fantastic experience shopping here! The site is
                        easy to navigate, and the customer service is
                        outstanding. My order arrived swiftly, and the product
                        quality was even better than I expected. Highly
                        recommend!
                      </p>

                      <div className="flex items-center gap-4 mt-16">
                        <img
                          className="w-[62px] h-[62px] object-cover"
                          alt="Profile"
                          src="/ellipse-45-5.png"
                        />
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-lg leading-[26px] font-medium [font-family:'SF_Pro-Medium',Helvetica] text-[#04070d]">
                            Mahmud Tamvir
                          </h4>
                          <p className="text-base leading-[26px] font-medium [font-family:'SF_Pro-Medium',Helvetica] text-[#04070d]">
                            Co-Founder of Huge icons
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-start gap-6 absolute top-[445px] left-[184px] overflow-hidden">
                {[...Array(3)].map((_, index) => (
                  <Card
                    key={index}
                    className="w-[600px] h-[312px] bg-white rounded-[10px] border border-solid border-neutral-200"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-1.5">
                        {[...Array(5)].map((_, starIndex) => (
                          <img
                            key={starIndex}
                            className="w-5 h-5"
                            alt="Star"
                            src={starIndex < 4 ? "/star.svg" : "/star-15.svg"}
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-lg leading-[27px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525459]">
                        I had a fantastic experience shopping here! The site is
                        easy to navigate, and the customer service is
                        outstanding. My order arrived swiftly, and the product
                        quality was even better than I expected. Highly
                        recommend!
                      </p>
                      "{" "}
                      <p className="mt-4 text-lg leading-[27px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525459]">
                        I had a fantastic experience shopping here! The site is
                        easy to navigate, and the customer service is
                        outstanding. My order arrived swiftly, and the product
                        quality was even better than I expected. Highly
                        recommend!
                      </p>
                      "
                      <div className="flex items-center gap-4 mt-16">
                        <img
                          className="w-[62px] h-[62px] object-cover"
                          alt="Profile"
                          src="/ellipse-45-5.png"
                        />
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-lg leading-[26px] font-medium [font-family:'SF_Pro-Medium',Helvetica] text-[#010512]">
                            Mahmud Tamvir
                          </h4>
                          <p className="text-base leading-[26px] font-medium [font-family:'SF_Pro-Medium',Helvetica] text-[#525459]">
                            Co-Founder of Huge icons
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="absolute w-[175px] h-[716px] top-0 left-[1678px] bg-white blur-2xl" />
              <div className="absolute w-[175px] h-[716px] top-0 left-[201px] bg-white blur-2xl" />
            </div>

            <div className="flex flex-col items-center gap-2 absolute top-0 left-[596px]">
              <h2 className="w-[753px] text-[52px] text-center leading-[76px] font-normal [font-family:'Alata',Helvetica] text-[#010512] tracking-[-1.04px]">
                What Yogasana lovers say using our Software
              </h2>
              <p className="w-[861px] text-lg text-center leading-[26px] font-normal [font-family:'Rethink_Sans',Helvetica] text-[#525459] tracking-[-0.36px]">
                Discover firsthand accounts from organizers, athletes, and
                judges who have experienced the seamless excellence of our
                platform. Their stories showcase how we've transformed
                championship management and elevated competitive success.
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute w-[368px] h-[30px] top-[92px] left-[508px]"
          alt="Vector"
          src="/vector-5-3.svg"
        />
      </div>
    </section>
  );
};
