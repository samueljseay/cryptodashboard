import axios from 'axios'

class EthosService {
  static async fetchStatus () {
    const { data } = await axios.get('/rigstatus')
    const rigs = Object.values(data.rigs)

    return rigs.map((rig) => ({
      allGpusAlive: data.total_gpus === data.alive_gpus,
      totalHash: data.total_hash,
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