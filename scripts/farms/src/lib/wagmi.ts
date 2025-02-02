import { allChains } from '@sushiswap/wagmi-config'
import { configureChains, createClient } from '@wagmi/core'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { publicProvider } from '@wagmi/core/providers/public'

const alchemyId = process.env.ALCHEMY_ID || process.env.NEXT_PUBLIC_ALCHEMY_ID

if (!alchemyId) {
  throw Error('NO ALCHEMY ID SET')
}

createClient(configureChains(allChains, [publicProvider(), alchemyProvider({ apiKey: alchemyId })]))
