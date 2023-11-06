import styled from 'styled-components';

const BtnHeaderIcon = ({ icon, title, onClick }) => {
  return (
    <Button onClick={onClick}>
      {icon}
      <p>{title}</p>
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
