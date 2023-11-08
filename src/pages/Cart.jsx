import styled from 'styled-components';
import { commonColors } from '../styles/commonColors';
import '../styles/cartStyle.css';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import CartItemBox from '../components/cart/CartItemBox';
import { useEffect, useState } from 'react';
import { accessInstance, axiosInstance } from '../api/axios-api';

const Cart = () => {
  const userType = localStorage.getItem('user_type');
  const [cartItems, setCartItems] = useState([]);

  const getCartList = async () => {
    try {
      const res = await accessInstance.get('/cart/');
      const cartItems = res.data.results;
      console.log(cartItems);

      // 각 카트 항목의 product_id를 추출하고 추가 정보를 가져오는 Promise 배열 생성
      const filteringProductItems = cartItems.map(async (item) => {
        const id = item.product_id;
        const productRes = await axiosInstance.get(`/products/${id}`);
        console.log(productRes);
        return { ...item, ...productRes.data };
      });

      // Promise.all을 사용하여 모든 추가 정보를 가져온 후 상태를 설정
      const itemsWithProductInfo = await Promise.all(filteringProductItems);
      setCartItems(itemsWithProductInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

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
        {userType ? (
          cartItems.map((item) => <CartItemBox key={item.cart_item_id} item={item} />)
        ) : (
          <div className="none-product">장바구니에 담긴 상품이 없습니다.</div>
        )}
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
  .none-product {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Cart;
