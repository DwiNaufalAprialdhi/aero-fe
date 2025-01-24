import BadgeCategory from '@/components/ui/BadgeCategory'
import React from 'react'
import Accordion from './Elements/Accordion'
import Image from 'next/image'

export default function AccordionDesign() {
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[150px] mb-[50px]">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div data-aos="fade-right" className='w-full flex flex-col'>
                                    <BadgeCategory>
                                          Services
                                    </BadgeCategory>
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold text-slate-800'>Engineering</span> <span className='font-bold text-theme-red'>Design</span>
                                    </h2>
                              </div>
                        </section>
                        <section data-aos="fade-left" className='container_section flex flex-col'>
                              <Accordion title="Cabin & Interior Re-Configuration">
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
                              <Accordion title="VIP Interior Arrangement">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Font Lounge for 4 VIP passenger
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            4 crashworthy VIP armchairs in club seating
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            2 folding tables
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            The front lounge is separated from the cockpit
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            by a partition with a folding door
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            1 toilet compartment
                                                      </li>
                                                </ul>
                                                <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Rear lounge for 6 passengers
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            6 crashworthy seats facing forward
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            The front and rear lounge are separated by a partition
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            1 steward seat on the RH
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            1 low galley on the RH rear part of the cabin
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            1 galley on the LH rear part of the cabin
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
                              <Accordion title="Medical Interior Arrangement">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <h2 className='w-full h-max lg:max-w-[300px] max-w-none font-bold lg:text-[24px] leading-normal text-sm'>
                                                      Helicopter Medical Evacuation (Medevac)
                                                </h2>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            We offers a medevac configuration as an evacuation medium for personnel who are injured during training or at times of war. So that it is easier to mobilize personnel who are sick/injured.
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
                              <Accordion title="VIP Interior Assessment">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max list-disc'>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            We provides service in VIP Interior Assessment for Recommended Cabin Outfitting / Upgrade & Refurbishment to several version
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Perform aircraft survey and provide report
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Prepare proposal based on customer requirement
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Provide interior rendering for modification and refurbishment
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Selection of finish materials
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            Estimate budgeting for cabin upgrade, master phasing plan and recommendation
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
                              <Accordion title="Stress Analysis">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                            We provides Engineering Services from conceptual design up to detail design, using 3D Max, AutoCAD, CATIA V5, Nastran/Patran, etc.
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
