import React from 'react';
import Container from '../../Layout/Container';
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../../assets/Image (3).png'
import img2 from '../../assets/image 5.png'
import img3 from '../../assets/image 4.png'
import headphone from '../../assets/Headphones.png'
import cart from '../../assets/CreditCard.png'
import trophy from '../../assets/Trophy.png'
import box from '../../assets/Package.png'
const Landing = () => {
    return (
        <div> 
           <Container>
             {/* TOP SECTION */}
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {/* Left */}
                <div className='col-span-2 flex justify-between items-center bg-gray-100 rounded-sm px-5 h-125'>
                <div>
                    <p className='text-[#2484C2] text-3.5 font-semibold'>THE BEST PLACE TO PLAY</p>
                    <h2 className='text-[48px] font-semibold'>Xbox Consoles</h2>
                    <p className='text-4.5 text-gray-700 mb-3'>Save up to 50% on select Xbox games. Get <br /> 3 months of PC Game Pass for $2 USD.</p>
                    <button className='bg-[#FA8232] text-4 font-semibold flex items-center gap-1 px-3 py-1 text-white rounded-sm'>Shop Now <IoIosArrowRoundForward/> </button>
                </div>
                <div className='relative'>
                    <img className='w-92.5 h-100 ' src={img1} alt="" />
                    <p className='p-7 bg-[#2DA5F3] rounded-full w-25 h-25 text-white flex justify-center items-center absolute top-0 right-5'>$299</p>
                </div>
            </div>



                {/*Right  */}
            <div className='col-span-1'>
                <div className='bg-black flex justify-between h-60 rounded-sm mb-5'>
                    <div className='mt-12 ml-7 w-1/2'>
                    <p className='text-[#EBC80C] text-[14px] font-semibold mb-1'>SUMMER SALCE</p>
                    <p className='text-white text-[24px] font-semibold mb-2'>New Google <br /> Pixel 6 Pro</p>
                    <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Shop Now <IoIosArrowRoundForward/> </button>
                    </div>
                    <div className='w-1/2 relative'>
                        <img className='mt-12 w-[230px] h-[192px]' src={img2} alt="" />
                        <p className='absolute top-6 right-3  px-4 py-2 bg-[#EFD33D] text-4 font-semibold rounded-lg'>20% OFF</p>
                    </div>
                </div>


                <div className='h-60 bg-gray-100 flex justify-between items-center rounded-sm'>
                    <img className='w-[160px] h-[160px] ml-5' src={img3} alt="" />
                    <div className='pr-5'>
                        <p className='text-[24px] font-semibold mb-2'>Xiaomi <br /> FlipBuds Pro</p>
                        <p className='text-[#2DA5F3] text-[18px] font-semibold mb-1'>$299 USD</p>
                        <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Shop Now <IoIosArrowRoundForward/> </button>
                    </div>
                

                </div>

            </div>
            </div>

            {/* BOTTOM SECTION */}

            <div className='flex justify-between px-3 py-5 border-2 border-gray-400 my-5 rounded-xl'>
                <div className='flex gap-3 border-r-2 border-gray-400 w-full pl-3 '>
                    <img className='w-10 h-10 ' src={box} alt="" />
                    <div>
                        <p className='text-[14px] text-[#191C1F] font-medium'>FASTED DELIVERY</p>
                        <p className='text-[14px] text-[#5F6C72]'>Delivery in 24/H</p>
                    </div>
                    
                </div>
                
                <div className='flex gap-3 border-r-2 border-gray-400 w-full pl-5'>
                    <img className='w-10 h-10 ' src={trophy} alt="" />
                    <div>
                        <p className='text-[14px] text-[#191C1F] font-medium'>24 HOURS RETURN</p>
                        <p className='text-[14px] text-[#5F6C72]'>100% money-back guarantee</p>
                    </div>
                </div>
                <div className='flex gap-3 border-r-2 border-gray-400 w-full pl-5'>
                    <img className='w-10 h-10 ' src={cart} alt="" />
                    <div>
                        <p className='text-[14px] text-[#191C1F] font-medium'>SECURE PAYMENT</p>
                        <p className='text-[14px] text-[#5F6C72]'>your money is safe</p>
                    </div>
                </div>
                <div className='flex gap-3 w-full pl-5'>
                    <img className='w-10 h-10 ' src={headphone} alt="" />
                    <div>
                        <p className='text-[14px] text-[#191C1F] font-medium'>SUPPORT 24/7</p>
                        <p className='text-[14px] text-[#5F6C72]'>Live contact/messege</p>
                    </div>
                </div>
               
            </div>
           </Container>
        </div>
    );
};

export default Landing;