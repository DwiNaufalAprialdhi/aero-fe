/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import AOS from "aos";
import Link from 'next/link';



const dataVendor = [
      { id: 1, image: '/assets/logo/vendor-1.svg', link: 'https://laversab.com/' },
      { id: 2, image: '/assets/logo/vendor-2.svg', link: 'http://www.aeroproc.com/?fbclid=PAZXh0bgNhZW0CMTEAAabgqi4PHkzw6_TfyMfcZ_kNUT-N6ggPjmSNq22KcanwJZCg3aR4gwJbbi8_aem_5lAIzlgw-Sr0CaEKj_7dyg' },
      { id: 3, image: '/assets/logo/vendor-3.svg', link: 'https://txtav.com/' },
      { id: 4, image: '/assets/logo/vendor-4.svg', link: 'https://www.satair.com/' },
      { id: 5, image: '/assets/logo/vendor-5.svg', link: 'https://www.boeing.com/' },
      { id: 6, image: '/assets/logo/vendor-6.svg', link: 'https://www.partsbase.com/' },
      { id: 7, image: '/assets/logo/vendor-7.svg', link: 'https://www.wencor.com/' },
      { id: 8, image: '/assets/logo/vendor-8.svg', link: 'https://www.flyrotax.com/' },
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
                  <main className="w-full pt-5 pb-[100px]">
                        <section className="container_section">
                              <h2 className="font-bold text-[24px] text-center mb-[24px]">
                                    Our Vendors and Suppliers
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
