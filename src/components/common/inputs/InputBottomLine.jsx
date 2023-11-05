import styled from '@emotion/styled';
import { commonColors } from '../../../styles/commonColors';

const InputBottomLine = ({ onChange, value, type, placeholder, name, register, ...rest }) => {
  return (
    <InputBottomLineStyle
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      {...register}
      {...rest}
    ></InputBottomLineStyle>
  );
};

const InputBottomLineStyle = styled.input`
  padding: 20px 10px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${commonColors.lightgray};
  width: 100%;
  margin-bottom: 6px;
`;

export default InputBottomLine;
