import styled from 'styled-components';
import SignInBasicForm from '../components/auth/tabContents/SignInBasicForm';
import AuthTab from '../components/common/tabs/AuthTab';

const SignUp = () => {
  return (
    <SignUpStyle>
      <p className={'main-title'}>ROOMi</p>
      <AuthTab>
        <SignInBasicForm />
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
