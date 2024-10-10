import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>&  <span className='text-coral-red'>Newsletter</span>
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='your mail address' className='input bg-yellow-300' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full '>
        <a href="#products"><div className='bg-black w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-white hover:text-black text-white hover:scale-[1.1] transition-all border-none hover:shadow-inner'>Explore more </div></a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;