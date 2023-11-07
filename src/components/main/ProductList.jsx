import styled from 'styled-components';
import { commonColors } from '../../styles/commonColors';
import transformComma from '../../utils/transformComma';
import { Link } from 'react-router-dom';

const ProductList = ({ item }) => {
  return (
    <Link
      to={`/products/${item.product_id}`}
      key={item.product_id}
      state={{
        id: item.product_id,
        image: item.image,
        price: item.price,
        storeName: item.store_name,
        productName: item.product_name,
        info: item.product_info,
        stock: item.stock,
      }}
    >
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
    </Link>
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
