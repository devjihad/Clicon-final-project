import React from 'react';
import Container from '../../../../Layout/Container';
import { FaStar } from "react-icons/fa";
import img1 from '../../../../assets/46.png'
import img2 from '../../../../assets/47.png'
import img3 from '../../../../assets/48.png'
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";

const Allelement = ({item}) => {
    // console.log(item)
     return (
            <Container>
                <div className='w-[23%] h-[370px] p-2 border-2  border-gray-200 mb-[15px] rounded-lg'>
                    <img src={item.product_name} alt="" className='w-[250px] h-[200px]'/>
                    <div className='flex gap-1'><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/></div>
                    <h3 className='text-[18px] font-semibold mt-3'>{item.product_title}</h3>
                    <div className='flex justify-between items-center mt-3'>
                        
                    <p className='text-[14px] font-medium text-blue-500 '>${item.price}</p>
                    <Link ><button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Buy Now <IoIosArrowRoundForward/> </button></Link>
                    </div>
                </div>
                
            </Container>
        );
};

export default Allelement;