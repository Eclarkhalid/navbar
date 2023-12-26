import { Dialog } from '@headlessui/react';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  const [mobile, setMobile] = useState(false);

  const active = 'text-lg font-bold px-6 py-3 bg-gray-300 text-red-600 rounded leading-6 text-primary'
  const inActive = 'text-lg font-medium leading-6 text-primary p-4 hover:text-red-400'

  return <>
    <header className={`mx-auto bg-white max-w-7xl border-b sticky top-0 z-50 `}>
      <nav className="flex items-center justify-between p-4 md:p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <a href="/" className="logo flex items-center gap-1 text-lg text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>

            Logo
          </a>
        </div>
        <div className="flex md:hidden">
          <button className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 hover:text-red-600 transition duration-100' onClick={() => setMobile(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>

        <div className="hidden md:flex md:space-x-16">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className={location.pathname === '/' ? active : inActive}>Home</a>
            </li>
            <li>
              <a href="/about" className={location.pathname === '/about' ? active : inActive}>About</a>
            </li>
            <li>
              <a href="/" className={location.pathname === '/page' ? active : inActive}>Services</a>
            </li>
            <li>
              <a href="/" className={location.pathname === '/page' ? active : inActive}>Blog</a>
            </li>
            <li>
              <a href="/" className={location.pathname === '/page' ? active : inActive}>Pricing</a>
            </li>

          </ul>


        </div>
        <a
          className="hidden md:block md:justify-end   
          rounded bg-red-600 px-8 py-2 text-sm font-medium 
          text-white shadow hover:bg-red-700 
          focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/"
        >
          Login
        </a>
      </nav>

     
    </header>
    <Dialog as='div' className={'md:hidden'} open={mobile} onClose={setMobile}>
        <div className="fixed inset-0 z-50 bg-gray-50 bg-opacity-80" />
        <Dialog.Panel 
        className='fixed inset-y-0 right-0 z-50 overflow-y-auto 
        bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 w-screen'>
          
          <div className="flex items-center justify-between mb-3 ">

            <a href="/" className="logo flex items-center gap-1 text-lg text-red-600">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>

              Logo
            </a>
            <button className='-m-2.5 rounded-md p-2.5 text-gray-900' onClick={() => setMobile(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>


            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-2 divide-y divide-gray-500/50">
              <ul className="space-y-10 py-6">
                <li>
                  <a href="/" className={location.pathname === '/' ? active : inActive}>Home</a>
                </li>
                <li>
                  <a href="/" className={location.pathname === '/page' ? active : inActive}>About</a>
                </li>
                <li>
                  <a href="/" className={location.pathname === '/page' ? active : inActive}>Services</a>
                </li>
                <li>
                  <a href="/blog" className={location.pathname === '/page' ? active : inActive}>Blog</a>
                </li>
                <li>
                  <a href="/" className={location.pathname === '/page' ? active : inActive}>Pricing</a>
                </li>

              </ul>

              <div className="py-6">
                <a
                  className="   rounded bg-red-600 px-8 py-2 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
  </>
}

export default Header