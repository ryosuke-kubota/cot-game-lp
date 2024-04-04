import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import ImageSlider from '../Slider/ImageSlider';

export default function Games() {
  return (
    <section id="games">
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB GAMES
        </RighteousText>
        <p className="mb-16">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="game-list flex items-center justify-center gap-5 gap-y-12 mb-16">
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
        </div>

        <ImageSlider />
      </div>
    </section>
  );
}
