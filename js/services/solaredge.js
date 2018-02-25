import axios from 'axios'

class SolarEdgeService {
  static async fetchOverview () {
    const { data: overview } = await axios.get('/solaredge')
    console.log(overview)
    return this.calculateResponse(overview)
  }

  static calculateResponse ({ overview: { currentPower: { power }, lastDayData: { energy } } }) {
    return {
      kwNow: Number(power / 1000).toFixed(2),
      kwToday: Number(energy / 1000).toFixed(2)
    }
  }
}

export default SolarEdgeService
