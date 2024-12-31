

// import React from 'react'

// export default function Pharmacy() {
//   return (
//     <main className='w-full flex justify-center items-center mt-10 mb-1'>
//       <div className='sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:m-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-blue-500 '>
//         {/* Text Section */}
//         <div className='sm:w-full md:w-[50%] p-4'>
//           <h3 className='text-white font-bold'>Categories</h3>
//           <h1 className='text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4'>Enhance Your</h1>
//           <h1 className='text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4'>Health and Wellness</h1>

//           {/* Timer */}
//           <div className='flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-4 gap-4'>
//             <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
//               <span className='font-bold text-lg'>23</span>
//               <span className='sm:text-xs md:text-sm'>Hours</span>
//             </div>

//             <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
//               <span className='font-bold text-lg'>05</span>
//               <span className='sm:text-xs md:text-sm'>Days</span>
//             </div>

//             <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
//               <span className='font-bold text-lg'>59</span>
//               <span className='sm:text-xs md:text-sm'>Minutes</span>
//             </div>

//             <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
//               <span className='font-bold text-lg'>35</span>
//               <span className='sm:text-xs md:text-sm'>Seconds</span>
//             </div>
//           </div>

//           <button className='bg-white hover:bg-blue-500 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm py-0 text-black hover:text-white font-bold rounded-sm h-10 mt-3'>
//             Shop Now!
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className='sm:w-full md:w-[40%] lg:w-[40%] pl-6 justify-center items-center'>
//           <img src="/surbex-z.png" alt="Health Products" className='w-full h-auto shadow-md' />
//         </div>
//       </div>
//     </main>
//   )
// }




import React from 'react';

export default function Pharmacy() {
  return (
    <main className='w-full flex justify-center items-center mt-10 mb-1'>
      <div className='w-full sm:p-5 md:p-5 sm:m-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-blue-500'>

        {/* Text Section */}
        <div className='w-full sm:w-full md:w-[50%] p-4'>
          <h3 className='text-white font-bold text-center'>Categories</h3>
          <h1 className='text-white font-bold sm:text-xl md:text-3xl lg:text-5xl pt-4 text-center md:text-left'>
            Enhance Your
          </h1>
          <h1 className='text-white font-bold sm:text-xl md:text-3xl lg:text-5xl pt-4 text-center md:text-left'>
            Health and Wellness
          </h1>

          {/* Timer */}
          <div className='flex sm:flex-wrap sm:justify-center md:justify-start pt-5 pb-4 gap-4'>
            <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
              <span className='font-bold text-lg'>23</span>
              <span className='sm:text-xs md:text-sm'>Hours</span>
            </div>

            <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
              <span className='font-bold text-lg'>05</span>
              <span className='sm:text-xs md:text-sm'>Days</span>
            </div>

            <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
              <span className='font-bold text-lg'>59</span>
              <span className='sm:text-xs md:text-sm'>Minutes</span>
            </div>

            <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
              <span className='font-bold text-lg'>35</span>
              <span className='sm:text-xs md:text-sm'>Seconds</span>
            </div>
          </div>

          <button className='bg-white hover:bg-blue-500 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm py-0 text-black hover:text-white font-bold rounded-sm h-10 mt-3'>
            Shop Now!
          </button>
        </div>

        {/* Image Section */}
        <div className='sm:w-[40%px] md:w-[40%] lg:w-[40%] sm:h-[40%] md:h-[400px] pl-6 justify-center items-center'>
          <img src="/surbex-z.png" alt="Health Products" className='w-full h-full  shadow-md' />
        </div>
      </div>
    </main>
  );
}
