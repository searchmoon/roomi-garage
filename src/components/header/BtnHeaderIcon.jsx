import styled from 'styled-components';

const BtnHeaderIcon = (props) => {
  return (
    <Button>
      {props.icon}
      <p>{props.title}</p>
    </Button>
  );
};

const Button = styled.button`
  .icon {
    height: 24px;
    width: 24px;
  }
`;
export default BtnHeaderIcon;
