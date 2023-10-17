const Hero = () => {
  return (
    <div>
      <div className="hero lg:h-[60vh] h-auto px-4 rounded-md bg-[#E2F3FA]">
        <div className="lg:flex lg:flex-row flex flex-col-reverse items-center gap-5">
          <div className="max-w-screen-sm pb-5">
            <h1 className="md:text-5xl text-2xl	font-bold">Discover Smartphones & Accessories</h1>
            <p className="py-6">
            Browse our store to find new collections of smartphones, laptops and other electronics and accessories at the best prices.
            </p>
            <button className="btn btn-neutral text-white normal-case">Shop Now</button>
          </div>
          <div className="my-10"><img src="https://live.templately.com/wp-content/uploads/2021/01/e307be42-mobile_banner.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
