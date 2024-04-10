/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  /**
   * @format int64
   * @example 15
   */
  makerCommission: number;
  /**
   * @format int64
   * @example 15
   */
  takerCommission: number;
  /**
   * @format int64
   * @example 0
   */
  buyerCommission: number;
  /**
   * @format int64
   * @example 0
   */
  sellerCommission: number;
  commissionRates: {
    /** @example "0.00150000" */
    maker: string;
    /** @example "0.00150000" */
    taker: string;
    /** @example "0.00000000" */
    buyer: string;
    /** @example "0.00000000" */
    seller: string;
  };
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  /** @example false */
  brokered: boolean;
  /** @example false */
  requireSelfTradePrevention: boolean;
  /** @example false */
  preventSor: boolean;
  /**
   * @format int64
   * @example 123456789
   */
  updateTime: number;
  /** @example "SPOT" */
  accountType: string;
  balances: {
    /** @example "BTC" */
    asset: string;
    /** @example "4723846.89208129" */
    free: string;
    /** @example "0.00000000" */
    locked: string;
  }[];
  permissions: string[];
  /**
   * @format int64
   * @example 354937868
   */
  uid: number;
}

export interface Order {
  /** @example "BNBBTC" */
  symbol: string;
  /** @example "msXkySR3u5uYwpvRMFsi3u" */
  origClientOrderId: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /**
   * Unless OCO, value will be -1
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
  /** @example "1.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "10.00000000" */
  executedQty: string;
  /** @example "10.00000000" */
  cummulativeQuoteQty: string;
  /** @example "FILLED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "LIMIT" */
  type: string;
  /** @example "SELL" */
  side: string;
  /** @example "NONE" */
  selfTradePreventionMode: string;
}

export interface OcoOrder {
  /**
   * @format int64
   * @example 1929
   */
  orderListId: number;
  /** @example "OCO" */
  contingencyType: string;
  /** @example "ALL_DONE" */
  listStatusType: string;
  /** @example "ALL_DONE" */
  listOrderStatus: string;
  /** @example "C3wyj4WVEktd7u9aVBRXcN" */
  listClientOrderId: string;
  /**
   * @format int64
   * @example 1574040868128
   */
  transactionTime: number;
  /** @example "BNBBTC" */
  symbol: string;
  /** @example [{"symbol":"BNBBTC","orderId":2,"clientOrderId":"pO9ufTiFGg3nw2fOdgeOXa"},{"symbol":"BNBBTC","orderId":3,"clientOrderId":"TXOvglzXuaubXAaENpaRCB"}] */
  orders: {
    symbol: string;
    /** @format int64 */
    orderId: number;
    clientOrderId: string;
  }[];
  /** @example [{"symbol":"BNBBTC","origClientOrderId":"pO9ufTiFGg3nw2fOdgeOXa","orderId":2,"orderListId":0,"clientOrderId":"unfWT8ig8i0uj6lPuYLez6","price":"1.00000000","origQty":"10.00000000","executedQty":"0.00000000","cummulativeQuoteQty":"0.00000000","status":"CANCELED","timeInForce":"GTC","type":"STOP_LOSS_LIMIT","side":"SELL","stopPrice":"1.00000000","transactTime":1688005070874},{"symbol":"BNBBTC","origClientOrderId":"TXOvglzXuaubXAaENpaRCB","orderId":3,"orderListId":0,"clientOrderId":"unfWT8ig8i0uj6lPuYLez6","price":"3.00000000","origQty":"10.00000000","executedQty":"0.00000000","cummulativeQuoteQty":"0.00000000","status":"CANCELED","timeInForce":"GTC","type":"LIMIT_MAKER","side":"SELL","selfTradePreventionMode":"NONE","transactTime":1688005070874}] */
  orderReports: {
    symbol: string;
    origClientOrderId: string;
    /** @format int64 */
    orderId: number;
    /** @format int64 */
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: string;
    timeInForce: string;
    type: string;
    side: string;
    stopPrice: string;
    selfTradePreventionMode: string;
    /** @format int64 */
    transactTime: number;
  }[];
}

export interface MarginOcoOrder {
  /**
   * @format int64
   * @example 0
   */
  orderListId: number;
  /** @example "OCO" */
  contingencyType: string;
  /** @example "ALL_DONE" */
  listStatusType: string;
  /** @example "ALL_DONE" */
  listOrderStatus: string;
  /** @example "C3wyj4WVEktd7u9aVBRXcN" */
  listClientOrderId: string;
  /**
   * @format int64
   * @example 1574040868128
   */
  transactionTime: number;
  /** @example "BNBUSDT" */
  symbol: string;
  /** @example false */
  isIsolated: boolean;
  orders: {
    symbol: string;
    /** @format int64 */
    orderId: number;
    clientOrderId: string;
  }[];
  orderReports: {
    symbol: string;
    origClientOrderId: string;
    /** @format int64 */
    orderId: number;
    /** @format int64 */
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: string;
    timeInForce: string;
    type: string;
    side: string;
    stopPrice: string;
  }[];
}

export interface OrderDetails {
  /** @example "LTCBTC" */
  symbol: string;
  /**
   * @format int64
   * @example 1
   */
  orderId: number;
  /**
   * Unless OCO, value will be -1
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "myOrder1" */
  clientOrderId: string;
  /** @example "0.1" */
  price: string;
  /** @example "1.0" */
  origQty: string;
  /** @example "0.0" */
  executedQty: string;
  /** @example "0.0" */
  cummulativeQuoteQty: string;
  /** @example "NEW" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "LIMIT" */
  type: string;
  /** @example "BUY" */
  side: string;
  /** @example "0.0" */
  stopPrice: string;
  /** @example "0.0" */
  icebergQty: string;
  /**
   * @format int64
   * @example 1499827319559
   */
  time: number;
  /**
   * @format int64
   * @example 1499827319559
   */
  updateTime: number;
  isWorking: boolean;
  /**
   * @format int64
   * @example 1499827319559
   */
  workingTime: number;
  /** @example "0.00000000" */
  origQuoteOrderQty: string;
  /** @example "NONE" */
  selfTradePreventionMode: string;
  /** @example 0 */
  preventedMatchId?: number;
  /** @example "1.200000" */
  preventedQuantity?: string;
}

export interface OrderResponseAck {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /**
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
}

export interface OrderResponseResult {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /**
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
  /** @example "0.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "10.00000000" */
  executedQty: string;
  /** @example "10.00000000" */
  cummulativeQuoteQty: string;
  /** @example "FILLED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "MARKET" */
  type: string;
  /** @example "SELL" */
  side: string;
  /**
   * @format int64
   * @example 1
   */
  strategyId?: number;
  /**
   * @format int64
   * @example 1000000
   */
  strategyType?: number;
  /**
   * @format int64
   * @example 1507725176595
   */
  workingTime: number;
  /** @example "NONE" */
  selfTradePreventionMode: string;
}

export interface OrderResponseFull {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /**
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
  /** @example "0.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "10.00000000" */
  executedQty: string;
  /** @example "10.00000000" */
  cummulativeQuoteQty: string;
  /** @example "FILLED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "MARKET" */
  type: string;
  /** @example "SELL" */
  side: string;
  /**
   * @format int64
   * @example 1
   */
  strategyId?: number;
  /**
   * @format int64
   * @example 1000000
   */
  strategyType?: number;
  /**
   * @format int64
   * @example 1507725176595
   */
  workingTime: number;
  /** @example "NONE" */
  selfTradePreventionMode: string;
  fills: {
    /** @example "4000.00000000" */
    price: string;
    /** @example "1.00000000" */
    qty: string;
    /** @example "4.00000000" */
    commission: string;
    /** @example "USDT" */
    commissionAsset: string;
  }[];
}

export interface MarginOrder {
  /** @example "LTCBTC" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /** @example "msXkySR3u5uYwpvRMFsi3u" */
  origClientOrderId: string;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /** @example "1.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "8.00000000" */
  executedQty: string;
  /** @example "8.00000000" */
  cummulativeQuoteQty: string;
  /** @example "CANCELED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "LIMIT" */
  type: string;
  /** @example "SELL" */
  side: string;
}

export interface MarginOrderDetail {
  /** @example "ZwfQzuDIGpceVhKW5DvCmO" */
  clientOrderId: string;
  /** @example "0.00000000" */
  cummulativeQuoteQty: string;
  /** @example "0.00000000" */
  executedQty: string;
  /** @example "0.00000000" */
  icebergQty: string;
  isWorking: boolean;
  /**
   * @format int64
   * @example 213205622
   */
  orderId: number;
  /** @example "0.30000000" */
  origQty: string;
  /** @example "0.00493630" */
  price: string;
  /** @example "SELL" */
  side: string;
  /** @example "NEW" */
  status: string;
  /** @example "0.00000000" */
  stopPrice: string;
  /** @example "BNBBTC" */
  symbol: string;
  isIsolated: boolean;
  /**
   * @format int64
   * @example 1562133008725
   */
  time: number;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "LIMIT" */
  type: string;
  /**
   * @format int64
   * @example 1562133008725
   */
  updateTime: number;
  /** @example "NONE" */
  selfTradePreventionMode: string;
}

export interface CanceledMarginOrderDetail {
  /** @example "BNBUSDT" */
  symbol: string;
  isIsolated: boolean;
  /** @example "E6APeyTJvkMvLMYMqu1KQ4" */
  origClientOrderId: string;
  /**
   * @format int64
   * @example 11
   */
  orderId: number;
  /**
   * @format int64
   * @example -1
   */
  orderListId: number;
  /** @example "pXLV6Hz6mprAcVYpVMTGgx" */
  clientOrderId: string;
  /** @example "0.089853" */
  price: string;
  /** @example "0.178622" */
  origQty: string;
  /** @example "0.000000" */
  executedQty: string;
  /** @example "0.000000" */
  cummulativeQuoteQty: string;
  /** @example "CANCELED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "LIMIT" */
  type: string;
  /** @example "BUY" */
  side: string;
}

export interface MarginOrderResponseAck {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  isIsolated: boolean;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
}

export interface MarginOrderResponseResult {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
  /** @example "1.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "10.00000000" */
  executedQty: string;
  /** @example "10.00000000" */
  cummulativeQuoteQty: string;
  /** @example "FILLED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "MARKET" */
  type: string;
  isIsolated: boolean;
  /** @example "SELL" */
  side: string;
}

export interface MarginOrderResponseFull {
  /** @example "BTCUSDT" */
  symbol: string;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /** @example "6gCrw2kRUAF9CvJDGP16IP" */
  clientOrderId: string;
  /**
   * @format int64
   * @example 1507725176595
   */
  transactTime: number;
  /** @example "1.00000000" */
  price: string;
  /** @example "10.00000000" */
  origQty: string;
  /** @example "10.00000000" */
  executedQty: string;
  /** @example "10.00000000" */
  cummulativeQuoteQty: string;
  /** @example "FILLED" */
  status: string;
  /** @example "GTC" */
  timeInForce: string;
  /** @example "MARKET" */
  type: string;
  /** @example "SELL" */
  side: string;
  /**
   * will not return if no margin trade happens
   * @format double
   * @example 5
   */
  marginBuyBorrowAmount: number;
  /**
   * will not return if no margin trade happens
   * @example "BTC"
   */
  marginBuyBorrowAsset: string;
  isIsolated: boolean;
  fills: {
    /** @example "4000.00000000" */
    price: string;
    /** @example "1.00000000" */
    qty: string;
    /** @example "4.00000000" */
    commission: string;
    /** @example "USDT" */
    commissionAsset: string;
  }[];
}

export interface MarginTrade {
  /** @example "0.00006000" */
  commission: string;
  /** @example "BTC" */
  commissionAsset: string;
  /**
   * @format int64
   * @example 28
   */
  id: number;
  isBestMatch: boolean;
  isBuyer: boolean;
  isMaker: boolean;
  /**
   * @format int64
   * @example 28
   */
  orderId: number;
  /** @example "0.02000000" */
  price: string;
  /** @example "1.02000000" */
  qty: string;
  /** @example "BNBBTC" */
  symbol: string;
  /** @example false */
  isIsolated: boolean;
  /**
   * @format int64
   * @example 1507725176595
   */
  time: number;
}

export interface MarginTransferDetails {
  rows: {
    /** @example "0.10000000" */
    amount: string;
    /** @example "BNB" */
    asset: string;
    /** @example "CONFIRMED" */
    status: string;
    /**
     * @format int64
     * @example 1566898617000
     */
    timestamp: number;
    /**
     * @format int64
     * @example 5240372201
     */
    txId: number;
    /** @example "ROLL_IN" */
    type?: string;
    /** @example "SPOT" */
    transFrom: string;
    /** @example "ISOLATED_MARGIN" */
    transTo: string;
  }[];
  /**
   * @format int32
   * @example 1
   */
  total: number;
}

export interface IsolatedMarginAccountInfo {
  assets: {
    baseAsset: {
      /** @example "BTC" */
      asset: string;
      borrowEnabled: boolean;
      /** @example "0.00000000" */
      borrowed: string;
      /** @example "0.00000000" */
      free: string;
      /** @example "0.00000000" */
      interest: string;
      /** @example "0.00000000" */
      locked: string;
      /** @example "0.00000000" */
      netAsset: string;
      /** @example "0.00000000" */
      netAssetOfBtc: string;
      repayEnabled: boolean;
      /** @example "0.00000000" */
      totalAsset: string;
    };
    quoteAsset: {
      /** @example "USDT" */
      asset: string;
      borrowEnabled: boolean;
      /** @example "0.00000000" */
      borrowed: string;
      /** @example "0.00000000" */
      free: string;
      /** @example "0.00000000" */
      interest: string;
      /** @example "0.00000000" */
      locked: string;
      /** @example "0.00000000" */
      netAsset: string;
      /** @example "0.00000000" */
      netAssetOfBtc: string;
      repayEnabled: boolean;
      /** @example "0.00000000" */
      totalAsset: string;
    };
    /** @example "BTCUSDT" */
    symbol: string;
    isolatedCreated: boolean;
    /** true-enabled, false-disabled */
    enabled: boolean;
    /** @example "0.00000000" */
    marginLevel: string;
    /**
     * "EXCESSIVE", "NORMAL", "MARGIN_CALL", "PRE_LIQUIDATION", "FORCE_LIQUIDATION"
     * @example "EXCESSIVE"
     */
    marginLevelStatus: string;
    /** @example "0.00000000" */
    marginRatio: string;
    /** @example "10000.00000000" */
    indexPrice: string;
    /** @example "1000.00000000" */
    liquidatePrice: string;
    /** @example "1.00000000" */
    liquidateRate: string;
    tradeEnabled: boolean;
  }[];
  /** @example "0.00000000" */
  totalAssetOfBtc: string;
  /** @example "0.00000000" */
  totalLiabilityOfBtc: string;
  /** @example "0.00000000" */
  totalNetAssetOfBtc: string;
}

export type BookTickerList = BookTicker[];

export interface BookTicker {
  /** @example "BNBBTC" */
  symbol: string;
  /** @example "16.36240000" */
  bidPrice: string;
  /** @example "256.78000000" */
  bidQty: string;
  /** @example "16.36450000" */
  askPrice: string;
  /** @example "12.56000000" */
  askQty: string;
}

export type PriceTickerList = PriceTicker[];

export interface PriceTicker {
  /** @example "BNBBTC" */
  symbol: string;
  /** @example "0.17160000" */
  price: string;
}

export interface RepaymentInfo {
  /** @example "BUSD" */
  loanCoin: string;
  /** @example "100.5" */
  remainingPrincipal: string;
  /** @example "0" */
  remainingInterest: string;
  /** @example "BNB" */
  collateralCoin: string;
  /** @example "5.253" */
  remainingCollateral: string;
  /** @example "0.25" */
  currentLTV: string;
  /** @example "Repaying" */
  repayStatus: string;
}

export interface RepaymentInfo2 {
  /** @example "BUSD" */
  loanCoin: string;
  /** @example "BNB" */
  collateralCoin: string;
  /** @example "Repaying" */
  repayStatus: string;
}

export type TickerList = Ticker[];

export interface Ticker {
  /** @example "BNBBTC" */
  symbol: string;
  /** @example "0.17160000" */
  priceChange: string;
  /** @example "1.060" */
  priceChangePercent: string;
  /** @example "16.35920000" */
  prevClosePrice: string;
  /** @example "27.84000000" */
  lastPrice: string;
  /** @example "16.34488284" */
  bidPrice: string;
  /** @example "16.34488284" */
  bidQty: string;
  /** @example "16.35920000" */
  askPrice: string;
  /** @example "25.06000000" */
  askQty: string;
  /** @example "16.18760000" */
  openPrice: string;
  /** @example "16.55000000" */
  highPrice: string;
  /** @example "16.16940000" */
  lowPrice: string;
  /** @example "1678279.95000000" */
  volume: string;
  /** @example "27431289.14792300" */
  quoteVolume: string;
  /**
   * @format int64
   * @example 1592808788637
   */
  openTime: number;
  /**
   * @format int64
   * @example 1592895188637
   */
  closeTime: number;
  /**
   * @format int64
   * @example 62683296
   */
  firstId: number;
  /**
   * @format int64
   * @example 62739253
   */
  lastId: number;
  /**
   * @format int64
   * @example 55958
   */
  count: number;
}

export interface MyTrade {
  /** @example "BNBBTC" */
  symbol: string;
  /**
   * Trade id
   * @format int64
   * @example 28457
   */
  id: number;
  /**
   * @format int64
   * @example 100234
   */
  orderId: number;
  /**
   * @format int64
   * @example -1
   */
  orderListId: number;
  /**
   * Price
   * @example "4.00000100"
   */
  price: string;
  /**
   * Amount of base asset
   * @example "12.00000000"
   */
  qty: string;
  /**
   * Amount of quote asset
   * @example "48.000012"
   */
  quoteQty: string;
  /** @example "10.10000000" */
  commission: string;
  /** @example "BNB" */
  commissionAsset: string;
  /**
   * Trade timestamp
   * @format int64
   * @example 1499865549590
   */
  time: number;
  /** @example false */
  isBuyer: boolean;
  /** @example false */
  isMaker: boolean;
  isBestMatch: boolean;
}

export interface Transaction {
  /**
   * transaction id
   * @format int64
   * @example 345196462
   */
  tranId: number;
}

