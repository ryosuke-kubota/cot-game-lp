import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';

export default function Quest() {
  return (
    <section id="quest">
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB QUEST
        </RighteousText>
        <p className="mb-12">
          誰でも参加できる招待制のイベントです。
          <br />
          参加者はタスクを達成してポイントを獲得し、バッジNFTと交換できます。
          <br />
          過去に配布した如月ホルダー限定のバッジNFTとは別のバッジです。
        </p>
        <SquereSlider />
      </div>
    </section>
  );
}
