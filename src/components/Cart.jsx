import { useLoaderData } from "react-router-dom";
import Card from "../Brands/Card";
import swal from "sweetalert";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";

const Cart = () => {
  const cartProduct = useLoaderData();
  const {setCartLength} = useContext(AuthContext)
  const [product, setProduct] = useState(cartProduct);

  useEffect(()=>{
    setCartLength(product.length)
  },[product.length,setCartLength])
  
  const deletebtn = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal(
                "Yay!",
                "Product successfully deleted form your cart!",
                "success"
              );
              const remainigProduct = product?.filter(
                (item) => item._id !== id
              );
              setProduct(remainigProduct);
              
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">
        Number of Carted product : {product?.length}
      </h1>
      <div className="mx-auto max-w-screen-2xl px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
        {product?.map((item) => (
          <Card key={item._id} deletebtn={deletebtn} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
