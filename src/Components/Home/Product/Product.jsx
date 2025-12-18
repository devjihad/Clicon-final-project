import React from 'react';
import { product } from '../../../assets/assets';
import Container from '../../../Layout/Container';
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../../../assets/45.jpg'
import SingleProduct from './SingleProduct';
import { Link } from 'react-router';
const Product = () => {
    return (
        <div className='my-12'>
            <Container>

                
               <div className='flex gap-5'>

                {/* LEFT  */}
                 <div className='w-[25%] bg-[#F3DE6D] '>
                    <div className='text-center  pt-7'>
                        <h3 className='text-[14px] text-[#BE4646] font-semibold '>Computer & Accessories</h3>
                    <h3 className='text-[32px] font-semibold text-gray-900 mt-2'>32% Discount</h3>
                    <p className='text-16px text-gray-700 mb-3'>for all electronics product</p>
                    <div className='flex items-center gap-2 pl-7 mb-3'>
                        <p className='text-[12px]'>Offers ends in :</p>
                        <input type="text" value='ENDS OF CHRISTMAS' name="" id="" readOnly className='w-[50%] text-[14px] bg-white px-2 py-1 border-0 outline-0'/>
                    </div>
                    <Link to={'/product'}><button className='bg-[#FA8232] text-4 font-semibold flex items-center gap-1 px-3 py-1 text-white rounded-sm mx-auto'>Shop Now <IoIosArrowRoundForward/> </button></Link>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </div>


                {/* RIGHT */}
                <div className='w-[75%]'>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-[24px] font-semibold'>Featured Product </h3>
                        <div className='flex gap-3 items-center'>
                            <p className='text-[#5F6C72] text-[14px] font-medium hover:text-black hover:border-b-2 hover:border-[#FA8232] hover:pb-1'>All Product</p>
                            <p className='text-[#5F6C72] text-[14px] font-medium hover:text-black hover:border-b-2 hover:border-[#FA8232] hover:pb-1'>Smart Phone</p>
                            <p className='text-[#5F6C72] text-[14px] font-medium hover:text-black hover:border-b-2 hover:border-[#FA8232] hover:pb-1'>Laptop</p>
                            <p className='text-[#5F6C72] text-[14px] font-medium hover:text-black hover:border-b-2 hover:border-[#FA8232] hover:pb-1'>TV</p>
                            <p className='text-[#5F6C72] text-[14px] font-medium hover:text-black hover:border-b-2 hover:border-[#FA8232] hover:pb-1'>HeadPhone</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 gap-4'>
                        {
                            product.slice(0,8).map((item,index)=><SingleProduct item={item} key={index}></SingleProduct>)
                        }
                    </div>
                </div>

               </div>
            </Container>
            <div className='flex justify-center'>
               <Link to={'/product'}> <h1 className='flex gap-1 items-center py-2 px-5 bg-[#FA8232] text-center w-56 rounded-lg my-3 text-center'>Browse All Product <IoIosArrowRoundForward/></h1></Link>
            </div>
        </div>
    );
};

export default Product;