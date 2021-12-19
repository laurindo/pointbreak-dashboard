import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default function MarketTrade() {
  return (
    <div className="market-trade">
      <Tabs defaultActiveKey="limit">
        <Tab eventKey="limit" title="Limit">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button type="submit" className="btn buy">
                  Buy
                </button>
              </form>
            </div>
            <div className="market-trade-sell">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button className="btn sell">Sell</button>
              </form>
            </div>
          </div>
        </Tab>
        <Tab eventKey="market" title="Market">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button type="submit" className="btn buy">
                  Buy
                </button>
              </form>
            </div>
            <div className="market-trade-sell">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button className="btn sell">Sell</button>
              </form>
            </div>
          </div>
        </Tab>
        <Tab eventKey="stop-limit" title="Stop Limit">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button type="submit" className="btn buy">
                  Buy
                </button>
              </form>
            </div>
            <div className="market-trade-sell">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button className="btn sell">Sell</button>
              </form>
            </div>
          </div>
        </Tab>
        <Tab eventKey="stop-market" title="Stop Market">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button type="submit" className="btn buy">
                  Buy
                </button>
              </form>
            </div>
            <div className="market-trade-sell">
              <form action="#">
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Price" required />
                  <div className="input-group-append">
                    <span className="input-group-text">BTC</span>
                  </div>
                </div>
                <div className="input-group">
                  <input type="number" className="form-control" placeholder="Amount" required />
                  <div className="input-group-append">
                    <span className="input-group-text">ETH</span>
                  </div>
                </div>
                <ul className="market-trade-list">
                  <li>
                    <a href="#!">25%</a>
                  </li>
                  <li>
                    <a href="#!">50%</a>
                  </li>
                  <li>
                    <a href="#!">75%</a>
                  </li>
                  <li>
                    <a href="#!">100%</a>
                  </li>
                </ul>
                <p>
                  Available: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Volume: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Margin: <span>0 BTC = 0 USD</span>
                </p>
                <p>
                  Fee: <span>0 BTC = 0 USD</span>
                </p>
                <button className="btn sell">Sell</button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
