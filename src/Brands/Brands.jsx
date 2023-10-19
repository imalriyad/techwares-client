import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();
const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-14">
      <h1 className="text-4xl font-bold text-center">All Brands</h1>
      <div className="grid px-4 grid-cols-2 lg:gap-10 gap-5 lg:mt-20 mt-10">
        {brands.map((brand) => (
          <Link key={brand._id} to={`/products/brands/${brand.name}`}>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="drop-shadow-xl cursor-pointer rounded-md bg-base-200 p-5 md:p-10 md:h-[300px] h-[130px]"
            >
              <img
                src={brand.image}
                alt=""
                className="lg:w-[300px] lg:h-[100px] object-cover mx-auto my-[10%]"
              />
              <h1 className="font-semibold absolute bottom-4 lg:text-2xl">
                {brand.brandName}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
