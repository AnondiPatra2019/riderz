
import Button from "../components/Button"
import running from "../assets/images/running.mp4"
const SuperQuality = () => {
  return (
   <section id= "about-us"
   className=" pl-5 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container pr-10"
   >
    <div className="flex flex-1 flex-col">
    
    <h2 className= "mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      <span className="xl:bg-white
      xl:whitespace-nowrap
      relative z-10 pr-10">We provide you</span>
      <br/>
      <span className="text-coral-red">Best </span>
      <span className="text-coral-red">Quality </span>
      Shoes
    </h2>
    <p className=" mt-4 w-xl info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
    <p className=" mt-6 w-lg info-text pb-5">
Our dedication to detail and excellence ensures your satisfaction.
</p>
<div classname="mt-11 my-5">
     <a href="#products"><div className='bg-coral-red w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-red text-white hover:scale-[1.1] transition-all border-none hover:shadow-inner cursor-pointer'>View details </div></a>
    </div>
    </div>
    <div class="">
  <div class="relative w-full max-w-lg flex flex-1">
  <div class="absolute top-0 -left-4 w-80 h-80 max-sm:h-36 max-sm:w-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob max-sm:animate-none"></div>
    <div class="absolute top-0 -right-4 w-80 h-80 max-sm:h-36 max-sm:w-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 max-sm:animate-none"></div>
    <div class="absolute -bottom-8 left-20 w-80 h-80 max-sm:h-36 max-sm:w-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000 max-sm:animate-none"></div>
    <div class="m-8 relative space-y-4">
      
    
      <video
      src={running}
      autoPlay
        loop
        muted
        playsInline
      width={400}
      height= {420}
      className="object-contain  rounded-3xl"
      />
      </div>
      </div>
  </div>


   </section>
  )
}

export default SuperQuality
