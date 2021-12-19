import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default function MarketsList() {
  return (
    <div className="markets pb70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="markets-pair-list">
              <Tabs defaultActiveKey="btc">
                <Tab eventKey="favorites" title="★ Favorites">
                  <div className="table-responsive">
                    <table className="table star-active">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/BTC
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> KCS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> KCS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/BTC
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/BTC
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/BTC
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>7394.06</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/BTC
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="btc" title="BTC">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/BTC
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> KCS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> KCS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/BTC
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/BTC
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/BTC
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>7394.06</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/BTC
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>7394.06</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/BTC
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>7394.06</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/BTC
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>7394.06</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/BTC
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="kcs" title="KCS">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/KCS
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/KCS
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/KCS
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> KCS/KCS
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> KCS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/KCS
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/KCS
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/KCS
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/KCS
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>7394.06</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/KCS
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/KCS
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/KCS
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/KCS
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/KCS
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>7394.06</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/KCS
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/KCS
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>7394.06</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/KCS
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>7394.06</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/KCS
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="usdt" title="USDT">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/USDT
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/USDT
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/USDT
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> USDT/USDT
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> USDT
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/USDT
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/USDT
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/USDT
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/USDT
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>7394.06</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/USDT
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/USDT
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/USDT
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/USDT
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/USDT
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>7394.06</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/USDT
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/USDT
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>7394.06</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/USDT
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>7394.06</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/USDT
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="alts" title="ALTS">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ALTS/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> ALTS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>7394.06</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>7394.06</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>7394.06</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>7394.06</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>7394.06</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>7394.06</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>7394.06</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
              <div className="text-center">
                <a href="#!" className="load-more btn">
                  Load More <i className="icon ion-md-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
