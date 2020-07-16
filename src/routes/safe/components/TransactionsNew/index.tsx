import React, { useState } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import {
  //  ButtonLink,
  //Loader,
  //Title,
  Icon,
  IconText,
  Text,
  FixedIcon,
  Table,
  TableRow,
  TableAlignment,
} from '@gnosis.pm/safe-react-components'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

//import { useFetchNewTransactions } from '../../container/hooks/useFetchNewTransactions'
//import { currentPageSelector, newTransactionsCurrentPageSelector } from '../../store/selectors/newTransactions'
//import { setPreviousPage } from '../../store/actions/transactionsNew/setPreviousPage'
//import { setNextPage } from '../../store/actions/transactionsNew/setNextPage'
import styled from 'styled-components'

const FlexWithSeparation = styled.div`
  display: flex;
  align-items: center;

  span,
  div {
    margin-right: 5px;
  }
`

const TxContainer = styled.div``

const StyledText = styled(Text)`
  margin: 20px 0 20px;
`

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
        { alignment: TableAlignment.left, content: <Text size="sm">1</Text> },
        {
          alignment: TableAlignment.left,
          content: (
            <FlexWithSeparation>
              <FixedIcon type="arrowSent" />
              <Text size="sm">Outgoing Transfer</Text>
            </FlexWithSeparation>
          ),
        },
        {
          alignment: TableAlignment.right,
          content: (
            <Text size="sm" strong>
              -100.23 ETH
            </Text>
          ),
        },
        {
          alignment: TableAlignment.right,
          content: (
            <Text size="sm">
              {formatDistanceToNow(new Date(2020, 5, 13), { addSuffix: true }).replace('about', '').trim()}
            </Text>
          ),
        },
        {
          alignment: TableAlignment.right,
          content: <IconText iconSize="sm" textSize="sm" color="primary" iconType="owners" text="2 out 2" />,
        },
        {
          alignment: TableAlignment.right,
          content: (
            <FlexWithSeparation>
              <Icon size="sm" type="rocket" color="primary" />
              <Icon size="sm" type="circleCross" color="error" />
            </FlexWithSeparation>
          ),
        },
      ],
      collapsibleContent: <div>some data</div>,
    },
  ]

  return (
    <TxContainer>
      <StyledText size="md" strong>
        NEXT TRANSACTION
      </StyledText>
      <Table isCollapsible rows={rows} selectedRowIds={selectedRowIds} onRowClick={onRowClick} />

      <StyledText size="md" strong>
        QUEUE
      </StyledText>

      <StyledText size="md" strong>
        JUNE 20, 2020
      </StyledText>

      <StyledText size="md" strong>
        JUNE 19, 2020
      </StyledText>

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
