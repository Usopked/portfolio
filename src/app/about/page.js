import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/3d-artist-logo.svg" // 3D 아티스트 로고로 변경
          alt="3D Background Modeling Artist"
          width={180}
          height={180}
          priority
        />
        <h1 className={styles.title}>프리랜서 3D 배경 모델링 아티스트</h1>
        
        <div className={styles.description}>
          <p>게임, 영상, 광고를 위한 고퀄리티 3D 배경 모델링을 제공합니다.</p>
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <Image src="/quality-icon.svg" alt="Quality" width={24} height={24} />
              <span>합리적인 가격의 우수한 퀄리티</span>
            </div>
            <div className={styles.highlightItem}>
              <Image src="/fast-icon.svg" alt="Fast" width={24} height={24} />
              <span>빠른 작업 완성 보장</span>
            </div>
            <div className={styles.highlightItem}>
              <Image src="/revision-icon.svg" alt="Revision" width={24} height={24} />
              <span>무료 수정 1회 제공</span>
            </div>
          </div>
        </div>

        <div className={styles.portfolio}>
          <h2>포트폴리오</h2>
          <div className={styles.portfolioGrid}>
            {/* 포트폴리오 이미지 샘플 */}
            <Image src="/portfolio1.jpg" alt="Portfolio 1" width={300} height={200} />
            <Image src="/portfolio2.jpg" alt="Portfolio 2" width={300} height={200} />
            <Image src="/portfolio3.jpg" alt="Portfolio 3" width={300} height={200} />
          </div>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="mailto:contact@3dartist.com"
          >
            <Image
              src="/email-icon.svg"
              alt="Email icon"
              width={20}
              height={20}
            />
            견적 문의하기
          </a>
          <a
            href="/portfolio/"
            className={styles.secondary}
          >
            <Image
              src="/portfolio-icon.svg"
              alt="Portfolio icon"
              width={20}
              height={20}
            />
            전체 포트폴리오 보기
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="/services/"
        >
          <Image
            aria-hidden
            src="/service-icon.svg"
            alt="Service icon"
            width={16}
            height={16}
          />
          제공 서비스
        </a>
        <a
          href="/pricing/"
        >
          <Image
            aria-hidden
            src="/price-icon.svg"
            alt="Price icon"
            width={16}
            height={16}
          />
          가격 정책
        </a>
        <a
          href="/about/"
        >
          <Image
            aria-hidden
            src="/info-icon.svg"
            alt="Info icon"
            width={16}
            height={16}
          />
          About Me
        </a>
      </footer>
    </div>
  );
}