import React, { useState } from 'react';
import Container from '../../Layout/Container';
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [value, setvalue] = useState(false)
    console.log(value)
    const data=()=>{
        setvalue(!value)
    }
    return (
        <div className={`bg-black py-2 ${value ?'hidden': ''}`}>
            <Container>
                <div className='flex justify-between text-white relative' >
                <p><span className='bg-yellow-200 px-2 rounded-tr-xl rounded-bl-xl text-black'>Black</span> Friday</p>
                <p>upto <span className='text-yellow-200 text-[17px] font-semibold'>50%</span> off</p>
                <button className='bg-yellow-200 px-3 py-1 text-black rounded-lg font-semibold' >SHOP NOW</button>
                </div>
                <h3 className='text-white absolute top-4 right-8' onClick={()=>data()}><ImCross/></h3>
            </Container>
        </div>
    );
};

export default Navbar;