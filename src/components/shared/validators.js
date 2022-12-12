import * as Yup from "yup";

export const validationLogin = Yup.object({
  email: Yup.string().email().required("required"),
  password: Yup.string().required("required").min(6).matches().max(64).matches(),
});

export const validationRegister = Yup.object({
  name: Yup.string().required("required").min(2).matches().max(30).matches(),
  email: Yup.string().email().required("required"),
  password: Yup.string().required("required").min(6).matches().max(64).matches(),
});


export const validators = (value) => {
  const error = {};
  for (let key in value) {
    if (!value[key]) {
      error[key] = "This field is required.";
    }
  }

  return error;
};
