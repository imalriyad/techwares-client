import { useLoaderData, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Rating from "react-rating";
import swal from "sweetalert";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();

  const navaigate = useNavigate();
  const goBack = () => {
    navaigate(-1);
  };

  const handleAddCart = (cartProduct) => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error && data.error.includes("duplicate key")) {
          swal("Eww", "This product is already in your cart", "error");
        } else {
          swal("Yay!", "Product added to the cart successfully", "success");
        }
      })
      .catch(() => {
        swal("Eww", "This product is already in your cart", "error");
      });
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <h1 className="font-bold text-center my-5 underline md:text-4xl text-2xl ">
        Spacifications of {loadedProduct.productName}
      </h1>
      <button
        onClick={goBack}
        className=" btn-sm btn m-4 text-secondColor border-none bg-mainColor hover:bg-mainColor"
      >
        <AiOutlineArrowLeft className="text-xl" />
        Go Back
      </button>
      <div className="relative flex-row mt-10 lg:flex text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative lg:w-6/12 border-4 mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
          <img
            src={loadedProduct.productphotoUrl}
            className="object-fill h-auto mx-auto"
          />
        </div>
        <div className="p-6 md:relative lg:w-6/12">
          <div className="flex justify-between mb-5">
            <p className="font-sans md:text-4xl text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
              {loadedProduct.productName}
            </p>
            <p className="flex items-center font-sans md:text-2xl text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
              <img
                src="https://i.postimg.cc/vTTtnf2T/taka-2.png"
                alt=""
                className="w-5"
              />{" "}
              {loadedProduct.productPrice}
            </p>
          </div>
          <p className=" font-sans lg:text-base lg:mt-10 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case. With plenty of talk and
            listen time, voice-activated Siri access
          </p>
          <Rating
            className="text-[#f39c12] mt-5"
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            }
            fullSymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            }
            initialRating={loadedProduct.productRating}
            readonly
          />

          <div className="md:p-6 mx-auto pt-0 lg:absolute mt-5 lg:w-[50%] md:bottom-0 ">
            <button
              onClick={() => handleAddCart(loadedProduct)}
              className="flex bg-mainColor text-[#fff] items-center justify-center gap-2 w-full select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <BsFillCartCheckFill className="text-xl"></BsFillCartCheckFill>{" "}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
