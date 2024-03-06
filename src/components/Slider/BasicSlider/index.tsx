import Image from 'next/image';

// オプションをインポートする
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

// publicフォルダの画像
const images = [
  '/assets/images/slider-img_normal.jpg',
  '/assets/images/slider-img_normal.jpg',
  '/assets/images/slider-img_normal.jpg',
  '/assets/images/slider-img_normal.jpg',
];

export default function BasicSlider() {
  return (
    <section id="topics" className="l-section mb-20">
      <div className="l-inner">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1} // ハイドレーションエラー対策
          spaceBetween={16}
          loop={true} // スライドをループさせる
          speed={1000} // スライドが切り替わる時の速度
          loopAdditionalSlides={1}
          watchSlidesProgress={true}
          pagination={{
            el: '.swiper-pagination',
          }} // ページネーション, クリックで対象のスライドに切り替わる
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className={'swiper h-fit'}
        >
          {images.map((src: string, index: number) => (
            <SwiperSlide tag={'a'} key={index} className="swiper-slide">
              <article className="slide">
                <div className="slide-media img-cover">
                  <Image
                    src={src}
                    // width={1920}
                    layout={'fill'}
                    alt="Slider Image"
                    objectFit={'contain'}
                    // sizes="(min-width: 1024px) 100vw, 60vw"
                    // className={styles.slideImage}
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
