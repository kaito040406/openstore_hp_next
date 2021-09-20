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
      <section className="company">
        <div className="company-left">
          <h1 className="company-heading">COMPANY</h1>
          {/* <p className="company-heading-sub">会社情報</p> */}
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
      </section>
      {/* serviceのコード */}
      <section className="service">
        <div className="service-container">
          <h1 className="service-heading">SERVICE</h1>
          <div className="service-mask">
            <div className="service-card">
              <img className="service-image" src="../image/shopify.png" />
              <h1 className="service-lead">Shopify構築</h1>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもで調べ物が完結します。
              </p>
            </div>
            <div className="service-card">
              <img className="service-image" src="../image/line.png" />
              <h1 className="service-lead">L-Store</h1>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもで調べ物が完結します。
              </p>
            </div>
            <div className="service-card">
              <img className="service-image" src="../image/internet.png" />
              <h1 className="service-lead">WEBサービス構築/開発</h1>
              <p className="service-detail">
                多くのWeb・デジタルマーケティング施策を実施してきたノウハウをもとにした、デジタルマーケティングの現場で本当に役立つ知識をスライド形式で提供。いろんな本やWebサイトをまたがなくてもで調べ物が完結します。
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* shopifyのコード */}
      <section className="shopify">
        <h1 className="shopify-heading">Shopify Experts</h1>
        <div className="shopify-mask">
          <div className="shopify-left">
            {/* <p className="shopify-heading-sub">ショピファイ エキスパート</p> */}
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
            <Button className="shopify-btn">view more→</Button>
          </div>
          <img
            className="shopify-right shopify-image"
            src="../image/shopify-image.jpeg"
          />
        </div>
      </section>
      {/* newsのコード */}
      <section className="news">
        <div className="news-container">
          <h1 className="news-heading">NEWS</h1>
          {/* <p className="news-heading-sub">ニュース</p> */}
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
                {/* <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
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
                {/* <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
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
                {/* <Typography
                  className="news-text"
                  variant="body2"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
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
      </section>
      {/* strategyのコード */}
      <section className="strategy">
        <div className="strategy-left">
          <h1 className="strategy-heading">STRATEGY</h1>
          {/* <p className="strategy-heading-sub">ストラテジー</p> */}
          <h1 className="strategy-text">
            様々なビジネス課題をWEBサイトで解決してきた私たちがWEBサイトの活用方法をご提案します。
          </h1>
          <div className="strategy-item">
            <img className="strategy-thumb" src="../image/strategy1.png" />
            <div className="strategy-mask">
              <h1 className="strategy-lead">
                課題解決に向けた、きめ細かなご提案
              </h1>
              <p className="strategy-detail">
                Webサイトの持つべき目標や役割は様々です。私たちはクライアントとの綿密な打ち合わせにより、達成すべきゴールを明確にし、最適な導線を設計し、こだわった構築を実現します。
              </p>
            </div>
          </div>
          <div className="strategy-item">
            <img className="strategy-thumb" src="../image/strategy2.png" />
            <div className="strategy-mask">
              <h1 className="strategy-lead">WEBサービス開発、構築</h1>
              <p className="strategy-detail">
                企画・デザイン・開発をワンストップで圧倒的な高品質でご提供。
                クラウドサービスの提供・ITインフラの構築・運用までご相談ください。
              </p>
            </div>
          </div>
          <div className="strategy-item">
            <img className="strategy-thumb" src="../image/strategy3.png" />
            <div className="strategy-mask">
              <h1 className="strategy-lead">Webマーケティング</h1>
              <p className="strategy-detail">
                「どうしたらサイトへのアクセスを増やせるのか」「どうしたらもっと自社サイトからの採用や売上を増やせるのか」など、解析・運用方法を相談しながら、お客様が抱える課題に応じて解決策を考え、お客様と共に歩んでいくことが私たちの使命です。
              </p>
            </div>
          </div>
        </div>
        <img className="strategy-right" src="../image/main-image.png" />
      </section>
    </>
  );
}
