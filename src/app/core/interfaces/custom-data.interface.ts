export interface Data {
  cap?: number;
  diff?: number;
  diff7d?: number;
  diff30d?: number;
  volDiff1?: number;
  volDiff7?: number;
  volDiff30?: number;
  txsCount24?: number;
  txsCountCurrent1D?: number;
  txsCountCurrent7D?: number
  txsCountCurrent30D?: number;
  name: string;
  rate?: number;
}

export interface CustomData {
  id: string;
  image: string;
  data: Data;
}
