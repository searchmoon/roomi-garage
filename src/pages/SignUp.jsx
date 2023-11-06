import styled from 'styled-components';
import AuthTab from '../components/common/tabs/AuthTab';
import SignUpBasicForm from '../components/auth/tabContents/SignUpBasicForm';

const SignUp = () => {
  return (
    <SignUpStyle>
      <p className={'main-title'}>ROOMi</p>
      <AuthTab tabName={'가입'}>
        <SignUpBasicForm />
      </AuthTab>
    </SignUpStyle>
  );
};

const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .main-title {
    font-size: 34px;
    margin-bottom: 70px;
  }
`;
export default SignUp;
