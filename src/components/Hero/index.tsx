import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import RighteousText from '../Headings/RighteousText';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    // コンポーネントがマウントされたらアニメーションを開始
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className={`flex flex-col md:flex-row justify-center items-center py-20 ${
        isVisible ? 'hero-visible' : ''
      }`}
      style={{
        backgroundImage: `url('${basePath}/assets/images/bg/hero-bg.png')`,
      }}
    >
      {/* タイトル - 常に最上部 */}
      <div className="left px-4 md:px-24 w-full md:w-1/2 text-center md:text-left order-1 md:order-1">
        <RighteousText
          tag="h1"
          className={`text-4xl md:text-6xl font-bold mb-6 hero-title ${
            isVisible ? 'fade-in' : ''
          }`}
        >
          <span>Cosplay</span> Battles
        </RighteousText>

        {/* PCではボタンをここに表示 */}
        <div
          className={`hidden md:flex md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 hero-buttons ${
            isVisible ? 'slide-in-left' : ''
          }`}
        >
          <GradButton link="#">Cosplay GAME</GradButton>
          <BorderButton link="#">Whitepaper</BorderButton>
        </div>
      </div>

      {/* 画像 - スマホでは2番目、PCでは右側 */}
      <div className="right w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-2 max-w-[70%] md:max-w-full">
        <div className={`hero-image ${isVisible ? 'slide-in-right' : ''}`}>
          <Image
            src={`${basePath}/assets/images/banner.png`}
            className="w-full"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* スマホではボタンを画像の下に表示 */}
      <div
        className={`w-full px-4 mt-8 md:hidden flex flex-col justify-center space-y-4 hero-buttons order-3 max-w-[70%] md:max-w-full ${
          isVisible ? 'slide-in-left' : ''
        }`}
      >
        <GradButton link="#">Cosplay GAME</GradButton>
        <BorderButton link="#">Whitepaper</BorderButton>
      </div>
    </section>
  );
}
