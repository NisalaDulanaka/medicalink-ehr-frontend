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
import WhiteLogo2 from "../../assets/images/WhiteLogo2.png";
import AdminAvatar from "../../assets/images/randev.jpeg";
import { IconButton, useMediaQuery } from "@mui/material";
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
  const isLargeScreen = useMediaQuery("(min-width:600px)");

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
        // bgcolor: lightBlue[800],
        bgcolor: "#077BE0",
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
          <Box
            sx={{
              userSelect: "none",
              msUserSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              MozWindowDragging: "none",
            }}
          >
            <img src={WhiteLogo2} width={150} />
          </Box>

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
              <Box
                sx={{
                  backgroundColor: "#00000022",
                  height: "100%",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                  cursor: "pointer",
                }}
                onClick={handleOpenUserMenu}
              >
                <Avatar
                  alt=""
                  src={AdminAvatar}
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
                {isLargeScreen && (
                  <Typography
                    fontSize="0.8125rem"
                    style={{
                      userSelect: "none",
                    }}
                  >
                    Randev Wannakuwatte
                  </Typography>
                )}
              </Box>
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
