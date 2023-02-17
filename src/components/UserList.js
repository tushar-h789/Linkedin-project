import React, { useEffect, useState } from "react";
import Images from "../components/Images";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const UserList = () => {

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
    <>
        
          <div>
            <h2 style={{ borderBottom: "1px solid #ACA3A3" }}>User List</h2>
          </div>

          {userlist.map(item=>(
          <div style={{ backgroundColor: "#eef1f4", marginTop:"12px", borderRadius:"18px" }}>
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
        
    </>
  )
}

export default UserList