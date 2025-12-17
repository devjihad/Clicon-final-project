import React from 'react';
import Container from '../../Layout/Container';
import img1 from '../../assets/4.png'
import img2 from '../../assets/5.png'
import img3 from '../../assets/6.png'
import img4 from '../../assets/3.png'
import img5 from '../../assets/2.png'
import img6 from '../../assets/1.png'
import img7 from '../../assets/7.png'
import img8 from '../../assets/8.png'
import img9 from '../../assets/9.png'
import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/12.png'

const FourCard = () => {
    return (
        <div>
            <Container>
                <div className='flex justify-between gap-4 mt-10'>

                {/* FIRST */}
                <div>
                    <h3 className='text-[16px] font-semibold mb-4'>FLASH SALE TODAY</h3>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm'>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>


                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> Simple Mobile 4G LTE Prepaid Smartphone</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> 4K UHD LED Smart TV with Chromecast Built-in</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                </div>


                {/* SECOUND */}
                <div>
                    <h3 className='text-[16px] font-semibold mb-4'>BEST SELLERS</h3>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm'>
                        <div>
                            <img src={img4} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>


                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img5} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> Simple Mobile 4G LTE Prepaid Smartphone</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img6} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> 4K UHD LED Smart TV with Chromecast Built-in</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                </div>


                {/* THIRD */}
                <div>
                    <h3 className='text-[16px] font-semibold mb-4'>TOP RATED</h3>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm'>
                        <div>
                            <img src={img7} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>Portable Wshing Machine, 11lbs capacity Model 18NMF...</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>


                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img8} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> Sony DSCHX8 High Zoom Point & Shoot Camera</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img9} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>Dell Optiplex 7000x7480 All-in-One Computer Monitor</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                </div>



                {/* FOURTH */}
                <div>
                    <h3 className='text-[16px] font-semibold mb-4'>NEW ARRIVAL</h3>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm'>
                        <div>
                            <img src={img10} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>TOZO T6 True Wireless Earbuds Bluetooth Headpho...</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>


                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img11} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'> JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center border-2 border-gray-200 p-2 rounded-sm my-3'>
                        <div>
                            <img src={img12} alt="" />
                        </div>
                        <div>
                            <p className='text-[14px]'>Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor.</p>
                            <p className='text-[#2DA5F3]'>$1500</p>
                        </div>
                    </div>
                </div>


                </div>
            </Container>
        </div>
    );
};

export default FourCard;