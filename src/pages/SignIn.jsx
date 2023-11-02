import styled from 'styled-components';
import SignInBasicForm from '../components/auth/tabContents/SignInBasicForm';
import AuthTab from '../components/common/tabs/AuthTab';
import { commonColors } from '../styles/commonColors';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <SignInStyle>
      <p className={'main-title'}>ROOMi</p>

      <AuthTab>
        <SignInBasicForm />
      </AuthTab>
      <div className={'wrap-btn'}>
        <Link to={'/signUp'}>회원가입</Link>
        <Link to={'/signIn'}>비밀번호 찾기</Link>
      </div>
    </SignInStyle>
  );
};

const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .main-title {
    font-size: 34px;
    margin-bottom: 70px;
  }
  .wrap-btn {
    margin-top: 30px;
    display: flex;
    max-width: 200px;
    width: 100%;
    justify-content: space-between;
    a {
      color: ${commonColors.dimgray};
      padding: 0 10px;
      &:first-of-type:after {
        content: '';
        display: block;
        width: 1px;
        height: 14px;
        float: right;
        margin-right: -14px;
        background-color: ${commonColors.gray};
        cursor: none;
      }
    }
  }
`;
export default SignIn;
