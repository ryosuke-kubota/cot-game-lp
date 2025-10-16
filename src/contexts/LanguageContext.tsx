'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  ja: {
    // Header
    cosplay_battles: 'Cosplay Battles',

    // Hero
    hero_title: 'コスプレバトルで勝利を掴め！',
    hero_subtitle:
      'あなたのお気に入りのコスプレイヤーに投票して、\n豪華賞品を獲得しよう',
    play_now: '今すぐプレイ',

    // About
    what_is_cot: 'COTとは',
    cot_description:
      'COT（Cosplay Token）は、コスプレイヤーとファンを繋ぐWeb3ゲームプラットフォームです。\nお気に入りのコスプレイヤーに投票して、豪華賞品を獲得しましょう！',

    // Games
    games: 'ゲーム',
    games_description: '様々なゲームモードで楽しもう！',

    // Roadmap
    roadmap: 'ロードマップ',
    roadmap_description: '私たちの成長計画',

    // Community
    join_community: 'JOIN COMMUNITY',
    join_our_community: 'JOIN OUR COMMUNITY',
    community_description:
      'COTゲームの最新情報やイベント情報をSNSでチェック！\nコミュニティに参加して、他のプレイヤーと交流しよう',

    // Social
    telegram: 'TELEGRAM',
    youtube: 'YOUTUBE',
    instagram: 'INSTAGRAM',
    facebook: 'FACEBOOK',
    x: 'X',

    // Game Rules
    game_rules: 'Game Rules',
    player_manual: 'プレイヤーマニュアル',
    gacha_description_1:
      'プレイヤーはCOTポイントを使用してガチャを回し、追加ポイントやカードなどの様々な報酬を獲得できます。',
    gacha_description_2:
      '毎日1回、ログインボーナスとして無料でガチャを回すことができます。',
    gacha_description_3:
      'サイドメニューから**「Gacha」**を選択してガチャ画面にアクセスできます。 ガチャは**1回**または**10回**まとめて回すことができます。',
    gacha_rewards: 'ガチャ報酬',
    gacha_rewards_description:
      'カードには様々な効果があり、より多くの報酬を獲得し、有利に進めることができます。賢く使いましょう！',
    card_name: 'カード名',
    scope: '適用範囲',
    effect: '効果',
    example: '例',
    one_vote: '1回の投票',
    entire_battle: 'バトル全体',

    // Card Effects
    card_multiplier_20_effect: '1回限り、プレイヤーの投票数を20%増加',
    card_multiplier_20_example:
      'ユーザーが100ポイントで投票した場合、合計値は120ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は4ポイントになります（0.2 × 4 < 1のため）。',
    card_multiplier_50_effect: '1回限り、プレイヤーの投票数を50%増加',
    card_multiplier_50_example:
      'ユーザーが100ポイントで投票した場合、合計値は150ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は6ポイントになります。',
    card_multiplier_70_effect: '1回限り、プレイヤーの投票数を70%増加',
    card_multiplier_70_example:
      'ユーザーが100ポイントで投票した場合、合計値は170ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は6ポイントになります。',
    card_multiplier_100_effect: '1回限り、プレイヤーの投票数を100%増加',
    card_multiplier_100_example:
      'ユーザーが100ポイントで投票した場合、合計値は200ポイントになります。\nユーザーが4ポイントで投票した場合、合計値は8ポイントになります。',
    card_lucky_streak_effect:
      'プレイヤーがラッキープレイヤーになる確率を30%増加（賞金プールには影響しません）',
    card_lucky_streak_example:
      'カード追加前：\nUserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント\nA: 20 / 100 ≈ 20%\nB: 30 / 100 ≈ 30%\nC: 50 / 100 ≈ 50%\n\nカード追加後：\nUserAは30%のラックブースト: 20 × 1.3 = 26\nA: 26 / 106 ≈ 24.53%\nB: 30 / 106 ≈ 28.30%\nC: 50 / 106 ≈ 47.17%',
    card_refund_effect:
      'プレイヤーがラッキープレイヤーに選ばれなかった場合、投票ポイントの合計の20%を返金',
    card_refund_example:
      'ユーザーの総投票数が500で、ラッキー抽選に当たらなかった場合、100ポイント返金されます。\nユーザーの総投票数が521で、ラッキー抽選に当たらなかった場合、104ポイント返金されます。\nユーザーの総投票数が4で、ラッキー抽選に当たらなかった場合、(0.2 × 4) < 1のため返金されません。',
    card_thief_effect:
      'プレイヤーはこのカードを使用して、ベット額の10%を相手サイドの投票から奪うことができます',
    card_thief_example:
      'ケース1:\nPlayerAの合計は1000ポイント、PlayerBの合計は2000ポイント。\nUserAが100ポイント + Thiefカードで投票、Thiefカード = 100 × 10% = 10ポイント。\nPlayerBの2000ポイント > 10ポイント、そのためThiefカードは10ポイントを奪います。\nUserAは110ポイントを受け取ります。\nPlayerAは現在1110ポイント、PlayerB (2000 - 10) = 1990ポイント。\n---\nケース2:\nPlayerAは1000ポイント、PlayerBは5ポイント。\nUserAが100ポイント + Thiefカードで投票、Thiefカード = 100 × 10% = 10ポイント。\nPlayerBの5ポイント < 10ポイント、そのためThiefカードは5ポイントを奪います。\nUserAは105ポイントを受け取ります。\nPlayerAは現在1105ポイント、PlayerB (5 - 5) = 0ポイント。',
    card_magnifying_glass_effect:
      'プレイヤーが両サイドの詳細情報を確認できるようになります',
    card_magnifying_glass_example: '-',
    card_careless_gambler_effect:
      'プレイヤーがラッキープレイヤーに当選した場合、配当が100%増加しますが、投票手数料も50%増加します。（配当はすべての手数料を差し引いた後に2倍になります）',
    card_careless_gambler_example:
      'UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント\n\nケース1:\nUserAがカードを使用 (20 × 0.5) = 10ポイント\nUserA: 10ポイント、UserB: 30ポイント、UserC: 50ポイント\nUserAがラッキー抽選に当選した場合、受け取るポイントは (10 + 30 + 50) × 2 = 180ポイント\n\nケース2: 誰もカードを使用しない\nUserAがラッキー抽選に当選した場合、受け取るポイントは 20 + 30 + 50 = 100ポイント',
  },
  en: {
    // Header
    cosplay_battles: 'Cosplay Battles',

    // Hero
    hero_title: 'Win the Cosplay Battle!',
    hero_subtitle: 'Vote for your favorite cosplayers and\nwin amazing prizes',
    play_now: 'Play Now',

    // About
    what_is_cot: 'What is COT',
    cot_description:
      'COT (Cosplay Token) is a Web3 gaming platform that connects cosplayers and fans.\nVote for your favorite cosplayers and win amazing prizes!',

    // Games
    games: 'Games',
    games_description: 'Enjoy various game modes!',

    // Roadmap
    roadmap: 'Roadmap',
    roadmap_description: 'Our Growth Plan',

    // Community
    join_community: 'JOIN COMMUNITY',
    join_our_community: 'JOIN OUR COMMUNITY',
    community_description:
      'Check out the latest COT game news and event information on social media!\nJoin the community and connect with other players',

    // Social
    telegram: 'TELEGRAM',
    youtube: 'YOUTUBE',
    instagram: 'INSTAGRAM',
    facebook: 'FACEBOOK',
    x: 'X',

    // Game Rules
    game_rules: 'Game Rules',
    player_manual: 'Player Manual',
    gacha_description_1:
      'Players can spin the gacha using COT points to obtain various rewards such as additional points and cards.',
    gacha_description_2:
      'Once a day, you can spin the gacha for free as a login bonus.',
    gacha_description_3:
      'You can access the gacha screen by selecting **"Gacha"** from the side menu. You can spin the gacha **once** or **10 times** at once.',
    gacha_rewards: 'Gacha Rewards',
    gacha_rewards_description:
      'Cards have various effects that allow you to earn more rewards and gain advantages. Use them wisely!',
    card_name: 'Card Name',
    scope: 'Scope',
    effect: 'Effect',
    example: 'Example',
    one_vote: 'Apply for 1 vote',
    entire_battle: 'Apply for the entire battle',

    // Card Effects
    card_multiplier_20_effect:
      "For 1 time, increase the player's vote number by 20%",
    card_multiplier_20_example:
      'If a user votes with a value of 100 points, the total value will be 120 points. If a user votes with a value of 4 points, the total value will be 4 points (because 0.2 * 4 < 1).',
    card_multiplier_50_effect:
      "For 1 time, increase the player's vote number by 50%",
    card_multiplier_50_example:
      'If a user votes with a value of 100 points, the total value will be 150 points. If a user votes with a value of 4 points, the total value will be 6 points',
    card_multiplier_70_effect:
      "For 1 time, increase the player's vote number by 70%",
    card_multiplier_70_example:
      'If a user votes with a value of 100 points, the total value will be 170 points. If a user votes with a value of 4 points, the total value will be 6 points',
    card_multiplier_100_effect:
      "For 1 time, increase the player's vote number by 100%",
    card_multiplier_100_example:
      'If a user votes with a value of 100 points, the total value will be 200 points. If a user votes with a value of 4 points, the total value will be 8 points',
    card_lucky_streak_effect:
      "Increase the player's entry vote to become lucky player by 30% (does not affect prize pool)",
    card_lucky_streak_example: `Before adding the card: UserA: 20 points, UserB: 30 points, UserC: 50 points
A: 20 / 100 ≈ 20%
B: 30 / 100 ≈ 30%
C: 50 / 100 ≈ 50%

After adding the card:
UserA receives a 30% luck boost: 20 * 1.3 = 26
A: 26 / 106 ≈ 24.53%
B: 30 / 106 ≈ 28.30%
C: 50 / 106 ≈ 47.17%
`,
    card_refund_effect:
      "If the player didn't win lucky player, refund 20% of their total of their vote point",
    card_refund_example:
      "If the user's total votes are 500 and they do not win the lucky draw, they will be refunded 100. If the user's total votes are 521 and they do not win the lucky draw, they will be refunded 104. If the user's total votes are 4 and they do not win the lucky draw, they will not receive a refund because (0.2 * 4) < 1.",
    card_thief_effect:
      "Player can use this card to steal 10% of their bet amount from the other side's vote",
    card_thief_example: `**Case 1:** 
PlayerA has a total of 1000 points, PlayerB has a total of 2000 points.
UserA votes 100 points + Thief card, Thief card = 100 * 10% = 10 points.
PlayerB's 2000 points > 10 points, so the Thief card steals 10 points.
UserA receives 110 points.
PlayerA now has 1110 points, PlayerB (2000 - 10) = 1990 points.

---

**Case 2:**
PlayerA has 1000 points, PlayerB has 5 points.
UserA votes 100 points + Thief card, Thief card = 100 * 10% = 10 points.

PlayerB's 5 points < 10 points, so the Thief card steals 5 points. 
UserA receives 105 points.
PlayerA now has 1105 points, PlayerB (5 - 5) = 0 points.
`,
    card_magnifying_glass_effect:
      'Allow player to see detailed information of both side',
    card_magnifying_glass_example:
      'UserA: 20 points, UserB: 30 points, UserC: 50 points',
    card_careless_gambler_effect:
      'Increase 100% payout if the player win lucky player but also increase voting fee by 50%. (payout will be doubled after minus all fee)',
    card_careless_gambler_example: `**Case 1:**
UserA uses a card (20 * 0.5) = 10 points
UserA: 10 points, UserB: 30 points, UserC: 50 points
If UserA wins the lucky draw, the points received will be (10 + 30 + 50) * 2 = 180 points

**Case 2:** No one uses a card
If UserA wins the lucky draw, the points received will be 20 + 30 + 50 = 100 points
`,
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ja');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
