import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";
const FoodCard = ({ item }) => {
  const { image: img, category: title, recipe: desc, price, _id, name } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const axios = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    const cartItem = {
      menuId: _id,
      email: user?.email,
      name,
      image: img,
      recipe: desc,
      price,
    };
    if (user && user.email) {
      axios
        .post("/user/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`You've successfully ordered ${name}`);
          }
          // refetch the cart
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login first for order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="w-96 shadow-md bg-base-300 relative">
      <img src={img} alt="Shoes" className="w-full h-72 object-cover" />
      {price && (
        <p className="py-1 top-5 right-5 px-3 absolute text-white rounded-md font-semibold text-lg bg-slate-900">
          ${price}
        </p>
      )}
      <div className="flex flex-col justify-center items-center px-5 text-center py-5 space-y-3">
        <h2 className="card-title  uppercase">{title}</h2>
        <p className="font-semibold pb-1">{desc}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="bg-slate-200 py-3 px-5 rounded-md text-yellow-600 hover:bg-slate-800 uppercase font-bold border-0 border-b-4 border-yellow-600"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
