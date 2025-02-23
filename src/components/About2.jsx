import '../styles/App.css';
import Date from './Date';
import Timer from './Timer';

const About2 = () => {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-gray-900" id="details">
      <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 min-h-fit">
        <div className="isolate overflow-hidden relative px-6 py-10 w-full bg-gray-900 transition-colors duration-300 dark:bg-gray-800 sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24" id="glow">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto">
            <div className="mx-auto text-center">
              <Date day="28" month="FEB" subtxt="th" />
            </div>
            <div className="mx-auto text-center">
              <h1 className="text-white venue dark:text-gray-100">📍JBIET, Main block</h1>
            </div>
            <br />
            <div className="text-center timer_container">
              <h1 className="title dark:text-gray-100">
                <Timer />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
