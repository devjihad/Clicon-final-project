import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import newapple from '../../assets/image 6.png'
import xiaomi from '../../assets/Image (3).png'
import Container from '../../Layout/Container';
const TwoCard = () => {
    return (
        <div>
           <Container>
             <div className='flex justify-between gap-5'>
                <div className='w-1/2 flex justify-center gap-5 p-6 bg-gray-100'>
                <div className='mt-4'>
                <p className='text-[14px] font-semibold bg-[#2DA5F3] px-4 py-2 inline text-white rounded-sm'>INTRODUCING</p>
                <p className='text-[32px] font-semibold leading-9 my-3'>New Apple <br /> Homepod Mini</p>
                <p className='text-4 text-[#475156] my-3'>Jam-packed with innovation, <br /> HomePod mini delivers unexpectedly.</p>
                <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Shop Now <IoIosArrowRoundForward/> </button>
                </div>
                <div>
                    <img src={newapple} alt="" />
                </div>
             </div>



                <div className='w-1/2 flex justify-center   bg-black'>
                <div className='mt-4 p-5 pr-0'>
                <p className='text-[14px] font-semibold bg-[#EFD33D] px-4 py-2 inline text-white rounded-sm'>INTRODUCING NEW</p>
                <p className='text-[28px] font-semibold leading-9 my-3 text-white'>Xiaomi Mi 11 Ultra <br />
                12GB+256GB</p>
                <p className='text-4 text-[#475156] my-3'>Data provided by internal <br /> laboratories. Industry measurment.</p>
                <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Shop Now <IoIosArrowRoundForward/> </button>
                </div>
                <div className='relative'>
                    <img className='mt-4' src={xiaomi} alt="" />
                    <p className='p-7 bg-[#2DA5F3] rounded-full w-20 h-20 text-white flex justify-center items-center absolute top-4 right-5'>$590</p>
                </div>
             </div>
             
             
             </div>
           </Container>
        </div>
    );
};

export default TwoCard;