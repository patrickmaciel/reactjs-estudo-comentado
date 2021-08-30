// da forma abaixo, ele obriga a pessoa importar como App e não como qualquer nome, exemplo
// import App from './App' e não import Batata from './App' (que funciona caso tenha o export default)
export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

// quem define o nome do componente não é quem esta exportando, e sim quem esta importando
// export default App;
