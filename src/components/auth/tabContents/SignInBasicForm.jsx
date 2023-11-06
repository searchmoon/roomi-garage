import styled from 'styled-components';
import InputBottomLine from '../../common/inputs/InputBottomLine';
import BtnPlain from '../../common/buttons/BtnPlain';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../api/axios-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInBasicForm = ({ loginType }) => {
  const [failMsg, setFailMsg] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmitForm = async ({ username, password }) => {
    try {
      const res = await axiosInstance.post('accounts/login/', {
        username,
        password,
        login_type: loginType,
      });
      console.log(res);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
      if (res.status === 200) {
        console.log('로그인 완료');
        localStorage.setItem('user_type', res.data['user_type']);
        navigate('/');
      }
    } catch (error) {
      setFailMsg(error.response.data['FAIL_Message']);
      setTimeout(() => setFailMsg(null), 2000);
    }
    console.log(username, password);
    reset(); // 폼 필드 리셋
  };

  const userName = {
    required: '필수 항목입니다.',
  };

  const userPassword = {
    required: '필수 항목입니다.',
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자입니다.',
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
      {failMsg && <span className="error-msg">{failMsg}</span>}
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
