import { FaCartArrowDown } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-4'>
      <div className="hero lg:h-[500px] px-4 bg-mainColor rounded-md ">
        <div className="lg:flex lg:flex-row flex flex-col-reverse items-center gap-5">
          <div className="max-w-screen-sm pb-5">
            <h1 className="md:text-5xl text-2xl	font-bold">Discover Smartphones & Accessories</h1>
            <p className="py-6">
            Browse our store to find new collections of smartphones, laptops and other electronics and accessories at the best prices.
            </p>
            <button className="btn btn-neutral text-white normal-case">Shop Now <FaCartArrowDown/></button>
          </div>
          <div className="my-10"><img src="https://i.postimg.cc/T2FH1g6g/banner.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
