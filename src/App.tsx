import { useState } from 'react'
import './App.css'
import { data } from "./data.tsx"; 
//  import reactLogo from './assets/react.svg'

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

function fixed(amount: number) {
  return amount.toFixed(8)
}

function App() {
  console.log(...data)
  const [amount, setAmount] = useState(1000)
  const balance = 17042.67
  const [error, setError] = useState('No error')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setAmount(Number(value))
    if (value === '') {
      setError('Amount cannot be empty')
    } else if (Number(value) < 0.01) {
      setError('Amount must be at least 0.01')
    } else if (Number(value) > balance) {
      setError('Amount cannot exceed the available balance')
    } else {
      setError('No error')
    }
  }

  return (
    <>
      <h2>
        <a className='logo' href="https://github.com/attila5287/hackerrank-react-cryptorank-exchange" target="_blank" rel="noopener noreferrer">
          <img className='logo' src="./react.svg" alt="CryptoRank Exchange" />
          <span>CryptoRank Exchange</span>
        </a>
      </h2>
      <input type="number" value={amount} placeholder="Enter USD amount" onChange={handleChange} />
      <p style={{color: 'red', margin: '0'}}>{error}</p>
        <ul style={{listStyleType: 'none'}}>
          <li>Your balance is {formatCurrency(balance)}</li>
          <li>Purchase Dollar Amount: {formatCurrency(amount)}</li>
          <li>After Purchase: {formatCurrency(balance - amount)}</li>
        </ul>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Rate</th>
            <th>Num Coins</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.rate}</td>
              <td>{fixed(amount * item.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
