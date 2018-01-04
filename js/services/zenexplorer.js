import axios from 'axios'

import CryptoCompareService from './cryptocompare'
import { zenCashWalletAddress } from '../config/config.json'

class ZenExplorerService {
  static async fetchWalletBalance () {
    const { data } = await axios.get(`https://explorer.zen-solutions.io/api/addr/${zenCashWalletAddress}/?noTxList=1`)
    const { addrStr, balance } = data
    const btcUSD = await CryptoCompareService.fetchPrice('BTC', 'USD', 2)
    const zenBtc = await CryptoCompareService.fetchPrice('ZEN', 'BTC', 8)
    const priceUSD = (Number(zenBtc.price) * Number(btcUSD.price)).toFixed(2)

    return {
      walletUSD: balance * priceUSD,
      walletZEN: balance,
      walletAddress: addrStr
    }
  }
}

export default ZenExplorerService
