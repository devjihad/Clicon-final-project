import React from 'react';
import Container from '../../../Layout/Container';
import logo from '../../../assets/Logo.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import apple from '../../../assets/Apple.png'
import play from '../../../assets/Play.png'
const Footer = () => {
    return (
        <div className='bg-black'>
            <Container>
                <div className='flex gap-5 justify-between py-14'>

                <div>
                    <img className='mb-4' src={logo} alt="" />
                    <h3 className='text-gray-400'>Customar Service</h3>
                    <p className='text-white mb-2'>+8801306561609</p>
                    <p className='text-gray-400 mb-2'>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                    <p className='text-white'>info@kinbo.com</p>
                </div>

                <div>
                    <h3 className='text-white text-[16px] mb-3'>TOP CATEGORY</h3>
                    <p className='text-gray-400'>Computer</p>
                    <p className='text-gray-400'>Laptop</p>
                    <p className='text-gray-400'>SmartPhone</p>
                    <p className='text-gray-400'>HeadPhone</p>
                    <h3 className='text-white text-[16px] my-1'>Accessories</h3>
                    <p className='text-gray-400'>Camera & Photo</p>
                    <p className='text-gray-400'>TV & Phone</p>
                    <h3 className='text-[#EBC80C] flex gap-2 items-center text-[16px]'>Browese all Product <IoIosArrowRoundForward/></h3>
                </div>


                <div>
                    <h3 className='text-white text-[16px] mb-3'>QUICK LINKS</h3>
                    <p className='text-gray-400'>Shop Droduct </p>
                    <p className='text-gray-400'>Shoping Cart </p>
                    <p className='text-gray-400'>Wishlist </p>
                    <p className='text-gray-400'>Compare  </p>
                    <p className='text-gray-400'>Track Order </p>
                    <p className='text-gray-400'>Help </p>
                    <p className='text-gray-400'>About Us </p>
                </div>


                <div>
                    <h3 className='text-white text-[16px] mb-3'>Downloard App</h3>
                    <div className='flex gap-3 items-center p-3 bg-gray-800 rounded-sm mb-3'>
                        <img src={play} alt="" />
                        <div>
                            <p className='text-gray-400 text-[12px]'>Get it now</p>
                            <p className='text-white font-semibold'>Google play</p>
                        </div>
                    </div>


                    <div className='flex gap-3 items-center p-3 bg-gray-800 rounded-sm'>
                        <img src={apple} alt="" />
                        <div>
                            <p className='text-gray-400 text-[12px]'>Get it now</p>
                            <p className='text-white font-semibold'>App store</p>
                        </div>
                    </div>

                </div>


                </div>
            </Container>
        </div>
    );
};

export default Footer;