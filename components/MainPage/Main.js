import Button from '@material-ui/core/Button';

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

      </div>
    </>
  );
}
