import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useLangContext } from '../hooks/LangContext';

export default function NavMenu() {
      const router = useRouter();
      const { lang } = useLangContext()

      return (
            <>
                  <Link href='/' className='block flex-shrink-0'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/' ? 'font-semibold' : 'font-normal'} text-base text-white hover:font-medium hover:text-white transition-all duration-300 ease-in-out`}>
                              {lang === "ID" ? "Beranda" : "Home"}
                        </button>
                  </Link>
                  <Link href='/about' className='block flex-shrink-0'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/about' ? 'font-semibold' : 'font-normal'} text-base text-white hover:font-medium hover:text-white transition-all duration-300 ease-in-out`}>
                              {lang === "ID" ? "Tentang" : "About"}
                        </button>
                  </Link>
                  <Link href='/services' className='block flex-shrink-0'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/services' ? 'font-semibold' : 'font-normal'} text-base text-white hover:font-medium hover:text-white transition-all duration-300 ease-in-out`}>
                              {lang === "ID" ? "Layanan" : "Services"}
                        </button>
                  </Link>
                  <Link href='/gallery' className='block flex-shrink-0'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/gallery' ? 'font-semibold' : 'font-normal'} text-base text-white hover:font-medium hover:text-white transition-all duration-300 ease-in-out`}>
                              {lang === "ID" ? "Galeri" : "Gallery"}
                        </button>
                  </Link>
                  <Link href='/teams' className='block flex-shrink-0'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/gallery' ? 'font-semibold' : 'font-normal'} text-base text-white hover:font-medium hover:text-white transition-all duration-300 ease-in-out`}>
                              {lang === "ID" ? "Tim" : "Teams"}
                        </button>
                  </Link>
            </>
      )
}
