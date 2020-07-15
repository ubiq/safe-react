import React, { useState } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import {
  //  ButtonLink,
  //Loader,
  Text,
  //Icon,
  FixedIcon,
  Table,
  TableRow,
  TableAlignment,
} from '@gnosis.pm/safe-react-components'
//import { useFetchNewTransactions } from '../../container/hooks/useFetchNewTransactions'
//import { currentPageSelector, newTransactionsCurrentPageSelector } from '../../store/selectors/newTransactions'
//import { setPreviousPage } from '../../store/actions/transactionsNew/setPreviousPage'
//import { setNextPage } from '../../store/actions/transactionsNew/setNextPage'
import styled from 'styled-components'

const TxContainer = styled.div``

const Transactions = (): React.ReactElement => {
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set())

  //  const dispatch = useDispatch()
  //const transactions = useSelector(newTransactionsCurrentPageSelector)
  //  const { currentPage, maxPages } = useSelector(currentPageSelector)
  //useFetchNewTransactions()

  // const nextPageButtonHandler = () => {
  //   dispatch(setNextPage())
  // }

  // const previousPageButtonHandler = () => {
  //   dispatch(setPreviousPage())
  // }

  // if (!transactions) return <div>No txs available for safe</div>

  // if (!transactions.length) return <Loader size="lg" />

  const onRowClick = (rowId: string) => {
    const cp = new Set(selectedRowIds)
    if (cp.has(rowId)) {
      cp.delete(rowId)
    } else {
      cp.add(rowId)
    }
    setSelectedRowIds(cp)
  }

  const rows: TableRow[] = [
    {
      id: '1',
      cells: [
        { alignment: TableAlignment.left, content: '1' },
        {
          alignment: TableAlignment.left,
          content: (
            <div>
              <FixedIcon type="arrowSent" />
              <Text size="sm">Outgoing Transfer</Text>
            </div>
          ),
        },
      ],
      collapsibleContent: <div>some data</div>,
    },
  ]

  return (
    <TxContainer>
      <Text size="md" strong>
        NEXT TRANSACTION
      </Text>
      <Table isCollapsible rows={rows} selectedRowIds={selectedRowIds} onRowClick={onRowClick} />

      <Text size="md" strong>
        QUEUE
      </Text>

      <Text size="md" strong>
        JUNE 20, 2020
      </Text>

      <Text size="md" strong>
        JUNE 19, 2020
      </Text>

      {/* <>
        {transactions.map((tx, index) => {
          const txHash = tx.transactionHash || tx.txHash
          return <div key={index}>Tx hash: {txHash}</div>
        })}
        <ButtonLink color="primary" onClick={() => previousPageButtonHandler()} disabled={currentPage === 1}>
          Previous Page
        </ButtonLink>
        <ButtonLink color="primary" onClick={() => nextPageButtonHandler()} disabled={currentPage >= maxPages}>
          Next Page
        </ButtonLink>
      </> */}
    </TxContainer>
  )
}

export default Transactions
