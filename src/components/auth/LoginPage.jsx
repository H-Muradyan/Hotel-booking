import { Formik, Form } from "formik";
import { useState } from "react";
import useLogin from "../redux/actions/useLogin";
import AuthPage from "../shared/AuthPage";
import TextInput from "../shared/TextInput";
import { validationLogin } from "../shared/validators";
import { LoadingOutlined } from "@ant-design/icons";



const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  let initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    loginHandler(data);
  };
  const { loginHandler } = useLogin();

  return (
    <AuthPage text="Log in">
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationLogin}>
        <Form className="space-y-8 py-12 text-end px-10 md:px-5 lg:px-20 [&>div]:w-full">
          <TextInput type="email" text="Email" name="email" />
          <TextInput type="password" text="Password" name="password" />
          <div>
            <button
              type="submit"
              className="button1 h-12 w-28 rounded text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
            >
               {loading && (
                <LoadingOutlined className="mr-2" spin/>
              )}
              Log in
            </button>
          </div>
        </Form>
      </Formik>
    </AuthPage>
  );
};

export default LoginPage;
