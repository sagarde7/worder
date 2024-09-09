import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [status,setStatus]=useState(false);
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
<div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => {setStatus(true);
      setTimeLeft(60);
      }
      }>Start Timer</button>
      <button onClick={() => {setStatus(false);
      setTimeLeft(0);
      }
      }>Stop Timer</button>
      {status && (
        <div style={{ fontSize: '2rem', marginTop: '20px' }}>
          <p>{formatTime(timeLeft)}</p>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
