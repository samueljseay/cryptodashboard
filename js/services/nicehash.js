import axios from 'axios'

import { niceHash } from '../config/config.json'

class NiceHashService {
  static async fetchWalletBalance () {
    const { apiID, apiKey } = niceHash
    const { data: { balance_pending } } = await axios.get(`https://api.nicehash.com/api?method=balance&id=${apiID}&key=${apiKey}`)
    const { price } = await CryptoCompareService.fetchPrice('BTC', 'USD', 2)

    const balanceUSD = (Number(price) * Number(balance_pending)).toFixed(2)

    return {
      balance: Number(balance_pending).toFixed(8),
      balanceUSD
    }
  }
}

export default NiceHashService
