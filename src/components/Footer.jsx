import React from "react";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";
import TelegramIcon from "../images/telegram.svg";
import LinkedInIcon from "../images/linkedin.svg";
import GmailIcon from "../images/gmail.svg";

function Footer() {
    return (
        <footer className="transition-colors duration-300 bg-gradient-to-b from-blue-200 to-blue-300 dark:from-gray-900 dark:to-gray-800" id="contact">
            <div className="container flex flex-row flex-wrap justify-between max-w-screen-xl py-6 transition-colors duration-300 bg-transparent lg:py-8">
                <div className="w-1/2 mb-6 md:mb-0">
                    <a href="/" className="flex flex-col items-center">
                        <img
                            src="https://images-codehub.vercel.app/Images/Codehub.png"
                            className="h-24 mb-0"
                            alt="CodeHub"
                        />
                        <span className="self-center text-xl text-gray-800 whitespace-nowrap dark:text-gray-200">
                            CodeHub
                        </span>
                    </a>
                </div>

                {/*                 <div className="flex flex-col items-center justify-center lg:w-1/2">
                    <ul className="max-w-screen-md mx-auto text-black md:mx-0">
                        <li className="mb-4">
                            <a href="" className="hover:underline">
                                About us
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:underline">
                                Contact us
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Team Members
                            </a>
                        </li>
                    </ul>
                </div> */}

                <div className="flex flex-col items-center justify-center w-1/2 mt-4 space-y-2 md:mt-0 rtl:space-x-reverse">
                    <a
                        href="https://www.instagram.com/codehub_jbiet/"
                        className="flex items-center justify-start w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={InstagramIcon} className="w-6 h-6" alt="Instagram" />
                        <span className="sr-only">Instagram</span>
                        <span className="">Instagram</span>
                    </a>
                    <a
                        href="https://www.youtube.com/c/CodeHubb/featured"
                        className="flex items-center justify-start w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={YoutubeIcon} className="w-6 h-6" alt="Youtube" />
                        <span className="sr-only">Youtube</span>
                        <span className="">Youtube</span>
                    </a>
                    <a
                        href="https://t.me/joinchat/RoqVlQw4ACxdRg83"
                        className="flex items-center justify-start w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={TelegramIcon} className="w-6 h-6" alt="Telegram" />
                        <span className="sr-only">Telegram</span>
                        <span className="">Telegram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/c0dehub/"
                        className="flex items-center justify-start w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={LinkedInIcon} className="w-6 h-6" alt="LinkedIn" />
                        <span className="sr-only">LinkedIn</span>
                        <span className="">LinkedIn</span>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/#search/codehubcse%40jbiet.edu.in?compose=new"
                        className="flex items-center justify-start w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={GmailIcon} className="w-6 h-6" alt="Gmail" />
                        <span className="sr-only">Gmail</span>
                        <span className="">Gmail</span>
                    </a>
                </div>

            </div>
            <div className="w-full text-center text-gray-800 dark:text-gray-200">
                Contact Info :
                <div className="flex justify-center pt-4 gap-7">
                    <p>
                        <a href="tel:7396001730" className="text-gray-800 dark:text-gray-200">
                            Sannidhan - Coordinator<br />
                            +91 7396001730
                        </a>
                    </p>
                    <p>
                        <a href="tel:+917995305408" className="text-gray-800 dark:text-gray-200">
                            Tarun - President<br />
                            +91 79953 05408
                        </a>
                    </p>
                    <p>
                        <a href="tel:6304848105" className="text-gray-800 dark:text-gray-200">
                            Sai Shankar - Coordinator<br />
                            +91 6304848105
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-800 transition-colors duration-300 bg-blue-100 dark:text-white dark:bg-gray-700">
                <span>
                    &copy; {new Date().getFullYear()} CodeHub. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
