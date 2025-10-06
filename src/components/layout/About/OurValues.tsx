/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import LabelSectionLight from "@/components/material/LabelSectionLight";
import { useLangContext } from "@/components/hooks/LangContext";

// Import react-apexcharts secara dinamis (supaya jalan di Next.js)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function OurValues() {

      const { lang } = useLangContext();

      const [descriptions] = useState({
            "Solution Provider":
                  "We anticipate challenges and craft tailored, end-to-end aviation solutions. From its design planning, process workflows, until finishing touches, our mindset to problem  is always: How can we solve this?",
            Trustworthy:
                  "Integrity is non-negotiable. From transparent pricing to strict regulatory compliance, we build lasting confidence with clients, regulators, and communities by honoring our commitments without compromise.",
            Reliable:
                  "Precision and consistency define our operations. We meet deadlines, uphold rigorous quality standards, and ensure our products and services perform flawlessly.",
            Teamwork:
                  "Collaboration fuels our success. Cross-functional teams share insights, challenge the status quo, and unite behind common goals—creating an agile, supportive culture where everyone thrives.",
            "Social Responsibility":
                  "At every stage of our growth, we commit to giving back—empowering local communities and safeguarding the environment through targeted outreach, training programs, educational initiatives, and strategic partnerships ",
      });

      const chartOptions: ApexCharts.ApexOptions = {
            chart: {
                  type: "donut",
                  toolbar: { show: false },
            },
            labels: [
                  "Solution Provider",
                  "Trustworthy",
                  "Reliable",
                  "Teamwork",
                  "Social Responsibility",
            ],
            legend: {
                  position: "bottom",
                  labels: { colors: "#fff" },
            },
            tooltip: {
                  enabled: true,
                  custom: ({ seriesIndex, w }) => {
                        const label = w?.globals?.labels?.[seriesIndex];
                        const desc = descriptions[label as keyof typeof descriptions] || "";
                        return `
        <div style="
          padding:8px;
          max-width:250px;
          font-size:13px;
          color:#fff;
          white-space: normal;
          word-wrap: break-word;
          line-height:1.4;
        ">
          <strong>${label}</strong><br/>
          <span>${desc}</span>
        </div>
      `;
                  },
            },
            dataLabels: {
                  enabled: true,
                  style: {
                        colors: ["#fff"], // warna teks label di dalam chart
                        fontSize: "12px",
                        fontWeight: "bold",
                  },
                  formatter: function (_val, opts) {
                        return opts.w.globals.labels[opts.seriesIndex]; // tampilkan label, bukan value %
                  },
                  dropShadow: {
                        enabled: false,
                  },
            },
            colors: [
                  "#111827", // abu tua banget
                  "#1F2937", // abu tua
                  "#374151", // abu sedang
                  "#4B5563", // abu medium
                  "#6B7280", // abu terang
            ],
      };

      const chartSeries = [20, 20, 20, 20, 20];

      const [deskripsi] = useState({
            "Solution Provider":
                  "Kami mengantisipasi setiap tantangan dan merancang solusi yang terbaik untuk masalah di bidang aviasi. Mulai dari perencanaan, proses kerja, sampai dengan penyelesaian akhir, pola pikir kami terhadap masalah selalu: Bagaimana kami memecahkan ini?",
            Trustworthy:
                  "Integritas adalah harga mati. Mulai dari transparansi harga hingga kepatuhan ketat terhadap regulasi, kami membangun kepercayaan jangka panjang dengan klien, regulator, dan komunitas dengan menepati komitmen tanpa kompromi.",
            Reliable:
                  "Ketepatan dan konsistensi mendefinisikan operasi kami. Kami memenuhi tenggat waktu, menjaga standar kualitas tinggi, dan memastikan produk serta layanan kami berfungsi sempurna.",
            Teamwork:
                  "Kolaborasi adalah kunci kesuksesan kami. Tim lintas fungsi berbagi wawasan, menantang status quo, dan bersatu dengan tujuan bersama—menciptakan ketangkasan perusahaan dan budaya saling mendukung di mana setiap orang berkembang.",
            "Social Responsibility":
                  "Di setiap tahap pertumbuhan, kami berkomitmen untuk memberi kembali —memberdayakan komunitas lokal dan melindungi lingkungan dengan target yang terukur, program pelatihan, inisiatif di bidang pendidikan, dan kemitraan strategis.",
      });

      const chartOptionsID: ApexCharts.ApexOptions = {
            chart: {
                  type: "donut",
                  toolbar: { show: false },
            },
            labels: [
                  "Solution Provider",
                  "Trustworthy",
                  "Reliable",
                  "Teamwork",
                  "Social Responsibility",
            ],
            legend: {
                  position: "bottom",
                  labels: { colors: "#fff" },
            },
            tooltip: {
                  enabled: true,
                  custom: ({ seriesIndex, w }) => {
                        const label = w?.globals?.labels?.[seriesIndex];
                        const desc = deskripsi[label as keyof typeof deskripsi] || "";
                        return `
        <div style="
          padding:8px;
          max-width:250px;
          font-size:13px;
          color:#fff;
          white-space: normal;
          word-wrap: break-word;
          line-height:1.4;
        ">
          <strong>${label}</strong><br/>
          <span>${desc}</span>
        </div>
      `;
                  },
            },
            dataLabels: {
                  enabled: true,
                  style: {
                        colors: ["#fff"], // warna teks label di dalam chart
                        fontSize: "12px",
                        fontWeight: "bold",
                  },
                  formatter: function (_val, opts) {
                        return opts.w.globals.labels[opts.seriesIndex]; // tampilkan label, bukan value %
                  },
                  dropShadow: {
                        enabled: false,
                  },
            },
            colors: [
                  "#111827", // abu tua banget
                  "#1F2937", // abu tua
                  "#374151", // abu sedang
                  "#4B5563", // abu medium
                  "#6B7280", // abu terang
            ],
      };

      const chartSeriesID = [20, 20, 20, 20, 20];

      return (
            <>
                  <main className="w-full relative z-[2] text-slate-50">
                        <section className="container_section grid grid-cols-10 lg:gap-[50px] gap-0 lg:mb-[0px] mb-6 items-center">
                              {lang === 'ID' ? <>
                                    {/* Text */}
                                    <div className="w-full lg:col-span-4 col-span-10 flex flex-col">
                                          <LabelSectionLight title="Nilai-Nilai" />
                                          <h2 className="w-full md:max-w-[500px] max-w-none font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6 tracking-tight">
                                                <span className="font-bold">Prinsip di Balik</span>{" "}
                                                <span className="font-bold text-theme-red">Kesuksesan Kami</span>
                                          </h2>
                                    </div>
                                    <div className="w-full lg:col-span-6 col-span-10">
                                          {/* Simple Donut Chart Apex Chart */}
                                          <section className="md:grid lg:grid-cols-3 grid-cols-2 gap-6 mt-12">
                                                <div className="col-span-2 lg:col-span-3 hidden md:flex items-center justify-center">
                                                      <Chart
                                                            options={chartOptionsID}
                                                            series={chartSeriesID}
                                                            type="donut"
                                                            width="260%"
                                                      />
                                                </div>
                                                <div className="col-span-2 lg:col-span-3 md:hidden flex items-center justify-center">
                                                      <Chart
                                                            options={chartOptionsID}
                                                            series={chartSeriesID}
                                                            type="donut"
                                                            width="150%"
                                                      />
                                                </div>
                                          </section>
                                    </div>
                              </> : <>
                                    {/* Text */}
                                    <div className="w-full lg:col-span-4 col-span-10 flex flex-col">
                                          <LabelSectionLight title="Our Values" />
                                          <h2 className="w-full md:max-w-[500px] max-w-none font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6 tracking-tight">
                                                <span className="font-bold">Principles Behind Our</span>{" "}
                                                <span className="font-bold text-theme-red">Success</span>
                                          </h2>
                                    </div>
                                    <div className="w-full lg:col-span-6 col-span-10">
                                          {/* Simple Donut Chart Apex Chart */}
                                          <section className="md:grid lg:grid-cols-3 grid-cols-2 gap-6 mt-12">
                                                <div className="col-span-2 lg:col-span-3 hidden md:flex items-center justify-center">
                                                      <Chart
                                                            options={chartOptions}
                                                            series={chartSeries}
                                                            type="donut"
                                                            width="260%"
                                                      />
                                                </div>
                                                <div className="col-span-2 lg:col-span-3 md:hidden flex items-center justify-center">
                                                      <Chart
                                                            options={chartOptions}
                                                            series={chartSeries}
                                                            type="donut"
                                                            width="150%"
                                                      />
                                                </div>
                                          </section>
                                    </div>
                              </>}
                        </section>


                  </main>
            </>
      );
}
