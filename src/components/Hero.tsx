// import { IoIosArrowForward } from "react-icons/io";
// import { FaHeartbeat } from "react-icons/fa";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function Hero() {
//     return (
//         <div className='flex justify-center items-center px-10'>
//             <div className='max-w-[1440px] flex gap-6 justify-center'>
//                 {/* Left Sidebar */}
//                 <div className='border-r-2 border-neutral-200 p-16 hidden md:block'>
//                     <ul className='space-y-4'>
//                         {[
//                             "Prescription Medicines",
//                             "Over-the-Counter (OTC) Medicines",
//                             "Health Supplements",
//                             "Personal Care",
//                             "Medical Equipment",
//                             "Baby Care",
//                             "Women's Health",
//                             "Men's Health",
//                             "Skin Care",
//                             "Fitness & Wellness"
//                         ].map((item, index) => (
//                             <li
//                                 key={index}
//                                 className='flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150'
//                             >
//                                 <span>{item}</span>
//                                 {index < 2 && (
//                                     <IoIosArrowForward className='text-lg ml-2' />
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Right Side Content */}
//                 <div className='flex items-center bg-blue-500 rounded-lg p-6 px-10'>
//                     <div className='text-white flex flex-col justify-center space-y-5 sm:w-[180px] md:w-[300px] lg:w-[400px]'>
//                         <div className='flex items-center gap-2'>
//                             <FaHeartbeat className="sm:text-2xl md:text-4xl" />
//                             <span className="sm:text-sm md:text-base font-semibold">
//                                 Health Essentials
//                             </span>
//                         </div>
//                         {/* Heading */}
//                         <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
//                             Up to 20% Off on Medicines
//                         </h1>
//                         <Link
//                             href={"#products"}
//                             className="underline-offset-4 hover:font-semibold flex items-center gap-2"
//                         >
//                             Shop Now
//                             <FaArrowRight />
//                         </Link>
//                     </div>
//                     {/* Image */}
//                     <div className="ml-auto top-4 right">
//                         <img src="/banner.png" alt="Health Essentials" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

import { IoIosArrowForward } from "react-icons/io";
import { FaHeartbeat, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex justify-center items-center px-10">
            <div className="max-w-[1440px] flex gap-6 justify-center">
                {/* Left Sidebar */}
                <div className="border-r-2 border-neutral-200 p-16 hidden md:block">
                    <ul className="space-y-4">
                        {[
                            "Prescription Medicines",
                            "Over-the-Counter (OTC) Medicines",
                            "Health Supplements",
                            "Personal Care",
                            "Medical Equipment",
                            "Baby Care",
                            "Women's Health",
                            "Men's Health",
                            "Skin Care",
                            "Fitness & Wellness",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150"
                            >
                                <span className="flex items-center gap-2">
                                    <span>{item}</span>
                                    {index < 2 &&
                                        <span className="text-lg ml-2">
                                            <IoIosArrowForward />
                                        </span>
                                    }
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Content */}
                <div className="flex items-center bg-blue-500 rounded-lg p-6 px-10">
                    <div className="text-white flex flex-col justify-center space-y-5 sm:w-[180px] md:w-[300px] lg:w-[400px]">
                        <div className="flex items-center gap-2">
                            <span className="sm:text-2xl md:text-4xl"><FaHeartbeat /></span>
                            <span className="sm:text-sm md:text-base font-semibold">
                                Health Essentials
                            </span>
                        </div>
                        {/* Heading */}
                        <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                            Up to 20% Off on Medicines
                        </h1>
                        <Link
                            href={"#products"}
                            className="underline-offset-4 hover:font-semibold flex items-center gap-2"
                        >
                            Shop Now
                            <FaArrowRight />
                        </Link>
                    </div>
                    {/* Image */}
                    <div className="ml-auto">
                        <img src="/banner.png" alt="Health Essentials" />
                    </div>
                </div>
            </div>
        </div>
    );
}