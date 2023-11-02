import styled from 'styled-components';
import { useState } from 'react';
import { commonColors } from '../../../styles/commonColors';

const AuthTab = ({ tabName, children }) => {
  const [userType, setUserType] = useState('BUYER');

  const handleSelectTabName = () => {
    if (userType === 'BUYER') {
      setUserType('SELLER');
    } else {
      setUserType('BUYER');
    }
  };

  return (
    <TabStyle>
      <div className="bloc-tabs">
        <button
          id={'BUYER'}
          className={userType === 'BUYER' ? 'tabs active-tabs' : 'tabs'}
          onClick={handleSelectTabName}
        >
          구매회원{tabName}
        </button>
        <button
          id={'SELLER'}
          className={userType === 'SELLER' ? 'tabs active-tabs' : 'tabs'}
          onClick={handleSelectTabName}
        >
          판매회원{tabName}
        </button>
      </div>
      <div className="content-tabs">
        <div className={'content'}>
          {children}
        </div>
      </div>
    </TabStyle>
  );
};

const TabStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 550px;
  margin: auto 0;
  word-break: break-all;
  .bloc-tabs {
    display: flex;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: ${commonColors.brightGray};
    border: 1px solid ${commonColors.whiteGray};
    border-collapse: collapse;
    border-radius: 10px 10px 0 0;
    box-sizing: content-box;
    position: relative;
    outline: none;
    font-size: 16px;
  }

  .active-tabs {
    background: white;
    border-bottom: none;
  }
  button {
    border: none;
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    background: white;
    padding: 35px;
    width: 100%;
    min-height: 290px;
    height: 100%;
    border: 1px solid ${commonColors.whiteGray};
    border-radius: 0 0 10px 10px;
    border-top: none;
    h2 {
      padding: 0px 0 5px 0px;
    }
    p {
      width: 100%;
    }
  }
`;

export default AuthTab;
