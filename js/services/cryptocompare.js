import axios from 'axios'

const API_URL = 'https://min-api.cryptocompare.com/data'

class CryptoCompareService {
  // use capital letters for symbols. e.g. `BTC` not `btc`
  static async fetchPrice (fromSym, toSym) {
    const { data } = await axios.get(`${API_URL}/pricemultifull?fsyms=${fromSym}&tsyms=${toSym}`)
    const priceData = data['RAW'][fromSym][toSym]

    return {
      from: fromSym,
      to: toSym,
      price: Math.round(priceData['PRICE']),
      percentChange: priceData['CHANGEPCT24HOUR'].toFixed(2)
    }
  }
}

export default CryptoCompareService
