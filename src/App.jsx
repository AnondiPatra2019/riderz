import {Hero, VideoBackground, PopularProduct,SuperQuality,Services,SpecialOffer,CustomerReviews , Subscribe,Footer
} from './sections';
import Nav from './components/Nav';
const App=()=>(

 <main className='relative'>
       <section>
     
     <VideoBackground />
    </section>
      <section className='xl:padding-l wide:padding-r padding-b bg-white'>
        <Hero />
      </section>
    <section className=" bg-white padding">
     <PopularProduct />
    </section>
    <section className=" bg-white px pl-5">
    <SuperQuality />
    </section>
    <section className="padding-x py-40 pb-40 bg-white">
    <Services />
    </section>
    <section className='   bg-back bg-fixed padding bg-cover'>
     <SpecialOffer />
    </section>
    <section className=" bg-pale-blue padding">
    <CustomerReviews />
    </section>
    <section className="padding-x sm:py-16 py-8 w-full bg-yellow-300">
     <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8 ">
    <Footer />
    </section>
  </main>
);



export default App;