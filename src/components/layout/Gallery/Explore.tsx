import React from 'react'
import { useLangContext } from '@/components/hooks/LangContext';


export default function Explore() {
      const { lang } = useLangContext()
      return (
            <>
                  <section className='w-full flex flex-col items-center justify-center gap-[14px] lg:mb-[150px] mb-[50px]'>
                        <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight text-center w-full md:max-w-[800px] max-w-none mx-auto'>
                              {lang === 'ID' ? 'Jelajahi ' : 'Explore Our '}
                              <span className='text-[#BC1328]'>
                                    {lang === 'ID' ? 'Layanan Penerbangan Kami' : 'Aviation Services'}
                              </span>
                              {lang === 'ID' ? ' dalam Aksi' : ' in Action'}
                        </h2>

                        <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                              {lang === 'ID'
                                    ? 'Jelajahi pendekatan kami yang berdedikasi dalam layanan dan perawatan penerbangan, berfokus pada keunggulan, inovasi, serta kepuasan klien jangka panjang.'
                                    : 'Explore our dedicated approach to aviation service and maintenance, focused on delivering excellence, innovation, and long-term client satisfaction.'}
                        </p>

                  </section>
            </>
      )
}
