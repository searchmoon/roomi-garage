import styled from '@emotion/styled';

export const DefaultLayout = styled.div`
  box-sizing: border-box;
  max-width: ${(props) => props.maxWidth || 1280}px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${(props) => props.maxWidth || 1280 + 60}px) {
    padding: 0 32px;
  }
  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;
