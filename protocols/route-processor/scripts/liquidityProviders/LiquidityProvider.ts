import { ethers } from 'ethers'
import { ChainId } from '@sushiswap/chain'
import { Limited } from '../Limited'
import { PoolCode } from '../pools/PoolCode'
import { Token } from '@sushiswap/currency'

export abstract class LiquidityProvider {
  limited: Limited
  chainDataProvider: ethers.providers.BaseProvider
  chainId: ChainId

  constructor(chainDataProvider: ethers.providers.BaseProvider, chainId: ChainId, l: Limited) {
    this.limited = l
    this.chainDataProvider = chainDataProvider
    this.chainId = chainId
  }

  abstract getPoolProviderName(): string
  abstract getPools(t0: Token, t1: Token): Promise<PoolCode[]>

  startGetherData(t0: Token, t1: Token) {}
  poolListWereUpdated(): boolean {
    return false
  }
  getCurrentPoolList(): PoolCode[] {
    return []
  }
  stopGetherData() {}
}
