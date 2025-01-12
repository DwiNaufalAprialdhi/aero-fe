import React, { useEffect } from 'react'
import BadgeCategory from '../ui/BadgeCategory'
import Button from '../material/Button'
import AOS from "aos";


export default function Contact() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className='w-full overflow-hidden lg:mb-[150px] mb-[100px]'>
                        <section data-aos='fade-up' className='container_section flex flex-col items-center justify-center'>
                              <BadgeCategory>
                                    Contact Us
                              </BadgeCategory>

                              <h2 className='font-bold text-center lg:text-[48px] text-[32px] my-[14px]'>Contact Our Team</h2>

                              <p className='font-normal lg:text-base text-sm text-center text-theme-secondary mb-[50px]'>&quot;We are commited to develop general aviation airport of Indonesia&quot;</p>

                        </section>
                        <section className='container_section flex lg:flex-row flex-col items-start gap-[100px]'>
                              <form action={'#'} className='lg:w-[70%] w-[100%] flex flex-col'>
                                    <div className='w-full grid grid-cols-2 gap-6 items-center mb-6'>
                                          <div className='w-full col-span-1 flex flex-col gap-y-[8px]'>
                                                <label htmlFor="fn" className='label'>First Name</label>
                                                <input type="text" name='fn' id='fn' className='form_input' placeholder='First Name' />
                                          </div>
                                          <div className='w-full col-span-1 flex flex-col gap-y-[8px]'>
                                                <label htmlFor="ln" className='label'>Last Name</label>
                                                <input type="text" name='ln' id='ln' className='form_input' placeholder='Last Name' />
                                          </div>
                                    </div>
                                    <div className='w-full flex flex-col gap-y-[8px] mb-6'>
                                          <label htmlFor="email" className='label'>Email</label>
                                          <input type="text" name='email' id='email' className='form_input' placeholder='you@company.com' />
                                    </div>
                                    <div className='w-full flex flex-col gap-y-[8px] mb-6'>
                                          <label htmlFor="subject" className='label'>Subject</label>
                                          <input type="text" name='subject' id='subject' className='form_input' placeholder='Subject' />
                                    </div>
                                    <div className='w-full flex flex-col gap-y-[8px] mb-[50px]'>
                                          <label htmlFor="message" className='label'>Message</label>
                                          <textarea rows={7} name="message" id="message" className='form_input' placeholder='Leave us a message...'></textarea>
                                    </div>
                                    <Button link={'#'} className='flex items-center justify-center w-full'>
                                          Send message
                                    </Button>
                              </form>
                              <div className='lg:w-[30%] w-[100%] flex flex-col'>
                                    <div className='w-full flex flex-col mb-[24px]'>
                                          <h2 className='font-semibold text-[24px] text-theme-brand'>Chat with us</h2>
                                          <p className='font-normal text-base text-theme-secondary'>Speak to our friendly team.</p>
                                    </div>
                                    <div className='flex flex-col gap-y-[14px] mb-[50px]'>
                                          <div className='w-full flex items-center gap-x-[8px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.3009 13.695L20.102 3.89754M10.5795 14.1356L12.8019 18.5805C13.339 19.6546 13.6075 20.1917 13.9458 20.3357C14.2394 20.4607 14.575 20.438 14.8492 20.2748C15.1651 20.0867 15.3591 19.5184 15.7472 18.3819L19.9463 6.08446C20.2845 5.09421 20.4535 4.59908 20.3378 4.27154C20.2371 3.9866 20.013 3.76246 19.7281 3.66179C19.4005 3.54607 18.9054 3.71514 17.9151 4.05327L5.61763 8.25242C4.48114 8.64049 3.91289 8.83453 3.72478 9.15044C3.56153 9.42459 3.53891 9.76019 3.66389 10.0537C3.80791 10.392 4.34498 10.6606 5.41912 11.1976L9.86397 13.4201C10.041 13.5086 10.1295 13.5528 10.2061 13.6119C10.2742 13.6644 10.3352 13.7254 10.3876 13.7934C10.4468 13.8701 10.491 13.9586 10.5795 14.1356Z" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <h2 className='font-semibold text-base text-theme-brand underline'>Shoot us an email</h2>
                                          </div>
                                          <div className='w-full flex items-center gap-x-[8px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <g clip-path="url(#clip0_78_83)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04359 0.147275C5.09013 0.235415 3.39698 0.713011 2.02979 2.07442C0.657834 3.44299 0.18617 5.14285 0.0978101 7.07599C0.0428837 8.28256 -0.278297 17.398 0.653059 19.7885C1.28113 21.4012 2.51813 22.6412 4.14561 23.2713C4.90503 23.5667 5.77193 23.7666 7.04359 23.825C17.6766 24.3062 21.6181 24.0442 23.2802 19.7885C23.5751 19.031 23.7781 18.1648 23.8342 16.8963C24.3202 6.23605 23.7555 3.92538 21.9023 2.07442C20.4324 0.608191 18.7034 -0.389905 7.04359 0.147275ZM7.14147 21.6811C5.97728 21.6286 5.34564 21.4347 4.92414 21.2715C3.86383 20.8594 3.0674 20.0662 2.65784 19.0121C1.94858 17.1957 2.18382 8.56863 2.2471 7.17267C2.30919 5.80529 2.58621 4.55561 3.551 3.59083C4.74504 2.39973 6.28773 1.81599 16.7918 2.29005C18.1625 2.35198 19.4151 2.62843 20.3823 3.59083C21.5763 4.78191 22.1686 6.33648 21.6862 16.8002C21.6336 17.9615 21.439 18.5917 21.2754 19.0121C20.1948 21.7814 17.7088 22.1658 7.14147 21.6811ZM16.9076 5.62755C16.9076 6.41606 17.5488 7.05724 18.3405 7.05724C19.1321 7.05724 19.7745 6.41606 19.7745 5.62755C19.7745 4.83905 19.1321 4.19845 18.3405 4.19845C17.5488 4.19845 16.9076 4.83905 16.9076 5.62755ZM5.8352 11.9856C5.8352 15.3635 8.58032 18.1022 11.9666 18.1022C15.3529 18.1022 18.0981 15.3635 18.0981 11.9856C18.0981 8.60763 15.3529 5.87071 11.9666 5.87071C8.58032 5.87071 5.8352 8.60763 5.8352 11.9856ZM7.98687 11.9856C7.98687 9.79396 9.7684 8.01583 11.9666 8.01583C14.1649 8.01583 15.9464 9.79396 15.9464 11.9856C15.9464 14.1784 14.1649 15.957 11.9666 15.957C9.7684 15.957 7.98687 14.1784 7.98687 11.9856Z" fill="#1E293B" />
                                                      </g>
                                                      <defs>
                                                            <clipPath id="clip0_78_83">
                                                                  <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                      </defs>
                                                </svg>
                                                <h2 className='font-semibold text-base text-theme-brand underline'>Message us on Instagram</h2>
                                          </div>
                                    </div>
                                    <div className='w-full flex flex-col mb-[24px]'>
                                          <h2 className='font-semibold text-[24px] text-theme-brand'>Call us</h2>
                                          <p className='font-normal text-base text-theme-secondary'>Call our team Mon-Fri 8am to 5pm.</p>
                                    </div>
                                    <div className='w-full flex items-center gap-x-[8px] mb-[50px]'>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9745 6.25431C11.5605 6.90384 11.3747 7.63969 10.8566 8.3379C10.7337 8.50344 10.5921 8.66654 10.4211 8.84627C10.3391 8.93254 10.2751 8.99742 10.1412 9.13142C9.83714 9.43576 9.58155 9.69149 9.37441 9.89862C9.27396 9.99906 9.95978 11.3695 11.2908 12.7018C12.621 14.0334 13.9914 14.7197 14.0924 14.6187L14.8586 13.8521C15.2806 13.4297 15.504 13.2259 15.8111 13.0244C16.4495 12.6056 17.1458 12.4918 17.733 13.0169C19.6504 14.3885 20.7354 15.2301 21.267 15.7824C22.3038 16.8597 22.1679 18.518 21.2729 19.464C20.9625 19.792 20.569 20.1858 20.1042 20.6338C17.2926 23.4469 11.359 21.735 6.81145 17.183C2.26291 12.63 0.551877 6.69577 3.35753 3.88861C3.86122 3.377 4.0273 3.21101 4.51785 2.72765C5.43118 1.82771 7.16595 1.6868 8.22051 2.72854C8.77521 3.27649 9.65955 4.41433 10.9745 6.25431ZM16.2722 15.2661L15.5058 16.0329C14.2031 17.3364 11.9845 16.2253 9.87703 14.1157C7.76808 12.0047 6.65827 9.787 7.96142 8.48396C8.16829 8.27711 8.42363 8.02162 8.72744 7.71751C8.85002 7.59481 8.90609 7.53798 8.97339 7.46724C9.06509 7.37087 9.14044 7.28623 9.20077 7.21133C8.0354 5.58799 7.2432 4.57364 6.81614 4.15176C6.59558 3.93389 6.10172 3.97401 5.92042 4.15265C5.43686 4.62912 5.27792 4.78798 4.77626 5.29748C2.97194 7.10279 4.35321 11.8933 8.22519 15.7691C12.096 19.6437 16.8858 21.0256 18.7038 19.2068C19.1614 18.7655 19.5342 18.3924 19.8212 18.089C20.0286 17.8699 20.0657 17.4176 19.8271 17.1697C19.4298 16.7568 18.457 15.9984 16.7774 14.7922C16.6549 14.8907 16.5044 15.0337 16.2722 15.2661ZM13.6551 2.06944C17.9784 2.59348 21.4064 6.02153 21.9305 10.3448L19.955 10.6741C19.5736 7.19172 16.8082 4.4263 13.3258 4.04488L13.6551 2.06944ZM12.9963 6.02202C15.6378 6.25828 17.7416 8.36209 17.9779 11.0036L15.9961 11.3339C15.912 9.53302 14.4669 8.08789 12.666 8.0038L12.9963 6.02202Z" fill="#1E293B" />
                                          </svg>
                                          <h2 className='font-semibold text-base text-theme-brand underline'>+62 21 84596900</h2>
                                    </div>
                                    <div className='w-full flex flex-col mb-[24px]'>
                                          <h2 className='font-semibold text-[24px] text-theme-brand'>Call us</h2>
                                          <p className='font-normal text-base text-theme-secondary'>Call our team Mon-Fri 8am to 5pm.</p>
                                    </div>
                                    <div className='w-full flex items-center gap-x-[8px]'>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>

                                          <h2 className='font-semibold text-base text-theme-brand underline'>Wiladatika Private Airport</h2>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
