import React from 'react';
import Container from '../../../Layout/Container';
import { menu } from '../../../assets/assets';
import SingelCategory from './SingelCategory';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const ShopCategory = () => {

  function Next(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  background: '#FA8232', padding:'5px' , display:'inline-block', borderRadius:'50%', fontSize:'30px' , position: 'absolute', top: '35%', right:'-30px'}}
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
      style={{ ...style,  background: '#FA8232', padding:'5px' , display:'inline-block', borderRadius:'50%', fontSize:'30px' , position: 'absolute', top: '35%', left:'-30px' }}
      onClick={onClick}>
        <IoIosArrowRoundBack/>
    </div>
  );
}

    var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
     nextArrow: <Next />,
    prevArrow: <Preview />
  };


    return (
        <div>
           <Container>

             <h3 className='text-3xl font-bold text-center mt-8 mb-5'>Shop Wiht Category</h3>

             <Slider {...settings}>
            
              {
                menu.map((item,index) =><SingelCategory item={item} key={index}></SingelCategory>)
             }
            
             </Slider>
           </Container>
        </div>
    );
};

export default ShopCategory;