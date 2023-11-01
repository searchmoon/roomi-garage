import { useState } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleMinusCount = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };
  return { count, handleMinusCount, handlePlusCount };
};

export default useCounter;
