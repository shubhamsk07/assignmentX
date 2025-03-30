import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <Card className="relative w-full max-w-[1320px] h-[536px] mx-auto bg-[#0f54fb] rounded-[14px] overflow-hidden shadow-shadow">
      <CardContent className="relative h-full p-0">
        <div className="relative w-full h-full px-[43px]">
          {/* Background decorative elements */}
          <img
            className="absolute w-[531px] h-[210px] bottom-0 right-0"
            alt="Decorative ellipse"
            src="/ellipse-1504.svg"
          />
          <img
            className="absolute w-[578px] h-[204px] top-0 left-0"
            alt="Decorative ellipse"
            src="/ellipse-1505.svg"
          />

          {/* Content container */}
          <div className="flex flex-col items-center justify-center h-full pt-[108px]">
            <div className="flex flex-col items-center gap-8 max-w-[899px]">
              <div className="flex flex-col items-center gap-[22px]">
                {/* Badge */}
                <Badge
                  className="px-4 py-2 rounded-[100px] bg-transparent border-none"
                  variant="outline"
                >
                 <div className="relative bg-gradient-to-r from-white to-transparent rounded-xl p-[1px]">
  <div className="bg-[#0F54FB] text-white font-['Rethink_Sans',Helvetica] rounded-xl px-4 py-[2px]">
    Testimonials Made Easy
  </div>
</div>
                </Badge>

                {/* Main heading */}
                <h2 className="w-full max-w-[897px] font-normal text-white text-5xl leading-[54px] text-center font-['Alata',Helvetica]">
                  Experience the Impact of Our Software in your Next Yogasana
                  Championship.
                </h2>

                {/* Subheading */}
                <p className="w-full max-w-[488px] font-normal text-white text-lg text-center leading-6 font-['Rethink_Sans',Helvetica]">
                  Host Your Championships Locally or Globally – We Provide All
                  the Tools You Need.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                className="h-[50px] px-[25px] py-4 bg-[#ffffff29] rounded-[100px] hover:bg-[#ffffff40]"
                variant="ghost"
              >
                <span className="font-h2-semi-bold font-[number:var(--h2-semi-bold-font-weight)] text-white text-[length:var(--h2-semi-bold-font-size)] tracking-[var(--h2-semi-bold-letter-spacing)] leading-[var(--h2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--h2-semi-bold-font-style)]">
                  Get start for free
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
