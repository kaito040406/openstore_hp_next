import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import HeaderService from './HeaderNav/HeaderService';
import HeaderCompany from './HeaderNav/HeaderCompany';
import HeaderNews from './HeaderNav/HeaderNews';
import { withStyles } from '@material-ui/styles';

const MyButton = withStyles({
  root: {
    marginRight: 10,
    disPlay: 'none',
  },
  // variant="text"のみ適応
  text: {
    color: '#03a9f4',
  },
  // variant="outlined"のみ適応
  outlined: {
    border: '1px solid #e65100',
    '&:hover': {
      background: '#ffe0b2',
    },
  },
  // variant="contained"のみ適応
  contained: {
    color: 'white',
    background: '#43a047',
    '&:hover': {
      background: '#2e7031',
    },
  },
})(Button);

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header-nav">
          <ul className="header-nav-list">
            <Link href="/">
              <img className="header-logo" src="./image/openstore-logo.png" />
            </Link>
            {/* /////////////////// ホームボタン /////////////////// */}
            <MyButton href="/" aria-controls="company-menu" aria-haspopup="true">
              ホーム
            </MyButton>
            {/* /////////////////// ホームボタン (ここまで) /////////////////// */}

            {/* /////////////////// サービスボタン /////////////////// */}
            <HeaderService />
            {/* /////////////////// サービスボタン (ここまで) /////////////////// */}

            {/* /////////////////// 会社情報ボタン /////////////////// */}
            <HeaderCompany />
            {/* /////////////////// 会社情報ボタン (ここまで) /////////////////// */}

            {/* /////////////////// ニュースボタン /////////////////// */}
            <HeaderNews />
            {/* /////////////////// ニュースボタン (ここまで) /////////////////// */}

            {/* /////////////////// 採用情報ボタン /////////////////// */}
            <Button
              href="/posts/ricrut"
              aria-controls="company-menu"
              aria-haspopup="true"
            >
              採用情報
            </Button>
            {/* /////////////////// 採用情報ボタン (ここまで) /////////////////// */}

            {/* /////////////////// 無料相談ボタン /////////////////// */}
            <Button
              href="/posts/free"
              aria-controls="company-menu"
              aria-haspopup="true"
            >
              無料相談
            </Button>
            {/* /////////////////// 採用情報ボタン (ここまで) /////////////////// */}

            {/* /////////////////// お問い合わせボタン /////////////////// */}
            <Button
              href="/posts/contact"
              variant="contained"
              color="primary"
              className="header-btn"
              variant="outlined"
            >
              お問い合わせ
            </Button>
            {/* /////////////////// お問い合わせボタン (ここまで) /////////////////// */}
          </ul>
        </div>
      </section>
    </>
  );
}
