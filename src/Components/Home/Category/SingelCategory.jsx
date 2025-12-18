import React from 'react';

const SingelCategory = ({item}) => {
   
    return (
        <div className='border-2 border-gray-100 mx-2 h-[220px] p-3'>
            <img className='w-[150px] h-[150px]' src={item.menu_image} alt="" />
            <h3 className='text-[16px] font-medium text-center'>{item.menu_name}</h3>
        </div>
    );
};

export default SingelCategory;