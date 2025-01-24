import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
      wide: string;
      wideLatest?: string;
      title: string;
      images: string;
};

export default function Wide(props: Props) {
      const { ref, inView } = useInView({ triggerOnce: true });

      // Konversi `wide` menjadi angka dan satuan
      const number = parseFloat(props.wide.replace(/[^0-9.]/g, "")); // Ambil angka
      const suffix = props.wide.replace(/[0-9.]/g, "").trim(); // Ambil satuan

      return (
            <div ref={ref} className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-[14px] border-l-[4px] border-theme-donker pl-[14px]">
                        <h2 className="font-bold lg:text-[48px] text-[24px]">
                              {inView ? (
                                    <CountUp start={0} end={number} duration={2.5} />
                              ) : (
                                    0
                              )}
                              <span className="ml-1">{suffix}{props.wideLatest}</span>
                        </h2>
                        <h2 className="font-normal lg:text-[24px] leading-normal text-base">{props.title}</h2>
                  </div>
                  <div className="lg:w-[268px] w-[150px] lg:h-[268px] h-[150px] overflow-hidden rounded-[16px]">
                        <Image
                              src={props.images}
                              alt={props.title}
                              width={268}
                              height={268}
                              className="w-full h-full object-cover"
                        />
                  </div>
            </div>
      );
}
