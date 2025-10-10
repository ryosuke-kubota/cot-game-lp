'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Kisaragi() {
  return (
    <section id="kisaragi">
      <div className="inner text-center">
        <div className="flex items-center">
          <div className="w-1/2 py-20 px-20">
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
                如月 -KISARAGI-
              </RighteousText>
            </motion.div>
            <motion.p
              className="mb-12 text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              「KISARAGI」は、NFTゲームに特化したソーシャルWeb3プラットフォームであり、NFTゲームプレイヤーのコミュニティであるCosplay TokenがリリースするBFTです。
            </motion.p>
          </div>
          <div className="w-1/2 kisaragi-bg">
            <motion.div
              className="image-container"
              initial={{ opacity: 1, x: '100%' }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ x: '-100%', scale: 1.3 }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  className="kisaragi-img"
                  src={'/assets/images/kisaragi.png'}
                  width={'100'}
                  height={'100'}
                  alt={'KISARAGI'}
                ></Image>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
