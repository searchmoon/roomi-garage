import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { commonColors } from '../styles/commonColors';
import BtnPlain from '../components/common/buttons/BtnPlain';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import ItemInfoTabs from '../components/products/ItemInfoTabs';
import CountBtn from '../components/common/buttons/CountBtn';
import { useState } from 'react';
import transformComma from '../utils/transformComma';

const ProductDetail = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [count, setCount] = useState(1);
  const location = useLocation();
  const item = location.state;

  //장바구니에 상품 추가
  const handleAddItemToCart = async (e) => {
    e.preventDefault(); // 필요한게 맞는가?
    try {
      console.log(e);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductDetailStyle>
      <DefaultLayout>
        <div className={'wrap-box'}>
          <div className={'img-wrap'}>
            <img src={item.image} alt={'product-image'} />
          </div>
          <div className={'wrap-right'}>
            <div className={'info-wrap'}>
              <div>
                <p className={'store-name'}>{item.storeName}</p>
                <p className={'title'}>{item.productName}</p>
                <div className={'price'}>
                  <strong>{transformComma(item.price)}</strong>
                  <span>원</span>
                </div>
              </div>
            </div>
            <BuyingWrap>
              <span>택배배송 / 무료배송</span>
              <TopBottomLine>
                <CountBtn
                  count={count}
                  setCount={setCount}
                  stock={item.stock}
                  alertMessage={alertMessage}
                  setAlertMessage={setAlertMessage}
                />
              </TopBottomLine>
              <div className={'wrap-price'}>
                <p>총 상품 금액</p>
                <div>
                  <p>
                    총 수량 <span>{count}</span>개 |
                  </p>
                  <div className={'price'}>
                    <strong>{transformComma(item.price * count)}</strong>
                    {/*금액에 콤마 넣기*/}
                    <span>원</span>
                  </div>
                </div>
              </div>
              <div className={'wrap-btn'}>
                <BtnPlain width={'65%'}>바로 구매</BtnPlain>
                <BtnPlain
                  onClick={handleAddItemToCart}
                  width={'35%'}
                  color={commonColors.lightPrimary}
                >
                  장바구니
                </BtnPlain>
              </div>
            </BuyingWrap>
          </div>
        </div>
        <ItemInfoTabs info={item.info} />
      </DefaultLayout>
    </ProductDetailStyle>
  );
};

const BuyingWrap = styled.div`
  .wrap-price {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 600;
    }
  }

  .wrap-btn {
    display: flex;
    gap: 14px;
  }
`;

const ProductDetailStyle = styled.div`
  .price {
    strong {
      font-size: 36px;
      font-weight: 900;
    }
    span {
      font-size: 16px;
    }
  }
  .wrap-box {
    display: flex;
    max-height: 600px;
    height: 100%;
    margin-top: 80px;
    //width: 100%;
    .img-wrap {
      aspect-ratio: 1/1;
      height: 100%;
      max-width: 600px;
      width: 50%;
      border-radius: 10px;
      border: 1px solid ${commonColors.silver};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .wrap-right {
      margin-left: 3.6%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      min-height: 420px;
      .info-wrap {
        height: 100%;
        //display: flex;
        //flex-direction: column;
        //justify-content: space-between;
        .store-name {
          color: ${commonColors.gray};
          font-size: 18px;
          margin-bottom: 16px;
        }
        .title {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 20px;
        }
      }
    }
  }
`;

const TopBottomLine = styled.div`
  border-bottom: 2px solid ${commonColors.lightgray};
  border-top: 2px solid ${commonColors.lightgray};
  display: flex;
  margin: 20px 0 46px 0;
  .count-box {
    height: 50px;
    width: 150px;
    border-collapse: collapse;
    border: 1px solid ${commonColors.lightgray};
    border-radius: 5px;
    margin: 30px 0;
    display: flex;
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
  }
`;

export default ProductDetail;
