# solution AT

```JS
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
  const [balance, setBalance] = useState(17042.67)
  const [error, setError] = useState('')
  return (
    <>
      <input type="number" value={amount} placeholder="Enter USD amount" onChange={(e) => setAmount(e.target.value)} />
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



```
