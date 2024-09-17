import { useState } from 'react';

const App = () => {

  const options = ["Piedra", "Papel", "Tijera"];

  const Game = () => {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");

    const handleUserChoice = (choice) => {
      setUserChoice(choice);
      const computer = generateComputerChoice();
      setComputerChoice(computer);
      determineWinner(choice, computer);
    };

    const generateComputerChoice = () => {
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];
    };

    const determineWinner = (user, computer) => {
      if (user === computer) {
        setResult("Empate");
      } else if (
        (user === "Piedra" && computer === "Tijera") ||
        (user === "Papel" && computer === "Piedra") ||
        (user === "Tijera" && computer === "Papel")
      ) {
        setResult("Ganaste");
      } else {
        setResult("Perdiste");
      }
    };

    const title = "Piedra, Papel o Tijera";
    const headingStyle = { textAlign: 'center' };

    return (
      <div>
        <h1 style={headingStyle}>{title}</h1>

        <div>
          <button onClick={() => handleUserChoice("Piedra")}>Piedra</button>
          <button onClick={() => handleUserChoice("Papel")}>Papel</button>
          <button onClick={() => handleUserChoice("Tijera")}>Tijera</button>
        </div>

        <h2>Tu elección: {userChoice}</h2>
        <h2>Elección del computador: {computerChoice}</h2>
        <h2>Resultado: {result}</h2>
      </div>
    );
  };

  // Renderizar el componente Game dentro de App
  return (
    <div>
      <Game />
    </div>
  );
};

export default App;