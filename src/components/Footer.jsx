import React from "react";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";
import TelegramIcon from "../images/telegram.svg";
import LinkedInIcon from "../images/linkedin.svg";
import GmailIcon from "../images/gmail.svg";

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-blue-200 to-blue-300 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800" id="contact">
            <div className="container flex flex-row flex-wrap justify-between py-6 max-w-screen-xl bg-transparent transition-colors duration-300 lg:py-8">
                <div className="mb-6 w-1/2 md:mb-0">
                    <a href="/" className="flex flex-col items-center">
                        <img
                            src="https://images-codehub.vercel.app/Images/Codehub.png"
                            className="mb-0 h-24"
                            alt="CodeHub"
                        />
                        <span className="self-center text-xl text-gray-800 whitespace-nowrap dark:text-gray-200">
                            CodeHub
                        </span>
                    </a>
                </div>

                {/*                 <div className="flex flex-col justify-center items-center lg:w-1/2">
                    <ul className="mx-auto max-w-screen-md text-black md:mx-0">
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

                <div className="flex flex-col justify-center items-center mt-4 space-y-2 w-1/2 md:mt-0 rtl:space-x-reverse">
                    <a
                        href="https://www.instagram.com/codehub_jbiet/"
                        className="flex justify-start items-center w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={InstagramIcon} className="w-6 h-6" alt="Instagram" />
                        <span className="sr-only">Instagram</span>
                        <span className="">Instagram</span>
                    </a>
                    <a
                        href="https://www.youtube.com/c/CodeHubb/featured"
                        className="flex justify-start items-center w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={YoutubeIcon} className="w-6 h-6" alt="Youtube" />
                        <span className="sr-only">Youtube</span>
                        <span className="">Youtube</span>
                    </a>
                    <a
                        href="https://t.me/joinchat/RoqVlQw4ACxdRg83"
                        className="flex justify-start items-center w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={TelegramIcon} className="w-6 h-6" alt="Telegram" />
                        <span className="sr-only">Telegram</span>
                        <span className="">Telegram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/c0dehub/"
                        className="flex justify-start items-center w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={LinkedInIcon} className="w-6 h-6" alt="LinkedIn" />
                        <span className="sr-only">LinkedIn</span>
                        <span className="">LinkedIn</span>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/#search/codehubcse%40jbiet.edu.in?compose=new"
                        className="flex justify-start items-center w-24 text-gray-800 transition-colors duration-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                        <img src={GmailIcon} className="w-6 h-6" alt="Gmail" />
                        <span className="sr-only">Gmail</span>
                        <span className="">Gmail</span>
                    </a>
                </div>

            </div>
            <div className="w-full text-center text-gray-800 dark:text-gray-200">
                Contact Info :
                <div className="flex gap-7 justify-center pt-4">
                    <p>
                        <a href="tel:9885203521" className="text-gray-800 dark:text-gray-200">
                            Ramesh babu - Co-ordinator<br />
                            9885203521
                        </a>
                    </p>
                    <p>
                        <a href="tel:+917995305408" className="text-gray-800 dark:text-gray-200">
                            Tarun - President<br />
                            +91 79953 05408
                        </a>
                    </p>
                    <p>
                        <a href="tel:8919685350" className="text-gray-800 dark:text-gray-200">
                            Satyadeep - Secretary<br />
                            8919685350
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-800 bg-blue-100 transition-colors duration-300 dark:text-white dark:bg-gray-700">
                <span>
                    &copy; {new Date().getFullYear()} CodeHub. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
