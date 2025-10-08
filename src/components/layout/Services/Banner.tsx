import React from 'react'
import Image from 'next/image';
import { useLangContext } from '@/components/hooks/LangContext';


export default function Banner() {
      const { lang } = useLangContext();
      return (
            <>
                  <section className="w-full md:h-[500px] h-[400px] overflow-hidden relative lg:pt-[200px] pt-[100px] lg:mb-[150px] mb-[50px]">
                        {/* BACKGROUND */}
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[1]'>
                              <Image src='/assets/images/service.png' alt='background' width={1000} height={500} className='w-full h-full object-cover' />
                        </div>
                        {/* LAYER */}
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[2] bg-[#1E293B]/40'>
                        </div>
                        {/* LAYER HERO */}
                        <div className='w-max h-max absolute bottom-[-3px] z-10 right-0 bg-white md:pl-[90px] pl-[60px] md:py-[30px] py-[20px] md:pr-[230px] pr-[120px]'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                              {/* ORNAMENT */}
                              <div className='w-max h-max absolute z-[3] top-[-40px] md:right-[125px] right-[50px] flex items-start justify-start gap-4'>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#BC1328]'>
                                    </div>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#F9F400]'>
                                    </div>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#352B5A]'>
                                    </div>
                              </div>
                              {/* CONTENT */}
                              <h2 className='font-bold md:text-[64px] text-[32px] text-slate-800 leading-tight'>
                                    {lang === 'ID' ? 'Layanan' : 'Services'}
                              </h2>
                        </div>
                  </section>
            </>
      )
}
