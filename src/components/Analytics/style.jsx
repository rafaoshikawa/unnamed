import styled from "styled-components";

export const Container = styled.div`
  padding: 46px;

  .license {
    background-color: #1d1d29;
    max-width: max-content;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;

    span {
      color: #0ecb81;
    }
  }
  .progress {
    height: 15px;
    background-color: #777;
    position: relative;
    width: 400px; /* Define o comprimento da barra de progresso */
    border-radius: 10px;
    margin-top: 10px;
  }

  .progress .progress-bar {
    position: absolute;
    height: 100%;
    background-color: #0ecb81;
    animation: progress-animation 6s forwards; /* Usa 'forwards' para manter o estado final */
    border-radius: 10px;
  }

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    30% {
      width: 30%;
    }
    100% {
      width: 30%;
    }
  }

  .containerHeader {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    justify-items: center;
    margin-top: 20px;
    gap: 20px;
  }
`;

export const LicenseCard = styled.div`
  background-color: #1d1d29;
  height: max-content;
  max-width: max-content;
  padding: 20px;
  border-radius: 10px;

  .tittleLicense {
    font-size: 1.5rem;
  }

  .licenseValue {
    font-size: 2.5rem;
    font-weight: 500;
  }
  .tittleProgress {
    color: #9f9999;
  }
`;

export const Card = styled.div`
  background-color: #1d1d29;
  height: 140px;
  width: 230px;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  .tittle {
    font-size: 1.3rem;
  }
  .value {
    font-size: 2rem;
    font-weight: 500;
  }
  .percentage {
    display: flex;
    align-items: center;
    color: #0ecb81;
  }

  .safety {
    color: #9f9999;
    margin-top: 10px;
  }
`;

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 20px;

  .btc img {
    border-radius: 10px;
    width: 450px;
    height: 380px;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ContainerHistory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .historyTittle {
    display: grid;
    grid-template-columns: 4fr 0.5fr;
    align-items: center;
    margin-top: 24px;

    h2 {
      font-size: 1.8rem;
    }
    .filter {
      display: flex;
      align-items: center;
      padding: 5px 20px;
      border: 2px solid #d9d9db;
      border-radius: 20px;
      cursor: pointer;
    }
    .transactions{
      display: grid;
    grid-template-columns: 4fr 0.5fr;
    align-items: center;
    margin-top: 24px;
    }
  }
`;

export const Transactions = styled.div`
  display: grid;
  grid-template-columns: 4fr 0.5fr;
  border: 2px solid #d9d9db;
  border-radius: 20px;
`;
