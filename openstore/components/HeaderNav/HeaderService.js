import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// material uiの使用

export default function HeaderService() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        サービス
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button onClick={handleClose} href="/posts/first-post">
          Profile
        </Button>
        <Button onClick={handleClose} href="/posts/">
          My account
        </Button>
        <Button onClick={handleClose} href="/posts/first">
          Logout
        </Button>
      </Menu>
    </>
  );
}
