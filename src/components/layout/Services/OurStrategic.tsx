import { useLangContext } from '@/components/hooks/LangContext'
import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React from 'react'

export default function OurStrategic() {
      const { lang } = useLangContext()
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-800 md:pb-[150px] pb-[100px]">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div className='w-full flex flex-col items-start justify-start'>
                                    <LabelSectionDark title={`${lang === 'ID' ? 'Mitra Strategis Kami' : 'Our Strategic Partners'}`} />
                                    {lang === 'ID' ? <>
                                          <h2 className='w-full text-start font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>
                                                      Mitra </span> <span className='font-bold text-theme-red'>Tepercaya Kami</span>
                                          </h2>
                                    </> : <>
                                          <h2 className='w-full text-start font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>Our Trusted</span> <span className='font-bold text-theme-red'>Partners</span>
                                          </h2>
                                    </>}
                              </div>
                        </section>
                        <section className="container_section grid md:grid-cols-2 grid-cols-1 items-start lg:gap-6 gap-4">
                              {/* Left */}
                              <div
                                    className={`w-full md:min-h-[510px] min-h-min col-span-1 md:p-5 p-4 flex flex-col items-start md:gap-6 gap-5 bg-slate-100`}
                              >
                                    {/* Image */}
                                    <a href='https://dinamikaaviasi.com/' target='_blank' className='w-full overflow-hidden block'>
                                          <Image
                                                src='/assets/logo/dai.svg'
                                                width={800}
                                                height={500}
                                                alt='Our Strategic Partners'
                                                className='md:w-[250px] w-[200px] h-max object-contain mx-auto'
                                          />
                                    </a>
                                    {/* Text */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <h2 className='font-semibold lg:text-[24px] text-base leading-normal mb-2 text-slate-800'>
                                                {lang === 'ID' ? 'Disetujui oleh DGCA DOA Certf No : DOA.21J.009' : 'Approved by DGCA DOA Certf No : DOA.21J.009'}
                                          </h2>
                                          <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Sertifikat Tipe Tambahan Kelas C' : 'Suplemental Type Certf Class C'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Pesawat' : 'Aircraft'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? '2 meja lipat' : '2 folding tables'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Layanan khusus' : 'Specialized Services'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Modifikasi yang diwajibkan oleh Kelaikudaraan' : 'Modification Required by Airworthiness'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Arahan/Operasi/Persyaratan Pelanggan' : 'Directives/Operations/Customer Requirement'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Perbaikan Mayor dan Minor' : 'Repair Major and Minor'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Perubahan Mayor dan Minor' : 'Alteration Major and Minor'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Struktur Interior Kabin & Sistem Terkait' : 'Structure Cabin Interior & Associated Systems'}
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              {/* Right */}
                              <div
                                    className={`w-full md:min-h-[510px] min-h-min col-span-1 md:p-5 p-4 flex flex-col items-start md:gap-6 gap-5 bg-slate-100`}
                              >
                                    {/* Image */}
                                    <a href='https://www.prizma-aero.com/' target='_blank' className='w-full overflow-hidden block'>
                                          <Image
                                                src='/assets/logo/prizma.svg'
                                                width={800}
                                                height={500}
                                                alt='Our Strategic Partners'
                                                className='md:w-[250px] w-[200px] h-max object-contain mx-auto'
                                          />
                                    </a>
                                    {/* Text */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <h2 className='font-semibold lg:text-[24px] text-base leading-normal mb-2 text-slate-800'>
                                                {lang === 'ID' ? 'Disetujui oleh DGCA AMO No. 145D-1058' : 'Approved by DGCA AMO NO. 145D-1058'}
                                          </h2>
                                          <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Rangka Pesawat Cessna Seri 172' : 'Airframe Cessna 172 Series'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Mesin Rotax Seri 582 / 912 / 914' : 'Engine Rotax 582/ 912 / 914 Series'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Layanan Khusus' : 'Specialized Services'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Perlengkapan Interior Kabin' : 'Cabin Interior Furnishing'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Pengecatan Interior/Eksterior Pesawat' : 'Aircraft Interior/Exterior Painting'}
                                                </li>
                                                <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                      {lang === 'ID' ? 'Perbaikan & Perubahan Struktur' : 'Structure Repair & Alteration'}
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
