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

  const getSearchedProducts = async () => {
    try {
      const searchedItem = await axiosInstance.get(
        `/products/${searchItem ? `?search=${searchItem}` : ''}`,
      );
      setSearchedProducts(searchedItem.data.results);
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
        <WrapProducts>
          {searchedProducts.length > 0 ? (
            searchedProducts.map((item) => <ProductList key={item.products_id} item={item} />)
          ) : (
            <div>검색된 아이템이 없습니다</div>
          )}
        </WrapProducts>
      </DefaultLayout>
    </div>
  );
};

const WrapProducts = styled.div`
  margin-top: 80px;
  display: grid;
  // justify-content: center;
  // align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 6%;
  grid-row-gap: 78px;
`;

export default Search;
