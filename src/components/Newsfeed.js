import React from "react";
import Grid from "@mui/material/Grid";
import Images from "./Images";
import { FiEdit } from "react-icons/fi";
import TextField from "@mui/material/TextField";
import { HiPhotograph } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "../slices/userSlice";
import { BiLogOut } from "react-icons/bi";

const NewsFeed = () => {
  let navigate = useNavigate();

  let handleProfileClick = () => {
    console.log("ami profile");
    navigate("/profile");
  };

  const auth = getAuth();
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
          <div onClick={handleProfileClick} className="profile">
            <div className="coverPhoto">
              <FiEdit className="proEidt" />
            </div>
            <Images className="proimg" imgsrc="assets/profileone.png" />
            <div className="proText">
              <h3 className="proName">Dmitry Kargaev</h3>
              <p className="proPara">
                Freelance UX/UI designer, 80+ projects in web design, mobile
                apps (iOS & android) and creative projects. Open to offers.
              </p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            style={{ marginTop: "-25px", marginLeft: "24px" }}
            variant="contained"
          >
            Log Out
          </Button>
        </Grid>

        <Grid item xs={8}>
          <div className="rightSite">
            <h3 className="newPost">New Post</h3>
            <TextField
              className="inputPost"
              label="Write New Post"
              variant="filled"
            />
            <div className="inputIcons">
              <HiPhotograph />
              <AiOutlineSend className="icon" />
            </div>

            <div className="peoplePost">
              <List sx={{ width: "100%", maxWidth: 880, padding: "22px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Theresa Steward"
                    secondary={
                      <React.Fragment>{"iOS developer"}</React.Fragment>
                    }
                  />
                  <BsThreeDotsVertical style={{ marginRight: "-20px" }} />
                </ListItem>
                <Divider variant="inset" component="li" />

                <p className="postPeta">
                  What did the Dursleys care if Harry lost his place on the
                  House Quidditch team because he hadnt practiced all summer?
                  What was it to the Dursleys if Harry went back to school
                  without any of his homework done? The Dursleys were what
                  wizards called Muggles (not a drop of magical blood in their
                  veins).
                </p>
              </List>
            </div>

            <div className="peoplePost">
              <List sx={{ width: "100%", maxWidth: 880, padding: "22px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Theresa Steward"
                    secondary={
                      <React.Fragment>{"iOS developer"}</React.Fragment>
                    }
                  />
                  <BsThreeDotsVertical style={{ marginRight: "-20px" }} />
                </ListItem>
                <Divider variant="inset" component="li" />

                <div className="imgpost">
                  <p className="postPeta">
                    What did the Dursleys care if Harry lost his place on the
                    House Quidditch team because he hadnt practiced all summer?
                    What was it to the Dursleys if Harry went back to school
                    without any of his homework done?.
                  </p>
                  <Images className="postimg" imgsrc="assets/postimg.png" />
                </div>
              </List>
            </div>

            <div className="peoplePost">
              <List sx={{ width: "100%", maxWidth: 880, padding: "22px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Theresa Steward"
                    secondary={
                      <React.Fragment>{"iOS developer"}</React.Fragment>
                    }
                  />
                  <BsThreeDotsVertical style={{ marginRight: "-20px" }} />
                </ListItem>
                <Divider variant="inset" component="li" />

                <p className="postPeta">
                  What did the Dursleys care if Harry lost his place on the
                  House Quidditch team because he hadnt practiced all summer?
                  What was it to the Dursleys if Harry went back to school
                  without any of his homework done? The Dursleys were what
                  wizards called Muggles (not a drop of magical blood in their
                  veins).
                </p>
              </List>
            </div>

            <div className="peoplePost">
              <List sx={{ width: "100%", maxWidth: 880, padding: "22px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Theresa Steward"
                    secondary={
                      <React.Fragment>{"iOS developer"}</React.Fragment>
                    }
                  />
                  <BsThreeDotsVertical style={{ marginRight: "-20px" }} />
                </ListItem>
                <Divider variant="inset" component="li" />

                <p className="postPeta">
                  What did the Dursleys care if Harry lost his place on the
                  House Quidditch team because he hadnt practiced all summer?
                  What was it to the Dursleys if Harry went back to school
                  without any of his homework done? The Dursleys were what
                  wizards called Muggles (not a drop of magical blood in their
                  veins).
                </p>
              </List>
            </div>

            <div className="peoplePost">
              <List sx={{ width: "100%", maxWidth: 880, padding: "22px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Theresa Steward"
                    secondary={
                      <React.Fragment>{"iOS developer"}</React.Fragment>
                    }
                  />
                  <BsThreeDotsVertical style={{ marginRight: "-20px" }} />
                </ListItem>
                <Divider variant="inset" component="li" />

                <p className="postPeta">
                  What did the Dursleys care if Harry lost his place on the
                  House Quidditch team because he hadnt practiced all summer?
                  What was it to the Dursleys if Harry went back to school
                  without any of his homework done? The Dursleys were what
                  wizards called Muggles (not a drop of magical blood in their
                  veins).
                </p>
              </List>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default NewsFeed;
