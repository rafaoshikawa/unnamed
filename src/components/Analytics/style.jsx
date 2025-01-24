import styled from "styled-components";

export const Container = styled.div`
  color: #1a1a1a;
  background-color: #ffffff;
  border-radius: 30px;
  height: auto;
  margin-top: 1.5rem;
  padding: 1rem 4rem;
`;
export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  flex-wrap: wrap;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;



  .profile {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }

    img {
      width: 10%;
      height: auto;
      object-fit: contain;
      transition: 0.3s;
    }
  }
`;

export const ProfitCard = styled.div`
  background-color: #e4f0fc;
  width: 300px;
  height: auto;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
  }
`;
export const Values = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
`;
export const Tittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #484848;
  img {
    width: 42px;
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  span {
    color: #16c784;
  }
`;
export const Funds = styled.div`
  background-color: #D6EDD9;
  width: 200px;
  height: auto;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
  }
`;

export const Group = styled.div`
  background-color: #E5DEF0;
  width: 200px;
  height: auto;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
  }
`;
export const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
