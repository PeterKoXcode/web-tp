import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DownloadButton from "../components/DownloadButton";
import ListItemButton from "@mui/material/ListItemButton";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fireflyImage from '../../public/images/firefly.png';
//import logoImage from '../../public/images/STU-FEI-ancv.png';

export function Home() {
  return (
    <>
      <div
        className=" text-center pt-5"
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          /*background: "#dcdde9",*/
          backgroundImage: `url(${fireflyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
          Segmentácia vrstiev sietnice oka z obrazov získaných optickou
          koherentnou tomografiou (OCT)
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
                    primary="Prečítajte si o projekte"
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
                    primary="Prečítajte si o členoch tímu"
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
                    primary="Naša zápisnica"
                  />
                </ListItemButton>
              </ListItem>
            </Nav.Link>
          </Nav>
        </List>
        <div className="mt-5">
          <DownloadButton />
        </div>
        {/*
        <img
          src={logoImage}
          alt="Logo"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            width: '150px', 
            height: 'auto',
          }}
        />
        */}
      </div>
    </>
  );
}
