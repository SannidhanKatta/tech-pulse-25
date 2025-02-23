import React, { useState } from 'react';
import '../styles/sass.scss';
import Dialog from './dialog';

const Card = ({ imageSrc, title, description, rules, eventid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleRerender = () => {
    document.getElementById('modal-container').classList.add('out');
    document.body.classList.remove('modal-active');
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="max-w-sm mx-5 max-h-min bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-500 hover:shadow-[#dd1472a6] hover:scale-102 px-4 pt-4">
        <img className="rounded-lg" src={imageSrc} alt="" />
        <div className="p-3">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h5>
          <p className="mb-3 text-sm font-normal text-gray-400 dark:text-gray-300">{description}</p>
          <button onClick={() => setIsOpen(true)} className="button rounded-md bg-indigo-600 px-2.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Know rules
            <svg className="rtl:rotate-180 inline w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <Dialog eventid={eventid} title={title} rules={rules} close={handleRerender} />}
    </>
  );
};

export default Card;
