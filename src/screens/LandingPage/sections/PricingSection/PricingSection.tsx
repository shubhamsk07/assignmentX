import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Feature data for mapping
const features = [
  {
    title: "Streamlined Athlete Enrollment",
    description:
      "Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.",
  },
  {
    title: "Comprehensive Panel Creation",
    description:
      "Build and manage judge panels effortlessly—assign roles and responsibilities to ensure fair and consistent evaluations.",
  },
  {
    title: "Seamless Multi-Level Management",
    description:
      "With robust features tailored for L1, L2, and L3, our platform integrates administrative tasks, competition oversight,.",
  },
  {
    title: "Dynamic Event & Result Tracking",
    description:
      "Log and track thousands of events in real time, providing clear insights and analytics to help you monitor progress and celebrate success",
  },
  {
    title: "Secure and Efficient Workflows",
    description:
      "From locking enrollments to adjusting marks, our software ensures data integrity and a secure workflow.",
  },
  {
    title: "User-Friendly Interface & Dedicated Support",
    description:
      "Our software is designed to adapt to your specific championship needs, ensuring a smooth experience from setup to execution.",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-20 py-16 ">
      <h2 className="[font-family:'Alata',Helvetica] font-normal text-white text-[56px] text-center tracking-[0] leading-[60px]">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-3 gap-6 w-full max-w-[1320px]">
  {features.slice(0, 3).map((feature, index) => (
    <React.Fragment key={`top-${index}`}>
      <Card className="border-0 bg-transparent">
        <CardContent className="flex flex-col items-start gap-1.5 p-0">
          <h3 className="[font-family:'Alata',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-10">
            {feature.title}
          </h3>
          <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#f4f5f7] text-lg tracking-[-0.36px] leading-7">
            {feature.description}
          </p>
        </CardContent>
      </Card>
      {index < 2 && ( // No separator after the last card in the row
        <Separator orientation="vertical" className="h-[196px] bg-white/20" />
      )}
    </React.Fragment>
  ))}

  <Separator className="col-span-3 my-6 bg-white/20" /> {/* Horizontal separator */}

  {features.slice(3, 6).map((feature, index) => (
    <React.Fragment key={`bottom-${index}`}>
      <Card className="border-0 bg-transparent">
        <CardContent className="flex flex-col items-start gap-1.5 p-0">
          <h3 className="[font-family:'Alata',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-10">
            {feature.title}
          </h3>
          <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#f4f5f7] text-lg tracking-[-0.36px] leading-7">
            {feature.description}
          </p>
        </CardContent>
      </Card>
      {index < 2 && ( // No separator after the last card in the row
        <Separator orientation="vertical" className="h-[196px] bg-white/20" />
      )}
    </React.Fragment>
  ))}
</div>

    </section>
  );
};
