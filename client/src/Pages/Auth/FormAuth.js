import React from "react";
import InputField from "../../Components/Inputs/InputField";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import googleIcon from '../../Asserts/google.png'
import {Link} from 'react-router-dom'

const FormAuth = ({ type }) => {
  return (
    <>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-20">
            {type === "Sign-in" ? "Welcome back" : "Join us today"}
          </h1>
          {type !== "Sign-in" ? (
            <InputField
              type={"text"}
              placeholder={"Full Name"}
              icons={<FaRegUser />}
            />
          ) : (
            ""
          )}
          <InputField
            type={"email"}
            placeholder={"Email"}
            icons={<TfiEmail />}
          />
          <InputField
            type={"password"}
            placeholder={"Password"}
            icons={<RiLockPasswordLine />}
          />
          <button
          type="submit"
            className="btn-dark center mt-14"
          >
            { type.replace("-"," ") }
          </button>

          <div 
          className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold"
          >
            <hr className="w-1/2 border-black" />
             <span>or</span>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-4 capitalize w-[90%] center ">
            <img src={googleIcon} alt='google' className="w-5" />
            continue with google
          </button>
          {
            type === "Sign-in" ?
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account? {" "}
              <Link 
              to='/signup'
              className='underline text-black text-xl ml-1'
              > 
              Join us today 
              </Link>
            </p>
            :
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member?  {" "}
              <Link to='/signin' className="underline text-black text-xl ml-1">
                 Sign in here
              </Link>
            </p>
          }
        </form>
      </section>
    </>
  );
};

export default FormAuth;
