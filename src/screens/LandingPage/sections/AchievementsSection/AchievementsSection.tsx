import React from 'react'
import { Button } from '../../../../components/ui/button'

const AchievementsSection = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex  justify-center '>
                <div className='w-[400px]  mb-12 flex-col justify-center '>
                    <img className='w-[100px] relative rounded-full left-[178px] my-6' src="/ellipse-280.png"
                        alt="person image" />
                    <img className='w-[70px] relative rounded-full left-20 my-8' src="/ellipse-284.png"
                        alt="person image" />
                    <img className='w-[120px] relative rounded-full left-[180px] m' src="/ellipse-283.png"
                        alt="person image" />
                    <img className='w-[100px] relative rounded-full left-20 ' src="/ellipse-281.png"
                        alt="person image" />
                </div>
                <div className='max-w-4xl'>
                    <div className="text-[64px] text-center leading-[80px] font-normal [font-family:'Alata',Helvetica] text-black">
                        Championship Excellence, Proven by <span className='bg-[#E6E6FF] w rounded-full px-3  pb-[px]'>Numbers</span>
                    </div>
                    <img className='relative -top-[84px] left-[82px]' src="/vector-5-3.svg" alt="vector image" />
                    <div className="bg-[#E3EBFF] rounded-2xl mt-8 max-w-2xl mx-auto px-[100px] py-10 [font-family:'Rethink_Sans',Helvetica] font-semibold text-md leading-9 text-center ">
                        Join the platform that’s transforming competition management—over 250 championships organized, 3000+ athletes empowered, and 100,000+ events logged. Experience the future of Yogasana excellence today. Join now
                    </div>
                    <div className='flex relative -top-[186px] left-[160px]'>
                        <img src="/inverted-comma-1.png" alt='comma1' />
                        <img src="/inverted-comma-2.png" alt='comma2' />
                    </div>
                    <div className='flex relative bottom-[110px] left-[670px]'>
                        <img src="/inverted-comma-3.png" alt='comma3' />
                        <img src="/inverted-comma-4.png" alt='comma4' />
                    </div>
                </div>
                <div className='w-[400px]   mb-12 flex-col justify-center '>
                    <img className='w-[70px] relative rounded-full left-[0px] my-6' src="/ellipse-287.png"
                        alt="person image" />
                    <img className='w-[120px] relative rounded-full left-40 bottom-20 my-8' src="/ellipse-286.png"
                        alt="person image" />
                    <img className='w-[70px] relative rounded-full left-10 bottom-24 my-8' src="/ellipse-282.png"
                        alt="person image" />
                    <img className='w-[180px] relative rounded-full left-20 bottom-14 my-6' src="/ellipse-285.png"
                        alt="person image" />
                </div>
            </div>
            {/* zig zag path */}
            <div className='w-full flex h-full relative'>
                <img src="/zigzag.png" alt='pattern ' className='relative bottom-[188px] left-[560px]' />
                <div className='max-w-2xl relative right-[420px]'>

                    <div className=" relative mb-3  text-[60px]  leading-[78px] font-normal [font-family:'Alata',Helvetica] text-black">
                        250+ Championships Organized
                    </div>
                    <div className=" [font-family:'Rethink_Sans',Helvetica]  text-md leading-6 text-[#737677] ">
                        Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.
                    </div>
                    <img className='relative -top-[150px] left-[220px]' src="/vector-5-3.svg" alt="vector image" />
                </div>
                {/* second */}
                <div className='max-w-2xl absolute  -right-[80px] top-[240px]'>

                    <div className=" relative mb-3  text-[60px]  leading-[78px] font-normal [font-family:'Alata',Helvetica] text-black">
                        3,000+ Athletes Empowered
                    </div>
                    <div className="[font-family:'Rethink_Sans',Helvetica]  text-md leading-6 text-[#737677] ">
                        ver 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that’s redefining excellence and driving competitive spirit!
                    </div>
                    <img className='relative -top-[74px] -left-[10px]' src="/vector-5-3.svg" alt="vector image" />
                </div>
                {/* third */}
                <div className='max-w-xl absolute bottom-[284px] left-[40px]'>

                    <div className=" relative mb-3  text-[60px]  leading-[78px] font-normal [font-family:'Alata',Helvetica] text-black">
                        100,000+ Events Logged
                    </div>
                    <div className=" [font-family:'Rethink_Sans',Helvetica]  text-md leading-6 text-[#737677] ">
                        ver 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that’s redefining excellence and driving competitive spirit!
                    </div>
                    <img className='relative -top-[168px] -left-[0px]' src="/vector-5.svg" alt="vector image" />
                </div>
                <Button className="h-[48px] relative top-[950px] right-[440px] bg-[#1256FB]  rounded-[444px] border border-solid border-[#dfe3e8] shadow-shadow">
                <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-sm leading-5 ">
                  Sign up for free
                </span>
              </Button>
            </div>

        </div>
    )
}

export default AchievementsSection