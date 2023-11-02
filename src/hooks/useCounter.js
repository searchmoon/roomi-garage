const useCounter = (count, setCount, stock = null, setAlertMessage) => {
  const handleMinusClick = () => {
    if (count === 1) {
      const message = '최소 주문 가능한 수량입니다.';
      setAlertMessage(message);

      setTimeout(() => {
        setAlertMessage(null);
      }, 2000);

      return;
    }
    setCount((prev) => prev - 1);
  };

  const handlePlusClick = () => {
    if (stock === count) {
      const message = '총 재고 수량을 초과하였습니다.';
      setAlertMessage(message);

      setTimeout(() => {
        setAlertMessage((prev) => !prev);
      }, 2000);
      
      return;
    }

    setCount((prev) => prev + 1);
  };

  return { handleMinusClick, handlePlusClick };
};

export default useCounter;
