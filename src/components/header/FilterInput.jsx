import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { commonColors } from '../../styles/commonColors';

const FilterInput = () => {
  return (
    <Form>
      <input type={'text'} placeholder={'상품을 검색해보세요!'} />
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
export default FilterInput;
