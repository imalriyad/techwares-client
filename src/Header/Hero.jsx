import { FaCartArrowDown } from 'react-icons/fa';
const Hero = () => {
  return (
    <div>
      <div style={{
        backgroundImage:'url(https://i.postimg.cc/rpjXPnbY/Pngtree-2-5d-notebook-gold-online-928702.jpg)'
      }} className="hero lg:h-[600px] rounded-md ">
          <div className="hero-overlay bg-opacity-40 "></div>
        <div className="lg:flex lg:flex-row flex flex-col-reverse items-center gap-5 text-[#fff]">
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
