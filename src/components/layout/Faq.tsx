import React, { useEffect } from 'react'
import ItemFaq from '../ui/ItemFaq'
import AOS from "aos";
import LabelSectionLight from '../material/LabelSectionLight';


export default function Faq() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className='w-full relative z-[3] overflow-hidden'>
                        <section className='container_section grid grid-cols-12 text-slate-50'>
                              <div className='w-full lg:col-span-5 col-span-12 flex flex-col'>
                                    <LabelSectionLight title='FAQ' />
                                    <h2 className='font-normal lg:text-[48px] text-[32px] my-[14px] leading-tight'>Frequently Asked <span className='font-bold text-theme-red'>Questions</span></h2>
                                    <p className='font-normal lg:text-base text-sm text-theme-secondary mb-[50px]'>Pertanyaan yang sering ditanyakan</p>
                              </div>
                              <div className='w-full lg:col-span-7 col-span-12 flex flex-col gap-y-[14px]'>
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
