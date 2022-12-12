import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../../../api/auth/auth";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (values) => {
    // setLoading(true);
    try {
      const response = await login( values);
      setTimeout(() => {
        navigate("/dashboard/bookings");
      }, 1000);
      if (response.data) {
        window.localStorage.setItem("auth", JSON.stringify(response.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: response.data,
        });
      }
    } catch (err) {
      toast.error(err.response.data);
      //   setLoading(false);
    }
  };
  return { loginHandler };
};

export default useLogin;
