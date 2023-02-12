import React, { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import LButton from "../components/LButton";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Logo from "../components/Logo";
import AuthentticationLink from "../components/AuthentticationLink";
import Alert from "@mui/material/Alert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const CommonButton = styled(Button)({
  width: "100%",
  fontSize: "20.64px",
  padding: "10px 0",
  backgroundColor: "#086FA4",
  fontFamily: ["Nunito", "sans-serif"],
  borderRadius: "86px",

  "&:hover": {
    backgroundColor: "#072B3F",
  },
});

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  let [show, setShow] = useState(false);
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  

  let handleForm = (e) => {
    let { name, value } = e.target;

    if (name === "password") {
      let capi = /[A-Z]/;
      let lower = /[a-z]/;
      let num = /[0-9]/;
      if (!capi.test(value)) {
        setError({ ...error, password: "One Capital Letter Required" });
        return;
      }
      if (!lower.test(value)) {
        setError({ ...error, password: "One Small Letter Required" });
        return;
      }
      if (!num.test(value)) {
        setError({ ...error, password: "One Number Required" });
        return;
      }
      if (value.length < 6) {
        setError({ ...error, password: "Password length atlest 6" });
        return;
      }
    }

    setFormData({ ...formData, [name]: value });

    setError({ ...error, [name]: "" });
  };

  let handleClick = () => {
    setLoader(true)
    let expression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formData.email === "") {
      setError({ ...error, email: "Email Required" });
    } else if (!expression.test(formData.email)) {
      setError({ ...error, email: "Valid Email Required" });
    } else if (formData.fullname === "") {
      setError({ ...error, fullname: "Fullname Required" });
    } else if (formData.password === "") {
      setError({ ...error, password: "Password Required" });
    } else {
      createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((user) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setLoader(false);
          toast("Email sent. Please check your email and verify your email !");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        });
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="registration">
        <Logo />
        <Header>
          <Heading
            className="heading"
            as="p"
            title="Get started with easily register"
          />
          <p className="regpara">Free register and you can enjoy it</p>
        </Header>
        <div className="inputbox" style={{ position: "relative" }}>
          <InputBox
            type="email"
            name="email"
            textChange={handleForm}
            className="reginput"
            label="Email Address"
            variant="outlined"
          />

          {error.email && (
            <Alert variant="filled" severity="error">
              Email is requart!
            </Alert>
          )}
          <InputBox
            type="text"
            name="fullname"
            textChange={handleForm}
            className="reginput"
            label="Full Name"
            variant="outlined"
          />
          {error.fullname && (
            <Alert variant="filled" severity="error">
              Fullname is requart!
            </Alert>
          )}
          <InputBox
            type={show ? "text" : "password"}
            name="password"
            textChange={handleForm}
            className="reginput"
            label="Password"
            variant="outlined"
          />

          {show ? (
            <AiFillEye onClick={() => setShow(false)} className="eyeicon" />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setShow(true)}
              className="eyeicon"
            />
          )}

          {error.password && (
            <Alert variant="filled" severity="error">
              Password is requart!
            </Alert>
          )}
        </div>

        

        {loader ? 
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
          :
          <LButton
          className="signup-btn"
          click={handleClick}
          bname={CommonButton}
          title="Sign Up"
        />

        }

        <AuthentticationLink
          className="reglink"
          title="Already have an accoutn?"
          hreftitle="Sign In"
          href="/login"
        />
      </div>
    </>
  );
};

export default Registration;
