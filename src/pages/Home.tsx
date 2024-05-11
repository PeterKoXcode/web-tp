import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DownloadButton from "../components/DownloadButton";
import ListItemButton from "@mui/material/ListItemButton";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <div
        className=" text-center py-5 pt-8"
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          background: "#dcdde9",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h1
          style={{
            background: "#928ea5",
            padding: "20px",
            borderTop: "1px rgb(66 64 74) solid",
            borderBottom: "1px rgb(66 64 74) solid",
          }}
        >
          WELCOME
        </h1>
        <List
          className="mx-auto mt-5"
          sx={{
            p: 0,
            width: "100%",
            maxWidth: 360,
            borderRadius: 2,
            border: "2px rgb(66 64 74) solid",
            borderColor: "divider",
            backgroundColor: "#928ea5",
          }}
        >
          <Nav className="me-auto">
            <Nav.Link
              className="w-100 p-0"
              to="/about"
              as={NavLink}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton href="about">
                  <ListItemText
                    className="text-center"
                    primary="Read about project"
                  />
                </ListItemButton>
              </ListItem>
            </Nav.Link>
          </Nav>
          <Divider component="li" />
          <Nav className="me-auto">
            <Nav.Link
              className="w-100 p-0"
              to="/team"
              as={NavLink}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton href="team">
                  <ListItemText
                    className="text-center"
                    primary="Read about team members"
                  />
                </ListItemButton>
              </ListItem>
            </Nav.Link>
          </Nav>
          <Divider component="li" />
          <Nav className="me-auto">
            <Nav.Link
              className="w-100 p-0"
              to="/minute-book"
              as={NavLink}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton href="minute-book">
                  <ListItemText
                    className="text-center"
                    primary="Our minute book"
                  />
                </ListItemButton>
              </ListItem>
            </Nav.Link>
          </Nav>
        </List>
        <div className="mt-5">
          <DownloadButton />
        </div>
      </div>
    </>
  );
}
