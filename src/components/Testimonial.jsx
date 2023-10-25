/* eslint-disable react/no-unescaped-entities */
const Testimonial = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the collection of Messages from our Happy clients
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  A Fantastic Experience with TechWares
                </h3>
                <p className="my-4 md:text-base text-xs">
                  "I recently purchased a new phone from TechWares, and I
                  couldn't be happier with the entire experience. From browsing
                  the website to the final delivery, everything went smoothly
                  and exceeded my expectations.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  A Seamless Shopping Experience at TechWares
                </h3>
                <p className="my-4 md:text-base text-xs">
                  "TechWares provided me with a seamless shopping experience. I
                  found the perfect phone, made a hassle-free purchase, and
                  received it in no time. This website exceeded my expectations,
                  and I'm one satisfied customer."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  TechWares - Your Go-To Place for Tech Gadgets
                </h3>
                <p className="my-4 md:text-base text-xs">
                  "If you're in the market for tech gadgets, TechWares is the
                  place to be. I recently bought a new phone, and I must say,
                  the selection, pricing, and service are top-notch. I couldn't
                  have asked for a better experience!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Exceptional Service at TechWares
                </h3>
                <p className="my-4 md:text-base text-xs">
                  "TechWares provided me with exceptional service from start to
                  finish. The website's user-friendly design, the wide range of
                  phones, and the quick delivery impressed me. I'm a happy
                  customer and will definitely return for my tech needs."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
