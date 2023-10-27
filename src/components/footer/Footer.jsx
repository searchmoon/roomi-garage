import { Link } from 'react-router-dom';
import insta from '../../assets/img/icon-insta.svg';
import facebook from '../../assets/img/icon-facebook.svg';
import youtube from '../../assets/img/icon-youtube.svg';
import styled from 'styled-components';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { commonColors } from '../../styles/commonColors';

const Footer = () => {
  return (
    <DefaultLayout>
      <WrapLink>
        <div className="link-box">
          <Link to="/">루미샵 소개</Link> |<Link to="/">이용약관</Link> |
          <Link to="/" className="bold">
            개인정보처리방침
          </Link>
          |<Link to="/">전자금융거래약관</Link> |<Link to="/">청소년보호정책</Link> |
          <Link to="/">제휴문의</Link>
        </div>
        <div className="sns-box">
          <Link to="/">
            <img src={insta} alt="인스타그램" />
          </Link>
          <Link to="/">
            <img src={facebook} alt="페이스북" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="유튜브" />
          </Link>
        </div>
      </WrapLink>
      <InfoBox>
        <p>(주)ROOMI GARAGE</p>
        <p>서울시 동대문구 제기동</p>
        <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
        <p>대표 : 문루미</p>
      </InfoBox>
    </DefaultLayout>
  );
};

const WrapLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${commonColors.darkgray};
  padding-bottom: 20px;
  padding-top: 50px;
  .link-box {
    display: flex;
    gap: 28px;

    .bold {
      font-weight: 700;
    }
  }
  .sns-box {
    display: flex;
    gap: 14px;
  }
`;

const InfoBox = styled.div`
  margin-top: 30px;
  p {
    color: ${commonColors.dimgray};
    margin-bottom: 6px;
  }
`;

export default Footer;
