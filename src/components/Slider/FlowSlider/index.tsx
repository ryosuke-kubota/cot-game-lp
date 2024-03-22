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
  '/assets/images/partners-img01_logo.png',
  '/assets/images/partners-img02_logo.png',
  '/assets/images/partners-img03_logo.png',
  '/assets/images/partners-img04_logo.png',
  '/assets/images/partners-img05_logo.png',
  '/assets/images/partners-img06_logo.png',
  '/assets/images/partners-img07_logo.png',
];

export default function FlowSlider() {
  return (
    <div className="flow-slider">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={images.length / 2}
        loop={true}
        spaceBetween={20}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className={'swiper h-fit mb-10'}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide tag={'a'} key={index} className="swiper-slide">
            <article className="slide">
              <Image
                src={src}
                width={1920}
                height={1440}
                alt="Slider Image"
                // objectFit={'cover'}
                // sizes="(min-width: 1024px) 100vw, 60vw"
                // className={styles.slideImage}
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={images.length / 2}
        loop={true}
        spaceBetween={20}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        grabCursor={true}
        className={'swiper h-fit'}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide tag={'a'} key={index} className="swiper-slide">
            <article className="slide">
              <Image src={src} width={1920} height={1440} alt="Slider Image" />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
