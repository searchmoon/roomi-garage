import styled from 'styled-components';
import { commonColors } from '../../styles/commonColors';
import transformComma from '../../utils/transformComma';

const ProductList = ({ item }) => {
  return (
    <ProductListStyle>
      <div className={'img-wrap'}>
        <img src={item.image} alt={'product-list'} />
      </div>
      <p className={'store'}>{item['store_name']}</p>
      <p className={'title'}>{item['product_name']}</p>
      <div className={'price'}>
        <strong>{transformComma(item.price)}</strong>
        <span>원</span>
      </div>
    </ProductListStyle>
  );
};

const ProductListStyle = styled.div`
  max-height: 490px;
  height: 100%;
  max-width: 380px;
  width: 100%;
  cursor: pointer;
  .img-wrap {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${commonColors.silver};
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .store {
    color: ${commonColors.gray};
    margin-top: 16px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
    strong {
      font-size: 18px;
      font-weight: 900;
    }
    span {
      font-size: 14px;
    }
  }
`;

export default ProductList;
