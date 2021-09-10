import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import HeaderService from './HeaderNav/HeaderService';
import HeaderCompany from './HeaderNav/HeaderCompany';
import HeaderNews from './HeaderNav/HeaderNews';

// material uiのcss変更コード その１

// });
// 使用方法
// 1:const Button = withStyles({  ~~~~~~ここ~~~~~~  })(Button); にコードを書く。
// 2:適用したいところにvariant="~~~~"をつける。

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
            <Button href="/" aria-controls="company-menu" aria-haspopup="true">
              ホーム
            </Button>
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
              href="#"
              variant="contained"
              color="primary"
              className="header-btn"
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
