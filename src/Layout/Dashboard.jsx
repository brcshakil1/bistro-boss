import {
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaList,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { AiFillBook, AiOutlineMail } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: get admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaList />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <AiFillBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <MdOutlinePayment />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingBag />
                  My cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">
                  <IoMdStar />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <AiFillBook />
                  Manage Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaHamburger />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <AiOutlineMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
