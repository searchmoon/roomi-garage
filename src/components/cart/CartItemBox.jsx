import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import '../../styles/cartStyle.css';
import { commonColors } from '../../styles/commonColors';
import CountBtn from '../common/buttons/CountBtn';
import BtnPlain from '../common/buttons/BtnPlain';
import { useState } from 'react';

const CartItemBox = ({ item }) => {
  const [count, setCount] = useState(item.quantity);

  console.log(item);
  return (
    <CartItemBoxStyle>
      <div className={'wrap-input'}>
        <input type={'checkbox'} className={'check-box'}></input>
      </div>
      <div className={'product-info'}>
        <div className={'img-wrap'}>
          <img src={item.image} alt={'product-list'} />
        </div>
        <div className={'item-info'}>
          <p className={'sub-title gray'}>{item.store_name}</p>
          <p className={'title'}>{item.product_name}</p>
          <p className={'price'}>{Number(item.price).toLocaleString()}원</p>
          <p className={'gray'}>
            택배배송 / {item.shipping_fee === 0 ? '무료배송' : `${item.shipping_fee} 원`}
          </p>
        </div>
      </div>

      <div className={'total-count'}>
        <CountBtn count={count} setCount={setCount} />
      </div>
      <div className={'total-price'}>
        <p className={'price'}>
          {Number(item.price * count + item.shipping_fee).toLocaleString()}원
        </p>
        <BtnPlain width={'130px'} padding={'10px'}>
          주문하기
        </BtnPlain>
      </div>
      <CgClose className={'close-icon'} />
    </CartItemBoxStyle>
  );
};

const CartItemBoxStyle = styled.div`
  border: 2px solid ${commonColors.whiteGray};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  .wrap-input {
    .check-box {
      margin: 3px 10px 3px 4px;
    }
  }
  .product-info {
    display: flex;
    .img-wrap {
      aspect-ratio: 1/1;
      max-width: 160px;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .item-info {
      margin-left: 36px;
      text-align: left;

      .gray {
        color: ${commonColors.gray};
        font-size: 14px;

        &.sub-title {
          margin-top: 16px;
        }
      }
    }

    .title {
      font-size: 18px;
      margin-top: 10px;
    }

    .price {
      margin: 10px 0 40px 0;
      font-weight: 700;
    }
  }

  .total-price {
    position: relative;

    .price {
      color: ${commonColors.priceRed};
      font-weight: 700;
      margin-bottom: 26px;
    }
  }
  .close-icon {
    color: ${commonColors.gray};
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export default CartItemBox;
