import styled from '@emotion/styled';
import { commonColors } from '../../../styles/commonColors';

const InputAroundLine = ({ type, placeholder, id, value, register, ...rest }) => {
  return (
    <InputAroundLineStyle
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      {...register}
      {...rest}
    ></InputAroundLineStyle>
  );
};
const InputAroundLineStyle = styled.input`
  padding: 17px 10px;
  border-radius: 6px;
  border: 1px solid ${commonColors.lightgray};
  width: 100%;
`;

export default InputAroundLine;
