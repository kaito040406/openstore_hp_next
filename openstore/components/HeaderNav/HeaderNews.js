import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// material uiの使用

export default function HeaderNews() {
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
        ニュース
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button onClick={handleClose} href="/posts/news">
          Profile
        </Button>
        <Button onClick={handleClose} href="/posts/news">
          My account
        </Button>
        <Button onClick={handleClose} href="/posts/first">
          Logout
        </Button>
      </Menu>
    </>
  );
}
