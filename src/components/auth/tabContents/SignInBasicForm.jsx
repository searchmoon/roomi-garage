// import BtnPlain from '../../common/buttons/BtnPlain';
import styled from '@emotion/styled';
import InputBottomLine from '../../common/inputs/InputBottomLine';
import BtnPlain from '../../common/buttons/BtnPlain';
import { useForm } from 'react-hook-form';

const SignInBasicForm = () => {
  // username, password 이외에도 login_type이 필요함.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmitForm = ({ username, password }) => {
    console.log(username, password);
    reset(); // 폼 필드 리셋
  };

  const userName = {
    required: '필수 필드입니다.',
  };

  const userPassword = {
    required: '필수 필드입니다.',
    minLength: {
      value: 6,
      message: '최소 6자입니다.',
    },
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <InputBottomLine
          type="text"
          name="username"
          placeholder="아이디"
          register={register('username', userName)}
        />
        {errors?.username && <span className="error-msg">{errors.username.message}</span>}
      </div>
      <div>
        <InputBottomLine
          type="password"
          name="password"
          placeholder={'비밀번호'}
          register={register('password', userPassword)}
        />
        {errors?.password && <span className="error-msg">{errors.password.message}</span>}
      </div>
      <BtnPlain type="submit" width={'100%'}>
        로그인
      </BtnPlain>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  min-height: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .login-btn {
    margin-top: 50px;
  }
`;

export default SignInBasicForm;
