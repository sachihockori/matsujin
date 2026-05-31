import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>松甚 <small>matsujin</small></h1>
          <p className={styles.description}>
            since 1917
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          //src="/fv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      
{/*
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
 */}

      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <h3 className={styles.topH3}>Jina</h3>
            <p className={styles.sectionDescription}>
              1917年創業、フェルト・リボン・毛氈の卸小売を行っています。<br></br>
              日本製の上質な素材にこだわり、当店だけの特別なお色味やサイズで、みなさまのものづくりをお手伝いしています。「フェルトでこんなことがしたい！」というご相談も大歓迎です。どうぞお気軽にお問い合わせください。
            </p>

            <h3 className={styles.topH3}>MNET Lab inc.</h3>
            <p className={styles.sectionDescription}>
              パンフレットなどのグラフィックデザイン制作から、コーポレートサイトや最先端のWebシステム構築まで幅広くお任せいただけます。デザイン性と機能性を高次元で両立させ、お客様のビジネス課題を解決する最適なデジタルソリューションをご提供します。
            </p>
{/* 
            <ButtonLink href="/business">もっとみる</ButtonLink>
 */}
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>

      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>

{/* 
              <p className={styles.sectionDescription}>
                「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
              </p>
 */}
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>社名</dt>
                <dd className={styles.infoDescription}>株式会社松甚</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>設立</dt>
                <dd className={styles.infoDescription}>1917年</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>本社所在地</dt>
                <dd className={styles.infoDescription}>
                  〒540-0017
                  <br />
                  大阪市中央区松屋町住吉５番８号
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>支社所在地</dt>
                <dd className={styles.infoDescription}>
                  〒520-0044
                  <br />
                  滋賀県大津市京町３丁目３番24号
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表取締役</dt>
                <dd className={styles.infoDescription}>松本 侑一郎</dd>
              </dl>


{/* 
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>資本金</dt>
                <dd className={styles.infoDescription}>1,000万円</dd>
              </dl>
 */}


             <div className={styles.ctbtn}><ButtonLink href="/contact" >お問い合わせはこちら</ButtonLink></div>
             
            </div>

          </div>
        </section>
      </div>

{/* 
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>

 */}

     

    </>
  );
}
