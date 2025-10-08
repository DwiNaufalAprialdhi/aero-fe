import { useLangContext } from '@/components/hooks/LangContext'
import React from 'react'


export default function FullService() {
      const { lang } = useLangContext()
      return (
            <>
                  <section className='w-full flex flex-col items-center justify-center gap-[14px] lg:mb-[150px] mb-[50px]'>
                        {lang === 'ID' ? <>
                              <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight text-center w-full md:max-w-[800px] max-w-none mx-auto'>
                                    Dukungan dan  <span className='text-[#BC1328]'>Solusi Penerbangan</span> Layanan Lengkap
                              </h2>
                              <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                                    Berkomitmen untuk Memberikan Keunggulan dan Ketepatan dalam Setiap Layanan, Dengan Fokus pada Keselamatan, Keandalan, dan Inovasi dalam Penerbangan
                              </p>
                        </> : <>
                              <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight text-center w-full md:max-w-[800px] max-w-none mx-auto'>
                                    Full-Service <span className='text-[#BC1328]'>Aviation Support</span> and Solutions
                              </h2>
                              <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                                    Committed to Delivering Excellence and Precision in Every Service, With a Focus on Safety, Reliability, and Innovation in Aviation
                              </p>
                        </>}
                  </section>
            </>
      )
}
