const UserCollection = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    let userObject = {
      name: name,
      mobile: mobile,
      email: email,
      password: await bcrypt.hash(password, 10),
    };

    if (isValid(userObject)) {
      let user = await UserCollection(userObject);
      user.save(async (err, data) => {
        if (err) {
          let errorMessage = "";

          // duplicate error message
          if (err.code == 11000) {
            errorMessage =
              Object.keys(err.keyValue)[0].toLowerCase() + " already exists";
          }

          if (err.message.includes("User validation failed")) {
            Object.keys(err.errors).forEach((key) => {
              errorMessage = err.errors[key].message;
            });
          }

          res.status(200).json({
            status: false,
            message: errorMessage,
          });
        } else {
          const token = await generateAuthToken(data);

          if (token) {
            res.status(200).json({
              status: true,
              token: token,
              message: "User has been successfully registerd.",
            });
          }
        }
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "User Validation failed",
      });
    }
  } catch (e) {
    return res.status(200).json({
      status: false,
      message: e.message,
    });
  }
};

exports.logInUser = async (req, res) => {
  try {
    res.send("Login user");
  } catch (e) {
    console.log(e);
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.send("Logout user");
  } catch (e) {
    console.log(e);
  }
};

exports.updateUser = async (req, res) => {
  try {
    res.send("Update user");
  } catch (e) {
    console.log(e);
  }
};

async function generateAuthToken(data) {
  const token = await jwt.sign(
    { userId: data._id.toString() },
    process.env.JWT_SECRET_KEY
  );
  return token;
}

function isValid(data) {
  if (data.name) {
    if (data.name.match(/[^A-Za-z]/)) {
      return false;
    }
  }

  if (data.email) {
    if (!data.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      return false;
    }
  }

  if (data.mobile) {
    if (data.mobile.toString().length != 10) {
      return false;
    }
  }

  // if(data.password){

  // }
  return true;
}
