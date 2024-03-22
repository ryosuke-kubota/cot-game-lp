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

export default function SquereSlider() {
  return (
    <div className="squere-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // ハイドレーションエラー対策
        spaceBetween={0}
        loop={true} // スライドをループさせる
        speed={1000} // スライドが切り替わる時の速度
        centeredSlides={true}
        loopAdditionalSlides={1}
        watchSlidesProgress={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
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
              <div>
                <Image
                  src={src}
                  width={1920}
                  height={1440}
                  alt="Slider Image"
                  // objectFit={'cover'}
                  // sizes="(min-width: 1024px) 100vw, 60vw"
                  // className={styles.slideImage}
                />

                <div className="p-5 bg-black">
                  <h5 className="mb-2 font-bold tracking-tight text-white">
                    🎉1500ドルの #Giveaway キャンペーン🎉
                  </h5>
                  <p className="mb-3 font-normal text-white">
                    QuestNを活用して、GuildQBからGWへのプレゼント!!
                  </p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}
