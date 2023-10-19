const Contact = () => {
  return (
    <div className="bg-base-200 pb-10">

      <div className="md:p-6 px-4 mx-auto flex flex-col gap-6 max-w-md ">
        <h1 className="text-4xl text-center font-bold mb-3">Contact with us</h1>
        <label htmlFor="" className="font-medium">
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            className="input mt-2 font-normal input-bordered text-sm w-full focus:outline-none"
          />
        </label>
        <label htmlFor="" className="font-medium">
          Email:
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="input mt-2 font-normal text-sm input-bordered w-full focus:outline-none"
          />
        </label>
        <textarea name="" id="" placeholder="Leave a message..." cols="30" className="textarea input-bordered rounded focus:outline-none" rows="5"></textarea>
        <button className="bg-mainColor hover:bg-mainColor btn text-secondColor">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
