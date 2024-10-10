import {products} from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularProductCard from '../components/PopularProductCard';

const PopularProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <section id = "products"
      className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-start gap-5 px-5 ">
          <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">  Popular </span>Products
          </h2>
          <p className= " lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after selections . Discover a world of comfort ,design and value.
          </p>

        </div>
      
        <div className="slide-container mt-16 gap-14 rounded-md">
       
        <Slider {...settings}>
          
          {products.map((product) =>
        (
          <PopularProductCard key=
          {product.name}{...product}/>
       
        ))}
           </Slider>
        </div>
       
        </section>
   
  )
}

export default PopularProduct
