import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { commonColors } from '../../styles/commonColors';
import { DefaultLayout } from '../layouts/DefaultLayout';
import FilterInput from './FilterInput';
import BtnHeaderIcon from './BtnHeaderIcon';
import BtnPlain from '../common/buttons/BtnPlain';

function Header() {
  return (
    <HeaderStyle>
      <DefaultLayout>
        <WrapDiv>
          <LeftDiv>
            <Link to={'/'}>
              <p className={'main-title'}>ROOMi</p>
            </Link>
            <FilterInput />
          </LeftDiv>
          <RightDiv>
            <Link to={'/cart'}>
              <BtnHeaderIcon title={'장바구니'} icon={<FiShoppingCart className={'icon'} />} />
            </Link>
            <BtnHeaderIcon title={'마이페이지'} icon={<RxPerson className={'icon'} />} />
            <Link to={'/signIn'}>
              <BtnHeaderIcon title={'로그인'} icon={<RxPerson className={'icon'} />} />
            </Link>

            <BtnPlain icon={<FiShoppingBag className={'btn-icon'} />} padding={'11px 20px'}>
              판매자 센터
            </BtnPlain>
          </RightDiv>
        </WrapDiv>
      </DefaultLayout>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  .seller-header {
    display: flex;
    gap: 16px;
    .main-title {
      font-size: 26px;
    }
    span {
      font-size: 22px;
      align-self: flex-end;
    }
  }
`;
const WrapDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  .main-title {
    font-size: 34px;
    align-self: center;
    margin-right: 30px;
  }
`;
const RightDiv = styled.div`
  display: flex;
  column-gap: 8px;
  .active-icon {
    color: ${commonColors.primaryMain};
  }
  .btn-icon {
    width: 24px;
    height: 24px;
  }
`;
export default Header;
