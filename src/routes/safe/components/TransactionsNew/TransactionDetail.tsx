import React from 'react'
import { Operation } from 'src/routes/safe/store/models/types/transactions'

type DeferredValue<T> = T | 'NOT_AVAILABLE'

type ETHAddress = {
  name: string
  address: string
}

type TxStatus = {
  confirmationsRequired: number
  confirmations: number
  executed?: ETHAddress
}

type TxStats = {
  hash: DeferredValue<string>
  nonce: DeferredValue<number>
  fee: DeferredValue<string>
  createdAt: Date
  executedAt: DeferredValue<Date>
  operationType: Operation
}

type TxDestination = {
  title: string
  destination: ETHAddress
}

type TxPermissions = {
  isCreated: boolean
  confirmedBy: ETHAddress[]
  status: TxStatus
}

type Props = {
  stats: TxStats
  destination: TxDestination
  permissions: TxPermissions
}

const TransactionDetails = ({}: Props): React.ReactElement => {
  return <div>data</div>
}

export default TransactionDetails
