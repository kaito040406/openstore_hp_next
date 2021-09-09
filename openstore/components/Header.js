import Link from 'next/link';

export default function Header() {
  return (
    <>
      <section header>
        <div className="header-nav">
          <ul className="header-nav-list">
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
            <Link
              href="/posts/first-post"
              className="header-nav-item font-hover"
            >
              CONTACT
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}
