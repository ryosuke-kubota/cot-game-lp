import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';

export default function News() {
  return (
    <section id="news">
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB NEWS
        </RighteousText>

        <SquereSlider />

        <BorderButton link="#" className="x-btn py-1">
          View All
        </BorderButton>
      </div>
    </section>
  );
}
