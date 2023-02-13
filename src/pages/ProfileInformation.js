import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import { FiEdit } from "react-icons/fi";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const ProfileInformation = () => {
  return (
    <Container fixed>
      <div className="about">
        <h2>About</h2>
        <p>
          I'm more experienced in eCommerce web projects and mobile banking
          apps, but also like to work with creative projects, such as landing
          pages or unusual corporate websites. I'm more experienced in eCommerce
          web projects and mobile banking apps, but also like to work with
          creative projects, such as landing pages or unusual corporate
          websites.
        </p>
        <Link style={{ textDecoration: "none" }}>See More</Link>
      </div>

      <div className="project">
        <div style={{ display: "flex" }}>
          <h2>project</h2>
          <p style={{ marginTop: "24px", marginLeft: "28px" }}>3 to 12</p>
        </div>
        <div className="projectPic">
          <Images imgsrc="assets/pro1.png" />
          <Images className="projectImage" imgsrc="assets/pro2.png" />
          <Images className="projectImage" imgsrc="assets/pro2.png" />
          <Images imgsrc="assets/pro3.png" />
        </div>
      </div>

      <div className="experiance">
        <h2 >Experiance</h2>
        <div style={{ height: "150px", backgroundColor: "#eef1f4" }}>
          <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar style={{ marginRight: "18px" }}>
                <Images imgsrc="assets/expimg1.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Freelance UX/UI designer"
                secondary={
                  <React.Fragment>
                    {
                      " Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <FiEdit cursor="pointer" className="expicon" />
            {/* <Divider variant="inset" component="li" /> */}
          </List>
        </div>

        <div style={{ height: "150px", backgroundColor: "#eef1f4", marginTop:"20px" }}>
          <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar style={{ marginRight: "18px" }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <Images imgsrc="assets/expimg2.png" />
              </ListItemAvatar>
              <ListItemText
                primary="UX/UI designer"
                secondary={
                  <React.Fragment>
                    {
                      " Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <FiEdit cursor="pointer" className="expicon" />
            {/* <Divider variant="inset" component="li" /> */}
          </List>
        </div>
      </div>

      <div className="education">
        <h2 style={{padding:"12px"}}>Education</h2>
      <div style={{ height: "150px", marginTop:"20px" }}>
          <List sx={{ width: "100%", maxWidth: 560, marginLeft: "12px" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar style={{ marginRight: "18px" }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <Images imgsrc="assets/education.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Moscow State Linguistic University"
                secondary={
                  <React.Fragment>
                    {
                      " Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <FiEdit cursor="pointer" className="expicon" />
            {/* <Divider variant="inset" component="li" /> */}
          </List>
        </div>
      </div>
    </Container>
  );
};

export default ProfileInformation;
