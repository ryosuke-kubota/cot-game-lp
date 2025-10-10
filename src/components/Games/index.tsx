'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import ImageSlider from '../Slider/ImageSlider';
import { motion } from 'framer-motion';

export default function Games() {
  return (
    <section id="games">
      <div className="inner text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-5xl font-bold mb-12"
          >
            QB GAMES
          </RighteousText>
        </motion.div>
        <motion.p
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </motion.p>
        <div className="game-list flex items-center justify-center gap-5 gap-y-12 mb-16">
          <motion.div
            className="game w-1/4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </motion.div>
          <motion.div
            className="game w-1/4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3, delay: 0.425 }}
          >
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </motion.div>
          <motion.div
            className="game w-1/4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3, delay: 0.55 }}
          >
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </motion.div>
          <motion.div
            className="game w-1/4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3, delay: 0.675 }}
          >
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ImageSlider />
        </motion.div>
      </div>
    </section>
  );
}
