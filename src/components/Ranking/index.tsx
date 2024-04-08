import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import ImageSlider from '../Slider/ImageSlider';
import TopGamesTable from './TopGamesTable';

export default function Ranking() {
  return (
    <section id="ranking">
      <div className="inner text-center py-20 px-12">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          Top Blockchain Games
        </RighteousText>
        <p className="mb-16">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>

        <TopGamesTable />
      </div>
    </section>
  );
}
