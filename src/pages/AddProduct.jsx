/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import swal from "sweetalert";

const AddProduct = () => {
  const addProductHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;
    const productRating = form.productRating.value;
    const productphotoUrl = form.productphotoUrl.value;
    const productDescription = form.productDescription.value;
    const newProduct = {
      productName,
      brandName,
      productType,
      productPrice,
      productRating,
      productDescription,
      productphotoUrl,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Yay!", "Product successfully added!", "success");
        }
      });
  };
  return (
    <div>
      <div className="max-w-screen-md md:p-10 rounded-md bg-mainColor mx-auto md:my-[4%]">
        <Link to={"/"}>
          <button className="hover:btn-neutral btn-sm btn m-4 text-secondColor border-none bg-neutral">
            <AiOutlineArrowLeft className="text-xl" />
            Go Back
          </button>
        </Link>
        <div className="md:text-center px-4">
          <h1 className="text-3xl pt-5 mb-5 font-bold text-secondColor">
            Add New Product
          </h1>
          <p className="text-sm text-secondColor">
            In the world of electronics and technology, we understand that
            captivating content can divert your attention when you're exploring
            a page's design
          </p>
        </div>
        <form
          onSubmit={addProductHandler}
          className="grid px-4 md:px-10 text-secondColor gap-5 grid-cols-2 py-12"
        >
          <label className="flex flex-col" htmlFor="">
            Name{" "}
            <input
              type="text"
              name="productName"
              required
              placeholder="Enter product name"
              className="input focus:outline-none text-[#000000]  input-bordered w-full"
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            Brand Name{" "}
            <input
              type="text"
              name="brandName"
              required
              placeholder="Enter brand Name"
              className="input focus:outline-none text-[#000000]  input-bordered w-full "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            Type{" "}
            <input
              type="text"
              name="productType"
              required
              placeholder="Enter product type"
              className="input focus:outline-none text-[#000000]  input-bordered w-full "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            Price{" "}
            <input
              type="number"
              name="productPrice"
              required
              placeholder="Enter product price"
              className="input focus:outline-none text-[#000000]  input-bordered w-full "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            Rating{" "}
            <input
              type="text"
              name="productRating"
              required
              placeholder="Enter product Rating"
              className="input focus:outline-none text-[#000000]  input-bordered w-full "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            Photo{" "}
            <input
              type="text"
              required
              name="productphotoUrl"
              placeholder="Enter product photo URL"
              className="input focus:outline-none text-[#000000]  input-bordered w-full "
            />
          </label>

          <label className="flex flex-col col-span-2" htmlFor="">
            Description
            <textarea
              placeholder="Enter product description"
              name="productDescription"
              required
              className="textarea text-[#000000] focus:outline-none textarea-bordered  textarea-sm w-full "
            ></textarea>
          </label>

          <input
            className="btn col-span-2 btn-neutral"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
