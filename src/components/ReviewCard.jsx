import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col  '>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] transition-all hover:scale-[1.05]'
      />
      <p className='mt-6 max-w-sm text-center info-text transition-all hover:scale-[1.05]'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0 transition-all hover:scale-[1.05]'
        />
        <p className='text-xl font-montserrat text-slate-gray transition-all hover:scale-[1.05]'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-boldtransition-all hover:scale-[1.05] font-semibold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;