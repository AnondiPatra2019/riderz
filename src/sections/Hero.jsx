import { arrowRight } from "../assets/icons";
import { useState } from "react";
import {shoes,statistics } from "../constants"
import Button from "../components/Button";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard"
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id = "home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-5">
    <h3 className="text-3xl font-montserrat text-coral-red hover:font-20px "><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'New Collection',
        500,
        'N',
        300,
        
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block' }}
      repeat={Infinity}
      cursor={false}
    /></h3>
    <h1 className= "mt-5 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[72px] font-bold">
      <span className="xl:bg-white
      xl:whitespace-nowrap
      relative lg:z-10 pr-10 ">
        The new arrival 
        </span>
      <br/>
      <span className="text-coral-red inline-block mt-3 mr-5 text-6xl">
       <span className="text-black"> of </span> 
       Riderz 
     </span><span className="text-black text-6xl">shoes </span>
     
    </h1>
    <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-md">Introducing our latest collection of footwear, designed to elevate your daily experience with a blend of quality and comfort.</p>
   
    <a href="#products"><Button label="Shop now" 
    iconURL={arrowRight}
    /></a>
  
    <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
    {statistics.map((stat) => (
        <div key={stat.label}>
    <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
    <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
    </div>

))}

      
    </div>
    
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img 
      src={bigShoeImg}
      width={610}
      height={500}
      className="object-contain relative z-10 transition-all "
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe) =>(
          <div  key={shoe}>
            <ShoeCard 
            imgURL={shoe}
            changeBigShoeImage=
            {(shoe) => setbigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
            />
            </div>
        ))}
      </div>
    </div>
    </section>

  )
}

export default Hero 
