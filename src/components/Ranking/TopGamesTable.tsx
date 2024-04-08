import './style.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type TopGame = {
  dappId: number;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  link: string;
  website: string;
  chains: string[];
  categories: string[];
  socialLinks: {
    title: string;
    url: string;
    type: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  metrics: {
    transactions: number;
    transactionsPercentageChange: number;
    uaw: number;
    uawPercentageChange: number;
    volume: number;
    volumePercentageChange: number;
    balance: number;
    balancePercentageChange: number;
  };
};

type TopGames = {
  success: boolean;
  chain: null;
  category: string;
  range: string;
  top: number;
  results: TopGame[];
};

export default function TopGamesTable() {
  const [topGames, setTopGames] = useState<TopGame[]>([]);
  const [dataRange, setDataRange] = useState('24h');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTopGamesBySpreadSheet(dataRange);
  }, []);

  const fetchTopGamesBySpreadSheet = async (range: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwy2hvpLaRgW3_nQlZVlRJPjejI5Kp4lD6uVCMf9OMu9bzGLGGvuAeob3FWUqJ20wAsJw/exec' +
          `?range=${range}`
      )
        .then((response) => response.json())
        .then((data) => {
          // const lastUpdateDate: Date = new Date(data[0].update_at);
          // const currentDate: Date = new Date();
          // const daysSinceLastUpdate = Math.floor(
          //   (currentDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
          // );

          // if (daysSinceLastUpdate >= 1 || isNaN(daysSinceLastUpdate)) {
          //   // データが1日以上前のものだった場合の処理
          //   console.log(
          //     'データが1日以上前のものです。最新のデータを取得する必要があります。'
          //   );
          //   getTopGames(dataRange);
          // } else {
          console.log('データは最新です。');
          setTopGames(JSON.parse(data[0].data));
          setIsLoading(false);
          // }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  const getTopGames = (range: string) => {
    const fetchTopGames = async () => {
      try {
        const response = await fetch(
          `https://apis.dappradar.com/v2/dapps/top/uaw?category=games&range=${range}&top=10`,
          {
            headers: {
              accept: 'application/json',
              'x-api-key': '1F42TVt9MX6GdqFT0nGa7euJ6GrPTlu4ifgawwCi',
            },
          }
        );
        const data = await response.json();
        console.log(data.results);
        setTopGames(data.results);
        // handleSheetUpdate(data.results, range);
      } catch (error) {
        console.error('Error fetching top games:', error);
      }
    };
    fetchTopGames();
  };

  const handleSheetUpdate = async (topGames: any, range: string) => {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwy2hvpLaRgW3_nQlZVlRJPjejI5Kp4lD6uVCMf9OMu9bzGLGGvuAeob3FWUqJ20wAsJw/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            range: range,
            data: JSON.stringify(topGames),
            update_at: new Date().toLocaleDateString(),
          }),
        }
      );

      console.log('シートの更新に成功しました。');
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  const handleClickRange = (range: string) => {
    setDataRange(range);
    fetchTopGamesBySpreadSheet(range);
    console.log(range);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}m`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}k`;
    } else {
      return num.toString();
    }
  };
  return (
    <div className="relative overflow-x-auto">
      <div className="flex justify-end gap-3">
        <button
          onClick={() => handleClickRange('24h')}
          className={`underline ${
            dataRange == '24h' ? 'text-white' : 'text-gray-400'
          }`}
          disabled={dataRange == '24h' || isLoading}
        >
          24h
        </button>
        <button
          onClick={() => handleClickRange('7d')}
          className={`underline ${
            dataRange == '7d' ? 'text-white' : 'text-gray-400'
          }`}
          disabled={dataRange == '7d' || isLoading}
        >
          7d
        </button>
        <button
          onClick={() => handleClickRange('30d')}
          className={`underline ${
            dataRange == '30d' ? 'text-white' : 'text-gray-400'
          }`}
          disabled={dataRange == '30d' || isLoading}
        >
          30d
        </button>
      </div>
      <table
        id="top-games-table"
        className="w-full text-sm text-left text-white"
      >
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Token
            </th>
            <th scope="col" className="px-6 py-3">
              Token Price
            </th> */}
            <th scope="col" className="px-6 py-3">
              UAW
            </th>
            <th scope="col" className="px-6 py-3">
              % UAW
            </th>
            <th scope="col" className="px-6 py-3">
              Tsx
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {topGames.map((game, index) => (
            <tr key={index} className="border-b bg-gray-800 border-gray-700">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">
                <Image
                  className="game-logo rounded"
                  src={game.logo}
                  width={'40'}
                  height={'40'}
                  alt={game.name}
                ></Image>
              </td>
              <td className="px-6 py-4">
                <div className="mb-2 font-bold">{game.name}</div>
                <div className="text-xs text-gray-400">
                  {game.chains.join(', ')}
                </div>
              </td>
              {/* <td className="px-6 py-4">{game.token}</td>
              <td className="px-6 py-4">{game.tokenprice}</td> */}
              <td className="px-6 py-4">{formatNumber(game.metrics.uaw)}</td>
              <td className="px-6 py-4">
                {game.metrics.uawPercentageChange > 0 ? (
                  <span className="text-green-500 font-bold">
                    +{game.metrics.uawPercentageChange}%
                  </span>
                ) : (
                  <span className="text-red-500 font-bold">
                    {game.metrics.uawPercentageChange}%
                  </span>
                )}
              </td>
              <td className="px-6 py-4">
                {formatNumber(game.metrics.transactions)}
                <div>
                  {game.metrics.transactionsPercentageChange > 0 ? (
                    <span className="text-gray-400 text-xs">
                      <i className="fas fa-chevron-up text-green-500"></i> +
                      {game.metrics.transactionsPercentageChange}%
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs">
                      <i className="fas fa-chevron-down text-red-500"></i>{' '}
                      {game.metrics.transactionsPercentageChange}%
                    </span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                ${formatNumber(game.metrics.volume)}
                <div>
                  {game.metrics.volumePercentageChange > 0 ? (
                    <span className="text-gray-400 text-xs">
                      <i className="fas fa-chevron-up text-green-500"></i> +
                      {game.metrics.volumePercentageChange}%
                    </span>
                  ) : game.metrics.volumePercentageChange < 0 ? (
                    <span className="text-gray-400 text-xs">
                      <i className="fas fa-chevron-down text-red-500"></i>{' '}
                      {game.metrics.volumePercentageChange}%
                    </span>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
