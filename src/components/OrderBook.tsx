import React from 'react'

export default function OrderBook() {
  return (
    <div className="order-book mb15">
      <h2 className="heading">Order Book</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Price(BTC)</th>
            <th>Amount(ETH)</th>
            <th>Total(ETH)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="red-bg-80">
            <td className="red">0.022572</td>
            <td>1.253415</td>
            <td>15.27648</td>
          </tr>
          <tr className="red-bg-60">
            <td className="red">0.020371</td>
            <td>1.205415</td>
            <td>15.25648</td>
          </tr>
          <tr className="red-bg-40">
            <td className="red">0.023572</td>
            <td>1.645415</td>
            <td>15.23648</td>
          </tr>
          <tr className="red-bg-20">
            <td className="red">0.032378</td>
            <td>1.206715</td>
            <td>15.25348</td>
          </tr>
          <tr className="red-bg-10">
            <td className="red">0.022573</td>
            <td>1.262415</td>
            <td>15.19648</td>
          </tr>
          <tr className="red-bg-8">
            <td className="red">0.154377</td>
            <td>1.225415</td>
            <td>15.35648</td>
          </tr>
          <tr className="red-bg-5">
            <td className="red">0.120373</td>
            <td>1.285415</td>
            <td>15.25648</td>
          </tr>
          <tr className="red-bg">
            <td className="red">0.028576</td>
            <td>1.291415</td>
            <td>15.26448</td>
          </tr>
        </tbody>
        <tbody className="ob-heading">
          <tr>
            <td>
              <span>Last Price</span>
              0.020367
            </td>
            <td>
              <span>USD</span>
              148.65
            </td>
            <td className="red">
              <span>Change</span>
              -0.51%
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="green-bg">
            <td className="green">0.158373</td>
            <td>1.209515</td>
            <td>15.23248</td>
          </tr>
          <tr className="green-bg-5">
            <td className="green">0.020851</td>
            <td>1.206245</td>
            <td>15.25458</td>
          </tr>
          <tr className="green-bg-8">
            <td className="green">0.025375</td>
            <td>1.205715</td>
            <td>15.65648</td>
          </tr>
          <tr className="green-bg-10">
            <td className="green">0.020252</td>
            <td>1.205495</td>
            <td>15.24548</td>
          </tr>
          <tr className="green-bg-20">
            <td className="green">0.020373</td>
            <td>1.205415</td>
            <td>15.25648</td>
          </tr>
          <tr className="green-bg-40">
            <td className="green">0.020156</td>
            <td>1.207515</td>
            <td>15.28948</td>
          </tr>
          <tr className="green-bg-60">
            <td className="green">0.540375</td>
            <td>1.205915</td>
            <td>15.25748</td>
          </tr>
          <tr className="green-bg-80">
            <td className="green">0.020372</td>
            <td>1.205415</td>
            <td>15.25648</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
