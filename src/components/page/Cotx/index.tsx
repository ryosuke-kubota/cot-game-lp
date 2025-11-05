import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CotxAbout from '@/components/CotxAbout';
import CotxSwapDetails from '@/components/CotxSwapDetails';
import CotxGameInfo from '@/components/CotxGameInfo';
import CotxHowToJoin from '@/components/CotxHowToJoin';
import CotxForCosplayers from '@/components/CotxForCosplayers';
import CotxRelatedLinks from '@/components/CotxRelatedLinks';
import SNS from '@/components/SNS';
import BasePathProvider from '@/components/BasePathProvider';
import FloatingTelegramButton from '@/components/FloatingTelegramButton';

export default function Cotx() {
  return (
    <>
      <BasePathProvider />
      <Header />
      <main className="cotx-page">
        <CotxAbout />
        <CotxSwapDetails />
        <CotxGameInfo />
        <CotxHowToJoin />
        <CotxForCosplayers />
        <CotxRelatedLinks />
        <SNS />
      </main>
      <Footer />
      <FloatingTelegramButton />
    </>
  );
}
