import React from 'react'
import Accordion from './Elements/Accordion'
import Image from 'next/image'
import LabelSectionLight from '@/components/material/LabelSectionLight'

export default function AccordionService() {
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    <LabelSectionLight title='Services' />
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>Our Services and</span> <span className='font-bold text-theme-red'>Works</span>
                                    </h2>
                              </div>
                        </section>
                        <section className='container_section flex flex-col'>
                              <Accordion title="Services - Airframe">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <h2 className='w-full h-max lg:max-w-[220px] max-w-none font-bold lg:text-[24px] leading-normal text-sm'>
                                                      Capability Cessna 172 Series
                                                </h2>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Inspection, repair, alteration, and re-assembly in accordance with current manufacture annual or technical data as amended
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Maintenance on wing of Engine Lycoming O/IO 320/360 Series
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/airframe-1.svg'
                                                      alt='Airframe 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/airframe-2.svg'
                                                      alt='Airframe 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/airframe-3.svg'
                                                      alt='Airframe 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title="Services - Powerplant">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <h2 className='w-full h-max lg:max-w-[300px] max-w-none font-bold lg:text-[24px] leading-normal text-sm'>
                                                      Rotax Aircraft Engine (582/912/914 Series)
                                                </h2>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Maintenance on wing of aircraft and off wing for heavy maintenance in accordance with current manufacturer manual or technical data as amended
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/powerplant-1.svg'
                                                      alt='Powerplant 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/powerplant-2.svg'
                                                      alt='Powerplant 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/powerplant-3.svg'
                                                      alt='Powerplant 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 4 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/powerplant-4.svg'
                                                      alt='Powerplant 4'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title="Cabin Interior Furnishing & Exterior Painting">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <h2 className='w-full h-max lg:max-w-[300px] max-w-none font-bold lg:text-[24px] leading-normal text-sm'>
                                                      Interior and Exterior Maintenance
                                                </h2>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Aircraft Maintenance Organizatin\on
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Cabin Design
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Carpet Replacement
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Interior for Cabin refurbishment
                                                      </li>
                                                </ul>
                                                <ul className='lg:pl-0 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Sidewall installation
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Interior Painting
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Lavatory cleaning
                                                      </li>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Seat installation
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/painting-1.svg'
                                                      alt='Painting 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/painting-2.svg'
                                                      alt='Painting 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/painting-3.svg'
                                                      alt='Painting 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title="Aircraft Cabin Interior - Sewing Shop">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Sewing Shop has been equipped with standard tools and equipment and operated by professional, well trained, and experienced personnel
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/shop-1.svg'
                                                      alt='Shop 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/shop-2.svg'
                                                      alt='Shop 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title="Aircraft Cabin Interior - Interior Painting">
                                    <div className="w-full flex flex-col lg:gap-y-[50px] gap-y-5 lg:mb-[50px] mb-5">
                                          <div className='w-full flex lg:flex-row flex-col items-center lg:gap-[80px] gap-5'>
                                                <ul className='pl-5 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                      <li className='font-normal lg:text-base text-xs'>
                                                            Oven/Heater Equipment designed to operate with max. temperature of 400 C
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/interior-1.svg'
                                                      alt='Interior 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/interior-2.svg'
                                                      alt='Interior 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/interior-3.svg'
                                                      alt='Interior 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </div>
                              </Accordion>
                              <Accordion title="Services - Specialized Services">
                                    <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>
                                          {/* Image 1 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/special-1.svg'
                                                      alt='Special 1'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 2 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/special-2.svg'
                                                      alt='Special 2'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 3 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/special-3.svg'
                                                      alt='Special 3'
                                                      width={400} height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Image 4 */}
                                          <div className='w-full lg:h-[268px] h-[250px] col-span-1 rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/special-4.svg'
                                                      alt='Special 4'
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
