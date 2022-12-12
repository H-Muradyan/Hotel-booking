import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { register } from "../../../api/auth/auth";

const useRegister = () => {

  const navigate = useNavigate();

  const registerHandler = async (values) => {
    // setLoading(true);
    try {
      const response = await register(values);
      toast.success("successfully registered");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      toast.error(err);
    //   setLoading(false);
    }
  };
  return {
    registerHandler,
  };
};

export default useRegister;
