/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import AOS from "aos";



const dataVendor = [
      { id: 1, image: '/assets/logo/vendor-1.svg' },
      { id: 2, image: '/assets/logo/vendor-2.svg' },
      { id: 3, image: '/assets/logo/vendor-3.svg' },
      { id: 4, image: '/assets/logo/vendor-4.svg' },
      { id: 5, image: '/assets/logo/vendor-5.svg' },
      { id: 6, image: '/assets/logo/vendor-6.svg' },
      { id: 7, image: '/assets/logo/vendor-7.svg' },
      { id: 8, image: '/assets/logo/vendor-8.svg' },
]

export default function Vendor() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className="w-full py-5">
                        <section data-aos="fade-up" className="container_section">
                              <h2 className="font-bold md:text-[24px] text-base text-center mb-[24px]">
                                    Our Vendors and Suppliers
                              </h2>
                              <div
                                    className="box_vendor w-full overflow-hidden transition-all duration-300 ease-in-out">
                                    <div className="scrolling-container translate-x-1/2 flex items-center gap-x-[24px]">
                                          {dataVendor.map((vendor) => (
                                                <div
                                                      key={vendor.id}
                                                      className="item_vendor md:min-w-[150px] min-w-[85px] md:min-h-[84px] min-h-[48px]"
                                                >
                                                      <img
                                                            src={vendor.image}
                                                            alt={`Vendor ${vendor.id}`}
                                                            className="w-full h-full object-contain"
                                                      />
                                                </div>
                                          ))}
                                          {/* Duplicate the vendor items to create the loop */}
                                          {dataVendor.map((vendor) => (
                                                <div
                                                      key={vendor.id + 1000}
                                                      className="item_vendor md:min-w-[150px] min-w-[85px] md:min-h-[84px] min-h-[48px]"
                                                >
                                                      <img
                                                            src={vendor.image}
                                                            alt={`Vendor ${vendor.id}`}
                                                            className="w-full h-full object-contain"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
