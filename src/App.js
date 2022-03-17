import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Slider } from "./Slider.js";
import { Card } from "./Home";
import {Latest} from "./Latest"
// import {Video} from "./Vedio";
import { Annimation } from "./Animation";
function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="App">
      {/* <ResponsiveAppBar/> */}
      <AppBar
        style={{ backgroundColor: "grey", opacity: "0.8" }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Project 2
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => history.push("/welcome")}
                    textAlign="center"
                  >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => history.push("/list")}
                  >
                    list
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">BasicForm</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Project 2
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", justifyContent: "center", md: "flex" },
              }}
            >
              <Button
                onClick={() => history.push("/welcome")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                home
              </Button>
              <Button
                onClick={() => history.push("/list")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                list
              </Button>

              <Button sx={{ my: 2, color: "white", display: "block" }}>
                BasicForm
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="pemy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">New-User</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Video/> */}

      <Slider />
      
      <Card/>
      <h2>latest</h2>
      <Annimation/>
      <Latest/>

      <Switch>
        <Route exact path="/">
          <h1> default path</h1>
        </Route>
        <Route exact path="/welcome">
          <h1> home path</h1>
       
        </Route>
        <Route exact path="/list">
          <h1> list path</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
