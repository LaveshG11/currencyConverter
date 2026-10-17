import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
        setConvertedAmount(amount * (currencyInfo[to] || 0))
  }

    const rate = currencyInfo[to] || 0

  return (
        <main className="app-shell">
            <div className="ambient ambient-one" />
            <div className="ambient ambient-two" />
            <section className="converter-layout">
                <header className="topbar">
                    <div className="brand-mark">FX</div>
                    <div>
                        <p className="eyebrow">PERSONAL FINANCE TOOL</p>
                        <p className="brand-name">Exchange desk</p>
                    </div>
                    <div className="live-status"><span /> Live rates</div>
                </header>

                <div className="content-grid">
                    <div className="intro-copy">
                        <p className="eyebrow accent">Simple, clear, current</p>
                        <h1>Move money<br /><em>with confidence.</em></h1>
                        <p className="intro-text">Compare currencies in a calm, focused workspace built for the decisions that matter.</p>
                        <div className="metric-row">
                            <div><strong>180+</strong><span>currencies</span></div>
                            <div><strong>24/7</strong><span>market updates</span></div>
                        </div>
                    </div>

                    <div className="converter-card">
                        <div className="card-heading">
                            <div>
                                <p className="eyebrow">CONVERTER</p>
                                <h2>What would you like to exchange?</h2>
                            </div>
                            <span className="card-index">01</span>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); convert() }}>
                            <InputBox
                                label="You send"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(value) => setAmount(value)}
                            />
                            <div className="swap-row">
                                <div className="rule" />
                                <button type="button" className="swap-button" onClick={swap} aria-label="Swap currencies" title="Swap currencies">&#8646;</button>
                                <div className="rule" />
                            </div>
                            <InputBox
                                label="They receive"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                            <div className="rate-line">
                                <span>Indicative rate</span>
                                <strong>1 {from.toUpperCase()} = {rate.toFixed(4)} {to.toUpperCase()}</strong>
                            </div>
                            <button type="submit" className="convert-button">Convert funds <span>&#8594;</span></button>
                        </form>
                    </div>
                </div>

                <footer className="bottom-note">
                    <span>Rates sourced from a live market feed</span>
                    <span className="footer-dot" />
                    <span>Updated just now</span>
                </footer>
            </section>
        </main>
    )
}

export default App