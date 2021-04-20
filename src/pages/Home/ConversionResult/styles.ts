import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const BackButton = styled.button`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #D7E0EB;
  box-sizing: border-box;
  box-shadow: 0px 8px 5px -2px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 30px;
  cursor: pointer;
  outline: 0;

  span {
    color: #2E3742;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }
`;

export const BackIcon = styled.img`
  color: #8C9CAD;
  margin-right: 10px;
`;

export const ResultText = styled.p`
  color: #45505E;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 8px;
`;

export const ResultNumber = styled.p`
  color: #00AB63;
  font-size: 64px;
  line-height: 80px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const QuotationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #6E7E90;
    font-size: 14px;
    line-height: 32px;
  }
`;