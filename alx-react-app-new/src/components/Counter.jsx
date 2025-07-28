import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        margin: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px'
      }}
    >
      <h2>Counter App</h2>
      <p style={{ fontSize: '1.5rem', margin: '10px 0' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 15px' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 15px' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 15px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
