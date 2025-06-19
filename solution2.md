# solution2

```JS
import React, { useState } from 'react';

const App = () => {
  // Example exchange rates
  const coins = [
    { name: 'Bitcoin', rate: 0.000027 },
    { name: 'Ethereum', rate: 0.00039 },
    { name: 'Solana', rate: 0.012 }
  ];

  const balance = 1000; // maximum allowed amount
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value === '') {
      setError('Amount cannot be empty');
    } else if (+value < 0.01) {
      setError('Amount must be at least 0.01');
    } else if (+value > balance) {
      setError('Amount cannot exceed the available balance');
    } else {
      setError('');
    }
  };

  const getCoinAmount = (rate) => {
    if (error || amount === '') return 'n/a';
    return (amount * rate).toFixed(8);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Crypto Exchange</h2>

      <input
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder="Enter amount"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table border="1" cellPadding="8" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Rate</th>
            <th>You Get</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => (
            <tr key={i}>
              <td>{coin.name}</td>
              <td>{coin.rate}</td>
              <td>{getCoinAmount(coin.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
```