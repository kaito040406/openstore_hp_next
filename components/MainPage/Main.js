import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Main() {
  return (
    <>
      {/* companyのコード */}
      <div className="company">
        <div className="company-left">
          <h1 className="company-heading">Company</h1>
          <p className="company-heading-sub">会社情報</p>
          <h1 className="company-text">
            私たちはお客様との対話を通じて本質的な課題を汲み取り、販路拡大や集客方法におけるノウハウなどを一貫してサポートします。‍
          </h1>
          <p className="company-content">
            このコロナ禍ではオフライン(対面)縮小・オンライン拡大といった新しい生活様式への変化が進んでいます。そしてこの流れはビジネスにおいても例外ではなく、DXやデジタルシフトを進め、販路拡大を行うことが大きな伴になっています。私たちは、お客さまにとって必要不可欠なパートーナーとして末長く寄り添ってお付き合いすることができる技術と情熱を持った担当者が揃っているという自負があります。
          </p>
          <Button className="company-btn" variant="contained" color="primary">
            会社情報を見る
          </Button>
        </div>
        <img
          className="company-right company-image"
          src="../image/main-image.png"
        />
      </div>
      {/* serviceのコード */}
      <div className="service">
        <div className="service-container">
          <h1 className="service-heading">Service</h1>
          <p className="service-heading-sub">サービス</p>
          <div className="service-item">
            <div className="service-text">
              <div className="service-catch">
                <span className="service-catch-left">SERVICE</span>
                <span className="service-catch-right">01</span>
              </div>
              <h1 className="service-name">サービスタイトル</h1>
              <p className="service-lead">
                Web・デジタル担当者にとって現場で本当に役立つ知識を集約
              </p>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもSURGE内で調べ物が完結します。
              </p>
            </div>
            <img className="service-image" src="../image/main-image.png" />
          </div>
          <div className="service-item">
            <div className="service-text">
              {/* <div className="service-catch"> */}
              <span className="service-catch-left">SERVICE</span>
              <span className="service-catch-right">02</span>
              {/* </div> */}
              <h1 className="service-name">サービスタイトル</h1>
              <p className="service-lead">
                Web・デジタル担当者にとって現場で本当に役立つ知識を集約
              </p>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもSURGE内で調べ物が完結します。
              </p>
            </div>
            <img className="service-image" src="../image/main-image.png" />
          </div>
          <div className="service-item">
            <div className="service-text">
              <div className="service-catch">
                <span className="service-catch-left">SERVICE</span>
                <span className="service-catch-right">03</span>
              </div>
              <h1 className="service-name">サービスタイトル</h1>
              <p className="service-lead">
                Web・デジタル担当者にとって現場で本当に役立つ知識を集約
              </p>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもSURGE内で調べ物が完結します。
              </p>
            </div>
            <img className="service-image" src="../image/main-image.png" />
          </div>
        </div>
      </div>
      {/* shopifyのコード */}
      <div className="shopify">
        <div className="shopify-left">
          <h1 className="shopify-heading">Shopify Experts</h1>
          <p className="shopify-heading-sub">ショピファイ エキスパート</p>
          <h1 className="shopify-text">
            オープンストア株式会社は国内では未だ少ないShopify
            Expertsの公認メンバーです。
          </h1>
          <p className="shopify-content">
            世界ではシェアNo1を誇り、世界175ヶ国で利用されているECサイト作成サービス。
            開設ショップ数100万以上を誇り（2021年5月現在）、日本国内でも急速にその存在感を増してきています。
            オープンストア株式会社ではShopifyを活用したECサイトの制作だけではなく、サイト分析、サイト改善、SEO対策、SNS対策、販促提案など
            ECサイトの運用のノウハウをクライアント様に提供しています。
          </p>
          <Button className="shopify-btn" variant="contained" color="primary">
            お問い合わせ
          </Button>
        </div>
        <img
          className="shopify-right shopify-image"
          src="../image/open-shopify.png"
        />
      </div>
      {/* newsのコード */}
      <div className="news">
        <div className="news-container">
          <h1 className="news-heading">News</h1>
          <p className="news-heading-sub">ニュース</p>
          <div className="news-item">
            {/* 投稿一つ目 */}
            <Card className="news-card">
              <CardMedia
                className="news-image"
                component="img"
                src="../image/open-news.jpg"
                alt="open openstore store web"
              />
              <CardContent>
                <Typography className="news-title" gutterBottom component="div">
                  Lizard
                </Typography>
                <Typography className="news-time" gutterBottom component="div">
                  2001/12/16 14:47
                </Typography>
                <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="news-btn"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  記事を読む
                </Button>
              </CardActions>
            </Card>
            {/* 投稿一つ目 */}
            <Card className="news-card">
              <CardMedia
                className="news-image"
                component="img"
                src="../image/open-news.jpg"
                alt="open openstore store web"
              />
              <CardContent>
                <Typography className="news-title" gutterBottom component="div">
                  Lizard
                </Typography>
                <Typography className="news-time" gutterBottom component="div">
                  2001/12/16 14:47
                </Typography>
                <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="news-btn"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  記事を読む
                </Button>
              </CardActions>
            </Card>
            {/* 投稿一つ目 */}
            <Card className="news-card">
              <CardMedia
                className="news-image"
                component="img"
                src="../image/open-news.jpg"
                alt="open openstore store web"
              />
              <CardContent>
                <Typography className="news-title" gutterBottom component="div">
                  Lizard
                </Typography>
                <Typography className="news-time" gutterBottom component="div">
                  2001/12/16 14:47
                </Typography>
                <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="news-btn"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  記事を読む
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      {/* Strategyのコード */}
      <div className="Strategy">
        <div className="Strategy-left">
          <h1 className="Strategy-heading">Strategy</h1>
          <p className="Strategy-heading-sub">ストラテジー</p>
          <h1 className="Strategy-text">
            オープンストア株式会社は国内では未だ少ないShopify
            Expertsの公認メンバーです。
          </h1>
          <p className="Strategy-content">
            世界ではシェアNo1を誇り、世界175ヶ国で利用されているECサイト作成サービス。
            開設ショップ数100万以上を誇り（2021年5月現在）、日本国内でも急速にその存在感を増してきています。
            オープンストア株式会社ではShopifyを活用したECサイトの制作だけではなく、サイト分析、サイト改善、SEO対策、SNS対策、販促提案など
            ECサイトの運用のノウハウをクライアント様に提供しています。
          </p>
          <Button className="Strategy-btn" variant="contained" color="primary">
            お問い合わせ
          </Button>
        </div>
        <img
          className="Strategy-right Strategy-image"
          src="../image/open-shopify.png"
        />
      </div>
    </>
  );
}
