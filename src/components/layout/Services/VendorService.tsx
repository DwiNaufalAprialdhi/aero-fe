/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import { useLangContext } from '@/components/hooks/LangContext';



const dataVendor = [
      { id: 1, image: '/assets/logo/vendor-service-1.svg', link: 'https://miamiparagliding.com/' },
      { id: 2, image: '/assets/logo/vendor-service-2.svg', link: 'https://www.psm.com/products/aviation' },
      { id: 3, image: '/assets/logo/vendor-service-3.svg', link: 'https://www.haywardandgreen.com/' },
      { id: 4, image: '/assets/logo/vendor-service-4.svg', link: 'https://www.rotorplace.com/en/' },
      { id: 5, image: '/assets/logo/vendor-service-5.svg', link: 'https://aerocpp.com/' },
      { id: 6, image: '/assets/logo/vendor-service-6.svg', link: 'https://www.aircraftspruce.com/' },
      { id: 7, image: '/assets/logo/vendor-service-7.svg', link: 'https://www.aeropb.com/' },
      { id: 8, image: '/assets/logo/vendor-service-8.svg', link: 'https://skygeek.com/?srsltid=AfmBOorTD2NZ1AloqNcUaUXq4IedoXaaz6JrDSEbfY9v-zC9zdLR7HmT' },
      { id: 8, image: '/assets/logo/vendor-service-9.svg', link: 'https://ccas.asia/' },
]

export default function VendorService() {
      const { lang } = useLangContext()
      return (
            <>
                  <main className="w-full py-5 lg:mb-[150px] mb-[50px]">
                        <section className="container_section">
                              <h2 className="font-bold md:text-[24px] text-base text-center mb-[24px]">
                                    {lang === 'ID' ? 'Vendor dan Pemasok Kami' : 'Our Vendors and Suppliers'}
                              </h2>
                              <div
                                    className="box_vendor w-full overflow-hidden transition-all duration-300 ease-in-out">
                                    <div className="scrolling-container translate-x-1/2 flex items-center gap-x-[24px]">
                                          {dataVendor.map((vendor) => (
                                                <Link
                                                      target="_blank"
                                                      href={vendor.link}
                                                      key={vendor.id + 1000}
                                                      className="item_vendor md:min-w-[150px] min-w-[85px] md:min-h-[84px] min-h-[48px]"
                                                >
                                                      <img
                                                            src={vendor.image}
                                                            alt={`Vendor ${vendor.id}`}
                                                            className="w-full h-full object-contain"
                                                      />
                                                </Link>
                                          ))}
                                          {/* Duplicate the vendor items to create the loop */}
                                          {dataVendor.map((vendor) => (
                                                <Link
                                                      target="_blank"
                                                      href={vendor.link}
                                                      key={vendor.id + 1000}
                                                      className="item_vendor md:min-w-[150px] min-w-[85px] md:min-h-[84px] min-h-[48px]"
                                                >
                                                      <img
                                                            src={vendor.image}
                                                            alt={`Vendor ${vendor.id}`}
                                                            className="w-full h-full object-contain"
                                                      />
                                                </Link>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
