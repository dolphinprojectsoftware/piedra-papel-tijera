import { useState } from 'react';
import '../src/App.css'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


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

        <div className='contenedor-btns'>
          <button className='btn-opcion-piedra' onClick={() => handleUserChoice("Piedra")}>Piedra🪨</button>
          <button className='btn-opcion-papel' onClick={() => handleUserChoice("Papel")}>Papel📋</button>
          <button className='btn-opcion-tijera' onClick={() => handleUserChoice("Tijera")}>Tijera✂️</button>
        </div>
        <div className='text-eleccion'>
          <Card className='m-3' style={{
                backgroundColor: userChoice === "Piedra" ? "green":
                       userChoice === "Papel" ? "purple":
                       userChoice === "Tijera" ? "blue": "black"        
              }}>
            <Card.Body>
              <h2 style={{color:'white'}}>Tu elección: {userChoice}</h2>
            </Card.Body>
          </Card>
          <Card style={{
                backgroundColor: computerChoice === "Piedra" ? "green":
                       computerChoice === "Papel" ? "purple":
                       computerChoice === "Tijera" ? "blue": "black"        
              }}>
            <Card.Body>
              <h2 style={{color:'white'}}>Elección del computador: {computerChoice}</h2>
            </Card.Body>
          </Card>
        </div>
        <div className='text-resultado'>
          <Card className='m-3' style={{
            backgroundColor: result === "Ganaste" ? "green" :
                             result === "Perdiste" ? "red" : "orange"
          }}>
            <Card.Body>
              <h2 style={{color: 'white'}}>Resultado: {result}</h2>
            </Card.Body>
          </Card>
        </div>
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