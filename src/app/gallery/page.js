import Image from "next/image";
import styles from "./gallery.module.css";

const galleryItems = [
  {
    id: 1,
    title: "고정틀A - 낮버전",
    description: "가장 캐주얼한 기본틀",
    imageUrl: "/image/back1.png",
  },
  {
    id: 2,
    title: "고정틀A - 밤버전",
    description: "가장 캐주얼한 기본틀",
    imageUrl: "/image/back1_night.png",
  },
  {
    id: 3,
    title: "고정틀B - 낮버전",
    description: "가장 캐주얼한 기본틀",
    imageUrl: "/image/back2.png",
  },
  {
    id: 4,
    title: "고정틀B - 밤버전",
    description: "가장 캐주얼한 기본틀",
    imageUrl: "/image/back2_night.png",
  },
  {
    id: 5,
    title: "자연 풍경",
    description: "실사급 자연 환경 모델링",
    imageUrl: "/gallery/nature-1.jpg",
  },
  {
    id: 6,
    title: "실험적 컨셉",
    description: "추상적인 아트 디렉션 작업",
    imageUrl: "/gallery/abstract-1.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>3D 작업 갤러리</h1>
      <p className={styles.gallerySubtitle}>클릭하면 상세 정보를 확인할 수 있습니다</p>
      
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className={styles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.imageOverlay}>
                <h3>{item.title}</h3>
              </div>
            </div>
            <div className={styles.itemInfo}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}