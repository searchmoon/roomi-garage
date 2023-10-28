import { useEffect, useState } from 'react';
import AutoCarousel from '../components/main/AutoCarousel';
import ProductList from '../components/main/ProductList';
import { axiosInstance } from '../api/axios-api';
import styled from 'styled-components';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

const Main = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const listItem = await axiosInstance.get('products');

    try {
      setProducts(listItem.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <AutoCarousel />
      <DefaultLayout>
        <WrapProducts>
          {products.map((item) => (
            <ProductList key={item.product_id} item={item} />
          ))}
        </WrapProducts>
      </DefaultLayout>
    </div>
  );
};

const WrapProducts = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 6%;
  grid-row-gap: 78px;
`;

export default Main;
