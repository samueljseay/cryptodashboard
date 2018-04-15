import axios from 'axios'

const client = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/'
})

class CryptoCompareService {
  // use capital letters for symbols. e.g. `BTC` not `btc`
  static async fetchPrice (fromSym, toSym, precision) {
    const { data } = await client.get(`pricemultifull?fsyms=${fromSym}&tsyms=${toSym}`)
    const priceData = data['RAW'][fromSym][toSym]

    return {
      from: fromSym,
      to: toSym,
      price: Number(priceData['PRICE']).toFixed(precision),
      percentChange: priceData['CHANGEPCT24HOUR'].toFixed(2)
    }
  }

  // A simple history of prices from today to a limit of days. We take the high/low average
  static async fetchHistoricalPrice (fromSym, toSym, limit) {
    const { data } = await client.get(`histoday?fsym=${fromSym}&tsym=${toSym}&limit=${limit}`)
    return data['Data'].map(({ high, low }) => (high + low) / 2)
  }
}

export default CryptoCompareService
