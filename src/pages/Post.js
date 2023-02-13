import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Images from "../components/Images";
import { FiEdit } from "react-icons/fi";
import TextField from "@mui/material/TextField";
import { HiPhotograph } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Post = () => {
  return (
    <Container fixed>
      <Grid>
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
    </Container>
  )
}

export default Post