import { useState } from 'react';
import styled from '@emotion/styled';
import { commonColors } from '../../styles/commonColors';

const ItemInfoTabs = ({ info }) => {
  const [toggleState, setToggleState] = useState(1);
  const tabNames = ['상품정보', '리뷰', 'Q&A', '주문정보'];
  const tabContents = [info, '리뷰 내용', 'Q&A 내용', '주문정보 내용'];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <ItemInfoTabsStyle>
      <div className="bloc-tabs">
        {tabNames.map((items, idx) => (
          <button
            key={idx}
            className={toggleState === idx + 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(idx + 1)}
          >
            {items}
          </button>
        ))}
      </div>
      <div className="content-tabs">
        {tabContents.map((cont, idx) => (
          <div
            key={idx}
            className={toggleState === idx + 1 ? 'content  active-content' : 'content'}
          >
            {cont}
          </div>
        ))}
      </div>
    </ItemInfoTabsStyle>
  );
};

const ItemInfoTabsStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 140px;
  word-break: break-all;
  .bloc-tabs {
    display: flex;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 100%;
    border-bottom: 3px solid ${commonColors.whiteGray};
    border-collapse: collapse;
    border-radius: 10px 10px 0 0;
    box-sizing: content-box;
    position: relative;
    outline: none;
    font-size: 16px;
    &.active-tabs {
      color: ${commonColors.primaryMain};
      border-bottom: 3px solid ${commonColors.primaryMain};
    }
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
    display: none;
    border-top: none;
    h2 {
      padding: 0px 0 5px 0px;
    }
    p {
      width: 100%;
    }
  }
  .active-content {
    display: block;
  }
`;

export default ItemInfoTabs;
