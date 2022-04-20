export interface Price {
  rate: number;
  diff: number;
  diff7d: number;
  ts: number;
  marketCapUsd: number;
  availableSupply: number;
  volume24h: number;
  diff30d: number;
  volDiff1: number;
  volDiff7: number;
  volDiff30: number;
}

export interface Token {
  address: string;
  name: string;
  symbol: string;
  volume: number;
  cap: number;
  availableSupply: number;
  price: Price;
  'volume-1d-current': number;
  'volume-1d-previous': number;
  'cap-1d-current': number;
  'cap-1d-previous': number;
  'cap-1d-previous-ts': number;
  'volume-7d-current': number;
  'volume-7d-previous': number;
  'cap-7d-current': number;
  'cap-7d-previous': number;
  'cap-7d-previous-ts': number;
  'volume-30d-current': number;
  'volume-30d-previous': number;
  'cap-30d-current': number;
  'cap-30d-previous': number;
  'cap-30d-previous-ts': number;
  'txsCount-1d-current'?: number;
  'txsCount-7d-current'?: number;
  'txsCount-30d-current'?: number;
  decimals: any;
  totalSupply: string;
  owner: string;
  txsCount24?: number;
  txsCount?: number;
  transfersCount?: number;
  lastUpdated?: number;
  slot?: number;
  storageTotalSupply: string;
  issuancesCount?: number;
  holdersCount?: number;
  website: string;
  twitter: string;
  image: string;
  facebook: string;
  coingecko: string;
  ethTransfersCount?: number;
  reddit: string;
  links: string;
  telegram: string;
  description: string;
}

export interface Totals {
  tokens: number;
  tokensWithPrice: number;
  cap: number;
  capPrevious: number;
  volume24h: number;
  volumePrevious: number;
  ts: number;
}

export interface IEthplorerResponse {
  tokens: Token[];
  totals: Totals;
}
