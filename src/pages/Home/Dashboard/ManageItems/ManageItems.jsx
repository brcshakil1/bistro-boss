import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    console.log("click on ", item);
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(res.data);
          }
        });
      }
    });
  };

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <SectionTitle heading="MANAGE ALL ITEMS" subHeading="---Hurry Up!---" />
      <div>
        <h3 className="text-3xl font-bold ml-5 py-8">
          Total Items: {menu.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table ml-5">
            {/* head */}
            <thead>
              <tr className="bg-yellow-600">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button
                        // onClick={() => handleDelete(item._id)}
                        className="btn  bg-orange-500 "
                      >
                        <FaEdit className=" text-white" />
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn  bg-red-400"
                    >
                      <RiDeleteBin6Line className=" text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
