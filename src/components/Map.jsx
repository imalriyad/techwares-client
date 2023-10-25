/* eslint-disable react/no-unescaped-entities */
const Map = () => {
  return (
    <div className="lg:flex items-start md:my-16 px-4 gap-6">
      <div>
        <h1 className="mb-4 col-span-2 md:text-4xl text-3xl md:text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
          Find us on Google Map{" "}
        </h1>
        <p className="md:text-base text-sm my-10">
          {" "}
          Visit Our Shop at House 10, Road 12, Block F, Niketan, Gulshan 1,
          Dhaka - 1212, Bangladesh. Welcome to our shop in the heart of the
          vibrant Gulshan 1 neighborhood, Dhaka. You can find us at House 10,
          Road 12, Block F, Niketan - a prime location where convenience meets
          modern living. Nestled in this prestigious area, our shop is your
          gateway to a world of quality products and exceptional service.
          Whether you're a local resident or a visitor, our location ensures
          you're just moments away from shopping centers, restaurants, and more.
        </p>
      </div>
      <div>
        <iframe
          className="rounded lg:h-[450px] h-[300px] lg:w-[700px] w-full "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.077514402765!2d90.40077980679023!3d23.782324258429824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7833577574d%3A0x8439de76a6ee1aa0!2sPickaboo!5e0!3m2!1sen!2sbd!4v1698040744087!5m2!1sen!2sbd"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
