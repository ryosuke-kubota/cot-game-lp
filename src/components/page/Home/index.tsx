import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BasicSlider from '@/components/Slider/BasicSlider';

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
        <div>QB STUTS</div>
        <div>QB SOLUTIONS</div>
        <div>QB NEWS</div>
        <div>QB GAMES</div>
        <div>Top Blockchain Games</div>
        <div>Roadmap</div>
        <div>QB Partners</div>
        <div>JOIN QB</div>
      </main>
      <footer />
    </>
  );
}
