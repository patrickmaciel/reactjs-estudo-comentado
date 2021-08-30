import { Header } from "./components/Header";

// basta importar o arquivo css normalmente, caso não use styled-components
// import './App.css';

import { GlobalStyle } from "./styles/global";

// import styled from 'styled-components';
// const Title = styled.h1`
//     color: #8257e6;
//     button {
//         background: #8257e6;
//     }
// `;

// da forma abaixo, ele obriga a pessoa importar como App e não como qualquer nome, exemplo
// import App from './App' e não import Batata from './App' (que funciona caso tenha o export default)
export function App() {
  return (
    <>
      <Header></Header>
      <GlobalStyle />
      <h1>Relou uordi</h1>
    </>
  );
}

// quem define o nome do componente não é quem esta exportando, e sim quem esta importando
// export default App;
