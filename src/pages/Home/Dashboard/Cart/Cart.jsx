import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axios = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/user/carts-remove/${id}`)
          .then((res) => {
            console.log(res.data);

            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="p-8 ">
      <h2 className="text-6xl py-8 text-center">My cart</h2>
      <div className="flex justify-evenly">
        <h3 className="text-4xl font-bold">Total Items: {cart.length}</h3>
        <p>Total Price: ${totalPrice}</p>

        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay Now</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay Now
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs "
                  >
                    <RiDeleteBin6Line className="text-2xl text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