export interface Trade {
  /**
   * trade id
   * @format int64
   * @example 345196462
   */
  id: number;
  /**
   * price
   * @example "9638.99000000"
   */
  price: string;
  /**
   * amount of base asset
   * @example "0.02077200"
   */
  qty: string;
  /**
   * amount of quote asset
   * @example "0.02077200"
   */
  quoteQty: string;
  /**
   * Trade executed timestamp, as same as `T` in the stream
   * @format int64
   * @example 1592887772684
   */
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface AggTrade {
  /**
   * Aggregate tradeId
   * @format int64
   * @example 26129
   */
  a: number;
  /**
   * Price
   * @example "0.01633102"
   */
  p: string;
  /**
   * Quantity
   * @example "4.70443515"
   */
  q: string;
  /**
   * First tradeId
   * @format int64
   * @example 27781
   */
  f: number;
  /**
   * Last tradeId
   * @format int64
   * @example 27781
   */
  l: number;
  /**
   * Timestamp
   * @example 1498793709153
   */
  T: boolean;
  /** Was the buyer the maker? */
  m: boolean;
  /** Was the trade the best price match? */
  M: boolean;
}

export interface BnbBurnStatus {
  spotBNBBurn: boolean;
  /** @example false */
  interestBNBBurn: boolean;
}

export interface SnapshotSpot {
  /**
   * @format int64
   * @example 200
   */
  code: number;
  /** @example "" */
  msg: string;
  snapshotVos: {
    data: {
      balances: {
        /** @example "BTC" */
        asset: string;
        /** @example "0.2" */
        free: string;
        /** @example "0.001" */
        locked: string;
      }[];
      /** @example "0.09905021" */
      totalAssetOfBtc: string;
    };
    /** @example "spot" */
    type: string;
    /**
     * @format int64
     * @example 1576281599000
     */
    updateTime: number;
  }[];
}

export interface SnapshotMargin {
  /**
   * @format int64
   * @example 200
   */
  code: number;
  /** @example "" */
  msg: string;
  snapshotVos: {
    data: {
      /** @example "2748.02909813" */
      marginLevel: string;
      /** @example "0.00274803" */
      totalAssetOfBtc: string;
      /** @example "0.00000100" */
      totalLiabilityOfBtc: string;
      /** @example "0.00274750" */
      totalNetAssetOfBtc: string;
      userAssets: {
        /** @example "XRP" */
        asset: string;
        /** @example "0.00000000" */
        borrowed: string;
        /** @example "1.00000000" */
        free: string;
        /** @example "0.00000000" */
        interest: string;
        /** @example "0.00000000" */
        locked: string;
        /** @example "1.00000000" */
        netAsset: string;
      }[];
    };
    /** @example "margin" */
    type: string;
    /**
     * @format int64
     * @example 1576281599000
     */
    updateTime: number;
  }[];
}

export interface SnapshotFutures {
  /**
   * @format int64
   * @example 200
   */
  code: number;
  /** @example "" */
  msg: string;
  snapshotVos: {
    data: {
      assets: {
        /** @example "USDT" */
        asset: string;
        /** @example "118.99782335" */
        marginBalance: string;
        /** @example "120.23811389" */
        walletBalance: string;
      }[];
      position: {
        /** @example "7130.41000000" */
        entryPrice: string;
        /** @example "7257.66239673" */
        markPrice: string;
        /** @example "0.01000000" */
        positionAmt: string;
        /** @example "BTCUSDT" */
        symbol: string;
        /** @example "1.24029054" */
        unRealizedProfit: string;
      }[];
    };
    /** @example "futures" */
    type: string;
    /**
     * @format int64
     * @example 1576281599000
     */
    updateTime: number;
  }[];
}

export interface SubAccountUSDTFuturesDetails {
  futureAccountResp: {
    /** @example "abc@test.com" */
    email: string;
    assets: {
      /** @example "USDT" */
      asset: string;
      /** @example "0.00000000" */
      initialMargin: string;
      /** @example "0.00000000" */
      maintenanceMargin: string;
      /** @example "0.88308000" */
      marginBalance: string;
      /** @example "0.88308000" */
      maxWithdrawAmount: string;
      /** @example "0.00000000" */
      openOrderInitialMargin: string;
      /** @example "0.00000000" */
      positionInitialMargin: string;
      /** @example "0.00000000" */
      unrealizedProfit: string;
      /** @example "0.88308000" */
      walletBalance: string;
    }[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    /**
     * @format int64
     * @example 2
     */
    feeTier: number;
    /** @example "0.88308000" */
    maxWithdrawAmount: string;
    /** @example "0.00000000" */
    totalInitialMargin: string;
    /** @example "0.00000000" */
    totalMaintenanceMargin: string;
    /** @example "0.88308000" */
    totalMarginBalance: string;
    /** @example "0.00000000" */
    totalOpenOrderInitialMargin: string;
    /** @example "0.00000000" */
    totalPositionInitialMargin: string;
    /** @example "0.00000000" */
    totalUnrealizedProfit: string;
    /** @example "0.88308000" */
    totalWalletBalance: string;
    /**
     * @format int64
     * @example 1576756674610
     */
    updateTime: number;
  };
}

export interface SubAccountCOINFuturesDetails {
  /** @example "abc@test.com" */
  email: string;
  assets: {
    /** @example "BTC" */
    asset: string;
    /** @example "0.00000000" */
    initialMargin: string;
    /** @example "0.00000000" */
    maintenanceMargin: string;
    /** @example "0.88308000" */
    marginBalance: string;
    /** @example "0.88308000" */
    maxWithdrawAmount: string;
    /** @example "0.00000000" */
    openOrderInitialMargin: string;
    /** @example "0.00000000" */
    positionInitialMargin: string;
    /** @example "0.00000000" */
    unrealizedProfit: string;
    /** @example "0.88308000" */
    walletBalance: string;
  }[];
  canDeposit: boolean;
  canTrade: boolean;
  canWithdraw: boolean;
  /**
   * @format int64
   * @example 2
   */
  feeTier: number;
  /**
   * @format int64
   * @example 1598959682001
   */
  updateTime: number;
}

export interface SubAccountUSDTFuturesSummary {
  futureAccountSummaryResp: {
    /** @example "9.83137400" */
    totalInitialMargin: string;
    /** @example "0.41568700" */
    totalMaintenanceMargin: string;
    /** @example "23.03235621" */
    totalMarginBalance: string;
    /** @example "9.00000000" */
    totalOpenOrderInitialMargin: string;
    /** @example "0.83137400" */
    totalPositionInitialMargin: string;
    /** @example "0.03219710" */
    totalUnrealizedProfit: string;
    /** @example "22.15879444" */
    totalWalletBalance: string;
    /**
     * The sum of BUSD and USDT
     * @example "USD"
     */
    asset: string;
    subAccountList: {
      /** @example "123@test.com" */
      email: string;
      /** @example "9.00000000" */
      totalInitialMargin: string;
      /** @example "0.00000000" */
      totalMaintenanceMargin: string;
      /** @example "22.12659734" */
      totalMarginBalance: string;
      /** @example "9.00000000" */
      totalOpenOrderInitialMargin: string;
      /** @example "0.00000000" */
      totalPositionInitialMargin: string;
      /** @example "0.00000000" */
      totalUnrealizedProfit: string;
      /** @example "22.12659734" */
      totalWalletBalance: string;
      /**
       * The sum of BUSD and USDT
       * @example "USD"
       */
      asset: string;
    }[];
  };
}

export interface SubAccountCOINFuturesSummary {
  deliveryAccountSummaryResp: {
    /** @example 25.03221121 */
    totalMarginBalanceOfBTC: string;
    /** @example 0.1223341 */
    totalUnrealizedProfitOfBTC: string;
    /** @example 22.15879444 */
    totalWalletBalanceOfBTC: string;
    /** @example "BTC" */
    asset: string;
    subAccountList: {
      /** @example "123@test.com" */
      email: string;
      /** @example 22.12659734 */
      totalMarginBalance: string;
      /** @example 0 */
      totalUnrealizedProfit: string;
      /** @example 22.12659734 */
      totalWalletBalance: string;
      /** @example "BTC" */
      asset: string;
    }[];
  };
}

export interface SubAccountUSDTFuturesPositionRisk {
  futurePositionRiskVos: {
    /** @example "9975.12000" */
    entryPrice: string;
    /**
     * current initial leverage
     * @example "50"
     */
    leverage: string;
    /**
     * notional value limit of current initial leverage
     * @example "1000000"
     */
    maxNotional: string;
    /** @example "7963.54" */
    liquidationPrice: string;
    /** @example "9973.50770517" */
    markPrice: string;
    /** @example "0.010" */
    positionAmount: string;
    /** @example "BTCUSDT" */
    symbol: string;
    /** @example "-0.01612295" */
    unrealizedProfit: string;
  }[];
}

export interface SubAccountCOINFuturesPositionRisk {
  deliveryPositionRiskVos: {
    /** @example "9975.12000" */
    entryPrice: string;
    /** @example "9973.50770517" */
    markPrice: string;
    /** @example "20" */
    leverage: string;
    /** @example false */
    isolated: string;
    /** @example "9973.50770517" */
    isolatedWallet: string;
    /** @example "0.00000000" */
    isolatedMargin: string;
    /** @example "false" */
    isAutoAddMargin: string;
    /** @example "BOTH" */
    positionSide: string;
    /** @example "1.230" */
    positionAmount: string;
    /** @example "BTCUSD_201225" */
    symbol: string;
    /** @example "-0.01612295" */
    unrealizedProfit: string;
  }[];
}

export interface BswapAddLiquidityPreviewCombination {
  /** @example "USDT" */
  quoteAsset: string;
  /** @example "BUSD" */
  baseAsset: string;
  /**
   * @format int64
   * @example 300000
   */
  quoteAmt: number;
  /**
   * @format int64
   * @example 299975
   */
  baseAmt: number;
  /**
   * @format double
   * @example 1.00008334
   */
  price: number;
  /**
   * @format double
   * @example 1.23
   */
  share: number;
}

export interface BswapAddLiquidityPreviewSingle {
  /** @example "USDT" */
  quoteAsset: string;
  /**
   * @format int64
   * @example 300000
   */
  quoteAmt: number;
  /**
   * @format double
   * @example 1.00008334
   */
  price: number;
  /**
   * @format double
   * @example 1.23
   */
  share: number;
  /**
   * @format double
   * @example 0.00007245
   */
  slippage: number;
  /**
   * @format double
   * @example 120
   */
  fee: number;
}

export interface BswapRmvLiquidityPreviewCombination {
  /** @example "USDT" */
  quoteAsset: string;
  /** @example "BUSD" */
  baseAsset: string;
  /**
   * @format int64
   * @example 300000
   */
  quoteAmt: number;
  /**
   * @format int64
   * @example 299975
   */
  baseAmt: number;
  /**
   * @format double
   * @example 1.00008334
   */
  price: number;
}

export interface BswapRmvLiquidityPreviewSingle {
  /** @example "USDT" */
  quoteAsset: string;
  /**
   * @format int64
   * @example 300000
   */
  quoteAmt: number;
  /**
   * @format double
   * @example 1.00008334
   */
  price: number;
  /**
   * @format double
   * @example 0.00007245
   */
  slippage: number;
  /**
   * @format double
   * @example 120
   */
  fee: number;
}

export interface Error {
  /**
   * Error code
   * @format int64
   */
  code: number;
  /**
   * Error message
   * @example "error message"
   */
  msg: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.binance.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Binance Public Spot API
 * @version 1.0
 * @baseUrl https://api.binance.com
 *
 * OpenAPI Specifications for the Binance Public Spot API
 *
 * API documents:
 *   - [https://github.com/binance/binance-spot-api-docs](https://github.com/binance/binance-spot-api-docs)
 *   - [https://binance-docs.github.io/apidocs/spot/en](https://binance-docs.github.io/apidocs/spot/en)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Test connectivity to the Rest API. Weight(IP): 1
     *
     * @tags Market
     * @name V3PingList
     * @summary Test Connectivity
     * @request GET:/api/v3/ping
     */
    v3PingList: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/v3/ping`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Test connectivity to the Rest API and get the current server time. Weight(IP): 1
     *
     * @tags Market
     * @name V3TimeList
     * @summary Check Server Time
     * @request GET:/api/v3/time
     */
    v3TimeList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1499827319559
           */
          serverTime: number;
        },
        any
      >({
        path: `/api/v3/time`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Current exchange trading rules and symbol information - If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error. Weight(IP): 10
     *
     * @tags Market
     * @name V3ExchangeInfoList
     * @summary Exchange Information
     * @request GET:/api/v3/exchangeInfo
     */
    v3ExchangeInfoList: (
      query?: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "["BTCUSDT","BNBBTC"]" */
        symbols?: string;
        /** @example "'SPOT' or ['MARGIN','LEVERAGED']" */
        permissions?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "UTC" */
          timezone: string;
          /**
           * @format int64
           * @example 1592882214236
           */
          serverTime: number;
          rateLimits: {
            /** @example "REQUEST_WEIGHT" */
            rateLimitType: string;
            /** @example "MINUTE" */
            interval: string;
            /**
             * @format int32
             * @example 1
             */
            intervalNum: number;
            /**
             * @format int32
             * @example 1200
             */
            limit: number;
          }[];
          exchangeFilters: object[];
          symbols: {
            /** @example "ETHBTC" */
            symbol: string;
            /** @example "TRADING" */
            status: string;
            /** @example "ETH" */
            baseAsset: string;
            /**
             * @format int32
             * @example 8
             */
            baseAssetPrecision: number;
            /** @example "BTC" */
            quoteAsset: string;
            /**
             * @format int32
             * @example 8
             */
            quoteAssetPrecision: number;
            /**
             * @format int32
             * @example 8
             */
            baseCommissionPrecision: number;
            /**
             * @format int32
             * @example 8
             */
            quoteCommissionPrecision: number;
            orderTypes: string[];
            icebergAllowed: boolean;
            ocoAllowed: boolean;
            quoteOrderQtyMarketAllowed: boolean;
            /** @example false */
            allowTrailingStop: boolean;
            isSpotTradingAllowed: boolean;
            isMarginTradingAllowed: boolean;
            filters: {
              /** @example "PRICE_FILTER" */
              filterType: string;
              /** @example "0.00000100" */
              minPrice: string;
              /** @example "100000.00000000" */
              maxPrice: string;
              /** @example "0.00000100" */
              tickSize: string;
            }[];
            permissions: string[];
            /** @example "NONE" */
            defaultSelfTradePreventionMode: string;
            allowedSelfTradePreventionModes: string[];
          }[];
        },
        Error
      >({
        path: `/api/v3/exchangeInfo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description | Limit               | Weight(IP)  | |---------------------|-------------| | 1-100               | 5           | | 101-500             | 25          | | 501-1000            | 50          | | 1001-5000           | 250         |
     *
     * @tags Market
     * @name V3DepthList
     * @summary Order Book
     * @request GET:/api/v3/depth
     */
    v3DepthList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * If limit > 5000, then the response will truncate to 5000
         * @format int32
         * @max 5000
         * @default 100
         * @example 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          lastUpdateId: number;
          bids: string[][];
          asks: string[][];
        },
        Error
      >({
        path: `/api/v3/depth`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get recent trades. Weight(IP): 10
     *
     * @tags Market
     * @name V3TradesList
     * @summary Recent Trades List
     * @request GET:/api/v3/trades
     */
    v3TradesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Trade[], Error>({
        path: `/api/v3/trades`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get older market trades. Weight(IP): 10
     *
     * @tags Market
     * @name V3HistoricalTradesList
     * @summary Old Trade Lookup
     * @request GET:/api/v3/historicalTrades
     */
    v3HistoricalTradesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * Trade id to fetch from. Default gets most recent trades.
         * @format int64
         */
        fromId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Trade[], any>({
        path: `/api/v3/historicalTrades`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated. - If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned. - Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid: p = '0' // price q = '0' // qty f = -1 // ﬁrst_trade_id l = -1 // last_trade_id Weight(IP): 2
     *
     * @tags Market
     * @name V3AggTradesList
     * @summary Compressed/Aggregate Trades List
     * @request GET:/api/v3/aggTrades
     */
    v3AggTradesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Trade id to fetch from. Default gets most recent trades.
         * @format int64
         */
        fromId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AggTrade[], Error>({
        path: `/api/v3/aggTrades`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time. - If `startTime` and `endTime` are not sent, the most recent klines are returned. Weight(IP): 2
     *
     * @tags Market
     * @name V3KlinesList
     * @summary Kline/Candlestick Data
     * @request GET:/api/v3/klines
     */
    v3KlinesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * kline intervals
         * @example ""1m""
         */
        interval:
          | "1s"
          | "1m"
          | "3m"
          | "5m"
          | "15m"
          | "30m"
          | "1h"
          | "2h"
          | "4h"
          | "6h"
          | "8h"
          | "12h"
          | "1d"
          | "3d"
          | "1w"
          | "1M";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<(number | string)[][], Error>({
        path: `/api/v3/klines`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The request is similar to klines having the same parameters and response. uiKlines return modified kline data, optimized for presentation of candlestick charts. Weight(IP): 2
     *
     * @tags Market
     * @name V3UiKlinesList
     * @summary UIKlines
     * @request GET:/api/v3/uiKlines
     */
    v3UiKlinesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * kline intervals
         * @example ""1m""
         */
        interval:
          | "1s"
          | "1m"
          | "3m"
          | "5m"
          | "15m"
          | "30m"
          | "1h"
          | "2h"
          | "4h"
          | "6h"
          | "8h"
          | "12h"
          | "1d"
          | "3d"
          | "1w"
          | "1M";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<(number | string)[][], Error>({
        path: `/api/v3/uiKlines`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Current average price for a symbol. Weight(IP): 2
     *
     * @tags Market
     * @name V3AvgPriceList
     * @summary Current Average Price
     * @request GET:/api/v3/avgPrice
     */
    v3AvgPriceList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 5
           */
          mins: number;
          /** @example "9.35751834" */
          price: string;
        },
        Error
      >({
        path: `/api/v3/avgPrice`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 24 hour rolling window price change statistics. Careful when accessing this with no symbol. - If the symbol is not sent, tickers for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `80` when the symbol parameter is omitted;
     *
     * @tags Market
     * @name V3Ticker24HrList
     * @summary 24hr Ticker Price Change Statistics
     * @request GET:/api/v3/ticker/24hr
     */
    v3Ticker24HrList: (
      query?: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "["BTCUSDT","BNBBTC"]" */
        symbols?: string;
        /**
         * Supported values: FULL or MINI.
         * If none provided, the default is FULL
         */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Ticker | TickerList, Error>({
        path: `/api/v3/ticker/24hr`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Latest price for a symbol or symbols. - If the symbol is not sent, prices for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `4` when the symbol parameter is omitted;
     *
     * @tags Market
     * @name V3TickerPriceList
     * @summary Symbol Price Ticker
     * @request GET:/api/v3/ticker/price
     */
    v3TickerPriceList: (
      query?: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "["BTCUSDT","BNBBTC"]" */
        symbols?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PriceTicker | PriceTickerList, Error>({
        path: `/api/v3/ticker/price`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Best price/qty on the order book for a symbol or symbols. - If the symbol is not sent, bookTickers for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `4` when the symbol parameter is omitted;
     *
     * @tags Market
     * @name V3TickerBookTickerList
     * @summary Symbol Order Book Ticker
     * @request GET:/api/v3/ticker/bookTicker
     */
    v3TickerBookTickerList: (
      query?: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "["BTCUSDT","BNBBTC"]" */
        symbols?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BookTicker | BookTickerList, Error>({
        path: `/api/v3/ticker/bookTicker`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The window used to compute statistics is typically slightly wider than requested windowSize. openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested. E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC) Weight(IP): 4 for each requested symbol regardless of windowSize. The weight for this request will cap at 200 once the number of symbols in the request is more than 50.
     *
     * @tags Market
     * @name V3TickerList
     * @summary Rolling window price change statistics
     * @request GET:/api/v3/ticker
     */
    v3TickerList: (
      query?: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "["BTCUSDT","BNBBTC"]" */
        symbols?: string;
        /**
         * Defaults to 1d if no parameter provided.
         * Supported windowSize values:
         * 1m,2m....59m for minutes
         * 1h, 2h....23h - for hours
         * 1d...7d - for days.
         *
         * Units cannot be combined (e.g. 1d2h is not allowed)
         */
        windowSize?: string;
        /**
         * Supported values: FULL or MINI.
         * If none provided, the default is FULL
         */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BNBBTC" */
          symbol: string;
          /** @example "-8.00000000" */
          priceChange: string;
          /** @example "-88.889" */
          priceChangePercent: string;
          /** @example "2.60427807" */
          weightedAvgPrice: string;
          /** @example "9.00000000" */
          openPrice: string;
          /** @example "9.00000000" */
          highPrice: string;
          /** @example "1.00000000" */
          lowPrice: string;
          /** @example "1.00000000" */
          lastPrice: string;
          /** @example "187.00000000" */
          volume: string;
          /** @example "487.00000000" */
          quoteVolume: string;
          /**
           * @format int64
           * @example 1641859200000
           */
          openTime: number;
          /**
           * @format int64
           * @example 1642031999999
           */
          closeTime: number;
          /**
           * @format int64
           * @example 0
           */
          firstId: number;
          /**
           * @format int64
           * @example 60
           */
          lastId: number;
          /**
           * @format int64
           * @example 61
           */
          count: number;
        },
        Error
      >({
        path: `/api/v3/ticker`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Test new order creation and signature/recvWindow long. Creates and validates a new order but does not send it into the matching engine. Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderTestCreate
     * @summary Test New Order (TRADE)
     * @request POST:/api/v3/order/test
     * @secure
     */
    v3OrderTestCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /**
         * Order quantity
         * @format double
         * @example 1
         */
        quantity?: number;
        /**
         * Quote quantity
         * @format double
         */
        quoteOrderQty?: number;
        /**
         * Order price
         * @format double
         * @example 219
         */
        price?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @format int64 */
        strategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        strategyType?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         * @example 221.01
         */
        stopPrice?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         */
        trailingDelta?: number;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/api/v3/order/test`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Check an order's status. - Either `orderId` or `origClientOrderId` must be sent. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time. Weight(IP): 4
     *
     * @tags Trade
     * @name V3OrderList
     * @summary Query Order (USER_DATA)
     * @request GET:/api/v3/order
     * @secure
     */
    v3OrderList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderDetails, Error>({
        path: `/api/v3/order`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send in a new order. - `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker. - `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached. - Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`. - Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`. - `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price. - `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`. - `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`. - same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected. Trigger order price rules against market price for both `MARKET` and `LIMIT` versions: - Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL` - Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY` Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderCreate
     * @summary New Order (TRADE)
     * @request POST:/api/v3/order
     * @secure
     */
    v3OrderCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /**
         * Order quantity
         * @format double
         * @example 1
         */
        quantity?: number;
        /**
         * Quote quantity
         * @format double
         */
        quoteOrderQty?: number;
        /**
         * Order price
         * @format double
         * @example 219
         */
        price?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @format int64 */
        strategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        strategyType?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         * @example 221.01
         */
        stopPrice?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         */
        trailingDelta?: number;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderResponseAck | OrderResponseResult | OrderResponseFull, Error>({
        path: `/api/v3/order`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an active order. Either `orderId` or `origClientOrderId` must be sent. Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderDelete
     * @summary Cancel Order (TRADE)
     * @request DELETE:/api/v3/order
     * @secure
     */
    v3OrderDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @example "ONLY_NEW" */
        cancelRestrictions?: "ONLY_NEW" | "ONLY_PARTIALLY_FILLED";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Order, Error>({
        path: `/api/v3/order`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancels an existing order and places a new order on the same symbol. Filters and Order Count are evaluated before the processing of the cancellation and order placement occurs. A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1. Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderCancelReplaceCreate
     * @summary Cancel an Existing Order and Send a New Order (Trade)
     * @request POST:/api/v3/order/cancelReplace
     * @secure
     */
    v3OrderCancelReplaceCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * - `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted.
         * - `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.
         * @example "STOP_ON_FAILURE"
         */
        cancelReplaceMode: string;
        /** @example "ONLY_NEW" */
        cancelRestrictions?: "ONLY_NEW" | "ONLY_PARTIALLY_FILLED";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /**
         * Order quantity
         * @format double
         * @example 1
         */
        quantity?: number;
        /**
         * Quote quantity
         * @format double
         */
        quoteOrderQty?: number;
        /**
         * Order price
         * @format double
         * @example 219
         */
        price?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        cancelNewClientOrderId?: string;
        /** Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence. */
        cancelOrigClientOrderId?: string;
        /**
         * Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.
         * @format int64
         * @example 12
         */
        cancelOrderId?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @format int64 */
        strategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        strategyType?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         * @example 221.01
         */
        stopPrice?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         */
        trailingDelta?: number;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "SUCCESS" */
          cancelResult: string;
          /** @example "SUCCESS" */
          newOrderResult: string;
          cancelResponse: {
            /** @example "BTCUSDT" */
            symbol: string;
            /** @example "DnLo3vTAQcjha43lAZhZ0y" */
            origClientOrderId: string;
            /**
             * @format int64
             * @example 9
             */
            orderId: number;
            /**
             * @format int64
             * @example -1
             */
            orderListId: number;
            /** @example "osxN3JXAtJvKvCqGeMWMVR" */
            clientOrderId: string;
            /** @example "0.01000000" */
            price: string;
            /** @example "0.000100" */
            origQty: string;
            /** @example "0.00000000" */
            executedQty: string;
            /** @example "0.00000000" */
            cummulativeQuoteQty: string;
            /** @example "CANCELED" */
            status: string;
            /** @example "GTC" */
            timeInForce: string;
            /** @example "LIMIT" */
            type: string;
            /** @example "SELL" */
            side: string;
            /** @example "NONE" */
            selfTradePreventionMode: string;
            /**
             * @format int64
             * @example 1507725176595
             */
            transactTime?: number;
          };
          newOrderResponse: {
            /** @example "BTCUSDT" */
            symbol: string;
            /**
             * @format int64
             * @example 10
             */
            orderId: number;
            /**
             * @format int64
             * @example -1
             */
            orderListId: number;
            /** @example "wOceeeOzNORyLiQfw7jd8S" */
            clientOrderId: string;
            /**
             * @format int64
             * @example 1652928801803
             */
            transactTime: number;
            /** @example "0.02000000" */
            price: string;
            /** @example "0.040000" */
            origQty: string;
            /** @example "0.00000000" */
            executedQty: string;
            /** @example "0.00000000" */
            cummulativeQuoteQty: string;
            /** @example "NEW" */
            status: string;
            /** @example "GTC" */
            timeInForce: string;
            /** @example "LIMIT" */
            type: string;
            /** @example "BUY" */
            side: string;
            /**
             * @format int64
             * @example 1669277163808
             */
            workingTime: number;
            /** @maxItems 0 */
            fills: string[];
            /** @example "NONE" */
            selfTradePreventionMode: string;
          };
        },
        Error
      >({
        path: `/api/v3/order/cancelReplace`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all open orders on a symbol. Careful when accessing this with no symbol. Weight(IP): - `6` for a single symbol; - `80` when the symbol parameter is omitted;
     *
     * @tags Trade
     * @name V3OpenOrdersList
     * @summary Current Open Orders (USER_DATA)
     * @request GET:/api/v3/openOrders
     * @secure
     */
    v3OpenOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderDetails[], Error>({
        path: `/api/v3/openOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancels all active orders on a symbol. This includes OCO orders. Weight(IP): 1
     *
     * @tags Trade
     * @name V3OpenOrdersDelete
     * @summary Cancel all Open Orders on a Symbol (TRADE)
     * @request DELETE:/api/v3/openOrders
     * @secure
     */
    v3OpenOrdersDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<(Order | OcoOrder)[], Error>({
        path: `/api/v3/openOrders`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all account orders; active, canceled, or filled.. - If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time. - If `startTime` and/or `endTime` provided, `orderId` is not required Weight(IP): 20
     *
     * @tags Trade
     * @name V3AllOrdersList
     * @summary All Orders (USER_DATA)
     * @request GET:/api/v3/allOrders
     * @secure
     */
    v3AllOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderDetails[], Error>({
        path: `/api/v3/allOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send in a new OCO - Price Restrictions: - `SELL`: Limit Price > Last Price > Stop Price - `BUY`: Limit Price < Last Price < Stop Price - Quantity Restrictions: - Both legs must have the same quantity - `ICEBERG` quantities however do not have to be the same - Order Rate Limit - `OCO` counts as 2 orders against the order rate limit. Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderOcoCreate
     * @summary New OCO (TRADE)
     * @request POST:/api/v3/order/oco
     * @secure
     */
    v3OrderOcoCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** A unique Id for the entire orderList */
        listClientOrderId?: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /** A unique Id for the limit order */
        limitClientOrderId?: string;
        /** @format int64 */
        limitStrategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        limitStrategyType?: number;
        /**
         * Order price
         * @format double
         * @example 218
         */
        price: number;
        /** @format double */
        limitIcebergQty?: number;
        /** @format double */
        trailingDelta?: number;
        /** A unique Id for the stop loss/stop loss limit leg */
        stopClientOrderId?: string;
        /**
         * @format double
         * @example 220
         */
        stopPrice: number;
        /** @format int64 */
        stopStrategyId?: number;
        /** @format int64 */
        stopStrategyType?: number;
        /**
         * If provided, stopLimitTimeInForce is required.
         * @format double
         */
        stopLimitPrice?: number;
        /** @format double */
        stopIcebergQty?: number;
        stopLimitTimeInForce?: "GTC" | "FOK" | "IOC";
        /** Set the response JSON. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "JYVpp3F0f5CAG15DhtrqLp" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1563417480525
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
          /** @example [{"symbol":"LTCBTC","orderId":2,"orderListId":0,"clientOrderId":"Kk7sqHb9J6mJWTMDVW7Vos","transactTime":1563417480525,"price":"0.000000","origQty":"0.624363","executedQty":"0.000000","cummulativeQuoteQty":"0.000000","status":"NEW","timeInForce":"GTC","type":"STOP_LOSS","side":"BUY","stopPrice":"0.960664","workingTime":-1,"selfTradePreventionMode":"NONE"},{"symbol":"LTCBTC","orderId":3,"orderListId":0,"clientOrderId":"xTXKaGYd4bluPVp78IVRvl","transactTime":1563417480525,"price":"0.036435","origQty":"0.624363","executedQty":"0.000000","cummulativeQuoteQty":"0.000000","status":"NEW","timeInForce":"GTC","type":"LIMIT_MAKER","side":"BUY","workingTime":1563417480525,"selfTradePreventionMode":"NONE"}] */
          orderReports: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            /** @format int64 */
            orderListId: number;
            clientOrderId: string;
            /** @format int64 */
            transactTime: number;
            price: string;
            origQty: string;
            executedQty: string;
            cummulativeQuoteQty: string;
            status: string;
            timeInForce: string;
            type: string;
            side: string;
            stopPrice: string;
            workingTime: string;
            selfTradePreventionMode: string;
          }[];
        },
        Error
      >({
        path: `/api/v3/order/oco`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific OCO based on provided optional parameters Weight(IP): 4
     *
     * @tags Trade
     * @name V3OrderListList
     * @summary Query OCO (USER_DATA)
     * @request GET:/api/v3/orderList
     * @secure
     */
    v3OrderListList: (
      query: {
        /**
         * Order list id
         * @format int64
         */
        orderListId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 27
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "h2USkA5YQpaXHPIrkd96xE" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565245656253
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        },
        Error
      >({
        path: `/api/v3/orderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an entire Order List Canceling an individual leg will cancel the entire OCO Weight(IP): 1
     *
     * @tags Trade
     * @name V3OrderListDelete
     * @summary Cancel OCO (TRADE)
     * @request DELETE:/api/v3/orderList
     * @secure
     */
    v3OrderListDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * Order list id
         * @format int64
         */
        orderListId?: number;
        /** A unique Id for the entire orderList */
        listClientOrderId?: string;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OcoOrder, Error>({
        path: `/api/v3/orderList`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all OCO based on provided optional parameters Weight(IP): 20
     *
     * @tags Trade
     * @name V3AllOrderListList
     * @summary Query all OCO (USER_DATA)
     * @request GET:/api/v3/allOrderList
     * @secure
     */
    v3AllOrderListList: (
      query: {
        /**
         * Trade id to fetch from. Default gets most recent trades.
         * @format int64
         */
        fromId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 29
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "amEEAXryFzFwYF1FeRpUoZ" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565245913483
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          isIsolated: boolean;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        }[],
        Error
      >({
        path: `/api/v3/allOrderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 6
     *
     * @tags Trade
     * @name V3OpenOrderListList
     * @summary Query Open OCO (USER_DATA)
     * @request GET:/api/v3/openOrderList
     * @secure
     */
    v3OpenOrderListList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 31
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "wuB13fmulKj3YjdqWEcsnp" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565246080644
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        }[],
        Error
      >({
        path: `/api/v3/openOrderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 6
     *
     * @tags Trade
     * @name V3SorOrderCreate
     * @summary New order using SOR (TRADE)
     * @request POST:/api/v3/sor/order
     * @secure
     */
    v3SorOrderCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /** @format double */
        price?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @format int64 */
        strategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        strategyType?: number;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol: string;
          /**
           * @format int64
           * @example 2
           */
          orderId: number;
          /**
           * @format int64
           * @example -1
           */
          orderListId: number;
          /** @example "sBI1KM6nNtOfj5tccZSKly" */
          clientOrderId: string;
          /**
           * @format int64
           * @example 1689149087774
           */
          transactTime: number;
          /** @example "31000.00000000" */
          price: string;
          /** @example "0.50000000" */
          origQty: string;
          /** @example "0.50000000" */
          executedQty: string;
          /** @example "14000.00000000" */
          cummulativeQuoteQty: string;
          /** @example "FILLED" */
          status: string;
          /** @example "GTC" */
          timeInForce: string;
          /** @example "LIMIT" */
          type: string;
          /** @example "BUY" */
          side: string;
          /**
           * @format int64
           * @example 1689149087774
           */
          workingTime: number;
          fills: {
            /** @example "ONE_PARTY_TRADE_REPORT" */
            matchType: string;
            /** @example "28000.00000000" */
            price: string;
            /** @example "0.50000000" */
            qty: string;
            /** @example "0.00000000" */
            commission: string;
            /** @example "BTC" */
            commissionAsset: string;
            /**
             * @format int64
             * @example -1
             */
            tradeId: number;
            /**
             * @format int64
             * @example 0
             */
            allocId: number;
          }[];
          /** @example "SOR" */
          workingFloor: string;
          /** @example "NONE" */
          selfTradePreventionMode: string;
          /** @example true */
          usedSor: boolean;
        },
        Error
      >({
        path: `/api/v3/sor/order`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Test new order creation and signature/recvWindow using smart order routing (SOR). Creates and validates a new order but does not send it into the matching engine.
     *
     * @tags Trade
     * @name V3SorOrderTestCreate
     * @summary Test new order using SOR (TRADE)
     * @request POST:/api/v3/sor/order/test
     * @secure
     */
    v3SorOrderTestCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /** @format double */
        price?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /** @format int64 */
        strategyId?: number;
        /**
         * The value cannot be less than 1000000.
         * @format int64
         */
        strategyType?: number;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/api/v3/sor/order/test`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get current account information. Weight(IP): 20
     *
     * @tags Trade
     * @name V3AccountList
     * @summary Account Information (USER_DATA)
     * @request GET:/api/v3/account
     * @secure
     */
    v3AccountList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Account, Error>({
        path: `/api/v3/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get trades for a specific account and symbol. If `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned. The time between startTime and endTime can't be longer than 24 hours. These are the supported combinations of all parameters: symbol symbol + orderId symbol + startTime symbol + endTime symbol + fromId symbol + startTime + endTime symbol+ orderId + fromId Weight(IP): 20
     *
     * @tags Trade
     * @name V3MyTradesList
     * @summary Account Trade List (USER_DATA)
     * @request GET:/api/v3/myTrades
     * @secure
     */
    v3MyTradesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * This can only be used in combination with symbol.
         * @format int64
         */
        orderId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Trade id to fetch from. Default gets most recent trades.
         * @format int64
         */
        fromId?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MyTrade[], Error>({
        path: `/api/v3/myTrades`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Displays the user's current order count usage for all intervals. Weight(IP): 40
     *
     * @tags Trade
     * @name V3RateLimitOrderList
     * @summary Query Current Order Count Usage (TRADE)
     * @request GET:/api/v3/rateLimit/order
     * @secure
     */
    v3RateLimitOrderList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rateLimitType: string;
          interval: string;
          /** @format int32 */
          intervalNum: number;
          /** @format int32 */
          limit: number;
          /** @format int32 */
          count?: number;
        }[],
        Error
      >({
        path: `/api/v3/rateLimit/order`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Displays the list of orders that were expired because of STP. For additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page. These are the combinations supported: * symbol + preventedMatchId * symbol + orderId * symbol + orderId + fromPreventedMatchId (limit will default to 500) * symbol + orderId + fromPreventedMatchId + limit Weight(IP): Case 	                          Weight If symbol is invalid: 	        2 Querying by preventedMatchId: 	2 Querying by orderId: 	          20
     *
     * @tags Trade
     * @name V3MyPreventedMatchesList
     * @summary Query Prevented Matches
     * @request GET:/api/v3/myPreventedMatches
     * @secure
     */
    v3MyPreventedMatchesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * @format int64
         * @example 1
         */
        preventedMatchId?: number;
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * @format int64
         * @example 1
         */
        fromPreventedMatchId?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol: string;
          /**
           * @format int64
           * @example 1
           */
          preventedMatchId: number;
          /**
           * @format int64
           * @example 5
           */
          takerOrderId: number;
          /**
           * @format int64
           * @example 3
           */
          makerOrderId: number;
          /**
           * @format int64
           * @example 1
           */
          tradeGroupId: number;
          /** @example "EXPIRE_MAKER" */
          selfTradePreventionMode: string;
          /** @example "1.100000" */
          price: string;
          /** @example "1.300000" */
          makerPreventedQuantity: string;
          /**
           * @format int64
           * @example 1669101687094
           */
          transactTime: number;
        }[],
        Error
      >({
        path: `/api/v3/myPreventedMatches`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves allocations resulting from SOR order placement. Weight: 20 Supported parameter combinations: Parameters 	                          Response symbol 	                              allocations from oldest to newest symbol + startTime 	                  oldest allocations since startTime symbol + endTime 	                    newest allocations until endTime symbol + startTime + endTime 	        allocations within the time range symbol + fromAllocationId 	          allocations by allocation ID symbol + orderId 	                    allocations related to an order starting with oldest symbol + orderId + fromAllocationId 	allocations related to an order by allocation ID Note: The time between startTime and endTime can't be longer than 24 hours.
     *
     * @tags Trade
     * @name V3MyAllocationsList
     * @summary Query Allocations (USER_DATA)
     * @request GET:/api/v3/myAllocations
     * @secure
     */
    v3MyAllocationsList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** @format int64 */
        fromAllocationId?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol: string;
          /**
           * @format int64
           * @example 0
           */
          allocationId: number;
          /** @example "SOR" */
          allocationType: string;
          /**
           * @format int64
           * @example 1
           */
          orderId: number;
          /**
           * @format int64
           * @example -1
           */
          orderListId: number;
          /** @example "1.00000000" */
          price: string;
          /** @example "5.00000000" */
          qty: string;
          /** @example "5.00000000" */
          quoteQty: string;
          /** @example "0.00000000" */
          commission: string;
          /** @example "BTC" */
          commissionAsset: string;
          /**
           * @format int64
           * @example 1687506878118
           */
          time: number;
          /** @example true */
          isBuyer: boolean;
          /** @example false */
          isMaker: boolean;
          /** @example false */
          isAllocator: boolean;
        }[],
        Error
      >({
        path: `/api/v3/myAllocations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes. Weight: 2
     *
     * @tags Stream
     * @name V3UserDataStreamCreate
     * @summary Create a ListenKey (USER_STREAM)
     * @request POST:/api/v3/userDataStream
     * @secure
     */
    v3UserDataStreamCreate: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1" */
          listenKey: string;
        },
        any
      >({
        path: `/api/v3/userDataStream`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes. Weight: 2
     *
     * @tags Stream
     * @name V3UserDataStreamUpdate
     * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
     * @request PUT:/api/v3/userDataStream
     * @secure
     */
    v3UserDataStreamUpdate: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/api/v3/userDataStream`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Close out a user data stream. Weight: 2
     *
     * @tags Stream
     * @name V3UserDataStreamDelete
     * @summary Close a ListenKey (USER_STREAM)
     * @request DELETE:/api/v3/userDataStream
     * @secure
     */
    v3UserDataStreamDelete: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/api/v3/userDataStream`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sapi = {
    /**
     * @description Execute transfer between spot account and cross margin account. Weight(IP): 600
     *
     * @tags Margin
     * @name V1MarginTransferCreate
     * @summary Cross Margin Account Transfer (MARGIN)
     * @request POST:/sapi/v1/margin/transfer
     * @secure
     */
    v1MarginTransferCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * * `1` - transfer from main account to margin account
         * * `2` - transfer from margin account to main account
         * @format int32
         * @min 1
         * @max 2
         */
        type: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Transaction, Error>({
        path: `/sapi/v1/margin/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Response in descending order - Returns data for last 7 days by default - Set `archived` to `true` to query data from 6 months ago Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginTransferList
     * @summary Get Cross Margin Transfer History (USER_DATA)
     * @request GET:/sapi/v1/margin/transfer
     * @secure
     */
    v1MarginTransferList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        type?: "ROLL_IN" | "ROLL_OUT";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /** Default: false. Set to true for archived data from 6 months ago */
        archived?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            amount: string;
            asset: string;
            status: string;
            /** @format int64 */
            timestamp: number;
            /** @format int64 */
            txId: number;
            type: string;
          }[];
          /**
           * @format int32
           * @example 3
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/transfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply for a loan. - If "isIsolated" = "TRUE", "symbol" must be sent - "isIsolated" = "FALSE" for crossed margin loan Weight(UID): 3000
     *
     * @tags Margin
     * @name V1MarginLoanCreate
     * @summary Margin Account Borrow (MARGIN)
     * @request POST:/sapi/v1/margin/loan
     * @secure
     */
    v1MarginLoanCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Transaction, Error>({
        path: `/sapi/v1/margin/loan`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - `txId` or `startTime` must be sent. `txId` takes precedence. - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginLoanList
     * @summary Query Loan Record (USER_DATA)
     * @request GET:/sapi/v1/margin/loan
     * @secure
     */
    v1MarginLoanList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * the tranId in  `POST /sapi/v1/margin/loan`
         * @format int64
         * @example 123456789
         */
        txId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /** Default: false. Set to true for archived data from 6 months ago */
        archived?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            isolatedSymbol: string;
            /** @format int64 */
            txId: number;
            asset: string;
            principal: string;
            /** @format int64 */
            timestamp: number;
            status: string;
          }[];
          /** @format int32 */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/loan`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Repay loan for margin account. - If "isIsolated" = "TRUE", "symbol" must be sent - "isIsolated" = "FALSE" for crossed margin repay Weight(IP): 3000
     *
     * @tags Margin
     * @name V1MarginRepayCreate
     * @summary Margin Account Repay (MARGIN)
     * @request POST:/sapi/v1/margin/repay
     * @secure
     */
    v1MarginRepayCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Transaction, Error>({
        path: `/sapi/v1/margin/repay`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - `txId` or `startTime` must be sent. `txId` takes precedence. - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginRepayList
     * @summary Query Repay Record (USER_DATA)
     * @request GET:/sapi/v1/margin/repay
     * @secure
     */
    v1MarginRepayList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * the tranId in  `POST /sapi/v1/margin/repay`
         * @format int64
         * @example 2970933056
         */
        txId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /** Default: false. Set to true for archived data from 6 months ago */
        archived?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /**
             * Isolated symbol, will not be returned for crossed margin
             * @example "BNBUSDT"
             */
            isolatedSymbol: string;
            /**
             * Total amount repaid
             * @example "14.00000000"
             */
            amount: string;
            /** @example "BNB" */
            asset: string;
            /**
             * Interest repaid
             * @example "0.01866667"
             */
            interest: string;
            /**
             * Principal repaid
             * @example "13.98133333"
             */
            principal: string;
            /**
             * One of PENDING (pending execution), CONFIRMED (successfully execution), FAILED (execution failed, nothing happened to your account)
             * @example "CONFIRMED"
             */
            status: string;
            /**
             * @format int64
             * @example 1563438204000
             */
            timestamp: number;
            /**
             * @format int64
             * @example 2970933056
             */
            txId: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/repay`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginAssetList
     * @summary Query Margin Asset (MARKET_DATA)
     * @request GET:/sapi/v1/margin/asset
     * @secure
     */
    v1MarginAssetList: (
      query: {
        /** @example "BTC" */
        asset: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Binance Coin" */
          assetFullName: string;
          /** @example "BNB" */
          assetName: string;
          /** @example false */
          isBorrowable: boolean;
          isMortgageable: boolean;
          /** @example "0.00000000" */
          userMinBorrow: string;
          /** @example "0.00000000" */
          userMinRepay: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/asset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginPairList
     * @summary Query Cross Margin Pair (MARKET_DATA)
     * @request GET:/sapi/v1/margin/pair
     * @secure
     */
    v1MarginPairList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 323355778339572400
           */
          id: number;
          /** @example "BNBUSDT" */
          symbol: string;
          /** @example "BTC" */
          base: string;
          /** @example "USDT" */
          quote: string;
          isMarginTrade: boolean;
          isBuyAllowed: boolean;
          isSellAllowed: boolean;
        },
        Error
      >({
        path: `/sapi/v1/margin/pair`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginAllAssetsList
     * @summary Get All Margin Assets (MARKET_DATA)
     * @request GET:/sapi/v1/margin/allAssets
     * @secure
     */
    v1MarginAllAssetsList: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "Binance coin" */
          assetFullName: string;
          /** @example "BNB" */
          assetName: string;
          isBorrowable: boolean;
          isMortgageable: boolean;
          /** @example "0.00000000" */
          userMinBorrow: string;
          /** @example "0.00000000" */
          userMinRepay: string;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/allAssets`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginAllPairsList
     * @summary Get All Cross Margin Pairs (MARKET_DATA)
     * @request GET:/sapi/v1/margin/allPairs
     * @secure
     */
    v1MarginAllPairsList: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "BNB" */
          base: string;
          /**
           * @format int64
           * @example 351637150141315840
           */
          id: number;
          isBuyAllowed: boolean;
          isMarginTrade: boolean;
          isSellAllowed: boolean;
          /** @example "BTC" */
          quote: string;
          /** @example "BNBBTC" */
          symbol: string;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/allPairs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginPriceIndexList
     * @summary Query Margin PriceIndex (MARKET_DATA)
     * @request GET:/sapi/v1/margin/priceIndex
     * @secure
     */
    v1MarginPriceIndexList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1562046418000
           */
          calcTime: number;
          /** @example "0.00333930" */
          price: string;
          /** @example "BNBBTC" */
          symbol: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/priceIndex`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Either `orderId` or `origClientOrderId` must be sent. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time. Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginOrderList
     * @summary Query Margin Account's Order (USER_DATA)
     * @request GET:/sapi/v1/margin/order
     * @secure
     */
    v1MarginOrderList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOrderDetail, Error>({
        path: `/sapi/v1/margin/order`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post a new order for margin account. Weight(UID): 6
     *
     * @tags Margin
     * @name V1MarginOrderCreate
     * @summary Margin Account New Order (TRADE)
     * @request POST:/sapi/v1/margin/order
     * @secure
     */
    v1MarginOrderCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Order type
         * @example "LIMIT"
         */
        type:
          | "LIMIT"
          | "MARKET"
          | "STOP_LOSS"
          | "STOP_LOSS_LIMIT"
          | "TAKE_PROFIT"
          | "TAKE_PROFIT_LIMIT"
          | "LIMIT_MAKER";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /**
         * Quote quantity
         * @format double
         */
        quoteOrderQty?: number;
        /**
         * Order price
         * @format double
         * @example 219
         */
        price?: number;
        /**
         * Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
         * @format double
         * @example 221.01
         */
        stopPrice?: number;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /**
         * Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
         * @format double
         */
        icebergQty?: number;
        /** Set the response JSON. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /** Default `NO_SIDE_EFFECT` */
        sideEffectType?: "NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY";
        /**
         * Order time in force
         * @example "GTC"
         */
        timeInForce?: "GTC" | "IOC" | "FOK";
        /** @example true */
        autoRepayAtCancel: boolean;
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOrderResponseAck | MarginOrderResponseResult | MarginOrderResponseFull, Error>({
        path: `/sapi/v1/margin/order`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an active order for margin account. Either `orderId` or `origClientOrderId` must be sent. Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginOrderDelete
     * @summary Margin Account Cancel Order (TRADE)
     * @request DELETE:/sapi/v1/margin/order
     * @secure
     */
    v1MarginOrderDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOrder, Error>({
        path: `/sapi/v1/margin/order`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago - `type` in response has 4 enums: - `PERIODIC` interest charged per hour - `ON_BORROW` first interest charged on borrow - `PERIODIC_CONVERTED` interest charged per hour converted into BNB - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginInterestHistoryList
     * @summary Get Interest History (USER_DATA)
     * @request GET:/sapi/v1/margin/interestHistory
     * @secure
     */
    v1MarginInterestHistoryList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /** Default: false. Set to true for archived data from 6 months ago */
        archived?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNBUSDT" */
            isolatedSymbol: string;
            /** @example "BNB" */
            asset: string;
            /** @example "0.01866667" */
            interest: string;
            /**
             * @format int64
             * @example 1566813600
             */
            interestAccuredTime: number;
            /** @example "0.01600000" */
            interestRate: string;
            /** @example "36.22000000" */
            principal: string;
            /** @example "ON_BORROW" */
            type: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/interestHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Response in descending order Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginForceLiquidationRecList
     * @summary Get Force Liquidation Record (USER_DATA)
     * @request GET:/sapi/v1/margin/forceLiquidationRec
     * @secure
     */
    v1MarginForceLiquidationRecList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            avgPrice: string;
            executedQty: string;
            /** @format int64 */
            orderId: number;
            price: string;
            qty: string;
            side: string;
            symbol: string;
            timeInForce: string;
            isIsolated: boolean;
            /** @format int64 */
            updatedTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/forceLiquidationRec`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginAccountList
     * @summary Query Cross Margin Account Details (USER_DATA)
     * @request GET:/sapi/v1/margin/account
     * @secure
     */
    v1MarginAccountList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          borrowEnabled: boolean;
          /** @example "11.64405625" */
          marginLevel: string;
          /** @example "6.82728457" */
          totalAssetOfBtc: string;
          /** @example "0.58633215" */
          totalLiabilityOfBtc: string;
          /** @example "6.24095242" */
          totalNetAssetOfBtc: string;
          tradeEnabled: boolean;
          transferEnabled: boolean;
          userAssets: {
            /** @example "BTC" */
            asset: string;
            /** @example "0.00000000" */
            borrowed: string;
            /** @example "0.00499500" */
            free: string;
            /** @example "0.00000000" */
            interest: string;
            /** @example "0.00000000" */
            locked: string;
            /** @example "0.00499500" */
            netAsset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If the `symbol` is not sent, orders for all symbols will be returned in an array. - When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange - If isIsolated ="TRUE", symbol must be sent. Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginOpenOrdersList
     * @summary Query Margin Account's Open Orders (USER_DATA)
     * @request GET:/sapi/v1/margin/openOrders
     * @secure
     */
    v1MarginOpenOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOrderDetail[], Error>({
        path: `/sapi/v1/margin/openOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Cancels all active orders on a symbol for margin account. - This includes OCO orders. Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginOpenOrdersDelete
     * @summary Margin Account Cancel all Open Orders on a Symbol (TRADE)
     * @request DELETE:/sapi/v1/margin/openOrders
     * @secure
     */
    v1MarginOpenOrdersDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<(CanceledMarginOrderDetail | MarginOcoOrder)[], Error>({
        path: `/sapi/v1/margin/openOrders`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are returned. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time. Weight(IP): 200 Request Limit: 60 times/min per IP
     *
     * @tags Margin
     * @name V1MarginAllOrdersList
     * @summary Query Margin Account's All Orders (USER_DATA)
     * @request GET:/sapi/v1/margin/allOrders
     * @secure
     */
    v1MarginAllOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOrderDetail[], Error>({
        path: `/sapi/v1/margin/allOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send in a new OCO for a margin account - Price Restrictions: - SELL: Limit Price > Last Price > Stop Price - BUY: Limit Price < Last Price < Stop Price - Quantity Restrictions: - Both legs must have the same quantity - ICEBERG quantities however do not have to be the same. - Order Rate Limit - OCO counts as 2 orders against the order rate limit. Weight(UID): 6
     *
     * @tags Margin
     * @name V1MarginOrderOcoCreate
     * @summary Margin Account New OCO (TRADE)
     * @request POST:/sapi/v1/margin/order/oco
     * @secure
     */
    v1MarginOrderOcoCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /** A unique Id for the entire orderList */
        listClientOrderId?: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /** A unique Id for the limit order */
        limitClientOrderId?: string;
        /**
         * Order price
         * @format double
         * @example 218
         */
        price: number;
        /** @format double */
        limitIcebergQty?: number;
        /** A unique Id for the stop loss/stop loss limit leg */
        stopClientOrderId?: string;
        /**
         * @format double
         * @example 220
         */
        stopPrice: number;
        /**
         * If provided, stopLimitTimeInForce is required.
         * @format double
         */
        stopLimitPrice?: number;
        /** @format double */
        stopIcebergQty?: number;
        stopLimitTimeInForce?: "GTC" | "FOK" | "IOC";
        /** Set the response JSON. */
        newOrderRespType?: "ACK" | "RESULT" | "FULL";
        /** Default `NO_SIDE_EFFECT` */
        sideEffectType?: "NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY";
        /**
         * The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @example "EXPIRE_TAKER"
         */
        selfTradePreventionMode?: "EXPIRE_TAKER" | "EXPIRE_MAKER" | "EXPIRE_BOTH" | "NONE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "JYVpp3F0f5CAG15DhtrqLp" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1563417480525
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          /**
           * will not return if no margin trade happens
           * @example "5"
           */
          marginBuyBorrowAmount: string;
          /**
           * will not return if no margin trade happens
           * @example "BTC"
           */
          marginBuyBorrowAsset: string;
          /** @example false */
          isIsolated: boolean;
          /** @example [{"symbol":"LTCBTC","orderId":2,"clientOrderId":"Kk7sqHb9J6mJWTMDVW7Vos"},{"symbol":"LTCBTC","orderId":3,"clientOrderId":"xTXKaGYd4bluPVp78IVRvl"}] */
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
          /** @example [{"symbol":"LTCBTC","orderId":2,"orderListId":0,"clientOrderId":"Kk7sqHb9J6mJWTMDVW7Vos","transactTime":1563417480525,"price":"0.000000","origQty":"0.624363","executedQty":"0.000000","cummulativeQuoteQty":"0.000000","status":"NEW","timeInForce":"GTC","type":"STOP_LOSS","side":"BUY","stopPrice":"0.960664"},{"symbol":"LTCBTC","orderId":3,"orderListId":0,"clientOrderId":"xTXKaGYd4bluPVp78IVRvl","transactTime":1563417480525,"price":"0.036435","origQty":"0.624363","executedQty":"0.000000","cummulativeQuoteQty":"0.000000","status":"NEW","timeInForce":"GTC","type":"LIMIT_MAKER","side":"BUY"}] */
          orderReports: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            /** @format int64 */
            orderListId: number;
            clientOrderId: string;
            /** @format int64 */
            transactTime: number;
            price: string;
            origQty: string;
            executedQty: string;
            cummulativeQuoteQty: string;
            status: string;
            timeInForce: string;
            type: string;
            side: string;
            stopPrice: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/order/oco`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific OCO based on provided optional parameters - Either `orderListId` or `origClientOrderId` must be provided Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginOrderListList
     * @summary Query Margin Account's OCO (USER_DATA)
     * @request GET:/sapi/v1/margin/orderList
     * @secure
     */
    v1MarginOrderListList: (
      query: {
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /** Mandatory for isolated margin, not supported for cross margin */
        symbol?: string;
        /**
         * Order list id
         * @format int64
         */
        orderListId?: number;
        /** Order id from client */
        origClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 27
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "h2USkA5YQpaXHPIrkd96xE" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565245656253
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          /** @example false */
          isIsolated: boolean;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/orderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an entire Order List for a margin account - Canceling an individual leg will cancel the entire OCO - Either `orderListId` or `listClientOrderId` must be provided Weight(UID): 1
     *
     * @tags Margin
     * @name V1MarginOrderListDelete
     * @summary Margin Account Cancel OCO (TRADE)
     * @request DELETE:/sapi/v1/margin/orderList
     * @secure
     */
    v1MarginOrderListDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * Order list id
         * @format int64
         */
        orderListId?: number;
        /** A unique Id for the entire orderList */
        listClientOrderId?: string;
        /** Used to uniquely identify this cancel. Automatically generated by default */
        newClientOrderId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginOcoOrder, Error>({
        path: `/sapi/v1/margin/orderList`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all OCO for a specific margin account based on provided optional parameters Weight(IP): 200
     *
     * @tags Margin
     * @name V1MarginAllOrderListList
     * @summary Query Margin Account's all OCO (USER_DATA)
     * @request GET:/sapi/v1/margin/allOrderList
     * @secure
     */
    v1MarginAllOrderListList: (
      query: {
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /** Mandatory for isolated margin, not supported for cross margin */
        symbol?: string;
        /** If supplied, neither `startTime` or `endTime` can be provided */
        fromId?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default Value: 500; Max Value: 1000
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 29
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "amEEAXryFzFwYF1FeRpUoZ" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565245913483
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          isIsolated: boolean;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/allOrderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginOpenOrderListList
     * @summary Query Margin Account's Open OCO (USER_DATA)
     * @request GET:/sapi/v1/margin/openOrderList
     * @secure
     */
    v1MarginOpenOrderListList: (
      query: {
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /** Mandatory for isolated margin, not supported for cross margin */
        symbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 31
           */
          orderListId: number;
          /** @example "OCO" */
          contingencyType: string;
          /** @example "EXEC_STARTED" */
          listStatusType: string;
          /** @example "EXECUTING" */
          listOrderStatus: string;
          /** @example "wuB13fmulKj3YjdqWEcsnp" */
          listClientOrderId: string;
          /**
           * @format int64
           * @example 1565246080644
           */
          transactionTime: number;
          /** @example "LTCBTC" */
          symbol: string;
          /** @example false */
          isIsolated: boolean;
          orders: {
            symbol: string;
            /** @format int64 */
            orderId: number;
            clientOrderId: string;
          }[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/openOrderList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are returned. Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginMyTradesList
     * @summary Query Margin Account's Trade List (USER_DATA)
     * @request GET:/sapi/v1/margin/myTrades
     * @secure
     */
    v1MarginMyTradesList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Trade id to fetch from. Default gets most recent trades.
         * @format int64
         */
        fromId?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginTrade[], Error>({
        path: `/sapi/v1/margin/myTrades`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If `isolatedSymbol` is not sent, crossed margin data will be sent. - `borrowLimit` is also available from https://www.binance.com/en/margin-fee Weight(IP): 50
     *
     * @tags Margin
     * @name V1MarginMaxBorrowableList
     * @summary Query Max Borrow (USER_DATA)
     * @request GET:/sapi/v1/margin/maxBorrowable
     * @secure
     */
    v1MarginMaxBorrowableList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * account's currently max borrowable amount with sufficient system availability
           * @example "1.69248805"
           */
          amount: string;
          /**
           * max borrowable amount limited by the account level
           * @example "60"
           */
          borrowLimit: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/maxBorrowable`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If `isolatedSymbol` is not sent, crossed margin data will be sent. Weight(IP): 50
     *
     * @tags Margin
     * @name V1MarginMaxTransferableList
     * @summary Query Max Transfer-Out Amount (USER_DATA)
     * @request GET:/sapi/v1/margin/maxTransferable
     * @secure
     */
    v1MarginMaxTransferableList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /** Isolated symbol */
        isolatedSymbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Account's currently max borrowable amount with sufficient system availability */
          amount: string;
          /** Max borrowable amount limited by the account level */
          borrowLimit: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/maxTransferable`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get personal margin level information Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginTradeCoeffList
     * @summary Get Summary of Margin account (USER_DATA)
     * @request GET:/sapi/v1/margin/tradeCoeff
     * @secure
     */
    v1MarginTradeCoeffList: (
      query: {
        /**
         * Email Address
         * @example "me@email.com"
         */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Account's currently max borrowable amount with sufficient system availability
           * @example "1.5"
           */
          normalBar?: string;
          /**
           * Max borrowable amount limited by the account level
           * @example "1.3"
           */
          marginCallBar?: string;
          /**
           * Liquidation Margin Ratio
           * @example "1.1"
           */
          forceLiquidationBar?: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/tradeCoeff`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginIsolatedTransferList
     * @summary Get Isolated Margin Transfer History (USER_DATA)
     * @request GET:/sapi/v1/margin/isolated/transfer
     * @secure
     */
    v1MarginIsolatedTransferList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        type?: "ROLL_IN" | "ROLL_OUT";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarginTransferDetails, Error>({
        path: `/sapi/v1/margin/isolated/transfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 600
     *
     * @tags Margin
     * @name V1MarginIsolatedTransferCreate
     * @summary Isolated Margin Account Transfer (MARGIN)
     * @request POST:/sapi/v1/margin/isolated/transfer
     * @secure
     */
    v1MarginIsolatedTransferCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SPOT" */
        transFrom: "SPOT" | "ISOLATED_MARGIN";
        /** @example "ISOLATED_MARGIN" */
        transTo: "SPOT" | "ISOLATED_MARGIN";
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/margin/isolated/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If "symbols" is not sent, all isolated assets will be returned. - If "symbols" is sent, only the isolated assets of the sent symbols will be returned. Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginIsolatedAccountList
     * @summary Query Isolated Margin Account Info (USER_DATA)
     * @request GET:/sapi/v1/margin/isolated/account
     * @secure
     */
    v1MarginIsolatedAccountList: (
      query: {
        /**
         * Max 5 symbols can be sent; separated by ','
         * @example "BTCUSDT,BNBUSDT,ADAUSDT"
         */
        symbols?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IsolatedMarginAccountInfo, Error>({
        path: `/sapi/v1/margin/isolated/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours . Weight(UID): 300
     *
     * @tags Margin
     * @name V1MarginIsolatedAccountDelete
     * @summary Disable Isolated Margin Account (TRADE)
     * @request DELETE:/sapi/v1/margin/isolated/account
     * @secure
     */
    v1MarginIsolatedAccountDelete: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          /** @example "BTCUSDT" */
          symbol: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/isolated/account`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enable isolated margin account for a specific symbol. Weight(UID): 300
     *
     * @tags Margin
     * @name V1MarginIsolatedAccountCreate
     * @summary Enable Isolated Margin Account (TRADE)
     * @request POST:/sapi/v1/margin/isolated/account
     * @secure
     */
    v1MarginIsolatedAccountCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          /** @example "BTCUSDT" */
          symbol: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/isolated/account`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query enabled isolated margin account limit. Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginIsolatedAccountLimitList
     * @summary Query Enabled Isolated Margin Account Limit (USER_DATA)
     * @request GET:/sapi/v1/margin/isolated/accountLimit
     * @secure
     */
    v1MarginIsolatedAccountLimitList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 5
           */
          enabledAccount: number;
          /**
           * @format int64
           * @example 20
           */
          maxAccount: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/isolated/accountLimit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginIsolatedPairList
     * @summary Query Isolated Margin Symbol (USER_DATA)
     * @request GET:/sapi/v1/margin/isolated/pair
     * @secure
     */
    v1MarginIsolatedPairList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol: string;
          /** @example "BTC" */
          base: string;
          /** @example "USDT" */
          quote: string;
          isMarginTrade: boolean;
          isBuyAllowed: boolean;
          isSellAllowed: boolean;
        },
        Error
      >({
        path: `/sapi/v1/margin/isolated/pair`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Margin
     * @name V1MarginIsolatedAllPairsList
     * @summary Get All Isolated Margin Symbol(USER_DATA)
     * @request GET:/sapi/v1/margin/isolated/allPairs
     * @secure
     */
    v1MarginIsolatedAllPairsList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol: string;
          /** @example "BTC" */
          base: string;
          /** @example "USDT" */
          quote: string;
          isMarginTrade: boolean;
          isBuyAllowed: boolean;
          isSellAllowed: boolean;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/isolated/allPairs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - "spotBNBBurn" and "interestBNBBurn" should be sent at least one. Weight(IP): 1
     *
     * @tags Margin
     * @name V1BnbBurnCreate
     * @summary Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)
     * @request POST:/sapi/v1/bnbBurn
     * @secure
     */
    v1BnbBurnCreate: (
      query: {
        /**
         * Determines whether to use BNB to pay for trading fees on SPOT
         * @example "true"
         */
        spotBNBBurn?: "true" | "false";
        /**
         * Determines whether to use BNB to pay for margin loan's interest
         * @example "false"
         */
        interestBNBBurn?: "true" | "false";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BnbBurnStatus, Error>({
        path: `/sapi/v1/bnbBurn`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Margin
     * @name V1BnbBurnList
     * @summary Get BNB Burn Status(USER_DATA)
     * @request GET:/sapi/v1/bnbBurn
     * @secure
     */
    v1BnbBurnList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BnbBurnStatus, Error>({
        path: `/sapi/v1/bnbBurn`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The max interval between startTime and endTime is 30 days. Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginInterestRateHistoryList
     * @summary Margin Interest Rate History (USER_DATA)
     * @request GET:/sapi/v1/margin/interestRateHistory
     * @secure
     */
    v1MarginInterestRateHistoryList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          asset: string;
          /** @example "0.00025000" */
          dailyInterestRate: string;
          /**
           * @format int64
           * @example 1611544731000
           */
          timestamp: number;
          /**
           * @format int32
           * @example 1
           */
          vipLevel: number;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/interestRateHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted
     *
     * @tags Margin
     * @name V1MarginCrossMarginDataList
     * @summary Query Cross Margin Fee Data (USER_DATA)
     * @request GET:/sapi/v1/margin/crossMarginData
     * @secure
     */
    v1MarginCrossMarginDataList: (
      query: {
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 0
           */
          vipLevel: number;
          /** @example "BTC" */
          coin: string;
          transferIn: boolean;
          borrowable: boolean;
          /** @example "0.00026125" */
          dailyInterest: string;
          /** @example "0.0953" */
          yearlyInterest: string;
          /** @example "180" */
          borrowLimit: string;
          /** @example ["BNBBTC","TRXBTC","ETHBTC","BTCUSDT"] */
          marginablePairs: string[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/crossMarginData`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted
     *
     * @tags Margin
     * @name V1MarginIsolatedMarginDataList
     * @summary Query Isolated Margin Fee Data (USER_DATA)
     * @request GET:/sapi/v1/margin/isolatedMarginData
     * @secure
     */
    v1MarginIsolatedMarginDataList: (
      query: {
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 0
           */
          vipLevel?: number;
          /** @example "BTCUSDT" */
          symbol?: string;
          /** @example "10" */
          leverage?: string;
          /** @example [{"coin":"BTC","dailyInterest":"0.00026125","borrowLimit":"270"},{"coin":"USDT","dailyInterest":"0.000475","borrowLimit":"2100000"}] */
          data?: {
            coin?: string;
            dailyInterest?: string;
            borrowLimit?: string;
          }[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/isolatedMarginData`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginIsolatedMarginTierList
     * @summary Query Isolated Margin Tier Data (USER_DATA)
     * @request GET:/sapi/v1/margin/isolatedMarginTier
     * @secure
     */
    v1MarginIsolatedMarginTierList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /**
         * All margin tier data will be returned if tier is omitted
         * @example 1
         */
        tier?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCUSDT" */
          symbol?: string;
          /**
           * @format int32
           * @example 1
           */
          tier?: number;
          /** @example "10" */
          effectiveMultiple?: string;
          /** @example "1.111" */
          initialRiskRatio?: string;
          /** @example "1.05" */
          liquidationRiskRatio?: string;
          /** @example "9" */
          baseAssetMaxBorrowable?: string;
          /** @example "70000" */
          quoteAssetMaxBorrowable?: string;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/isolatedMarginTier`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Displays the user's current margin order count usage for all intervals. Weight(IP): 20
     *
     * @tags Margin
     * @name V1MarginRateLimitOrderList
     * @summary Query Current Margin Order Count Usage (TRADE)
     * @request GET:/sapi/v1/margin/rateLimit/order
     * @secure
     */
    v1MarginRateLimitOrderList: (
      query: {
        /**
         * * `TRUE` - For isolated margin
         * * `FALSE` - Default, not for isolated margin
         */
        isIsolated?: string;
        /** isolated symbol, mandatory for isolated margin */
        symbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "ORDERS" */
          rateLimitType: string;
          /** @example "SECOND" */
          interval: string;
          /**
           * @format int64
           * @example 10
           */
          intervalNum: number;
          /**
           * @format int64
           * @example 10000
           */
          limit: number;
          /**
           * @format int64
           * @example 0
           */
          count: number;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/rateLimit/order`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query the historical information of user margin account small-value asset conversion BNB. Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginDribbletList
     * @summary Margin Dustlog (USER_DATA)
     * @request GET:/sapi/v1/margin/dribblet
     * @secure
     */
    v1MarginDribbletList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 8
           */
          total: number;
          userAssetDribblets: {
            /**
             * @format int64
             * @example 1615985535000
             */
            operateTime: number;
            /** @example "0.00132256" */
            totalTransferedAmount: string;
            /** @example "0.00002699" */
            totalServiceChargeAmount: string;
            /**
             * @format int64
             * @example 45178372831
             */
            transId: number;
            userAssetDribbletDetails: {
              /**
               * @format int64
               * @example 4359321
               */
              transId: number;
              /** @example "0.000009" */
              serviceChargeAmount: string;
              /** @example "0.0009" */
              amount: string;
              /**
               * @format int64
               * @example 1615985535000
               */
              operateTime: number;
              /** @example "0.000441" */
              transferedAmount: string;
              /** @example "USDT" */
              fromAsset: string;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/dribblet`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 100
     *
     * @tags Margin
     * @name V1MarginCrossMarginCollateralRatioList
     * @summary Cross margin collateral ratio (MARKET_DATA)
     * @request GET:/sapi/v1/margin/crossMarginCollateralRatio
     * @secure
     */
    v1MarginCrossMarginCollateralRatioList: (params: RequestParams = {}) =>
      this.request<
        {
          collaterals: {
            /** @example "0" */
            minUsdValue: string;
            /** @example "13000000" */
            maxUsdValue: string;
            /** @example "1" */
            discountRate: string;
          }[];
          assetNames: string[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/crossMarginCollateralRatio`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query the coins which can be small liability exchange Weight(UID): 100
     *
     * @tags Margin
     * @name V1MarginExchangeSmallLiabilityList
     * @summary Get Small Liability Exchange Coin List (USER_DATA)
     * @request GET:/sapi/v1/margin/exchange-small-liability
     * @secure
     */
    v1MarginExchangeSmallLiabilityList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "ETH" */
          asset: string;
          /** @example "0.00083334" */
          interest: string;
          /** @example "0.001" */
          principal: string;
          /** @example "USDT" */
          liabilityAsset: string;
          /**
           * @format float
           * @example 0.3552
           */
          liabilityQty: number;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/exchange-small-liability`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Small liability Exchange History Weight(UID): 100
     *
     * @tags Margin
     * @name V1MarginExchangeSmallLiabilityHistoryList
     * @summary Get Small Liability Exchange History (USER_DATA)
     * @request GET:/sapi/v1/margin/exchange-small-liability-history
     * @secure
     */
    v1MarginExchangeSmallLiabilityHistoryList: (
      query: {
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 1 */
          total: number;
          rows: {
            /** @example "ETH" */
            asset: string;
            /** @example "0.00083434" */
            amount: string;
            /** @example "BUSD" */
            targetAsset: string;
            /** @example "1.37576819" */
            targetAmount: string;
            /** @example "EXCHANGE_SMALL_LIABILITY" */
            bizType: string;
            /**
             * @format int64
             * @example 1672801339253
             */
            timestamp: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/exchange-small-liability-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user the next hourly estimate interest Weight(UID): 100
     *
     * @tags Margin
     * @name V1MarginNextHourlyInterestRateList
     * @summary Get a future hourly interest rate (USER_DATA)
     * @request GET:/sapi/v1/margin/next-hourly-interest-rate
     * @secure
     */
    v1MarginNextHourlyInterestRateList: (
      query: {
        /**
         * List of assets, separated by commas, up to 20
         * @example "BTC,ETH"
         */
        assets?: string;
        /**
         * for isolated margin or not, "TRUE", "FALSE"
         * @example "TRUE"
         */
        isIsolated?: "TRUE" | "FALSE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          asset: string;
          /** @example "0.00000571" */
          nextHourlyInterestRate: string;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/next-hourly-interest-rate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get cross or isolated margin capital flow Weight(IP): 100
     *
     * @tags Margin
     * @name V1MarginCapitalFlowList
     * @summary Get cross or isolated margin capital flow(USER_DATA)
     * @request GET:/sapi/v1/margin/capital-flow
     * @secure
     */
    v1MarginCapitalFlowList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * Required when querying isolated data
         * @example "BTCUSDT"
         */
        symbol?: string;
        type?:
          | "TRANSFER"
          | "BORROW"
          | "REPAY"
          | "BUY_INCOME"
          | "BUY_EXPENSE"
          | "SELL_INCOME"
          | "SELL_EXPENSE"
          | "TRADING_COMMISSION"
          | "BUY_LIQUIDATION"
          | "SELL_LIQUIDATION"
          | "REPAY_LIQUIDATION"
          | "OTHER_LIQUIDATION"
          | "LIQUIDATION_FEE"
          | "SMALL_BALANCE_CONVERT"
          | "COMMISSION_RETURN"
          | "SMALL_CONVERT";
        /**
         * Only supports querying the data of the last 90 days
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * If fromId is set, the data with id > fromId will be returned. Otherwise the latest data will be returned
         * @format int64
         */
        fromId?: number;
        /**
         * The number of data items returned each time is limited. Default 500; Max 1000.
         * @format int64
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 123456
           */
          id: number;
          /**
           * @format int64
           * @example 123123
           */
          tranId: number;
          /**
           * @format int64
           * @example 1691116657000
           */
          timestamp: number;
          /** @example "USDT" */
          asset: string;
          /** @example "BTCUSDT" */
          symbol: string;
          /** @example "BORROW" */
          type: string;
          /** @example "101" */
          amount: string;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/capital-flow`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get tokens or symbols delist schedule for cross margin and isolated margin Weight(IP): 100
     *
     * @tags Margin
     * @name V1MarginDelistScheduleList
     * @summary Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA)
     * @request GET:/sapi/v1/margin/delist-schedule
     * @secure
     */
    v1MarginDelistScheduleList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1686161202000
           */
          delistTime?: number;
          crossMarginAssets?: string[];
          isolatedMarginSymbols?: string[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/delist-schedule`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Margin available Inventory query Weight(UID): 50
     *
     * @tags Margin
     * @name V1MarginAvailableInventoryList
     * @summary Query Margin Available Inventory (USER_DATA)
     * @request GET:/sapi/v1/margin/available-inventory
     * @secure
     */
    v1MarginAvailableInventoryList: (
      query: {
        type: "MARGIN" | "ISOLATED";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          assets: {
            /** @example "100000000" */
            MATIC: string;
            /** @example "100000000" */
            STPT: string;
            /** @example "100000000" */
            TVK: string;
            /** @example "97409653" */
            SHIB: string;
          };
          /**
           * @format int64
           * @example 1699272487
           */
          updateTime: number;
        },
        Error
      >({
        path: `/sapi/v1/margin/available-inventory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Margin manual liquidation Weight(UID): 3000
     *
     * @tags Margin
     * @name V1MarginManualLiquidationCreate
     * @summary Margin manual liquidation(MARGIN)
     * @request POST:/sapi/v1/margin/manual-liquidation
     * @secure
     */
    v1MarginManualLiquidationCreate: (
      query: {
        type: "MARGIN" | "ISOLATED";
        /** @example "BTCUSDT" */
        symbol?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "ETH" */
          asset: string;
          /** @example "0.00083334" */
          interest: string;
          /** @example "0.001" */
          principal: string;
          /** @example "USDT" */
          liabilityAsset: string;
          /**
           * @format float
           * @example 0.3552
           */
          liabilityQty: number;
        }[],
        Error
      >({
        path: `/sapi/v1/margin/manual-liquidation`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get assets that can be converted into BNB. Weight(IP): 100
     *
     * @tags Margin
     * @name V1MarginDustList
     * @summary Get Assets That Can Be Converted Into BNB (USER_DATA)
     * @request GET:/sapi/v1/margin/dust
     * @secure
     */
    v1MarginDustList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          details: {
            /** @example "BTC" */
            asset: string;
            /** @example "ADA" */
            assetFullName: string;
            /** @example "6.21" */
            amountFree: string;
            /** @example "0.00016848" */
            toBTC: string;
            /** @example "0.01777302" */
            toBNB: string;
            /** @example "0.01741756" */
            toBNBOffExchange: string;
            /** @example "0.00035546" */
            exchange: string;
          }[];
          /** @example "0.00016848" */
          totalTransferBtc: string;
          /** @example "0.01777302" */
          totalTransferBNB: string;
          /** @example "0.02" */
          dribbletPercentage: string;
        },
        Error
      >({
        path: `/sapi/v1/margin/dust`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Convert dust assets to BNB Weight(UID): 3000
     *
     * @tags Margin
     * @name V1MarginDustCreate
     * @summary Dust Transfer (TRADE)
     * @request POST:/sapi/v1/margin/dust
     * @secure
     */
    v1MarginDustCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.02102542" */
          totalServiceCharge: string;
          /** @example "1.05127099" */
          totalTransfered: string;
          transferResult: {
            /** @example "0.03000000" */
            amount: string;
            /** @example "ETH" */
            fromAsset: string;
            /**
             * @format int64
             * @example 1563368549307
             */
            operateTime: number;
            /** @example "0.00500000" */
            serviceChargeAmount: string;
            /**
             * @format int64
             * @example 1563368549307
             */
            tranId: number;
            /** @example "0.25000000" */
            transferedAmount: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/margin/dust`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adjust cross margin max leverage Weight(UID): 3000
     *
     * @tags Margin
     * @name V1MarginMaxLeverageCreate
     * @summary Adjust cross margin max leverage (USER_DATA)
     * @request POST:/sapi/v1/margin/max-leverage
     * @secure
     */
    v1MarginMaxLeverageCreate: (
      query: {
        /**
         * Can only adjust 3 or 5
         * @example 3
         */
        maxLeverage: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/margin/max-leverage`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Liability Coin Leverage Bracket in Cross Margin Pro Mode Weight(IP): 1
     *
     * @tags Margin
     * @name V1MarginLeverageBracketList
     * @summary Query Liability Coin Leverage Bracket in Cross Margin Pro Mode (MARKET_DATA)
     * @request GET:/sapi/v1/margin/leverageBracket
     * @secure
     */
    v1MarginLeverageBracketList: (params: RequestParams = {}) =>
      this.request<
        {
          assetNames: string[];
          /** @example 1 */
          rank: number;
          brackets: {
            /** @example 10 */
            leverage?: number;
            /**
             * @format double
             * @example 1000000
             */
            maxDebt?: number;
            /**
             * @format double
             * @example 0.02
             */
            maintenanceMarginRate?: number;
            /**
             * @format double
             * @example 0.1112
             */
            initialMarginRate?: number;
            /**
             * @format double
             * @example 60000
             */
            fastNum?: number;
          }[];
        }[],
        Error
      >({
        path: `/sapi/v1/margin/leverageBracket`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch system status. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1SystemStatusList
     * @summary System Status (System)
     * @request GET:/sapi/v1/system/status
     */
    v1SystemStatusList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * 0: normal, 1：system maintenance
           * @format int32
           * @example 0
           */
          status: number;
          /**
           * "normal", "system_maintenance"
           * @example "normal"
           */
          msg: string;
        },
        any
      >({
        path: `/sapi/v1/system/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get information of coins (available for deposit and withdraw) for user. Weight(IP): 10
     *
     * @tags Wallet
     * @name V1CapitalConfigGetallList
     * @summary All Coins' Information (USER_DATA)
     * @request GET:/sapi/v1/capital/config/getall
     * @secure
     */
    v1CapitalConfigGetallList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          coin: string;
          depositAllEnable: boolean;
          /** @example "0.00000000" */
          free: string;
          /** @example "0.00000000" */
          freeze: string;
          /** @example "0.00000000" */
          ipoable: string;
          /** @example "0.00000000" */
          ipoing: string;
          /** @example false */
          isLegalMoney: boolean;
          /** @example "0.00000000" */
          locked: string;
          /** @example "Bitcoin" */
          name: string;
          networkList: {
            /** @example "^(bnb1)[0-9a-z]{38}$" */
            addressRegex: string;
            /** @example "BTC" */
            coin: string;
            /**
             * shown only when "depositEnable" is false.
             * @example "Wallet Maintenance, Deposit Suspended"
             */
            depositDesc: string;
            /** @example false */
            depositEnable: boolean;
            /** @example false */
            isDefault: boolean;
            /** @example "^[0-9A-Za-z\-_]{1,120}$" */
            memoRegex: string;
            /**
             * min number for balance confirmation.
             * @format int64
             * @example 1
             */
            minConfirm: number;
            /** @example "BEP2" */
            name: string;
            /** @example "ETH" */
            network: string;
            /** @example false */
            resetAddressStatus: boolean;
            /** @example "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance." */
            specialTips: string;
            /**
             * confirmation number for balance unlock.
             * @format int64
             * @example 0
             */
            unLockConfirm: number;
            /**
             * shown only when "withdrawEnable" is false
             * @example "Wallet Maintenance, Withdrawal Suspended"
             */
            withdrawDesc: string;
            /** @example false */
            withdrawEnable: boolean;
            /** @example "0.00000220" */
            withdrawFee: string;
            /** @example "0.00000001" */
            withdrawIntegerMultiple: string;
            /** @example "9999999999.99999999" */
            withdrawMax: string;
            /** @example "0.00000440" */
            withdrawMin: string;
            sameAddress: boolean;
          }[];
          /** @example "0.00000000" */
          storage: string;
          trading: boolean;
          withdrawAllEnable: boolean;
          /** @example "0.00000000" */
          withdrawing: string;
        }[],
        Error
      >({
        path: `/sapi/v1/capital/config/getall`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The query time period must be less than 30 days - Support query within the last one month only - If startTimeand endTime not sent, return records of the last 7 days by default Weight(IP): 2400
     *
     * @tags Wallet
     * @name V1AccountSnapshotList
     * @summary Daily Account Snapshot (USER_DATA)
     * @request GET:/sapi/v1/accountSnapshot
     * @secure
     */
    v1AccountSnapshotList: (
      query: {
        type: "SPOT" | "MARGIN" | "FUTURES";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * @format int32
         * @min 7
         * @max 30
         * @default 7
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SnapshotSpot | SnapshotMargin | SnapshotFutures, Error>({
        path: `/sapi/v1/accountSnapshot`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - This request will disable fastwithdraw switch under your account. - You need to enable "trade" option for the api key which requests this endpoint. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AccountDisableFastWithdrawSwitchCreate
     * @summary Disable Fast Withdraw Switch (USER_DATA)
     * @request POST:/sapi/v1/account/disableFastWithdrawSwitch
     * @secure
     */
    v1AccountDisableFastWithdrawSwitchCreate: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/account/disableFastWithdrawSwitch`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - This request will enable fastwithdraw switch under your account. You need to enable "trade" option for the api key which requests this endpoint. - When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AccountEnableFastWithdrawSwitchCreate
     * @summary Enable Fast Withdraw Switch (USER_DATA)
     * @request POST:/sapi/v1/account/enableFastWithdrawSwitch
     * @secure
     */
    v1AccountEnableFastWithdrawSwitchCreate: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/account/enableFastWithdrawSwitch`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a withdraw request. - If `network` not send, return with default network of the coin. - You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1CapitalWithdrawApplyCreate
     * @summary Withdraw (USER_DATA)
     * @request POST:/sapi/v1/capital/withdraw/apply
     * @secure
     */
    v1CapitalWithdrawApplyCreate: (
      query: {
        /**
         * Coin name
         * @example "BNB"
         */
        coin: string;
        /** Client id for withdraw */
        withdrawOrderId?: string;
        /** @example "BTC" */
        network?: string;
        address: string;
        /** Secondary address identifier for coins like XRP,XMR etc. */
        addressTag?: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * When making internal transfer
         * - `true` ->  returning the fee to the destination account;
         * - `false` -> returning the fee back to the departure account.
         * @default false
         */
        transactionFeeFlag?: boolean;
        name?: string;
        /**
         * The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet
         * @format int32
         */
        walletType?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "7213fea8e94b4a5593d507237e5a555b" */
          id: string;
        },
        Error
      >({
        path: `/sapi/v1/capital/withdraw/apply`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch deposit history. - Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1CapitalDepositHisrecList
     * @summary Deposit History(supporting network) (USER_DATA)
     * @request GET:/sapi/v1/capital/deposit/hisrec
     * @secure
     */
    v1CapitalDepositHisrecList: (
      query: {
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        /**
         * * `0` - pending
         * * `6` - credited but cannot withdraw
         * * `1` - success
         * @format int32
         */
        status?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** @format int32 */
        offset?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.00999800" */
          amount: string;
          /** @example "PAXG" */
          coin: string;
          /** @example "ETH" */
          network: string;
          /**
           * @format int32
           * @example 1
           */
          status: number;
          /** @example "0x788cabe9236ce061e5a892e1a59395a81fc8d62c" */
          address: string;
          /** @example "" */
          addressTag: string;
          /** @example "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3" */
          txId: string;
          /**
           * @format int64
           * @example 1599621997000
           */
          insertTime: number;
          /**
           * @format int32
           * @example 0
           */
          transferType: number;
          /**
           * confirm times for unlocking
           * @example "12/12"
           */
          unlockConfirm: string;
          /** @example "12/12" */
          confirmTimes: string;
        }[],
        Error
      >({
        path: `/sapi/v1/capital/deposit/hisrec`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch withdraw history. This endpoint specifically uses per second UID rate limit, user's total second level IP rate limit is 180000/second. Response from the endpoint contains header key X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP. - `network` may not be in the response for old withdraw. - Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days - If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days. - If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days records by default. Weight(UID): 18000 Request Limit: 10 requests per second
     *
     * @tags Wallet
     * @name V1CapitalWithdrawHistoryList
     * @summary Withdraw History (supporting network) (USER_DATA)
     * @request GET:/sapi/v1/capital/withdraw/history
     * @secure
     */
    v1CapitalWithdrawHistoryList: (
      query: {
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        withdrawOrderId?: string;
        /**
         * * `0` - Email Sent
         * * `1` - Cancelled
         * * `2` - Awaiting Approval
         * * `3` - Rejected
         * * `4` - Processing
         * * `5` - Failure
         * * `6` - Completed
         * @format int32
         * @min 0
         * @max 6
         */
        status?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** @format int32 */
        offset?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0x94df8b352de7f46f64b01d3666bf6e936e44ce60" */
          address: string;
          /** @example "8.91000000" */
          amount: string;
          /** @example "2019-10-12 11:12:02" */
          applyTime: string;
          /** @example "USDT" */
          coin: string;
          /** @example "b6ae22b3aa844210a7041aee7589627c" */
          id: string;
          /**
           * will not be returned if there's no withdrawOrderId for this withdraw.
           * @example "WITHDRAWtest123"
           */
          withdrawOrderId: string;
          /** @example "ETH" */
          network: string;
          /**
           * 1 for internal transfer, 0 for external transfer
           * @format int32
           * @example 0
           */
          transferType: number;
          /**
           * @format int32
           * @example 6
           */
          status: number;
          /** @example "0.004" */
          transactionFee: string;
          /**
           * @format int32
           * @example 3
           */
          confirmNo?: number;
          /**
           * Reason for withdrawal failure
           * @example "The address is not valid. Please confirm with the recipient"
           */
          info?: string;
          /** @example "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268" */
          txId: string;
        }[],
        Error
      >({
        path: `/sapi/v1/capital/withdraw/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch deposit address with network. - If network is not send, return with default network of the coin. - You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256). Weight(IP): 10
     *
     * @tags Wallet
     * @name V1CapitalDepositAddressList
     * @summary Deposit Address (supporting network) (USER_DATA)
     * @request GET:/sapi/v1/capital/deposit/address
     * @secure
     */
    v1CapitalDepositAddressList: (
      query: {
        /**
         * Coin name
         * @example "BNB"
         */
        coin: string;
        /** @example "BTC" */
        network?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv" */
          address: string;
          /** @example "BTC" */
          coin: string;
          /** @example "" */
          tag: string;
          /** @example "https://btc.com/1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv" */
          url: string;
        },
        Error
      >({
        path: `/sapi/v1/capital/deposit/address`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch account status detail. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AccountStatusList
     * @summary Account Status (USER_DATA)
     * @request GET:/sapi/v1/account/status
     * @secure
     */
    v1AccountStatusList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Normal" */
          data: string;
        },
        Error
      >({
        path: `/sapi/v1/account/status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch account API trading status with details. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AccountApiTradingStatusList
     * @summary Account API Trading Status (USER_DATA)
     * @request GET:/sapi/v1/account/apiTradingStatus
     * @secure
     */
    v1AccountApiTradingStatusList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * API trading function is locked or not
             * @example false
             */
            isLocked: boolean;
            /**
             * If API trading function is locked, this is the planned recover time
             * @format int64
             * @example 0
             */
            plannedRecoverTime: number;
            triggerCondition: {
              /**
               * Number of GTC orders
               * @format int64
               * @example 150
               */
              GCR: number;
              /**
               * Number of FOK/IOC orders
               * @format int64
               * @example 150
               */
              IFER: number;
              /**
               * Number of orders
               * @format int64
               * @example 300
               */
              UFR: number;
            };
            /** The indicators updated every 30 seconds */
            indicators: {
              BTCUSDT: {
                /**
                 * Unfilled Ratio (UFR)
                 * @example "UFR"
                 */
                i: string;
                /**
                 * Count of all orders
                 * @format int64
                 * @example 20
                 */
                c: number;
                /**
                 * Current UFR value
                 * @format float
                 * @example 0.05
                 */
                v: number;
                /**
                 * Trigger UFR value
                 * @format float
                 * @example 0.99
                 */
                t: number;
              }[];
            };
            /**
             * @format int64
             * @example 1547630471725
             */
            updateTime: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/account/apiTradingStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetDribbletList
     * @summary DustLog(USER_DATA)
     * @request GET:/sapi/v1/asset/dribblet
     * @secure
     */
    v1AssetDribbletList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Total counts of exchange
           * @format int64
           * @example 8
           */
          total: number;
          userAssetDribblets: {
            /**
             * @format int64
             * @example 1615985535000
             */
            operateTime: number;
            /**
             * Total transfered BNB amount for this exchange.
             * @example "0.00132256"
             */
            totalTransferedAmount: string;
            /**
             * Total service charge amount for this exchange.
             * @example "0.00002699"
             */
            totalServiceChargeAmount: string;
            /**
             * @format int64
             * @example 45178372831
             */
            transId: number;
            userAssetDribbletDetails: {
              /**
               * @format int64
               * @example 4359321
               */
              transId: number;
              /** @example "0.000009" */
              serviceChargeAmount: string;
              /** @example "0.0009" */
              amount: string;
              /**
               * @format int64
               * @example 1615985535000
               */
              operateTime: number;
              /** @example "0.000441" */
              transferedAmount: string;
              /** @example "USDT" */
              fromAsset: string;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/dribblet`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetDustBtcCreate
     * @summary Get Assets That Can Be Converted Into BNB (USER_DATA)
     * @request POST:/sapi/v1/asset/dust-btc
     * @secure
     */
    v1AssetDustBtcCreate: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          details: {
            /** @example "ADA" */
            asset: string;
            /** @example "ADA" */
            assetFullName: string;
            /**
             * Convertible amount
             * @example "6.21"
             */
            amountFree: string;
            /**
             * BTC amount
             * @example "0.00016848"
             */
            toBTC: string;
            /**
             * BNB amount(Not deducted commission fee
             * @example "0.01777302"
             */
            toBNB: string;
            /**
             * BNB amount(Deducted commission fee
             * @example "0.01741756"
             */
            toBNBOffExchange: string;
            /**
             * Commission fee
             * @example "0.00035546"
             */
            exchange: string;
          }[];
          /** @example "0.00016848" */
          totalTransferBtc: string;
          /** @example "0.01777302" */
          totalTransferBNB: string;
          /**
           * Commission fee
           * @example "0.02"
           */
          dribbletPercentage: string;
        },
        Error
      >({
        path: `/sapi/v1/asset/dust-btc`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Convert dust assets to BNB. Weight(UID): 10
     *
     * @tags Wallet
     * @name V1AssetDustCreate
     * @summary Dust Transfer (USER_DATA)
     * @request POST:/sapi/v1/asset/dust
     * @secure
     */
    v1AssetDustCreate: (
      query: {
        /** The asset being converted. For example, asset=BTC&asset=USDT */
        asset: string[];
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.02102542" */
          totalServiceCharge: string;
          /** @example "1.05127099" */
          totalTransfered: string;
          transferResult: {
            /** @example "0.03000000" */
            amount: string;
            /** @example "ETH" */
            fromAsset: string;
            /**
             * @format int64
             * @example 1563368549307
             */
            operateTime: number;
            /** @example "0.00500000" */
            serviceChargeAmount: string;
            /**
             * @format int64
             * @example 2970932918
             */
            tranId: number;
            /** @example "0.25000000" */
            transferedAmount: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/dust`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query asset Dividend Record Weight(IP): 10
     *
     * @tags Wallet
     * @name V1AssetAssetDividendList
     * @summary Asset Dividend Record (USER_DATA)
     * @request GET:/sapi/v1/asset/assetDividend
     * @secure
     */
    v1AssetAssetDividendList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * @format int32
         * @max 500
         * @default 20
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /**
             * @format int64
             * @example 242006910
             */
            id: number;
            /** @example "10.00000000" */
            amount: string;
            /** @example "BHFT" */
            asset: string;
            /**
             * @format int64
             * @example 1563189166000
             */
            divTime: number;
            /** @example "BHFT distribution" */
            enInfo: string;
            /**
             * @format int64
             * @example 2968885920
             */
            tranId: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/asset/assetDividend`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch details of assets supported on Binance. - Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`. Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetAssetDetailList
     * @summary Asset Detail (USER_DATA)
     * @request GET:/sapi/v1/asset/assetDetail
     * @secure
     */
    v1AssetAssetDetailList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          CTR: {
            /** @example "70.00000000" */
            minWithdrawAmount: string;
            /**
             * deposit status (false if ALL of networks' are false)
             * @example false
             */
            depositStatus: boolean;
            /**
             * @format int64
             * @example 35
             */
            withdrawFee: number;
            /** withdrawStatus status (false if ALL of networks' are false) */
            withdrawStatus: boolean;
            /** @example "Delisted, Deposit Suspended" */
            depositTip: string;
          };
        },
        Error
      >({
        path: `/sapi/v1/asset/assetDetail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch trade fee Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetTradeFeeList
     * @summary Trade Fee (USER_DATA)
     * @request GET:/sapi/v1/asset/tradeFee
     * @secure
     */
    v1AssetTradeFeeList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "ADABNB" */
          symbol: string;
          /** @example "0.001" */
          makerCommission: string;
          /** @example "0.001" */
          takerCommission: string;
        }[],
        Error
      >({
        path: `/sapi/v1/asset/tradeFee`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - Support query within the last 6 months only - If `startTime` and `endTime` not sent, return records of the last 7 days by default Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetTransferList
     * @summary Query User Universal Transfer History (USER_DATA)
     * @request GET:/sapi/v1/asset/transfer
     * @secure
     */
    v1AssetTransferList: (
      query: {
        /**
         * Universal transfer type
         * @example "MAIN_C2C"
         */
        type:
          | "MAIN_C2C"
          | "MAIN_UMFUTURE"
          | "MAIN_CMFUTURE"
          | "MAIN_MARGIN"
          | "MAIN_MINING"
          | "C2C_MAIN"
          | "C2C_UMFUTURE"
          | "C2C_MINING"
          | "C2C_MARGIN"
          | "UMFUTURE_MAIN"
          | "UMFUTURE_C2C"
          | "UMFUTURE_MARGIN"
          | "CMFUTURE_MAIN"
          | "CMFUTURE_MARGIN"
          | "MARGIN_MAIN"
          | "MARGIN_UMFUTURE"
          | "MARGIN_CMFUTURE"
          | "MARGIN_MINING"
          | "MARGIN_C2C"
          | "MINING_MAIN"
          | "MINING_UMFUTURE"
          | "MINING_C2C"
          | "MINING_MARGIN"
          | "MAIN_PAY"
          | "PAY_MAIN"
          | "ISOLATEDMARGIN_MARGIN"
          | "MARGIN_ISOLATEDMARGIN"
          | "ISOLATEDMARGIN_ISOLATEDMARGIN";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
         * @example "BNBUSDT"
         */
        fromSymbol?: string;
        /**
         * Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
         * @example "BNBUSDT"
         */
        toSymbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          rows: {
            /** @example "USDT" */
            asset: string;
            /** @example "1" */
            amount: string;
            /** @example "MAIN_UMFUTUR" */
            type: string;
            /** @example "CONFIRMED" */
            status: string;
            /**
             * @format int64
             * @example 11415955596
             */
            tranId: number;
            /**
             * @format int64
             * @example 1544433328000
             */
            timestamp: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/transfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint. - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN ENUM of transfer types: - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account - MAIN_MARGIN Spot account transfer to Margin(cross)account - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account - MARGIN_MAIN Margin(cross)account transfer to Spot account - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account - MAIN_FUNDING Spot account transfer to Funding account - FUNDING_MAIN Funding account transfer to Spot account - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account - MARGIN_FUNDING MARGIN account transfer to Funding account - FUNDING_MARGIN Funding account transfer to Margin account - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account - MAIN_OPTION Spot account transfer to Options account - OPTION_MAIN Options account transfer to Spot account - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account - MARGIN_OPTION Margin(cross)account transfer to Options account - OPTION_MARGIN Options account transfer to Margin(cross)account - FUNDING_OPTION Funding account transfer to Options account - OPTION_FUNDING Options account transfer to Funding account - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetTransferCreate
     * @summary User Universal Transfer (USER_DATA)
     * @request POST:/sapi/v1/asset/transfer
     * @secure
     */
    v1AssetTransferCreate: (
      query: {
        /**
         * Universal transfer type
         * @example "MAIN_C2C"
         */
        type:
          | "MAIN_C2C"
          | "MAIN_UMFUTURE"
          | "MAIN_CMFUTURE"
          | "MAIN_MARGIN"
          | "MAIN_MINING"
          | "C2C_MAIN"
          | "C2C_UMFUTURE"
          | "C2C_MINING"
          | "C2C_MARGIN"
          | "UMFUTURE_MAIN"
          | "UMFUTURE_C2C"
          | "UMFUTURE_MARGIN"
          | "CMFUTURE_MAIN"
          | "CMFUTURE_MARGIN"
          | "MARGIN_MAIN"
          | "MARGIN_UMFUTURE"
          | "MARGIN_CMFUTURE"
          | "MARGIN_MINING"
          | "MARGIN_C2C"
          | "MINING_MAIN"
          | "MINING_UMFUTURE"
          | "MINING_C2C"
          | "MINING_MARGIN"
          | "MAIN_PAY"
          | "PAY_MAIN"
          | "ISOLATEDMARGIN_MARGIN"
          | "MARGIN_ISOLATEDMARGIN"
          | "ISOLATEDMARGIN_ISOLATEDMARGIN";
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
         * @example "BNBUSDT"
         */
        fromSymbol?: string;
        /**
         * Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
         * @example "BNBUSDT"
         */
        toSymbol?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 13526853623
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/asset/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Currently supports querying the following business assets：Binance Pay, Binance Card, Binance Gift Card, Stock Token Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AssetGetFundingAssetCreate
     * @summary Funding Wallet (USER_DATA)
     * @request POST:/sapi/v1/asset/get-funding-asset
     * @secure
     */
    v1AssetGetFundingAssetCreate: (
      query: {
        /** @example "BNB" */
        asset?: string;
        needBtcValuation?: "true" | "false";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          asset: string;
          /** @example "1" */
          free: string;
          /** @example "0" */
          locked: string;
          /** @example "0" */
          freeze: string;
          /** @example "0" */
          withdrawing: string;
          /** @example "0.00000091" */
          btcValuation: string;
        }[],
        Error
      >({
        path: `/sapi/v1/asset/get-funding-asset`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user assets, just for positive data. Weight(IP): 5
     *
     * @tags Wallet
     * @name V3AssetGetUserAssetCreate
     * @summary User Asset (USER_DATA)
     * @request POST:/sapi/v3/asset/getUserAsset
     * @secure
     */
    v3AssetGetUserAssetCreate: (
      query: {
        /** @example "BNB" */
        asset?: string;
        needBtcValuation?: "true" | "false";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "AVAX" */
          asset: string;
          /** @example "1" */
          free: string;
          /** @example "0" */
          locked: string;
          /** @example "0" */
          freeze: string;
          /** @example "0" */
          withdrawing: string;
          /** @example "0" */
          ipoable: string;
          /** @example "0" */
          btcValuation: string;
        }[],
        Error
      >({
        path: `/sapi/v3/asset/getUserAsset`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Convert transfer, convert between BUSD and stablecoins. If the clientId has been used before, will not do the convert transfer, the original transfer will be returned. Weight(UID): 5
     *
     * @tags Wallet
     * @name V1AssetConvertTransferCreate
     * @summary Convert Transfer (USER_DATA)
     * @request POST:/sapi/v1/asset/convert-transfer
     * @secure
     */
    v1AssetConvertTransferCreate: (
      query: {
        /** The unique flag, the min length is 20 */
        clientTranId: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * Target asset you want to convert
         * @example "BNB"
         */
        targetAsset: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 118263407119
           */
          tranId: number;
          /** @example "S" */
          status: string;
        },
        Error
      >({
        path: `/sapi/v1/asset/convert-transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 5
     *
     * @tags Wallet
     * @name V1AssetConvertTransferQueryByPageList
     * @summary Query Convert Transfer (USER_DATA)
     * @request GET:/sapi/v1/asset/convert-transfer/queryByPage
     * @secure
     */
    v1AssetConvertTransferQueryByPageList: (
      query: {
        /**
         * The transaction id
         * @format int64
         * @example 118263615991
         */
        tranId?: number;
        /**
         * If it is blank, we will match deducted asset and target asset.
         * @example "BTC"
         */
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime: number;
        /** MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet */
        accountType?: "MAIN" | "CARD";
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          rows: {
            /**
             * @format int64
             * @example 118263407119
             */
            tranId: number;
            /**
             * @format int64
             * @example 244
             */
            type: number;
            /**
             * @format int64
             * @example 1664442078000
             */
            time: number;
            /** @example "BUSD" */
            deductedAsset: string;
            /** @example "1" */
            deductedAmount: string;
            /** @example "USDC" */
            targetAsset: string;
            /** @example "1" */
            targetAmount: string;
            /** @example "S" */
            status: string;
            /** @example "MAIN" */
            accountType: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/convert-transfer/queryByPage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The query of Cloud-Mining payment and refund history Weight(UID): 600
     *
     * @tags Wallet
     * @name V1AssetLedgerTransferCloudMiningQueryByPageList
     * @summary Get Cloud-Mining payment and refund history (USER_DATA)
     * @request GET:/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage
     * @secure
     */
    v1AssetLedgerTransferCloudMiningQueryByPageList: (
      query: {
        /**
         * The transaction id
         * @format int64
         * @example 118263615991
         */
        tranId?: number;
        /** The unique flag */
        clientTranId?: string;
        /**
         * If it is blank, we will query all assets
         * @example "BTC"
         */
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          rows: {
            /**
             * @format int64
             * @example 1667880112000
             */
            createTime: number;
            /**
             * @format int64
             * @example 121230610120
             */
            tranId: number;
            /**
             * @format int64
             * @example 248
             */
            type: number;
            /** @example "USDT" */
            asset: string;
            /** @example "1" */
            amount: string;
            /** @example "S" */
            status: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Wallet
     * @name V1AccountApiRestrictionsList
     * @summary Get API Key Permission (USER_DATA)
     * @request GET:/sapi/v1/account/apiRestrictions
     * @secure
     */
    v1AccountApiRestrictionsList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example false */
          ipRestrict: boolean;
          /**
           * @format int64
           * @example 1623840271000
           */
          createTime: number;
          /** This option authorizes this key to transfer funds between your master account and your sub account instantly */
          enableInternalTransfer: boolean;
          /**
           * API Key created before your futures account opened does not support futures API service
           * @example false
           */
          enableFutures: boolean;
          /**
           * API Key created before your activate portfolio margin does not support portfolio margin API service
           * @example false
           */
          enablePortfolioMarginTrading?: boolean;
          /**
           * Authorizes this key to Vanilla options trading
           * @example false
           */
          enableVanillaOptions: boolean;
          /** Authorizes this key to be used for a dedicated universal transfer API to transfer multiple supported currencies. Each business's own transfer API rights are not affected by this authorization */
          permitsUniversalTransfer: boolean;
          /** @example true */
          enableReading: boolean;
          /** @example false */
          enableSpotAndMarginTrading: boolean;
          /**
           * This option allows you to withdraw via API. You must apply the IP Access Restriction filter in order to enable withdrawals
           * @example false
           */
          enableWithdrawals: boolean;
          /**
           * This option can be adjusted after the Cross Margin account transfer is completed
           * @example false
           */
          enableMargin: boolean;
          /**
           * Expiration time for spot and margin trading permission
           * @format int64
           * @example 1628985600000
           */
          tradingAuthorityExpirationTime: number;
        },
        Error
      >({
        path: `/sapi/v1/account/apiRestrictions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a user's auto-conversion settings in deposit/withdrawal Weight(UID): 600'
     *
     * @tags Wallet
     * @name V1CapitalContractConvertibleCoinsList
     * @summary Query auto-converting stable coins (USER_DATA)
     * @request GET:/sapi/v1/capital/contract/convertible-coins
     * @secure
     */
    v1CapitalContractConvertibleCoinsList: (params: RequestParams = {}) =>
      this.request<
        {
          convertEnabled: boolean;
          coins: string[];
          exchangeRates: {
            /** @example "1" */
            USDC: string;
            /** @example "1" */
            TUSD: string;
            /** @example "1" */
            USDP: string;
          };
        },
        Error
      >({
        path: `/sapi/v1/capital/contract/convertible-coins`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin. Weight(UID): 600'
     *
     * @tags Wallet
     * @name V1CapitalContractConvertibleCoinsCreate
     * @summary Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA)
     * @request POST:/sapi/v1/capital/contract/convertible-coins
     * @secure
     */
    v1CapitalContractConvertibleCoinsCreate: (
      query: {
        /** Must be USDC, USDP or TUSD */
        coin: string;
        /** true: turn on the auto-conversion. false: turn off the auto-conversion */
        enable: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/capital/contract/convertible-coins`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - This request will generate a virtual sub account under your master account. - You need to enable "trade" option for the api key which requests this endpoint. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountVirtualSubAccountCreate
     * @summary Create a Virtual Sub-account(For Master Account)
     * @request POST:/sapi/v1/sub-account/virtualSubAccount
     * @secure
     */
    v1SubAccountVirtualSubAccountCreate: (
      query: {
        /** Please input a string. We will create a virtual email using that string for you to register */
        subAccountString: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "addsdd_virtual@aasaixwqnoemail.com" */
          email: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/virtualSubAccount`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountListList
     * @summary Query Sub-account List (For Master Account)
     * @request GET:/sapi/v1/sub-account/list
     * @secure
     */
    v1SubAccountListList: (
      query: {
        /** Sub-account email */
        email?: string;
        isFreeze?: "true" | "false";
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 1; max 200
         * @format int32
         * @example 1
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          subAccounts: {
            /** @example "testsub@gmail.com" */
            email: string;
            /** @example false */
            isFreeze: boolean;
            /**
             * @format int64
             * @example 1544433328000
             */
            createTime: number;
            /** @example false */
            isManagedSubAccount: boolean;
            /** @example false */
            isAssetManagementSubAccount: boolean;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - fromEmail and toEmail cannot be sent at the same time. - Return fromEmail equal master account email by default. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountSubTransferHistoryList
     * @summary Sub-account Spot Asset Transfer History (For Master Account)
     * @request GET:/sapi/v1/sub-account/sub/transfer/history
     * @secure
     */
    v1SubAccountSubTransferHistoryList: (
      query: {
        /** Sub-account email */
        fromEmail?: string;
        /** Sub-account email */
        toEmail?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "aaa@test.com" */
          from: string;
          /** @example "bbb@test.com" */
          to: string;
          /** @example "BTC" */
          asset: string;
          /** @example 10 */
          qty: string;
          /** @example "SUCCESS" */
          status: string;
          /**
           * @format int64
           * @example 6489943656
           */
          tranId: number;
          /**
           * @format int64
           * @example 1544433328000
           */
          time: number;
        }[],
        Error
      >({
        path: `/sapi/v1/sub-account/sub/transfer/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesInternalTransferList
     * @summary Sub-account Futures Asset Transfer History (For Master Account)
     * @request GET:/sapi/v1/sub-account/futures/internalTransfer
     * @secure
     */
    v1SubAccountFuturesInternalTransferList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * 1:USDT-margined Futures, 2: Coin-margined Futures
         * @format int32
         * @example 2
         */
        futuresType: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default value: 50, Max value: 500
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          /**
           * @format int32
           * @example 2
           */
          futuresType: number;
          transfers: {
            /** @example "aaa@test.com" */
            from: string;
            /** @example "bbb@test.com" */
            to: string;
            /** @example "BTC" */
            asset: string;
            /** @example "1" */
            qty: string;
            /**
             * @format int64
             * @example 11897001102
             */
            tranId: number;
            /**
             * @format int64
             * @example 1544433328000
             */
            time: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/internalTransfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Master account can transfer max 2000 times a minute Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesInternalTransferCreate
     * @summary Sub-account Futures Asset Transfer (For Master Account)
     * @request POST:/sapi/v1/sub-account/futures/internalTransfer
     * @secure
     */
    v1SubAccountFuturesInternalTransferCreate: (
      query: {
        /** Sender email */
        fromEmail: string;
        /** Recipient email */
        toEmail: string;
        /**
         * 1:USDT-margined Futures,2: Coin-margined Futures
         * @format int32
         * @example 2
         */
        futuresType: number;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          /** @example "2934662589" */
          txnId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/internalTransfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch sub-account assets Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V3SubAccountAssetsList
     * @summary Sub-account Assets (For Master Account)
     * @request GET:/sapi/v3/sub-account/assets
     * @secure
     */
    v3SubAccountAssetsList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          balances: {
            /** @example "ADA" */
            asset: string;
            /**
             * @format int64
             * @example 10000
             */
            free: number;
            /**
             * @format int64
             * @example 0
             */
            locked: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v3/sub-account/assets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get BTC valued asset summary of subaccounts. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountSpotSummaryList
     * @summary Sub-account Spot Assets Summary (For Master Account)
     * @request GET:/sapi/v1/sub-account/spotSummary
     * @secure
     */
    v1SubAccountSpotSummaryList: (
      query: {
        /** Sub-account email */
        email?: string;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default:10 Max:20
         * @format int32
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          totalCount: number;
          /** @example "0.23231201" */
          masterAccountTotalAsset: string;
          spotSubUserAssetBtcVoList: {
            /** @example "sub123@test.com" */
            email: string;
            /** @example "9999.00000000" */
            totalAsset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/spotSummary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch sub-account deposit address Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1CapitalDepositSubAddressList
     * @summary Sub-account Spot Assets Summary (For Master Account)
     * @request GET:/sapi/v1/capital/deposit/subAddress
     * @secure
     */
    v1CapitalDepositSubAddressList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * Coin name
         * @example "BNB"
         */
        coin: string;
        /** @example "BTC" */
        network?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV" */
          address: string;
          /** @example "USDT" */
          coin: string;
          /** @example "" */
          tag: string;
          /** @example "https://tronscan.org/#/address/TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV" */
          url: string;
        },
        Error
      >({
        path: `/sapi/v1/capital/deposit/subAddress`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch sub-account deposit history Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1CapitalDepositSubHisrecList
     * @summary Sub-account Deposit History (For Master Account)
     * @request GET:/sapi/v1/capital/deposit/subHisrec
     * @secure
     */
    v1CapitalDepositSubHisrecList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        /**
         * 0(0:pending,6: credited but cannot withdraw, 1:success)
         * @format int32
         */
        status?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** @format int64 */
        limit?: number;
        /** @format int32 */
        offset?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.00999800" */
          amount: string;
          /** @example "PAXG" */
          coin: string;
          /** @example "ETH" */
          network: string;
          /**
           * @format int32
           * @example 1
           */
          status: number;
          /** @example "0x788cabe9236ce061e5a892e1a59395a81fc8d62c" */
          address: string;
          /** @example "" */
          addressTag: string;
          /** @example "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3" */
          txId: string;
          /**
           * @format int64
           * @example 1599621997000
           */
          insertTime: number;
          /**
           * @format int32
           * @example 0
           */
          transferType: number;
          /** @example "12/12" */
          confirmTimes: string;
        }[],
        Error
      >({
        path: `/sapi/v1/capital/deposit/subHisrec`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply deposit credit for expired address (One click arrival) Weight(IP): 1
     *
     * @tags Wallet
     * @name V1CapitalDepositCreditApplyCreate
     * @summary One click arrival deposit apply (USER_DATA)
     * @request POST:/sapi/v1/capital/deposit/credit-apply
     * @secure
     */
    v1CapitalDepositCreditApplyCreate: (
      query: {
        /**
         * Deposit record Id, priority use
         * @format int64
         */
        depositId?: number;
        /** Deposit txId, used when depositId is not specified */
        txId?: string;
        /** @format int64 */
        subAccountId?: number;
        /** @format int64 */
        subUserId?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          /** @example true */
          data: boolean;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/capital/deposit/credit-apply`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query User Wallet Balance Weight(IP): 60
     *
     * @tags Wallet
     * @name V1AssetWalletBalanceList
     * @summary Query User Wallet Balance (USER_DATA)
     * @request GET:/sapi/v1/asset/wallet/balance
     * @secure
     */
    v1AssetWalletBalanceList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          activate: boolean;
          /** @example "0" */
          balance: string;
          /** @example "Spot" */
          walletName: string;
        }[],
        Error
      >({
        path: `/sapi/v1/asset/wallet/balance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query User Delegation History Weight(IP): 60
     *
     * @tags Wallet
     * @name V1AssetCustodyTransferHistoryList
     * @summary Query User Delegation History(For Master Account) (USER_DATA)
     * @request GET:/sapi/v1/asset/custody/transfer-history
     * @secure
     */
    v1AssetCustodyTransferHistoryList: (
      query: {
        /** @example "alice@test.com" */
        email: string;
        /**
         * @format int64
         * @example 1695205406000
         */
        startTime: number;
        /**
         * @format int64
         * @example 1695205396000
         */
        endTime: number;
        /** @example "Delegate" */
        type?: string;
        /** @example "BTC" */
        asset: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 3316 */
          total: number;
          rows: {
            /** @example "293915932290879488" */
            clientTranId: string;
            /** @example "Undelegate" */
            transferType: string;
            /** @example "ETH" */
            asset: string;
            /** @example "1" */
            amount: string;
            /**
             * @format int64
             * @example 1695205406000
             */
            time: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/asset/custody/transfer-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch deposit address list with network. Weight(IP): 10
     *
     * @tags Wallet
     * @name V1CapitalDepositAddressListList
     * @summary Fetch deposit address list with network (USER_DATA)
     * @request GET:/sapi/v1/capital/deposit/address/list
     * @secure
     */
    v1CapitalDepositAddressListList: (
      query: {
        /** @example "BTC" */
        coin: string;
        /** @example "BTC" */
        network?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "ETH" */
          coin: string;
          /** @example "0xD316E95Fd9E8E237Cb11f8200Babbc5D8D177BA4" */
          address: string;
          /**
           * @format int32
           * @example 1
           */
          isDefault: number;
        }[],
        Error
      >({
        path: `/sapi/v1/capital/deposit/address/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If no `email` sent, all sub-accounts' information will be returned. Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V1SubAccountStatusList
     * @summary Sub-account's Status on Margin/Futures (For Master Account)
     * @request GET:/sapi/v1/sub-account/status
     * @secure
     */
    v1SubAccountStatusList: (
      query: {
        /** Sub-account email */
        email?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123@test.com" */
          email: string;
          isSubUserEnabled: boolean;
          isUserActive: boolean;
          /**
           * sub account create time
           * @format int64
           * @example 1570791523523
           */
          insertTime: number;
          isMarginEnabled: boolean;
          isFutureEnabled: boolean;
          /**
           * user mobile number
           * @format int64
           * @example 1570791523523
           */
          mobile: number;
        }[],
        Error
      >({
        path: `/sapi/v1/sub-account/status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountMarginEnableCreate
     * @summary Enable Margin for Sub-account (For Master Account)
     * @request POST:/sapi/v1/sub-account/margin/enable
     * @secure
     */
    v1SubAccountMarginEnableCreate: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123@test.com" */
          email: string;
          isMarginEnabled: boolean;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/margin/enable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V1SubAccountMarginAccountList
     * @summary Detail on Sub-account's Margin Account (For Master Account)
     * @request GET:/sapi/v1/sub-account/margin/account
     * @secure
     */
    v1SubAccountMarginAccountList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123@test.com" */
          email: string;
          /** @example "11.64405625" */
          marginLevel: string;
          /** @example "6.82728457" */
          totalAssetOfBtc: string;
          /** @example "0.58633215" */
          totalLiabilityOfBtc: string;
          /** @example "6.24095242" */
          totalNetAssetOfBtc: string;
          marginTradeCoeffVo: {
            /**
             * Liquidation margin ratio
             * @example "1.10000000"
             */
            forceLiquidationBar: string;
            /**
             * Margin call margin ratio
             * @example "1.50000000"
             */
            marginCallBar: string;
            /**
             * Initial margin ratio
             * @example "2.00000000"
             */
            normalBar: string;
          };
          marginUserAssetVoList: {
            /** @example "BTC" */
            asset: string;
            /** @example "0.00000000" */
            borrowed: string;
            /** @example "0.00499500" */
            free: string;
            /** @example "0.00000000" */
            interest: string;
            /** @example "0.00000000" */
            locked: string;
            /** @example "0.00499500" */
            netAsset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/margin/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V1SubAccountMarginAccountSummaryList
     * @summary Summary of Sub-account's Margin Account (For Master Account)
     * @request GET:/sapi/v1/sub-account/margin/accountSummary
     * @secure
     */
    v1SubAccountMarginAccountSummaryList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "4.33333333" */
          totalAssetOfBtc: string;
          /** @example "2.11111112" */
          totalLiabilityOfBtc: string;
          /** @example "2.22222221" */
          totalNetAssetOfBtc: string;
          subAccountList: {
            /** @example "123@test.com" */
            email: string;
            /** @example "2.11111111" */
            totalAssetOfBtc: string;
            /** @example "1.11111111" */
            totalLiabilityOfBtc: string;
            /** @example "1.00000000" */
            totalNetAssetOfBtc: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/margin/accountSummary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesEnableCreate
     * @summary Enable Futures for Sub-account (For Master Account)
     * @request POST:/sapi/v1/sub-account/futures/enable
     * @secure
     */
    v1SubAccountFuturesEnableCreate: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123@test.com" */
          email: string;
          isFuturesEnabled: boolean;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/enable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesAccountList
     * @summary Detail on Sub-account's Futures Account (For Master Account)
     * @request GET:/sapi/v1/sub-account/futures/account
     * @secure
     */
    v1SubAccountFuturesAccountList: (
      query: {
        /** @example "alice@test.com" */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "abc@test.com" */
          email: string;
          /** @example "USDT" */
          asset: string;
          assets: {
            /** @example "USDT" */
            asset: string;
            /** @example "0.00000000" */
            initialMargin: string;
            /** @example "0.00000000" */
            maintenanceMargin: string;
            /** @example "0.88308000" */
            marginBalance: string;
            /** @example "0.88308000" */
            maxWithdrawAmount: string;
            /** @example "0.00000000" */
            openOrderInitialMargin: string;
            /** @example "0.00000000" */
            positionInitialMargin: string;
            /** @example "0.00000000" */
            unrealizedProfit: string;
            /** @example "0.88308000" */
            walletBalance: string;
          }[];
          canDeposit: boolean;
          canTrade: boolean;
          canWithdraw: boolean;
          /**
           * @format int64
           * @example 2
           */
          feeTier: number;
          /** @example "0.88308000" */
          maxWithdrawAmount: string;
          /** @example "0.00000000" */
          totalInitialMargin: string;
          /** @example "0.00000000" */
          totalMaintenanceMargin: string;
          /** @example "0.88308000" */
          totalMarginBalance: string;
          /** @example "0.00000000" */
          totalOpenOrderInitialMargin: string;
          /** @example "0.00000000" */
          totalPositionInitialMargin: string;
          /** @example "0.00000000" */
          totalUnrealizedProfit: string;
          /** @example "0.88308000" */
          totalWalletBalance: string;
          /**
           * @format int64
           * @example 1576756674610
           */
          updateTime: number;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesAccountSummaryList
     * @summary Summary of Sub-account's Futures Account (For Master Account)
     * @request GET:/sapi/v1/sub-account/futures/accountSummary
     * @secure
     */
    v1SubAccountFuturesAccountSummaryList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "9.83137400" */
          totalInitialMargin: string;
          /** @example "0.41568700" */
          totalMaintenanceMargin: string;
          /** @example "23.03235621" */
          totalMarginBalance: string;
          /** @example "9.00000000" */
          totalOpenOrderInitialMargin: string;
          /** @example "0.83137400" */
          totalPositionInitialMargin: string;
          /** @example "0.03219710" */
          totalUnrealizedProfit: string;
          /** @example "22.15879444" */
          totalWalletBalance: string;
          /** @example "USD" */
          asset: string;
          subAccountList: {
            /** @example "123@test.com" */
            email: string;
            /** @example "9.00000000" */
            totalInitialMargin: string;
            /** @example "0.00000000" */
            totalMaintenanceMargin: string;
            /** @example "22.12659734" */
            totalMarginBalance: string;
            /** @example "9.00000000" */
            totalOpenOrderInitialMargin: string;
            /** @example "0.00000000" */
            totalPositionInitialMargin: string;
            /** @example "0.00000000" */
            totalUnrealizedProfit: string;
            /** @example "22.12659734" */
            totalWalletBalance: string;
            /** @example "USD" */
            asset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/accountSummary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesPositionRiskList
     * @summary Futures Position-Risk of Sub-account (For Master Account)
     * @request GET:/sapi/v1/sub-account/futures/positionRisk
     * @secure
     */
    v1SubAccountFuturesPositionRiskList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "9975.12000" */
          entryPrice: string;
          /**
           * current initial leverage
           * @example "50"
           */
          leverage: string;
          /**
           * notional value limit of current initial leverage
           * @example "1000000"
           */
          maxNotional: string;
          /** @example "7963.54" */
          liquidationPrice: string;
          /** @example "9973.50770517" */
          markPrice: string;
          /** @example "0.010" */
          positionAmount: string;
          /** @example "BTCUSDT" */
          symbol: string;
          /** @example "-0.01612295" */
          unrealizedProfit: string;
        }[],
        Error
      >({
        path: `/sapi/v1/sub-account/futures/positionRisk`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountFuturesTransferCreate
     * @summary Transfer for Sub-account (For Master Account)
     * @request POST:/sapi/v1/sub-account/futures/transfer
     * @secure
     */
    v1SubAccountFuturesTransferCreate: (
      query: {
        /** Sub-account email */
        email: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * * `1` - transfer from subaccount's spot account to its USDT-margined futures account
         * * `2` - transfer from subaccount's USDT-margined futures account to its spot account
         * * `3` - transfer from subaccount's spot account to its COIN-margined futures account
         * * `4` - transfer from subaccount's COIN-margined futures account to its spot account
         * @format int32
         * @min 1
         * @max 4
         */
        type: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "2966662589" */
          txnId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/futures/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountMarginTransferCreate
     * @summary Margin Transfer for Sub-account (For Master Account)
     * @request POST:/sapi/v1/sub-account/margin/transfer
     * @secure
     */
    v1SubAccountMarginTransferCreate: (
      query: {
        /** Sub-account email */
        email: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * * `1` - transfer from subaccount's spot account to margin account
         * * `2` - transfer from subaccount's margin account to its spot account
         * @format int32
         * @min 1
         * @max 2
         */
        type: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "2966662589" */
          txnId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/margin/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountTransferSubToSubCreate
     * @summary Transfer to Sub-account of Same Master (For Sub-account)
     * @request POST:/sapi/v1/sub-account/transfer/subToSub
     * @secure
     */
    v1SubAccountTransferSubToSubCreate: (
      query: {
        /** Recipient email */
        toEmail: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "2966662589" */
          txnId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/transfer/subToSub`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountTransferSubToMasterCreate
     * @summary Transfer to Master (For Sub-account)
     * @request POST:/sapi/v1/sub-account/transfer/subToMaster
     * @secure
     */
    v1SubAccountTransferSubToMasterCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "2966662589" */
          txnId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/transfer/subToMaster`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If `type` is not sent, the records of type 2: transfer out will be returned by default. - If `startTime` and `endTime` are not sent, the recent 30-day data will be returned. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountTransferSubUserHistoryList
     * @summary Sub-account Transfer History (For Sub-account)
     * @request GET:/sapi/v1/sub-account/transfer/subUserHistory
     * @secure
     */
    v1SubAccountTransferSubUserHistoryList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * * `1` - transfer in
         * * `2` - transfer out
         * @format int32
         */
        type?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "master" */
          counterParty: string;
          /** @example "master@test.com" */
          email: string;
          /**
           * 1 for transfer in, 2 for transfer out
           * @format int32
           * @example 1
           */
          type: number;
          /** @example "BTC" */
          asset: string;
          /** @example "1" */
          qty: string;
          /** @example "SPOT" */
          fromAccountType: string;
          /** @example "SPOT" */
          toAccountType: string;
          /** @example "SUCCESS" */
          status: string;
          /**
           * @format int64
           * @example 11798835829
           */
          tranId: number;
          /**
           * @format int64
           * @example 1544433325000
           */
          time: number;
        }[],
        Error
      >({
        path: `/sapi/v1/sub-account/transfer/subUserHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - `fromEmail` and `toEmail` cannot be sent at the same time. - Return `fromEmail` equal master account email by default. - The query time period must be less then 30 days. - If startTime and endTime not sent, return records of the last 30 days by default. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountUniversalTransferList
     * @summary Universal Transfer History (For Master Account)
     * @request GET:/sapi/v1/sub-account/universalTransfer
     * @secure
     */
    v1SubAccountUniversalTransferList: (
      query: {
        /** Sub-account email */
        fromEmail?: string;
        /** Sub-account email */
        toEmail?: string;
        clientTranId?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 500, Max 500
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 11945860693
           */
          tranId: number;
          /** @example "master@test.com" */
          fromEmail: string;
          /** @example "subaccount1@test.com" */
          toEmail: string;
          /** @example "BTC" */
          asset: string;
          /** @example "0.1" */
          amount: string;
          /** @example "SPOT" */
          fromAccountType: string;
          /** @example "COIN_FUTURE" */
          toAccountType: string;
          /** @example "SUCCESS" */
          status: string;
          /**
           * @format int64
           * @example 1544433325000
           */
          createTimeStamp: number;
          /** @example "11945860694" */
          clientTranId: string;
        }[],
        Error
      >({
        path: `/sapi/v1/sub-account/universalTransfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - You need to enable "internal transfer" option for the api key which requests this endpoint. - Transfer from master account by default if fromEmail is not sent. - Transfer to master account by default if toEmail is not sent. - Supported transfer scenarios: - Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT - Transfer between two sub-account SPOT accounts Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountUniversalTransferCreate
     * @summary Universal Transfer (For Master Account)
     * @request POST:/sapi/v1/sub-account/universalTransfer
     * @secure
     */
    v1SubAccountUniversalTransferCreate: (
      query: {
        /** Sub-account email */
        fromEmail?: string;
        /** Sub-account email */
        toEmail?: string;
        fromAccountType: "SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN";
        toAccountType: "SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN";
        clientTranId?: string;
        /**
         * Only supported under ISOLATED_MARGIN type
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 11945860693
           */
          tranId: number;
          /** @example "11945860694" */
          clientTranId: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/universalTransfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V2SubAccountFuturesAccountList
     * @summary Detail on Sub-account's Futures Account V2 (For Master Account)
     * @request GET:/sapi/v2/sub-account/futures/account
     * @secure
     */
    v2SubAccountFuturesAccountList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * * `1` - USDT Margined Futures
         * * `2` - COIN Margined Futures
         * @format int32
         * @example 1
         */
        futuresType: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubAccountUSDTFuturesDetails | SubAccountCOINFuturesDetails, Error>({
        path: `/sapi/v2/sub-account/futures/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Sub-Account
     * @name V2SubAccountFuturesAccountSummaryList
     * @summary Summary of Sub-account's Futures Account V2 (For Master Account)
     * @request GET:/sapi/v2/sub-account/futures/accountSummary
     * @secure
     */
    v2SubAccountFuturesAccountSummaryList: (
      query: {
        /**
         * * `1` - USDT Margined Futures
         * * `2` - COIN Margined Futures
         * @format int32
         * @example 1
         */
        futuresType: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 10, Max 20
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubAccountUSDTFuturesSummary | SubAccountCOINFuturesSummary, Error>({
        path: `/sapi/v2/sub-account/futures/accountSummary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V2SubAccountFuturesPositionRiskList
     * @summary Futures Position-Risk of Sub-account V2 (For Master Account)
     * @request GET:/sapi/v2/sub-account/futures/positionRisk
     * @secure
     */
    v2SubAccountFuturesPositionRiskList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * * `1` - USDT Margined Futures
         * * `2` - COIN Margined Futures
         * @format int32
         * @example 1
         */
        futuresType: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubAccountUSDTFuturesPositionRisk | SubAccountCOINFuturesPositionRisk, Error>({
        path: `/sapi/v2/sub-account/futures/positionRisk`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountBlvtEnableCreate
     * @summary Enable Leverage Token for Sub-account (For Master Account)
     * @request POST:/sapi/v1/sub-account/blvt/enable
     * @secure
     */
    v1SubAccountBlvtEnableCreate: (
      query: {
        /** Sub-account email */
        email: string;
        /** Only true for now */
        enableBlvt: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123@test.com" */
          email: string;
          enableBlvt: boolean;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/blvt/enable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountDepositCreate
     * @summary Deposit assets into the managed sub-account(For Investor Master Account)
     * @request POST:/sapi/v1/managed-subaccount/deposit
     * @secure
     */
    v1ManagedSubaccountDepositCreate: (
      query: {
        /** Recipient email */
        toEmail: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 66157362489
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/deposit`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountAssetList
     * @summary Managed sub-account asset details(For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/asset
     * @secure
     */
    v1ManagedSubaccountAssetList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "INJ" */
          coin: string;
          /** @example "Injective Protocol" */
          name: string;
          /** @example "0" */
          totalBalance: string;
          /** @example "0" */
          availableBalance: string;
          /** @example "0" */
          inOrder: string;
          /** @example "0" */
          btcValue: string;
        }[],
        Error
      >({
        path: `/sapi/v1/managed-subaccount/asset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountWithdrawCreate
     * @summary Withdrawl assets from the managed sub-account(For Investor Master Account)
     * @request POST:/sapi/v1/managed-subaccount/withdraw
     * @secure
     */
    v1ManagedSubaccountWithdrawCreate: (
      query: {
        /** Sender email */
        fromEmail: string;
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now
         * @format int64
         */
        transferDate?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 66157362489
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/withdraw`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The query time period must be less then 30 days - Support query within the last one month only - If `startTime` and `endTime` not sent, return records of the last 7 days by default Weight(IP): 2400
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountAccountSnapshotList
     * @summary Managed sub-account snapshot (For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/accountSnapshot
     */
    v1ManagedSubaccountAccountSnapshotList: (
      query: {
        /** Sub-account email */
        email: string;
        /**
         * "SPOT", "MARGIN"(cross), "FUTURES"(UM)
         * @example "SPOT"
         */
        type: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * min 7, max 30, default 7
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 200
           */
          code: number;
          /** @example "" */
          msg: string;
          snapshotVos: {
            data: {
              balances: {
                /** @example "BTC" */
                asset: string;
                /** @example "0.09905021" */
                free: string;
                /** @example "0.00000000" */
                locked: string;
              }[];
              /** @example "0.09942700" */
              totalAssetOfBtc: string;
            };
            /** @example "spot" */
            type: string;
            /**
             * @format int64
             * @example 1576281599000
             */
            updateTime: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/accountSnapshot`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team. Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountQueryTransLogForInvestorList
     * @summary Query Managed Sub Account Transfer Log (For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/queryTransLogForInvestor
     * @secure
     */
    v1ManagedSubaccountQueryTransLogForInvestorList: (
      query: {
        email: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * Transfer Direction (FROM/TO)
         * @example "FROM"
         */
        transfers?: string;
        /**
         * Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
         * @example "SPOT"
         */
        transferFunctionAccountType?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 2
           */
          count: number;
          managerSubTransferHistoryVos: {
            /** @example "test_0_virtual@kq3kno9imanagedsub.com" */
            fromEmail: string;
            /** @example "SPOT" */
            fromAccountType: string;
            /** @example "wdywl0lddakh@test.com" */
            toEmail: string;
            /** @example "SPOT" */
            toAccountType: string;
            /** @example "BNB" */
            asset: string;
            /** @example "0.01" */
            amount: string;
            /**
             * @format int64
             * @example 1626144956000
             */
            scheduledData: number;
            /**
             * @format int64
             * @example 1626144956000
             */
            createTime: number;
            /** @example "SUCCESS" */
            status: string;
            /** @example 91077779 */
            tranId: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/queryTransLogForInvestor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team Weight(IP): 60
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountQueryTransLogForTradeParentList
     * @summary Query Managed Sub Account Transfer Log (For Trading Team Master Account)
     * @request GET:/sapi/v1/managed-subaccount/queryTransLogForTradeParent
     * @secure
     */
    v1ManagedSubaccountQueryTransLogForTradeParentList: (
      query: {
        email: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * Transfer Direction (FROM/TO)
         * @example "FROM"
         */
        transfers?: string;
        /**
         * Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
         * @example "SPOT"
         */
        transferFunctionAccountType?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 2
           */
          count: number;
          managerSubTransferHistoryVos: {
            /** @example "test_0_virtual@kq3kno9imanagedsub.com" */
            fromEmail: string;
            /** @example "SPOT" */
            fromAccountType: string;
            /** @example "wdywl0lddakh@test.com" */
            toEmail: string;
            /** @example "SPOT" */
            toAccountType: string;
            /** @example "BNB" */
            asset: string;
            /** @example "0.01" */
            amount: string;
            /**
             * @format int64
             * @example 1626144956000
             */
            scheduledData: number;
            /**
             * @format int64
             * @example 1626144956000
             */
            createTime: number;
            /** @example "SUCCESS" */
            status: string;
            /** @example 91077779 */
            tranId: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/queryTransLogForTradeParent`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Investor can use this api to query managed sub account futures asset details
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountFetchFutureAssetList
     * @summary Query Managed Sub-account Futures Asset Details (For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/fetch-future-asset
     * @secure
     */
    v1ManagedSubaccountFetchFutureAssetList: (
      query: {
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 200
           */
          code: number;
          /** @example "OK" */
          message: string;
          snapshotVos: {
            /** @example "FUTURES" */
            type: string;
            /**
             * @format int64
             * @example 1626400907000
             */
            updateTime: number;
            data: {
              assets: {
                /** @example "USDT" */
                asset: string;
                /**
                 * @format float
                 * @example 100
                 */
                marginBalance: number;
                /**
                 * @format float
                 * @example 100
                 */
                walletBalance: number;
              }[];
              position: {
                /** @example "BTCUSDT" */
                symbol: string;
                /**
                 * @format float
                 * @example 17000
                 */
                entryPrice: number;
                /**
                 * @format float
                 * @example 17000
                 */
                markPrice: number;
                /**
                 * @format float
                 * @example 0.1
                 */
                positionAmt: number;
              }[];
            };
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/fetch-future-asset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Investor can use this api to query managed sub account margin asset details
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountMarginAssetList
     * @summary Query Managed Sub-account Margin Asset Details (For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/marginAsset
     * @secure
     */
    v1ManagedSubaccountMarginAssetList: (
      query: {
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "999" */
          marginLevel: string;
          /** @example "0" */
          totalAssetOfBtc: string;
          /** @example "0" */
          totalLiabilityOfBtc: string;
          /** @example "0" */
          totalNetAssetOfBtc: string;
          userAssets: {
            /** @example "BTC" */
            asset: string;
            /** @example "0" */
            borrowed: string;
            /** @example "0" */
            free: string;
            /** @example "0" */
            interest: string;
            /** @example "0" */
            locked: string;
            /** @example "0" */
            netAsset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/marginAsset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get investor's managed sub-account list. Weight(UID): 60
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountInfoList
     * @summary Query Managed Sub-account List (For Investor)
     * @request GET:/sapi/v1/managed-subaccount/info
     * @secure
     */
    v1ManagedSubaccountInfoList: (
      query: {
        email: string;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 3 */
          total: number;
          managerSubUserInfoVoList: {
            /**
             * @format int64
             * @example 1000138475670
             */
            rootUserId: number;
            /**
             * @format int64
             * @example 1000137842513
             */
            managersubUserId: number;
            /**
             * @format int64
             * @example 1000138475669
             */
            bindParentUserId: number;
            /** @example "test_0_virtual@kq3kno9imanagedsub.com" */
            email?: string;
            /**
             * @format int64
             * @example 1678435149000
             */
            insertTimeStamp: number;
            /** @example "wdyw8xsh8pey@test.com" */
            bindParentEmail: string;
            /** @example true */
            isSubUserEnabled: boolean;
            /** @example true */
            isUserActive: boolean;
            /** @example true */
            isMarginEnabled: boolean;
            /** @example true */
            isFutureEnabled: boolean;
            /** @example true */
            isSignedLVTRiskAgreement: boolean;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/info`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get investor's managed sub-account deposit address Weight(UID): 1
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountDepositAddressList
     * @summary Get Managed Sub-account Deposit Address (For Investor Master Account)
     * @request GET:/sapi/v1/managed-subaccount/deposit/address
     * @secure
     */
    v1ManagedSubaccountDepositAddressList: (
      query: {
        email: string;
        /**
         * Coin name
         * @example "BNB"
         */
        coin: string;
        /** @example "BTC" */
        network?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          coin: string;
          /** @example "0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d" */
          address: string;
          tag: string;
          /** @example "https://etherscan.io/address/0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d" */
          url: string;
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/deposit/address`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Managed Sub Account Transfer Log (For Trading Team Sub Account) Weight(UID): 60
     *
     * @tags Sub-Account
     * @name V1ManagedSubaccountQueryTransLogList
     * @summary Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA)
     * @request GET:/sapi/v1/managed-subaccount/query-trans-log
     * @secure
     */
    v1ManagedSubaccountQueryTransLogList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /** Transfer Direction */
        transfers: "FROM" | "TO";
        /** Transfer function account type */
        transferFunctionAccountType: "SPOT" | "MARGIN" | "ISOLATED_MARGIN" | "USDT_FUTURE" | "COIN_FUTURE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 2 */
          count: number;
          managerSubTransferHistoryVos: {
            /** @example "test_0_virtual@kq3kno9imanagedsub.com" */
            fromEmail: string;
            /** @example "SPOT" */
            fromAccountType: string;
            /** @example "wdywl0lddakh@test.com" */
            toEmail: string;
            /** @example "SPOT" */
            toAccountType: string;
            /** @example "BNB" */
            asset: string;
            /** @example "0.01" */
            amount: string;
            /**
             * @format int64
             * @example 1679416673000
             */
            scheduledData: number;
            /**
             * @format int64
             * @example 1679416673000
             */
            createTime: number;
            /** @example "SUCCESS" */
            status: string;
            /**
             * @format int64
             * @example 91077779
             */
            tranId: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/managed-subaccount/query-trans-log`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 3000
     *
     * @tags Sub-Account
     * @name V1SubAccountSubAccountApiIpRestrictionList
     * @summary Get IP Restriction for a Sub-account API Key (For Master Account)
     * @request GET:/sapi/v1/sub-account/subAccountApi/ipRestriction
     * @secure
     */
    v1SubAccountSubAccountApiIpRestrictionList: (
      query: {
        /** Sub-account email */
        email: string;
        subAccountApiKey: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "true" */
          ipRestrict: string;
          /** @example ["69.210.67.14","8.34.21.10"] */
          ipList: string[];
          /**
           * @format int64
           * @example 1636369557189
           */
          updateTime: number;
          /** @example "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" */
          apiKey: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/subAccountApi/ipRestriction`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 3000
     *
     * @tags Sub-Account
     * @name V1SubAccountSubAccountApiIpRestrictionIpListDelete
     * @summary Delete IP List for a Sub-account API Key (For Master Account)
     * @request DELETE:/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList
     * @secure
     */
    v1SubAccountSubAccountApiIpRestrictionIpListDelete: (
      query: {
        /** Sub-account email */
        email: string;
        subAccountApiKey: string;
        /** Can be added in batches, separated by commas */
        ipAddress?: string;
        /** third party IP list name */
        thirdPartyName?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "true" */
          ipRestrict: string;
          /** @example ["69.210.67.14","thirdPartyName"] */
          ipList: string[];
          /**
           * @format int64
           * @example 1636369557189
           */
          updateTime: number;
          /** @example "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" */
          apiKey: string;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Sub-account Transaction statistics (For Master Account). Weight(UID): 60
     *
     * @tags Sub-Account
     * @name V1SubAccountTransactionStatisticsList
     * @summary Query Sub-account Transaction Statistics (For Master Account)
     * @request GET:/sapi/v1/sub-account/transaction-statistics
     * @secure
     */
    v1SubAccountTransactionStatisticsList: (
      query: {
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0" */
          recent30BtcTotal: string;
          /** @example "0" */
          recent30BtcFuturesTotal: string;
          /** @example "0" */
          recent30BtcMarginTotal: string;
          /** @example "0" */
          recent30BusdTotal: string;
          /** @example "0" */
          recent30BusdFuturesTotal: string;
          /** @example "0" */
          recent30BusdMarginTotal: string;
          tradeInfoVos: {
            /**
             * @format int64
             * @example 1000138138384
             */
            userId?: number;
            /**
             * @format float
             * @example 0
             */
            btc?: number;
            /**
             * @format float
             * @example 0
             */
            btcFutures?: number;
            /**
             * @format float
             * @example 0
             */
            btcMargin?: number;
            /**
             * @format float
             * @example 0
             */
            busd?: number;
            /**
             * @format float
             * @example 0
             */
            busdFutures?: number;
            /**
             * @format float
             * @example 0
             */
            busdMargin?: number;
            /**
             * @format int64
             * @example 1676851200000
             */
            date?: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/sub-account/transaction-statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enable Options for Sub-account (For Master Account). Weight(IP): 1
     *
     * @tags Sub-Account
     * @name V1SubAccountEoptionsEnableCreate
     * @summary Enable Options for Sub-account (For Master Account)(USER_DATA)
     * @request POST:/sapi/v1/sub-account/eoptions/enable
     * @secure
     */
    v1SubAccountEoptionsEnableCreate: (
      query: {
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "alice@test.com" */
          email: string;
          /** @example true */
          isEOptionsEnabled: boolean;
        },
        Error
      >({
        path: `/sapi/v1/sub-account/eoptions/enable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update IP Restriction for Sub-Account API key Weight(UID): 3000
     *
     * @tags Sub-Account
     * @name V2SubAccountSubAccountApiIpRestrictionCreate
     * @summary Update IP Restriction for Sub-Account API key (For Master Account)
     * @request POST:/sapi/v2/sub-account/subAccountApi/ipRestriction
     * @secure
     */
    v2SubAccountSubAccountApiIpRestrictionCreate: (
      query: {
        /** Sub-account email */
        email: string;
        subAccountApiKey: string;
        /**
         * IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only
         * @example "1"
         */
        status: string;
        /** third party IP list name */
        thirdPartyName?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "2" */
          status: string;
          /** @example ["69.210.67.14","8.34.21.10","thirdPartyName"] */
          ipList: string[];
          /**
           * @format int64
           * @example 1636369557189
           */
          updateTime: number;
          /** @example "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf" */
          apiKey: string;
        },
        Error
      >({
        path: `/sapi/v2/sub-account/subAccountApi/ipRestriction`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch sub-account assets Weight(UID): 60
     *
     * @tags Sub-Account
     * @name V4SubAccountAssetsList
     * @summary Query Sub-account Assets (For Master Account)
     * @request GET:/sapi/v4/sub-account/assets
     * @secure
     */
    v4SubAccountAssetsList: (
      query: {
        email: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          balances: {
            /** @example "BNB" */
            asset: string;
            /** @example "10000" */
            free: string;
            /** @example "0" */
            locked: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v4/sub-account/assets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes. Weight: 1
     *
     * @tags Margin Stream
     * @name V1UserDataStreamCreate
     * @summary Create a ListenKey (USER_STREAM)
     * @request POST:/sapi/v1/userDataStream
     * @secure
     */
    v1UserDataStreamCreate: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1" */
          listenKey: string;
        },
        any
      >({
        path: `/sapi/v1/userDataStream`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes. Weight: 1
     *
     * @tags Margin Stream
     * @name V1UserDataStreamUpdate
     * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
     * @request PUT:/sapi/v1/userDataStream
     * @secure
     */
    v1UserDataStreamUpdate: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/userDataStream`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Close out a user data stream. Weight: 1
     *
     * @tags Margin Stream
     * @name V1UserDataStreamDelete
     * @summary Close a ListenKey (USER_STREAM)
     * @request DELETE:/sapi/v1/userDataStream
     * @secure
     */
    v1UserDataStreamDelete: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/userDataStream`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes. Weight: 1
     *
     * @tags Isolated Margin Stream
     * @name V1UserDataStreamIsolatedCreate
     * @summary Generate a Listen Key (USER_STREAM)
     * @request POST:/sapi/v1/userDataStream/isolated
     * @secure
     */
    v1UserDataStreamIsolatedCreate: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "T3ee22BIYuWqmvne0HNq2A2WsFlEtLhvWCtItw6ffhhdmjifQ2tRbuKkTHhr" */
          listenKey: string;
        },
        any
      >({
        path: `/sapi/v1/userDataStream/isolated`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes. Weight: 1
     *
     * @tags Isolated Margin Stream
     * @name V1UserDataStreamIsolatedUpdate
     * @summary Ping/Keep-alive a Listen Key (USER_STREAM)
     * @request PUT:/sapi/v1/userDataStream/isolated
     * @secure
     */
    v1UserDataStreamIsolatedUpdate: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/userDataStream/isolated`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Close out a user data stream. Weight: 1
     *
     * @tags Isolated Margin Stream
     * @name V1UserDataStreamIsolatedDelete
     * @summary Close a ListenKey (USER_STREAM)
     * @request DELETE:/sapi/v1/userDataStream/isolated
     * @secure
     */
    v1UserDataStreamIsolatedDelete: (
      query?: {
        /**
         * User websocket listen key
         * @example "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
         */
        listenKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/sapi/v1/userDataStream/isolated`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If beginTime and endTime are not sent, the recent 30-day data will be returned. Weight(UID): 90000
     *
     * @tags Fiat
     * @name V1FiatOrdersList
     * @summary Fiat Deposit/Withdraw History (USER_DATA)
     * @request GET:/sapi/v1/fiat/orders
     * @secure
     */
    v1FiatOrdersList: (
      query: {
        /**
         * * `0` - deposit
         * * `1` - withdraw
         * @format int32
         * @min 0
         * @max 1
         */
        transactionType: number;
        /**
         * @format int64
         * @example 1626144956000
         */
        beginTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 100, max 500
         * @format int32
         * @example 300
         */
        rows?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "7d76d611-0568-4f43-afb6-24cac7767365" */
            orderNo: string;
            /** @example "BRL" */
            fiatCurrency: string;
            /** @example "10.00" */
            indicatedAmount: string;
            /** @example "10.00" */
            amount: string;
            /** @example "0.00" */
            totalFee: string;
            /** @example "BankAccount" */
            method: string;
            /**
             * Processing, Failed, Successful, Finished, Refunding, Refunded, Refund Failed, Order Partial credit Stopped
             * @example "Expired"
             */
            status: string;
            /**
             * @format int64
             * @example 1626144956000
             */
            createTime: number;
            /**
             * @format int64
             * @example 1626400907000
             */
            updateTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/fiat/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If beginTime and endTime are not sent, the recent 30-day data will be returned. Weight(IP): 1
     *
     * @tags Fiat
     * @name V1FiatPaymentsList
     * @summary Fiat Payments History (USER_DATA)
     * @request GET:/sapi/v1/fiat/payments
     * @secure
     */
    v1FiatPaymentsList: (
      query: {
        /**
         * * `0` - deposit
         * * `1` - withdraw
         * @format int32
         * @min 0
         * @max 1
         */
        transactionType: number;
        /**
         * @format int64
         * @example 1626144956000
         */
        beginTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * Default 100, max 500
         * @format int32
         * @example 300
         */
        rows?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "353fca443f06466db0c4dc89f94f027a" */
            orderNo: string;
            /**
             * Fiat trade amount
             * @example "20.00"
             */
            sourceAmount: string;
            /**
             * Fiat token
             * @example "EUR"
             */
            fiatCurrency: string;
            /**
             * Crypto trade amount
             * @example "4.462"
             */
            obtainAmount: string;
            /**
             * Crypto token
             * @example "LUNA"
             */
            cryptoCurrency: string;
            /**
             * Trade fee
             * @example "0.2"
             */
            totalFee: string;
            /** @example "4.437472" */
            price: string;
            /**
             * Processing, Completed, Failed, Refunded
             * @example "Failed"
             */
            status: string;
            /**
             * @format int64
             * @example 1624529919000
             */
            createTime: number;
            /**
             * @format int64
             * @example 1624529919000
             */
            updateTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/fiat/payments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Savings
     * @name V1LendingProjectListList
     * @summary Get Fixed/Activity Project List(USER_DATA)
     * @request GET:/sapi/v1/lending/project/list
     * @secure
     */
    v1LendingProjectListList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        type: "ACTIVITY" | "CUSTOMIZED_FIXED";
        /** Default `ALL` */
        status?: "ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE";
        /** default "true" */
        isSortAsc?: boolean;
        /** Default `START_TIME` */
        sortBy?: "START_TIME" | "LOT_SIZE" | "INTEREST_RATE" | "DURATION";
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          asset: string;
          /**
           * @format int64
           * @example 1
           */
          displayPriority: number;
          /**
           * @format int64
           * @example 90
           */
          duration: number;
          /** @example "1.35810000" */
          interestPerLot: string;
          /** @example "0.05510000" */
          interestRate: string;
          /** @example "100.00000000" */
          lotSize: string;
          /**
           * @format int64
           * @example 1
           */
          lotsLowLimit: number;
          /**
           * @format int64
           * @example 74155
           */
          lotsPurchased: number;
          /**
           * @format int64
           * @example 80000
           */
          lotsUpLimit: number;
          /**
           * @format int64
           * @example 2000
           */
          maxLotsPerUser: number;
          needKyc: boolean;
          /** @example "CUSDT90DAYSS001" */
          projectId: string;
          /** @example "USDT" */
          projectName: string;
          /** @example "PURCHASING" */
          status: string;
          /** @example "CUSTOMIZED_FIXED" */
          type: string;
          withAreaLimitation: boolean;
        }[],
        Error
      >({
        path: `/sapi/v1/lending/project/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Savings
     * @name V1LendingCustomizedFixedPurchaseCreate
     * @summary Purchase Fixed/Activity Project (USER_DATA)
     * @request POST:/sapi/v1/lending/customizedFixed/purchase
     * @secure
     */
    v1LendingCustomizedFixedPurchaseCreate: (
      query: {
        projectId: string;
        lot: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "18356" */
          purchaseId: string;
        },
        Error
      >({
        path: `/sapi/v1/lending/customizedFixed/purchase`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Savings
     * @name V1LendingProjectPositionListList
     * @summary Get Fixed/Activity Project Position (USER_DATA)
     * @request GET:/sapi/v1/lending/project/position/list
     * @secure
     */
    v1LendingProjectPositionListList: (
      query: {
        /** @example "BTC" */
        asset: string;
        projectId?: string;
        /** Default `ALL` */
        status?: "ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          asset: string;
          canTransfer: boolean;
          /**
           * @format int64
           * @example 1587010770000
           */
          createTimestamp: number;
          /**
           * @format int64
           * @example 14
           */
          duration: number;
          /**
           * @format int64
           * @example 1588291200000
           */
          endTime: number;
          /** @example "0.19950000" */
          interest: string;
          /** @example "0.05201250" */
          interestRate: string;
          /**
           * @format int64
           * @example 1
           */
          lot: number;
          /**
           * @format int64
           * @example 51724
           */
          positionId: number;
          /** @example "100.00000000" */
          principal: string;
          /** @example "CUSDT14DAYSS001" */
          projectId: string;
          /** @example "USDT" */
          projectName: string;
          /**
           * @format int64
           * @example 1587010771000
           */
          purchaseTime: number;
          /**
           * @format date
           * @example "2020-05-01"
           */
          redeemDate: string;
          /**
           * @format int64
           * @example 1587081600000
           */
          startTime: number;
          /** @example "HOLDING" */
          status: string;
          /** @example "CUSTOMIZED_FIXED" */
          type: string;
        }[],
        Error
      >({
        path: `/sapi/v1/lending/project/position/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - PositionId is mandatory parameter for fixed position. Weight(IP): 1
     *
     * @tags Savings
     * @name V1LendingPositionChangedCreate
     * @summary Change Fixed/Activity Position to Daily Position (USER_DATA)
     * @request POST:/sapi/v1/lending/positionChanged
     * @secure
     */
    v1LendingPositionChangedCreate: (
      query: {
        projectId: string;
        lot: string;
        positionId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 862290
           */
          dailyPurchaseId: number;
          success: boolean;
          /**
           * @format int64
           * @example 1577233578000
           */
          time: number;
        },
        Error
      >({
        path: `/sapi/v1/lending/positionChanged`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get available Staking product list. Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingProductListList
     * @summary Get Staking Product List (USER_DATA)
     * @request GET:/sapi/v1/staking/productList
     * @secure
     */
    v1StakingProductListList: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        /** @example "BNB" */
        asset?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "Axs*90" */
          projectId: string;
          detail: {
            /** @example "AXS" */
            asset: string;
            /** @example "AXS" */
            rewardAsset: string;
            /**
             * @format int64
             * @example 90
             */
            duration: number;
            /** @example true */
            renewable: boolean;
            /** @example "1.2069" */
            apy: string;
          };
          quota: {
            /** @example "2" */
            totalPersonalQuota: string;
            /** @example "0.001" */
            minimum: string;
          };
        }[],
        Error
      >({
        path: `/sapi/v1/staking/productList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingPurchaseCreate
     * @summary Purchase Staking Product (USER_DATA)
     * @request POST:/sapi/v1/staking/purchase
     * @secure
     */
    v1StakingPurchaseCreate: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        productId: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /** true or false, default false. Active if product is `STAKING` or `L_DEFI` */
        renewable?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "12345" */
          positionId: string;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/staking/purchase`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Redeem Staking product. Locked staking and Locked DeFI staking belong to early redemption, redeeming in advance will result in loss of interest that you have earned. Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingRedeemCreate
     * @summary Redeem Staking Product (USER_DATA)
     * @request POST:/sapi/v1/staking/redeem
     * @secure
     */
    v1StakingRedeemCreate: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        /** Mandatory if product is `STAKING` or `L_DEFI` */
        positionId?: string;
        productId: string;
        /**
         * Mandatory if product is `F_DEFI`
         * @format double
         */
        amount?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/staking/redeem`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingPositionList
     * @summary Get Staking Product Position (USER_DATA)
     * @request GET:/sapi/v1/staking/position
     * @secure
     */
    v1StakingPositionList: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        productId?: string;
        /** @example "BNB" */
        asset?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123123" */
          positionId: string;
          /** @example "Axs*90" */
          projectId: string;
          /** @example "AXS" */
          asset: string;
          /** @example "122.09202928" */
          amount: string;
          /** @example "1646182276000" */
          purchaseTime: string;
          /** @example "60" */
          duration: string;
          /** @example "4" */
          accrualDays: string;
          /** @example "AXS" */
          rewardAsset: string;
          /** @example "0.2032" */
          APY: string;
          /** @example "5.17181528" */
          rewardAmt: string;
          /** @example "BNB" */
          extraRewardAsset: string;
          /** @example "0.0203" */
          extraRewardAPY: string;
          /** @example "5.17181528" */
          estExtraRewardAmt: string;
          /** @example "1.29295383" */
          nextInterestPay: string;
          /** @example "1646697600000" */
          nextInterestPayDate: string;
          /** @example "1" */
          payInterestPeriod: string;
          /** @example "2802.24068892" */
          redeemAmountEarly: string;
          /** @example "1651449600000" */
          interestEndDate: string;
          /** @example "1651536000000" */
          deliverDate: string;
          /** @example "1" */
          redeemPeriod: string;
          /** @example "232.2323" */
          redeemingAmt: string;
          /** @example "1651536000000" */
          partialAmtDeliverDate: string;
          /** @example true */
          canRedeemEarly: boolean;
          /** @example true */
          renewable: boolean;
          /** @example "AUTO" */
          type: string;
          /** @example "HOLDING" */
          status: string;
        }[],
        Error
      >({
        path: `/sapi/v1/staking/position`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingStakingRecordList
     * @summary Get Staking History (USER_DATA)
     * @request GET:/sapi/v1/staking/stakingRecord
     * @secure
     */
    v1StakingStakingRecordList: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        /** `SUBSCRIPTION`, `REDEMPTION`, `INTEREST` */
        txnType: string;
        /** @example "BNB" */
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123123" */
          positionId: string;
          /**
           * @format int64
           * @example 1575018510000
           */
          time: number;
          /** @example "BNB" */
          asset: string;
          /** @example "BSC" */
          project: string;
          /** @example "21312.23223" */
          amount: string;
          /** @example "30" */
          lockPeriod: string;
          /** @example "1575018510000" */
          deliverDate: string;
          /** @example "AUTO" */
          type: string;
          /** @example "success" */
          status: string;
        }[],
        Error
      >({
        path: `/sapi/v1/staking/stakingRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set auto staking on Locked Staking or Locked DeFi Staking Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingSetAutoStakingCreate
     * @summary Set Auto Staking (USER_DATA)
     * @request POST:/sapi/v1/staking/setAutoStaking
     * @secure
     */
    v1StakingSetAutoStakingCreate: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        positionId: string;
        /** true or false */
        renewable: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/staking/setAutoStaking`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Staking
     * @name V1StakingPersonalLeftQuotaList
     * @summary Get Personal Left Quota of Staking Product (USER_DATA)
     * @request GET:/sapi/v1/staking/personalLeftQuota
     * @secure
     */
    v1StakingPersonalLeftQuotaList: (
      query: {
        /**
         * * `STAKING` - for Locked Staking
         * * `F_DEFI` - for flexible DeFi Staking
         * * `L_DEFI` - for locked DeFi Staking
         */
        product: string;
        productId: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1000" */
          leftPersonalQuota: string;
        }[],
        Error
      >({
        path: `/sapi/v1/staking/personalLeftQuota`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Mining
     * @name V1MiningPubAlgoListList
     * @summary Acquiring Algorithm (MARKET_DATA)
     * @request GET:/sapi/v1/mining/pub/algoList
     * @secure
     */
    v1MiningPubAlgoListList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            /** @example "sha256" */
            algoName: string;
            /**
             * @format int64
             * @example 1
             */
            algoId: number;
            /**
             * @format int64
             * @example 0
             */
            poolIndex: number;
            /** @example "h/s" */
            unit: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/mining/pub/algoList`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Mining
     * @name V1MiningPubCoinListList
     * @summary Acquiring CoinName (MARKET_DATA)
     * @request GET:/sapi/v1/mining/pub/coinList
     * @secure
     */
    v1MiningPubCoinListList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            /** @example "BTC" */
            coinName: string;
            /**
             * @format int64
             * @example 1
             */
            coinId: number;
            /**
             * @format int64
             * @example 0
             */
            poolIndex: number;
            /**
             * @format int64
             * @example 1
             */
            algoId: number;
            /** @example "sha256" */
            algoName: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/mining/pub/coinList`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningWorkerDetailList
     * @summary Request for Detail Miner List (USER_DATA)
     * @request GET:/sapi/v1/mining/worker/detail
     * @secure
     */
    v1MiningWorkerDetailList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /** Miner’s name */
        workerName: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            /**
             * Mining Account name
             * @example "bhdc1.16A10404B"
             */
            workerName: string;
            /**
             * Type of hourly hashrate
             * @example "H_hashrate"
             */
            type: string;
            hashrateDatas: {
              /**
               * @format int64
               * @example 1587902400000
               */
              time: number;
              /** @example "0" */
              hashrate: string;
              /**
               * Rejection Rate
               * @format int64
               * @example 0
               */
              reject: number;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/mining/worker/detail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningWorkerListList
     * @summary Request for Miner List (USER_DATA)
     * @request GET:/sapi/v1/mining/worker/list
     * @secure
     */
    v1MiningWorkerListList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /**
         * sort sequence(default=0)0 positive sequence, 1 negative sequence
         * @format int32
         */
        sort?: number;
        /**
         * Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time
         * @format int32
         */
        sortColumn?: number;
        /**
         * miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure
         * @format int32
         */
        workerStatus?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            workerDatas: {
              /** @example "1420554439452400131" */
              workerId: string;
              /** @example "2X73" */
              workerName: string;
              /**
               * Status：1 valid, 2 invalid, 3 no longer valid
               * @format int64
               * @example 3
               */
              status: number;
              /**
               * Real-time rate
               * @format int64
               * @example 0
               */
              hashRate: number;
              /**
               * 24H Hashrate
               * @format int64
               * @example 0
               */
              dayHashRate: number;
              /**
               * Real-time Rejection Rate
               * @format int64
               * @example 0
               */
              rejectRate: number;
              /**
               * Last submission time
               * @format int64
               * @example 1587712919000
               */
              lastShareTime: number;
            }[];
            /**
             * @format int64
             * @example 18530
             */
            totalNum: number;
            /**
             * @format int64
             * @example 20
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/worker/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningPaymentListList
     * @summary Earnings List (USER_DATA)
     * @request GET:/sapi/v1/mining/payment/list
     * @secure
     */
    v1MiningPaymentListList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        /** Search date, millisecond timestamp, while empty query all */
        startDate?: string;
        /** Search date, millisecond timestamp, while empty query all */
        endDate?: string;
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            accountProfits: {
              /**
               * Mining date
               * @format int64
               * @example 1586188800000
               */
              time: number;
              /**
               * 0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate Resale-Mining Wallet 33:Hashrate Resale-Pool Savings
               * @format int64
               * @example 31
               */
              type: number;
              /**
               * Transferred Hashrate
               * @format nullable
               * @example null
               */
              hashTransfer: number;
              /**
               * Transferred Income
               * @format nullable
               * @example null
               */
              transferAmount: number;
              /**
               * Daily Hashrate
               * @format int64
               * @example 129129903378244
               */
              dayHashRate: number;
              /**
               * Earnings Amount
               * @format double
               * @example 8.6083060304
               */
              profitAmount: number;
              /**
               * Coin Type
               * @example "BTC"
               */
              coinName: string;
              /**
               * Status：0:Unpaid, 1:Paying  2：Paid
               * @format int32
               * @example 2
               */
              status: number;
            }[];
            /**
             * Total Rows
             * @format int64
             * @example 3
             */
            totalNum: number;
            /**
             * Rows per page
             * @format int64
             * @example 20
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/payment/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningPaymentOtherList
     * @summary Extra Bonus List (USER_DATA)
     * @request GET:/sapi/v1/mining/payment/other
     * @secure
     */
    v1MiningPaymentOtherList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /**
         * Coin name
         * @example "BNB"
         */
        coin?: string;
        /** Search date, millisecond timestamp, while empty query all */
        startDate?: string;
        /** Search date, millisecond timestamp, while empty query all */
        endDate?: string;
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            otherProfits: {
              /**
               * Mining date
               * @format int64
               * @example 1607443200000
               */
              time: number;
              /**
               * Coin Name
               * @example "BTC"
               */
              coinName: string;
              /**
               * 1: Merged Mining, 2: Activity Bonus, 3:Rebate 4:Smart Pool 6:Income Transfer 7:Pool Savings
               * @format int32
               * @example 4
               */
              type: number;
              /**
               * @format double
               * @example 0.0011859
               */
              profitAmount: number;
              /**
               * 0:Unpaid, 1:Paying  2：Paid
               * @format int32
               * @example 2
               */
              status: number;
            }[];
            /**
             * Total Rows
             * @format int64
             * @example 3
             */
            totalNum: number;
            /**
             * Rows per page
             * @format int64
             * @example 20
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/payment/other`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningHashTransferConfigDetailsListList
     * @summary Hashrate Resale List (USER_DATA)
     * @request GET:/sapi/v1/mining/hash-transfer/config/details/list
     * @secure
     */
    v1MiningHashTransferConfigDetailsListList: (
      query: {
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            configDetails: {
              /**
               * Mining ID
               * @format int64
               * @example 168
               */
              configId: number;
              /**
               * Transfer out of subaccount
               * @example "123"
               */
              poolUsername: string;
              /**
               * Transfer into subaccount
               * @example "user1"
               */
              toPoolUsername: string;
              /**
               * Transfer algorithm
               * @example "Ethash"
               */
              algoName: string;
              /**
               * Transferred Hashrate quantity
               * @format int64
               * @example 5000000
               */
              hashRate: number;
              /**
               * Start date
               * @format int64
               * @example 20201210
               */
              startDay: number;
              /**
               * End date
               * @format int64
               * @example 20210405
               */
              endDay: number;
              /**
               * 0 Processing, 1：Cancelled, 2：Terminated
               * @format int32
               * @example 1
               */
              status: number;
            }[];
            /**
             * @format int64
             * @example 21
             */
            totalNum: number;
            /**
             * @format int64
             * @example 200
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/hash-transfer/config/details/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningHashTransferProfitDetailsList
     * @summary Hashrate Resale Details (USER_DATA)
     * @request GET:/sapi/v1/mining/hash-transfer/profit/details
     * @secure
     */
    v1MiningHashTransferProfitDetailsList: (
      query: {
        /** Mining ID */
        configId: string;
        /** Mining Account */
        userName: string;
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            profitTransferDetails: {
              /**
               * Transfer out of sub-account
               * @example "test4001"
               */
              poolUsername: string;
              /**
               * Transfer into subaccount
               * @example "pop"
               */
              toPoolUsername: string;
              /**
               * Transfer algorithm
               * @example "sha256"
               */
              algoName: string;
              /**
               * Transferred Hashrate quantity
               * @format int64
               * @example 200000000000
               */
              hashRate: number;
              /**
               * Transfer date
               * @format int64
               * @example 20201213
               */
              day: number;
              /**
               * Transfer income
               * @format double
               * @example 0.2256872
               */
              amount: number;
              /** @example "BTC" */
              coinName: string;
            }[];
            /**
             * @format int64
             * @example 8
             */
            totalNum: number;
            /**
             * @format int64
             * @example 200
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/hash-transfer/profit/details`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningHashTransferConfigCreate
     * @summary Hashrate Resale Request (USER_DATA)
     * @request POST:/sapi/v1/mining/hash-transfer/config
     * @secure
     */
    v1MiningHashTransferConfigCreate: (
      query: {
        /** Mining Account */
        userName: string;
        /** Algorithm(sha256) */
        algo: string;
        /** Search date, millisecond timestamp, while empty query all */
        startDate?: string;
        /** Search date, millisecond timestamp, while empty query all */
        endDate?: string;
        /** Mining Account */
        toPoolUser: string;
        /** Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than 500000) */
        hashRate: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          /**
           * Mining Account
           * @format int64
           * @example 171
           */
          data: number;
        },
        Error
      >({
        path: `/sapi/v1/mining/hash-transfer/config`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningHashTransferConfigCancelCreate
     * @summary Cancel Hashrate Resale configuration (USER_DATA)
     * @request POST:/sapi/v1/mining/hash-transfer/config/cancel
     * @secure
     */
    v1MiningHashTransferConfigCancelCreate: (
      query: {
        /** Mining ID */
        configId: string;
        /** Mining Account */
        userName: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: boolean;
        },
        Error
      >({
        path: `/sapi/v1/mining/hash-transfer/config/cancel`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningStatisticsUserStatusList
     * @summary Statistic List (USER_DATA)
     * @request GET:/sapi/v1/mining/statistics/user/status
     * @secure
     */
    v1MiningStatisticsUserStatusList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            /** @example "457835490067496409.00000000" */
            fifteenMinHashRate: string;
            /** @example "214289268068874127.65000000" */
            dayHashRate: string;
            /**
             * @format int64
             * @example 0
             */
            validNum: number;
            /**
             * @format int64
             * @example 17562
             */
            invalidNum: number;
            profitToday: {
              /** @example "0.00314332" */
              BTC: string;
              /** @example "56.17055953" */
              BSV: string;
              /** @example "106.61586001" */
              BCH: string;
            };
            profitYesterday: {
              /** @example "0.00314332" */
              BTC: string;
              /** @example "56.17055953" */
              BSV: string;
              /** @example "106.61586001" */
              BCH: string;
            };
            /** @example "test" */
            userName: string;
            /** @example "h/s" */
            unit: string;
            /** @example "sha256" */
            algo: string;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/statistics/user/status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningStatisticsUserListList
     * @summary Account List (USER_DATA)
     * @request GET:/sapi/v1/mining/statistics/user/list
     * @secure
     */
    v1MiningStatisticsUserListList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Mining Account */
        userName: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            /** @example "H_hashrate" */
            type: string;
            /** @example "test" */
            userName: string;
            list: {
              /**
               * @format int64
               * @example 1585267200000
               */
              time: number;
              /** @example "0.00000000" */
              hashrate: string;
              /** @example "0.00000000" */
              reject: string;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/mining/statistics/user/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 5
     *
     * @tags Mining
     * @name V1MiningPaymentUidList
     * @summary Mining Account Earning (USER_DATA)
     * @request GET:/sapi/v1/mining/payment/uid
     * @secure
     */
    v1MiningPaymentUidList: (
      query: {
        /** Algorithm(sha256) */
        algo: string;
        /** Search date, millisecond timestamp, while empty query all */
        startDate?: string;
        /** Search date, millisecond timestamp, while empty query all */
        endDate?: string;
        /**
         * Page number, default is first page, start form 1
         * @format int32
         */
        pageIndex?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 0
           */
          code: number;
          /** @example "" */
          msg: string;
          data: {
            accountProfits: {
              /**
               * @format int64
               * @example 1607443200000
               */
              time: number;
              /** @example "BTC" */
              coinName: string;
              /**
               * 0:Referral 1:Refund 2:Rebate
               * @format int32
               * @example 2
               */
              type: number;
              /**
               * puid
               * @format int32
               * @example 59985472
               */
              puid: number;
              /**
               * Mining account
               * @example "vdvaghani"
               */
              subName: string;
              /** @example 0.09186957 */
              amount: number;
            }[];
            /**
             * @format int32
             * @example 3
             */
            totalNum: number;
            /**
             * @format int32
             * @example 20
             */
            pageSize: number;
          };
        },
        Error
      >({
        path: `/sapi/v1/mining/payment/uid`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Execute transfer between spot account and futures account. Weight(IP): 1
     *
     * @tags Futures
     * @name V1FuturesTransferCreate
     * @summary New Future Account Transfer (USER_DATA)
     * @request POST:/sapi/v1/futures/transfer
     * @secure
     */
    v1FuturesTransferCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * 1: transfer from spot account to USDT-Ⓜ futures account. 2: transfer from USDT-Ⓜ futures account to spot account. 3: transfer from spot account to COIN-Ⓜ futures account. 4: transfer from COIN-Ⓜ futures account to spot account.
         * @format int64
         */
        type: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 100000001
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/futures/transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 10
     *
     * @tags Futures
     * @name V1FuturesTransferList
     * @summary Get Future Account Transaction History List (USER_DATA)
     * @request GET:/sapi/v1/futures/transfer
     * @secure
     */
    v1FuturesTransferList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "USDT" */
            asset: string;
            /**
             * @format int64
             * @example 100000001
             */
            tranId: number;
            /** @example "40.84624400" */
            amount: string;
            /** @example "1" */
            type: string;
            /**
             * @format int64
             * @example 1555056425000
             */
            timestamp: number;
            /**
             * one of PENDING (pending to execution), CONFIRMED (successfully transfered), FAILED (execution failed, nothing happened to your account);
             * @example "CONFIRMED"
             */
            status: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/futures/transfer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Futures
     * @name V1FuturesHistDataLinkList
     * @summary Get Future TickLevel Orderbook Historical Data Download Link (USER_DATA)
     * @request GET:/sapi/v1/futures/histDataLink
     * @secure
     */
    v1FuturesHistDataLinkList: (
      query: {
        /** @example "BTCUSDT" */
        symbol: string;
        /** @example "T_DEPTH" */
        dataType: "T_DEPTH" | "S_DEPTH";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /** @example "2023-06-30" */
            day: string;
            /** @example "https://bin-prod-user-rebate-bucket.s3.ap-northeast-1.amazonaws.com/xxx" */
            url: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/futures/histDataLink`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send in a VP new order. Only support on USDⓈ-M Contracts. - You need to enable `Futures Trading Permission` for the api key which requests this endpoint. - Base URL: https://api.binance.com - Total Algo open orders max allowed: 10 orders. - Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. - Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it. Weight(UID): 3000
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesNewOrderVpCreate
     * @summary Volume Participation(VP) New Order (TRADE)
     * @request POST:/sapi/v1/algo/futures/newOrderVp
     * @secure
     */
    v1AlgoFuturesNewOrderVpCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
         * @example "BOTH"
         */
        positionSide?: "BOTH" | "LONG" | "SHORT";
        /**
         * Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
         * @format double
         */
        quantity: number;
        /**
         * Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH
         * @example "LOW"
         */
        urgency: "LOW" | "MEDIUM" | "HIGH";
        /**
         * A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value
         * @example "00358ce6a268403398bd34eaa36dffe7"
         */
        clientAlgoId?: string;
        /** 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position */
        reduceOnly?: boolean;
        /**
         * Limit price of the order; If it is not sent, will place order by market price by default
         * @format double
         */
        limitPrice?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "00358ce6a268403398bd34eaa36dffe7" */
          clientAlgoId: string;
          /** @example true */
          success: boolean;
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "OK" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/newOrderVp`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send in a Twap new order. Only support on USDⓈ-M Contracts. You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com - Total Algo open orders max allowed: 10 orders. - Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. - Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it. - quantity * 60 / duration should be larger than minQty - duration cannot be less than 5 mins or more than 24 hours. - For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol. Weight(UID): 3000
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesNewOrderTwapCreate
     * @summary Time-Weighted Average Price(Twap) New Order (TRADE)
     * @request POST:/sapi/v1/algo/futures/newOrderTwap
     * @secure
     */
    v1AlgoFuturesNewOrderTwapCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
         * @example "BOTH"
         */
        positionSide?: "BOTH" | "LONG" | "SHORT";
        /**
         * Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
         * @format double
         */
        quantity: number;
        /**
         * Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min; Greater than 24h => defaults to 24h
         * @format int64
         * @example 300
         */
        duration: number;
        /**
         * A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value
         * @example "00358ce6a268403398bd34eaa36dffe7"
         */
        clientAlgoId?: string;
        /** 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position */
        reduceOnly?: boolean;
        /**
         * Limit price of the order; If it is not sent, will place order by market price by default
         * @format double
         */
        limitPrice?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "00358ce6a268403398bd34eaa36dffe7" */
          clientAlgoId: string;
          /** @example true */
          success: boolean;
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "OK" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/newOrderTwap`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an active order. - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com Weight(IP): 1
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesOrderDelete
     * @summary Cancel Algo Order(TRADE)
     * @request DELETE:/sapi/v1/algo/futures/order
     * @secure
     */
    v1AlgoFuturesOrderDelete: (
      query: {
        /**
         * Eg. 14511
         * @format int64
         */
        algoId: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 14511
           */
          algoId: number;
          /** @example true */
          success: boolean;
          /**
           * @format int64
           * @example 0
           */
          code: number;
          /** @example "OK" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/order`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com Weight(IP): 1
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesOpenOrdersList
     * @summary Query Current Algo Open Orders (USER_DATA)
     * @request GET:/sapi/v1/algo/futures/openOrders
     * @secure
     */
    v1AlgoFuturesOpenOrdersList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          orders?: {
            /**
             * @format int64
             * @example 14517
             */
            algoId: number;
            /** @example "ETHUSDT" */
            symbol: string;
            /** @example "SELL" */
            side: string;
            /** @example "SHORT" */
            positionSide: string;
            /** @example "5.00" */
            totalQty: string;
            /** @example "0.000" */
            executedQty: string;
            /** @example "0.00000000" */
            executedAmt: string;
            /** @example "0.00" */
            avgPrice: string;
            /** @example "d7096549481642f8a0bb69e9e2e31f2e" */
            clientAlgoId: string;
            /**
             * @format int64
             * @example 1649756817004
             */
            bookTime: number;
            /**
             * @format int64
             * @example 0
             */
            endTime: number;
            /** @example "WORKING" */
            algoStatus: string;
            /** @example "VP" */
            algoType: string;
            /** @example "LOW" */
            urgency: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/openOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com Weight(IP): 1
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesHistoricalOrdersList
     * @summary Query Historical Algo Orders (USER_DATA)
     * @request GET:/sapi/v1/algo/futures/historicalOrders
     * @secure
     */
    v1AlgoFuturesHistoricalOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol?: string;
        /** @example "SELL" */
        side?: "SELL" | "BUY";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /** Page size, minimum 1, maximum 100, default 100 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          orders: {
            /**
             * @format int64
             * @example 14517
             */
            algoId: number;
            /** @example "ETHUSDT" */
            symbol: string;
            /** @example "SELL" */
            side: string;
            /** @example "SHORT" */
            positionSide: string;
            /** @example "5.00" */
            totalQty: string;
            /** @example "0.000" */
            executedQty: string;
            /** @example "0.00000000" */
            executedAmt: string;
            /** @example "0.00" */
            avgPrice: string;
            /** @example "d7096549481642f8a0bb69e9e2e31f2e" */
            clientAlgoId: string;
            /**
             * @format int64
             * @example 1649756817004
             */
            bookTime: number;
            /**
             * @format int64
             * @example 1649757088101
             */
            endTime: number;
            /** @example "WORKING" */
            algoStatus: string;
            /** @example "VP" */
            algoType: string;
            /** @example "LOW" */
            urgency: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/historicalOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com Weight(IP): 1
     *
     * @tags Futures Algo
     * @name V1AlgoFuturesSubOrdersList
     * @summary Query Sub Orders (USER_DATA)
     * @request GET:/sapi/v1/algo/futures/subOrders
     * @secure
     */
    v1AlgoFuturesSubOrdersList: (
      query: {
        /** @format int64 */
        algoId: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /** Page size, minimum 1, maximum 100, default 100 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          /** @example "1.000" */
          executedQty: string;
          /** @example "3229.44000000" */
          executedAmt: string;
          subOrders: {
            /**
             * @format int64
             * @example 13723
             */
            algoId: number;
            /**
             * @format int64
             * @example 8389765519993909000
             */
            orderId: number;
            /** @example "FILLED" */
            orderStatus: string;
            /** @example "1.000" */
            executedQty?: string;
            /** @example "3229.44000000" */
            executedAmt: string;
            /** @example "-1.61471999" */
            feeAmt: string;
            /** @example "USDT" */
            feeAsset: string;
            /**
             * @format int64
             * @example 1649756817004
             */
            bookTime: number;
            /** @example "3229.44" */
            avgPrice: string;
            /** @example "SELL" */
            side: string;
            /** @example "ETHUSDT" */
            symbol: string;
            /**
             * @format int64
             * @example 1
             */
            subId: number;
            /** @example "IMMEDIATE_OR_CANCEL" */
            timeInForce: string;
            /** @example "1.000" */
            origQty: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/futures/subOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Place a new spot TWAP order with Algo service. Weight(UID): 3000
     *
     * @tags Spot Algo
     * @name V1AlgoSpotNewOrderTwapCreate
     * @summary Time-Weighted Average Price (Twap) New Order
     * @request POST:/sapi/v1/algo/spot/newOrderTwap
     * @secure
     */
    v1AlgoSpotNewOrderTwapCreate: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /**
         * @format int32
         * @example 300
         */
        duration: number;
        clientAlgoId?: string;
        /** @format float */
        limitPrice?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "65ce1630101a480b85915d7e11fd5078" */
          clientAlgoId: string;
          /** @example true */
          success: boolean;
          /** @example 0 */
          code: number;
          /** @example "OK" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/algo/spot/newOrderTwap`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an open TWAP order Weight(IP): 1
     *
     * @tags Spot Algo
     * @name V1AlgoSpotOrderDelete
     * @summary Cancel Algo Order
     * @request DELETE:/sapi/v1/algo/spot/order
     * @secure
     */
    v1AlgoSpotOrderDelete: (
      query: {
        /**
         * @format int64
         * @example 1
         */
        algoId: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 14511
           */
          algoId: number;
          /** @example true */
          success: boolean;
          /** @example 0 */
          code: number;
          /** @example "OK" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/algo/spot/order`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all open SPOT TWAP orders Weight(IP): 1
     *
     * @tags Spot Algo
     * @name V1AlgoSpotOpenOrdersList
     * @summary Query Current Algo Open Orders
     * @request GET:/sapi/v1/algo/spot/openOrders
     * @secure
     */
    v1AlgoSpotOpenOrdersList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          total: number;
          orders: {
            /** @example 14517 */
            algoId: number;
            /** @example "ETHUSDT" */
            symbol: string;
            /** @example "SELL" */
            side: string;
            /** @example "5.000" */
            totalQty: string;
            /** @example "0.000" */
            executedQty: string;
            /** @example "0.000" */
            executedAmt: string;
            /** @example "0.00" */
            avgPrice: string;
            /** @example "d7096549481642f8a0bb69e9e2e31f2e" */
            clientAlgoId: string;
            /**
             * @format int64
             * @example 1649756817004
             */
            bookTime: number;
            /**
             * @format int64
             * @example 1649756817004
             */
            endTime: number;
            /** @example "WORKING" */
            algoStatus: string;
            /** @example "TWAP" */
            algoType: string;
            /** @example "LOW" */
            urgency: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/spot/openOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all historical SPOT TWAP orders Weight(IP): 1
     *
     * @tags Spot Algo
     * @name V1AlgoSpotHistoricalOrdersList
     * @summary Query Historical Algo Orders
     * @request GET:/sapi/v1/algo/spot/historicalOrders
     * @secure
     */
    v1AlgoSpotHistoricalOrdersList: (
      query: {
        /**
         * Trading symbol, e.g. BNBUSDT
         * @example "BNBUSDT"
         */
        symbol: string;
        /** @example "SELL" */
        side: "SELL" | "BUY";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          total: number;
          orders: {
            /** @example 14517 */
            algoId: number;
            /** @example "ETHUSDT" */
            symbol: string;
            /** @example "SELL" */
            side: string;
            /** @example "5.000" */
            totalQty: string;
            /** @example "0.000" */
            executedQty: string;
            /** @example "0.000" */
            executedAmt: string;
            /** @example "0.00" */
            avgPrice: string;
            /** @example "d7096549481642f8a0bb69e9e2e31f2e" */
            clientAlgoId: string;
            /**
             * @format int64
             * @example 1649756817004
             */
            bookTime: number;
            /**
             * @format int64
             * @example 1649756817004
             */
            endTime: number;
            /** @example "WORKING" */
            algoStatus: string;
            /** @example "VP" */
            algoType: string;
            /** @example "LOW" */
            urgency: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/spot/historicalOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get respective sub orders for a specified algoId Weight(IP): 1
     *
     * @tags Spot Algo
     * @name V1AlgoSpotSubOrdersList
     * @summary Query Sub Orders
     * @request GET:/sapi/v1/algo/spot/subOrders
     * @secure
     */
    v1AlgoSpotSubOrdersList: (
      query: {
        /** @format int64 */
        algoId: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /** Number of pages, minimum 10, maximum 200 */
        pageSize?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          total: number;
          /** @example "1.000" */
          executedQty: string;
          /** @example "3229.44000000" */
          executedAmt: string;
          subOrders: {
            /** @example 14517 */
            algoId: number;
            /**
             * @format int64
             * @example 8389765519993909000
             */
            orderId: number;
            /** @example "FILLED" */
            orderStatus: string;
            /** @example "0.000" */
            executedQty: string;
            /** @example "0.000" */
            executedAmt: string;
            /** @example "-1.61471999" */
            feeAmt: string;
            /** @example "USDT" */
            feeAsset: string;
            /**
             * @format int64
             * @example 1649319001964
             */
            bookTime: number;
            /** @example "3229.44" */
            avgPrice: string;
            /** @example "SELL" */
            side: string;
            /** @example "ETHUSDT" */
            symbol: string;
            /** @example 1 */
            subId: number;
            /** @example "IMMEDIATE_OR_CANCEL" */
            timeInForce: string;
            /** @example "1.000" */
            origQty: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/algo/spot/subOrders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the account info 'Weight(IP): 1'
     *
     * @tags Portfolio Margin
     * @name V1PortfolioAccountList
     * @summary Portfolio Margin Account (USER_DATA)
     * @request GET:/sapi/v1/portfolio/account
     * @secure
     */
    v1PortfolioAccountList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Classic Portfolio margin account maintenance margin rate
           * @example "1.87987800"
           */
          uniMMR: string;
          /**
           * Account equity, unit is USD
           * @example "122607.35137903"
           */
          accountEquity: string;
          /**
           * Actual equity, unit is USD
           * @example "142607.35137903"
           */
          actualEquity: string;
          /**
           * Classic Portfolio margin account maintenance margin, unit is USD
           * @example "23.72469206"
           */
          accountMaintMargin: string;
          /**
           * Classic Portfolio margin account status:"NORMAL", "MARGIN_CALL", "SUPPLY_MARGIN", "REDUCE_ONLY", "ACTIVE_LIQUIDATION", "FORCE_LIQUIDATION", "BANKRUPTED"
           * @example "NORMAL"
           */
          accountStatus: string;
          /**
           * PM_1 for classic PM, PM_2 for PM
           * @example "PM_1"
           */
          accountType: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Portfolio Margin Collateral Rate. Weight(IP): 50
     *
     * @tags Portfolio Margin
     * @name V1PortfolioCollateralRateList
     * @summary Portfolio Margin Collateral Rate (MARKET_DATA)
     * @request GET:/sapi/v1/portfolio/collateralRate
     * @secure
     */
    v1PortfolioCollateralRateList: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "USDC" */
          asset: string;
          /** @example "1.0000" */
          collateralRate: string;
        }[],
        Error
      >({
        path: `/sapi/v1/portfolio/collateralRate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Portfolio Margin Bankruptcy Loan Amount. Weight(UID): 500
     *
     * @tags Portfolio Margin
     * @name V1PortfolioPmLoanList
     * @summary Portfolio Margin Bankruptcy Loan Amount (USER_DATA)
     * @request GET:/sapi/v1/portfolio/pmLoan
     * @secure
     */
    v1PortfolioPmLoanList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          asset: string;
          /** @example "579.45" */
          amount: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/pmLoan`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Repay Portfolio Margin Bankruptcy Loan. Weight(UID): 3000
     *
     * @tags Portfolio Margin
     * @name V1PortfolioRepayCreate
     * @summary Portfolio Margin Bankruptcy Loan Repay (USER_DATA)
     * @request POST:/sapi/v1/portfolio/repay
     * @secure
     */
    v1PortfolioRepayCreate: (
      query: {
        /** @example "SPOT" */
        from?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 58203331886213500
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/repay`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query interest history of negative balance for portfolio margin. Weight(IP): 50
     *
     * @tags Portfolio Margin
     * @name V1PortfolioInterestHistoryList
     * @summary Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA)
     * @request GET:/sapi/v1/portfolio/interest-history
     * @secure
     */
    v1PortfolioInterestHistoryList: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          asset: string;
          /** @example "24.4440" */
          interest: string;
          /**
           * @format int64
           * @example 1672801339253
           */
          interestAccruedTime: number;
          /** @example "0.0001164" */
          interestRate: string;
          /** @example "210000" */
          principal: string;
        }[],
        Error
      >({
        path: `/sapi/v1/portfolio/interest-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Portfolio Margin Asset Index Price Weight(IP): - 1 if send asset - 50 if not send asset
     *
     * @tags Portfolio Margin
     * @name V1PortfolioAssetIndexPriceList
     * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
     * @request GET:/sapi/v1/portfolio/asset-index-price
     * @secure
     */
    v1PortfolioAssetIndexPriceList: (
      query?: {
        /** @example "BTC" */
        asset?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          asset: string;
          /** @example "28251.9136906" */
          assetIndexPrice: string;
          /**
           * @format int64
           * @example 1683518338121
           */
          time: number;
        }[],
        Error
      >({
        path: `/sapi/v1/portfolio/asset-index-price`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Transfers all assets from Futures Account to Margin account Weight(IP): 1500
     *
     * @tags Portfolio Margin
     * @name V1PortfolioAutoCollectionCreate
     * @summary Fund Auto-collection (USER_DATA)
     * @request POST:/sapi/v1/portfolio/auto-collection
     * @secure
     */
    v1PortfolioAutoCollectionCreate: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "success" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/auto-collection`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description BNB transfer can be between Margin Account and USDM Account Weight(IP): 1500
     *
     * @tags Portfolio Margin
     * @name V1PortfolioBnbTransferCreate
     * @summary BNB Transfer (USER_DATA)
     * @request POST:/sapi/v1/portfolio/bnb-transfer
     * @secure
     */
    v1PortfolioBnbTransferCreate: (
      query: {
        /** @example "TO_UM" */
        transferSide: "TO_UM" | "FROM_UM";
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 100000001
           */
          tranId: number;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/bnb-transfer`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Change Auto-repay-futures Status Weight(IP): 1500
     *
     * @tags Portfolio Margin
     * @name V1PortfolioRepayFuturesSwitchCreate
     * @summary Change Auto-repay-futures Status (USER_DATA)
     * @request POST:/sapi/v1/portfolio/repay-futures-switch
     * @secure
     */
    v1PortfolioRepayFuturesSwitchCreate: (
      query: {
        /** @example true */
        autoRepay: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "success" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/repay-futures-switch`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Auto-repay-futures Status Weight(IP): 30
     *
     * @tags Portfolio Margin
     * @name V1PortfolioRepayFuturesSwitchList
     * @summary Get Auto-repay-futures Status (USER_DATA)
     * @request GET:/sapi/v1/portfolio/repay-futures-switch
     * @secure
     */
    v1PortfolioRepayFuturesSwitchList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          autoRepay: boolean;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/repay-futures-switch`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Repay futures Negative Balance Weight(IP): 1500
     *
     * @tags Portfolio Margin
     * @name V1PortfolioRepayFuturesNegativeBalanceCreate
     * @summary Repay futures Negative Balance (USER_DATA)
     * @request POST:/sapi/v1/portfolio/repay-futures-negative-balance
     * @secure
     */
    v1PortfolioRepayFuturesNegativeBalanceCreate: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "success" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/repay-futures-negative-balance`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 50
     *
     * @tags Portfolio Margin
     * @name V1PortfolioMarginAssetLeverageList
     * @summary Get Portfolio Margin Asset Leverage (USER_DATA)
     * @request GET:/sapi/v1/portfolio/margin-asset-leverage
     */
    v1PortfolioMarginAssetLeverageList: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "USDC" */
          asset?: string;
          /** @example "1.0000" */
          collateralRate?: string;
        }[],
        Error
      >({
        path: `/sapi/v1/portfolio/margin-asset-leverage`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Transfers specific asset from Futures Account to Margin account Weight(IP): 60
     *
     * @tags Portfolio Margin
     * @name V1PortfolioAssetCollectionCreate
     * @summary Fund Collection by Asset (USER_DATA)
     * @request POST:/sapi/v1/portfolio/asset-collection
     * @secure
     */
    v1PortfolioAssetCollectionCreate: (
      query: {
        /** @example "BTC" */
        asset: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "success" */
          msg: string;
        },
        Error
      >({
        path: `/sapi/v1/portfolio/asset-collection`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtTokenInfoList
     * @summary BLVT Info (MARKET_DATA)
     * @request GET:/sapi/v1/blvt/tokenInfo
     * @secure
     */
    v1BlvtTokenInfoList: (
      query?: {
        /** BTCDOWN, BTCUP */
        tokenName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTCDOWN" */
          tokenName: string;
          /** @example "3X Short Bitcoin Token" */
          description: string;
          /** @example "BTC" */
          underlying: string;
          /** @example "717953.95" */
          tokenIssued: string;
          /** @example "-821.474 BTCUSDT Futures" */
          basket: string;
          currentBaskets: {
            /** @example "BTCUSDT" */
            symbol: string;
            /** @example "-1183.984" */
            amount: string;
            /** @example "-22871089.96704" */
            notionalValue: string;
          }[];
          /** @example "4.79" */
          nav: string;
          /** @example "-2.316" */
          realLeverage: string;
          /** @example "0.001020" */
          fundingRate: string;
          /** @example "0.0001" */
          dailyManagementFee: string;
          /** @example "0.0010" */
          purchaseFeePct: string;
          /** @example "100000.00" */
          dailyPurchaseLimit: string;
          /** @example "0.0010" */
          redeemFeePct: string;
          /** @example "1000000.00" */
          dailyRedeemLimit: string;
          /**
           * @format int64
           * @example 1583127900000
           */
          timestamp: number;
        }[],
        Error
      >({
        path: `/sapi/v1/blvt/tokenInfo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtSubscribeCreate
     * @summary Subscribe BLVT (USER_DATA)
     * @request POST:/sapi/v1/blvt/subscribe
     * @secure
     */
    v1BlvtSubscribeCreate: (
      query: {
        /** BTCDOWN, BTCUP */
        tokenName: string;
        /**
         * Spot balance
         * @format double
         */
        cost: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 123
           */
          id: number;
          /**
           * S, P, and F for "success", "pending", and "failure"
           * @example "S"
           */
          status: string;
          /** @example "LINKUP" */
          tokenName: string;
          /**
           * subscribed token amount
           * @example "0.9559090500"
           */
          amount: string;
          /**
           * subscription cost in usdt
           * @example "9.99999995"
           */
          cost: string;
          /**
           * @format int64
           * @example 1600249972899
           */
          timestamp: number;
        },
        Error
      >({
        path: `/sapi/v1/blvt/subscribe`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Only the data of the latest 90 days is available Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtSubscribeRecordList
     * @summary Query Subscription Record (USER_DATA)
     * @request GET:/sapi/v1/blvt/subscribe/record
     * @secure
     */
    v1BlvtSubscribeRecordList: (
      query: {
        /** BTCDOWN, BTCUP */
        tokenName?: string;
        /** @format int64 */
        id?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          id: number;
          /** @example "LINKUP" */
          tokenName: string;
          /**
           * Subscription amount
           * @example "0.54216292"
           */
          amount: string;
          /**
           * NAV price of subscription
           * @example "18.42621386"
           */
          nav: string;
          /**
           * Subscription fee in usdt
           * @example "0.00999000"
           */
          fee: string;
          /**
           * Subscription cost in usdt
           * @example "9.99999991"
           */
          totalCharge: string;
          /**
           * @format int64
           * @example 1599127217916
           */
          timestamp: number;
        },
        Error
      >({
        path: `/sapi/v1/blvt/subscribe/record`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtRedeemCreate
     * @summary Redeem BLVT (USER_DATA)
     * @request POST:/sapi/v1/blvt/redeem
     * @secure
     */
    v1BlvtRedeemCreate: (
      query: {
        /** BTCDOWN, BTCUP */
        tokenName: string;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 123
           */
          id: number;
          /**
           * S, P, and F for "success", "pending", and "failure"
           * @example "S"
           */
          status: string;
          /** @example "LINKUP" */
          tokenName: string;
          /**
           * Redemption token amount
           * @example "0.95590905"
           */
          redeemAmount: string;
          /**
           * Redemption value in usdt
           * @example "10.05022099"
           */
          amount: string;
          /**
           * @format int64
           * @example 1600250279614
           */
          timestamp: number;
        },
        Error
      >({
        path: `/sapi/v1/blvt/redeem`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - Only the data of the latest 90 days is available Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtRedeemRecordList
     * @summary Redemption Record (USER_DATA)
     * @request GET:/sapi/v1/blvt/redeem/record
     * @secure
     */
    v1BlvtRedeemRecordList: (
      query: {
        /** BTCDOWN, BTCUP */
        tokenName?: string;
        /** @format int64 */
        id?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * default 1000, max 1000
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          id: number;
          /** @example "LINKUP" */
          tokenName: string;
          /**
           * Redemption amount
           * @example "0.54216292"
           */
          amount: string;
          /**
           * NAV of redemption
           * @example "18.36345064"
           */
          nav: string;
          /**
           * Reemption fee
           * @example "0.00995598"
           */
          fee: string;
          /**
           * Net redemption value in usdt
           * @example "9.94602604"
           */
          netProceed: string;
          /**
           * @format int64
           * @example 1599128003050
           */
          timestamp: number;
        }[],
        Error
      >({
        path: `/sapi/v1/blvt/redeem/record`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags BLVT
     * @name V1BlvtUserLimitList
     * @summary BLVT User Limit Info (USER_DATA)
     * @request GET:/sapi/v1/blvt/userLimit
     * @secure
     */
    v1BlvtUserLimitList: (
      query: {
        /** BTCDOWN, BTCUP */
        tokenName?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "LINKUP" */
          tokenName: string;
          /**
           * USDT
           * @example "1000"
           */
          userDailyTotalPurchaseLimit: string;
          /**
           * USDT
           * @example "1000"
           */
          userDailyTotalRedeemLimit: string;
        }[],
        Error
      >({
        path: `/sapi/v1/blvt/userLimit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get metadata about all swap pools. Weight(IP): 1
     *
     * @tags BSwap
     * @name V1BswapPoolsList
     * @summary List All Swap Pools (MARKET_DATA)
     * @request GET:/sapi/v1/bswap/pools
     * @secure
     */
    v1BswapPoolsList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @format int64
           * @example 2
           */
          poolId: number;
          /** @example "BUSD/USDT" */
          poolName: string;
          /** @example ["BUSD","USDT"] */
          assets: string[];
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/pools`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get liquidity information and user share of a pool. Weight(IP): - `1` for one pool; - `10` when the poolId parameter is omitted;
     *
     * @tags BSwap
     * @name V1BswapLiquidityList
     * @summary Liquidity information of a pool (USER_DATA)
     * @request GET:/sapi/v1/bswap/liquidity
     * @secure
     */
    v1BswapLiquidityList: (
      query: {
        /** @format int64 */
        poolId?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 2
           */
          poolId: number;
          /** @example "BUSD/USDT" */
          poolNmae: string;
          /**
           * @format int64
           * @example 1565769342148
           */
          updateTime: number;
          liquidity: {
            /**
             * @format double
             * @example 100000315.79
             */
            BUSD: number;
            /**
             * @format double
             * @example 99999245.54
             */
            USDT: number;
          };
          share: {
            /**
             * @format double
             * @example 12415
             */
            shareAmount: number;
            /**
             * @format double
             * @example 0.00006207
             */
            sharePercentage: number;
            asset: {
              /**
               * @format double
               * @example 6207.02
               */
              BUSD: number;
              /**
               * @format double
               * @example 6206.95
               */
              USDT: number;
            };
          };
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/liquidity`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add liquidity to a pool. Weight(UID): 1000 (Additional: 3 times one second)
     *
     * @tags BSwap
     * @name V1BswapLiquidityAddCreate
     * @summary Add Liquidity (TRADE)
     * @request POST:/sapi/v1/bswap/liquidityAdd
     * @secure
     */
    v1BswapLiquidityAddCreate: (
      query: {
        /** @format int64 */
        poolId: number;
        /**
         * * `Single` - to add a single token
         * * `Combination` - to add dual tokens
         * @example "Single"
         */
        type?: "Single" | "Combination";
        /** @example "BTC" */
        asset: string;
        /**
         * @format double
         * @example 1
         */
        quantity: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12341
           */
          operationId: number;
        },
        Error
      >({
        path: `/sapi/v1/bswap/liquidityAdd`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove liquidity from a pool, `type` include `SINGLE` and `COMBINATION`, asset is mandatory for single asset removal Weight(UID): 1000 (Additional: 3 times one second)
     *
     * @tags BSwap
     * @name V1BswapLiquidityRemoveCreate
     * @summary Remove Liquidity (TRADE)
     * @request POST:/sapi/v1/bswap/liquidityRemove
     * @secure
     */
    v1BswapLiquidityRemoveCreate: (
      query: {
        /** @format int64 */
        poolId: number;
        /**
         * * `SINGLE` - for single asset removal
         * * `COMBINATION` - for combination of all coins removal
         * @example "SINGLE"
         */
        type: "SINGLE" | "COMBINATION";
        /**
         * Mandatory for single asset removal
         * @example "BNB"
         */
        asset?: string;
        /** @format double */
        shareAmount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12341
           */
          operationId: number;
        },
        Error
      >({
        path: `/sapi/v1/bswap/liquidityRemove`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get liquidity operation (add/remove) records. Weight(UID): 3000
     *
     * @tags BSwap
     * @name V1BswapLiquidityOpsList
     * @summary Liquidity Operation Record (USER_DATA)
     * @request GET:/sapi/v1/bswap/liquidityOps
     * @secure
     */
    v1BswapLiquidityOpsList: (
      query: {
        /** @format int64 */
        operationId?: number;
        /** @format int64 */
        poolId?: number;
        operation?: "ADD" | "REMOVE";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12341
           */
          operationId: number;
          /**
           * @format int64
           * @example 2
           */
          poolId: number;
          /** @example "BUSD/USDT" */
          poolName: string;
          /**
           * "ADD" or "REMOVE"
           * @example "ADD"
           */
          operation: string;
          /**
           * 0: pending, 1: success, 2: failed
           * @format int32
           * @example 1
           */
          status: number;
          /**
           * @format int64
           * @example 1565769342148
           */
          updateTime: number;
          /** @example "10.1" */
          shareAmount: string;
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/liquidityOps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Request a quote for swap quote asset (selling asset) for base asset (buying asset), essentially price/exchange rates. quoteQty is quantity of quote asset (to sell). Please be noted the quote is for reference only, the actual price will change as the liquidity changes, it's recommended to swap immediate after request a quote for slippage prevention. Weight(UID): 150
     *
     * @tags BSwap
     * @name V1BswapQuoteList
     * @summary Request Quote (USER_DATA)
     * @request GET:/sapi/v1/bswap/quote
     * @secure
     */
    v1BswapQuoteList: (
      query: {
        /** @example "USDT" */
        quoteAsset: string;
        /** @example "BUSD" */
        baseAsset: string;
        /** @format double */
        quoteQty: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "USDT" */
          quoteAsset: string;
          /** @example "BUSD" */
          baseAsset: string;
          /**
           * @format double
           * @example 300000
           */
          quoteQty: number;
          /**
           * @format double
           * @example 299975
           */
          baseQty: number;
          /**
           * @format double
           * @example 1.00008334
           */
          price: number;
          /**
           * @format double
           * @example 0.00007245
           */
          slippage: number;
          /**
           * @format double
           * @example 120
           */
          fee: number;
        },
        Error
      >({
        path: `/sapi/v1/bswap/quote`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Swap `quoteAsset` for `baseAsset`. Weight(UID): 1000 (Additional: 3 times one second)
     *
     * @tags BSwap
     * @name V1BswapSwapCreate
     * @summary Swap (TRADE)
     * @request POST:/sapi/v1/bswap/swap
     * @secure
     */
    v1BswapSwapCreate: (
      query: {
        /** @example "USDT" */
        quoteAsset: string;
        /** @example "BUSD" */
        baseAsset: string;
        /** @format double */
        quoteQty: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 2314
           */
          swapId: number;
        },
        Error
      >({
        path: `/sapi/v1/bswap/swap`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get swap history. Weight(UID): 3000
     *
     * @tags BSwap
     * @name V1BswapSwapList
     * @summary Swap History (USER_DATA)
     * @request GET:/sapi/v1/bswap/swap
     * @secure
     */
    v1BswapSwapList: (
      query: {
        /** @format int64 */
        swapId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * * `0` - pending for swap
         * * `1` - success
         * * `2` - failed
         * @format int32
         * @example 1
         */
        status?: number;
        /** @example "USDT" */
        quoteAsset?: string;
        /** @example "BUSD" */
        baseAsset?: string;
        /**
         * default 3, max 100
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 2314
           */
          swapId: number;
          /**
           * @format int64
           * @example 1565770342148
           */
          swapTime: number;
          /**
           * 0: pending, 1: success, 2: failed
           * @format int32
           * @example 0
           */
          status: number;
          /** @example "USDT" */
          quoteAsset: string;
          /** @example "BUSD" */
          baseAsset: string;
          /**
           * @format double
           * @example 300000
           */
          quoteQty: number;
          /**
           * @format double
           * @example 299975
           */
          baseQty: number;
          /**
           * @format double
           * @example 1.00008334
           */
          price: number;
          /**
           * @format double
           * @example 120
           */
          fee: number;
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/swap`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags BSwap
     * @name V1BswapPoolConfigureList
     * @summary Pool Configure (USER_DATA)
     * @request GET:/sapi/v1/bswap/poolConfigure
     * @secure
     */
    v1BswapPoolConfigureList: (
      query: {
        /**
         * @format int64
         * @example 2
         */
        poolId?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 2
           */
          poolId: number;
          /** @example "BUSD/USDT" */
          poolNmae: string;
          /**
           * @format int64
           * @example 1565769342148
           */
          updateTime: number;
          liquidity: {
            /**
             * "NA" if pool is an innovation pool
             * @format int64
             * @example 2000
             */
            constantA: number;
            /**
             * @format double
             * @example 0.1
             */
            minRedeemShare: number;
            /**
             * The swap proceeds only when the slippage is within the set range
             * @format double
             * @example 0.2
             */
            slippageTolerance: number;
          };
          assetConfigure: {
            BUSD: {
              /**
               * @format int64
               * @example 10
               */
              minAdd: number;
              /**
               * @format int64
               * @example 20
               */
              maxAdd: number;
              /**
               * @format int64
               * @example 10
               */
              minSwap: number;
              /**
               * @format int64
               * @example 30
               */
              maxSwap: number;
            };
            USDT: {
              /**
               * @format int64
               * @example 10
               */
              minAdd: number;
              /**
               * @format int64
               * @example 20
               */
              maxAdd: number;
              /**
               * @format int64
               * @example 10
               */
              minSwap: number;
              /**
               * @format int64
               * @example 30
               */
              maxSwap: number;
            };
          };
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/poolConfigure`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Calculate expected share amount for adding liquidity in single or dual token. Weight(IP): 150
     *
     * @tags BSwap
     * @name V1BswapAddLiquidityPreviewList
     * @summary Add Liquidity Preview (USER_DATA)
     * @request GET:/sapi/v1/bswap/addLiquidityPreview
     * @secure
     */
    v1BswapAddLiquidityPreviewList: (
      query: {
        /**
         * @format int64
         * @example 2
         */
        poolId: number;
        /**
         * * `SINGLE` - for adding a single token
         * * `COMBINATION` - for adding dual tokens
         * @example "SINGLE"
         */
        type: "SINGLE" | "COMBINATION";
        /** @example "USDT" */
        quoteAsset: string;
        /** @format double */
        quoteQty: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BswapAddLiquidityPreviewCombination | BswapAddLiquidityPreviewSingle, Error>({
        path: `/sapi/v1/bswap/addLiquidityPreview`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Calculate the expected asset amount of single token redemption or dual token redemption. Weight(IP): 150
     *
     * @tags BSwap
     * @name V1BswapRemoveLiquidityPreviewList
     * @summary Remove Liquidity Preview (USER_DATA)
     * @request GET:/sapi/v1/bswap/removeLiquidityPreview
     * @secure
     */
    v1BswapRemoveLiquidityPreviewList: (
      query: {
        /**
         * @format int64
         * @example 2
         */
        poolId: number;
        /**
         * * `SINGLE` - remove and obtain a single token
         * * `COMBINATION` - remove and obtain dual token
         * @example "SINGLE"
         */
        type: "SINGLE" | "COMBINATION";
        /** @example "USDT" */
        quoteAsset: string;
        /** @format double */
        shareAmount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BswapRmvLiquidityPreviewCombination | BswapRmvLiquidityPreviewSingle, Error>({
        path: `/sapi/v1/bswap/removeLiquidityPreview`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get unclaimed rewards record. Weight(UID): 1000
     *
     * @tags BSwap
     * @name V1BswapUnclaimedRewardsList
     * @summary Get Unclaimed Rewards Record (USER_DATA)
     * @request GET:/sapi/v1/bswap/unclaimedRewards
     * @secure
     */
    v1BswapUnclaimedRewardsList: (
      query: {
        /**
         * 0: Swap rewards, 1: Liquidity rewards, default to 0
         * @format int32
         * @example 0
         */
        type?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          totalUnclaimedRewards: {
            /**
             * @format float
             * @example 100000315.79
             */
            BUSD: number;
            /**
             * @format double
             * @example 1e-8
             */
            BNB: number;
            /**
             * @format double
             * @example 2e-8
             */
            USDT: number;
          };
          details: {
            "BNB/USDT": {
              /**
               * @format float
               * @example 100000315.79
               */
              BUSD: number;
              /**
               * @format double
               * @example 2e-8
               */
              USDT: number;
            };
            "BNB/BTC": {
              /**
               * @format double
               * @example 1e-8
               */
              BNB: number;
            };
          };
        },
        Error
      >({
        path: `/sapi/v1/bswap/unclaimedRewards`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Claim swap rewards or liquidity rewards Weight(UID): 1000
     *
     * @tags BSwap
     * @name V1BswapClaimRewardsCreate
     * @summary Claim rewards (TRADE)
     * @request POST:/sapi/v1/bswap/claimRewards
     * @secure
     */
    v1BswapClaimRewardsCreate: (
      query: {
        /**
         * 0: Swap rewards, 1: Liquidity rewards, default to 0
         * @format int32
         * @example 0
         */
        type?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/bswap/claimRewards`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get history of claimed rewards. Weight(UID): 1000
     *
     * @tags BSwap
     * @name V1BswapClaimedHistoryList
     * @summary Get Claimed History (USER_DATA)
     * @request GET:/sapi/v1/bswap/claimedHistory
     * @secure
     */
    v1BswapClaimedHistoryList: (
      query: {
        /** @format int64 */
        poolId?: number;
        assetRewards?: string;
        /**
         * 0: Swap rewards, 1: Liquidity rewards, default to 0
         * @format int32
         * @example 0
         */
        type?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 3, max 100
         * @format int32
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 52
           */
          poolId: number;
          /** @example "BNB/USDT" */
          poolName: string;
          /** @example "BNB" */
          assetRewards: string;
          /**
           * @format int64
           * @example 1565769342148
           */
          claimTime: number;
          /**
           * @format float
           * @example 2.3e-7
           */
          claimAmount: number;
          /**
           * 0: pending, 1: success
           * @format int32
           * @example 1
           */
          status: number;
        }[],
        Error
      >({
        path: `/sapi/v1/bswap/claimedHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days. Weight(IP): 1
     *
     * @tags C2C
     * @name V1C2COrderMatchListUserOrderHistoryList
     * @summary Get C2C Trade History (USER_DATA)
     * @request GET:/sapi/v1/c2c/orderMatch/listUserOrderHistory
     * @secure
     */
    v1C2COrderMatchListUserOrderHistoryList: (
      query: {
        tradeType: "BUY" | "SELL";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTimestamp?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTimestamp?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * default 100, max 100
         * @format int32
         */
        rows?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "20219644646554779648" */
            orderNumber: string;
            /** @example "11218246497340923904" */
            advNo: string;
            /** @example "SELL" */
            tradeType: string;
            /** @example "BUSD" */
            asset: string;
            /** @example "CNY" */
            fiat: string;
            /** @example "￥" */
            fiatSymbol: string;
            /**
             * Quantity (in Crypto)
             * @example "5000.00000000"
             */
            amount: string;
            /** @example "33400.00000000" */
            totalPrice: string;
            /**
             * Unit Price (in Fiat)
             * @example "6.68"
             */
            unitPrice: string;
            /**
             * PENDING, TRADING, BUYER_PAYED, DISTRIBUTING, COMPLETED, IN_APPEAL, CANCELLED, CANCELLED_BY_SYSTEM
             * @example "COMPLETED"
             */
            orderStatus: string;
            /**
             * @format int64
             * @example 1619361369000
             */
            createTime: number;
            /**
             * Transaction Fee (in Crypto)
             * @example "0"
             */
            commission: string;
            /** @example "ab***" */
            counterPartNickName: string;
            /** @example "TAKER" */
            advertisementRole: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/c2c/orderMatch/listUserOrderHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(IP): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipOngoingOrdersList
     * @summary Get VIP Loan Ongoing Orders (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/ongoing/orders
     * @secure
     */
    v1LoanVipOngoingOrdersList: (
      query: {
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** @format int64 */
        collateralAccountId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 10; max 100.
         * @format int32
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /**
             * @format int64
             * @example 100000001
             */
            orderId: number;
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            totalDebt: string;
            /** @example "10.27687923" */
            residualInterest: string;
            /** @example "12345678, 23456789" */
            collateralAccountId: string;
            /** @example "BNB,BTC,ETH" */
            collateralCoin: string;
            /**
             * locked collateral value shown in USD value
             * @example "25000.27565492"
             */
            collateralValue: string;
            /** @example "25000.27565492" */
            totalCollateralValueAfterHaircut?: string;
            /** @example "25000.27565492" */
            lockedCollateralValue?: string;
            /** @example "0.57" */
            currentLTV: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            expirationTime: number;
            /** @example "1676851200000" */
            loanDate: string;
            /** @example "0.0123" */
            loanRate: string;
            /** @example "30days" */
            loanTerm: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/ongoing/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(UID): 6000
     *
     * @tags VIP Loans
     * @name V1LoanVipRepayCreate
     * @summary VIP Loan Repay (TRADE)
     * @request POST:/sapi/v1/loan/vip/repay
     * @secure
     */
    v1LoanVipRepayCreate: (
      query: {
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * @format double
         * @example "1.01"
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "200.5" */
          repayAmount: string;
          /** @example "100.5" */
          remainingPrincipal: string;
          /** @example "0" */
          remainingInterest: string;
          /** @example "BNB,BTC,ETH" */
          collateralCoin: string;
          /** @example "0.25" */
          currentLTV: string;
          /**
           * Repaid, Repaying, Failed
           * @example "Repaid"
           */
          repayStatus: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/repay`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(IP): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipRepayHistoryList
     * @summary Get VIP Loan Repayment History (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/repay/history
     * @secure
     */
    v1LoanVipRepayHistoryList: (
      query: {
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 10; max 100.
         * @format int32
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            repayAmount: string;
            /** @example "BNB,BTC,ETH" */
            collateralCoin: string;
            /**
             * Repaid, Repaying, Failed
             * @example "Repaid"
             */
            repayStatus: string;
            /** @example "1575018510000" */
            repayTime: string;
            /** @example "756783308056935434" */
            orderId: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/repay/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(IP): 6000
     *
     * @tags VIP Loans
     * @name V1LoanVipCollateralAccountList
     * @summary Check Locked Value of VIP Collateral Account (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/collateral/account
     * @secure
     */
    v1LoanVipCollateralAccountList: (
      query: {
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** @format int64 */
        collateralAccountId?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "12345678" */
            collateralAccountId: string;
            /** @example "BNB,BTC,ETH" */
            collateralCoin: string;
            /**
             * locked collateral value shown in USD value
             * @example "500.27565492"
             */
            collateralValue: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/collateral/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(UID): 6000
     *
     * @tags VIP Loans
     * @name V1LoanVipBorrowCreate
     * @summary VIP Loan Borrow
     * @request POST:/sapi/v1/loan/vip/borrow
     * @secure
     */
    v1LoanVipBorrowCreate: (
      query: {
        /** @format int64 */
        loanAccountId: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /** @format float */
        loanAmount: number;
        collateralAccountId: string;
        collateralCoin: string;
        /** @example "TRUE" */
        isFlexibleRate: "TRUE" | "FALSE";
        loanTerm?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "12345678" */
          loanAccountId: string;
          /** @example "12345678" */
          requestId: string;
          /** @example "BTC" */
          loanCoin: string;
          /** @example "No" */
          isFlexibleRate: string;
          /** @example "100.55" */
          loanAmount: string;
          /** @example "12345678,12345678,12345678" */
          collateralAccountId: string;
          /** @example "BUSD,USDT,ETH" */
          collateralCoin: string;
          /** @example "30" */
          loanTerm?: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/borrow`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipLoanableDataList
     * @summary Get Loanable Assets Data
     * @request GET:/sapi/v1/loan/vip/loanable/data
     * @secure
     */
    v1LoanVipLoanableDataList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 1 */
          total: number;
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "0.001503" */
            _flexibleDailyInterestRate: string;
            /** @example "0.548595" */
            _flexibleYearlyInterestRate: string;
            /** @example "0.000136" */
            _30dDailyInterestRate: string;
            /** @example "0.03450" */
            _30dYearlyInterestRate: string;
            /** @example "0.000145" */
            _60dDailyInterestRate: string;
            /** @example "0.04103" */
            _60dYearlyInterestRate: string;
            /** @example "100" */
            minLimit: string;
            /** @example "1000000" */
            maxLimit: string;
            /** @example 1 */
            vipLevel: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/loanable/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get collateral asset data. Weight(IP): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipCollateralDataList
     * @summary Get Collateral Asset Data (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/collateral/data
     * @secure
     */
    v1LoanVipCollateralDataList: (
      query: {
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            collateralCoin: string;
            /** @example "100%" */
            _1stCollateralRatio: string;
            /** @example "1-10000000" */
            _1stCollateralRange: string;
            /** @example "80%" */
            _2ndCollateralRatio: string;
            /** @example "10000000-100000000" */
            _2ndCollateralRange: string;
            /** @example "60%" */
            _3rdCollateralRatio: string;
            /** @example "100000000-1000000000" */
            _3rdCollateralRange: string;
            /** @example "0%" */
            _4thCollateralRatio: string;
            /** @example ">10000000000" */
            _4thCollateralRange: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/collateral/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Application Status Weight(UID): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipRequestDataList
     * @summary Query Application Status (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/request/data
     * @secure
     */
    v1LoanVipRequestDataList: (
      query: {
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 1 */
          total: number;
          rows: {
            /** @example "12345678" */
            loanAccountId: string;
            /** @example "12345678" */
            orderId: string;
            /** @example "12345678" */
            requestId: string;
            /** @example "BTC" */
            loanCoin: string;
            /** @example "100.5" */
            loanAmount: string;
            /** @example "12345678,12345678,12345678" */
            collateralAccountId: string;
            /** @example "BUSD,USDT,ETH" */
            collateralCoin: string;
            /** @example "30" */
            loanTerm: number;
            /** @example "Repaid" */
            status: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/request/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get borrow interest rate. Weight(UID): 400
     *
     * @tags VIP Loans
     * @name V1LoanVipRequestInterestRateList
     * @summary Get Borrow Interest Rate (USER_DATA)
     * @request GET:/sapi/v1/loan/vip/request/interestRate
     * @secure
     */
    v1LoanVipRequestInterestRateList: (
      query: {
        /**
         * Max 10 assets, Multiple split by ","
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          asset: string;
          /** @example "0.001503" */
          flexibleDailyInterestRate: string;
          /** @example "0.548595" */
          flexibleYearlyInterestRate: string;
          /**
           * @format int64
           * @example 1577233578000
           */
          time: number;
        }[],
        Error
      >({
        path: `/sapi/v1/loan/vip/request/interestRate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description VIP loan is available for VIP users only. Weight(UID): 6000
     *
     * @tags VIP Loans
     * @name V1LoanVipRenewCreate
     * @summary VIP Loan Renew
     * @request POST:/sapi/v1/loan/vip/renew
     * @secure
     */
    v1LoanVipRenewCreate: (
      query: {
        /**
         * Order id
         * @format int64
         */
        orderId?: number;
        /** @example 30 */
        loanTerm?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "12345678" */
          loanAccountId: string;
          /** @example "BTC" */
          loanCoin: string;
          /** @example "100.55" */
          loanAmount: string;
          /** @example "12345677,12345678,12345679" */
          collateralAccountId: string;
          /** @example "BUSD,USDT,ETH" */
          collateralCoin: string;
          /** @example "30" */
          loanTerm: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/vip/renew`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If startTime and endTime are not sent, the recent 7-day data will be returned. - The max interval between startTime and endTime is 30 days. Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanIncomeList
     * @summary Get Crypto Loans Income History (USER_DATA)
     * @request GET:/sapi/v1/loan/income
     * @secure
     */
    v1LoanIncomeList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * All types will be returned by default.
         *   * `borrowIn`
         *   * `collateralSpent`
         *   * `repayAmount`
         *   * `collateralReturn` - Collateral return after repayment
         *   * `addCollateral`
         *   * `removeCollateral`
         *   * `collateralReturnAfterLiquidation`
         */
        type?:
          | "borrowIn"
          | "collateralSpent"
          | "repayAmount"
          | "collateralReturn"
          | "addCollateral"
          | "removeCollateral"
          | "collateralReturnAfterLiquidation";
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * default 20, max 100
         * @format int32
         * @example 20
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          asset: string;
          /** @example "borrowIn" */
          type: string;
          /** @example "100" */
          amount: string;
          /**
           * @format int64
           * @example 1633771139847
           */
          timestamp: number;
          /** @example "80423589583" */
          tranId: string;
        }[],
        Error
      >({
        path: `/sapi/v1/loan/income`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanBorrowCreate
     * @summary Crypto Loan Borrow (TRADE)
     * @request POST:/sapi/v1/loan/borrow
     * @secure
     */
    v1LoanBorrowCreate: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin: string;
        /**
         * Loan amount
         * @format float
         * @example 100.1
         */
        loanAmount?: number;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin: string;
        /**
         * @format float
         * @example 50.5
         */
        collateralAmount?: number;
        /**
         * 7/14/30/90/180 days
         * @format int32
         * @example 30
         */
        loanTerm: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "100.5" */
          loanAmount: string;
          /** @example "BNB" */
          collateralCoin: string;
          /** @example "50.5" */
          collateralAmount: string;
          /** @example "0.001234" */
          hourlyInterestRate: string;
          /** @example "100000001" */
          orderId: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/borrow`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If startTime and endTime are not sent, the recent 90-day data will be returned. - The max interval between startTime and endTime is 180 days. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanBorrowHistoryList
     * @summary Get Crypto Loans Borrow History (USER_DATA)
     * @request GET:/sapi/v1/loan/borrow/history
     * @secure
     */
    v1LoanBorrowHistoryList: (
      query: {
        /**
         * orderId in POST /sapi/v1/loan/borrow
         * @format int64
         * @example 10
         */
        orderId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * default 10, max 100
         * @format int64
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /**
             * @format int64
             * @example 100000001
             */
            orderId: number;
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            initialLoanAmount: string;
            /** @example "0.000057" */
            hourlyInterestRate: string;
            /** @example "7" */
            loanTerm: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "49.27565492" */
            initialCollateralAmount: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            borrowTime: number;
            /** @example "Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed" */
            status: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/borrow/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 300
     *
     * @tags Crypto Loans
     * @name V1LoanOngoingOrdersList
     * @summary Get Loan Ongoing Orders (USER_DATA)
     * @request GET:/sapi/v1/loan/ongoing/orders
     * @secure
     */
    v1LoanOngoingOrdersList: (
      query: {
        /**
         * orderId in POST /sapi/v1/loan/borrow
         * @format int64
         * @example 10
         */
        orderId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * Current querying page. Start from 1; default:1, max:1000
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * default 10, max 100
         * @format int64
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /**
             * @format int64
             * @example 100000001
             */
            orderId: number;
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            totalDebt: string;
            /** @example "10.27687923" */
            residualInterest: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "49.27565492" */
            collateralAmount: string;
            /** @example "0.57" */
            currentLTV: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            expirationTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/ongoing/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanRepayCreate
     * @summary Crypto Loan Repay (TRADE)
     * @request POST:/sapi/v1/loan/repay
     * @secure
     */
    v1LoanRepayCreate: (
      query: {
        /**
         * Order ID
         * @format int64
         * @example 123456789
         */
        orderId: number;
        /**
         * Repayment Amount
         * @format double
         * @example 100.5
         */
        amount: number;
        /**
         * Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'.
         * @format int32
         * @example 1
         */
        type?: number;
        /**
         * Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order.
         * @example true
         */
        collateralReturn?: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RepaymentInfo | RepaymentInfo2, Error>({
        path: `/sapi/v1/loan/repay`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanRepayHistoryList
     * @summary Get Loan Repayment History (USER_DATA)
     * @request GET:/sapi/v1/loan/repay/history
     * @secure
     */
    v1LoanRepayHistoryList: (
      query: {
        /**
         * Order ID
         * @format int64
         * @example 10
         */
        orderId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * default 10, max 100
         * @format int64
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            repayAmount: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "0" */
            collateralUsed: string;
            /** @example "49.27565492" */
            collateralReturn: string;
            /** @example "1" */
            repayType: string;
            /**
             * 'repayType': '1' // 1 for 'repay with borrowed coin', 2 for 'repay with collateral' 'repayStatus': 'Repaid' // Repaid, Repaying, Failed
             * @example "Repaid"
             */
            repayStatus: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            repayTime: number;
            /**
             * @format int64
             * @example 756783308056935400
             */
            orderId: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/repay/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanAdjustLtvCreate
     * @summary Crypto Loan Adjust LTV (TRADE)
     * @request POST:/sapi/v1/loan/adjust/ltv
     * @secure
     */
    v1LoanAdjustLtvCreate: (
      query: {
        /**
         * Order ID
         * @format int64
         * @example 123456789
         */
        orderId: number;
        /**
         * Amount
         * @format double
         * @example 100.5
         */
        amount: number;
        /**
         * 'ADDITIONAL', 'REDUCED'
         * @example "ADDITIONAL"
         */
        direction: "ADDITIONAL" | "REDUCED";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "BNB" */
          collateralCoin: string;
          /** @example "ADDITIONAL" */
          direction: string;
          /** @example "5.235" */
          amount: string;
          /** @example "0.52" */
          currentLTV: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/adjust/ltv`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanLtvAdjustmentHistoryList
     * @summary Get Loan LTV Adjustment History (USER_DATA)
     * @request GET:/sapi/v1/loan/ltv/adjustment/history
     * @secure
     */
    v1LoanLtvAdjustmentHistoryList: (
      query: {
        /**
         * Order ID
         * @format int64
         * @example 10
         */
        orderId?: number;
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * default 10, max 100
         * @format int64
         * @example 10
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "ADDITIONAL" */
            direction: string;
            /** @example "5.235" */
            amount: string;
            /** @example "0.78" */
            preLTV: string;
            /** @example "0.56" */
            afterLTV: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            adjustTime: number;
            /**
             * @format int64
             * @example 756783308056935400
             */
            orderId: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/ltv/adjustment/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanLoanableDataList
     * @summary Get Loanable Assets Data (USER_DATA)
     * @request GET:/sapi/v1/loan/loanable/data
     * @secure
     */
    v1LoanLoanableDataList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "0.00000491" */
            _7dHourlyInterestRate: string;
            /** @example "0.000118" */
            _7dDailyInterestRate: string;
            /** @example "0.00000491" */
            _14dHourlyInterestRate: string;
            /** @example "0.000118" */
            _14dDailyInterestRate: string;
            /** @example "0.00000567" */
            _30dHourlyInterestRate: string;
            /** @example "0.000136" */
            _30dDailyInterestRate: string;
            /** @example "0.00000596" */
            _90dHourlyInterestRate: string;
            /** @example "0.000143" */
            _90dDailyInterestRate: string;
            /** @example "0.00000631" */
            _180dHourlyInterestRate: string;
            /** @example "0.000151" */
            _180dDailyInterestRate: string;
            /** @example "100" */
            minLimit: string;
            /** @example "1000000" */
            maxLimit: string;
            /**
             * @format int32
             * @example 1
             */
            vipLevel: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/loanable/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanCollateralDataList
     * @summary Get Collateral Assets Data (USER_DATA)
     * @request GET:/sapi/v1/loan/collateral/data
     * @secure
     */
    v1LoanCollateralDataList: (
      query: {
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * Defaults to user's vip level
         * @format int32
         * @example 1
         */
        vipLevel?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "0.65" */
            initialLTV: string;
            /** @example "0.75" */
            marginCallLTV: string;
            /** @example "0.83" */
            liquidationLTV: string;
            /** @example "1000000" */
            maxLimit: string;
            /**
             * @format int32
             * @example 1
             */
            vipLevel: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/collateral/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second. Weight(IP): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanRepayCollateralRateList
     * @summary Check Collateral Repay Rate (USER_DATA)
     * @request GET:/sapi/v1/loan/repay/collateral/rate
     * @secure
     */
    v1LoanRepayCollateralRateList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin: string;
        /**
         * repay amount of loanCoin
         * @format float
         */
        repayAmount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "BUSD" */
          collateralCoin: string;
          /** @example "1000" */
          repayAmount: string;
          /**
           * rate of collateral coin/loan coin
           * @example "300.36781234"
           */
          rate: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/repay/collateral/rate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Customize margin call for ongoing orders only. Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanCustomizeMarginCallCreate
     * @summary Crypto Loan Customize Margin Call (TRADE)
     * @request POST:/sapi/v1/loan/customize/margin_call
     * @secure
     */
    v1LoanCustomizeMarginCallCreate: (
      query: {
        /**
         * Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only.
         * @format int64
         */
        orderId?: number;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /** @format float */
        marginCall: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "100000001" */
            orderId: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "0.8" */
            preMarginCall: string;
            /** @example "0.7" */
            afterMarginCall: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            customizeTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/customize/margin_call`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleBorrowCreate
     * @summary Borrow - Flexible Loan Borrow (TRADE)
     * @request POST:/sapi/v1/loan/flexible/borrow
     * @secure
     */
    v1LoanFlexibleBorrowCreate: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Loan amount
         * @format float
         * @example 100.1
         */
        loanAmount?: number;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * @format float
         * @example 50.5
         */
        collateralAmount?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "100.5" */
          loanAmount: string;
          /** @example "BNB" */
          collateralCoin?: string;
          /** @example "50.5" */
          collateralAmount: string;
          /** @example "Succeeds" */
          status: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/borrow`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 300
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleOngoingOrdersList
     * @summary Borrow - Get Flexible Loan Ongoing Orders (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/ongoing/orders
     * @secure
     */
    v1LoanFlexibleOngoingOrdersList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            totalDebt: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "49.27565492" */
            collateralAmount: string;
            /** @example "0.57" */
            currentLTV: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/ongoing/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleBorrowHistoryList
     * @summary Borrow - Get Flexible Loan Borrow History (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/borrow/history
     * @secure
     */
    v1LoanFlexibleBorrowHistoryList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 1 */
          total: number;
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            initialLoanAmount: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "49.27565492" */
            initialCollateralAmount: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            borrowTime: number;
            /** @example "Succeeds" */
            status: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/borrow/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleRepayCreate
     * @summary Repay - Flexible Loan Repay (TRADE)
     * @request POST:/sapi/v1/loan/flexible/repay
     * @secure
     */
    v1LoanFlexibleRepayCreate: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * repay amount of loanCoin
         * @format float
         */
        repayAmount: number;
        /** @example true */
        collateralReturn?: boolean;
        /** @example true */
        fullRepayment?: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "BNB" */
          collateralCoin: string;
          /** @example "50.5" */
          remainingDebt: string;
          /** @example "50.5" */
          remainingCollateral: string;
          /** @example false */
          fullRepayment: boolean;
          /** @example "50.5" */
          currentLTV: string;
          /** @example "Repaid" */
          repayStatus: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/repay`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleRepayHistoryList
     * @summary Repay - Get Flexible Loan Repayment History (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/repay/history
     * @secure
     */
    v1LoanFlexibleRepayHistoryList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            loanCoin: string;
            /** @example "10000" */
            repayAmount: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "100" */
            collateralReturn: string;
            /** @example "Repaid" */
            repayStatus: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            repayTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/repay/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 6000
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleAdjustLtvCreate
     * @summary Adjust LTV - Flexible Loan Adjust LTV (TRADE)
     * @request POST:/sapi/v1/loan/flexible/adjust/ltv
     * @secure
     */
    v1LoanFlexibleAdjustLtvCreate: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /** @format float */
        adjustmentAmount: number;
        direction: "ADDITIONAL" | "REDUCED";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BUSD" */
          loanCoin: string;
          /** @example "BNB" */
          collateralCoin: string;
          /** @example "ADDITIONAL" */
          direction: string;
          /** @example "5.235" */
          adjustmentAmount: string;
          /** @example "0.235" */
          currentLTV: string;
          /** @example "Succeeds" */
          status: string;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/adjust/ltv`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleLtvAdjustmentHistoryList
     * @summary Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/ltv/adjustment/history
     * @secure
     */
    v1LoanFlexibleLtvAdjustmentHistoryList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default 500; max 1000.
         * @format int32
         * @example 5
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNB" */
            loanCoin: string;
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "ADDITIONAL" */
            direction: string;
            /** @example "5.75" */
            collateralAmount: string;
            /** @example "0.83" */
            preLTV: string;
            /** @example "0.5" */
            afterLTV: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            adjustTime: number;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/ltv/adjustment/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleLoanableDataList
     * @summary Get Flexible Loan Assets Data (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/loanable/data
     * @secure
     */
    v1LoanFlexibleLoanableDataList: (
      query: {
        /**
         * Coin loaned
         * @example "BUSD"
         */
        loanCoin?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNB" */
            loanCoin: string;
            /** @example "0.01" */
            flexibleInterestRate: string;
            /** @example "100" */
            flexibleMinLimit: string;
            /** @example "1000000" */
            flexibleMaxLimit: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/loanable/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value. Weight(IP): 400
     *
     * @tags Crypto Loans
     * @name V1LoanFlexibleCollateralDataList
     * @summary Get Flexible Loan Collateral Assets Data (USER_DATA)
     * @request GET:/sapi/v1/loan/flexible/collateral/data
     * @secure
     */
    v1LoanFlexibleCollateralDataList: (
      query: {
        /**
         * Coin used as collateral
         * @example "BNB"
         */
        collateralCoin?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNB" */
            collateralCoin: string;
            /** @example "0.01" */
            initialLTV: string;
            /** @example "0.7" */
            marginCallLTV: string;
            /** @example "0.8" */
            liquidationLTV: string;
            /** @example "1000000" */
            maxLimit: string;
          }[];
          /**
           * @format int32
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/loan/flexible/collateral/data`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - If startTime and endTime are not sent, the recent 90 days' data will be returned. - The max interval between startTime and endTime is 90 days. - Support for querying orders within the last 18 months. Weight(UID): 3000
     *
     * @tags Pay
     * @name V1PayTransactionsList
     * @summary Get Pay Trade History (USER_DATA)
     * @request GET:/sapi/v1/pay/transactions
     * @secure
     */
    v1PayTransactionsList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * default 100, max 100
         * @format int32
         * @example 100
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /**
             * Enum：PAY(C2B Merchant Acquiring Payment), PAY_REFUND(C2B Merchant Acquiring Payment,refund), C2C(C2C Transfer Payment),CRYPTO_BOX(Crypto box), CRYPTO_BOX_RF(Crypto Box, refund), C2C_HOLDING(Transfer to new Binance user), C2C_HOLDING_RF(Transfer to new Binance user,refund), PAYOUT(B2C Disbursement Payment)
             * @example "C2C"
             */
            orderType: string;
            /** @example "M_P_71505104267788288" */
            transactionId: string;
            /**
             * @format int64
             * @example 1610090460133
             */
            transactionTime: number;
            /**
             * order amount(up to 8 decimal places), positive is income, negative is expenditure
             * @example "23.72469206"
             */
            amount: string;
            /** @example "BNB" */
            currency: string;
            /** @example 1 */
            walletType: number;
            walletTypes: number[];
            fundsDetail: {
              currency: string;
              amount: string;
            }[];
            payerInfo: {
              /** @example "Jack" */
              name: string;
              /** @example "USER" */
              type: string;
              /** @example "12345678" */
              binanceId: string;
              /** @example "67736251" */
              accountId: string;
            };
            receiverInfo: {
              /** @example "Alan" */
              name: string;
              /** @example "MERCHANT" */
              type: string;
              /** @example "alan@test.com" */
              email: string;
              /** @example "34355667" */
              binanceId: string;
              /** @example "21326891" */
              accountId: string;
              /** @example "1" */
              countryCode: string;
              /** @example "8057651210" */
              phoneNumber: string;
              /** @example "US" */
              mobileCode: string;
              extend?: {
                institutionName: string;
                cardNumber: string;
                digitalWalletId: string;
              }[];
            };
          }[];
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/pay/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query for all convertible token pairs and the tokens’ respective upper/lower limits Weight(IP): 3000
     *
     * @tags Convert
     * @name V1ConvertExchangeInfoList
     * @summary List All Convert Pairs
     * @request GET:/sapi/v1/convert/exchangeInfo
     */
    v1ConvertExchangeInfoList: (
      query?: {
        /**
         * User spends coin
         * @example "BTC"
         */
        fromAsset?: string;
        /**
         * User receives coin
         * @example "USDT"
         */
        toAsset?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          fromAsset: string;
          /** @example "USDT" */
          toAsset: string;
          /** @example "0.0004" */
          fromAssetMinAmount: string;
          /** @example "50" */
          fromAssetMaxAmount: string;
          /** @example "20" */
          toAssetMinAmount: string;
          /** @example "2500000" */
          toAssetMaxAmount: string;
        }[],
        Error
      >({
        path: `/sapi/v1/convert/exchangeInfo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Query for supported asset precision information Weight(IP): 100
     *
     * @tags Convert
     * @name V1ConvertAssetInfoList
     * @summary Query order quantity precision per asset (USER_DATA)
     * @request GET:/sapi/v1/convert/assetInfo
     * @secure
     */
    v1ConvertAssetInfoList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          asset: string;
          /**
           * @format int32
           * @example 8
           */
          fraction: number;
        }[],
        Error
      >({
        path: `/sapi/v1/convert/assetInfo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Request a quote for the requested token pairs Weight(UID): 200
     *
     * @tags Convert
     * @name V1ConvertGetQuoteCreate
     * @summary Send quote request (USER_DATA)
     * @request POST:/sapi/v1/convert/getQuote
     * @secure
     */
    v1ConvertGetQuoteCreate: (
      query: {
        /** @example "BTC" */
        fromAsset: string;
        /** @example "USDT" */
        toAsset: string;
        /**
         * When specified, it is the amount you will be debited after the conversion
         * @format float
         * @example 1
         */
        fromAmount?: number;
        /**
         * When specified, it is the amount you will be debited after the conversion
         * @format float
         * @example 1
         */
        toAmount?: number;
        /**
         * 10s, 30s, 1m, 2m, default 10s
         * @example "10s"
         */
        validTime?: string;
        /**
         * SPOT or FUNDING. Default is SPOT
         * @example "SPOT"
         */
        walletType?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "12415572564" */
          quoteId: string;
          /** @example "38163.7" */
          ratio: string;
          /** @example "0.0000262" */
          inverseRatio: string;
          /**
           * @format int64
           * @example 1623319461670
           */
          validTimestamp: number;
          /** @example "3816.37" */
          toAmount: string;
          /** @example "0.1" */
          fromAmount: string;
        },
        Error
      >({
        path: `/sapi/v1/convert/getQuote`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Accept the offered quote by quote ID. Weight(UID): 500
     *
     * @tags Convert
     * @name V1ConvertAcceptQuoteCreate
     * @summary Accept Quote (TRADE)
     * @request POST:/sapi/v1/convert/acceptQuote
     * @secure
     */
    v1ConvertAcceptQuoteCreate: (
      query: {
        /** @example 1000 */
        quoteId: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "933256278426274426" */
          orderId: string;
          /**
           * @format int64
           * @example 1623381330472
           */
          createTime: number;
          /** @example "PROCESS" */
          orderStatus: string;
        },
        Error
      >({
        path: `/sapi/v1/convert/acceptQuote`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query order status by order ID. Weight(UID): 100
     *
     * @tags Convert
     * @name V1ConvertOrderStatusList
     * @summary Order status (USER_DATA)
     * @request GET:/sapi/v1/convert/orderStatus
     * @secure
     */
    v1ConvertOrderStatusList: (
      query: {
        /** @example 1000 */
        orderId?: string;
        /** @example 1000 */
        quoteId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 933256278426274400
           */
          orderId: number;
          /** @example "SUCCESS" */
          orderStatus: string;
          /** @example "BTC" */
          fromAsset: string;
          /** @example "0.00054414" */
          fromAmount: string;
          /** @example "USDT" */
          toAsset: string;
          /** @example "20" */
          toAmount: string;
          /** @example "36755" */
          ratio: string;
          /** @example "0.00002721" */
          inverseRatio: string;
          /**
           * @format int64
           * @example 1623381330472
           */
          createTime: number;
        },
        Error
      >({
        path: `/sapi/v1/convert/orderStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The max interval between startTime and endTime is 30 days. Weight(UID): 3000
     *
     * @tags Convert
     * @name V1ConvertTradeFlowList
     * @summary Get Convert Trade History (USER_DATA)
     * @request GET:/sapi/v1/convert/tradeFlow
     * @secure
     */
    v1ConvertTradeFlowList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         * @example 1624248872184
         */
        startTime: number;
        /**
         * UTC timestamp in ms
         * @format int64
         * @example 1624248872185
         */
        endTime: number;
        /**
         * default 100, max 1000
         * @format int32
         * @example 100
         */
        limit?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list: {
            /** @example "f3b91c525b2644c7bc1e1cd31b6e1aa6" */
            quoteId: string;
            /**
             * @format int64
             * @example 940708407462087200
             */
            orderId: number;
            /** @example "SUCCESS" */
            orderStatus: string;
            /** @example "USDT" */
            fromAsset: string;
            /** @example "20" */
            fromAmount: string;
            /** @example "BNB" */
            toAsset: string;
            /** @example "0.06154036" */
            toAmount: string;
            /**
             * price ratio
             * @example "0.00307702"
             */
            ratio: string;
            /**
             * inverse price
             * @example "324.99"
             */
            inverseRatio: string;
            /**
             * @format int64
             * @example 1624248872184
             */
            createTime: number;
          }[];
          /**
           * @format int64
           * @example 1623824139000
           */
          startTime: number;
          /**
           * @format int64
           * @example 1626416139000
           */
          endTime: number;
          /**
           * @format int32
           * @example 100
           */
          limit: number;
          /** @example false */
          moreData: boolean;
        },
        Error
      >({
        path: `/sapi/v1/convert/tradeFlow`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020 Weight(UID): 3000
     *
     * @tags Rebate
     * @name V1RebateTaxQueryList
     * @summary Get Spot Rebate History Records (USER_DATA)
     * @request GET:/sapi/v1/rebate/taxQuery
     * @secure
     */
    v1RebateTaxQueryList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "OK" */
          status: string;
          /** @example "GENERAL" */
          type: string;
          /** @example "000000000" */
          code: string;
          data: {
            /**
             * @format int32
             * @example 1
             */
            page: number;
            /**
             * @format int32
             * @example 2
             */
            totalRecords: number;
            /**
             * @format int32
             * @example 1
             */
            totalPageNum: number;
            data: {
              /** @example "USDT" */
              asset: string;
              /**
               * rebate type：1 is commission rebate，2 is referral kickback
               * @format int32
               * @example 1
               */
              type: number;
              /** @example "0.0001126" */
              amount: string;
              /**
               * @format int64
               * @example 1637651320000
               */
              updateTime: number;
            }[];
          };
        },
        Error
      >({
        path: `/sapi/v1/rebate/taxQuery`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
     *
     * @tags NFT
     * @name V1NftHistoryTransactionsList
     * @summary Get NFT Transaction History (USER_DATA)
     * @request GET:/sapi/v1/nft/history/transactions
     * @secure
     */
    v1NftHistoryTransactionsList: (
      query: {
        /**
         * 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
         * @format int32
         * @example 1
         */
        orderType: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 50, Max 50
         * @format int32
         * @example 50
         */
        limit?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          list: {
            /**
             * 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
             * @example "1_470502070600699904"
             */
            orderNo: string;
            tokens: {
              /** @example "BSC" */
              network: string;
              /** @example "216000000496" */
              tokenId: string;
              /** @example "MYSTERY_BOX0000087" */
              contractAddress: string;
            }[];
            /**
             * @format int64
             * @example 1626941236000
             */
            tradeTime: number;
            /** @example "19.60000000" */
            tradeAmount: string;
            /** @example "BNB" */
            tradeCurrency: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/nft/history/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
     *
     * @tags NFT
     * @name V1NftHistoryDepositList
     * @summary Get NFT Deposit History(USER_DATA)
     * @request GET:/sapi/v1/nft/history/deposit
     * @secure
     */
    v1NftHistoryDepositList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 50, Max 50
         * @format int32
         * @example 50
         */
        limit?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 1
           */
          total: number;
          list: {
            /** @example "ETH" */
            network: string;
            /** @example null */
            txID: number | null;
            /** @example "0xe507c961ee127d4439977a61af39c34eafee0dc6" */
            contractAdrress: string;
            /** @example "10014" */
            tokenId: string;
            /**
             * @format int64
             * @example 1629986047000
             */
            timestamp: number;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/nft/history/deposit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
     *
     * @tags NFT
     * @name V1NftHistoryWithdrawList
     * @summary Get NFT Withdraw History (USER_DATA)
     * @request GET:/sapi/v1/nft/history/withdraw
     * @secure
     */
    v1NftHistoryWithdrawList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default 50, Max 50
         * @format int32
         * @example 50
         */
        limit?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 178
           */
          total: number;
          list: {
            /** @example "ETH" */
            network: string;
            /** @example "0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f" */
            txID: string;
            /** @example "0xe507c961ee127d4439977a61af39c34eafee0dc6" */
            contractAdrress: string;
            /** @example "1000001247" */
            tokenId: string;
            /**
             * @format int64
             * @example 1633674433000
             */
            timestamp: number;
            /** @example 0.1 */
            fee: number;
            /** @example "ETH" */
            feeAsset: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/nft/history/withdraw`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(UID): 3000
     *
     * @tags NFT
     * @name V1NftUserGetAssetList
     * @summary Get NFT Asset (USER_DATA)
     * @request GET:/sapi/v1/nft/user/getAsset
     * @secure
     */
    v1NftUserGetAssetList: (
      query: {
        /**
         * Default 50, Max 50
         * @format int32
         * @example 50
         */
        limit?: number;
        /**
         * Default 1
         * @format int32
         * @example 1
         */
        page?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int32
           * @example 347
           */
          total: number;
          list: {
            /** @example "BSC" */
            network: string;
            /** @example "REGULAR11234567891779" */
            contractAddress: string;
            /** @example "100900000017" */
            tokenId: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/nft/user/getAsset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is for creating a Binance Code. To get started with, please make sure: - You have a Binance account - You have passed kyc - You have a sufficient balance in your Binance funding wallet - You need Enable Withdrawals for the API Key which requests this endpoint. Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardCreateCodeCreate
     * @summary Create a Binance Code (USER_DATA)
     * @request POST:/sapi/v1/giftcard/createCode
     * @secure
     */
    v1GiftcardCreateCodeCreate: (
      query: {
        /** The coin type contained in the Binance Code */
        token: string;
        /**
         * The amount of the coin
         * @format double
         */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "0033002327977405" */
            referenceNo: string;
            /** @example "AOGANK3NB4GIT3C6" */
            code: string;
          };
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/createCode`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet. Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day. Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardRedeemCodeCreate
     * @summary Redeem a Binance Code (USER_DATA)
     * @request POST:/sapi/v1/giftcard/redeemCode
     * @secure
     */
    v1GiftcardRedeemCodeCreate: (
      query: {
        /** Binance Code */
        code: string;
        /** Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance codes on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters). */
        externalUid?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "BNB" */
            token: string;
            /** @example "10" */
            amount: string;
            /** @example "0033002327977405" */
            referenceNo: string;
            /** @example "10316281761814589440" */
            identityNo: string;
          };
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/redeemCode`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number. Please note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour. Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardVerifyList
     * @summary Verify a Binance Code (USER_DATA)
     * @request GET:/sapi/v1/giftcard/verify
     * @secure
     */
    v1GiftcardVerifyList: (
      query: {
        /** reference number */
        referenceNo: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            valid: boolean;
            /** @example "BNB" */
            token: string;
            /** @example "0.00000001" */
            amount: string;
          };
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/verify`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is for fetching the RSA Public Key. This RSA Public key will be used to encrypt the card code. Please note that the RSA Public key fetched is valid only for the current day. Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardCryptographyRsaPublicKeyList
     * @summary Fetch RSA Public Key (USER_DATA)
     * @request GET:/sapi/v1/giftcard/cryptography/rsa-public-key
     * @secure
     */
    v1GiftcardCryptographyRsaPublicKeyList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          /** @example "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXBBVKLAc1GQ5FsIFFqOHrPTox5noBONIKr+IAedTR9FkVxq6e65updEbfdhRNkMOeYIO2i0UylrjGC0X8YSoIszmrVHeV0l06Zh1oJuZos1+7N+WLuz9JvlPaawof3GUakTxYWWCa9+8KIbLKsoKMdfS96VT+8iOXO3quMGKUmQIDAQAB" */
          data: string;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/cryptography/rsa-public-key`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token you’re paying and the redeemable token are the same, please use the Create Binance Code endpoint. You can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken. Once successfully purchased, the amount of baseToken would be deducted from your funding wallet. To get started with, please make sure: - You have a Binance account - You have passed kyc - You have a sufficient balance in your Binance funding wallet - You need Enable Withdrawals for the API Key which requests this endpoint. Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardBuyCodeCreate
     * @summary Buy a Binance Code (TRADE)
     * @request POST:/sapi/v1/giftcard/buyCode
     * @secure
     */
    v1GiftcardBuyCodeCreate: (
      query: {
        /** The token you want to pay, example BUSD */
        baseToken: string;
        /** The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode endpoint. */
        faceToken: string;
        /**
         * The base token asset quantity, example  1.002
         * @format double
         */
        baseTokenAmount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "0033002327977405" */
            referenceNo: string;
            /** @example "AOGANK3NB4GIT3C6" */
            code: string;
          };
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/buyCode`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation. Weight(IP): 1
     *
     * @tags Gift Card
     * @name V1GiftcardBuyCodeTokenLimitList
     * @summary Fetch Token Limit (USER_DATA)
     * @request GET:/sapi/v1/giftcard/buyCode/token-limit
     * @secure
     */
    v1GiftcardBuyCodeTokenLimitList: (
      query: {
        /** The token you want to pay, example BUSD */
        baseToken: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "000000" */
          code: string;
          /** @example "success" */
          message: string;
          data: {
            /** @example "BNB" */
            coin?: string;
            /** @example "0.01" */
            fromMin?: string;
            /** @example "1" */
            fromMax?: string;
          };
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/giftcard/buyCode/token-limit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestTargetAssetListList
     * @summary Get target asset list (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/target-asset/list
     * @secure
     */
    v1LendingAutoInvestTargetAssetListList: (
      query: {
        targetAsset?: string;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "BTC" */
          targetAssets?: string;
          autoInvestAssetList?: {
            /** @example "BTC" */
            targetAsset: string;
            roiAndDimensionTypeList: {
              /** @example "5.004" */
              simulateRoi: string;
              /** @example "3" */
              dimensionValue: string;
              /** @example "year" */
              dimensionUnit: string;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/target-asset/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ROI return list for target asset Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestTargetAssetRoiListList
     * @summary Get target asset ROI data (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/target-asset/roi/list
     * @secure
     */
    v1LendingAutoInvestTargetAssetRoiListList: (
      query: {
        /** @example "BTC" */
        targetAsset: string;
        /** @example "FIVE_YEAR" */
        hisRoiType: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1648378800000" */
          date: string;
          /** @example "1.75" */
          simulateRoi: string;
        }[],
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/target-asset/roi/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query all source assets and target assets Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestAllAssetList
     * @summary Query all source asset and target asset (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/all/asset
     * @secure
     */
    v1LendingAutoInvestAllAssetList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          targetAssets: string[];
          sourceAssets: string[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/all/asset`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Source Asset to be used for investment Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestSourceAssetListList
     * @summary Query source asset list (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/source-asset/list
     * @secure
     */
    v1LendingAutoInvestSourceAssetListList: (
      query: {
        /** @example "BTC" */
        targetAsset?: string;
        /**
         * @format int64
         * @example 1
         */
        indexId?: number;
        /** @example "RECURRING" */
        usageType: string;
        /** @example true */
        flexibleAllowedToUse?: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.002" */
          feeRate: string;
          sourceAssets: {
            /** @example "USDT" */
            sourceAsset: string;
            /** @example "0.1" */
            assetMinAmount: string;
            /** @example "1000000" */
            assetMaxAmount: string;
            /** @example "2" */
            scale: string;
            /** @example "1111" */
            flexibleAmount: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/source-asset/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post an investment plan creation Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestPlanAddCreate
     * @summary Investment plan creation (USER_DATA)
     * @request POST:/sapi/v1/lending/auto-invest/plan/add
     * @secure
     */
    v1LendingAutoInvestPlanAddCreate: (
      query: {
        /** @example "MAIN_SITE" */
        sourceType: "MAIN_SITE" | "TR";
        requestId?: string;
        /** @example "SINGLE" */
        planType: "SINGLE" | "PORTFOLIO" | "INDEX";
        /** @format int64 */
        IndexId?: number;
        /** @format float */
        subscriptionAmount: number;
        subscriptionCycle: "H1" | "H4" | "H8" | "H12" | "WEEKLY" | "DAILY" | "MONTHLY" | "BI_WEEKLY";
        subscriptionStartDay?: number;
        subscriptionStartWeekday?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
        subscriptionStartTime: number;
        /** @example "USDT" */
        sourceAsset: string;
        /** @example true */
        flexibleAllowedToUse?: boolean;
        details: {
          /** @example "BTC" */
          targetAsset?: string;
          /** @format int64 */
          percentage?: number;
        }[];
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 12345 */
          planId: number;
          /**
           * @format int64
           * @example 1648378800000
           */
          nextExecutionDateTime: number;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/plan/add`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query Source Asset to be used for investment Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestPlanEditCreate
     * @summary Investment plan adjustment
     * @request POST:/sapi/v1/lending/auto-invest/plan/edit
     * @secure
     */
    v1LendingAutoInvestPlanEditCreate: (
      query: {
        planId: number;
        /** @format float */
        subscriptionAmount: number;
        subscriptionCycle: "H1" | "H4" | "H8" | "H12" | "WEEKLY" | "DAILY" | "MONTHLY" | "BI_WEEKLY";
        subscriptionStartDay?: number;
        subscriptionStartWeekday?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
        subscriptionStartTime: number;
        /** @example "USDT" */
        sourceAsset: string;
        /** @example true */
        flexibleAllowedToUse?: boolean;
        details?: {
          /** @example "BTC" */
          targetAsset?: string;
          /** @format int64 */
          percentage?: number;
        }[];
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 12345 */
          planId: number;
          /**
           * @format int64
           * @example 1648378800000
           */
          nextExecutionDateTime: number;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/plan/edit`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Change Plan Status Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestPlanEditStatusCreate
     * @summary Change Plan Status
     * @request POST:/sapi/v1/lending/auto-invest/plan/edit-status
     * @secure
     */
    v1LendingAutoInvestPlanEditStatusCreate: (
      query: {
        planId: number;
        status: "ONGOING" | "PAUSED" | "REMOVED";
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 12345 */
          planId: number;
          /**
           * @format int64
           * @example 1648378800000
           */
          nextExecutionDateTime: number;
          /** @example "ONGOING" */
          status: string;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/plan/edit-status`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query plan lists Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestPlanListList
     * @summary Get list of plans
     * @request GET:/sapi/v1/lending/auto-invest/plan/list
     * @secure
     */
    v1LendingAutoInvestPlanListList: (
      query: {
        planType: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123" */
          planValueInUSD: string;
          /** @example "0.1" */
          planValueInBTC: string;
          /** @example "120" */
          pnlInUSD: string;
          /** @example "2.3" */
          roi: string;
          plan: {
            /** @example 12345 */
            planId: number;
            /** @example "SINGLE" */
            planType: string;
            /** @example "true" */
            editAllowed: string;
            /**
             * @format int64
             * @example 1648378800000
             */
            creationDateTime: number;
            /**
             * @format int64
             * @example 1648378800000
             */
            firstExecutionDateTime: number;
            /**
             * @format int64
             * @example 1648378800000
             */
            nextExecutionDateTime: number;
            /** @example "ONGOING" */
            status: string;
            /**
             * @format int64
             * @example 1648378800000
             */
            lastUpdatedDateTime: number;
            /** @example "BTC" */
            targetAsset: string;
            /** @example "0.111" */
            totalTargetAmount: string;
            /** @example "BUSD" */
            sourceAsset: string;
            /** @example "4.555" */
            totalInvestedInUSD: string;
            /** @example "0.1" */
            subscriptionAmount: string;
            /** @example "WEEKLY" */
            subscriptionCycle: string;
            /** @example "1" */
            subscriptionStartDay: string;
            /** @example "MON" */
            subscriptionStartWeekday: string;
            /** @example "1" */
            subscriptionStartTime: string;
            /** @example "SPOT_WALLET" */
            sourceWallet: string;
            /** @example "false" */
            flexibleAllowedToUse: string;
            /** @example "101.2" */
            planValueInUSD: string;
            /** @example "101.2" */
            pnlInUSD: string;
            /** @example "1.02" */
            roi: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/plan/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query holding details of the plan Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestPlanIdList
     * @summary Query holding details of the plan
     * @request GET:/sapi/v1/lending/auto-invest/plan/id
     * @secure
     */
    v1LendingAutoInvestPlanIdList: (
      query: {
        /** @format int64 */
        planId?: number;
        requestId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "123" */
          planValueInUSD?: string;
          /** @example "0.1" */
          planValueInBTC?: string;
          /** @example "120" */
          pnlInUSD?: string;
          /** @example "2.3" */
          roi?: string;
          plan?: {
            /** @example 12345 */
            planId: number;
            /** @example "SINGLE" */
            planType: string;
            /** @example "true" */
            editAllowed: string;
            /** @example "false" */
            flexibleAllowedToUse: string;
            /**
             * @format int64
             * @example 1648378800000
             */
            creationDateTime: number;
            /**
             * @format int64
             * @example 1648378800000
             */
            firstExecutionDateTime: number;
            /**
             * @format int64
             * @example 1648378800000
             */
            nextExecutionDateTime: number;
            /** @example "ONGOING" */
            status: string;
            /** @example "BTC" */
            targetAsset: string;
            /** @example "BUSD" */
            sourceAsset: string;
            /** @example "4.555" */
            totalInvestedInUSD: string;
            /** @example "101.2" */
            planValueInUSD: string;
            /** @example "101.2" */
            pnlInUSD: string;
            /** @example "1.02" */
            roi: string;
            details: {
              /** @example "ADA" */
              targetAsset: string;
              /** @example "3.4" */
              averagePriceInUSD: string;
              /** @example "222.21" */
              totalInvestedInUSD: string;
              /** @example "122.12345678" */
              purchasedAmount: string;
              /** @example "ADA" */
              purchasedAmountUnit: string;
              /** @example "109.2" */
              pnlInUSD: string;
              /** @example "0.1" */
              roi: string;
              /** @example "50" */
              percentage: string;
              /** @example "ACTIVE" */
              assetStatus: string;
              /** @example "122.12345678" */
              availableAmount: string;
              /** @example "ADA" */
              availableAmountUnit: string;
              /** @example "122.12345678" */
              redeemedAmout: string;
              /** @example "ADA" */
              redeemedAmoutUnit: string;
              /** @example "101.2" */
              assetValueInUSD: string;
            }[];
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/plan/id`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query subscription transaction history of a plan Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestHistoryListList
     * @summary Query subscription transaction history
     * @request GET:/sapi/v1/lending/auto-invest/history/list
     * @secure
     */
    v1LendingAutoInvestHistoryListList: (
      query: {
        /** @format int64 */
        planId?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** @format int64 */
        targetAsset?: number;
        planType?: "SINGLE" | "PORTFOLIO" | "INDEX" | "ALL";
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12345
           */
          id: number;
          /** @example "BTC" */
          targetAsset: string;
          /** @example "SINGLE" */
          planType: string;
          /** @example "BTC" */
          planName: string;
          /**
           * @format int64
           * @example 1234
           */
          planId: number;
          /**
           * @format int64
           * @example 1648378800000
           */
          transactionDateTime: number;
          /** @example "SUCCESS" */
          transactionStatus: string;
          /** @example "INSUFFICIENT_BALANCE" */
          failedType: string;
          /** @example "BUSD" */
          sourceAsset: string;
          /** @example "297.12345" */
          sourceAssetAmount: string;
          /** @example "297.12345" */
          targetAssetAmount: string;
          /** @example "SPOT_WALLET" */
          sourceWallet: string;
          /** @example "false" */
          flexibleUsed: string;
          /** @example "0.002" */
          transactionFee: string;
          /** @example "BUSD" */
          transactionFeeUnit: string;
          /** @example "2342" */
          executionPrice: string;
          /** @example "RECURRING" */
          executionType: string;
          /** @example "WEEKLY" */
          subscriptionCycle: string;
        }[],
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/history/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Query index details Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestIndexInfoList
     * @summary Query Index Details(USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/index/info
     * @secure
     */
    v1LendingAutoInvestIndexInfoList: (
      query: {
        /** @format int64 */
        indexId: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          indexId: number;
          /** @example "BINANCE TOP 10 EW" */
          indexName: string;
          /** @example "RUNNING" */
          status: string;
          assetAllocation: {
            /** @example "ADA" */
            targetAsset: string;
            /** @example "10" */
            allocation: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/index/info`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Details on users Index-Linked plan position details Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestIndexUserSummaryList
     * @summary Query Index Linked Plan Position Details(USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/index/user-summary
     * @secure
     */
    v1LendingAutoInvestIndexUserSummaryList: (
      query: {
        /** @format int64 */
        indexId: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          indexId: number;
          /** @example "114.555" */
          totalInvestedInUSD: string;
          /**
           * current invest
           * @example "101.2"
           */
          currentInvestedInUSD: string;
          /**
           * PNL of the plan in USD based on current amount
           * @example "101.2"
           */
          pnlInUSD: string;
          /**
           * ROI of the plan based on current amount
           * @example "1.023"
           */
          roi: string;
          assetAllocation: {
            /**
             * for pie chart
             * @example "ADA"
             */
            targetAsset: string;
            /** @example "10" */
            allocation: string;
          }[];
          details: {
            /** @example "ADA" */
            targetAsset: string;
            /**
             * average price of the asset in USD
             * @example "3.4"
             */
            averagePriceInUSD: string;
            /**
             * total source asset invested for this target asset in equivilent of USD
             * @example "222.21"
             */
            totalInvestedInUSD: string;
            /**
             * current invest
             * @example "101.2"
             */
            currentInvestedInUSD: string;
            /**
             * purchased amount of target asset
             * @example "122.2"
             */
            purchasedAmount: string;
            /**
             * PNL denominated in USD
             * @example "109.2"
             */
            pnlInUSD: string;
            /**
             * ROI calculated in decimal
             * @example "0.2"
             */
            roi: string;
            /**
             * asset allocation in the plan. If it's single plan, then it's 100
             * @example "10"
             */
            percentage: string;
            /** @example "122.12345678" */
            availableAmount: string;
            /** @example "122" */
            redeemedAmount: string;
            /** @example "101" */
            assetValueInUSD: string;
          }[];
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/index/user-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description One time transaction Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestOneOffCreate
     * @summary One Time Transaction(TRADE)
     * @request POST:/sapi/v1/lending/auto-invest/one-off
     * @secure
     */
    v1LendingAutoInvestOneOffCreate: (
      query: {
        /** @example "MAIN_SITE" */
        sourceType: string;
        /** @example "TR12354859" */
        requestId?: string;
        /**
         * @format float
         * @example 10.1
         */
        subscriptionAmount: number;
        /** @example "USDT" */
        sourceAsset: string;
        /** @example true */
        flexibleAllowedToUse?: boolean;
        /**
         * @format int64
         * @example 12345
         */
        planId?: number;
        /**
         * @format int64
         * @example 1
         */
        indexId?: number;
        details?: {
          /** @example "BTC" */
          targetAsset?: string;
          /** @example 40 */
          percentage?: number;
        }[];
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12345
           */
          transactionId: number;
          /**
           * @format int32
           * @example 5
           */
          waitSecond: number;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/one-off`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Transaction status for one-time transaction Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestOneOffStatusList
     * @summary Query One-Time Transaction Status (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/one-off/status
     * @secure
     */
    v1LendingAutoInvestOneOffStatusList: (
      query: {
        /**
         * @format int64
         * @example 12345
         */
        transactionId: number;
        /** @example "TR12354859" */
        requestId?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12345
           */
          transactionId: number;
          /** @example "SUCCESS" */
          status: string;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/one-off/status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To redeem index-Linked plan holdings Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestRedeemCreate
     * @summary Index Linked Plan Redemption (TRADE)
     * @request POST:/sapi/v1/lending/auto-invest/redeem
     * @secure
     */
    v1LendingAutoInvestRedeemCreate: (
      query: {
        /**
         * PORTFOLIO plan's Id
         * @format int64
         * @example 123456
         */
        indexId: number;
        /**
         * sourceType + unique, transactionId and requestId cannot be empty at the same time
         * @example "TR12354859"
         */
        requestId?: string;
        /**
         * user redeem percentage,10/20/100.
         * @example 10
         */
        redemptionPercentage: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 12345
           */
          redemptionId: number;
        },
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/redeem`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the history of Index Linked Plan Redemption transactions Max 30 day difference between startTime and endTime If no startTime and endTime, default to show past 30 day records Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestRedeemHistoryList
     * @summary Index Linked Plan Redemption History (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/redeem/history
     * @secure
     */
    v1LendingAutoInvestRedeemHistoryList: (
      query: {
        /**
         * @format int64
         * @example 12345
         */
        requestId: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /** @example "BTC" */
        asset?: string;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          indexId: number;
          /** @example "BINANCE TOP 10 EW" */
          indexName: string;
          /**
           * @format int64
           * @example 11
           */
          redemptionId: number;
          /** @example "SUCCESS" */
          status: string;
          /** @example "BTC" */
          asset: string;
          /** @example "0.005" */
          amount: string;
          /**
           * @format int64
           * @example 1648378800000
           */
          redemptionDateTime: number;
          /** @example "0" */
          transactionFee: string;
          /** @example "USDT" */
          transactionFeeUnit: string;
        }[],
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/redeem/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the history of Index Linked Plan Redemption transactions Max 30 day difference between startTime and endTime If no startTime and endTime, default to show past 30 day records Weight(IP): 1
     *
     * @tags Auto-Invest
     * @name V1LendingAutoInvestRebalanceHistoryList
     * @summary Index Linked Plan Rebalance Details (USER_DATA)
     * @request GET:/sapi/v1/lending/auto-invest/rebalance/history
     * @secure
     */
    v1LendingAutoInvestRebalanceHistoryList: (
      query: {
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 1
           */
          indexId: number;
          /** @example "BINANCE TOP 10 EW" */
          indexName: string;
          /**
           * @format int64
           * @example 11
           */
          rebalanceId: number;
          /** @example "SUCCESS" */
          status: string;
          /** @example "10" */
          rebalanceFee: string;
          /** @example "USDT" */
          rebalanceFeeUnit: string;
          transactionDetails: {
            /** @example "BTC" */
            asset: string;
            /**
             * @format int64
             * @example 1648378800000
             */
            transactionDateTime: number;
            /** @example "BUY" */
            rebalanceDirection: string;
            /** @example "0.005" */
            rebalanceAmount: string;
          }[];
        }[],
        Error
      >({
        path: `/sapi/v1/lending/auto-invest/rebalance/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get available Simple Earn flexible product list Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleListList
     * @summary Get Simple Earn Flexible Product List (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/list
     * @secure
     */
    v1SimpleEarnFlexibleListList: (
      query: {
        /** @example "BTC" */
        asset?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BTC" */
            asset: string;
            /** @example "0.05000000" */
            latestAnnualPercentageRate: string;
            tierAnnualPercentageRate: {
              /**
               * @format double
               * @example 0.05
               */
              "0-5BTC": number;
              /**
               * @format double
               * @example 0.03
               */
              "5-10BTC": number;
            };
            /** @example "0.05000000" */
            airDropPercentageRate: string;
            /** @example true */
            canPurchase: boolean;
            /** @example true */
            canRedeem: boolean;
            /** @example true */
            isSoldOut: boolean;
            /** @example true */
            hot: boolean;
            /** @example "0.01000000" */
            minPurchaseAmount: string;
            /** @example "BTC001" */
            productId: string;
            /** @example "1646182276000" */
            subscriptionStartTime: string;
            /** @example "PURCHASING" */
            status: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedListList
     * @summary Get Simple Earn Locked Product List (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/list
     * @secure
     */
    v1SimpleEarnLockedListList: (
      query: {
        /** @example "BNB" */
        asset?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BNB" */
            projectId: string;
            detail: {
              /** @example "AXS" */
              asset: string;
              /** @example "AXS" */
              rewardAsset: string;
              /**
               * @format int64
               * @example 90
               */
              duration: number;
              /** @example true */
              renewable: boolean;
              /** @example true */
              isSoldOut: boolean;
              /** @example "1.2069" */
              apr: string;
              /** @example "CREATED" */
              status: string;
              /** @example "1646182276000" */
              subscriptionStartTime: string;
              /** @example "BNB" */
              extraRewardAsset: string;
              /** @example "0.23" */
              extraRewardAPR: string;
            };
            quota: {
              /** @example "2" */
              totalPersonalQuota: string;
              /** @example "0.001" */
              minimum: string;
            };
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1 Rate Limit: 1/3s per account
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleSubscribeCreate
     * @summary Subscribe Flexible Product (TRADE)
     * @request POST:/sapi/v1/simple-earn/flexible/subscribe
     * @secure
     */
    v1SimpleEarnFlexibleSubscribeCreate: (
      query: {
        productId: string;
        /** @format double */
        amount: number;
        /** true or false, default true. */
        autoSubscribe?: boolean;
        /** SPOT,FUND,ALL, default SPOT */
        sourceAccount?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 40607
           */
          purchaseId: number;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/subscribe`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1 Rate Limit: 1/3s per account
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedSubscribeCreate
     * @summary Subscribe Locked Product (TRADE)
     * @request POST:/sapi/v1/simple-earn/locked/subscribe
     * @secure
     */
    v1SimpleEarnLockedSubscribeCreate: (
      query: {
        projectId: string;
        /** @format double */
        amount: number;
        /** true or false, default true. */
        autoSubscribe?: boolean;
        /** SPOT,FUND,ALL, default SPOT */
        sourceAccount?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 40607
           */
          purchaseId: number;
          /** @example "12345" */
          positionId: string;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/subscribe`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1 Rate Limit: 1/3s per account
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleRedeemCreate
     * @summary Redeem Flexible Product (TRADE)
     * @request POST:/sapi/v1/simple-earn/flexible/redeem
     * @secure
     */
    v1SimpleEarnFlexibleRedeemCreate: (
      query: {
        productId: string;
        /** true or false, default to false */
        redeemAll?: boolean;
        /**
         * if redeemAll is false, amount is mandatory
         * @format double
         */
        amount?: number;
        /** SPOT,FUND,ALL, default SPOT */
        destAccount?: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 40607
           */
          redeemId: number;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/redeem`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 1 Rate Limit: 1/3s per account
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedRedeemCreate
     * @summary Redeem Locked Product (TRADE)
     * @request POST:/sapi/v1/simple-earn/locked/redeem
     * @secure
     */
    v1SimpleEarnLockedRedeemCreate: (
      query: {
        /** 1234 */
        positionId: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format int64
           * @example 40607
           */
          redeemId: number;
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/redeem`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexiblePositionList
     * @summary Get Flexible Product Position (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/position
     * @secure
     */
    v1SimpleEarnFlexiblePositionList: (
      query: {
        asset?: string;
        productId?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "75.46000000" */
            totalAmount: string;
            tierAnnualPercentageRate: {
              /**
               * @format double
               * @example 0.05
               */
              "0-5BTC": number;
              /**
               * @format double
               * @example 0.03
               */
              "5-10BTC": number;
            };
            /** @example "0.02599895" */
            latestAnnualPercentageRate: string;
            /** @example "0.02599895" */
            yesterdayAirdropPercentageRate: string;
            /** @example "USDT" */
            asset: string;
            /** @example "BETH" */
            airDropAsset: string;
            /** @example true */
            canRedeem: boolean;
            /** @example "232.23123213" */
            collateralAmount: string;
            /** @example "USDT001" */
            productId: string;
            /** @example "0.10293829" */
            yesterdayRealTimeRewards: string;
            /** @example "0.22759183" */
            cumulativeBonusRewards: string;
            /** @example "0.22759183" */
            cumulativeRealTimeRewards: string;
            /** @example "0.45459183" */
            cumulativeTotalRewards: string;
            /** @example true */
            autoSubscribe: boolean;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/position`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedPositionList
     * @summary Get Locked Product Position (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/position
     * @secure
     */
    v1SimpleEarnLockedPositionList: (
      query: {
        asset?: string;
        positionId?: string;
        projectId?: string;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "123123" */
            positionId: string;
            /** @example "Axs*90" */
            projectId: string;
            /** @example "AXS" */
            asset: string;
            /** @example "122.09202928" */
            amount: string;
            /** @example "1646182276000" */
            purchaseTime: string;
            /** @example "60" */
            duration: string;
            /** @example "4" */
            accrualDays: string;
            /** @example "AXS" */
            rewardAsset: string;
            /** @example "0.23" */
            APY: string;
            /** @example true */
            isRenewable: boolean;
            /** @example true */
            isAutoRenew: boolean;
            /** @example "1732182276000" */
            redeemDate: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/position`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnAccountList
     * @summary Simple Account (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/account
     * @secure
     */
    v1SimpleEarnAccountList: (
      query: {
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "0.01067982" */
          totalAmountInBTC: string;
          /** @example "77.13289230" */
          totalAmountInUSDT: string;
          /** @example "0.00000000" */
          totalFlexibleAmountInBTC: string;
          /** @example "0.00000000" */
          totalFlexibleAmountInUSDT: string;
          /** @example "0.01067982" */
          totalLockedInBTC: string;
          /** @example "77.13289230" */
          totalLockedInUSDT: string;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleHistorySubscriptionRecordList
     * @summary Get Flexible Subscription Record (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/history/subscriptionRecord
     * @secure
     */
    v1SimpleEarnFlexibleHistorySubscriptionRecordList: (
      query: {
        productId?: string;
        purchaseId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "100.00000000" */
            amount: string;
            /** @example "USDT" */
            asset: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            time: number;
            /**
             * @format int64
             * @example 26055
             */
            purchaseId: number;
            /**
             * AUTO for auto subscribe, NORMAL for normal subscription, CONVERT for Locked to Flexible, LOAN for flexible loan collateral, AI for Auto Invest subscribe, TRANSFER for Locked Savings to Flexible
             * @example "AUTO"
             */
            type: string;
            /**
             * SPOT, FUNDING, SPOTANDFUNDING
             * @example "SPOT"
             */
            sourceAccount: string;
            /**
             * Display if sourceAccount is SPOTANDFUNDING
             * @example "30"
             */
            amtFromSpot: string;
            /**
             * Display if sourceAccount is SPOTANDFUNDING
             * @example "70"
             */
            amtFromFunding: string;
            /**
             * PURCHASING/SUCCESS/FAILED
             * @example "SUCCESS"
             */
            status: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/history/subscriptionRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedHistorySubscriptionRecordList
     * @summary Get Locked Subscription Record (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/history/subscriptionRecord
     * @secure
     */
    v1SimpleEarnLockedHistorySubscriptionRecordList: (
      query: {
        purchaseId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "123123" */
            positionId: string;
            /**
             * @format int64
             * @example 26055
             */
            purchaseId: number;
            /**
             * @format int64
             * @example 1575018510000
             */
            time: number;
            /** @example "BNB" */
            asset: string;
            /** @example "21312.23223" */
            amount: string;
            /** @example "30" */
            lockPeriod: string;
            /**
             * NORMAL for normal subscription, AUTO for auto-subscription order, ACTIVITY for activity order, TRIAL for trial fund order, RESTAKE for restake order
             * @example "AUTO"
             */
            type: string;
            /**
             * SPOT, FUNDING, SPOTANDFUNDING
             * @example "SPOT"
             */
            sourceAccount: string;
            /**
             * Display if sourceAccount is SPOTANDFUNDING
             * @example "30"
             */
            amtFromSpot: string;
            /**
             * Display if sourceAccount is SPOTANDFUNDING
             * @example "70"
             */
            amtFromFunding: string;
            /**
             * PURCHASING/SUCCESS/FAILED
             * @example "SUCCESS"
             */
            status: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/history/subscriptionRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleHistoryRedemptionRecordList
     * @summary Get Flexible Redemption Record (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/history/redemptionRecord
     * @secure
     */
    v1SimpleEarnFlexibleHistoryRedemptionRecordList: (
      query?: {
        productId?: string;
        redeemId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "10.54000000" */
            amount: string;
            /** @example "USDT" */
            asset: string;
            /**
             * @format int64
             * @example 1577257222000
             */
            time: number;
            /** @example "USDT001" */
            projectId: string;
            /**
             * @format int64
             * @example 40607
             */
            redeemId: number;
            /**
             * SPOT, FUNDING
             * @example "SPOT"
             */
            destAccount: string;
            /** @example "PAID" */
            status: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/history/redemptionRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedHistoryRedemptionRecordList
     * @summary Get Locked Redemption Record (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/history/redemptionRecord
     * @secure
     */
    v1SimpleEarnLockedHistoryRedemptionRecordList: (
      query: {
        positionId?: string;
        redeemId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "123123" */
            positionId: string;
            /**
             * @format int64
             * @example 40607
             */
            redeemId: number;
            /**
             * @format int64
             * @example 1575018510000
             */
            time: number;
            /** @example "BNB" */
            asset: string;
            /** @example "30" */
            lockPeriod: string;
            /** @example "21312.23223" */
            amount: string;
            /**
             * MATURE for redeem to Spot Wallet, NEW_TRANSFERRED for redeem to Flexible product, AHEAD for early redemption
             * @example "MATURE"
             */
            type: string;
            /** @example "1575018510000" */
            deliverDate: string;
            /** @example "PAID" */
            status: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/history/redemptionRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleHistoryRewardsRecordList
     * @summary Get Flexible Rewards History (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/history/rewardsRecord
     * @secure
     */
    v1SimpleEarnFlexibleHistoryRewardsRecordList: (
      query: {
        productId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /** "BONUS", "REALTIME", "REWARDS" */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD" */
            asset: string;
            /** @example "0.00006408" */
            rewards: string;
            /** @example "USDT001" */
            projectId: string;
            /** @example "BONUS" */
            type: string;
            /**
             * @format int64
             * @example 1577257222000
             */
            time: number;
          }[];
          /**
           * @format int64
           * @example 2
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/history/rewardsRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedHistoryRewardsRecordList
     * @summary Get Locked Rewards History (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/history/rewardsRecord
     * @secure
     */
    v1SimpleEarnLockedHistoryRewardsRecordList: (
      query: {
        positionId?: string;
        asset?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "123123" */
            positionId: string;
            /**
             * @format int64
             * @example 1577257222000
             */
            time: number;
            /** @example "BNB" */
            asset: string;
            /** @example "30" */
            lockPeriod: string;
            /** @example "21312.23223" */
            amount: string;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/history/rewardsRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleSetAutoSubscribeCreate
     * @summary Set Flexible Auto Subscribe (USER_DATA)
     * @request POST:/sapi/v1/simple-earn/flexible/setAutoSubscribe
     * @secure
     */
    v1SimpleEarnFlexibleSetAutoSubscribeCreate: (
      query: {
        productId: string;
        /** true or false */
        autoSubscribe: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/setAutoSubscribe`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedSetAutoSubscribeCreate
     * @summary Set Locked Auto Subscribe (USER_DATA)
     * @request POST:/sapi/v1/simple-earn/locked/setAutoSubscribe
     * @secure
     */
    v1SimpleEarnLockedSetAutoSubscribeCreate: (
      query: {
        positionId: string;
        /** true or false */
        autoSubscribe: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          success: boolean;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/setAutoSubscribe`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexiblePersonalLeftQuotaList
     * @summary Get Flexible Personal Left Quota (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/personalLeftQuota
     * @secure
     */
    v1SimpleEarnFlexiblePersonalLeftQuotaList: (
      query: {
        productId: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1000" */
          leftPersonalQuota: string;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/personalLeftQuota`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedPersonalLeftQuotaList
     * @summary Get Locked Personal Left Quota (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/personalLeftQuota
     * @secure
     */
    v1SimpleEarnLockedPersonalLeftQuotaList: (
      query: {
        projectId: string;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1000" */
          leftPersonalQuota: string;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/personalLeftQuota`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleSubscriptionPreviewList
     * @summary Get Flexible Subscription Preview (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/subscriptionPreview
     * @secure
     */
    v1SimpleEarnFlexibleSubscriptionPreviewList: (
      query: {
        productId: string;
        /** @format double */
        amount: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1232.32230982" */
          totalAmount: string;
          /** @example "BUSD" */
          rewardAsset: string;
          /** @example "BETH" */
          airDropAsset: string;
          /** @example "0.22759183" */
          estDailyBonusRewards: string;
          /** @example "0.22759183" */
          estDailyRealTimeRewards: string;
          /** @example "0.22759183" */
          estDailyAirdropRewards: string;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/subscriptionPreview`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnLockedSubscriptionPreviewList
     * @summary Get Locked Subscription Preview (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/locked/subscriptionPreview
     * @secure
     */
    v1SimpleEarnLockedSubscriptionPreviewList: (
      query: {
        projectId: string;
        /** @format double */
        amount: number;
        /** true or false, default true. */
        autoSubscribe?: boolean;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "AXS" */
          rewardAsset: string;
          /** @example "5.17181528" */
          totalRewardAmt: string;
          /** @example "BNB" */
          extraRewardAsset: string;
          /** @example "5.17181528" */
          estTotalExtraRewardAmt: string;
          /** @example "1.29295383" */
          nextPay: string;
          /** @example "1646697600000" */
          nextPayDate: string;
          /** @example "1646697600000" */
          valueDate: string;
          /** @example "1651449600000" */
          rewardsEndDate: string;
          /** @example "1651536000000" */
          deliverDate: string;
          /** @example "1651536000000" */
          nextSubscriptionDate: string;
        }[],
        Error
      >({
        path: `/sapi/v1/simple-earn/locked/subscriptionPreview`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleHistoryRateHistoryList
     * @summary Get Rate History (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/history/rateHistory
     * @secure
     */
    v1SimpleEarnFlexibleHistoryRateHistoryList: (
      query: {
        productId: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "BUSD001" */
            productId: string;
            /** @example "BUSD" */
            asset: string;
            /** @example "0.00006408" */
            annualPercentageRate: string;
            /**
             * @format int64
             * @example 1577233578000
             */
            time: number;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/history/rateHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Weight(IP): 150
     *
     * @tags Simple Earn
     * @name V1SimpleEarnFlexibleHistoryCollateralRecordList
     * @summary Get Collateral Record (USER_DATA)
     * @request GET:/sapi/v1/simple-earn/flexible/history/collateralRecord
     * @secure
     */
    v1SimpleEarnFlexibleHistoryCollateralRecordList: (
      query: {
        productId?: string;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        startTime?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        endTime?: number;
        /**
         * Current querying page. Start from 1. Default:1
         * @format int32
         * @example 1
         */
        current?: number;
        /**
         * Default:10 Max:100
         * @format int32
         * @example 100
         */
        size?: number;
        /**
         * The value cannot be greater than 60000
         * @format int64
         * @example 5000
         */
        recvWindow?: number;
        /**
         * UTC timestamp in ms
         * @format int64
         */
        timestamp: number;
        /** Signature */
        signature: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          rows: {
            /** @example "100.00000000" */
            amount: string;
            /** @example "BUSD001" */
            productId: string;
            /** @example "USDT" */
            asset: string;
            /**
             * @format int64
             * @example 1575018510000
             */
            createTime: number;
            /** @example "REPAY" */
            type: string;
            /** @example "USDT" */
            productName: string;
            /**
             * @format int64
             * @example 26055
             */
            orderId: number;
          }[];
          /**
           * @format int64
           * @example 1
           */
          total: number;
        },
        Error
      >({
        path: `/sapi/v1/simple-earn/flexible/history/collateralRecord`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
