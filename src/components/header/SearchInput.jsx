import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { commonColors } from '../../styles/commonColors';
import { useDispatch } from 'react-redux';
import { getSearchItem } from '../../features/productsSlice';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const SearchInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  // search 경로로 갔을 경우에, input에 focus 주기
  useEffect(() => {
    if (window.location.pathname === '/search') {
      inputRef.current.focus();
    } else dispatch(getSearchItem(''));
  }, []);

  const handleChangeInput = (e) => {
    debounceFunc(e.target.value);
    setInputValue(e.target.value);
  };
  // useDebounce로 delay 시간 이상의 입력이 일어나지 않을때에만 dispatch 함수를 실행하여,
  // Search 페이지에서, 검색창의 input이 바뀔때마다의 api 호출을 막아주기
  const debounceFunc = useDebounce((value) => dispatch(getSearchItem(value)), 300);

  return (
    <Form>
      <input
        onChange={handleChangeInput}
        value={inputValue}
        ref={inputRef}
        type={'text'}
        placeholder={'상품을 검색해보세요!'}
      />
      <button>
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
