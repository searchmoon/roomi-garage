import styled from 'styled-components';
import BtnPlain from '../../common/buttons/BtnPlain';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../api/axios-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputAroundLine from '../../common/inputs/InputAroundLine';
import { commonColors } from '../../../styles/commonColors';

const SignUpBasicForm = ({ loginType }) => {
  const [failMsg, setFailMsg] = useState({});
  const [usernameValue, setUsernameValue] = useState(null);
  const [companyRegiNumValue, setCompanyRegiNumValue] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmitForm = async ({
    username,
    password,
    password2,
    name,
    phone_number,
    company_registration_number,
    store_name,
  }) => {
    try {
      const res = await axiosInstance.post(
        `/accounts${loginType === 'BUYER' ? '/signup/' : '/signup_seller/'}`,
        {
          username,
          password,
          password2,
          name,
          phone_number,
          company_registration_number,
          store_name,
        },
      );
      console.log(res);
      if (res.status === 201) {
        console.log('회원가입 완료');
        navigate('/signIn');
        reset(); // 폼 필드 리셋
      }
    } catch (errors) {
      console.log(errors);
      const errorData = errors.response.data;
      setFailMsg(errorData);
      setTimeout(() => setFailMsg(null), 2000);
    }
    console.log('ddd');
  };
  const userName = {
    required: '필수 항목입니다.',
  };

  const password = {
    required: '필수 항목입니다.',
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자입니다.',
    },
  };
  const password2 = {
    required: '필수 항목입니다.',
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자입니다.',
    },
  };
  const phoneNumber = {
    required: '필수 항목입니다.',
    minLength: {
      value: 8,
      message: '휴대폰 번호는 최소 8자 이상이어야 합니다.',
    },
  };
  const name = {
    required: '필수 항목입니다.',
  };
  const companyRegistrationNumber = {
    required: '필수 항목입니다.',
  };
  const storeName = {
    required: '필수 항목입니다.',
  };
  // 아이디 중복확인, 사업자 등록번호 인증 확인 여부
  const handleDoubleCheck = async (e, name, value) => {
    e.preventDefault();
    try {
      const data = {};
      data[name] = value;
      const res = await axiosInstance.post(`/accounts/signup/valid/${name}/`, data);
      const resData = res.data;
      setErrorMsg({ message: resData[Object.keys(resData)[0]], success: true });
    } catch (error) {
      const errorData = error.response.data;
      setErrorMsg({ message: errorData[Object.keys(errorData)[0]] });
    }
    setTimeout(() => {
      setErrorMsg(null);
      setUsernameValue(null);
      setCompanyRegiNumValue(null);
    }, 2000);
  };

  //약관 동의 체크 여부
  const handleCheckInput = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmitForm)}>
      <label htmlFor="username">아이디</label>
      <div className={'one-line'}>
        <InputAroundLine
          id="username"
          type="text"
          name="username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
          register={register('username', userName)}
        />
        <BtnPlain onClick={(e) => handleDoubleCheck(e, 'username', usernameValue)} width={'32%'}>
          중복확인
        </BtnPlain>
      </div>
      {errors?.username && <span className="error-msg">{errors.username.message}</span>}
      {errorMsg && usernameValue && (
        <span className={errorMsg.success ? 'success-msg' : 'error-msg'}>{errorMsg.message}</span>
      )}
      {failMsg && failMsg.username ? (
        <span className="error-msg">{failMsg.username[0]}</span>
      ) : null}
      <label htmlFor="password">비밀번호</label>
      <InputAroundLine
        id="password"
        type="password"
        name="password"
        register={register('password', password)}
      />
      {errors?.password && <span className="error-msg">{errors.password.message}</span>}
      <label htmlFor="password2">비밀번호 확인</label>
      <InputAroundLine
        id="password2"
        type="password"
        name="password2"
        register={register('password2', password2)}
      />
      {errors?.password2 && <span className="error-msg">{errors.password2.message}</span>}
      {failMsg && failMsg.password ? (
        <span className="error-msg">{failMsg.password[0]}</span>
      ) : null}
      <label htmlFor="name">이름</label>
      <InputAroundLine id="name" type="text" name="name" register={register('name', name)} />
      {errors?.name && <span className="error-msg">{errors.name.message}</span>}
      <label htmlFor="phone_number">휴대폰 번호</label>
      <InputAroundLine
        id="phone_number"
        type="number"
        name="phone_number"
        register={register('phone_number', phoneNumber)}
      />
      {errors?.phone_number && <span className="error-msg">{errors.phone_number.message}</span>}
      {failMsg && failMsg.phone_number ? (
        <span className="error-msg">{failMsg.phone_number[0]}</span>
      ) : null}
      {loginType === 'SELLER' && (
        <>
          <label htmlFor="company_registration_number">사업자 등록번호</label>
          <div className={'one-line'}>
            <InputAroundLine
              id="company_registration_number"
              type="number"
              name="company_registration_number"
              value={companyRegiNumValue}
              onChange={(e) => setCompanyRegiNumValue(e.target.value)}
              register={register('company_registration_number', companyRegistrationNumber)}
            />
            <BtnPlain
              onClick={(e) =>
                handleDoubleCheck(e, 'company_registration_number', companyRegiNumValue)
              }
              width={'32%'}
            >
              인증
            </BtnPlain>
          </div>
          {errors?.company_registration_number && (
            <span className="error-msg">{errors.company_registration_number.message}</span>
          )}
          {errorMsg && companyRegiNumValue && (
            <span className={errorMsg.success ? 'success-msg' : 'error-msg'}>
              {errorMsg.message}
            </span>
          )}

          <label htmlFor="store_name">스토어 이름</label>
          <InputAroundLine
            id="store_name"
            type="text"
            name="store_name"
            register={register('store_name', storeName)}
          />
          {errors?.store_name && <span className="error-msg">{errors.store_name.message}</span>}
        </>
      )}
      <div className={'terms'}>
        <input id={'terms'} type={'checkbox'} onClick={handleCheckInput} />
        <label htmlFor={'terms'} className={'terms-label'}>
          루미샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
        </label>
      </div>
      <BtnPlain disabled={disabled} type="submit" width={'100%'}>
        가입하기
      </BtnPlain>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .error-msg,
  .success-msg {
    margin-top: 6px;
  }
  label {
    margin: 12px 0 10px;
    color: ${commonColors.gray};
  }
  .terms-label {
    margin: 0;
  }
  .one-line {
    display: flex;
    column-gap: 12px;
  }
  .terms {
    display: flex;
    margin: 48px 0 34px;
    input {
      margin: 1px 8px 3px 4px;
      align-self: flex-start;
      border: 1px solid ${commonColors.gray};
      background-color: ${commonColors.gray};
      color: ${commonColors.gray};
    }
    span {
      color: ${commonColors.dimgray};
      line-height: 1.2;
    }
  }
`;

export default SignUpBasicForm;
