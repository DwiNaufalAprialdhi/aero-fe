import { useLangContext } from '@/components/hooks/LangContext'
import LabelSectionLight from '@/components/material/LabelSectionLight'
import React from 'react'

export default function CompanyInformation() {

      const { lang } = useLangContext();

      return (
            <>
                  <main className='container_section relative z-[2] text-slate-50'>
                        {/* HEAD */}
                        <section className='w-full flex flex-col lg:mb-[50px] mb-6'>
                              {lang === 'ID' ? <>
                                    <LabelSectionLight title='Informasi Perusahaan' />
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 '>
                                          <span className='font-bold'>Informasi</span> <span className='font-bold text-theme-red'>Perusahaan Kami</span>
                                    </h2>
                              </> : <>
                                    <LabelSectionLight title='Company Information ' />
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 '>
                                          <span className='font-bold'>Our</span> <span className='font-bold text-theme-red'>Company Information</span>
                                    </h2>
                              </>}
                        </section>
                        {/* BODY */}
                        <section className='w-full h-max flex flex-col md:gap-6 gap-5'>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          {lang === 'ID' ? 'Akta Pendirian' : 'Deed of Incorporation'}
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? 'Ny. Suryati Morwibowo, SH No.07 Date 20 July 2007' : 'Mrs. Suryati Moerwibowo, SH No. 07 Date 20 July 2007'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          {lang === 'ID' ? 'Akta Perubahan' : 'Deed of Amendment'}
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? 'Periasman Effendi, SH., M.Kn No. 04,- Tanggal 08 Desember 2023' : 'Periasman Effendi, SH., M.Kn No. 04,- Date 08 December 2023'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          {lang === 'ID' ? 'AHU' : 'AHU'}
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? 'AHU-0062866.AH.01.02.TAHUN 2023 Tanggal 17 Oktober 2023' : 'AHU-0062866.AH.01.02.TAHUN 2023 Date 17 October 2023'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          NPWP
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                KPP Pratama Jakarta Pasar Rebo 02.657.063.0-009.000
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          NIB
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? '9120000201605 Tanggal 10 Februari 2019' : '9120000201605 Date 10 February 2019'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          {lang === 'ID' ? 'Sertifikat Registrasi Bandara dari Kementerian Perhubungan' : 'Airport Register Certificate From Ministry of Transportation'}
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? 'No. 052/RBU/X/2022 Tanggal 20 Oktober 2022' : 'No. 052/RBU/X/2022 Date 20 October 2022'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          {lang === 'ID' ? 'Sertifikat Stasiun Perbaikan Pesawat Pertahanan yang Disetujui dari Kementerian Pertahanan' : 'Approved Defence Aircraft Repair Station Certificate From Ministry of Defence'}
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID' ? 'Nomor IDAA/COA/ADARS/042-2024 Tanggal 3 April 2024' : 'No. IDAA/COA/ADARS/042-2024 Date 3 April 2024'}
                                          </li>
                                    </ul>
                              </div>
                              {/* ROW */}
                              <div className='w-full grid grid-cols-2 lg:py-6 py-5 lg:gap-[40px] gap-8 border-b border-slate-50'>
                                    <h2 className='block md:col-span-1 col-span-2 font-bold md:text-[24px] text-lg'>
                                          KBLI
                                    </h2>
                                    <ul className='list-disc md:col-span-1 col-span-2 pl-5 md:pl-0'>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '52231 Aktivitas Kebandarudaraan'
                                                      : '52231 Airport Activities'}
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '77313 Aktivitas Penyewaan dan Hak Sewa Guna Usaha Tanpa Hak Opsi Alat Transportasi Udara'
                                                      : '77313 Rental and Leasing Activities Without Purchase Option for Air Transport Equipment'}
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '46599 Perdagangan Besar Mesin Peralatan dan Perlengkapan Lainnya'
                                                      : '46599 Wholesale Trade of Other Machinery, Equipment, and Supplies'}
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '52296 Jasa Penunjang Angkutan Udara'
                                                      : '52296 Supporting Services for Air Transportation'}
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '46594 Perdagangan Besar Alat Transportasi Udara, Suku Cadang dan Perlengkapannya'
                                                      : '46594 Wholesale Trade of Air Transport Equipment, Spare Parts, and Accessories'}
                                          </li>
                                          <li className='font-normal lg:text-base text-sm text-slate-200'>
                                                {lang === 'ID'
                                                      ? '33153 Reparasi Pesawat Terbang'
                                                      : '33153 Aircraft Repair'}
                                          </li>
                                    </ul>
                              </div>
                        </section>
                  </main>
            </>
      )
}
