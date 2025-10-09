import Image from 'next/image';

// オプションをインポートする
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

// コスプレイヤーデータ
const cosplayers = [
  {
    id: 1,
    name: 'Aika Lee',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/11ee6082-1be3-4351-a7d8-e9da2fc0a74a.blob',
  },
  {
    id: 2,
    name: 'Hwanna Móri',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/d95eef95-d181-4b21-9da5-b7f8a0f976b2.blob',
  },
  {
    id: 3,
    name: 'Brix Akken',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/7a11b06e-4210-404e-978f-0f1a56b033ca.blob',
  },
  {
    id: 4,
    name: 'Essir',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/6fc24131-84ec-4e44-b7de-3c6fdb312c50.blob',
  },
  {
    id: 5,
    name: 'chosen',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/0289e21d-a2b2-4578-8391-f919b65628a4.blob',
  },
  {
    id: 6,
    name: 'Reborn sinclair',
    image:
      'https://prod-cot-game.s3.ap-northeast-1.amazonaws.com/b50a8350-bae7-4f48-b6b5-f77dcfb8d884.blob',
  },
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
        {cosplayers.map((cosplayer) => (
          <SwiperSlide tag={'a'} key={cosplayer.id} className="swiper-slide">
            <article className="slide">
              <div>
                <Image
                  src={cosplayer.image}
                  width={1920}
                  height={1440}
                  alt={cosplayer.name}
                />

                <div className="p-5 bg-black">
                  <h5 className="mb-2 font-bold tracking-tight text-white">
                    {cosplayer.name}
                  </h5>
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
