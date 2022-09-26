import React  from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions/auth.actions";
import { useEffect } from "react";
import { LoginPayload } from "../models/login-payload";
import Spinner from "react-bootstrap/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppDispatch, RootState } from "../store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, isAuthenticated, token, error } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  let validationSchema = yup.object().shape({
    rememberme: yup.boolean(),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(25, "Password must be at most 25 characters")
      .required("Pasword is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } =
    useForm<LoginPayload>(formOptions);
  const { errors } = formState;

  const onSubmit = (data: LoginPayload) => {
    dispatch(loginAction(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    error &&
      toast.error(error, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [error]);

  const onErrors = (data: any) => {
    console.log(data);
    toast.error("Please check the errors on the form", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const classes = {
    pageBody: "h-screen flex bg-gray-bg1",
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
    checkbox: "mr-2 h-4 w-4 ",
    input:
      "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out",
    errorText: "text-red mb-4",
  };

  return (
    <div className={classes.pageBody}>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Log in to your account 🔐</h1>

        <form onSubmit={handleSubmit(onSubmit, onErrors)}>
          <ToastContainer />
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Your Email"
              {...register("email")}
              className={classes.input}
              name="email"
            />
            <small className={classes.errorText}>
              {errors?.email && errors.email.message}
            </small>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={classes.input}
              id="password"
              placeholder="Your Password"
              {...register("password")}
              name="password"
            />

            <small className={classes.errorText}>
              {errors?.password && errors.password.message}
            </small>
          </div>

          <div className="mt-4">
            <input
              className={classes.checkbox}
              id="rememberMe"
              type="checkbox"
              {...register("rememberMe")}
              name="rememberMe"
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>

          <div className={classes.btnContainer}>
            <button
              disabled={loading}
              className="items-center  bg-primary  text-white  px-4 py-2 text-gray-800  rounded-md shadow hover:bg-gray-100"
              type="submit"
            >
              {loading ? (
                <Spinner animation="border" variant="light" />
              ) : (
                <span>LOGIN</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
