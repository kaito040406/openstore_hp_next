import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header-nav">
          <ul className="header-nav-list">
            <Link href="/posts/first-post">
              <img className="header-logo" src="./image/openstore-logo.png" />
            </Link>
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              ホーム
            </Link>
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              サービス
            </Link>
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              MENU
            </Link>
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              EVENT
            </Link>
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              ACCESE
            </Link>
            <Link href="/posts/first-post">
              <Button
                variant="contained"
                color="primary"
                className="header-btn"
              >
                お問い合わせ
              </Button>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}
