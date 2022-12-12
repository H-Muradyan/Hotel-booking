import { Form, Formik } from "formik";
import useRegister from "../redux/actions/useRegister";
import AuthPage from "../shared/AuthPage";
import TextInput from "../shared/TextInput";
import { validationRegister } from "../shared/validators";

const RegisterPage = () => {
  const { registerHandler } = useRegister();

  let initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit1 = (values) => {
    let data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    registerHandler(data);
  };

  return (
    <AuthPage text="Register">
      <Formik
        onSubmit={onSubmit1}
        initialValues={initialValues}
        validationSchema={validationRegister}
      >
        <Form
          className="space-y-8 py-12 text-end px-10 md:px-5 lg:px-20 [&>div]:w-full"
        >
          <TextInput type="text" text="Name" name="name" />
          <TextInput type="email" text="Email" name="email" />
          <TextInput type="password" text="Password" name="password" />
          <div>
            <button
              type="submit"
              className="button1 h-12 w-28 rounded text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
            >
              {/* {loading && (
                <Spinner animation="border" className="spinner-custom" />
              )} */}
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </AuthPage>
  );
};

export default RegisterPage;
