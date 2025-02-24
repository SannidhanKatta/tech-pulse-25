import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Details', href: '#details' },
  { name: 'Contact', href: '#contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex justify-between items-center p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <span className="sr-only">Your Company</span>
            <img
              className="mt-2 w-auto h-10 lg:h-20 lg:mt-0"
              src="https://images-codehub.vercel.app/Images/Codehub.png"
              alt=""
            />
            <img
              className="w-auto h-10 ms-3 lg:-mt-3 lg:h-20"
              src="https://images-codehub.vercel.app/Images/JB3.png"
              alt=""
            />

          </div>
          <div className="flex lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex items-center justify-center p-2.5 rounded-md backdrop-blur-md shadow-md"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden items-center lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="overflow-y-auto fixed inset-y-0 right-0 z-50 px-6 py-6 w-full bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)} // Close mobile menu when a navigation item is clicked
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="isolate relative px-6 pt-14 bg-white transition-colors duration-300 lg:px-8 dark:bg-gray-900">
        <div
          className="overflow-hidden absolute inset-x-0 -top-40 blur-3xl transform-gpu -z-10 sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-40 mx-auto max-w-2xl sm:py-48 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 sm:text-6xl animate-text">
              TECHPULSE' 25
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 transition-colors duration-300 dark:text-gray-300">
              Join us for an exhilarating journey into the realm of technology at TechPulse'25, where innovation meets inspiration. Organized by CodeHub, this event promises a dynamic blend of knowledge sharing, networking, and exciting competitions that will fuel your passion for technology.
            </p>
            <div className="mt-10">
              <a
                href="/"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
              >
                Register now!
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
