import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NavMenu() {
      const router = useRouter();
      return (
            <>
                  <Link href='/'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/' ? 'font-semibold' : 'font-normal'} text-base text-theme-brand hover:font-semibold hover:text-theme-brand transition-all duration-300 ease-in-out`}>
                              Home
                        </button>
                  </Link>
                  <Link href='/about'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/about' ? 'font-semibold' : 'font-normal'} text-base text-theme-brand hover:font-semibold hover:text-theme-brand transition-all duration-300 ease-in-out`}>
                              About
                        </button>
                  </Link>
                  <Link href='/services'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/services' ? 'font-semibold' : 'font-normal'} text-base text-theme-brand hover:font-semibold hover:text-theme-brand transition-all duration-300 ease-in-out`}>
                              Services
                        </button>
                  </Link>
                  <Link href='/gallery'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/gallery' ? 'font-semibold' : 'font-normal'} text-base text-theme-brand hover:font-semibold hover:text-theme-brand transition-all duration-300 ease-in-out`}>
                              Gallery
                        </button>
                  </Link>
                  <Link href='/contact'>
                        <button className={`block py-[5px] px-[10px] ${router.pathname === '/contact' ? 'font-semibold' : 'font-normal'} text-base text-theme-brand hover:font-semibold hover:text-theme-brand transition-all duration-300 ease-in-out`}>
                              Contact
                        </button>
                  </Link>
            </>
      )
}
