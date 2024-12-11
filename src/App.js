import React, { useState } from 'react';
import './App.css';

function App() {
  const [timestamp, setTimestamp] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [timeUnit, setTimeUnit] = useState('seconds'); // 新增状态

  const handleInputChange = (e) => {
    setTimestamp(e.target.value);
  };

  const handleUnitChange = (e) => { // 新增处理单位变化的函数
    setTimeUnit(e.target.value);
  };

  const convertTimestamp = () => {
    let timestampMs = parseInt(timestamp);
    if (timeUnit === 'seconds') {
      timestampMs *= 1000;
    }
    const date = new Date(timestampMs);
    const formatted = date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/\//g, '-');
    setFormattedTime(formatted);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>时间戳转换器</h1>
        <div>
          <input
          type="number"
          value={timestamp}
          onChange={handleInputChange}
            placeholder={`输入${timeUnit === 'seconds' ? '秒' : '毫秒'}级时间戳`}
        />
          <select value={timeUnit} onChange={handleUnitChange}>
            <option value="seconds">秒</option>
            <option value="milliseconds">毫秒</option>
          </select>
    </div>
        <button onClick={convertTimestamp}>转换</button>
        {formattedTime && <p>转换结果: {formattedTime}</p>}
      </header>
    </div>
  );
}

export default App;
