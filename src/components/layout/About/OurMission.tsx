import { useLangContext } from '@/components/hooks/LangContext';
import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React from 'react'

export default function OurMission() {

      const { lang } = useLangContext();

      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-50'>
                        <section className='container_section flex lg:flex-row flex-col items-start md:gap-[50px] gap-6 grid-cols-1 justify-center'>
                              {/* LEFT */}
                              <div className='lg:w-[420px] w-full flex-shrink-0 md:h-[660px] h-[280px] relative overflow-hidden lg:order-1 order-1'>
                                    <Image
                                          src='/assets/images/mission.svg'
                                          alt='about'
                                          width={500} height={500}
                                          className='w-full absolute h-full object-cover z-[2] top-[-20px] right-[-20px]'
                                    />
                                    <div className='w-full h-full absolute bottom-[-20px] left-[-20px] z-[1] bg-[#F9F400]'>
                                    </div>
                              </div>
                              {/* RIGHT */}
                              <div className='w-full flex-grow flex flex-col lg:order-2 order-2'>
                                    <LabelSectionLight title={`${lang === 'ID' ? 'Misi' : 'Our Mission'}`} />
                                    <div className='w-full flex flex-col lg:gap-6 gap-5 lg:mt-[50px] mt-6'>
                                          {/* LIST 1 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      {lang === 'ID' ?
                                                            'Bertindak sebagai katalis pertumbuhan industri aviasi dengan mengembangkan dan mengoperasikan infrastruktur strategis—bandara, aviation park, pusat pelatihan, dan fasilitas terkait—yang menjadi pusat aktivitas penerbangan regional.'
                                                            :
                                                            'Serve as an aviation-industry growth catalyst by developing and operating strategic infrastructure—airports, aviation parks, training centers, and related facilities—that become regional hubs for aviation activity.'
                                                      }
                                                </h2>
                                          </div>
                                          {/* LIST 2 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>

                                                      {lang === 'ID' ?
                                                            'Menyediakan produk-produk industri penerbangan, suku cadang, dan layanan pemeliharaan berkualitas tinggi untuk mendukung sektor penerbangan sipil dan militer di Indonesia.'
                                                            :
                                                            'Provide high-quality aviation products, spare parts, and maintenance services to support both Indonesia’s civil and military aviation sectors.'
                                                      }
                                                </h2>
                                          </div>
                                          {/* LIST 3 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      {lang === 'ID' ?
                                                            'Menjadikan keselamatan penerbangan sebagai prioritas utama dalam setiap aspek operasi kami.'
                                                            :
                                                            'Uphold flight and aviation safety as our paramount priority in every aspect of our operations.'
                                                      }
                                                </h2>
                                          </div>
                                          {/* LIST 4 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      {lang === 'ID' ?
                                                            'Meningkatkan dan memaksimalkan stakeholder value dengan menyederhanakan proses bisnis melalui mekanisasi dan otomatisasi, mengoptimalkan efisiensi, menekan biaya, serta menghadirkan layanan dan produk yang selalu melampaui ekspektasi pelanggan.'
                                                            :
                                                            'Enhance and maximize stakeholder value by streamlining business processes through mechanization and automation, optimizing efficiency, reducing costs, and delivering services and products that consistently exceed customer expectations.'
                                                      }
                                                </h2>
                                          </div>
                                          {/* LIST 5 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      {lang === 'ID' ?
                                                            'Mendorong perbaikan berkelanjutan dan inovasi, beradaptasi secara proaktif terhadap tuntutan pasar penerbangan yang terus berkembang.'
                                                            :
                                                            'Drive continuous improvement and innovation, adapting proactively to the evolving demands of the aviation market.'
                                                      }
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
