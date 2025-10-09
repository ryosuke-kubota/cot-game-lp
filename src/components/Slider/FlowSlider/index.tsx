import Image from 'next/image';

// オプションをインポートする
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

// mediaListから取得したロゴ画像
const images = [
  'https://cot.curecos.com/images/featuredIn/MEXC.png',
  'https://cot.curecos.com/images/featuredIn/Chymia-logo3.png',
  'https://cot.curecos.com/images/featuredIn/zai1.png',
  'https://cot.curecos.com/images/featuredIn/BTSE_B.png',
  'https://cot.curecos.com/images/featuredIn/bittrade.jpg',
  'https://cot.curecos.com/images/featuredIn/UNISWAP-Logo.png',
  'https://cot.curecos.com/images/featuredIn/QuickSwap_logo.png',
  'https://cot.curecos.com/images/featuredIn/polygon-logo.png',
  'https://cot.curecos.com/images/featuredIn/media_coingecko.png',
  'https://cot.curecos.com/images/featuredIn/media_etherscan.png',
  'https://cot.curecos.com/images/featuredIn/media_23.png',
  'https://cot.curecos.com/images/featuredIn/media_26.png',
  'https://cot.curecos.com/images/featuredIn/media_27.png',
  'https://cot.curecos.com/images/featuredIn/media_21.png',
];

const images2 = [
  'https://cot.curecos.com/images/featuredIn/media_22.png',
  'https://cot.curecos.com/images/featuredIn/media_28.png',
  'https://cot.curecos.com/images/featuredIn/media_29.png',
  'https://cot.curecos.com/images/featuredIn/media_30.png',
  'https://cot.curecos.com/images/featuredIn/media_31.png',
  'https://cot.curecos.com/images/featuredIn/media_32.png',
  'https://cot.curecos.com/images/featuredIn/media_33.png',
  'https://cot.curecos.com/images/featuredIn/media_34.png',
  'https://cot.curecos.com/images/featuredIn/media_35.png',
  'https://cot.curecos.com/images/featuredIn/media_36.png',
  'https://cot.curecos.com/images/featuredIn/ICObenchLogo.jpg',
  'https://cot.curecos.com/images/featuredIn/bitcoinexchangeguideLogo.jpg',
  'https://cot.curecos.com/images/featuredIn/turingum.png',
];

export default function FlowSlider() {
  return (
    <div className="flow-slider">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: images.length / 3,
          },
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
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: images2.length / 3,
          },
        }}
        grabCursor={true}
        className={'swiper h-fit'}
      >
        {images2.map((src: string, index: number) => (
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
