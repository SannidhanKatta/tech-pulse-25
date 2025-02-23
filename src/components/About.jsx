import '../styles/glow.css'
import image from '../images/poster.png'

export default function Example() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-gray-900" id='about'>
      <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
        <div className="isolate overflow-hidden relative px-4 pt-8 bg-gray-900 shadow-2xl sm:px-6 sm:pt-16 dark:bg-gray-800 sm:rounded-3xl md:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" id="glow">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true">
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl sm:text-4xl">
              Codehub Presents!...
              <br />
              TechPulse'25
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8 dark:text-gray-400">
              Don't miss out on this extraordinary opportunity to be part of the TechPulse'25 experience. Reserve your spot today and embark on a journey of discovery, collaboration, and innovation.
            </p>
            <div className="mt-10">
              <a
                href="/"
                target="_blank"
                className="rounded-md bg-white dark:bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300"
              >
                Register now!
              </a>
            </div>
          </div>
          <div className="mt-8 mb-5 sm:mt-16">
            <img
              className="mx-auto w-full max-w-[15rem] sm:max-w-[20rem] rounded-md bg-white/5 ring-1 ring-white/10 transition-all duration-700 hover:scale-105 dark:brightness-90"
              src={image}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

