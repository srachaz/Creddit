import * as React from "react";

export default function App(props) {
  return (
    <div className="flex flex-col items-center pb-8 bg-black">
      <div className="flex gap-5 justify-between self-stretch px-5 py-2 w-full bg-rose-500 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-0.5 self-start">
          <div className="flex gap-0 justify-between rounded-full stroke-[1px]">
            <div className="flex gap-px justify-between py-1.5 pl-2 bg-white rounded-full h-[33px] stroke-[1px]">
              <div className="flex flex-col flex-1 text-2xl text-black whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1112f5989538dd8afe81e7be032a4ba0ecc57da1371c29e4df674e8780159d39?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                  className="self-end w-px aspect-[0.5] stroke-[1px] stroke-black"
                />
                <div>C</div>
              </div>
              <div className="flex z-10 flex-col items-center self-end mt-1 basis-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b119f6e8073815f83786de3534a60651cec6241edb8ab4481db3c75a0c36727?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                  className="w-1 aspect-[4] stroke-[1px] stroke-black"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4939c43a97a4ccf9f1b20df936719f19c11403c851ae95b9c25e95d5dd4253ff?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                  className="w-1 aspect-[4] stroke-[1px] stroke-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center self-start mt-4 basis-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4bb659ae1aff6043afae1820f08686e882a4d2e3ea1d1736007c418f2cc3544?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="aspect-[3.03] stroke-[1px] stroke-black w-[3px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/477ffd7d94ff21e35979d5347ce727a07dd2bbc99a6a2fb9109711367f3e1fe1?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
                className="aspect-[3.03] stroke-[1px] stroke-black w-[3px]"
              />
            </div>
          </div>
          <div className="grow self-start mt-4 text-lg text-black">reddit</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51789cc7e51a2ea4f9c71c8ee40b30f2b4d0b005f71fd96f6fb10aa0e97fed85?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="aspect-square w-[35px]"
        />
      </div>
      <div className="flex gap-5 justify-between px-4 py-3 mt-5 text-lg text-white lowercase rounded-3xl border border-white border-solid bg-zinc-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b75aa5d19aa64a6e9269752781f17c54b13d5835a28ed27a3dd2d2e386b1cf?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="self-start aspect-square w-[18px]"
        />
        <div className="flex-auto max-md:max-w-full">
          Search <span className="lowercase">your </span>Vaults
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9da580441a5a4ba17aae3f272e990379d544a67684a406e9cd0910fa10a0cc5a?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
        className="mt-5 max-w-full aspect-square w-[137px]"
      />
      <div className="mt-9 text-3xl font-bold text-white capitalize">
        defiLover00728
      </div>
      <div className="flex gap-2 pr-5 mt-6 text-2xl font-light text-emerald-300 capitalize whitespace-nowrap">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a930e4d9b199a8463bde804912a083fa532efb392ced8587f34f608bca81b8?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="self-start aspect-square w-[23px]"
        />
        <div className="flex-auto">0x8g29k...91DRT</div>
      </div>
      <div className="mt-4 text-xl font-light text-white capitalize">
        15 followers 21 following
      </div>
      <div className="flex gap-5 mt-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d87ffee34460036501863cd507dddfa2f5d69d397ee59a4bd000a9935292399?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="aspect-[1.92] w-[81px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a3bb88cdbfba4edda42adef10f360e3e0427169766cc721d7947518252afad?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="max-w-full aspect-[2.7] w-[114px]"
        />
      </div>
      <div className="mt-6 text-xl text-white capitalize">Posts Vaults</div>
      <div className="mt-3 h-0.5 bg-white w-[55px]" />
      <div className="flex gap-5 justify-between items-start px-5 mt-6 w-full max-w-[1178px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b955496e3bc31d35d67eedc50ff8b9b5f99b72147f6a63ac1e6cee004e2366d9?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="aspect-[1.02] w-[52px]"
        />
        <div className="flex overflow-hidden relative flex-col flex-1 justify-center items-center px-16 mt-4 min-h-[187px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30df9fafeef944858f460ef6f59ca0e62df19d4f8614463f9cdb2144d27d07a2?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative max-w-full rounded-md border-2 border-emerald-300 border-solid bg-emerald-300 bg-opacity-30 h-[187px] w-[253px]" />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4c72b76cad4de2d374334649424fa803d4e89e704efedccd5c75f95195a8416?apiKey=3f9ba2ec3315480ca2fa13b92795c963&"
          className="mt-3.5 aspect-[1.1] w-[33px]"
        />
      </div>
      <div className="flex gap-5 justify-between px-5 mt-3.5 max-w-full text-white capitalize w-[768px] max-md:flex-wrap">
        <div className="flex flex-col">
          <div className="text-2xl">Defi Basics</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl">Yield Farming</div>
        </div>
        <div className="flex flex-col self-start">
          <div className="text-2xl">LRT Wars</div>
        </div>
      </div>
    </div>
  );
}


