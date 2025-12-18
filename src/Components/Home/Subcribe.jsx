import React from 'react';
import Container from '../../Layout/Container';
import { IoIosArrowRoundForward } from "react-icons/io";
import companylogo from '../../assets/Company Logo.png'

const Subcribe = () => {
    return (
        <div className='bg-[#1B6392] py-10 mt-10'>
            <Container>
                <div className='flex flex-col items-center'>
                    <h3 className='text-white text-[32px] '>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 text-[16px] my-4'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et <br /> cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
                    <div className='relative'>
                        <input type="text" name="" id="" placeholder='Email address' className='outline-0 border-0 bg-white py-3 px-5 w-155 mb-5'/>
                         <button className='bg-[#FA8232] text-4 font-semibold flex items-center gap-1 px-3 py-1 text-white rounded-sm absolute top-2 right-3'>SUBSCRIBE <IoIosArrowRoundForward/> </button>
                    </div>
                    <img src={companylogo} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Subcribe;