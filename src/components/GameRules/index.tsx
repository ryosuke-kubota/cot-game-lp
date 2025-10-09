import { useRef } from 'react';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// カードデータ
const cardData = [
  {
    name: 'Multiplier',
    scope: '1回の投票',
    effect: '1回限り、プレイヤーの投票数を20%増加',
    example:
      'ユーザーが100ポイントで投票した場合、合計値は120ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は4ポイントになります（0.2 × 4 < 1のため）。',
  },
  {
    name: 'Multiplier',
    scope: '1回の投票',
    effect: '1回限り、プレイヤーの投票数を50%増加',
    example:
      'ユーザーが100ポイントで投票した場合、合計値は150ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は6ポイントになります。',
  },
  {
    name: 'Multiplier',
    scope: '1回の投票',
    effect: '1回限り、プレイヤーの投票数を70%増加',
    example:
      'ユーザーが100ポイントで投票した場合、合計値は170ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は6ポイントになります。',
  },
  {
    name: 'Multiplier',
    scope: '1回の投票',
    effect: '1回限り、プレイヤーの投票数を100%増加',
    example:
      'ユーザーが100ポイントで投票した場合、合計値は200ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は8ポイントになります。',
  },
  {
    name: 'Lucky streak',
    scope: 'バトル全体',
    effect:
      'プレイヤーがラッキープレイヤーになる確率を30%増加（賞金プールには影響しません）',
    example:
      'カード追加前：\nUserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント\nA: 20 / 100 ≈ 20%\nB: 30 / 100 ≈ 30%\nC: 50 / 100 ≈ 50%\n\nカード追加後：\nUserAは30%のラックブースト: 20 × 1.3 = 26\nA: 26 / 106 ≈ 24.53%\nB: 30 / 106 ≈ 28.30%\nC: 50 / 106 ≈ 47.17%',
  },
  {
    name: 'Refund',
    scope: 'バトル全体',
    effect:
      'プレイヤーがラッキープレイヤーに選ばれなかった場合、投票ポイントの合計の20%を返金',
    example:
      'ユーザーの総投票数が500で、ラッキー抽選に当たらなかった場合、100ポイント返金されます。\nユーザーの総投票数が521で、ラッキー抽選に当たらなかった場合、104ポイント返金されます。\nユーザーの総投票数が4で、ラッキー抽選に当たらなかった場合、(0.2 × 4) < 1のため返金されません。',
  },
  {
    name: 'Thief',
    scope: '1回の投票',
    effect:
      'プレイヤーはこのカードを使用して、ベット額の10%を相手サイドの投票から奪うことができます',
    example:
      'ケース1:\nPlayerAの合計は1000ポイント、PlayerBの合計は2000ポイント。\nUserAが100ポイント + Thiefカードで投票、Thiefカード = 100 × 10% = 10ポイント。\nPlayerBの2000ポイント > 10ポイント、そのためThiefカードは10ポイントを奪います。\nUserAは110ポイントを受け取ります。\nPlayerAは現在1110ポイント、PlayerB (2000 - 10) = 1990ポイント。\n---\nケース2:\nPlayerAは1000ポイント、PlayerBは5ポイント。\nUserAが100ポイント + Thiefカードで投票、Thiefカード = 100 × 10% = 10ポイント。\nPlayerBの5ポイント < 10ポイント、そのためThiefカードは5ポイントを奪います。\nUserAは105ポイントを受け取ります。\nPlayerAは現在1105ポイント、PlayerB (5 - 5) = 0ポイント。',
  },
  {
    name: 'Magnifying glass',
    scope: 'バトル全体',
    effect: 'プレイヤーが両サイドの詳細情報を確認できるようになります',
    example: '-',
  },
  {
    name: 'Careless Gambler',
    scope: 'バトル全体',
    effect:
      'プレイヤーがラッキープレイヤーに当選した場合、配当が100%増加しますが、投票手数料も50%増加します。（配当はすべての手数料を差し引いた後に2倍になります）',
    example:
      'UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント\n\nケース1:\nUserAがカードを使用 (20 × 0.5) = 10ポイント\nUserA: 10ポイント、UserB: 30ポイント、UserC: 50ポイント\nUserAがラッキー抽選に当選した場合、受け取るポイントは (10 + 30 + 50) × 2 = 180ポイント\n\nケース2: 誰もカードを使用しない\nUserAがラッキー抽選に当選した場合、受け取るポイントは 20 + 30 + 50 = 100ポイント',
  },
];

