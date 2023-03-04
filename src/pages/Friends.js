import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserList from "../components/UserList";
import FriendRequest from "../components/FriendRequest";
import FriendList from "../components/FriendList";
import BlockUser from "../components/BlockUser";

const Friends = () => {

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FriendList/>
        </Grid>

        <Grid item xs={3}>
          <FriendRequest/>
        </Grid>
        <Grid item xs={3}>
          <BlockUser/>
        </Grid>
        <Grid item xs={3}>
        <UserList/>
        </Grid>

        
        
      </Grid>
    </Container>
  );
};

export default Friends;
