import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceEl, setServiceEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleClick = (event) => {
  //   setServiceEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setServiceEl(null);
  // };

  return (
    <>
      <section className="header">
        <div className="header-nav">
          <ul className="header-nav-list">
            <Link href="/">
              <img className="header-logo" src="./image/openstore-logo.png" />
            </Link>
            {/* ホーム */}
            <Button href="/" aria-controls="company-menu" aria-haspopup="true">
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
            {/* ///////////////////サービスボタン/////////////////// */}
            {/* 会社情報ボタン */}
            <Button
              aria-controls="company-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              会社情報
            </Button>
            <Menu
              id="company-menu"
              anchorEl={serviceEl}
              keepMounted
              open={Boolean(serviceEl)}
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
            {/* ///////////////////会社情報ボタン/////////////////// */}
            {/* ニュースボタン */}
            {/* <Button
              aria-controls="company-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              ニュース
            </Button>
            <Menu
              id="company-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Button onClick={handleClose}>Profile</Button>
              <Button onClick={handleClose}>My account</Button>
              <Button onClick={handleClose}>Logout</Button>
            </Menu> */}
            {/* ///////////////////ニュースボタン/////////////////// */}
            {/* 採用情報 */}
            <Button
              href="/posts/xxx"
              aria-controls="company-menu"
              aria-haspopup="true"
            >
              採用情報
            </Button>
            {/* ///////////////////採用情報ボタン/////////////////// */}
            {/* お問い合わせ */}
            <Button
              href="/posts/yyy"
              variant="contained"
              color="primary"
              className="header-btn"
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
