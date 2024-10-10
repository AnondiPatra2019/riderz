import { arrowRight } from "../assets/icons"
import { backgr,offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    
    <section className='flex justify-between items-center max-xl:flex-col-reverse object-cover gap-10 max-container bg-fixed px-100 bg-cover h-[85vh] max-lg:h-[85vh] max-sm:h-[85vh]'>
      
      <div className='flex flex-1 flex-col'>
        <h2 className='text-6xl font-palanquin font-bold text-white'>
          <span className='text-white '>Special </span>
          Offer
        </h2><br/>
        <p className='mt-4 text-lg leading-7 text-white max-sm:w-[100%] max-md:w-[60%] w-[50%] hover:scale-[1.05] transition-all'>
        Exciting discounts at our shoe company! Up to 30% off on trendy designs, 20% off performance shoes, plus buy-one-get-one-free comfort deals. </p>
        <p className='mt-6 text-lg leading-7 text-white  max-sm:w-[100%] max-md:w-[60%] w-[50%] hover:scale-[1.05] transition-all'>
        Don't miss out on our fantastic deals! From fashion-forward designs to performance-boosting footwear and plush comfort shoes, there's something for everyone.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <a href="#products"><div className='bg-white w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-white text-black hover:scale-[1.1] transition-all border-none hover:shadow-inner'>Explore more </div></a>
        <a href="#products"><div className='bg-white w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-white text-black hover:scale-[1.1] transition-all border-none hover:shadow-inner'>Learn more </div></a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;