import Link from 'next/link'
import React from 'react'
import { useLangContext } from '../hooks/LangContext'

export default function NavMenuMobile() {
      const { lang } = useLangContext()
      return (
            <>
                  <Link href={'/'} className='py-5 px-[30px] border-b border-slate-200/50 font-medium text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        {lang === "ID" ? 'Beranda' : 'Home'}
                  </Link>
                  <Link href={'/about'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        {lang === "ID" ? 'Tentang' : 'About'}
                  </Link>
                  <Link href={'/services'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        {lang === "ID" ? 'Layanan' : 'Services'}
                  </Link>
                  <Link href={'/gallery'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        {lang === "ID" ? 'Galeri' : 'Gallery'}
                  </Link>
                  <Link href={'/teams'} className='py-5 px-[30px] border-b border-slate-200/50 font-normal text-base text-slate-50 hover:bg-[#1E293B]/50 hover:font-medium transition-all duration-200 ease-in-out'>
                        {lang === "ID" ? 'Tim' : 'Teams'}
                  </Link>
            </>
      )
}
