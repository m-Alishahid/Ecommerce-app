// import React from 'react'
// import { CiMobile4 } from "react-icons/ci";
// import { HiOutlineComputerDesktop } from "react-icons/hi2";
// import { BsSmartwatch } from "react-icons/bs";
// import { FaCamera } from "react-icons/fa";
// import { FaHeadphones } from "react-icons/fa";
// import { SiYoutubegaming } from "react-icons/si";





// export default function Category() {
//   return (
//     <div className='w-full flex justify-center items-center mt-10 mb-1'>
//       <div className='sm:w-full md:w-[80%] border-2 border-neutral-100 pb-10'>
//         <div className='flex flex-col sm:pl[6%] md:pl-0]'>

//           <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
//             Categories
//           </h3>

//           <div className='flex'>
//             <h1 className='text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4'>

//               Browse By Category</h1>
//           </div>

//         </div>


//         {/* Categories  */}
//         <div className='flex  sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8'>

//           {/* Box 1 */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <CiMobile4 className="text-6xl font-bold" />
//             <p className='font-normal'>Phones</p>
//           </div>




//           {/* Box 2 */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <HiOutlineComputerDesktop className="text-6xl font-bold" />
//             <p className='font-normal'>Computers</p>
//           </div>


//           {/* Box 3  */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <BsSmartwatch className="text-6xl font-bold" />
//             <p className='font-normal'>Smart Watch</p>
//           </div>


//           {/* Box 4 */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <FaCamera className="text-6xl font-bold" />
//             <p className='font-normal'>Camera</p>
//           </div>

//           {/* Box 5 */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <FaHeadphones className="text-6xl font-bold" />
//             <p className='font-normal'>Headphones</p>
//           </div>

//           {/* Box 6 */}
//           <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer '>
//             <SiYoutubegaming className="text-6xl font-bold" />
//             <p className='font-normal'>Gaming</p>
//           </div>





//         </div>




//       </div>

//     </div>
//   )
// }





import React from "react";
import { FaPills } from "react-icons/fa";
import { GiMedicalPackAlt } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";

export default function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="w-full max-w-7xl border-2 border-neutral-100 pb-10">
        {/* Heading Section */}
        <div className="flex flex-col px-4">
          <h3 className="text-blue-500 font-bold border-l-8 border-blue-500 pl-3 ml-1">
            Categories
          </h3>
          <h1 className="text-slate-800 font-bold text-lg sm:text-xl md:text-3xl lg:text-3xl pt-4">
            Browse By Category
          </h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
          {/* Box 1 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
           <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500"><FaPills  /></span>
            <p className="text-sm md:text-base font-medium ">Medicines</p>
          </div>

          {/* Box 2 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-500"><GiMedicalPackAlt  /></span>
            <p className="text-sm md:text-base font-medium ">Medical Kits</p>
          </div>

          {/* Box 3 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
         <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-500" ><MdHealthAndSafety /></span>
            <p className="text-sm md:text-base font-medium ">Health Care</p>
          </div>

          {/* Box 4 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
           <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-500"> <FaBaby  /></span>
            <p className="text-sm md:text-base font-medium ">Baby Care</p>
          </div>

          {/* Box 5 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-500"><FaHeartbeat  /></span>
            <p className="text-sm md:text-base font-medium">Fitness</p>
          </div>

          {/* Box 6 */}
          <div className="group shadow-lg border-2 rounded-md hover:bg-blue-500 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
           <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-500"><FaStethoscope  /></span>
            <p className="text-sm md:text-base font-medium">Medical Devices</p>
          </div>
        </div>
      </div>
      </div>
     
  
  );
}
