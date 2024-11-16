import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './NavBar2.css';
import SignUp from './SignUp';

const pages = [ 'Dashboard', 'LiveStreaming','Assignments', 'Calendar','Resources','Support','Feedback','Chatbot'];
const settings = ['Profile', 'Dashboard','LogOut'];

function NavBar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

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

  // Handle user settings action
  const handleSettingsClick = (setting) => {
    handleCloseUserMenu();

    
    

    switch (pages) {
      case 'Dashboard':
        navigate('/dashboard'); // Navigate to Profile page
        break;
      
        
      case 'TrainingModules':
        navigate('/livestreaming'); // Navigate to Dashboard page
        break;
        case 'Chatbot':
        navigate('/Chatbot'); // Navigate to Dashboard page
        break;
      
      case 'Assignments':
        // Implement your logout functionality here, such as clearing tokens or user state
        navigate('/assignments');
        break;
        
      case 'Calendar':
        navigate('/calendar'); // Navigate to Dashboard page
        break;
      case 'Resources':
        navigate('/resources'); // Navigate to Dashboard page
        break;
      case 'Support':
        navigate('/support'); // Navigate to Dashboard page
        break;
      case 'Feedback':
        navigate('/feedback'); // Navigate to Dashboard page
        break;
      default:
        break;
    }

    switch (setting) {
      case 'Profile':
        navigate('/profile'); // Navigate to Profile page
        break;
      case 'Dashboard':
        navigate('/dashboard'); // Navigate to Dashboard page
        break;
      
      case 'LogOut':
        // Implement your logout functionality here, such as clearing tokens or user state
        navigate('/signup');
        break;
      default:
        break;
    }
  };

  return (
    <AppBar >
      <Container maxWidth="xxxl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/*<Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 7000,
              letterSpacing: '.10rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>*/}

          {/* Menu for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => window.location.href = `/${page.replace(' ', '-').toLowerCase()}`}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
          {/* Menu for large screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => window.location.href = `/${page.replace(' ', '-').toLowerCase()}`}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Settings Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleSettingsClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar2;
