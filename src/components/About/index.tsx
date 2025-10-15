'use client';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';

export default function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section
      id="about"
      style={{
        backgroundImage: `url('${basePath}/assets/images/bg/about-bg.png')`,
      }}
    >
      <div className="inner text-center flex flex-col items-center justify-center py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            ABOUT COT GAME
          </RighteousText>
        </motion.div>

        <motion.div
          className="video-container w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://drive.google.com/file/d/1lo8T5YRulyt9oVieUiesFm3E2ySJYWXG/preview"
              allow="autoplay"
              title="COT Game Video"
            />
            {/* Google Driveへのリンクをブロックするオーバーレイ（右上のロゴ部分のみ） */}
            <div
              className="absolute top-0 right-0 w-32 h-16 z-10"
              style={{ pointerEvents: 'auto' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
