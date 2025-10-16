import About from '@/components/About';
import Cosplayers from '@/components/Cosplayers';
import Footer from '@/components/Footer';
import GameRules from '@/components/GameRules';
import Games from '@/components/Games';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JoinDiscord from '@/components/JoinDiscord';
import Kisaragi from '@/components/Kisaragi';
import Leaderboard from '@/components/Leaderboard';
import News from '@/components/News';
import Partners from '@/components/Partners';
import Quest from '@/components/Quest';
import Ranking from '@/components/Ranking';
import Roadmap from '@/components/Roadmap';
import Solutions from '@/components/Solutions';
import Stuts from '@/components/Stuts';
import Topics from '@/components/Topics';
import SNS from '@/components/SNS';
import BasePathProvider from '@/components/BasePathProvider';

export default function Home() {
  return (
    <>
      <BasePathProvider />
      <Header />
      <main>
        <Hero />
        {/* <Topics /> */}
        <About />
        <GameRules />
        {/* <Kisaragi /> */}
        <Cosplayers />
        {/* <Quest /> */}
        {/* <Stuts /> */}
        {/* <Solutions /> */}
        {/* <News /> */}
        {/* <Games /> */}
        <Leaderboard />
        {/* <Ranking /> */}
        {/* <Roadmap /> */}
        {/* <Partners /> */}
        <SNS />

        {/* <JoinDiscord /> */}
      </main>
      <Footer />
    </>
  );
}
