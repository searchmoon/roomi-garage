import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { useSelector } from 'react-redux';
import { axiosInstance } from '../api/axios-api';
import ProductList from '../components/main/ProductList';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import styled from 'styled-components';

const Search = () => {
  const searchItem = useSelector((state) => state.products.searchItem);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSearchedProducts = async () => {
    try {
      const searchedItem = await axiosInstance.get(
        `/products/${searchItem ? `?search=${searchItem}` : ''}`,
      );
      setSearchedProducts(searchedItem.data.results);
      setIsLoading(false); // 데이터 로드가 완료되면 isLoading을 false로
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchedProducts();
  }, [searchItem]);

  return (
    <div>
      <Header />
      <DefaultLayout>
        {isLoading ? (
          <Div>Loading...</Div>
        ) : searchedProducts.length > 0 ? (
          <WrapProducts>
            {searchedProducts.map((item) => (
              <ProductList key={item.products_id} item={item} />
            ))}
          </WrapProducts>
        ) : (
          <Div>검색된 아이템이 없습니다.</Div>
        )}
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
const Div = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export default Search;
