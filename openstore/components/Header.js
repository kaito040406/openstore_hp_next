import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="header">
        <div className="header-nav">
          <ul className="header-nav-list">
            <Link href="/">
              <img className="header-logo" src="./image/openstore-logo.png" />
            </Link>
            {/* ホーム */}
            <Button href="/" aria-controls="simple-menu" aria-haspopup="true">
              ホーム
            </Button>
            {/* ///////////////////ホームボタン/////////////////// */}
            {/* サービスボタン */}
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* ///////////////////サービスボタン/////////////////// */}
            {/* 会社情報ボタン */}
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* ///////////////////会社情報ボタン/////////////////// */}
            {/* ニュースボタン */}
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* ///////////////////ニュースボタン/////////////////// */}
            {/* 採用情報 */}
            <Button
              href="/posts/first-post"
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              採用情報
            </Button>
            {/* ///////////////////採用情報ボタン/////////////////// */}
            {/* お問い合わせ */}
            <Button
              variant="contained"
              color="primary"
              className="header-btn"
              href="/posts/first-post"
            >
              お問い合わせ
            </Button>
            {/* ///////////////////お問い合わせボタン/////////////////// */}
          </ul>
        </div>
      </section>
    </>
  );
}
