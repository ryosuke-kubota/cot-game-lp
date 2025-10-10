'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="inner text-center py-20 px-12">
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
            Roadmap
          </RighteousText>
        </motion.div>
        <motion.p
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </motion.p>
        <div className="w-[80%] m-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 1, x: '-100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2, delay: 0.3 }}
            >
              <Image
                className="roadmap-img"
                src={'/assets/images/roadmap.png'}
                width={'369'}
                height={'1422'}
                alt={'Roadmap'}
              ></Image>
            </motion.div>
          </motion.div>
        </div>
        <div className="roadmap-list flex gap-20">
          <motion.div
            className="roadmap-item roadmap-item-1 w-1/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                1
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">初期構築段階</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>
                    Cosplay Tokenコミュニティがソーシャルクリエーションを開始
                  </span>
                </li>
                <li>
                  <span>ゲーミングギルドとの提携</span>
                </li>
                <li>
                  <span>GameFi/P2Eとの提携</span>
                </li>
                <li>
                  <span>アクシーオリジン - 世界初のギルド大会に協賛</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="roadmap-item roadmap-item-2 w-1/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                2
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">発売開始時期</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>NFTの公式発表</span>
                </li>
                <li>
                  <span>ホワイトペーパーを公開</span>
                </li>
                <li>
                  <span>東京ゲームショウ2022に出典</span>
                </li>
                <li>
                  <span>日本初のAxieプロゲームチームを創設/世界1位を獲得</span>
                </li>
                <li>
                  <span>オフィシャルサイト公開</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="roadmap-item roadmap-item-3 w-1/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                3
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">R&D開発フェーズ</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>NFTユーティリティを実装</span>
                </li>
                <li>
                  <span>OHARAINFT</span>
                </li>
                <li>
                  <span>ユーザーミッションページ公開(QBクエスト)</span>
                </li>
                <li>
                  <span>$QB/GQB ローンチ</span>
                </li>
                <li>
                  <span>IGO/INO QBローンチパッド</span>
                </li>
                <li>
                  <span>SocialFiの製品開発</span>
                </li>
                <li>
                  <span>ノードリワードシステム</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="roadmap-item roadmap-item-4 w-1/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                4
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">
                  アドバンスドビルドフェーズ
                </div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>FT/NFTを活用したQBオリジナル</span>
                </li>
                <li>
                  <span>web3ゲームのローンチ</span>
                </li>
                <li>
                  <span>DAO/オンチェーンガバナンス</span>
                </li>
                <li>
                  <span>マルチチェーン対応</span>
                </li>
                <li>
                  <span>Cosplay Token NFTFi</span>
                </li>
                <li>
                  <span>Cosplay Token Ventures</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
