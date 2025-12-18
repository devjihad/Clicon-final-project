import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Container from '../../../../Layout/Container';
import { product } from '../../../../assets/assets';
import Allelement from './Allelement';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
const Products = () => {

    function Next(props) {
  const { className, style, onClick } = props;
  return (
     <div
          className={className}
          style={{ ...style,  background: '#FA8232', padding:'5px' , display:'inline-block', borderRadius:'50%', fontSize:'30px' , position: 'absolute', top: '100%', right:'45%'}}
          onClick={onClick}>
            <IoIosArrowRoundForward/>
          </div> 
  );
}

function Preview(props) {
  const { className, style, onClick } = props;
  return (
    <div
          className={className}
          style={{ ...style,  background: '#FA8232', padding:'5px' , display:'inline-block', borderRadius:'50%', fontSize:'30px' , position: 'absolute', top: '100%', left:'43%' }}
          onClick={onClick}>
            <IoIosArrowRoundBack/>
        </div>
  );
}



      const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,   // column
    slidesToScroll: 4,
    rows: 4,  
    nextArrow:<Next/>,
    prevArrow:<Preview/>
      }
    return (
        <div className='mb-20'>
            <Container>
                <h2 className='text-center text-[32px] font-semibold my-8'>Explore Our Products</h2>

               <Slider {...settings}>
                 {
                    product.map((item,index)=><Allelement item={item} key={index}></Allelement>)
                 }
               
               </Slider>
                
            </Container>
        </div>
    );
};

export default Products;