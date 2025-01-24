import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: #1a1a1a;
  gap: 2rem;
  padding: 3rem 1rem;


  h1 {
    font-size: 2rem;
  }

  a {
    display: flex;
    gap: 20px;
    font-size: 1.1rem;
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
    width: 100%; /* Garante que o SVG preencha a largura disponível */
    height: auto; /* Mantém a proporção do SVG */
    object-fit: contain; /* Faz o SVG se ajustar ao container */
    transition: 0.3s;
  }

  .contactUs:hover {
    transform: scale(1.1);
  }
`;
export const ButtonSideBar = styled.a`
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease; /* Adiciona transição suave */

  &:hover {
    background-color: #535bf2; /* Cor de fundo ao passar o mouse */
  }
`;
