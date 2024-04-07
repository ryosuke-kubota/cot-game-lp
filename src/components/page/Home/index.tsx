import About from '@/components/About';
import Footer from '@/components/Footer';
import Games from '@/components/Games';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JoinDiscord from '@/components/JoinDiscord';
import Kisaragi from '@/components/Kisaragi';
import News from '@/components/News';
import Partners from '@/components/Partners';
import Quest from '@/components/Quest';
import Ranking from '@/components/Ranking';
import Roadmap from '@/components/Roadmap';
import BasicSlider from '@/components/Slider/BasicSlider';
import Solutions from '@/components/Solutions';
import Stuts from '@/components/Stuts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BasicSlider />
        <About />
        <Kisaragi />
        <Quest />
        <Stuts />
        <Solutions />
        <News />
        <Games />
        <Ranking />
        <Roadmap />
        <Partners />

        <JoinDiscord />
      </main>
      <Footer />
    </>
  );
}
