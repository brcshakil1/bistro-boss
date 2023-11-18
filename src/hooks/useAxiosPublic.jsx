import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-delta-ebon.vercel.app/api/v1",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
