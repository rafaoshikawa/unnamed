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
`;


export const LicenseCard = styled.div`
  background-color: #1d1d29;
  max-width: max-content;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;

  .tittleLicense{
    font-size: 1.5rem;
  }

  .licenseValue{
    font-size: 2.5rem;
    font-weight: 500;
  }
  .tittleProgress{
    color: #9f9999;
  }
`;

export const Card = styled.div`
  display: grid;
  background-color: #1d1d29;
  width: 200px;
  height: auto;
  border-radius: 10px;
  padding: 24px;
  margin-top: 32px;
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
`;


export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .btc{

   max-width: max-content;
   border: 8px solid #1d1d29;
   border-radius: 10px;

  }


`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

