import React, { useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "../slices/userSlice";
import Grid from "@mui/material/Grid";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  let data = useSelector((state) => state);

  // console.log(data.userdata.userInfo.uid)

  if (!data.userdata.userInfo.uid) {
    navigate("/login");
  }

  let handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userInfo");
      dispatch(activeUser(null));
      navigate("/login");
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>xs=4</h1>
        </Grid>
        <Grid item xs={8}>
          <h3>xs=8 Home</h3>
        </Grid>
      </Grid>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Home;
