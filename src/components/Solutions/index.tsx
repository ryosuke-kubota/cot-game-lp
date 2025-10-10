'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = Array(10).fill(null);

  return (
    <section id="solutions">
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB SOLUTIONS
        </RighteousText>
        <p className="mb-12">
          「KISARAGI」は、NFTゲームに特化したソーシャルWeb3プラットフォームであり、
          <br />
          NFTゲームプレイヤーのコミュニティであるCosplay TokenがリリースするBFTです。
        </p>
        <div className="flex flex-wrap flex-row items-center justify-center gap-2 gap-y-12">
          {solutions.map((_, index) => (
            <motion.div
              key={index}
              className="solution w-1/6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.125 }}
            >
              <Image
                className="kisaragi-img"
                src={'/assets/images/solution.png'}
                width={'100'}
                height={'100'}
                alt={'KISARAGI'}
              ></Image>
              <h3 className="mb-4">QBGoldRush</h3>
              <p className="text-sm">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
              </p>
            </motion.div>
          ))}
        </div>

        <BorderButton link="#" className="x-btn py-1">
          View All
        </BorderButton>
      </div>
    </section>
  );
}
