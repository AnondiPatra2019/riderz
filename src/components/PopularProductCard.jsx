import {star} from "../assets/icons"
const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    
    <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer hover:shadow-3xl transition-all hover:scale-[1.05]  group-hover:blur-sm hover:!blur-none py-5 px-5">
        <img src={imgURL}
         alt={name}
         classname="w-[280px] h-[280px] rounded "       
        />
        <div classname="mt-8 flex justify-start gap-2.5 shadow-3xl " >
            <img src={star} alt="rating" width={30} height={30} className="py-2"/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>

        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal  pb-5'>
        {price}
      </p>
      <div className="pb-4">
      <a ><div className='bg-coral-red w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-red text-white hover:scale-[1.1] transition-all border-none hover:shadow-inner'>Buy now </div></a>
      </div>
    </div>
   
  )
}

export default PopularProductCard
