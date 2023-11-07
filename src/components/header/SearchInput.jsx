import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { commonColors } from '../../styles/commonColors';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchItem } from '../../features/productsSlice';
import { useEffect, useRef } from 'react';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.products.searchItem);
  const inputRef = useRef(null);

  // search 경로로 갔을 경우에, input에 focus 주기
  useEffect(() => {
    if (window.location.pathname === '/search') {
      inputRef.current.focus();
    } else dispatch(getSearchItem(''));
  }, []);

  const handleChangeInput = (e) => {
    dispatch(getSearchItem(e.target.value));
  };

  const handleClick = () => {
    // dispatch(getSearchItem(''));
  };
  
  return (
    <Form>
      <input
        onChange={handleChangeInput}
        value={searchItem}
        ref={inputRef}
        type={'text'}
        placeholder={'상품을 검색해보세요!'}
      />
      <button onClick={handleClick}>
        <FiSearch className={'search-icon'} />
      </button>
    </Form>
  );
};

const Form = styled.form`
  border: 2px solid ${commonColors.primaryMain};
  border-radius: 50px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 6px 22px;
  input {
    border: none;
    height: 30px;
    width: 300px;
    outline: none;
  }
  button {
    .search-icon {
      color: ${commonColors.primaryMain};
      font-weight: 700;
      font-size: 20px;
      align-self: center;
    }
  }
`;
export default SearchInput;
