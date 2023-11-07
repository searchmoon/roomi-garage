import { useEffect, useState } from 'react';
import AutoCarousel from '../components/main/AutoCarousel';
import ProductList from '../components/main/ProductList';
import { axiosInstance } from '../api/axios-api';
import styled from 'styled-components';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { useInView } from 'react-intersection-observer';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);

  const infinityScroll = async () => {
    const listItem = await axiosInstance.get(`/products/?page=${page}`);
    try {
      setProducts([...products, ...listItem.data.results]);
      setPage((prev) => prev + 1);
      console.log(products);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    if (inView) {
      infinityScroll();
    }
  }, [inView]);

  return (
    <div>
      <AutoCarousel />
      <DefaultLayout>
        <WrapProducts>
          {products.map((item) => (
            <ProductList key={item.product_id} item={item} />
          ))}
        </WrapProducts>
        <div ref={ref}></div>
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
