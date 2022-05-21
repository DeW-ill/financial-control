import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 20px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }

    svg {
      display: none;
    }
  }
`;

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    color: #0073b9;
    text-align: end;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const HeaderValues = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
