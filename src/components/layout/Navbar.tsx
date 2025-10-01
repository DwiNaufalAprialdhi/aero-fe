import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../material/Button';
import NavMenu from '../material/NavMenu';
import IconHamburger from '../icon/IconHamburger';
import NavMenuMobile from '../material/NavMenuMobile';
import LangSwitcher from '../material/LangSwitcher';
import { useLangContext } from '../hooks/LangContext';

export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const { lang } = useLangContext()

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      return (
            <>
                  {/* Navbar */}
                  <nav className="fixed top-0 inset-x-0 w-full h-auto bg-[#1E293B]/50 border-b border-slate-800 backdrop-blur-sm z-50 drop-shadow-md lg:drop-shadow-none">
                        <div className="w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto lg:px-0 px-5 lg:py-4 py-5 flex items-center justify-between">
                              <div className="flex items-center space-x-[14px]">
                                    <div onClick={toggleMenu} className="w-max h-max block lg:hidden">
                                          <IconHamburger className="w-6 h-6 text-white" />
                                    </div>
                                    <Link href="/">
                                          <Image
                                                src="/assets/logo/asia-aero.svg"
                                                alt="Logo"
                                                width={151}
                                                height={69}
                                                className="lg:w-[151px] w-[103px] h-auto object-cover"
                                          />
                                    </Link>
                              </div>

                              {/* Kondisi Desktop */}
                              <div className="hidden lg:flex items-center space-x-[50px]">
                                    <div className="flex items-center justify-between space-x-6">
                                          <NavMenu />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                          <Button link={'/contact'}>
                                                {lang === 'ID' ? 'Kontak Kami' : 'Contact Us'}
                                          </Button>
                                          <LangSwitcher />
                                    </div>
                              </div>
                              {/* Kondisi Mobile */}
                              <div className='lg:hidden block'>
                                    <LangSwitcher />
                              </div>
                        </div>
                  </nav>

                  {/* Overlay Mobile Menu */}
                  {/* Background Overlay */}
                  <div
                        className={`fixed lg:hidden top-0 inset-x-0 w-full min-h-screen bg-black/30 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                              }`}
                        onClick={toggleMenu}
                  ></div>

                  {/* Sliding Menu */}
                  <div
                        className={`fixed lg:hidden top-0 inset-y-0 left-0 w-[80%] h-full bg-[#1E293B] z-40 pt-[118px] transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                              }`}
                  >
                        <div className='flex flex-col'>
                              <NavMenuMobile />
                        </div>
                  </div>
            </>
      );
}
