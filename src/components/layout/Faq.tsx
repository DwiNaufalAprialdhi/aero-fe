import React, { useEffect } from 'react'
import BadgeCategory from '../ui/BadgeCategory'
import ItemFaq from '../ui/ItemFaq'
import AOS from "aos";


export default function Faq() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className='w-full lg:mb-[150px] mb-[100px]'>
                        <section data-aos='fade-up' className='container_section flex flex-col items-center justify-center mb-[50px]'>
                              <BadgeCategory>
                                    FAQ
                              </BadgeCategory>
                              <h2 className='font-jakarta font-normal lg:text-[48px] text-[32px] text-center my-[14px]'>Frequently Asked <span className='font-bold'>Questions</span></h2>
                              <p className='font-normal lg:text-base text-sm text-theme-secondary text-center mb-[50px]'>Pertanyaan yang sering ditanyakan</p>
                              <div className='w-full flex flex-col gap-y-[14px]'>
                                    <ItemFaq
                                          title='Lorem ipsum dolor sit amet consectetur.'
                                          desc='Lorem ipsum dolor sit amet consectetur. Ornare cursus nunc odio ipsum scelerisque nunc penatibus. Egestas venenatis pulvinar blandit sapien. Fames magna sollicitudin varius sit diam. Non accumsan volutpat purus eget dui tempor. Tempor quis vulputate dui habitant cum. In mi eu consequat lobortis dis fusce sem. At ut turpis faucibus volutpat egestas sed nisi. Consectetur gravida varius volutpat at ullamcorper laoreet ut vitae aenean. Amet sem ullamcorper turpis lectus diam donec mi tempor a.'
                                    />
                                    <ItemFaq
                                          title='Lorem ipsum dolor sit amet consectetur.'
                                          desc='Lorem ipsum dolor sit amet consectetur. Ornare cursus nunc odio ipsum scelerisque nunc penatibus. Egestas venenatis pulvinar blandit sapien. Fames magna sollicitudin varius sit diam. Non accumsan volutpat purus eget dui tempor. Tempor quis vulputate dui habitant cum. In mi eu consequat lobortis dis fusce sem. At ut turpis faucibus volutpat egestas sed nisi. Consectetur gravida varius volutpat at ullamcorper laoreet ut vitae aenean. Amet sem ullamcorper turpis lectus diam donec mi tempor a.'
                                    />
                                    <ItemFaq
                                          title='Lorem ipsum dolor sit amet consectetur.'
                                          desc='Lorem ipsum dolor sit amet consectetur. Ornare cursus nunc odio ipsum scelerisque nunc penatibus. Egestas venenatis pulvinar blandit sapien. Fames magna sollicitudin varius sit diam. Non accumsan volutpat purus eget dui tempor. Tempor quis vulputate dui habitant cum. In mi eu consequat lobortis dis fusce sem. At ut turpis faucibus volutpat egestas sed nisi. Consectetur gravida varius volutpat at ullamcorper laoreet ut vitae aenean. Amet sem ullamcorper turpis lectus diam donec mi tempor a.'
                                    />
                                    <ItemFaq
                                          title='Lorem ipsum dolor sit amet consectetur.'
                                          desc='Lorem ipsum dolor sit amet consectetur. Ornare cursus nunc odio ipsum scelerisque nunc penatibus. Egestas venenatis pulvinar blandit sapien. Fames magna sollicitudin varius sit diam. Non accumsan volutpat purus eget dui tempor. Tempor quis vulputate dui habitant cum. In mi eu consequat lobortis dis fusce sem. At ut turpis faucibus volutpat egestas sed nisi. Consectetur gravida varius volutpat at ullamcorper laoreet ut vitae aenean. Amet sem ullamcorper turpis lectus diam donec mi tempor a.'
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
