import React, { useState } from "react";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";


const InputField = ({ id, name, type, placeholder, value, icons }) => {
  const [passwordVisible,setPasswordVisible] = useState(false)
  return (
    <>
      <div className="relative w-[100%] mb-4">
        <input
          id={id}
          name={name}
          type={type === "password" ? passwordVisible ? "text" : "password" : type}
          placeholder={placeholder}
          defaultValue={value}
          className="input-box"
        />
        <span className="input-icon">{icons}</span>
        {type === "password" && (
        <span
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          className="input-icon left-[auto] right-5 cursor-pointer"
        >
          {passwordVisible ?  <IoEyeOutline /> : <HiOutlineEyeSlash /> }
        </span>
      )}
      </div>
    </>
  );
};

export default InputField;
