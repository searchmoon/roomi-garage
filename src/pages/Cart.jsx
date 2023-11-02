import styled from 'styled-components';
import { commonColors } from '../styles/commonColors';
import '../styles/cartStyle.css';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import CartItemBox from '../components/cart/CartItemBox';

const Cart = () => {
  return (
    <CartStyle>
      <DefaultLayout>
        <p className={'cart-title'}>장바구니</p>
        <div className={'cart-info'}>
          <div className={'wrap-input'}>
            <input type={'checkbox'} id={'checkAll'}></input>
          </div>
          <p className={'product-info'}>상품정보</p>
          <p className={'total-count'}>수량</p>
          <p className={'total-price'}>상품금액</p>
        </div>
        <CartItemBox />
      </DefaultLayout>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .cart-title {
    font-size: 36px;
    font-weight: 700;
    margin: 52px auto;
  }
  .cart-info {
    width: 100%;
    background-color: ${commonColors.brightGray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 35px;
    .wrap-input {
      text-align: left;
    }
  }
`;

export default Cart;
