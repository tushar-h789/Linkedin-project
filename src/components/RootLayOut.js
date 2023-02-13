import React, { useState } from "react";
import Container from "@mui/material/Container";
import Images from "./Images";
import Button from "@mui/material/Button";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Tabs from "@mui/material/Tabs";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "../slices/userSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RootLayOut = () => {
  const [value, setValue] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openBio, setOpenBio] = useState(false);
  const handleOpenBio = () => setOpenBio(true);
  const handleCloseBio = () => setOpenBio(false);

  const [openPro, setOpenPro] = useState(false);
  const handleOpenPro = () => setOpenPro(true);
  const handleClosePro = () => setOpenPro(false);

  let handleProfile = () => {
    navigate("/profileinfo");
  };

  let handleFriends = () => {
    navigate("/friends");
  };

  let handlePost = () => {
    navigate("/post");
  };

  const auth = getAuth();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let data = useSelector((state) => state);
  // console.log(data.userdata.userInfo.displayName);

  let [formData, setFormData] = useState({
    fullname: "",
  });

  let handleForm = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

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

  // let handleUpdateName=()=>{
  //   updateProfile(auth.currentUser, {
  //     displayName: formData.displayName,
  //   }).then(() => {
  //     console.log("update hoiche")
  //   }).catch((error) => {
  //     // An error occurred
  //     // ...
  //   });
  // }

  //images start
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result );
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  //images part end


  
  return (
    <>
      <Container fixed>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <div className="profile">
          <div className="coverPic">
            <Images className="cover" imgsrc="assets/coverpic.png"/>
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
            <div onClick={handleOpenPro} style={{ marginLeft: "45px", marginTop: "-30px" }}>
              <Images  imgsrc="assets/profile.png" />
            </div>
            <div className="profileName">
              <h3>{data.userdata.userInfo.displayName}</h3>
              <FiEdit onClick={handleOpen} cursor="pointer" />
              <p>
                Freelance UX/UI designer, 80+ projects in web design, mobile
                apps (iOS & android) and creative projects. Open to offers.
                <FiEdit
                  onClick={handleOpenBio}
                  style={{ marginLeft: "18px", marginTop: "8px" }}
                  cursor="pointer"
                />
              </p>
              <div>
              <Button style={{ marginTop: "15px" }} variant="contained">
                Contained
              </Button>
              <Button onClick={handleLogout} style={{ marginTop: "15px", marginLeft:"24px" }} variant="contained">
                Log Out
              </Button>
              </div>
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

        <Outlet />
        {/* <BiLogOut className="signOut"  /> */}
        {/* <button >Log Out</button> */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Change Your Name
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                onChange={handleForm}
              />
            </Typography>
            <Button style={{ marginTop: "12px" }} variant="contained">
              Update
            </Button>
          </Box>
        </Modal>

        <Modal
          open={openBio}
          onClose={handleCloseBio}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Change Your Bio
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Typography>
            <Button style={{ marginTop: "12px" }} variant="contained">
              Update
            </Button>
          </Box>
        </Modal>

        <Modal
          open={openPro}
          onClose={handleClosePro}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h4 style={{marginLeft:"40px"}}>Change Your Profile Photo</h4>
              <div style={{ marginLeft: "95px" }}>
              {/* <Images  imgsrc="assets/profile.png" /> */}
              <div className="img-preview"></div>
            </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input onChange={onChange} type="file"/>

              <Cropper
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />

            </Typography>
            <Button onClick={getCropData} style={{ marginTop: "12px" }} variant="contained">
              Submit
            </Button>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default RootLayOut;
