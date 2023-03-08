import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from '../../Assets/image/LOGO.jpg';
import SearchBar from './searchBar';
import './styleNavbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import { getLogged } from '../../helpers';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useCustomSelector } from 'hooks/redux';

export default function NavBar(): any {
  const rol = localStorage.getItem('rol');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>): any => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (): any => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (): any => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): any => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/misPublicaciones">Mis publicaciones</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link to="/miPerfil">Mi perfil</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {rol === 'administrador' && (
        <Link to={'/dashboard'}>
          <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
        </Link>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  React.useEffect((): void => {
    if (Boolean(isAuthenticated) && user != null) {
      getLogged(true);
      const { name, email, image } = user;
      auth0Logica(name, image, email);
    }
  }, [isAuthenticated, user]);
  const logged = useCustomSelector((state) => state.users.logged);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const login = () => {
    Swal.fire({
      title: 'Tienes cuenta en PetsHouse?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Login',
      denyButtonText: `Ingresa con gmail`
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/loginAPI');
      } else if (result.isDenied) {
        loginWithRedirect();
      }
    });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function auth0Logica(
    name: string | undefined,
    image: any,
    email: string | undefined
  ) {
    try {
      await axios
        .post(`/users/userAuth0`, { name, image, email })
        .then((res: { data: any }) => {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('name', res.data.name);
          localStorage.setItem('image', res.data.image);
          localStorage.setItem('rol', res.data.rol);
        });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const logoutApp = () => {
    getLogged(false);
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#a6b2ed' }} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ padding: '10px 0px' }}>
            <img className="radius" src={Logo} alt="logo" />
          </Box>
          <SearchBar></SearchBar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ color: '#fff' }} component={Link} to="/">
              Home
            </Button>
            <Button sx={{ color: '#fff' }} component={Link} to="/donacion">
              Donacion
            </Button>
            <Button sx={{ color: '#fff' }} component={Link} to="/publicar">
              Publicar
            </Button>
            {logged ? (
              <Button sx={{ color: '#fff' }} onClick={logoutApp}>
                Logout
              </Button>
            ) : (
              <Button sx={{ color: '#fff' }} onClick={login}>
                Login
              </Button>
            )}

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/favoritos"
            >
              <FavoriteIcon />
            </IconButton>
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
