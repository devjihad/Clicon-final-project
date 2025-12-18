import React from 'react';
import { FaStar } from "react-icons/fa";
import img1 from '../../../assets/46.png'
import img2 from '../../../assets/47.png'
import img3 from '../../../assets/48.png'
const SingleProduct = ({item}) => {
    return (
        <div className='p-2 border-2 border-gray-200'>
            <div className='relative group'>
                <img src={item.product_name} alt="" className='w-[200px] h-[170px] '/>
                <img className='w-[45px] h-[45px] p-2 rounded-full bg-amber-200 absolute top-14 left-3 hidden group-hover:block' src={img1} alt="" />
                <img className='w-[45px] h-[45px] p-2 rounded-full bg-gray-200 absolute top-14 left-16 hidden group-hover:block' src={img2} alt="" />
                <img className='w-[45px] h-[45px] p-2 rounded-full bg-zinc-200 absolute top-14 left-29 hidden group-hover:block' src={img3} alt="" />
            </div>
        <div>

            <div className='flex gap-1'><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/><FaStar className='text-[#FA8232]'/></div>
            <h2 className='text-[14px] text-gray-900 font-semibold pt-[2px]'>{item.product_title}</h2>
            <p className='text-[#2DA5F3]'>${item.price}</p>
        </div>

        </div>
    );
};

export default SingleProduct;