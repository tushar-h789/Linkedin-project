import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Images from "../components/Images";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Friends = () => {
  let [userlist, setUserlist] = useState([]);

  const db = getDatabase();
  let data = useSelector(state=>state)
  console.log(data.userdata.userInfo.uid)

  useEffect(() => {
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.userdata.userInfo.uid != item.key){
          arr.push(item.val());

        }
      });
      setUserlist(arr);
    });
  },[]);

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className="friendsUser">
            <div className="friends">
              <h2 style={{ borderBottom: "1px solid #ACA3A3" }}>Friends</h2>
              <div style={{ backgroundColor: "#eef1f4" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>

              <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>

              <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>

              <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>

              <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>

              <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                      Friend
                    </Button>
                    <Button variant="contained">Block</Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={4}>
          <h2 style={{ borderBottom: "1px solid #ACA3A3" }}>Friend Request</h2>
          <div style={{ backgroundColor: "#eef1f4" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>

          <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>

          <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>

          <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>

          <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>

          <div style={{ backgroundColor: "#eef1f4", marginTop: "12px" }}>
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
                  Accept
                </Button>
                <Button variant="contained">Reject</Button>
              </div>
            </List>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div>
            <h2 style={{ borderBottom: "1px solid #ACA3A3" }}>User List</h2>
          </div>

          {userlist.map(item=>(
          <div style={{ backgroundColor: "#eef1f4", marginTop:"12px" }}>
            <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar style={{ marginRight: "18px" }}>
                  <Images imgsrc="assets/profile.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.displayName}
                  secondary={<React.Fragment> 
                    {item.email}
                  </React.Fragment>}
                />
              </ListItem>
              <div style={{ marginTop: "18px" }}>
                <Button style={{ marginRight: "24px" }} variant="contained">
                  Friend Request
                </Button>
              </div>
            </List>
          </div>
          ))}

          
        </Grid>
      </Grid>
    </Container>
  );
};

export default Friends;
