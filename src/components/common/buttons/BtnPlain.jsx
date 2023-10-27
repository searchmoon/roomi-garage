import styled from '@emotion/styled';
import { commonColors } from '../../../styles/commonColors';

// 쓰는 properties: width, padding, disabled, color onClick, icon 등
const BtnPlain = (props) => {
  return (
    <Button {...props}>
      {props.icon && <div className={'icon-box'}>{props.icon}</div>}
      <p className={'txt'}>{props.children}</p>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : '15px 20px')};
  background-color: ${(props) =>
    props.disabled ? commonColors.disabled : props.color ? props.color : commonColors.primaryMain};
  border-radius: 5px;
  width: ${(props) => props.width};
  .icon-box {
    color: ${commonColors.white};
    margin-right: 10px;
  }
  .txt {
    color: ${commonColors.white};
    font-weight: 600;
  }
`;

export default BtnPlain;
