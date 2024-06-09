import React, { useRef } from "react";
import InputField from "../../Components/Inputs/InputField";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import googleIcon from "../../Asserts/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import AnimationWrapper from "../../Components/Animation/AnimationWrapper";
import toast from "react-hot-toast";
import { signInAction, signUpAction } from "../../Redux/Actions/authAction";

const FormAuth = ({ type }) => {
  const authForm = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // userAuthThroughServer function
  const userAuthThroughServer = (serverRoute, formData) => {
    // console.log("serverRoute--", serverRoute);
    // console.log("formData--", formData);
    if (serverRoute === '/signup') {
      dispatch(signUpAction({ serverRoute, formData })).then((response) => {
        // console.log("user--", response);
        if (response.data.status === 'success') {
          navigate('/signin')
        }
      }).catch((error) => {
        console.log("Error in ", error);
        toast.error(error.response.data.error)
      })
    } else {
      // signinUser 
      dispatch(signInAction({ serverRoute, formData })).then((response) => {
        console.log(response);
        dispatch({
          type: "USER_LOGIN",
          payload: response.data,
        })
        // then move user to login
      }).catch((error) => {
        console.log("error in Signin user", error);
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let serverRoute = type === 'Sign-in' ? "/signin" : "/signup";

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let form = new FormData(authForm.current);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    const { fullname, email, password } = formData;
    //  form Validation
    if (fullname?.length < 3) {
      return toast.error("Full Name must be at least 3 characters long");
    }

    if (!email?.length) {
      return toast.error("Email is required");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is Invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error("Password should be 6 to 20 characters long with a numeric , 1 lowerCase and 1 upperCase letters");
    }

    userAuthThroughServer(serverRoute, formData)
  };

  return (
    <>
      <AnimationWrapper key={type}>
        <section className="h-cover flex items-center justify-center">
          <form className="w-[80%] max-w-[400px]" ref={authForm}>
            <h1 className="text-4xl font-gelasio capitalize text-center mb-20">
              {type === "Sign-in" ? "Welcome back" : "Join us today"}
            </h1>
            {type !== "Sign-in" ? (
              <InputField
                type={"text"}
                placeholder={"Full Name"}
                icons={<FaRegUser />}
                name={"fullname"}
              />
            ) : (
              ""
            )}
            <InputField
              type={"email"}
              placeholder={"Email"}
              icons={<TfiEmail />}
              name={"email"}
            />
            <InputField
              type={"password"}
              placeholder={"Password"}
              icons={<RiLockPasswordLine />}
              name={"password"}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-dark center mt-14"
            >
              {type.replace("-", " ")}
            </button>

            <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
              <hr className="w-1/2 border-black" />
              <span>or</span>
              <hr className="w-1/2 border-black" />
            </div>
            <button className="btn-dark flex items-center justify-center gap-4 capitalize w-[90%] center ">
              <img src={googleIcon} alt="google" className="w-5" />
              continue with google
            </button>
            {type === "Sign-in" ? (
              <p className="mt-6 text-dark-grey text-xl text-center">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="underline text-black text-xl ml-1"
                >
                  Join us today
                </Link>
              </p>
            ) : (
              <p className="mt-6 text-dark-grey text-xl text-center">
                Already a member?{" "}
                <Link
                  to="/signin"
                  className="underline text-black text-xl ml-1"
                >
                  Sign in here
                </Link>
              </p>
            )}
          </form>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default FormAuth;
