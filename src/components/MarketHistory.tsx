import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import { useQuery } from '@apollo/client'
import { RECENT_TRADE_LIST } from '../graphql/queries/index'

export default function MarketHistory() {
  const { data } = useQuery(RECENT_TRADE_LIST)
  const list = data?.recentTradeList.list
  return (
    <div className="market-history">
      <Tabs defaultActiveKey="recent-trades">
        <Tab eventKey="recent-trades" title="Recent Trades">
          <table className="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Price(BTC)</th> {/* Tornar o symbol dinâmico */}
                <th>Amount(ETH)</th> {/* Tornar o symbol dinâmico */}
              </tr>
            </thead>
            <tbody>
              {list?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>1{item.time}</td>
                    <td className="red">{item.price}</td>
                    <td>{item.qty}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Tab>
      </Tabs>
    </div>
  )
}
