// import BtnPlain from '../../common/buttons/BtnPlain';
import styled from '@emotion/styled';
import InputBottomLine from '../../common/inputs/InputBottomLine';
import BtnPlain from '../../common/buttons/BtnPlain';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignInBasicForm = () => {
  // username, password 이외에도 login_type이 필요함.

  // const initialValue = {
  //   username: '',
  //   password: '',
  // };
  // const [inputValue, setInputValue] = useState(initialValue);

  // const handleChangeInput = (e) => {
  //   setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  // };

  const {
    register,
    handleSubmit,
    getDataForm,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  // const onSubmit = (data) => {
  //   console.log(data.username, data.password);
  // };

  const onSubmitForm = ({ email, password }) => {
    getDataForm(email, password);
    reset();
  };

  const userEmail = {
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
      {/* <div>
        <InputBottomLine
          onChange={handleChangeInpuserPasswordut}
          value={inputValue.username}
          type={'text'}
          name={'username'}
          placeholder={'아이디'}
          {...register('username', { required: '사용자 이름을 입력해주세요' })}
        />
        {userErrorMsg && <p className={'error-msg'}>{userErrorMsg}</p>}
        <InputBottomLine
          onChange={handleChangeInput}
          value={inputValue.password}
          type={'password'}
          name={'password'}
          placeholder={'비밀번호'}
          {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
        {pwdErrorMsg && <p className={' error-msg'}>{pwdErrorMsg}</p>}
      </div> */}
      {/* {errors.password && <p className="error-msg">{errors.password.message}</p>} */}
      {/* {errorMsg && <p className={'error-msg'}>{errorMsg}</p>} */}
      {/* <BtnPlain
        type="submit"
        // disabled={disabled}
        width={'100%'}
      >
        로그인
      </BtnPlain> */}

      <div>
        <input type="email" placeholder="E-mail" {...register('email', userEmail)} />
        {errors?.email && (
          <div>
            <span>{errors.email.message}</span>
          </div>
        )}
      </div>
      <div>
        <input type="password" placeholder="Password" {...register('password', userPassword)} />
        {errors?.password && (
          <div>
            <span>{errors.password.message}</span>
          </div>
        )}
      </div>
      <button type="submit">로그인</button>
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
