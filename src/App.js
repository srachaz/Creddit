import * as React from "react";
import TopArticles from './TopArticles'; // Adjust the path as necessary
import CryptoSentiment from './CryptoSentiment';

export default function App(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-end py-2 pr-3.5 pl-16 w-full bg-rose-500 max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51789cc7e51a2ea4f9c71c8ee40b30f2b4d0b005f71fd96f6fb10aa0e97fed85?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="aspect-square w-[35px]"
        />
      </div>
      <div className="flex gap-0 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col px-4 pt-4 pb-12 text-lg bg-zinc-900 text-neutral-400" style={{ width: '25%' }}> {/* Adjusted sidebar width */}
          <div className="flex gap-5 justify-between py-5 pr-9 pl-4 text-emerald-300 rounded-md border-2 border-emerald-300 border-solid bg-emerald-300 bg-opacity-30 max-md:pr-5">
            <div>For You</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/095665d97e1e9ddfa7e66b61b2f3e0f5bc654d138d8865ef5410f07eace28c62?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
              className="aspect-[1.28] w-[18px]"
            />
          </div>
          <div className="mt-5 text-white">Hot Topics</div>
          <div className="shrink-0 mt-2.5 h-px bg-white" />
          {/* Sidebar content */}
          <div className="justify-center items-start py-3 pr-16 pl-5 mt-4 text-white whitespace-nowrap bg-black rounded-sm border border-solid border-zinc-400 max-md:pr-5">
            EigenFi
          </div>
          {/* More sidebar content */}
          <div className="justify-center items-start py-3.5 pr-16 pl-5 mt-3.5 whitespace-nowrap bg-black rounded-sm max-md:pr-5">
            Ion Protocol{" "}
          </div>
          {/* Insert TopArticles component */}
          <TopArticles searchQuery="crypto" /> {/* Adjust props as needed */}
        </div>
        <div className="w-0.5 bg-zinc-600 h-[782px]" />
        <div className="flex flex-col flex-1 self-start mt-4 max-md:max-w-full">
          {/* Central component content exactly as provided */}
          <div className="flex gap-5 justify-between self-center px-4 py-3 max-w-full text-2xl font-bold text-white whitespace-nowrap rounded-3xl border border-white border-solid shadow-sm bg-zinc-600 w-[591px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b75aa5d19aa64a6e9269752781f17c54b13d5835a28ed27a3dd2d2e386b1cf?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
              className="aspect-square w-[18px]"
            />
            <div className="flex-auto">Search</div>
          </div>
          {/* Sentiment Scores Section */}
<div className="mt-4 text-center w-full">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">News Sentiment Scores of Top Crypto</h2>
</div>
<div className="mt-2 text-center w-full">
  <h2 className="text-sm font-normal text-gray-300 mb-2">-1.5 (Negative) to 1.5 (Positive)</h2>
</div>
<div className="mt-4 flex justify-around items-center flex-wrap">
  <div className="p-4 border border-gray-200 rounded-lg shadow flex flex-row items-center">
    <img src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_640.png" alt="Bitcoin" className="w-16 h-16 mr-4" />
    <CryptoSentiment cryptoSymbol="BTC" />
  </div>
  {/* Adjust other boxes similarly */}
  <div className="p-4 border border-gray-200 rounded-lg shadow flex flex-row items-center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png" alt="Ethereum" className="w-16 h-16 mr-4" />
    <CryptoSentiment cryptoSymbol="ETH" />
  </div>
  <div className="p-4 border border-gray-200 rounded-lg shadow flex flex-row items-center">
    <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="Solana" className="w-16 h-16 mr-4" />
    <CryptoSentiment cryptoSymbol="SOL" />
  </div>
  <div className="p-4 border border-gray-200 rounded-lg shadow flex flex-row items-center">
    <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BNB" className="w-16 h-16 mr-4" />
    <CryptoSentiment cryptoSymbol="BNB" />
  </div>
</div>

          <div className="flex gap-5 justify-between px-6 py-7 mt-8 rounded-2xl border-2 border-solid bg-zinc-900 border-zinc-600 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 text-white max-md:max-w-full">
              <div className="flex gap-4 self-start text-lg whitespace-nowrap">
                <div className="bg-emerald-300 rounded-full h-[57px] w-[57px]" />
                <div className="grow my-auto">0x9287s...HH3fl</div>
              </div>
              <div className="z-10 self-start mt-7 ml-3.5 text-2xl max-md:max-w-full">
                This explanation of Celestia is so easy to comprehend.{" "}
              </div>
              <div className="shrink-0 bg-white rounded-2xl h-[29px] max-md:max-w-full" />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a370caec377d17e1b1660fd78fb833a84cccec04d30864568a83acf7d88a3e12?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="z-10 -mt-1 w-full aspect-[5.26] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col items-center px-4 py-5 my-auto text-2xl font-bold text-emerald-300 whitespace-nowrap basis-0 bg-emerald-300 bg-opacity-10 rounded-[51px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c8cdd65c59f7adefff20fa1b40b30094ed92c9874cbe26c86299cf7746e8e4?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="aspect-[1.79] w-[41px]"
              />
              <div className="self-stretch mt-14 max-md:mt-10">10</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d172c0973deb4ce4a92f1be4846fce0673a7c8a7556722c544a50fea09bffad1?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="mt-16 aspect-[1.79] fill-emerald-300 w-[41px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between px-6 py-7 mt-6 rounded-2xl border-2 border-solid bg-zinc-900 border-zinc-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col flex-1 text-white max-md:max-w-full">
              <div className="flex gap-4 self-start text-lg whitespace-nowrap">
                <div className="bg-emerald-300 rounded-full h-[57px] w-[57px]" />
                <div className="grow my-auto">0x9287s...HH3fl</div>
              </div>
              <div className="mt-7 text-2xl max-md:max-w-full">
                Detailed Stats on Restaking—easier to understand than Dune :0{" "}
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c259402afc2389fabea2fd3e4889261c703357f782f5cd28b203474ff30196a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="mt-4 w-full aspect-[5.26] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col items-center px-4 py-5 my-auto text-2xl font-bold text-emerald-300 whitespace-nowrap basis-0 bg-emerald-300 bg-opacity-10 rounded-[51px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c8cdd65c59f7adefff20fa1b40b30094ed92c9874cbe26c86299cf7746e8e4?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="aspect-[1.79] w-[41px]"
              />
              <div className="self-stretch mt-14 max-md:mt-10">7</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d172c0973deb4ce4a92f1be4846fce0673a7c8a7556722c544a50fea09bffad1?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="mt-16 aspect-[1.79] fill-emerald-300 w-[41px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}