import React, { useState } from 'react';
import Container from '../../Layout/Container';
import { ImCross } from "react-icons/im";
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Instagram.png'
import pintarest from '../../assets/Pinterest.png'
import twitter from '../../assets/Twitter.png'
import logo from '../../assets/Logo.png'
import user from '../../assets/User.png'
import cart from '../../assets/ShoppingCartSimple.png'
import heart from '../../assets/Vector.png'
import search from '../../assets/MagnifyingGlass.png'

const Navbar = () => {
    const [value, setvalue] = useState(false)
    console.log(value)
    const data=()=>{
        setvalue(!value)
    }
    return (
        <div>
            {/* FIRST */}
            <div className={`bg-black py-2 ${value ?'hidden': ''}`}>
            <Container>
                <div className='flex justify-between text-white relative' >
                <p><span className='bg-yellow-200 px-2 rounded-tr-lg rounded-bl-lg text-black'>Black</span> Friday</p>
                <p>upto <span className='text-yellow-200 text-[17px] font-semibold'>50%</span> off</p>
                <button className='bg-yellow-200 px-3  text-black rounded-lg font-semibold' >SHOP NOW</button>
                </div>
                <h3 className='text-white absolute top-3 right-8' onClick={()=>data()}><ImCross/></h3>
            </Container>
            </div>




            {/* SECOUND */}
            <div className='bg-[#1B6392] text-white  '>
               <Container>
                <div className='flex justify-between py-2 text-[14px]'>
                     <h4>Welcome to Clicon online ecomerce store</h4>
                <div className='flex gap-3 items-center'>
                    <p className='text-[14px]'>Follow US :</p>
                    <img className='w-4 h-4' src={facebook} alt="" />
                    <img className='w-4 h-4' src={instagram} alt="" />
                    <img className='w-4 h-4' src={pintarest} alt="" />
                    <img className='w-4 h-4' src={twitter} alt="" />
                    

                </div>
                </div>
               </Container>
               <hr className='text-gray-500'/>
            </div>

            {/* THIRD */}
            <div className='bg-[#1B6392]'>
                <Container>
                   <div className='flex justify-between py-4'>
                     <img className='h-12' src={logo} alt="" />
                <div className='flex relative'>
                    <input className='w-150 h-12 bg-white text-black border-0 outline-0 px-3 rounded-sm' type="text" placeholder='Search for anything'/>
                    <img className='h-12 w-12 absolute  right-2' src={search} alt="" />
                </div>
                <div className='flex gap-2'>
                    <img className='h-10 w-10' src={cart} alt="" />
                    <img className='h-10 w-10' src={heart} alt="" />
                    <img className='h-10 w-10' src={user} alt="" />
                </div>
                   </div>
                </Container>
            </div>

        </div>
    );
};

export default Navbar;