import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// material uiの使用

export default function HeaderCompany() {
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
        会社情報
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button onClick={handleClose} href="/posts/xxx">
          Profile
        </Button>
        <Button onClick={handleClose} href="/posts/yyy">
          My account
        </Button>
        <Button onClick={handleClose} href="/posts/zzz">
          Logout
        </Button>
      </Menu>
    </>
  );
}
