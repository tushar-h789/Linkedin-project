import React, { useState } from "react";
import Container from "@mui/material/Container";
import Images from "./Images";
import Button from "@mui/material/Button";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Tabs from "@mui/material/Tabs";

const RootLayOut = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState();

  // const handleChange = (e, item) => {
  //   setValue(item);
  //   console.log("ami click")
  // };

  let handleProfile = () => {
    navigate("/profileinfo");
  };

  let handleFriends =()=>{
    navigate("/friends");
  }

  let handlePost =()=>{
    navigate("/post");
  }

  return (
    <>
      <Container fixed>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <div className="profile">
          <div className="coverPic">
            <FiEdit
              style={{
                color: "white",
                fontSize: "28px",
                marginLeft: "90%",
                marginTop: "90px",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "45px", marginTop: "-30px" }}>
              <Images imgsrc="assets/profile.png" />
            </div>
            <div className="profileName">
              <h3>Dmitry Kargaev</h3>
              <p>
                Freelance UX/UI designer, 80+ projects in web design, mobile
                apps (iOS & android) and creative projects. Open to offers.
              </p>
              <Button style={{ marginTop: "15px" }} variant="contained">
                Contained
              </Button>
            </div>
          </div>
        </div>

        <div className="tabs">
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="secondary"
            // indicatorColor="secondary"
            // aria-label="secondary tabs example"
          >
            <div style={{ marginTop: "21px" }}>
              <Button
                onClick={handleProfile}
                style={{
                  marginRight: "18px",
                  padding: "16px 80px",
                }}
                variant="contained"
              >
                Profile
              </Button>
              <Button
                style={{
                  marginLeft: "18px",
                  marginRight: "18px",
                  padding: "16px 80px",
                }}
                variant="contained"
                onClick={handleFriends}
              >
                Friends
              </Button>
              <Button
                style={{
                  marginLeft: "18px",
                  marginRight: "18px",
                  padding: "16px 80px",
                }}
                variant="contained"
                onClick={handlePost}
              >
                Post
              </Button>
            </div>
            {/* <Tab  label="Item Three" /> */}
          </Tabs>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default RootLayOut;
