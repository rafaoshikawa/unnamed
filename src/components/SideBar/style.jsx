import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: #1d1d29;
  gap: 16px;
  padding: 3rem 1rem;

  .flags {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .flags img {
    width: 24px; /* Define a largura fixa */
    height: 24px; /* Define a altura fixa */
    object-fit: cover; /* Garante que a imagem seja cortada proporcionalmente se necessário */
    border-radius: 50%; /* Se quiser deixar as bandeiras redondas */
  }

  h1 {
    font-size: 1.8rem;
  }

  a {
    display: flex;
    gap: 20px;
    font-size: 1rem;
  }

  .settings {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    gap: 2rem;
    margin-top: 10px;
    border-top: 1px solid #ffffff;

    .settingsStyle {
      margin-top: 1rem;
    }
  }

  .contactUs {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: 0.3s;
  }

  .contactUs:hover {
    transform: scale(1.1);
  }
`;
export const ButtonSideBar = styled.a`
  padding: 10px;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #535bf2;
  }
`;
