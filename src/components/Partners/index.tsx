import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import FlowSlider from '../Slider/FlowSlider';

export default function Partners() {
  return (
    <section id="partners">
      <div className="inner text-center py-20">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB Partners
        </RighteousText>

        <FlowSlider />
      </div>
    </section>
  );
}
