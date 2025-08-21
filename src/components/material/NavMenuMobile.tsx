import Link from 'next/link'
import React from 'react'

export default function NavMenuMobile() {
      return (
            <>
                  <Link href={'/'} className='py-5 px-[30px] border-b border-slate-200/50 font-medium text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        Home
                  </Link>
                  <Link href={'/about'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        About
                  </Link>
                  <Link href={'/services'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        Services
                  </Link>
                  <Link href={'/gallery'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        Gallery
                  </Link>
                  <Link href={'/contact'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        Contact
                  </Link>
            </>
      )
}
