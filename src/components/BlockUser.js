import React from 'react'
import Images from "../components/Images";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const BlockUser = () => {
  return (
    <>
        <h2 style={{ borderBottom: "1px solid #ACA3A3" }}>Block Users</h2>
          <div style={{ backgroundColor: "#eef1f4", marginTop:"12px", borderRadius:"18px" }}>
            <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar style={{ marginRight: "18px" }}>
                  <Images imgsrc="assets/profile.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Alex Jhon"
                  secondary={<React.Fragment> </React.Fragment>}
                />
              </ListItem>
              <div style={{ marginTop: "18px" }}>
                <Button style={{ marginRight: "24px" }} variant="contained">
                  Unblock
                </Button>
              </div>
            </List>
          </div>
          <div style={{ backgroundColor: "#eef1f4", marginTop:"12px" }}>
            <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar style={{ marginRight: "18px" }}>
                  <Images imgsrc="assets/profile.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Alex Jhon"
                  secondary={<React.Fragment> </React.Fragment>}
                />
              </ListItem>
              <div style={{ marginTop: "18px" }}>
                <Button style={{ marginRight: "24px" }} variant="contained">
                  Unblock
                </Button>
              </div>
            </List>
          </div>
    </>
  )
}

export default BlockUser