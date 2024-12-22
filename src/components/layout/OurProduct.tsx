import React, { useEffect, useRef } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import IconLeftCircle from '../icon/IconLeftCircle';
import IconRightCircle from '../icon/IconRightCircle';
import ItemProduct from '../ui/ItemProduct';
import AOS from "aos";

const productItems = [
      { id: 1, title: 'Aviation Asset Management', image: '/assets/images/product-1.png' },
      { id: 2, title: 'Aircraft Maintenance', image: '/assets/images/product-2.png' },
      { id: 3, title: 'Aviation Supply Chain', image: '/assets/images/product-3.png' },
      { id: 4, title: 'Aviation  Consultant', image: '/assets/images/product-4.png' },
]

export default function OurProduct() {
      const productContainerRef = useRef<HTMLDivElement>(null);

      const scrollLeft = () => {
            if (productContainerRef.current) {
                  productContainerRef.current.scrollBy({
                        left: -400, // Adjust scroll amount as needed
                        behavior: 'smooth',
                  });
            }
      };

      const scrollRight = () => {
            if (productContainerRef.current) {
                  productContainerRef.current.scrollBy({
                        left: 400, // Adjust scroll amount as needed
                        behavior: 'smooth',
                  });
            }
      };

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);

      return (
            <>
                  <main className="w-full lg:mb-[150px] mb-[100px] overflow-hidden">
                        <section data-aos="fade-right" className="container_section flex flex-col mb-[50px]">
                              <BadgeCategory>Our Product and Service</BadgeCategory>
                              <h2 className="w-full max-w-[651px] font-jakarta font-bold lg:text-[48px] text-[32px] mt-[14px]">
                                    Advanced Aviation Services, Management, and Hangar Leasing
                              </h2>
                        </section>
                        <section data-aos="fade-left" className="w-full flex justify-end mb-[50px]">
                              <div
                                    ref={productContainerRef}
                                    className="w-full max-w-[1440px] pl-[30px] md:pl-5 lg:pl-0 flex items-center gap-x-6 overflow-x-auto custom-scrollbar pb-3"
                              >
                                    {/* Product Items */}
                                    {productItems.map((item) => (
                                          <ItemProduct key={item.id} title={item.title} image={item.image} />
                                    ))}
                              </div>
                        </section>
                        <section data-aos="fade-left" className="container_section grid grid-cols-10">
                              <div className="col-span-10 flex items-center lg:justify-start md:justify-center justify-start gap-x-[14px]">
                                    <div className="cursor-pointer" onClick={scrollLeft}>
                                          <IconLeftCircle className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="cursor-pointer" onClick={scrollRight}>
                                          <IconRightCircle className="w-[48px] h-[48px]" />
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      );
}
