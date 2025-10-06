import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React from 'react'

export default function OurTeams() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-800 lg:pb-[250px] pb-[200px]'>
                        <section className='container_section flex flex-col items-start justify-start'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    <LabelSectionDark title='Our Teams' />
                                    <h2 className='w-full md:max-w-[500px] max-w-none font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>Trusted Hands</span> <span className='font-bold text-slate-700'>Behind</span> <span className='font-bold text-theme-red'>Every Flight</span>
                                    </h2>
                              </div>

                              {/* Teams */}
                              <div className='w-full flex flex-col lg:gap-6 gap-5'>
                                    <div className='w-full flex lg:flex-row flex-col items-center gap-2'>
                                          {/* PROFILE */}
                                          <div className='lg:w-[450px] h-[450px] w-full bg-transparent flex-shrink-0 overflow-hidden'>
                                                <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                          </div>
                                          {/* DESC */}
                                          <p className='block w-full font-medium lg:text-base text-sm text-slate-800 leading-normal flex-grow-0'>
                                                Pengusaha berpengalaman dengan lebih dari satu dekade di industri penerbangan Indonesia, Mohamad Nazars telah membangun reputasi atas inovasi strategis dan keunggulan operasional. Kariernya dimulai dengan pendirian PT Aero Teknologi Internasional, perusahaan teknologi penerbangan yang menjadi perwakilan resmi AEROPROC LLC (AS). Di bawah kepemimpinannya, perusahaan tersebut sukses memperkenalkan dan memasarkan solusi penerbangan kelas dunia—termasuk AT-802 FuelBoss, helikopter Kaman K-Max, dan peralatan khusus dari SEI Industries ke pasar Indonesia. Ia juga dikenal atas kontribusinya membantu pemerintah Indonesia membangun sistem pengangkutan bahan bakar terbang paling efisien ke daerah terpencil di Papua menggunakan pesawat AT-802 FuelBoss, sehingga menurunkan harga bahan bakar di wilayah tersebut. Saat ini, di PT Asia Aero Technology, ia mempelopori pengembangan unit bisnis strategis rantai pasok suku cadang pesawat udara—inisiatif berani yang memberikan dukungan krusial bagi MRO nasional, maskapai komersial, dan sektor penerbangan militer. Pekerjaanya mencerminkan komitmen untuk meningkatkan infrastruktur penerbangan Indonesia dengan memadukan wawasan teknis dan kepemimpinan pragmatis. Visi Mohamad Nazars adalah mentransformasi PT Asia Aero Technology menjadi pusat penerbangan regional yang unggul, memberdayakan stakeholder industry penerbangan dengan layanan andal, kemitraan global, dan solusi rantai pasok yang berpandangan ke depan.
                                          </p>
                                    </div>
                                    <div className='w-full flex lg:flex-row flex-col items-center gap-2'>
                                          {/* DESC */}
                                          <p className='block w-full font-medium lg:text-base text-sm text-slate-800 leading-normal flex-grow-0 lg:text-end text-start lg:order-1 order-2'>
                                                Pengusaha berpengalaman dengan lebih dari satu dekade di industri penerbangan Indonesia, Mohamad Nazars telah membangun reputasi atas inovasi strategis dan keunggulan operasional. Kariernya dimulai dengan pendirian PT Aero Teknologi Internasional, perusahaan teknologi penerbangan yang menjadi perwakilan resmi AEROPROC LLC (AS). Di bawah kepemimpinannya, perusahaan tersebut sukses memperkenalkan dan memasarkan solusi penerbangan kelas dunia—termasuk AT-802 FuelBoss, helikopter Kaman K-Max, dan peralatan khusus dari SEI Industries ke pasar Indonesia. Ia juga dikenal atas kontribusinya membantu pemerintah Indonesia membangun sistem pengangkutan bahan bakar terbang paling efisien ke daerah terpencil di Papua menggunakan pesawat AT-802 FuelBoss, sehingga menurunkan harga bahan bakar di wilayah tersebut. Saat ini, di PT Asia Aero Technology, ia mempelopori pengembangan unit bisnis strategis rantai pasok suku cadang pesawat udara—inisiatif berani yang memberikan dukungan krusial bagi MRO nasional, maskapai komersial, dan sektor penerbangan militer. Pekerjaanya mencerminkan komitmen untuk meningkatkan infrastruktur penerbangan Indonesia dengan memadukan wawasan teknis dan kepemimpinan pragmatis. Visi Mohamad Nazars adalah mentransformasi PT Asia Aero Technology menjadi pusat penerbangan regional yang unggul, memberdayakan stakeholder industry penerbangan dengan layanan andal, kemitraan global, dan solusi rantai pasok yang berpandangan ke depan.
                                          </p>
                                          {/* PROFILE */}
                                          <div className='lg:w-[450px] h-[450px] w-full bg-transparent flex-shrink-0 overflow-hidden lg:order-2 order-1'>
                                                <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                          </div>
                                    </div>
                                    <div className='w-full flex lg:flex-row flex-col items-center gap-2'>
                                          {/* PROFILE */}
                                          <div className='lg:w-[450px] h-[450px] w-full bg-transparent flex-shrink-0 overflow-hidden'>
                                                <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                          </div>
                                          {/* DESC */}
                                          <p className='block w-full font-medium lg:text-base text-sm text-slate-800 leading-normal flex-grow-0'>
                                                Pengusaha berpengalaman dengan lebih dari satu dekade di industri penerbangan Indonesia, Mohamad Nazars telah membangun reputasi atas inovasi strategis dan keunggulan operasional. Kariernya dimulai dengan pendirian PT Aero Teknologi Internasional, perusahaan teknologi penerbangan yang menjadi perwakilan resmi AEROPROC LLC (AS). Di bawah kepemimpinannya, perusahaan tersebut sukses memperkenalkan dan memasarkan solusi penerbangan kelas dunia—termasuk AT-802 FuelBoss, helikopter Kaman K-Max, dan peralatan khusus dari SEI Industries ke pasar Indonesia. Ia juga dikenal atas kontribusinya membantu pemerintah Indonesia membangun sistem pengangkutan bahan bakar terbang paling efisien ke daerah terpencil di Papua menggunakan pesawat AT-802 FuelBoss, sehingga menurunkan harga bahan bakar di wilayah tersebut. Saat ini, di PT Asia Aero Technology, ia mempelopori pengembangan unit bisnis strategis rantai pasok suku cadang pesawat udara—inisiatif berani yang memberikan dukungan krusial bagi MRO nasional, maskapai komersial, dan sektor penerbangan militer. Pekerjaanya mencerminkan komitmen untuk meningkatkan infrastruktur penerbangan Indonesia dengan memadukan wawasan teknis dan kepemimpinan pragmatis. Visi Mohamad Nazars adalah mentransformasi PT Asia Aero Technology menjadi pusat penerbangan regional yang unggul, memberdayakan stakeholder industry penerbangan dengan layanan andal, kemitraan global, dan solusi rantai pasok yang berpandangan ke depan.
                                          </p>
                                    </div>
                                    <div className='w-full flex lg:flex-row flex-col items-center gap-2'>
                                          {/* DESC */}
                                          <p className='block w-full font-medium lg:text-base text-sm text-slate-800 leading-normal flex-grow-0 lg:text-end text-start lg:order-1 order-2'>
                                                Pengusaha berpengalaman dengan lebih dari satu dekade di industri penerbangan Indonesia, Mohamad Nazars telah membangun reputasi atas inovasi strategis dan keunggulan operasional. Kariernya dimulai dengan pendirian PT Aero Teknologi Internasional, perusahaan teknologi penerbangan yang menjadi perwakilan resmi AEROPROC LLC (AS). Di bawah kepemimpinannya, perusahaan tersebut sukses memperkenalkan dan memasarkan solusi penerbangan kelas dunia—termasuk AT-802 FuelBoss, helikopter Kaman K-Max, dan peralatan khusus dari SEI Industries ke pasar Indonesia. Ia juga dikenal atas kontribusinya membantu pemerintah Indonesia membangun sistem pengangkutan bahan bakar terbang paling efisien ke daerah terpencil di Papua menggunakan pesawat AT-802 FuelBoss, sehingga menurunkan harga bahan bakar di wilayah tersebut. Saat ini, di PT Asia Aero Technology, ia mempelopori pengembangan unit bisnis strategis rantai pasok suku cadang pesawat udara—inisiatif berani yang memberikan dukungan krusial bagi MRO nasional, maskapai komersial, dan sektor penerbangan militer. Pekerjaanya mencerminkan komitmen untuk meningkatkan infrastruktur penerbangan Indonesia dengan memadukan wawasan teknis dan kepemimpinan pragmatis. Visi Mohamad Nazars adalah mentransformasi PT Asia Aero Technology menjadi pusat penerbangan regional yang unggul, memberdayakan stakeholder industry penerbangan dengan layanan andal, kemitraan global, dan solusi rantai pasok yang berpandangan ke depan.
                                          </p>
                                          {/* PROFILE */}
                                          <div className='lg:w-[450px] h-[450px] w-full bg-transparent flex-shrink-0 overflow-hidden lg:order-2 order-1'>
                                                <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
