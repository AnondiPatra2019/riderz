import  runningHero  from '../assets/images/runningHero.mp4';
import Nav from '../components/Nav';
const VideoBackground = () => {
  return (
    <section className="relative w-full h-screen ">
      <Nav />
      <video
        src={runningHero}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover bg-fixed"
      />
      
     <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <h1 className="text-white font-bold font-palanquin  lg:text-[72px] text-4xl  uppercase mb-8 text-center md:max-w-4xl max-w-md">
            Outrun Yourself <br /> with{' '}
            <span className="text-red font-aldrich ">Riderz</span>
          </h1>

          <p className="text-white font-montserrat lg:text-2xl md:text-xl text-lg mb-10 text-center  md:max-w-4xl max-w-sm">
            Push boundaries with the our latest running gear.
          </p>
          <a href="#home"><div className='bg-red w-40 h-14 rounded-full flex justify-center items-center border font-montserrat font-semibold hover:bg-coral-red text-white hover:scale-[1.1] transition-all border-none hover:shadow-inner'>Explore more </div></a>
        </div>
      </div>
     
    </section>
  );
};

export default VideoBackground;