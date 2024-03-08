import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JoinDiscord from '@/components/JoinDiscord';
import BasicSlider from '@/components/Slider/BasicSlider';
import Stuts from '@/components/Stuts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BasicSlider />
        <About />
        <div>KISARABI</div>
        <div>QB QUEST</div>
        <Stuts />
        <div>QB SOLUTIONS</div>
        <div>QB NEWS</div>
        <div>QB GAMES</div>
        <div>Top Blockchain Games</div>
        <div>Roadmap</div>
        <div>QB Partners</div>

        <JoinDiscord />
      </main>
      <footer />
    </>
  );
}
