import axios from 'axios'

class EthosService {
  static async fetchStatus () {
    const { data: { per_info, rigs } } = await axios.get('/rigstatus')

    return Object.values(rigs).map((rig) => ({
      allGpusAlive: per_info[rig.miner].per_total_gpus === per_info[rig.miner].per_alive_gpus,
      totalHash: per_info[rig.miner].hash,
      condition: rig.condition,
      watts: EthosService.calculateWattsConsumed(rig.watts)
    }))
  }

  static calculateWattsConsumed (wattsString) {
    return wattsString.split(' ').reduce((acc, watts) => {
      acc += Number(watts)
      return acc
    }, 0).toFixed(1)
  }
}

export default EthosService
