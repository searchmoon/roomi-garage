import { useState } from 'react';

const useDebounce = (func, delay) => {
  const [timer, setTimer] = useState(null);

  return function () {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        func.apply(this, arguments);
      }, delay),
    );
  };
};

export default useDebounce;