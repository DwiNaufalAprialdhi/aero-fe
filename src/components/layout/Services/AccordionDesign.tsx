import React from 'react'
import Accordion from './Elements/Accordion'
import Image from 'next/image'
import LabelSectionLight from '@/components/material/LabelSectionLight'
import { useLangContext } from '@/components/hooks/LangContext'

export default function AccordionDesign() {
      const { lang } = useLangContext()
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    {lang === 'ID' ? <>
                                          <LabelSectionLight title='Layanan' />
                                          <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>Desain</span> <span className='font-bold text-theme-red'>Teknik</span>
                                          </h2>
                                    </> : <>
                                          <LabelSectionLight title='Services' />
                                          <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>Engineering</span> <span className='font-bold text-theme-red'>Design</span>
                                          </h2>
                                    </>}
                              </div>
                        </section>
                        <section className='container_section flex flex-col'>
                              <Accordion title={`${lang === 'ID' ? 'Konfigurasi Ulang Kabin & Interior' : 'Cabin & Interior Re-Configuration'}`}>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/cabin-1.svg'
                                                      alt='Cabin 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/cabin-2.svg'
                                                      alt='Cabin 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/cabin-3.svg'
                                                      alt='Cabin 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title={`${lang === 'ID' ? 'Penataan Interior VIP' : 'VIP Interior Arrangement'}`}>
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? 'Font Lounge untuk 4 penumpang VIP' : 'Front Lounge for 4 VIP passengers'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '4 kursi VIP berstandar keselamatan (crashworthy) dengan formasi club seating' : '4 crashworthy VIP armchairs in club seating'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '2 meja lipat' : '2 folding tables'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? 'Ruang lounge depan terpisah dari kokpit' : 'The front lounge is separated from the cockpit'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? 'oleh sekat dengan pintu lipat' : 'by a partition with a folding door'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '1 kompartemen toilet' : '1 toilet compartment'}
                                                      </li>
                                                </ul>
                                                <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? 'Lounge belakang untuk 6 penumpang' : 'Rear lounge for 6 passengers'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '6 kursi berstandar keselamatan (crashworthy) menghadap ke depan' : '6 crashworthy seats facing forward'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? 'Lounge depan dan belakang dipisahkan oleh sekat' : 'The front and rear lounge are separated by a partition'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '1 kursi pramugari di sisi kanan (RH)' : '1 steward seat on the RH'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '1 dapur rendah di bagian belakang kanan kabin' : '1 low galley on the RH rear part of the cabin'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID' ? '1 dapur di bagian belakang kiri kabin' : '1 galley on the LH rear part of the cabin'}
                                                      </li>

                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/vip-1.svg'
                                                      alt='Vip 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/vip-2.svg'
                                                      alt='Vip 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title={`${lang === 'ID' ? 'Pengaturan Interior Medis' : 'Medical Interior Arrangement'}`}>
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <h2 className='w-full h-max lg:max-w-[300px] max-w-none font-bold lg:text-[24px] leading-normal text-sm'>
                                                      {lang === 'ID' ? 'Helikopter Evakuasi Medis (Medevac)' : 'Helicopter Medical Evacuation (Medevac)'}
                                                </h2>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Kami menawarkan konfigurasi medevac sebagai sarana evakuasi bagi personel yang terluka selama pelatihan atau dalam situasi perang, sehingga memudahkan mobilisasi personel yang sakit atau terluka.'
                                                                  : 'We offer a medevac configuration as an evacuation medium for personnel who are injured during training or at times of war, making it easier to mobilize sick or injured personnel.'}
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/medical-1.svg'
                                                      alt='Medical 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/medical-2.svg'
                                                      alt='Medical 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/medical-3.svg'
                                                      alt='Medical 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title={`${lang === 'ID' ? 'Penilaian Interior VIP' : 'VIP Interior Assessment'}`}>
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Kami menyediakan layanan Penilaian Interior VIP untuk rekomendasi penataan kabin, peningkatan, dan peremajaan ke berbagai versi.'
                                                                  : 'We provide service in VIP Interior Assessment for recommended cabin outfitting, upgrade, and refurbishment to several versions.'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Melakukan survei pesawat dan memberikan laporan hasil penilaian.'
                                                                  : 'Perform aircraft survey and provide report.'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Menyusun proposal berdasarkan kebutuhan pelanggan.'
                                                                  : 'Prepare proposal based on customer requirement.'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Menyediakan rendering interior untuk modifikasi dan peremajaan kabin.'
                                                                  : 'Provide interior rendering for modification and refurbishment.'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Melakukan pemilihan bahan finishing.'
                                                                  : 'Selection of finish materials.'}
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Menyusun estimasi anggaran untuk peningkatan kabin, rencana pelaksanaan utama, dan rekomendasi.'
                                                                  : 'Estimate budgeting for cabin upgrade, master phasing plan, and recommendation.'}
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/assessment-1.svg'
                                                      alt='Assessment 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/assessment-2.svg'
                                                      alt='Assessment 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/assessment-3.svg'
                                                      alt='Assessment 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title={`${lang === 'ID' ? 'Analisis Tegangan' : 'Stress Analysis'}`}>
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            {lang === 'ID'
                                                                  ? 'Kami menyediakan layanan rekayasa (Engineering Services) mulai dari desain konseptual hingga desain detail, menggunakan 3D Max, AutoCAD, CATIA V5, Nastran/Patran, dan lainnya.'
                                                                  : 'We provide Engineering Services from conceptual design up to detail design, using 3D Max, AutoCAD, CATIA V5, Nastran/Patran, etc.'}
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/analysis-1.svg'
                                                      alt='Analysis 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/analysis-2.svg'
                                                      alt='Analysis 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/analysis-3.svg'
                                                      alt='Analysis 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                        </section>
                  </main>
            </>
      )
}