export default function GameRules() {
  const rulesRef = useRef<HTMLDivElement>(null);
  const rulesTitleRef = useRef<HTMLDivElement>(null);
  const rulesListRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rulesRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      rulesTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    ).from(
      rulesListRef.current?.children,
      {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.2,
      },
      'same'
    );
  }, [rulesRef, rulesTitleRef, rulesListRef]);

  return (
    <section id="game-rules" ref={rulesRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-3xl md:text-5xl font-bold mb-12"
          ref={rulesTitleRef}
        >
          Game Rules
        </RighteousText>

        <div
          className="rules-content max-w-6xl mx-auto text-left"
          ref={rulesListRef}
        >
          {/* ガチャシステム */}
          <div className="rule-section mb-12 text-sm md:text-base">
            <div className="rule-card mb-6">
              <p className="text-gray-300 mb-4">
                プレイヤーはCOTポイントを使用してガチャを回し、追加ポイントやカードなどの様々な報酬を獲得できます。
              </p>
              <p className="text-gray-300 mb-4">
                毎日1回、ログインボーナスとして無料でガチャを回すことができます。
              </p>
              <p className="text-gray-300">
                サイドメニューから<strong>「Gacha」</strong>
                を選択してガチャ画面にアクセスできます。 ガチャは
                <strong>1回</strong>または<strong>10回</strong>
                まとめて回すことができます。
              </p>
            </div>
          </div>

          {/* カードの種類と効果 */}
          <div className="rule-section mb-12">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">
              ガチャ報酬
            </h3>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              カードには様々な効果があり、より多くの報酬を獲得し、有利に進めることができます。賢く使いましょう！
            </p>

            {/* テーブル形式のカード一覧 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs md:text-base">
                <thead>
                  <tr className="bg-purple-900/50">
                    <th className="border border-purple-500 p-4 text-left">
                      カード名
                    </th>
                    <th className="border border-purple-500 p-4 text-left whitespace-nowrap">
                      適用範囲
                    </th>
                    <th className="border border-purple-500 p-4 text-left min-w-[600px] md:min-w-none">
                      効果
                    </th>
                    <th className="border border-purple-500 p-4 text-left min-w-[600px] md:min-w-none">
                      例
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-base">
                  {/* Multiplier +20% */}
                  <tr className="text-xs md:text-base">
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      1回の投票
                    </td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を20%増加
                    </td>
                    <td className="border border-purple-500 p-4">
                      ユーザーが100ポイントで投票した場合、合計値は120ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は4ポイントになります（0.2
                      × 4 &lt; 1のため）。
                    </td>
                  </tr>

                  {/* Multiplier +50% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      1回の投票
                    </td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を50%増加
                    </td>
                    <td className="border border-purple-500 p-4">
                      ユーザーが100ポイントで投票した場合、合計値は150ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は6ポイントになります。
                    </td>
                  </tr>

                  {/* Multiplier +70% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      1回の投票
                    </td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を70%増加
                    </td>
                    <td className="border border-purple-500 p-4">
                      ユーザーが100ポイントで投票した場合、合計値は170ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は6ポイントになります。
                    </td>
                  </tr>

                  {/* Multiplier +100% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      1回の投票
                    </td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を100%増加
                    </td>
                    <td className="border border-purple-500 p-4">
                      ユーザーが100ポイントで投票した場合、合計値は200ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は8ポイントになります。
                    </td>
                  </tr>

                  {/* Lucky Streak */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Lucky streak</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      バトル全体
                    </td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーになる確率を30%増加（賞金プールには影響しません）
                    </td>
                    <td className="border border-purple-500 p-4">
                      カード追加前：
                      <br />
                      UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      A: 20 / 100 ≈ 20%
                      <br />
                      B: 30 / 100 ≈ 30%
                      <br />
                      C: 50 / 100 ≈ 50%
                      <br />
                      <br />
                      カード追加後：
                      <br />
                      UserAは30%のラックブースト: 20 × 1.3 = 26
                      <br />
                      A: 26 / 106 ≈ 24.53%
                      <br />
                      B: 30 / 106 ≈ 28.30%
                      <br />
                      C: 50 / 106 ≈ 47.17%
                    </td>
                  </tr>

                  {/* Refund */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Refund</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      バトル全体
                    </td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーに選ばれなかった場合、投票ポイントの合計の20%を返金
                    </td>
                    <td className="border border-purple-500 p-4">
                      ユーザーの総投票数が500で、ラッキー抽選に当たらなかった場合、100ポイント返金されます。
                      <br />
                      ユーザーの総投票数が521で、ラッキー抽選に当たらなかった場合、104ポイント返金されます。
                      <br />
                      ユーザーの総投票数が4で、ラッキー抽選に当たらなかった場合、(0.2
                      × 4) &lt; 1のため返金されません。
                    </td>
                  </tr>

                  {/* Thief */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Thief</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      1回の投票
                    </td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーはこのカードを使用して、ベット額の10%を相手サイドの投票から奪うことができます
                    </td>
                    <td className="border border-purple-500 p-4">
                      <strong>ケース1:</strong>
                      <br />
                      PlayerAの合計は1000ポイント、PlayerBの合計は2000ポイント。
                      <br />
                      UserAが100ポイント + Thiefカードで投票、Thiefカード = 100
                      × 10% = 10ポイント。
                      <br />
                      PlayerBの2000ポイント &gt;
                      10ポイント、そのためThiefカードは10ポイントを奪います。
                      <br />
                      UserAは110ポイントを受け取ります。
                      <br />
                      PlayerAは現在1110ポイント、PlayerB (2000 - 10) =
                      1990ポイント。
                      <br />
                      ---
                      <br />
                      <strong>ケース2:</strong>
                      <br />
                      PlayerAは1000ポイント、PlayerBは5ポイント。
                      <br />
                      UserAが100ポイント + Thiefカードで投票、Thiefカード = 100
                      × 10% = 10ポイント。
                      <br />
                      PlayerBの5ポイント &lt;
                      10ポイント、そのためThiefカードは5ポイントを奪います。
                      <br />
                      UserAは105ポイントを受け取ります。
                      <br />
                      PlayerAは現在1105ポイント、PlayerB (5 - 5) = 0ポイント。
                    </td>
                  </tr>

                  {/* Magnifying glass */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Magnifying glass</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      バトル全体
                    </td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーが両サイドの詳細情報を確認できるようになります
                    </td>
                    <td className="border border-purple-500 p-4">-</td>
                  </tr>

                  {/* Careless Gambler */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Careless Gambler</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">
                      バトル全体
                    </td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーに当選した場合、配当が100%増加しますが、投票手数料も50%増加します。（配当はすべての手数料を差し引いた後に2倍になります）
                    </td>
                    <td className="border border-purple-500 p-4">
                      UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      <br />
                      <strong>ケース1:</strong>
                      <br />
                      UserAがカードを使用 (20 × 0.5) = 10ポイント
                      <br />
                      UserA: 10ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      UserAがラッキー抽選に当選した場合、受け取るポイントは (10
                      + 30 + 50) × 2 = 180ポイント
                      <br />
                      <br />
                      <strong>ケース2:</strong> 誰もカードを使用しない
                      <br />
                      UserAがラッキー抽選に当選した場合、受け取るポイントは 20 +
                      30 + 50 = 100ポイント
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
