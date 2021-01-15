import UbqLogo from 'src/config/assets/token_ubq.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'https://safe-transaction.ubiq.gnosis.io/api/v1',
  safeAppsUrl: 'https://apps.gnosis-safe.io',
  gasPrice: 2e10,
  rpcServiceUrl: 'https://rpc.octano.dev/',
  networkExplorerName: 'Ubiqscan',
  networkExplorerUrl: 'https://ubiqscan.io',
  networkExplorerApiUrl: 'https://ubiqscan.io/api',
}

const ubiq: NetworkConfig = {
  environment: {
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.UBIQ,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'Ubiq',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'Ubiq',
      symbol: 'UBQ',
      decimals: 18,
      logoUri: UbqLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.DAPPER,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.PORTIS,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.UNILOGIN,
    WALLETS.WALLET_CONNECT,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.ENS_LOOKUP],
}

export default ubiq
