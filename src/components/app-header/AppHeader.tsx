import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhiteLogo from "../../assets/images/whitelogo.png";
import AdminAvatar from "../../assets/images/randev.jpeg";
import { Chip, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import { AppMenuOption } from "./utils";

const settings: AppMenuOption[] = [
  {
    label: "Profile",
    onClick: () => {},
  },
  {
    label: "Preference",
    onClick: () => {},
  },
  {
    label: "Logout",
    onClick: () => {},
  },
];
const tabs: AppMenuOption[] = [
  {
    label: "Home",
    onClick: () => {},
  },
  {
    label: "Appointments",
    onClick: () => {},
  },
  {
    label: "Settings",
    onClick: () => {},
  },
];

function AppHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: lightBlue[800],
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={WhiteLogo} width={100} />

          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              columnGap: "18px",
            }}
          >
            <Box>
              <IconButton
                sx={{ padding: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <CalendarMonthIcon />
              </IconButton>
            </Box>

            <Box>
              <IconButton
                sx={{ padding: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <AppsIcon />
              </IconButton>
              <Menu
                id="tab-menu-appbar"
                sx={{ mt: "5px" }}
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
              >
                {tabs.map(({ label, onClick }, index) => (
                  <MenuItem key={index} onClick={onClick}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box>
              <Chip
                onClick={handleOpenUserMenu}
                avatar={<Avatar alt="" src={AdminAvatar} />}
                label="Randev Wannakuwatte"
                sx={{ color: grey[50] }}
              />
              <Menu
                sx={{ mt: "25px" }}
                id="profile-menu-appbar"
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
                {settings.map(({ label, onClick }, index) => (
                  <MenuItem key={index} onClick={onClick}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
