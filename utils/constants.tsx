export const optionServerLocation = ['New York (ny)']

export const valueOptionsServerLocation = [
  {
    title: 'New York (ny)',
    enabled: true,
    src: '/images/subNavBarServers/usa.svg',
    style: '2xl:w-[22px] xl:w-[17.5px] lg:w-[15.5px]  md:w-[13.2px] w-[11px]',
  },
]

export const optionsServerLocationToValue = {
  'New York (ny)': 'ny',
}

export const optionsServerNumberToValue = {
  'Small c3.x86 x 1': 1,
  'Small c3.x86 x 2': 2,
  'Small c3.x86 x 3': 3,
  'Medium c2.x86 x 1': 1,
  'Medium c2.x86 x 2': 2,
  'Medium c2.x86 x 3': 3,
  'Large 23.x86 x 1': 1,
  'Large 23.x86 x 2': 2,
  'Large 23.x86 x 3': 3,
}

export const optionsFeature = [
  'apollox',
  'binance',
  'binancefutures',
  'bitfinex',
  'bybit',
  'coinbase',
  // 'deribit',
  'dydx',
  'gemini',
  'kraken',
  'krakenfutures',
  // 'phemex',
  'ethereum',
]

export const categoriesOptions = [
  {
    title: 'Crypto Exchanges',
    isFree: true,
    enabled: true,
    dataOptions: [
      {
        icon: '/images/subNavBarData/binance.svg',
        title: 'Binance',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/coinbase.svg',
        title: 'Coinbase',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/bybit.svg',
        title: 'Bybit',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/bitfinex.svg',
        title: 'Bitfinex',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/okx.svg',
        title: 'OKX',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/krakan.svg',
        title: 'Kraken',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/hubai.svg',
        title: 'Hubai',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/gateio.svg',
        title: 'Gate.io',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/kucoin.svg',
        title: 'Kucoin',
        enabled: false,
      },
    ],
  },
  {
    title: 'Public Blockchains',
    isFree: true,
    enabled: true,
    dataOptions: [
      {
        icon: '/images/subNavBarData/bitcoin.svg',
        title: 'Bitcoin',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/ethereum.svg',
        title: 'Ethereum',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/polygon.svg',
        title: 'Polygon',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/avalanche.svg',
        title: 'Avalanche',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/binance.svg',
        title: 'BNB',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/aptos.svg',
        title: 'Aptos',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/hedera.svg',
        title: 'Hedera',
        enabled: false,
      },
    ],
  },
  {
    title: 'Descentralized Finance (DeFi)',
    isFree: true,
    enabled: true,
    dataOptions: [
      {
        icon: '/images/subNavBarData/dydx-logo.svg',
        title: 'DyDx',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/apollox.svg',
        title: 'ApolloX',
        enabled: true,
      },
      {
        icon: '/images/subNavBarData/aave.svg',
        title: 'Aave',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/yfi.svg',
        title: 'Yearn Finance',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/curve.svg',
        title: 'Curve',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/gala.svg',
        title: 'Gala',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/aavegotchi.svg',
        title: 'Aavegotchi',
        enabled: false,
      },
      {
        icon: '/images/subNavBarData/opensea.svg',
        title: 'OpenSea',
        enabled: false,
      },
    ],
  },
  {
    title: 'GameFi & Metaverses',
    isFree: true,
    enabled: false,
    dataOptions: [
      // {
      //   icon: '/images/subNavBarData/binance.svg',
      //   title: 'Binance',
      // },
      // {
      //   icon: '/images/subNavBarData/coinbase.svg',
      //   title: 'Coinbase',
      // },
      // {
      //   icon: '/images/subNavBarData/bybit.svg',
      //   title: 'Bybit',
      // },
      // {
      //   icon: '/images/subNavBarData/okx.svg',
      //   title: 'OKX',
      // },
      // {
      //   icon: '/images/subNavBarData/krakan.svg',
      //   title: 'Krakan',
      // },
      // {
      //   icon: '/images/subNavBarData/hubai.svg',
      //   title: 'Hubai',
      // },
      // {
      //   icon: '/images/subNavBarData/gateio.svg',
      //   title: 'Gate.io',
      // },
      // {
      //   icon: '/images/subNavBarData/kucoin.svg',
      //   title: 'Kucoin',
      // },
    ],
  },
  {
    title: 'Public Medical Research',
    enabled: false,
    isFree: false,
  },
  {
    title: 'Financial Data',
    enabled: false,
    isFree: false,
  },
  {
    title: 'Weather Report',
    enabled: false,
    isFree: false,
  },
  {
    title: 'Scientific Data',
    enabled: false,
    isFree: false,
  },
  {
    title: 'Cancer Research',
    enabled: false,
    isFree: false,
  },
  {
    title: 'Agricultural',
    enabled: false,
    isFree: false,
  },
]
