import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-mainColor md:mt-32 mt-20 w-full rounded-md ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to={"/"} className="flex flex-col items-center">
                <img
                  src="https://i.postimg.cc/NMV7ZzSP/techwares-low-resolution-logo-black-on-transparent-background.png"
                  className="h-8 mr-3"
                  alt=" Logo"
                />
                <div className="flex gap-x-7 my-8 text-2xl"><BsFacebook/> <BsGithub/> <BsTwitter/> <BsLinkedin/></div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 font-medium">
                  <li className="mb-4">
                    <Link to={'/Add Product'} className="hover:underline">
                    Add Product
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                    to={'/About'}
                      className="hover:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                    to={'/Contact'}
                      className="hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/imalriyad"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://twitter.com/imalriyad"
                      className="hover:underline"
                    >
                    Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/imalriyad"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                     Money Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                TechWares
              </a>
              . All Rights Reserved.
            </span>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
