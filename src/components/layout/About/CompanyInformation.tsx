import LabelSectionLight from '@/components/material/LabelSectionLight'
import React from 'react'

export default function CompanyInformation() {
      return (
            <>
                  <main className='container_section relative z-[2] text-slate-50'>
                        {/* HEAD */}
                        <section className='w-full flex flex-col lg:mb-[50px] mb-6'>
                              <LabelSectionLight title='Company Information ' />
                              <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 '>
                                    <span className='font-bold'>Our</span> <span className='font-bold text-theme-red'>Company Information</span>
                              </h2>
                        </section>
                        {/* BODY */}
                        <section className='w-full h-max flex flex-col md:gap-6 gap-5'>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          Akta Pendirian
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> Ny. Suryati Morwibowo, SH No.07 Date 20 July 2007
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          Akta Perubahan
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> Periasman Effendi, SH., M.Kn No. 04,- Date 08 December 2023
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          AHU
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> AHU-0062866.AH.01.02.TAHUN 2023 Date 17 October 2023
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          NPWP
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> KPP Pratama Jakarta Pasar Rebo 02.657.063.0-009.000
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          NIB
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 9120000201605 Date 10 February 2019
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          Airport Register Certificate From Ministry of Transportation
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> No. 052/RBU/X/2022 Date 20 October 2022
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          Approved Defence Aircraft Repair Station Certificate From Ministry of Defence
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> No. IDAA/COA/ADARS/042-2024 Date 3 April 2024
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          KBLI
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 52231 Aktivitas Kebandarudaraan
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 77313 Aktivitas Penyewaan dan Hak Sewa Guna Usaha Tanpa Hak Opsi Alat Transportasi Udara
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 46599 Perdagangan Besar Mesin Peralatan dan Perlengkapan Lainya
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 52296 Jasa Penunjang Angkutan Udara
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 46594 Perdagangan Besar Alat Transportasi Udara, Suku Cadang dan Perlengkapanya
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'> 33153 Reparasi Pesawat Terbang
                                          </li>
                                    </ul>
                              </div>
                        </section>
                  </main>
            </>
      )
}
