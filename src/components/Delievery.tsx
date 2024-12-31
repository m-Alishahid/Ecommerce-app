



import React from 'react'; 
import { TbTruckDelivery } from "react-icons/tb";
import { RiHeadphoneFill } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function Delivery() {
    return (
        <div className='w-full flex justify-center items-center sm:h-[500px] lg:h-[300px]'>
            <div className='w-full max-w-7xl flex flex-wrap justify-center lg:justify-center gap-4'>
                
                {/*Box 1*/}
                <div className='w-[260px] h-[130px] flex flex-col justify-center items-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex justify-center items-center border-stone-400 border-8'>
                      <span className="text-3xl text-white pt-2" > <TbTruckDelivery  /></span>
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>FREE MEDICATION DELIVERY</h1>
                        <p className='text-sm'>Free delivery for all orders over $140</p>
                    </div>
                </div>

                {/*Box 2*/}
                <div className='w-[260px] h-[130px] flex flex-col justify-center items-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex justify-center items-center border-stone-400 border-8'>
                      <span className="text-3xl text-white pt-2" > <RiHeadphoneFill  /></span>
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>24/7 PHARMACY SUPPORT</h1>
                        <p className='text-sm'>Friendly 24/7 customer support for your health</p>
                    </div>
                </div>

                {/*Box 3*/}
                <div className='w-[260px] h-[130px] flex flex-col justify-center items-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex justify-center items-center border-stone-400 border-8'>
                     <span  className="text-3xl text-white pt-2"><MdOutlineVerifiedUser /></span>
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm'>Return within 30 days if you're not satisfied</p>
                    </div>
                </div>
            </div>
        </div>
    );
}