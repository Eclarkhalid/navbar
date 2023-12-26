import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <section className={`bg-gray-50 ${mobile ? 'filter blur-sm' : ''}`}>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Dynamic Navigation Bar
              <span className="gap-2">
                <strong className="font-extrabold text-red-700 sm:block">Optimized for All Devices</strong>
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-xl lg:text-2xl">
              Engage your audience with a header that adapts seamlessly across devices. Leverage responsive design principles to ensure readability and visual appeal on both small and large screens.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default App
