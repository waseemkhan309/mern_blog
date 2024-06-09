import User from "../Schema/User.js";
import { comparepassword, hashpassword } from "../Utils/Auth.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/; // username@domain.extension
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// generate username
const generateUsername = async (email) => {
  let username = email.split("@")[0];
  let isUsernameUnique = await User.exists({
    "personal_info.username": username,
  }).then((result) => result);
  isUsernameUnique ? (username += nanoid().substring(0, 5)) : "";
  return username;
};

const formatDatatoToSend = (user) => {
  return {
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname,
  };
};

// signIn API
// post method  
export const signupUser = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    if (fullname.length < 3) {
      return res
        .status(403)
        .json({ error: "Full Name must be at least 3 characters long" });
    }

    if (!email.length) {
      return res.status(403).json({ error: "Email is required" });
    }

    if (!emailRegex.test(email)) {
      return res.status(403).json({ error: "Email is Invalid" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(403).json({ error: "Password invalid" });
    }

    const hashedPassword = await hashpassword(password);
    let username = await generateUsername(email);
    let user = new User({
      personal_info: { fullname, email, password: hashedPassword, username },
    });
    await user
      .save()
      .then((u) => {
        // return res.status(200).json({user:u});
        return res.status(200).json({ status: "success", data: formatDatatoToSend(u), message: "Successfully user register" });
      })
      .catch((err) => {
        if (err.code == "11000") {
          return res.status(500).json({ error: "Email Already Exists" });
        }
      });

    // return res.status(200).json("OKk");
  } catch (error) {
    console.log("error -> Signup -->", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// signIn API
// post method  
export const signinUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ "personal_info.email": email });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    } else {
      const hashpasswordComp = await comparepassword(
        password,
        user.personal_info.password
      );
      // console.log("hashpasswordComp", hashpasswordComp);
      if (!hashpasswordComp) {
        return res.status(403).json({ error: "Invalid Password" });
      }
      // Generate access token
      const accessToken = jwt.sign(
        { id: user._id },
        process.env.SECRET_ACCESS_KEY,
        { expiresIn: '15m' } // Set appropriate expiration
      );

      // Generate refresh token
      const refreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_ACCESS_KEY,
        { expiresIn: '7d' } // Set appropriate expiration
      );

      const { personal_info: { password: excludedPassword, ...personalInfoWithoutPassword }, ...rest } = user._doc;
      const userWithoutPassword = {
        personal_info: personalInfoWithoutPassword,
        ...rest
      };
      //   return res.status(200).json(userWithoutPassword,access_token);
      return res.status(200).json({ status: "success", message: "User successfully login!", data: { refresh_Token: refreshToken, access_Token: accessToken, user: userWithoutPassword } });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ "error": err.message });
  }
};

// get userData API
// get
export const getUserData = (req, res, next) => {

}
