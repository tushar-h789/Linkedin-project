import React, { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import LButton from "../components/LButton";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Logo from "../components/Logo";
import AuthentticationLink from "../components/AuthentticationLink";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, sendPasswordResetEmail  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { activeUser } from '../slices/userSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Login = () => {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  let dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  let [show, setShow] = useState(false);
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState({
    email: "",
    password: "",
  });

  let [formData, setFormData] = useState({
    email: "",
    password: "",
    fgp: "",
  });

  let handleForm = (e) => {
    let { name, value } = e.target;

    // if (name === "password") {
    //   let capi = /[A-Z]/;
    //   let lower = /[a-z]/;
    //   let num = /[0-9]/;
    //   if (!capi.test(value)) {
    //     setError({ ...error, password: "One Capital Letter Required" });
    //     return;
    //   }
    //   if (!lower.test(value)) {
    //     setError({ ...error, password: "One Small Letter Required" });
    //     return;
    //   }
    //   if (!num.test(value)) {
    //     setError({ ...error, password: "One Number Required" });
    //     return;
    //   }
    //   if (value.length < 6) {
    //     setError({ ...error, password: "Password length atlest 6" });
    //     return;
    //   }
    // }

    setFormData({ ...formData, [name]: value });

    setError({ ...error, [name]: "" });
  };

  let handleClick = () => {
    setLoader(true)
    // let expression =
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (formData.email === "") {
    //   setError({ ...error, email: "Email Required" });
    // } else if (!expression.test(formData.email)) {
    //   setError({ ...error, email: "Valid Email Required" });
    // } else if (formData.fullname === "") {
    //   setError({ ...error, fullname: "Fullname Required" });
    // } else if (formData.password === "") {
    //   setError({ ...error, password: "Password Required" });
    // } else {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        
        dispatch(activeUser(userCredential.user))
        localStorage.setItem("userInfo", JSON.stringify(userCredential.user))
        if (userCredential.user.emailVerified) {
          navigate("/newsfeed");
        } else {
          setLoader(false)
          toast("Please verify your Email and try again !");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
      });
  };

  let handleGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
    });
  };

  let handleFgp=()=>{
    sendPasswordResetEmail(auth, formData.fgp)
  .then(() => {
    toast("Please Check Your Email");
    console.log("mail geche")
  })
  }

  return (
    <div className="registration">
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
      <Logo />
      <Header>
        <Heading className="heading" as="p" title="Login to your account!" />
        <p className="regpara">Free register and you can enjoy it</p>
        <div className="authLogo">
          <FcGoogle onClick={handleGoogle} cursor="pointer" />
          <FaFacebook
            style={{ color: "rgb(51, 56, 158)", marginLeft: "24px" }}
          />
        </div>
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

      <LButton click={handleClick} bname={CommonButton} title="Sign In" />

      <AuthentticationLink
        className="reglink"
        title="Don't have an account?"
        hreftitle="Sign up"
        href="/"
      />
      
      <Button  className="reglink" onClick={handleOpen}>Forgot password?</Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Forgot Password
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          <InputBox
          type="email"
          name="fgp"
          textChange={handleForm}
          className="reginput"
          label="Email Address"
          variant="outlined"
        />
        <LButton click={handleFgp} bname={CommonButton} title="Sent Email" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
