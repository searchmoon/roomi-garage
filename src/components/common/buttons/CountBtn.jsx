import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import styled from '@emotion/styled';
import { commonColors } from '../../../styles/commonColors';

const CountBtn = ({ count, onMinusClick, onPlusClick }) => {
  return (
    <CountBtnStyle>
      <button onClick={onMinusClick}>
        <HiOutlineMinus />
      </button>
      <p>{count}</p>
      <button onClick={onPlusClick}>
        <HiOutlinePlus />
      </button>
      {/* {overMessage && <span className={'error-msg'}>총 재고 수량을 초과하였습니다.</span>} */}
    </CountBtnStyle>
  );
};

const CountBtnStyle = styled.div`
  height: 50px;
  width: 150px;
  border-collapse: collapse;
  border: 1px solid ${commonColors.lightgray};
  border-radius: 5px;
  margin: 30px 0;
  display: flex;
  position: relative;
  button {
    width: 50px;
    &:first-of-type {
      border-right: 1px solid ${commonColors.lightgray};
    }
    &:last-of-type {
      border-left: 1px solid ${commonColors.lightgray};
    }
    svg {
      font-size: 20px;
      color: ${commonColors.silver};
    }
  }
  p {
    width: 50px;
    align-self: center;
    text-align: center;
  }
  .error-msg {
    color: ${commonColors.priceRed};
    position: absolute;
    width: 300px;
    top: 55px;
    left: 0;
  }
`;
export default CountBtn;
