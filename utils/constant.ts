export const BE_URL: string = process.env.NEXT_PUBLIC_API || "";
export const rpc_url: string = process.env.NEXT_PUBLIC_JSON_RPC_URL || "";
export const contractAddressLoveFarm: string =
  process.env.NEXT_PUBLIC_CONTRACT_LOVE_FARM || "";
export const contractAddressLoveClaim: string =
  process.env.NEXT_PUBLIC_CONTRACT_LOVE_CLAIM || "";
export const contractAddressLove: string =
  process.env.NEXT_PUBLIC_CONTRACT_LOVE || "";
export const contractAddressFaith =
  process.env.NEXT_PUBLIC_CONTRACT_FAITH || "";
export const contractAddressWar: string =
  process.env.NEXT_PUBLIC_CONTRACT_WAR || "";
export const ETHLOVEPoolAddy: string = "0xdd97fce8441dabf221b330269750b18ba82b0cd6";
export const USDTLOVEPoolAddy: string = "0xE24Ab719209A9844E59dBfEEe91ce7d8D482532e";
export const WARLOVEPoolAddy: string = "0x1c9189593669b5c1fbc33d7ff522b1b2dd0646e4";
export const contractAddressUsdt: string = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const contractAddressWbtc: string = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
export const contractAddressPepe: string = "0x6982508145454ce325ddbe47a25d4ec3d2311933";
export const contractAddressBobo: string = "0xb90b2a35c65dbc466b04240097ca756ad2005295";
export const contractAddressMog: string = "0xaaee1a9723aadb7afa2810263653a34ba2c21c7a";
export const contractAddressNina: string = "0x697a79AF2De4Af9E9aA0D08905374556AD1353bB";
export const ETHERSCAN_CLAIM_LINK =
  "https://etherscan.io/address/0xB22C05CeDbF879a661fcc566B5a759d005Cf7b4C";
export const ETHERSCAN_FARM_LINK =
  "https://etherscan.io/address/0xFb063b1ae6471E6795d6ad1FC7f47c1cAb1f3422";

export const UNISWAP_LINK = `https://app.uniswap.org/#/add/v2/${contractAddressLove}/ETH`;
export const BIT_QUERY_LINK =
  "https://explorer.bitquery.io/ethereum/token/0xb22c05cedbf879a661fcc566b5a759d005cf7b4c";
export const DEXSCREENER_LINK =
  "https://dexscreener.com/ethereum/0xDD97FCe8441dABf221B330269750B18bA82b0CD6";
export const LOVE_ETH_LP_LINK = `https://app.uniswap.org/#/add/v2/ETH/${contractAddressLove}`;
export const WAR_SWAP_LINK = `https://app.uniswap.org/#/swap?theme=dark&inputCurrency=${contractAddressLove}&outputCurrency=${contractAddressWar}`;

export const ETHERSCAN_FAITH_LINK = `https://etherscan.io/address/${contractAddressFaith}`;

export const LOVE_POOLS = [
  { name: "LOVE-ETH", icon: "/assets/love_eth.svg", token: "ETH", baseAsset: contractAddressLove },
  { name: "LOVE-USDT", icon: "/assets/love_usdt.svg", token: contractAddressUsdt, baseAsset: contractAddressLove  },
  { name: "LOVE-WBTC", icon: "/assets/love_wbtc.svg", token: contractAddressWbtc, baseAsset: contractAddressLove  },
  { name: "LOVE-PEPE", icon: "/assets/love_eth.svg", token: contractAddressPepe, baseAsset: contractAddressLove  },
  { name: "LOVE-BOBO", icon: "/assets/love_eth.svg", token: contractAddressBobo, baseAsset: contractAddressLove  },
  { name: "LOVE-MOG", icon: "/assets/love_eth.svg", token: contractAddressMog, baseAsset: contractAddressLove  },
  { name: "LOVE-NINA", icon: "/assets/love_eth.svg", token: contractAddressNina, baseAsset: contractAddressLove  },
  { name: "WAR3-LOVE", icon: "/assets/love_eth.svg", token: contractAddressWar, baseAsset: contractAddressLove  },
  { name: "WAR3-ETH", icon: "/assets/love_eth.svg", token: "ETH", baseAsset: contractAddressWar  },
];
export const BLOCKS_PER_YEAR = 2591500;
export const IS_DEV_ENV = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";
export const CHAIN_ID = IS_DEV_ENV ? 11155111 : 1;
export const HOT_JAR_SITE_ID = 3527265;
export const HOT_JAR_VERSION = 6;
export const TELEGRAM_LINK = "https://t.me/loveethereum";
export const TWITTER_LINK = "https://twitter.com/lovegameeth";
export const HEARTBREAKER_SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL!;
export const HEARTBREAKER_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_HEARTBREAKER_CONTRACT_ADDRESS!;
export const ETHUSDTPoolAddy = "0xE24Ab719209A9844E59dBfEEe91ce7d8D482532e"
export const USD_WBTC_POOL_ADDY = process.env.NEXT_PUBLIC_USD_WBTC_POOL_ADDY!;
export const USD_PEPE_POOL_ADDY = process.env.NEXT_PUBLIC_USD_PEPE_POOL_ADDY!;

export const KV_REST_API_URL = IS_DEV_ENV
  ? process.env.KV_REST_API_URL || ""
  : process.env.KV_PROD_REST_API_URL || "";

export const KV_REST_API_TOKEN = IS_DEV_ENV
  ? process.env.KV_REST_API_TOKEN || "" 
  : process.env.KV_PROD_REST_API_TOKEN || "";
