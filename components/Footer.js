import React from 'react';
import Button from '@mui/material/Button';
export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-contact">
          <Button className="footer-contact-left">
            <p className="footer-contact-lead">contact</p>
            <h1 className="footer-contact-title">お問い合わせ</h1>
          </Button>
          <Button className="footer-contact-right">
            <p className="footer-contact-lead">recruit</p>
            <h1 className="footer-contact-title">採用情報</h1>
          </Button>
        </div>
        <div className="footer-container">
          <div className="footer-mask">
            <img className="footer-image" src="../image/open-footer.png" />
            <div className="footer-item">
              <h1 className="footer-lead">サービス</h1>
              <Button className="footer-detail" color="primary" href="">
                -shopify支援
              </Button>
              <Button className="footer-detail" href="">
                -L-store
              </Button>
              <Button className="footer-detail" href="">
                -webサービス開発/構築構築
              </Button>
            </div>
            <div className="footer-item">
              <h1 className="footer-lead">サービス</h1>
              <Button className="footer-detail" href="">
                -shopify支援
              </Button>
              <Button className="footer-detail" href="">
                -L-store
              </Button>
              <Button className="footer-detail" href="">
                -webサービス開発/構築構築
              </Button>
            </div>
            <div className="footer-item">
              <h1 className="footer-lead">サービス</h1>
              <Button className="footer-detail" href="">
                -shopify支援
              </Button>
              <Button className="footer-detail" href="">
                -L-store
              </Button>
              <Button className="footer-detail" href="">
                -webサービス開発/構築構築
              </Button>
            </div>
            <div className="footer-item">
              <h1 className="footer-lead">サービス</h1>
              <Button className="footer-detail" href="">
                -shopify支援
              </Button>
              <Button className="footer-detail" href="">
                -L-store
              </Button>
              <Button className="footer-detail" href="">
                -webサービス開発/構築構築
              </Button>
            </div>
          </div>
          <div className="footer-terms">
            <Button className="footer-policy" href="">
              サイトポリシー
            </Button>
            <Button className="footer-policy" href="">
              利用規約
            </Button>
          </div>
          <p className="footer-inc">©2020 OPEN STORE.inc</p>
        </div>
      </section>
    </>
  );
}
