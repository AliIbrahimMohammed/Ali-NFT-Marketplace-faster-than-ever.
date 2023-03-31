import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          {/* <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div> */}
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Ali NFT Marketplace
                </span>
                <br />
                faster than ever.
              </h1>
              <p className={styles.heroSubtitle}>
                This is my Marketplace for the amazing, 
                strange and completely new NFT pieces,
                 either my pictures,my music or my videos .
                 I am <b>Ali Ibrahim Muhammad</b>, who built it and I work as a <b>Freelance Blockchain Developer.</b> 
                 See you on <b>my Linkedin</b> and you don't want to go to Market Place.
                 <Link
                  className={styles.link}
                  href="https://www.linkedin.com/in/ali-ibrahim-mohammed-a18389239/"
                  target="_blank"
                >
                  <b> My Linkedin</b>
                </Link>
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started Marketplace
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/AliIbrahimMohammed"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
