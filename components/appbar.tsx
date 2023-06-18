import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const GlassmorphicAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.05);
`;

const GlassyButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.04);
  color: black;
  margin-right: 10px;
  &:hover {
    background: rgba(255, 225, 255, 0.3);
  }
`;

function ResponsiveAppBar() {
  const [value, setValue] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  const handleContactUs = () => {
    console.log('Contact Us clicked');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <GlassmorphicAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: 'Roboto',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            danishsadpara
          </Typography>
          <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
            <GlassyButton onClick={handleContactUs}>Contact Us</GlassyButton>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton onClick={handleMenuToggle} color="error">
              <MenuIcon />
            </IconButton>
            {menuOpen && (
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Navigation tabs"
                orientation="vertical"
                sx={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  left: 0,
                  backgroundColor: 'white',
                  zIndex: 1000,
                }}
              >
                <Tab label="Home" />
                <Tab label="Projects" />
                <Tab label="Skills" />
              </Tabs>
            )}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Tabs value={value} onChange={handleChange} aria-label="Navigation tabs">
              <Tab label="Home" />
              <Tab label="Projects" />
              <Tab label="Skills" />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </GlassmorphicAppBar>
  );
}

export default ResponsiveAppBar;
