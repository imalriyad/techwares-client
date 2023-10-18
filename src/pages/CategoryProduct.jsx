import { useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      <h1>This is Category for : </h1>
    </div>
  );
};

export default CategoryProduct;
