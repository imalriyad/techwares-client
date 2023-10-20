/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Card from "./Card";

const BrandProduct = () => {
  const loadedProduct = useLoaderData();
  const [currentIndex, setIndex] = useState(0);
  const sliderImg = [
    "https://i.postimg.cc/26x5qcbQ/slider1.jpg",
    "https://i.postimg.cc/qqkWRQyC/slider1.jpg",
    "https://i.postimg.cc/T1Rr60CH/slider2.jpg",
  ];

  useEffect(() => {
    const nextButton = document.querySelector(".swiper-button-next");
    const handleNextClick = () => {
      const isLast = currentIndex === sliderImg.length - 1;
      const newIndex = isLast ? 0 : currentIndex + 1;
      setIndex(newIndex);
    };

    nextButton.addEventListener("click", handleNextClick);

    return () => {
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, [currentIndex]);

  useEffect(() => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const handlePrevClick = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = Math.abs(
        isFirstSlide ? sliderImg.length - 1 : currentIndex - 1
      );
      setIndex(newIndex);
    };

    prevButton.addEventListener("click", handlePrevClick);
    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, [currentIndex]);

  return (
   
     <div className="mx-auto mt-5  max-w-screen-2xl relative z-[0]">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper rounded-lg "
      >
        {loadedProduct.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              style={{
                backgroundImage: `url(${sliderImg[currentIndex]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="md:flex flex-row-reverse md:h-[600px] items-center "
            >
              <div className="flex flex-col relative items-center">
                <img src={item.productphotoUrl} className="" alt="" />
                <h1 className="md:text-xl p-1 rounded absolute bottom-4 bg-[#f39c12] font-bold text-[#f5f6fa]">
                  {item.productName}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="grid gap-5 px-4 mt-10 lg:grid-cols-3 grid-cols-1 mx-auto max-w-screen-2xl">
        {
          loadedProduct.length <1 ? <div className="flex col-span-3 flex-col"><img src="https://i.postimg.cc/rpx4g66R/empty-inbox-outline.png" className="w-40 mx-auto" alt="" /><h1 className="text-center text-2xl md:text-4xl font-bold">NO data Available</h1></div>:
          loadedProduct?.map(item => <Card key={item._id} item={item}></Card>)
        }
      </div>
    </div>
  );
};

export default BrandProduct;
